import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://vintagecapture.onrender.com"
})

export default axiosClient;