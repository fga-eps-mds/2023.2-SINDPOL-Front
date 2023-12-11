import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store/store"
import HttpClient from "../api/HttpClient"

export interface User {
  first_name: string
  last_name: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  registration: string
  cpf: string
}

async function login(request: LoginRequest) {
  return await HttpClient
  .post('/gestao/login/user')
  .then((response) => {
    return response
  })
  .catch((error) => {
    console.log(error)
  })
}

export {
  login,
}