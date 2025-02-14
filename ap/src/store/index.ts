import { Item } from '@/types'
import { createStore } from 'vuex'

interface State {
  items: Item[]
}

export default createStore<State>({
  state: {
    items: [],
  },
  getters: {
  },
  mutations: {
    setItem(state: State, item: Item) {
      state.items = [...state.items, item]
      console.log(state.items);
    },
    removeItem(state: State, price: number) {
      state.items.splice(state.items.findIndex(item => item.price === price), 1)
      console.log(state.items);
    }
  },
  actions: {
  },
  modules: {
  }
})
