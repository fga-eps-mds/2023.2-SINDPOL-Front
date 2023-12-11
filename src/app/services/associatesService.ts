import httpClient from "../api/HttpClient"

async function getAssociates() {
  return await httpClient
    .get("/api/gestao/users")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

async function getAssociate(id: string | undefined) {
  return await httpClient
    .get(`/api/gestao/users/${id}`)
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
    .post("/api/gestao/users", associate)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function updateAssociate(id: string | undefined, associate: any) {
  return await httpClient
    .put(`/api/gestao/users/${id}`, associate)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function deleteAssociate(id: string | undefined) {
  return await httpClient
    .delete(`/api/gestao/users/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

async function disableAssociate(id: string) {
  return await httpClient
    .patch(`/api/gestao/users/${id}/disable`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function enableAssociate(id: string) {
  return await httpClient
    .patch(`/api/gestao/users/${id}/enable`)
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
  disableAssociate,
  enableAssociate,
}
