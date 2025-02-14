<template>
  <div class="header">
    <div class="auth">
      <button>здесь будет фотка</button>
      <button @click="router.push('mainPage')">Главная страница</button>
      <button @click="router.push('cart')">Корзина</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';


</script>

<style lang="scss" scoped>
  .auth {
    width: 500px;
    display: flex;
    justify-content: space-around;
  }
  .header {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>