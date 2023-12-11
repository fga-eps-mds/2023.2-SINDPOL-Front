import React, { useEffect, useState } from "react"
import Modal from "../../components/Modal/modal"
import { Box, Divider, Heading, IconButton, Text, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { styles, INPUT_HIDDEN, ICON, LABEL_ICON, TABLE, TABLE_MOTIVO } from "./styles"
import GenericInput from "../../components/GenericInput"
import GenericButton from "../../components/GenericButton"
import { fetchAssociates, selectAssociates } from "../../app/store/associate/associateSlice"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { IconEye, IconMenu2, IconFileUpload } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import Papa from "papaparse";
import { normalizeAndCreateObject, errosData } from "./normalize"
import { createAssociate } from "../../app/store/associate/associateSlice"
import { AxiosError } from 'axios';

export default function Associates(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = React.useState<boolean>(false)
  const [dados, setDados] = React.useState<any>([])
  const [dadosError, setDadosError] = React.useState<any>([])

  const [associatesStatus, setAssociatesStatus] = useState<AssociateStatus[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchAssociates()).then((res) => {
      setAssociates(res.payload)
    })
  }, [])

  interface AssociateStatus {
    status: string;
    motivo: string;
  }

  const handleEyeClick = (associateId: string) => {
    console.log("ID do associado:", associateId);
    navigate(`/update/${associateId}`);
  }

  const importAssociates = async (submitFunction: Function) => {
    setOpenModal(false);
    const statusArray: AssociateStatus[] = [];

    for (let i = 0; i < dados.length; i++) {
      const dado = dados[i];
      const erro = dadosError[i];
      let status = 'aprovado';
      let motivo = 'Submissão bem-sucedida';

      if (erro.length > 0) {
        status = 'reprovado';
        motivo = `Campos inválidos: ${erro.join(', ')}`;
      } else {
        try {
          await submitFunction(dado);
        } catch (error: any) {
          status = 'reprovado';
          motivo = error.message || 'Erro desconhecido na submissão';
        }
      }

      statusArray.push({ status, motivo });
    }

    setAssociatesStatus(statusArray);
    setOpenModal2(true);
  };

  const readAssociatedData = (file: File, submitFunction: Function) => {
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        const normalizedData = results.data.map((row: any) => {
          return normalizeAndCreateObject(row);
        });

        const errors = results.data.map((row: any) => {
          return errosData(row);
        });

        setDadosError(errors)
        setDados(normalizedData);
      },
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file.name);
      readAssociatedData(file, submitForm);
    } else {
      setSelectedFile(null);
    }
  };

  const submitForm = async (associate: any) => {
    try {
      const res = await dispatch(createAssociate(associate));
      console.log(res);

      if (res.payload.response && res.payload.response.data && res.payload.response.data.detail) {
        throw new Error(res.payload.response.data.detail.toString()); // Convertendo para string, se necessário
      } else {
        return 'Aprovado';
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || 'Reprovado');
      } else {
        throw new Error('Reprovado');
      }
    }
  };

  return (
    <Box id="home-page-container" sx={styles.boxContainer}>
      <Box id="home-page-box" sx={styles.box}>
        <Box id="home-page-box-header" sx={styles.boxHeader}>
          <Box sx={styles.boxHeaderTop}>
            <Heading id="associates-page-box-header-title" sx={styles.boxHeaderTitle}> Sindicalizados </Heading>
          </Box>
          <Box sx={styles.boxHeaderMiddle}>
            <GenericInput
              id="associates-page-box-header-input"
              placeholder="Pesquisar por Nome ou Mátricula"
              type="text"
              name="search"
              value=""
              error={{ hasError: false, message: "" }}
              sxInput={{ border: 'none', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '400px' }}
              onChange={() => { }}
            />
            <GenericButton
              id="associates-page-box-header-add-button"
              text="Cadastrar"
              onClick={() => {
                navigate("/filiation")
              }}
              sx={{ marginX: "12px" }}
            />
            <GenericButton
              id="associates-page-box-header-import-button"
              text="Importar"
              onClick={() => setOpenModal(true)}
              sx={{ marginX: "12px" }}
            />
          </Box>
        </Box>

        <Box id="associates-page-box-body" sx={styles.boxList}>
          {/* Tabela de associados */}
          {associates && associates.length > 0 && associates.map((associate: any) => {
            return (
              <>
                <Box sx={styles.boxItem}>
                  <Box>
                    <Text align={"left"} fontWeight={'bold'}>{associate.fullName}</Text>
                    <Text align={"left"}>Mat.: {associate.registration} | CPF: {associate.cpf} | {associate.birthDate}</Text>
                  </Box>
                  <Box display={"flex"}>
                    <IconButton
                      aria-label="Ver sindicalizado"
                      icon={<IconEye />}
                      onClick={() => { handleEyeClick(associate.id) }}
                      color={"#734A00"}
                    />
                    <Divider orientation="vertical" color={"#734A00"} />

                    <IconButton
                      aria-label="mais opções"
                      icon={<IconMenu2 />}
                      onClick={() => { }}
                      color={"#734A00"}
                    />
                  </Box>
                </Box>
              </>
            )
          })}
        </Box>
        <Modal Title="Importar Sindicalizados" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <Box>
            <Box id="modal-body" sx={styles.modalBox}>
              <label htmlFor="fileInput" style={LABEL_ICON}>
                <IconFileUpload style={ICON} />
                <input type="file" id="fileInput" style={INPUT_HIDDEN} accept=".csv" onChange={handleFileChange} />
              </label>
              {selectedFile ? (
                <Text sx={styles.textImport}>{selectedFile}</Text>
              ) : (
                <Text sx={styles.textImport}>&nbsp;Escolha um arquivo csv ou solte-o aqui</Text>
              )}
            </Box>
            <GenericButton
              sx={styles.associatImportButtom}
              text="Importar sindicalizados"
              onClick={() => importAssociates(submitForm)}>
            </GenericButton>
          </Box>
        </Modal>
        <Box>
          <Modal
            Title="Importar Sindicalizados"
            isOpen={openModal2}
            setModalOpen={() => setOpenModal2(!openModal2)}
          >
            <Text sx={{ marginTop: '30px', marginBottom: '20px', textAlign: 'left' }}>
              Assim que o processamento terminar os sindicalizados estarão listados na tela de sindicalizados
            </Text>

            <div style={{ maxHeight: '250px', overflowY: 'auto' }}> {/* Defina a altura máxima e a rolagem vertical */}
              <table style={TABLE}>
                <thead>
                  <tr style={TABLE}>
                    <th style={TABLE}>Linha</th>
                    <th style={TABLE}>Status</th>
                    <th style={TABLE_MOTIVO}>Motivo</th>
                  </tr>
                </thead>
                <tbody>
                  {associatesStatus.map((dado: any, index: number) => (
                    <tr key={index}>
                      <td style={TABLE}>{index + 1}</td>
                      <td style={TABLE}>{dado.status}</td>
                      <td style={TABLE_MOTIVO}>{dado.motivo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Modal>
        </Box>


        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
