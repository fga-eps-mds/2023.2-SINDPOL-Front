export interface FormState {
  [key: string]: Property
  fullName: Property
  warName: Property
  credential: Property
  birthDate: Property
  rg: Property
  cpf: Property
  natural: Property
  ufNatural: Property
  civilState: Property
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
  motherName: Property
  fatherName: Property
  scolarity: Property
  religion: Property
  bloodType: Property
  actualSituation: Property
  admissionDate: Property
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
  fullName: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome completo",
    type: "string",
  },
  warName: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome de guerra",
    type: "string",
  },
  credential: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Matrícula",
    type: "string",
  },
  birthDate: {
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
  natural: {
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
  civilState: {
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
  motherName: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome da mãe",
    type: "string",
  },
  fatherName: {
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
  bloodType: {
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
  admissionDate: {
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
