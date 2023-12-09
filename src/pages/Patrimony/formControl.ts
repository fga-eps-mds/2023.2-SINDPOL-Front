export interface FormState {
  [key: string]: Property | DateProperty
  name: Property
  description: Property
  items_description: Property
  acquisition_date: Property
  local: Property
  serial_number: Property
  patrimony_type: Property
  patrimony_value: Property
  items_value: Property
  sector: Property
  conservation_state: Property
  invoice_number:Property
  brand: Property
  manufacturer: Property
  model: Property
  depreciation_value: Property
}

export interface DropdownOption {
  value: string
  label: string
}

export interface Property {
  value: string
  isInvalid: boolean
  sxFormControl: any
  label?: string
  type?: string | Date
}

interface DateProperty {
  value: string | Date
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
  name: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "900px" },
    label: "Nome",
    type: "string",
  },
  acquisition_date: {
    value: new Date(),
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "150px" },
    label: "Data de Aquisição",
    type: "date",
    isRequired: true,
  },
  description: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "510px" },
    label: "Descrição do patrimônio",
    type: "string",
    sxInput: { height: "150px" }
  },
  items_description: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 40px", width: "510px" },
    label: "Itens de reposição",
    type: "string",
    sxInput: { height: "150px" }
  },
  patrimony_value: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "337px" },
    label: "Valor do Patrimônio",
    type: "string",
  },
  items_value: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Valor dos itens de Reposição",
    type: "string",
  },
  serial_number: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "400px" },
    label: "Número de Série",
    type: "string",
  },
  local: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "400px" },
    label: "Local",
    type: "string",
  },
  sector: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Setor",
    type: "string",
  },
  patrimony_type: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "337px" },
    label: "Tipo",
    type: "string",
  },
  invoice_number:{
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "525px" },
    label: "Nº Nota Fiscal",
    type: "string",
  },
  brand: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "525px" },
    label: "Marca",
    type: "string",
  },
  manufacturer: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "350px" },
    label: "Fabricante",
    type: "string",
  },
  model: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "350px" },
    label: "Modelo",
    type: "string",
  },
  depreciation_value: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "350px" },
    label: "Valor de Depreciação",
    type: "string",
  },
  conservation_state: {
    value: "",
    isInvalid: false,
    sxFormControl: { margin: "12px 8px", width: "300px" },
    label: "Estado/Conservação",
    type: "string",
  },
}
