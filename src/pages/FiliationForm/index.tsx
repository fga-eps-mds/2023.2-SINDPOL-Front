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

interface dependent {
  id: number
  name: string
  cpf: string
  birth_date: string
  gender: string
  relationship: string
  phone: string
}

export default function FiliationForm(props: any) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = React.useState<FormState>(defaultFormState)
  const [boxes, setBoxes] = useState<Array<dependent>>([])
  const [cont, setCont] = useState(1)
  const adicionarBox = () => {
    const novaBox: dependent = {
      id: cont,
      name: "",
      cpf: "",
      birth_date: "",
      gender: "not binary",
      relationship: "",
      phone: "",
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

  const submitForm = () => {
    let data = createObjectToSubmit(formState, boxes)
    console.log("formstate:: ", data)

    dispatch(createAssociate(data)).then((res) => {
      if (res.payload.response.status !== 422) {
        window.history.back()
        // navigate("/login")
      }
    })
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

  const changeDependentFields = (
    boxId: number,
    name: string,
    value: string,
  ) => {
    if (boxes && boxes.length > 0) {
      const novasBoxes = boxes.map((e: any) => {
        if (e.id === boxId) {
          return { ...e, [name]: value }
        }
        return e
      })
      setBoxes(novasBoxes)
    }
  }

  const renderForm = () => {
    return Object.entries(formState).map(([key, value]) => {
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
              Formulário de Filiação
            </Text>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"20px"}>
              {renderForm()}
            </Box>
          </Box>
          <Box id={"dependent-title"} sx={styles.dependentTitleRow}>
            <Text
              fontSize={"24px"}
            >
              Dependentes
            </Text>
            <IconArrowDown height={"24px"}></IconArrowDown>
          </Box>
          <Box id={"divider"} sx={styles.divider}></Box>
          <GenericButton
            text="Adicionar Dependente"
            marginTop={"20px"}
            marginLeft={"50px"}
            width={"250px"}
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
                    name={"name"}
                    value={box.name}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "name", e.target.value)
                    }
                    label="Nome Completo*"
                    sxFormControl={{ ...styles.inputSize, width: "300px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"cpf"}
                    value={box.cpf}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "cpf", e.target.value)
                    }
                    label="CPF"
                    sxFormControl={{ ...styles.inputSize, width: "190px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"birth_date"}
                    value={box.birth_date}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "birth_date", e.target.value)
                    }
                    label="Data de Nascimento*"
                    sxFormControl={{ ...styles.inputSize, width: "190px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"relationship"}
                    value={box.relationship}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "relationship", e.target.value)
                    }
                    label="Parentesco"
                    sxFormControl={{ ...styles.inputSize, width: "120px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"phone"}
                    value={box.phone}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "phone", e.target.value)
                    }
                    label="Celular*"
                    sxFormControl={{ ...styles.inputSize, width: "170px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                    mask={(value) => `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`}
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
          <Box id={"row-buttons"} sx={styles.rowButtons}>
            <GenericButton
              text="Enviar Solicitação de Filiação"
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
