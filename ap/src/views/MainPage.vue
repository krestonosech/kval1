<template>
  <div class="auth">
    <SHeader v-model:items="items" />
    <div class="cards">
      <SCard :price="123" description="huynya" @add-item="addItem" @remove-item="removeItem" img="logo.png"/>
      <SCard :price="245" description="qwer" @add-item="addItem" @remove-item="removeItem"/>
      <SCard :price="5425" description="123" @add-item="addItem" @remove-item="removeItem"/>
      <SCard :price="2346" description="5445" @add-item="addItem" @remove-item="removeItem"/>
    </div>
    <SFooter />
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
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
  margin-top: 50px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>