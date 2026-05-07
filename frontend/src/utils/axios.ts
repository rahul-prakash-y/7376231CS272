import axios from "axios"

const baseURL : string = import.meta.env.VITE_API_URL || "/";
const token : string = localStorage.getItem("token") || "";

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization : `Bearer ${token}`
    }
})