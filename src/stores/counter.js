import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const user = ref({})
  function increment() {
    count.value++
  }

  async function getUser() {
    user.value = await axios.get('https://zappme-c489a-default-rtdb.firebaseio.com/')
  }

  return { count, doubleCount, increment, user, getUser }
})
