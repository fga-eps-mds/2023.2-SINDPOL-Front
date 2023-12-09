import { FormState } from "./formControl"

export function createObjectToSubmit(formState: FormState) {
  let data = {
    name: formState.name.value,
    acquisition_date: new Date(formState.acquisition_date.value).getTime(),
    description: formState.description.value,
    items_description: formState.items_description.value,
    patrimony_value: formState.patrimony_value.value,
    items_value: formState.items_value.value,
    serial_number: formState.serial_number.value,
    local: formState.local.value,
    sector: formState.sector.value,
    patrimony_type: formState.patrimony_type.value,
    invoice_number: formState.invoice_number.value,
    brand: formState.brand.value,
    manufacturer: formState.manufacturer.value,
    model: formState.model.value,
    depreciation_value: formState.depreciation_value.value,
    conservation_state: formState.conservation_state.value,
  }

  return data
}

export function validateField(key: string, value: any) {
  switch (key) {
    case "name" ||
      "description" ||
      "items_description" ||
      "patrimony_value" ||
      "items_value" ||
      "serial_number" ||
      "local" ||
      "sector" ||
      "patrimony_type" ||
      "invoice_number" ||
      "brand" ||
      "manufacturer" ||
      "model" ||
      "depreciation_value" ||
      "conservation_state":
      return validateString(value)
    case "acquisition_date":
      return validateDate(value)
  }
  return true
}

export function validateString(value: string){return value === "" ? false : true;}
export function validateDate(value: string) {
  const regexData = /^\d{4}-\d{2}-\d{2}$/
  if (!regexData.test(value)) {
    return false
  }

  const data = new Date(value)
  if (isNaN(data.getTime())) {
    return false
  }
  const hoje = new Date()
  if (data > hoje) {
    return false
  }

  return true
}
