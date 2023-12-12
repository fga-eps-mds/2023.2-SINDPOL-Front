import { Box, Image, Text, IconButton, FormControl } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import Logo from '../../assets/logo.png'
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import { IconArrowDown, IconSquareXFilled } from "@tabler/icons-react"
import GenericButton from "../../components/GenericButton"
import { defaultFormState, FormState, Property } from "./formControl"
import { useAppDispatch } from "../../utils/hooks"
import {
  createAssociate,
  setAssociate,
  updateAssociates,
} from "../../app/store/associate/associateSlice"
import { useNavigate, useLocation } from "react-router-dom"
import { createObjectToSubmit, validateField } from "./normalize"
import GenericDropdown from "../../components/GenericDropdown"
import PopUpSubmission from "../../components/PopUpSubmission"
import DatePicker from "../../components/DatePicker"
import { fetchAssociate } from "../../app/store/associate/associateSlice"
import Mask from "../../utils/Mask"

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
  const [modalOk, setModalOk] = useState(false)
  const [error, setError] = useState({
    hasError: false,
    message: "",
  })
  const [associate, setAssociate] = React.useState<any>([])
  const { associateId } = useParams()
  const location = useLocation()

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
      console.log(res)
      if (res.payload.status === 200) {
        setModalOk(true)
        setError({
          hasError: false,
          message: "",
        })

        setTimeout(() => {
          setModalOk(false)
          window.history.back()
        }, 3000)
      } else {
        setError({
          hasError: true,
          message: res.payload.data,
        })
        setModalOk(true)

        // setTimeout(() => {
        //   setModalOk(false)
        // }, 3000)
      }
    })
  }

  const updateForm = () => {
    let dataToSubmit = createObjectToSubmit(formState, boxes)
    console.log("formstate:: ", dataToSubmit)

    dispatch(
      updateAssociates({ id: associateId, associate: dataToSubmit }),
    ).then((res) => {
      if (res.payload.status === 200) {
        setModalOk(true)
        setError({
          hasError: false,
          message: "",
        })

        setTimeout(() => {
          setModalOk(false)
          window.history.back()
        }, 3000)
      } else {
        setError({
          hasError: true,
          message: res.payload.data,
        })
        setModalOk(true)
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

    if (name == "birthDate") {
      console.log(value, formState.birthDate.value)
    }
  }

  const changeDependentFields = (
    boxId: number,
    name: string,
    value: string | Date,
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

  const resetFormState = () => {
    const initialState = Object.keys(formState).reduce((acc:any, key) => {
      acc[key] = { ...formState[key], value: "" }; // ou defina para um valor vazio dependendo do tipo de dados esperado
      return acc;
    }, {});
    setFormState(initialState);
  };


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
                {...(value as Property)}
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
                {...(value as Property)}
                options={value.options}
              ></GenericDropdown>
            </div>
          )
        case "date":
          return <DatePicker onChange={changeFormState} name={key} {...value} />
      }
    })
  }

  useEffect(() => {
    resetFormState()
    dispatch(fetchAssociate(associateId)).then((res) => {
      setAssociate(res.payload)
      setFormState((prevState) => {
        const updatedFormState = { ...prevState }
        Object.keys(res.payload).forEach((key) => {
          if (updatedFormState[key]) {
            updatedFormState[key].value = res.payload[key]
          }
        })
        return updatedFormState
      })
    })
  }, [])

  return (
    <>
      <Box id={"container-form"} sx={styles.formContainer}>
        <Box id={"form-box"} sx={styles.formBox}>
          <Image
            src={Logo}
            width={"84px"}
            marginLeft={"30px"}
            marginTop={"10px"}
          />
          <Box id={"column-fields"} sx={styles.columnFields}>
            {location.pathname === "/filiation" ? (
              <Text
                fontSize={"20px"}
                fontWeight={"semibold"}
                marginTop={"20px"}
              >
                Formulário de Filiação
              </Text>
            ) : (
              <Text
                fontSize={"20px"}
                fontWeight={"semibold"}
                marginTop={"20px"}
              >
                Detalhes do Sindicalizado
              </Text>
            )}
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"20px"}>
              {renderForm()}
            </Box>
          </Box>
          <Box id={"dependent-title"} sx={styles.dependentTitleRow}>
            <Text fontSize={"24px"}>Dependentes</Text>
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
                  sx={styles.rowDependents}
                  marginTop={"30px"}
                >
                  <GenericInput
                    type={"string"}
                    name={"name"}
                    value={box.name}
                    onChange={(name: any, value: any) =>
                      changeDependentFields(box.id, name, value)
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
                    onChange={(name: any, value: any) =>
                      changeDependentFields(box.id, name, value)
                    }
                    label="CPF"
                    sxFormControl={{ ...styles.inputSize, width: "190px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                  ></GenericInput>
                  <DatePicker
                    name={"birth_date"}
                    value={box.birth_date}
                    onChange={(name: any, value: any) =>
                      changeDependentFields(box.id, name, value)
                    }
                    label="Data de Nascimento*"
                    sxFormControl={{ ...styles.inputSize, width: "190px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                  />
                  <GenericInput
                    type={"string"}
                    name={"relationship"}
                    value={box.relationship}
                    onChange={(name: any, value: any) =>
                      changeDependentFields(box.id, name, value)
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
                    onChange={(name: any, value: any) =>
                      changeDependentFields(box.id, name, value)
                    }
                    label="Celular*"
                    sxFormControl={{ ...styles.inputSize, width: "170px" }}
                    error={{
                      hasError: false,
                      message: "",
                    }}
                    mask={(value) => Mask.PhoneNumber(value)}
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
            {location.pathname === "/filiation" ? ( // Rota específica para alterar o texto e a função
              <GenericButton
                text="Enviar Solicitação de Filiação"
                marginTop={"20px"}
                width={"250px"}
                onClick={submitForm}
              />
            ) : (
              <GenericButton
                text="Salvar Alterações"
                marginTop={"20px"}
                width={"150px"}
                onClick={updateForm}
              />
            )}
            {location.pathname === "/filiation" ? ( // Rota específica para alterar o texto e a função
              <GenericButton
                text="Cancelar"
                marginTop={"20px"}
                width={"150px"}
                onClick={() => navigate("/login")}
              />
            ) : (
              <GenericButton
                text="Voltar"
                marginTop={"20px"}
                width={"150px"}
                onClick={() => navigate("/Associates")}
              />
            )}
          </Box>
        </Box>
        <PopUpSubmission
          type={error.hasError ? "error" : "success"}
          open={modalOk}
          onClose={() => setModalOk(false)}
          title={error.hasError ? "Erro!" : "Sucesso!"}
          description={
            !error.hasError
              ? "Sua solicitação de filiação foi enviada com sucesso!"
              : "Ocorreu um erro ao enviar sua solicitação de filiação. Por favor, tente novamente mais tarde."
          }
        />
      </Box>
    </>
  )
}
