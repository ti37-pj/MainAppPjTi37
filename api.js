import axios from "axios";


const api = axios.create({
    baseURL:"http://10.60.46.31:3001/"
})

export default api;