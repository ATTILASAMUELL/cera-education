<template>
  <div class="container">
    <section class="left">
      <div class="brand">GRUPO CERA EDUCAÇÃO</div>

      <h1 class="title">
        Criar<br />
        Conta
      </h1>
      <p class="subtitle">Preencha os campos para se registrar</p>

      <form @submit.prevent="submit" class="form">
        <BaseInput v-model="form.name" placeholder="Nome completo" />
        <BaseInput v-model="form.email" type="email" placeholder="Email" />
        <BaseInput v-model="form.password" type="password" placeholder="Senha" />
        <BaseButton type="submit">Registrar</BaseButton>
      </form>

      <p class="footer">
        Já tem uma conta?
        <router-link to="/login" class="link">Entrar</router-link>
      </p>
    </section>

    <section class="right">
      <img src="/education-logo.svg" alt="Logo" class="logo" />
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../model/useAuthStore'
import BaseInput from '@/shared/ui/BaseInput.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'

const form = reactive({ name: '', email: '', password: '' })
const store = useAuthStore()
const router = useRouter()

async function submit() {
  await store.signUp(form)
  router.push('/')
}
</script>

<style scoped>
@keyframes blink-brand {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.container {
  display: flex;
  height: 100vh;
}
.left {
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6rem;
}
.right {
  flex: 0 0 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
.logo {
  max-width: 80%;
  height: auto;
}
.brand {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 3rem;
}
.brand::before {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ef4444;
  margin-right: 0.75rem;
  animation: blink-brand 1.2s infinite linear;
}
.title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.subtitle {
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
}
.form {
  width: 100%;
  max-width: 600px;
}
.footer {
  font-size: 1rem;
  color: #6b7280;
  margin-top: 3rem;
}
.link {
  color: #ef4444;
}
.link:hover {
  text-decoration: underline;
}
@media (max-width: 960px) {
  .left,
  .right {
    flex: 1 1 100%;
  }
  .right {
    display: none;
  }
  .left {
    padding: 0 2rem;
    align-items: center;
    text-align: center;
  }
}
</style>
