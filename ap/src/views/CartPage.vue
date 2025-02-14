<template>
  <SHeader />
  <div class="all">
    <h2>
      Выбранные продукты
    </h2>
    <div class="cart">
      <div v-for="item in store.state.items" :key="item" class="items">
        <div>{{ item.name }} - {{ item.quantity }} штуки по {{ item.price }} рублей ({{ item.price * item.quantity }} рублей)</div>
      </div>
    </div>
  </div>
  <SFooter />
</template>

<script lang="ts" setup>
import SHeader from '@/components/SHeader.vue';
import SFooter from '@/components/SFooter.vue';
import { useStore } from 'vuex';

const store = useStore();
</script>

<style lang="scss" scoped>
  .cart {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
    gap: 30px;
  }
  .all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>