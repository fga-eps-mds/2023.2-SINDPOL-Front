export interface FormState {
  [key: string]: Property
  name: Property
  nickname: Property
  registration: Property
  birth_date: Property
  rg: Property
  cpf: Property
  place_of_birth: Property
  ufNatural: Property
  marital_status: Property
  cep: Property
  address: Property
  number: Property
  city: Property
  uf: Property
  neighborhood: Property
  complement: Property
  email: Property
  cellphone: Property
  phone: Property
  gender: Property
  mother_name: Property
  father_name: Property
  scolarity: Property
  religion: Property
  blood_type: Property
  actualSituation: Property
  admission_date: Property
  role: Property
  bodyOfLaw: Property
  workPost: Property
  lotation: Property
}

interface Property {
  value: string
  isInvalid: boolean
  sxFormControl: any
  label?: string
  type?: string
}



export const defaultFormState = {
  name: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome completo",
    type: "string",
  },
  nickname: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome de guerra",
    type: "string",
  },
  registration: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Matrícula",
    type: "string",
  },
  birth_date: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Data de nascimento",
    type: "string",
  },
  rg: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "RG",
    type: "string",
  },
  cpf: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "CPF",
    type: "string",
  },
  place_of_birth: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Naturalidade",
    type: "string",
  },
  ufNatural: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "80px" },
    label: "UF Nat.",
    type: "string",
  },
  marital_status: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Estado civil",
    type: "string",
  },
  cep: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "140px" },
    label: "CEP",
    type: "string",
  },
  address: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Endereço",
    type: "string",
  },
  number: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "100px" },
    label: "Número",
    type: "string",
  },
  complement: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Complemento",
    type: "string",
  },
  neighborhood: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Bairro",
    type: "string",
  },
  city: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Cidade",
    type: "string",
  },
  uf: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "80px" },
    label: "UF",
    type: "string",
  },
  email: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "E-mail",
    type: "string",
  },
  cellphone: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Celular",
    type: "string",
  },
  phone: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Telefone",
    type: "string",
  },
  gender: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Sexo",
    type: "string",
  },
  mother_name: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome da mãe",
    type: "string",
  },
  father_name: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome do pai",
    type: "string",
  },
  scolarity: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Escolaridade",
    type: "string",
  },
  religion: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "200px" },
    label: "Religião",
    type: "string",
  },
  blood_type: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Tipo sanguíneo",
    type: "string",
  },
  actualSituation: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "200px" },
    label: "Situação atual",
    type: "string",
  },
  admission_date: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Data de admissão",
    type: "string",
  },
  role: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Cargo",
    type: "string",
  },
  bodyOfLaw: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Orgão*",
    type: "string",
  },
  workPost: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Posto de trabalho",
    type: "string",
  },
  lotation: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Lotação",
    type: "string",
  },
}
