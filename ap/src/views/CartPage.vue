<template>
  <div class="cart">
    {{ store.state.items }}
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { useStore } from 'vuex';

const store = useStore();
</script>

<style lang="scss" scoped>
  .cart {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>