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

interface DropdownOption {
  value: string
  label: string
}

interface Property {
  value: string
  options?: DropdownOption[]
  isInvalid: boolean
  sxFormControl: any
  label?: string
  type?: string
  isRequired?: boolean
  helperText?: string
  mask?: (value: string) => string
}

export const defaultFormState = {
  fullName: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome completo",
    type: "string",
    isRequired: true,
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
    isRequired: true,
    mask: (value: string) => {
      return value.replace(/^(\d{6})(\d{2})$/, "$1/$2")
    },
  },
  birthDate: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Data de nascimento",
    type: "string",
    isRequired: true,
  },
  rg: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "RG",
    type: "string",
    isRequired: true,
    mask: (value: string) => {
      return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
    },
  },
  cpf: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "CPF",
    type: "string",
    isRequired: true,
    mask: (value: string) => {
      return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
    },
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
    type: "select",
    options: [
      { value: "Acre", label: "AC" },
      { value: "Alagoas", label: "AL" },
      { value: "Amapá", label: "AP" },
      { value: "Amazonas", label: "AM" },
      { value: "Bahia", label: "BA" },
      { value: "Ceará", label: "CE" },
      { value: "Distrito Federal", label: "DF" },
      { value: "Espírito Santo", label: "ES" },
      { value: "Goiás", label: "GO" },
      { value: "Maranhão", label: "MA" },
      { value: "Mato Grosso", label: "MT" },
      { value: "Mato Grosso do Sul", label: "MS" },
      { value: "Minas Gerais", label: "MG" },
      { value: "Pará", label: "PA" },
      { value: "Paraíba", label: "PB" },
      { value: "Paraná", label: "PR" },
      { value: "Pernambuco", label: "PE" },
      { value: "Piauí", label: "PI" },
      { value: "Rio de Janeiro", label: "RJ" },
      { value: "Rio Grande do Norte", label: "RN" },
      { value: "Rio Grande do Sul", label: "RS" },
      { value: "Rondônia", label: "RO" },
      { value: "Roraima", label: "RR" },
      { value: "Santa Catarina", label: "SC" },
      { value: "São Paulo", label: "SP" },
      { value: "Sergipe", label: "SE" },
      { value: "Tocantins", label: "TO" },
    ],
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
    mask: (value: string) => {
      return value.replace(/^(\d{5})(\d{3})$/, "$1-$2")
    },
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
    type: "select",
    options: [
      { value: "Acre", label: "AC" },
      { value: "Alagoas", label: "AL" },
      { value: "Amapá", label: "AP" },
      { value: "Amazonas", label: "AM" },
      { value: "Bahia", label: "BA" },
      { value: "Ceará", label: "CE" },
      { value: "Distrito Federal", label: "DF" },
      { value: "Espírito Santo", label: "ES" },
      { value: "Goiás", label: "GO" },
      { value: "Maranhão", label: "MA" },
      { value: "Mato Grosso", label: "MT" },
      { value: "Mato Grosso do Sul", label: "MS" },
      { value: "Minas Gerais", label: "MG" },
      { value: "Pará", label: "PA" },
      { value: "Paraíba", label: "PB" },
      { value: "Paraná", label: "PR" },
      { value: "Pernambuco", label: "PE" },
      { value: "Piauí", label: "PI" },
      { value: "Rio de Janeiro", label: "RJ" },
      { value: "Rio Grande do Norte", label: "RN" },
      { value: "Rio Grande do Sul", label: "RS" },
      { value: "Rondônia", label: "RO" },
      { value: "Roraima", label: "RR" },
      { value: "Santa Catarina", label: "SC" },
      { value: "São Paulo", label: "SP" },
      { value: "Sergipe", label: "SE" },
      { value: "Tocantins", label: "TO" },
    ],
  },
  email: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "E-mail",
    type: "string",
    isRequired: true,
  },
  cellphone: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Celular",
    type: "string",
    isRequired: true,
    mask: (value: string) => {
      return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
    },
  },
  phone: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Telefone",
    type: "string",
    mask: (value: string) => {
      return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
    },
  },
  gender: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Sexo",
    type: "select",
    isRequired: true,
    options: [
      { value: "Masculino", label: "Masculino" },
      { value: "Feminino", label: "Feminino" },
    ],
  },
  motherName: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome da mãe",
    type: "string",
    isRequired: true,
  },
  fatherName: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Nome do pai",
    type: "string",
    isRequired: true,
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
    type: "select",
    options: [
      { value: "cristianismo", label: "Cristianismo" },
      { value: "islamismo", label: "Islamismo" },
      { value: "hinduismo", label: "Hinduísmo" },
      { value: "budismo", label: "Budismo" },
      { value: "judaismo", label: "Judaísmo" },
      { value: "siquismo", label: "Siquismo" },
      { value: "taoismo", label: "Taoísmo" },
      { value: "xintoismo", label: "Xintoísmo" },
      { value: "jainismo", label: "Jainismo" },
      { value: "fe_bahai", label: "Fé Baháʼí" },
      { value: "zoroastrismo", label: "Zoroastrismo" },
      { value: "confucionismo", label: "Confucionismo" },
      { value: "xamanismo", label: "Xamanismo" },
      { value: "wicca", label: "Wicca" },
      { value: "ateismo", label: "Ateísmo" },
    ],
  },
  bloodType: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Tipo sanguíneo",
    type: "select",
    isRequired: true,
    options: [
      { value: "A+", label: "A+" },
      { value: "A-", label: "A-" },
      { value: "B+", label: "B+" },
      { value: "B-", label: "B-" },
      { value: "AB+", label: "AB+" },
      { value: "AB-", label: "AB-" },
      { value: "O+", label: "O+" },
      { value: "O-", label: "O-" },
    ],
  },
  actualSituation: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "200px" },
    label: "Situação atual",
    type: "string",
    isRequired: true,
  },
  admissionDate: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Data de admissão",
    type: "string",
    isRequired: true,
  },
  role: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Cargo",
    type: "string",
    isRequired: true,
  },
  bodyOfLaw: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Orgão",
    type: "string",
    isRequired: true,
  },
  workPost: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Posto de trabalho",
    type: "string",
    isRequired: true,
  },
  lotation: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "160px" },
    label: "Lotação",
    type: "string",
    isRequired: true,
  },
}
