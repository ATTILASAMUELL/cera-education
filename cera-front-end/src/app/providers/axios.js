import axios from 'axios'
import { useAuthStore } from '@/features/auth/model/useAuthStore'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })

api.interceptors.request.use(config => {
  const store = useAuthStore()
  if (store.token) config.headers.Authorization = `Bearer ${store.token}`
  return config
})

api.interceptors.response.use(
  r => r,
  async e => {
    const store = useAuthStore()
    if (e.response?.status === 401 && store.token) {
      await store.logout()
    }
    return Promise.reject(e)
  }
)

export default api
