import React, { useEffect, useState } from "react"
import Modal from "../../components/Modal/modal"
import { Box, Divider, Heading, IconButton, Text, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { styles } from "./styles"
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
  const [dados, setDados] = useState(null);

  useEffect(() => {
    dispatch(fetchAssociates()).then((res) => {
      setAssociates(res.payload)
    })
  }, [])

  const importAssociates = () => {
    setOpenModal(false)
    setOpenModal2(true)
  }



  const readAssociatedData = (file: File, submitFunction: Function) => {
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        const normalizedData = results.data.map((row: any) => {
          return normalizeAndCreateObject(row);
        });
  
        // normalizedData agora contém os dados normalizados
        console.log(normalizedData);
  
        // Chama a função que envia um associado por vez
        normalizedData.forEach((associate: any) => {
          console.log(associate);

          submitFunction(associate);
        });
      },
    });
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      readAssociatedData(file, submitForm);
    }
  };
  
  const submitForm = (associate: any) => {
    console.log("formstate:: ", associate);
  
    // Supondo que dispatch e createAssociate estão corretamente configurados no seu código
    dispatch(createAssociate(associate));
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
                    <Text align={"left"}>{associate.registration} - {associate.cpf} - {associate.birthDate}</Text>
                  </Box>
                  <Box display={"flex"}>
                    <IconButton
                      aria-label="Ver sindicalizado"
                      icon={<IconEye />}
                      onClick={() => { }}
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
              text="Importar sindicalizados"
              onClick={() => importAssociates()}>
            </GenericButton>
          </Box>
        </Modal>

        <Modal Title="Importar Sindicalizados" isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}>
          <Text>Assim que o processamento terminar os sindicalizados estarão listados na tela de sindicalizados</Text>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nome de guerra</th>
              <th>Matricula</th>
              <th>Data Nascimento</th>
              <th>CPF</th>
            </tr>
          </thead>

        </Modal>

        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
