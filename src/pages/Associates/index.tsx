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
import { normalizeAndCreateObject } from "./normalize"
import { createAssociate } from "../../app/store/associate/associateSlice"
import { AxiosError } from 'axios';




export default function Associates(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = React.useState<boolean>(false)
  const [dados, setDados] = React.useState<any>([])
  const [associatesStatus, setAssociatesStatus] = useState<AssociateStatus[]>([]);


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
      let status = 'aprovado';
      let motivo = 'Submissão bem-sucedida';

      try {
        await submitFunction(dado);

        statusArray.push({ status, motivo });
      } catch (error: any) {
        status = 'reprovado';
        motivo = error.mensage || 'Erro desconhecido na submissão';
        statusArray.push({ status, motivo });
      }
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

        setDados(normalizedData);

      },
    });
  };

  console.log(dados)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      readAssociatedData(file, submitForm);
    }
  };

  
  
  const submitForm = async (associate: any) => {
    try {
      const action = await dispatch(createAssociate(associate));

      if (action.payload && (action.payload as AxiosError).response) {
        throw new Error('Reprovado');
      }

      return 'Aprovado';
    } catch (error) {
      console.error('Erro ao criar associado:', error);
  
      if (error instanceof AxiosError && error.response) {
        console.error('Detalhes do erro:', error.response.data);
        console.error('Status do erro:', error.response.status);
  
        return error.response.data || 'Erro desconhecido';
      }
  
      if (error instanceof Error) {
        console.error('Erro desconhecido:', error);
        return 'Erro desconhecido';
      }
  
      throw error;
    }
  };

  return (
    <Box id="asssociates-page-container" sx={styles.boxContainer}>
      <Box id="associates-page-box" sx={styles.box}>
        <Box id="associates-page-box-header" sx={styles.boxHeader}>
          <Heading id="associates-page-box-header-title">
            Sindicalizados
          </Heading>
          <GenericInput
            id="associates-page-box-header-input"
            placeholder="Pesquisar por Nome ou Mátricula"
            type="text"
            name="search"
            value=""
            onChange={() => { }}
            sxFormControl={{ marginX: "12px", maxWidth: "600px" }}
          />
          <Box>
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
          {associates.map((associate: any) => {
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
            <Box id="modal-body" sx={styles.modalBox} onDragOver={(e) => e.preventDefault()}>
              <input type="file" accept=".csv" onChange={handleFileChange} />
              <Text>Solte um arquivo csv ou escolha</Text>
            </Box>

            <GenericButton
              sx={styles.associatImportButtom}
              text="Importar sindicalizados"
              onClick={() => importAssociates(submitForm)}>
            </GenericButton>
          </Box>
        </Modal>
        <Box>
          <Modal Title="Importar Sindicalizados" isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}>
            <Text sx={{ marginTop: '30px', marginBottom: '20px', textAlign: 'left' }}>Assim que o processamento terminar os sindicalizados estarão listados na tela de sindicalizados</Text>

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





          </Modal>
        </Box>

        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
