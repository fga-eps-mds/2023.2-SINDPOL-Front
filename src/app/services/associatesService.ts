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
<<<<<<< HEAD
}

async function disableAssociate(id: string) {
  return await httpClient
    .patch(`/gestao/users/${id}/disable`)
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
    .patch(`/gestao/users/${id}/enable`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return error
    })
=======
>>>>>>> 90cc137f826ff71a2ae6b4e39484c6ab71de8439
}

export {
  getAssociates,
  getAssociate,
  postAssociate,
  updateAssociate,
  deleteAssociate,
<<<<<<< HEAD
  disableAssociate,
  enableAssociate,
=======
>>>>>>> 90cc137f826ff71a2ae6b4e39484c6ab71de8439
}
