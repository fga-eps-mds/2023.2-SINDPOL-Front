import axios from "axios"

const Authorization = localStorage.getItem("token")
  ? `Bearer ${localStorage.getItem("token")}`
  : ""

export default axios.create({
  baseURL: "https://sindpol-gateway-5b358c57af52.herokuapp.com/api/",
  //baseURL: "http://localhost:8001/",
  headers: {
    "Content-Type": "application/json",
    Authorization,
  },
})
