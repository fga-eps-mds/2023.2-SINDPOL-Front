import { Box, Image, Text, IconButton } from "@chakra-ui/react"
import React, { useState } from "react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import { IconArrowDown, IconSquareXFilled } from "@tabler/icons-react"
import GenericButton from "../../components/GenericButton"
import { FormRequest } from "../../app/services/formServicec"
import { normalize } from "path"

interface dependent {
  id: number
  name: string
  cpf: string
  birthDate: string
  type: string
  cellphone: string
}

export default function FiliationForm(props: any) {
  const [formState, setFormState] = React.useState<FormRequest>({
    fullName: "",
    warName: "",
    credential: "",
    birthDate: "",
    rg: "",
    cpf: "",
    natural: "",
    ufNatural: "",
    civilState: "",
    cep: "",
    address: "",
    number: "",
    city: "",
    uf: "",
    complement: "",
    email: "",
    cellphone: "",
    phone: "",
    gender: "",
    motherName: "",
    fatherName: "",
    scolarity: "",
    religion: "",
    bloodType: "",
    function: "",
    actualSituation: "",
    admissionDate: "",
    role: "",
    bodyOfLaw: "",
    lotation: "",
    workPost: ""
  })
  const [boxes, setBoxes] = useState<Array<dependent>>([])
  const [cont, setCont] = useState(1)
  const adicionarBox = () => {
    const novaBox: dependent = {
      id: cont,
      name: "",
      cpf: "",
      birthDate: "",
      type: "",
      cellphone: ""
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
                name={"fullName"}
                value={formState.fullName}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, fullName: e.target.value })
                }
                label="Nome Completo*"
                sxFormControl={{ marginTop: "20px", width: "400px"}}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"warName"}
                value={formState.warName}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, warName: e.target.value })
                }
                label="Nome de Guerra"
                sxFormControl={{ marginTop: "20px", width: "300px"}}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"credential"}
                value={formState.credential}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, credential: e.target.value })
                }
                label="Matricula*"
                sxFormControl={{ marginTop: "20px", width: "200px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"birth-date"}
                value={formState.birthDate}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, birthDate: e.target.value })
                }
                label="Data de Nascimento*"
                sxFormControl={{ marginTop: "20px", width: "200px"}}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"rg"}
                value={formState.rg}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, rg: e.target.value })
                }
                label="RG*"
                sxFormControl={{ marginTop: "20px", width: "130px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"cpf"}
                value={formState.cpf}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, cpf: e.target.value })
                }
                label="CPF*"
                sxFormControl={{ marginTop: "20px", width: "150px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"naturalidade"}
                value={formState.natural}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, natural: e.target.value })
                }
                label="Naturalidade*"
                sxFormControl={{ marginTop: "20px", width: "150px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"uf-natural"}
                value={formState.ufNatural}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, ufNatural: e.target.value })
                }
                label="UF Nat.*"
                sxFormControl={{ marginTop: "20px", width: "80px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"civil-state"}
                value={formState.civilState}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, civilState: e.target.value })
                }
                label="Estado Civil"
                sxFormControl={{ marginTop: "20px", width: "150px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"cep"}
                value={formState.cep}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, cep: e.target.value })
                }
                label="CEP*"
                sxFormControl={{ marginTop: "20px", width: "140px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"address"}
                value={formState.address}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, address: e.target.value })
                }
                label="Endereço*"
                sxFormControl={{ marginTop: "20px", width: "350px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"number"}
                value={formState.number}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, number: e.target.value })
                }
                label="Nº"
                sxFormControl={{ marginTop: "20px", width: "100px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"city"}
                value={formState.city}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, city: e.target.value })
                }
                label="Cidade*"
                sxFormControl={{ marginTop: "20px", width: "150px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"uf"}
                value={formState.uf}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, uf: e.target.value })
                }
                label="UF"
                sxFormControl={{ marginTop: "20px", width: "80px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"complement"}
                value={formState.complement}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, complement: e.target.value })
                }
                label="Complemento"
                sxFormControl={{ marginTop: "20px", width: "300px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"email"}
                value={formState.email}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                label="E-mail*"
                sxFormControl={{ marginTop: "20px", width: "400px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"cellphone"}
                value={formState.cellphone}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, cellphone: e.target.value })
                }
                label="Celular*"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"phone"}
                value={formState.phone}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, phone: e.target.value })
                }
                label="Telefone"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"gender"}
                value={formState.gender}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, gender: e.target.value })
                }
                label="Sexo*"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"father-name"}
                value={formState.fatherName}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, fatherName: e.target.value })
                }
                label="Nome do Pai"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"mother-name"}
                value={formState.motherName}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, motherName: e.target.value })
                }
                label="Nome da Mãe*"
                sxFormControl={{ marginTop: "20px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"scolarity"}
                value={formState.scolarity}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, scolarity: e.target.value })
                }
                label="Escolaridade"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"religion"}
                value={formState.religion}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, religion: e.target.value })
                }
                label="Religião"
                sxFormControl={{ marginTop: "20px", width: "200px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"blood-type"}
                value={formState.bloodType}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, bloodType: e.target.value })
                }
                label="T. Sanguíneo"
                sxFormControl={{ marginTop: "20px", width: "100px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"actual-situation"}
                value={formState.actualSituation}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, actualSituation: e.target.value })
                }
                label="Situação Atual*"
                sxFormControl={{ marginTop: "20px", width: "200px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"admission-date"}
                value={formState.admissionDate}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, admissionDate: e.target.value })
                }
                label="Data de Admissão*"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
              ></GenericInput>
            </Box>
            <Box id={"row-fields"} sx={styles.rowFields} marginTop={"30px"}>
              <GenericInput
                type={"string"}
                name={"role"}
                value={formState.role}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, role: e.target.value })
                }
                label="Cargo"
                sxFormControl={{ marginTop: "20px", width: "300px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"body-of-law"}
                value={formState.bodyOfLaw}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({...formState, bodyOfLaw: e.target.value,})
                }
                label="Orgão*"
                sxFormControl={{ marginTop: "20px", width: "300px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"lotation"}
                value={formState.lotation}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, lotation: e.target.value })
                }
                label="Lotação"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
              ></GenericInput>
              <GenericInput
                type={"string"}
                name={"work-post"}
                value={formState.workPost}
                onChange={(e: { target: { value: any } }) =>
                  setFormState({ ...formState, workPost: e.target.value })
                }
                label="Posto de trabalho"
                sxFormControl={{ marginTop: "20px", width: "160px" }}
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
            {boxes && boxes.map((box) => (
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
                    sxFormControl={styles.inputSize}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"cpf"}
                    value={box.cpf}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "cpf", e.target.value)
                    }
                    label="CPF"
                    sxFormControl={{width: "190px"}}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"birthDate"}
                    value={box.birthDate}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "birthDate", e.target.value)
                    }
                    label="Data de Nascimento*"
                    sxFormControl={{width: "190px"}}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"type"}
                    value={box.type}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "type", e.target.value)
                    }
                    label="Parentesco"
                    sxFormControl={{width: "120px"}}
                  ></GenericInput>
                  <GenericInput
                    type={"string"}
                    name={"cellphone"}
                    value={box.cellphone}
                    onChange={(e: { target: { value: string } }) =>
                      changeDependentFields(box.id, "cellphone", e.target.value)
                    }
                    label="Celular*"
                    sxFormControl={{width: "170px"}}
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
