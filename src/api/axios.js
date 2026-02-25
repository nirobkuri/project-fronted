import axios from 'axios'

const API = axios.create({
  baseURL: "https://project-backend-one-sigma.vercel.app/api",
})

// Attach token to every request if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
})

export default API
