import { defineStore } from 'pinia'
import { ref, computed } from 'vue'  
import { login, register, me } from '../api/authApi'
import { User } from '@/entities/user/model'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '')
  const user  = ref(null)

  const isAuthenticated = computed(() => !!token.value)

  async function signIn(credentials) {
    const { data } = await login(credentials)
    token.value = data.token
    localStorage.setItem('token', data.token)
    await loadUser()
  }

  async function signUp(payload) {
    await register(payload)
    await signIn({ email: payload.email, password: payload.password })
  }

  async function loadUser() {
    const { data } = await me()
    user.value = new User(data)
  }

  function logout() {
    token.value = ''
    user.value  = null
    localStorage.removeItem('token')
  }

  return { token, user, isAuthenticated, signIn, signUp, logout, loadUser }
})
