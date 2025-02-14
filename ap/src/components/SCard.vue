<template>
  <div>
    <div class="card">
      <img :src="image">
      <div>{{ props.name }}</div>
      <div>Цена: {{ props.price }}</div>
      <div class="description">Описание:  {{ props.description }}</div>
      <div v-if="flag" class="number">
        <button @click="decrement">-</button>
        <div>{{ number }}</div>
        <button @click="++number">+</button>
      </div>
      <button v-if="flag" @click="addItem">Добавить в корзину</button>
      <div v-else class="remove">
        Toвар добавлен в корзину
        <button @click="removeItem">Убрать из карзины</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, computed } from 'vue';
import { useStore } from 'vuex';
import { Item } from '@/types';

const store = useStore();
const number = ref(0);
const image = ref<string>('');
const flag = computed(() => store.state.items.findIndex((item: Item )=> item.price === props.price) === -1)

const emit = defineEmits(['addItem', 'removeItem']);
const props = defineProps<{
  name: string;
  price: number;
  description: string;
  img?: string;
}>();

watch(() => props.img, async () => {
  if (props.img) {
    const imgModule = await import(`../assets/${props.img}`);
    image.value = imgModule.default;
  }
}, { immediate: true });

function decrement() {
  if (number.value === 0) return;
  --number.value;
}

function addItem() {
  if (number.value === 0) return alert("Please select");
  const item = {
    name: props.name,
    price: props.price,
    description: props.description,
    img: image.value,
    quantity: number.value,
    totalPrice: number.value * props.price,
  };
  emit('addItem', item);
  number.value = 0;
}

function removeItem() {
  emit('removeItem', props.price);
}
</script>


<style lang="scss" scoped>
  .card {
    border: solid black 1px;
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 300px;
    gap: 10px;
    align-items: center;
    flex-direction: center;
    border-radius: 20px;
    padding: 10px;
  }
  .remove {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .number {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  img {
    width: 130px;
    height: 130px;
  }
  .description {
    text-align: center;
  }
</style>