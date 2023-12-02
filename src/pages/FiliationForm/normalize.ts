import { FormState } from "./formControl"

export function createObjectToSubmit(formState: FormState, dependents: any[]) {
  let data = {
    fullName: formState.fullName.value,
    warName: formState.warName.value,
    registration: formState.registration.value,
    birthDate: new Date(formState.birthDate.value).getTime(),
    rg: formState.rg.value,
    cpf: formState.cpf.value,
    placeOfBirth: formState.placeOfBirth.value,
    ufNatural: formState.ufNatural.value,
    civilState: formState.civilState.value,
    cep: formState.cep.value,
    address: formState.address.value,
    number: formState.number.value,
    neighborhood: formState.neighborhood.value,
    city: formState.city.value,
    complement: formState.complement.value,
    uf: formState.uf.value,
    email: formState.email.value,
    cellphone: formState.cellphone.value,
    phone: formState.phone.value,
    gender: formState.gender.value,
    motherName: formState.motherName.value,
    fatherName: formState.fatherName.value,
    scolarity: formState.scolarity.value,
    religion: formState.religion.value,
    bloodType: formState.bloodType.value,
    actualWorkSituation: formState.actualWorkSituation.value,
    admissionDate: new Date(formState.admissionDate.value).getTime(),
    jobRole: formState.jobRole.value,
    bodyOfLaw: formState.bodyOfLaw.value,
    lotation: formState.lotation.value,
    workPost: formState.workPost.value,
    systemRole: "Sindicalizado",
    password:"1234",
    dependents: dependents.map((dependent) => {
      return {
        ...dependent,
        birth_date: new Date(dependent.birth_date).getTime()
      }
    }),
  }

  return data
}

export function validateField(key: string, value: any) {
  switch (key) {
    case "admissionDate":
      return validateDate(value)
    case "birthDate":
      return validateDate(value)
    case "cpf":
      return validateCpf(value)
    case "rg":
      return validateRg(value)
    case "cep":
      return validateCep(value)
    case "number":
      return validateNumber(value)
    case "email":
      return validateEmail(value)
    case "phone":
      return validatePhone(value)
    case "cellphone":
      return validatePhone(value)
    default:
      return validateString(value)
  }
}

export function validateString(value: string) {
  if (value === "") {
    return false
  }
  return true
}

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

export function validateCpf(value: string) {
  const cpfLimpo = value.replace(/[^\d]/g, "")

  if (cpfLimpo.length !== 11) {
    return false
  }

  if (/^(\d)\1+$/.test(cpfLimpo)) {
    return false
  }

  let soma = 0
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (10 - i)
  }

  let resto = soma % 11
  let digitoVerificador1 = resto < 2 ? 0 : 11 - resto

  soma = 0
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (11 - i)
  }

  resto = soma % 11
  let digitoVerificador2 = resto < 2 ? 0 : 11 - resto

  if (
    parseInt(cpfLimpo.charAt(9)) !== digitoVerificador1 ||
    parseInt(cpfLimpo.charAt(10)) !== digitoVerificador2
  ) {
    return false
  }
  return true
}

export function validateRg(value: string) {
  const rgLimpo = value.replace(/[^\d]/g, "")

  if (rgLimpo.length !== 9) {
    return false
  }

  const multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9]
  let soma = 0
  for (let i = 0; i < 8; i++) {
    soma += parseInt(rgLimpo.charAt(i)) * multiplicadores[i]
  }

  const resto = soma % 11
  const digitoVerificador = 11 - resto

  const ultimoDigito = parseInt(rgLimpo.charAt(8))
  if (
    (digitoVerificador === 10 && ultimoDigito !== 0) ||
    (digitoVerificador !== 10 && digitoVerificador !== ultimoDigito)
  ) {
    return false
  }

  return true
}

export function validateCep(value: String) {
  const cepLimpo = value.replace(/[^\d]/g, "")

  const regexCEP = /^\d{8}$/
  return regexCEP.test(cepLimpo)
}

export function validateNumber(value: String) {
  return !isNaN(Number(value))
}

export function validateEmail(value: string) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regexEmail.test(value)
}

export function validatePhone(value: string) {
  const telefoneLimpo = value.replace(/[^\d]/g, "")

  const regexTelefone = /^(?:\d{10}|\d{11})$/
  return regexTelefone.test(telefoneLimpo)
}
