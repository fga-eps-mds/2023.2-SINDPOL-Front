import React, { useEffect, useState } from "react"
import Modal from "../../components/Modal/modal"
import MyTable from "../../components/FiliationByFileList"
import { Box, Divider, Heading, IconButton, Text, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { styles, INPUT_HIDDEN, ICON, LABEL_ICON, TABLE, TABLE_MOTIVO } from "./styles"
import GenericInput from "../../components/GenericInput"
import GenericButton from "../../components/GenericButton"
import { fetchAssociates, selectAssociates } from "../../app/store/associate/associateSlice"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { IconEye, IconMenu2, IconFileUpload } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import Papa from "papaparse";

export default function Associates(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [openModal2, setOpenModal2] = React.useState<boolean>(false)
  const [dados, setDados] = React.useState([])

  useEffect(() => {
    dispatch(fetchAssociates()).then((res) => {
      setAssociates(res.payload)
    })
  }, [])

  const importAssociates = () => {
    setOpenModal(false)
    setOpenModal2(true)
  }

  const readAssociatedData = (e) => {
    //ler arquivo csv de dados dos associados a serem cadastrados
    const arquivo = e.target.files[0]
    Papa.parse(arquivo, {
      header: true,
      complete: function (results) {
        console.log(results.data)
        setDados(results.data)
      }
    })
  }

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

        <Modal Title="Importar Sindicalizados" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <Box>
            <Box id="modal-body" sx={styles.modalBox}>
              <input type="file" id="fileInput" style={INPUT_HIDDEN} accept=".csv" onChange={readAssociatedData} />
              <label htmlFor="file" for="fileInput" style={LABEL_ICON}>
                <IconFileUpload style={ICON} />
              </label>
              <Text sx={styles.textImport} >Solte um arquivo csv ou escolha</Text>
            </Box>
            <GenericButton
              sx={styles.associatImportButtom}
              text="Importar sindicalizados"
              onClick={() => importAssociates()}>
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
                <tr>
                  <td style={TABLE}>0</td>
                  <td style={TABLE}>Aprovado</td>
                  <td style={TABLE_MOTIVO}>------</td>
                </tr><tr>
                  <td style={TABLE}>1</td>
                  <td style={TABLE}>Aprovado</td>
                  <td style={TABLE_MOTIVO}>------</td>
                </tr><tr>
                  <td style={TABLE}>2</td>
                  <td style={TABLE}>Aprovado</td>
                  <td style={TABLE_MOTIVO}>------</td>
                </tr>
              </tbody>
            </table>
          </Modal>
        </Box>

        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
