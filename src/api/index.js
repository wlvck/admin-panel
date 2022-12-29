import axios from 'axios';

const token = localStorage.getItem('TOKEN')
const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});
http.interceptors.request.use((config) => {
    config.headers.Authorization = `${token}`
    return config
})
export {http};