import { FormState } from "./formControl"

export function createObjectToSubmit(formState: FormState, dependents: any[]) {
  let data = {
    fullName: formState.fullName.value,
    warName: formState.warName.value,
    credential: formState.credential.value,
    birthDate: formState.birthDate.value,
    rg: formState.rg.value,
    cpf: formState.cpf.value,
    natural: formState.natural.value,
    ufNatural: formState.ufNatural.value,
    civilState: formState.civilState.value,
    cep: formState.cep.value,
    address: formState.address.value,
    number: formState.number.value,
    city: formState.city.value,
    uf: formState.uf.value,
    complement: formState.complement.value,
    email: formState.email.value,
    cellphone: formState.cellphone.value,
    phone: formState.phone.value,
    gender: formState.gender.value,
    motherName: formState.motherName.value,
    fatherName: formState.fatherName.value,
    scolarity: formState.scolarity.value,
    religion: formState.religion.value,
    bloodType: formState.bloodType.value,
    actualSituation: formState.actualSituation.value,
    admissionDate: formState.admissionDate.value,
    role: formState.role.value,
    bodyOfLaw: formState.bodyOfLaw.value,
    workPost: formState.workPost.value,
    lotation: formState.lotation.value,
    dependents: dependents,
  }

  return data
}

export function validateField(key: string, value: any) {
  switch (key) {
    case "fullName" || "warName":
      return validateString(value)
  }

  return true
}

export function validateString(value: string) {
  return true
}
