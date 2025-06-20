import api from '@/app/providers/axios'

export function login(payload) {
  return api.post('/auth/login', payload)
}

export function register(payload) {
  return api.post('/auth/register', payload)
}

export function me() {
  return api.get('/auth/me')
}
