interface RowData {
  fullName: string
  warName: string
  registration: string
  birthDate: string
  rg: string
  cpf: string
  placeOfBirth: string
  ufNatural: string
  civilState: string
  cep: string
  address: string
  number: string
  neighborhood: string
  city: string
  complement: string
  uf: string
  email: string
  cellphone: string
  phone: string
  gender: string
  motherName: string
  fatherName: string
  scolarity: string
  religion: string
  bloodType: string
  actualWorkSituation: string
  admissionDate: string
  jobRole: string
  bodyOfLaw: string
  lotation: string
  workPost: string
}

export function normalizeAndCreateObject(row: RowData) {
  return {
    fullName: row.fullName,
    warName: row.warName || "Atualizar Campo",
    registration: row.registration,
    birthDate: new Date(row.birthDate).getTime() || new Date().getTime(),
    rg: row.rg,
    cpf: row.cpf,
    placeOfBirth: row.placeOfBirth || "Atualizar Campo",
    ufNatural: row.ufNatural || "Atualizar Campo",
    civilState: row.civilState || "Atualizar Campo",
    cep: row.cep || "Atualizar Campo",
    address: row.address || "Atualizar Campo",
    number: row.number || "Atualizar Campo",
    neighborhood: row.neighborhood || "Atualizar Campo",
    city: row.city || "Atualizar Campo",
    complement: row.complement || "Atualizar Campo",
    uf: row.uf || "Atualizar Campo",
    email: row.email,
    cellphone: row.cellphone || "Atualizar Campo",
    phone: row.phone || "Atualizar Campo",
    gender: row.gender || "Atualizar Campo",
    motherName: row.motherName || "Atualizar Campo",
    fatherName: row.fatherName || "Atualizar Campo",
    scolarity: row.scolarity || "Atualizar Campo",
    religion: row.religion || "Atualizar Campo",
    bloodType: row.bloodType || "Atualizar Campo",
    actualWorkSituation: row.actualWorkSituation || "Atualizar Campo",
    admissionDate: new Date(row.admissionDate).getTime() || new Date().getTime(),
    jobRole: row.jobRole || "Atualizar Campo",
    bodyOfLaw: row.bodyOfLaw || "Atualizar Campo",
    lotation: row.lotation || "Atualizar Campo",
    workPost: row.workPost || "Atualizar Campo",
    systemRole: "Sindicalizado",
    password: "1234",
    dependents: []
  };
}

interface RowData {
  fullName: string
  warName: string
  registration: string
  birthDate: string
  rg: string
  cpf: string
  placeOfBirth: string
  ufNatural: string
  civilState: string
  cep: string
  address: string
  number: string
  neighborhood: string
  city: string
  complement: string
  uf: string
  email: string
  cellphone: string
  phone: string
  gender: string
  motherName: string
  fatherName: string
  scolarity: string
  religion: string
  bloodType: string
  actualWorkSituation: string
  admissionDate: string
  jobRole: string
  bodyOfLaw: string
  lotation: string
  workPost: string
}



export function errosData(row: RowData) {
  const errorFields: string[] = [];

  for (const key in row) {
    if (Object.prototype.hasOwnProperty.call(row, key)) {
      if (key === "cpf" || key === "fullName" || key === "email" || key === "registration") {
        const value = row[key as keyof RowData];
        const isValid = validateField(key, value);

        if (!isValid) {
          errorFields.push(key);
        }
      }
    }
  }

  return errorFields;
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


