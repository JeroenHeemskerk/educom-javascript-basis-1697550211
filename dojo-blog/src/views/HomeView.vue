<template>
  <div class="home">
    <p>home...</p>
    <p ref="p">name: {{ name }} en age: {{ age }}</p>
    <button @click="handleClick">klik me</button>
    <button @click="age++" >get 1 year older</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {

    const name = ref('Mario')
    const age = ref(35)

    const handleClick = () => {
      name.value = 'Luigi'
      age.value = 30
    }

    return { 
      name,
      age,
      handleClick
    }
  }
}
</script>
