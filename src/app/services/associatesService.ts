import httpClient from "../api/HttpClient"

async function getAssociates() {
  return await httpClient
    .get("/gestao/users")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

async function getAssociate(id: number) {
  return await httpClient
    .get(`/gestao/users/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

async function postAssociate(associate: any) {
  return await httpClient
    .post("/gestao/users", associate)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function updateAssociate(id: number, associate: any) {
  return await httpClient
    .put(`/user/${id}`, associate)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function deleteAssociate(id: number) {
  return await httpClient
    .delete(`/user/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

export {
  getAssociates,
  getAssociate,
  postAssociate,
  updateAssociate,
  deleteAssociate,
}
