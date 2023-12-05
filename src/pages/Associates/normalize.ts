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

export function normalizeAndCreateObject(row:RowData) {
    return {
      fullName: row.fullName,
      warName: row.warName,
      registration: row.registration,
      birthDate: new Date(row.birthDate).getTime(),
      rg: row.rg,
      cpf: row.cpf,
      placeOfBirth: row.placeOfBirth,
      ufNatural: row.ufNatural,
      civilState: row.civilState,
      cep: row.cep,
      address: row.address,
      number: row.number,
      neighborhood: row.neighborhood,
      city: row.city,
      complement: row.complement,
      uf: row.uf,
      email: row.email,
      cellphone: row.cellphone,
      phone: row.phone,
      gender: row.gender,
      motherName: row.motherName,
      fatherName: row.fatherName,
      scolarity: row.scolarity,
      religion: row.religion,
      bloodType: row.bloodType,
      actualWorkSituation: row.actualWorkSituation,
      admissionDate: new Date(row.admissionDate).getTime(),
      jobRole: row.jobRole,
      bodyOfLaw: row.bodyOfLaw,
      lotation: row.lotation,
      workPost: row.workPost,
      systemRole: "Sindicalizado",
      password: "1234",
      dependents:[]
    };
  }
  