import { Box, Image, Text, IconButton } from "@chakra-ui/react"
import React, { useState } from "react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import { IconArrowDown, IconSquareXFilled } from "@tabler/icons-react"
import GenericButton from "../../components/GenericButton"
import { defaultFormState, FormState } from "./formControl"
import { useAppDispatch } from "../../utils/hooks"
import { createAssociate } from "../../app/store/associate/associateSlice"
import { useNavigate } from "react-router-dom"
import { createObjectToSubmit, validateField } from "./normalize"
import DatePicker from "../../components/DatePicker"
import GenericDropdown from "../../components/GenericDropdown"

interface dependent {
  id: number
  name: string
  cpf: string
  birth_date: string
  gender: string
  relationship: string
  phone: string
}

export default function PatrimonyForm(props: any) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = React.useState<FormState>(defaultFormState)
  const [boxes, setBoxes] = useState<Array<dependent>>([])

  const submitForm = () => {
    let data = createObjectToSubmit(formState, boxes)
    console.log("formstate:: ", data)

    dispatch(createAssociate(data))
  }

  const changeFormState = (name: string, value: any) => {
    if (!validateField(name, value)) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: { ...prevState[name], isInvalid: true },
      }))
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value },
    }))
  }
  
  const renderForm = () => {
    return Object.entries(formState).map(([key, value]) => {
      switch (value.type) {
        case "string":
          return (
            <div>
              <GenericInput
                type={"string"}
                name={key}
                onChange={changeFormState}
                error={{
                  hasError: value.isInvalid,
                  message: "Erro",
                }}
                {...value}
              ></GenericInput>
            </div>
          )
        case "select":
          return (
            <div>
              <GenericDropdown
                type={"string"}
                name={key}
                onChange={changeFormState}
                {...value}
              ></GenericDropdown>
            </div>
          )
        case "date":
          return <DatePicker onChange={changeFormState} name={key} {...value} />
      }
    })
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
              Cadastro de patrimônio
            </Text>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"20px"}>
              {renderForm()}
            </Box>
          </Box>
          <Box id={"row-buttons"} sx={styles.rowButtons}>
            <GenericButton
              text="Salvar"
              marginTop={"20px"}
              width={"250px"}
              onClick={submitForm}
            />
            <GenericButton
              text="Cancelar"
              marginTop={"20px"}
              width={"150px"}
              onClick={() => navigate("/login")}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
