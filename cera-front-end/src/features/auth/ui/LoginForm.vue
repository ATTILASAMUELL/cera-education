<template>
  <div class="container">
    <section class="left">
      <div class="brand">GRUPO CERA EDUCAÇÃO</div>

      <h1 class="title">
        Olá,<br />
        Seja Bem vindo
      </h1>
      <p class="subtitle">
        Olá, bem-vindo de volta ao seu lugar especial de educação
      </p>

      <form @submit.prevent="submit" class="form">
        <BaseInput v-model="form.email" type="email" placeholder="stanley@gmail.com" />
        <BaseInput v-model="form.password" type="password" placeholder="●●●●●●●●" />

        <div class="row">
          <BaseCheckbox v-model="form.remember">Lembre de mim</BaseCheckbox>
          <router-link to="/forgot" class="link">Esqueceu sua senha?</router-link>
        </div>

        <BaseButton type="submit">Entrar</BaseButton>
      </form>

      <p class="footer">
        Não tem uma conta?
        <router-link to="/signup" class="link">Inscrever-se</router-link>
      </p>
    </section>

    <section class="right">
      <img src="/education-logo.svg" alt="Logo" class="logo" />
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../model/useAuthStore'
import { useRouter } from 'vue-router'
import BaseInput from '@/shared/ui/BaseInput.vue'
import BaseButton from '@/shared/ui/BaseButton.vue'
import BaseCheckbox from '@/shared/ui/BaseCheckbox.vue'

const form = reactive({ email: '', password: '', remember: false })
const store = useAuthStore()
const router = useRouter()

async function submit() {
  await store.signIn(form)
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
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 1.25rem;
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
