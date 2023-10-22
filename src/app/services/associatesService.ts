import { createApi} from '@reduxjs/toolkit/query/react'
import { RootState } from '../store/store'
import httpClient from '../api/HttpClient'

function getAssociates() {
  httpClient.get('/associates').then(response => {
    return response.data
  }).catch(error => {
    console.log(error)
  })
}

function getAssociate(id: number) {
  httpClient.get(`/associates/${id}`).then(response => {
    return response.data
  }).catch(error => {
    console.log(error)
    return null
  })
}

function createAssociate(associate: any) {
  httpClient.post('/associates', associate).then(response => {
    return response.data
  }).catch(error => {
    console.log(error)
    return error
  })
}

function updateAssociate(id: number, associate: any) {
  httpClient.put(`/associates/${id}`, associate).then(response => {
    return response.data
  }).catch(error => {
    console.log(error)
    return error
  })
}

function deleteAssociate(id: number) {
  httpClient.delete(`/associates/${id}`).then(response => {
    return response.data
  }).catch(error => {
    console.log(error)
    return error
  })
}

export {
    getAssociates,
    getAssociate,
    createAssociate,
    updateAssociate,
    deleteAssociate
}