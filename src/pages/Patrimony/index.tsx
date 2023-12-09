import { Box, Image, Text, IconButton } from "@chakra-ui/react"
import React, { useState } from "react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import GenericButton from "../../components/GenericButton"
import DatePicker from "../../components/DatePicker"
import { defaultFormState, FormState, Property} from "./formControl"
import { useAppDispatch } from "../../utils/hooks"
import { createAssociate } from "../../app/store/associate/associateSlice"
import { useNavigate } from "react-router-dom"
import { createObjectToSubmit, validateField } from "./normalize"

export default function PatrimonyForm(props: any) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = React.useState<FormState>(defaultFormState)

  const submitForm = () => {
    let data = createObjectToSubmit(formState)
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
      [name]: { ...prevState[name], isInvalid: false, value },
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
                {...value as Property}
              ></GenericInput>
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
              onClick={() => navigate("/home")}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}
