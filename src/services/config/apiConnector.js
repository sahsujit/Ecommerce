import axios from "axios";


export const apiConnector = axios.create({
    baseURL:process.env.BASE_URL
})