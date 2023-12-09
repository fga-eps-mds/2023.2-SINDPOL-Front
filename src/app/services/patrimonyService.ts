import httpClient from "../api/HttpClient"

async function getPatrimonys() {
  return await httpClient
    .get("/patrimonio/patrimony")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

async function getPatrimony(id: string | undefined) {
  return await httpClient
    .get(`/patrimonio/patrimony/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

async function postPatrimony(patrimony: any) {
  return await httpClient
    .post("/patrimonio/patrimony", patrimony)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function updatePatrimony(id: string | undefined, patrimony: any) {
  return await httpClient
    .put(`/patrimonio/patrimony/${id}`, patrimony)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function deletePatrimony(id: string | undefined) {
  return await httpClient
    .delete(`/patrimonio/patrimony/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

export {
  getPatrimonys,
  getPatrimony,
  postPatrimony,
  updatePatrimony,
  deletePatrimony,
}
