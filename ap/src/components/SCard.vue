<template>
  <div>
    <div class="card">
      <img :src="image">
      <div>Цена: {{ props.price }}</div>
      <div>Описание:  {{ props.description }}</div>
      <div v-if="store.state.items.findIndex(item => item.price === price) === -1" class="number">
        <button @click="decrement">-</button>
        <div>{{ number }}</div>
        <button @click="++number">+</button>
      </div>
      <button v-if="store.state.items.findIndex(item => item.price === price) === -1" @click="addItem">Добавить в корзину</button>
      <div v-else class="remove">
        Toвар добавлен в корзину
        <button @click="removeItem">Убрать из карзины</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const number = ref(0);
const image = ref<string>('');

const emit = defineEmits(['addItem', 'removeItem']);
const props = defineProps<{
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
  const item = {
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
</style>