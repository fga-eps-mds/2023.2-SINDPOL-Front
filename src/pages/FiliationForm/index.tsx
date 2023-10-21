import { Box, Image, Text, IconButton } from "@chakra-ui/react"
import React, { useState } from "react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import { IconArrowDown, IconSquareXFilled } from "@tabler/icons-react"
import GenericButton from "../../components/GenericButton"

interface dependent {
  id: number
  name: string
  type: string
}

export default function FiliationForm(props: any) {
  const [boxes, setBoxes] = useState<Array<dependent>>([])
  const [cont, setCont] = useState(1)
  const adicionarBox = () => {
    const novaBox: dependent = {
      id: cont,
      name: "",
      type: "",
    }
    setCont(cont + 1)
    setBoxes((prevBoxes) => [...prevBoxes, novaBox])
  }

  const removerBox = (boxId: number) => {
    if (boxes && boxes.length > 0) {
      const novasBoxes = boxes.filter((box) => box.id !== boxId)
      setBoxes(novasBoxes)
    }
  }
  return (
    <>
      <Box id={"container-form"} sx={styles.formContainer}>
        <Box id={"form-box"} sx={styles.formBox}>
          <Image
            src="src/assets/logo.png"
            width={"84px"}
            marginLeft={"30px"}
            marginTop={"10px"}
          />
          <Box id={"column-fields"} sx={styles.columnFields}>
            <Text fontSize={"20px"} fontWeight={"semibold"} marginTop={"20px"}>
              Formulário de Filiação
            </Text>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"20px"}>
              <GenericInput
                type={"string"}
                name={"full-name"}
                value={""}
                onChange={console.log("oi")}
                label="Nome Completo"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"credential"}
                value={""}
                onChange={console.log("oi")}
                label="Matricula"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"birth-date"}
                value={""}
                onChange={console.log("oi")}
                label="Data de Nascimento"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"email"}
                value={""}
                onChange={console.log("oi")}
                label="E-mail"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"phone"}
                value={""}
                onChange={console.log("oi")}
                label="Celular"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"username"}
                value={""}
                onChange={console.log("oi")}
                label="Matricula"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
            </Box>
          </Box>
          <Box id={"dependent-title"} sx={styles.dependentTitleRow}>
            <Text fontSize={"24px"} marginRight={"10px"} marginLeft={"100px"}>
              Dependentes
            </Text>
            <IconArrowDown height={"24px"}></IconArrowDown>
          </Box>
          <Box id={"divider"} sx={styles.divider} marginLeft={"100px"}></Box>
          <GenericButton
            text="Adicionar Dependente"
            marginTop={"20px"}
            marginLeft={"100px"}
            width={"343px"}
            onClick={adicionarBox}
          />
          <Box id={"column-dependents"} sx={styles.columnDependents}>
            {boxes &&
              boxes.map((box) => (
                <Box
                  id={"row-fields-" + box.id}
                  sx={styles.rowFields}
                  marginTop={"30px"}
                >
                  <GenericInput
                    type={"string"}
                    name={"phone"}
                    value={""}
                    onChange={console.log("oi")}
                    label="Nome Completo"
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"username"}
                    value={""}
                    onChange={console.log("oi")}
                    label="Parentesco"
                  ></GenericInput>
                  <IconButton
                    aria-label={""}
                    color={"#FFA500"}
                    onClick={() => removerBox(box.id)}
                  >
                    <IconSquareXFilled size={"38px"}></IconSquareXFilled>
                  </IconButton>
                </Box>
              ))}
          </Box>
          <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
            <GenericButton
              text="Enviar Solicitação de Filiação"
              marginTop={"20px"}
              marginLeft={"100px"}
              width={"491px"}
            />
            <GenericButton
              text="Cancelar"
              marginTop={"20px"}
              marginLeft={"100px"}
              width={"157px"}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
