import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/features/auth/model/useAuthStore'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

const routes = [
  { path: '/login', component: LoginPage, meta: { guest: true } },
  { path: '/register', component: RegisterPage, meta: { guest: true } }
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, _, next) => {
  const store = useAuthStore()
  if (!to.meta.guest && !store.isAuthenticated) return next('/login')
  if (to.meta.guest && store.isAuthenticated) return next('/')
  next()
})

export default router
