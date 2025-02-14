<template>
  <div class="auth">
    <SHeader v-model:items="items" />
    <div class="cards">
      <SCard name="хлеб" :price="50" description="Супер мега крутой хлеб с манией величия" @add-item="addItem" @remove-item="removeItem" img="logo.png"/>
      <SCard name="Цикорий" :price="245" description="Классный цикорий с возбуждающим эффектом" @add-item="addItem" @remove-item="removeItem" img="logo.png"/>
      <SCard name="Морковь" :price="13" description="Просто морковь" @add-item="addItem" @remove-item="removeItem" img="logo.png"/>
      <SCard name="Курская область" :price="2000000" description="Такое в приличном обществе не обсуждается..." @add-item="addItem" @remove-item="removeItem" img="logo.png"/>
    </div>
    <SFooter />
  </div>
</template>

<script lang="ts" setup>
import SHeader from '@/components/SHeader.vue';
import SFooter from '@/components/SFooter.vue';
import SCard from '@/components/SCard.vue';
import { useStore } from 'vuex';
import { Item } from '@/types';
import { ref } from 'vue';

const store = useStore()
const items = ref<Item[]>([])
function addItem(item: Item) {
  store.commit('setItem', item)
}

function removeItem(price: number) {
  store.commit('removeItem', price)
}
</script>

<style lang="scss" scoped>
.cards {
  gap: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>