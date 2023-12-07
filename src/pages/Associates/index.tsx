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



export default function Associates(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = React.useState<boolean>(false)
  const [dados, setDados] = React.useState<any>([])

  useEffect(() => {
    dispatch(fetchAssociates()).then((res) => {
      setAssociates(res.payload)
    })
  }, [])

  console.log(associates)

  const handleEyeClick = (associateId: string) => {
    console.log("ID do associado:", associateId);
    navigate(`/update/${associateId}`);
  }

  const importAssociates = (submitFunction: Function) => {
    setOpenModal(false)
    dados.forEach((dado: any) => {
      submitFunction(dado);
    });
    setOpenModal2(true)
  }



  const readAssociatedData = (file: File, submitFunction: Function) => {
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        const normalizedData = results.data.map((row: any) => {
          return normalizeAndCreateObject(row);
        });

        console.log(normalizedData);



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

  const submitForm = (associate: any) => {
    dispatch(createAssociate(associate))
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
            <Box id="modal-body" sx={styles.modalBox}>
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
                  <th style={TABLE}>Matrícula</th>
                  <th style={TABLE}>Status</th>
                  <th style={TABLE_MOTIVO}>Motivo</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((dado: any) => {
                  return (
                    <>
                      <tr>
                        <td style={TABLE}>{dado.registration}</td>
                        <td style={TABLE}>Aprovado</td>
                        <td style={TABLE_MOTIVO}>------</td>
                      </tr>
                      
                    </>
                  )
                })}
              </tbody>
            </table>





          </Modal>
        </Box>

        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
