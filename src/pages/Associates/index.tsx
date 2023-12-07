import React, { useEffect } from "react"
import { Box, Divider, Heading, IconButton, Text } from "@chakra-ui/react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import GenericButton from "../../components/GenericButton"
import { fetchAssociates } from "../../app/store/associate/associateSlice"
import { useAppDispatch } from "../../utils/hooks"
import { IconEye, IconMenu2 } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"


export default function Associates(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])

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
              onClick={() => { }}
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
        <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
      </Box>
    </Box>
  )
}
