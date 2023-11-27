export interface FormState {
    [key: string]: Property
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
      label: "Nome",
      type: "string",
    },
    description: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Descrição de patrimônio",
      type: "string",
    },
    items_description: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Itens de reposição",
      type: "string",
    },
    acquisition_date: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Data de aquisição",
      type: "string",
    },
    local: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Local",
      type: "string",
    },
    serial_number: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Número de série",
      type: "string",
    },
    patrimony_type: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "150px" },
      label: "Tipo",
      type: "string",
    },
    patrimony_value: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "80px" },
      label: "Valor",
      type: "string",
    },
    items_value: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "150px" },
      label: "Valor dos itens de reposição",
      type: "string",
    },
    sector: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "140px" },
      label: "Setor",
      type: "string",
    },
    conservation_state: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Estado de conservação",
      type: "string",
    },
    invoice_number:{
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "100px" },
      label: "Número",
      type: "string",
    },
    brand: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Marca",
      type: "string",
    },
    manufacturer: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "150px" },
      label: "Fabricante",
      type: "string",
    },
    model: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "150px" },
      label: "Modelo",
      type: "string",
    },
    depreciation_value: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "80px" },
      label: "depreciation_value:",
      type: "string",
    },
    lotation: {
      value: "",
      isInvalid: false,
      sxFormControl: { margin: "12px 8px", width: "300px" },
      label: "Lotação",
      type: "string",
    },
  }
  