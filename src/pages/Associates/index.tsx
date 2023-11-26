import React, { useEffect } from "react"
import Modal from "../../components/Modal/modal"
import { Box, Divider, Heading, IconButton, Text, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import GenericButton from "../../components/GenericButton"
import {
  fetchAssociates,
  selectAssociates,
} from "../../app/store/associate/associateSlice"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { IconEye, IconMenu2, IconFileUpload } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

export default function Associates(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [openModal2, setOpenModal2] = React.useState<boolean>(false)

  useEffect(() => {
    dispatch(fetchAssociates()).then((res) => {
      setAssociates(res.payload)
    })
  }, [])

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
            onChange={() => {}}
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
                    <Text align={"left"} fontWeight={'bold'}>{associate.name}</Text>
                    <Text align={"left"}>{associate.registration} : : {associate.cpf}</Text>
                  </Box>
                  <Box display={"flex"}>
                    <IconButton
                      aria-label="Ver sindicalizado"
                      icon={<IconEye />}
                      onClick={() => {}}
                      color={"#734A00"}
                    />
                    <Divider orientation="vertical" color={"#734A00"} />
                    <IconButton
                      aria-label="mais opções"
                      icon={<IconMenu2 />}
                      onClick={() => {}}
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
            <IconButton
              aria-label="upload de arquivo"
              icon={<IconFileUpload />}
              onClick={() => { }}
              color={"#000"}
            />
            <Text>Solte um arquivo csv ou escolha</Text>
          </Box>
          <GenericButton 
            text="Importar sindicalizados"
            onClick={() => setOpenModal2(true)}>
          </GenericButton>
          </Box>
        </Modal>
        
        <Modal Title="Importar Sindicalizados" isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}>
          <Box>
          <Text>Assim que o processamento terminar os sindicalizados estarão listados na tela de sindicalizados</Text>
          <Box id="modal-body" sx={styles.modalBoxResult}>
            <Text>teste</Text>
          </Box>
          </Box>
        </Modal>

        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
