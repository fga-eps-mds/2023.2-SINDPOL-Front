import axios from "axios";

export default axios.create({
    baseURL: "https://sindpol-gateway-5b358c57af52.herokuapp.com/api/gestao/users",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (localStorage.getItem('token') || "")
    }
});
