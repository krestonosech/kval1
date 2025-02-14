<template>
  <div class="auth">
    <h1>Регистрация</h1>
    <div>
      <input type="text" placeholder="Введите имя" v-model="username">
    </div>
    <div>
      <input type="password" placeholder="Введите пароль" v-model="password">
    </div>
    <div>
      <input type="password" placeholder="Подтвердите пароль" v-model="confirmPassword">
    </div>
    <button @click="register">Зарегистрироваться</button>
    <div class="register">
      Уже зарегистрированы?
      <button @click="router.push('auth')">Авторизоваться</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

  const username = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  async function register() {
    if (password.value!== confirmPassword.value) {
      alert('Пароли не совпадают!')
      return
    }
    try {
      const data = {
        username: username.value,
        password: password.value,
      }

      await axios.post('http://localhost:3001/register', data)
      const token = await axios.post('http://localhost:3001/auth', data)
      localStorage.setItem('token', token.data.token)
      router.push('/mainPage')
    } catch(err: any) {
      if (err.status === 409) {
        alert('Такой пользователя уже существует!')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .auth {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .register {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
  }
  h1 {
    margin-bottom: 20px;
  }
</style>