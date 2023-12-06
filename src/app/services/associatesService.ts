import httpClient from "../api/HttpClient"

async function getAssociates() {
  return await httpClient
    .get("/api/users/")
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

async function getAssociate(id: string | undefined) {
  return await httpClient
    .get(`/api/users/${id}`)
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
    .post("/api/users/", associate)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}

async function updateAssociate(id: string | undefined, associate: any) {
  return await httpClient
    .put(`/api/users/${id}`, associate)
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

async function disableAssociate(id: string) {
  return await httpClient
    .patch(`/api/users/${id}/disable`)
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
    .patch(`/api/users/${id}/enable`)
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
