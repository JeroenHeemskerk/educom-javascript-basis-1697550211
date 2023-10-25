<template>
  <div>
    <h1>{{ title }}</h1>
    <p>welkom</p>
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <h1>Login</h1>
        <p>doe het nu</p>

        <template v-slot:links>
          <a href="#">registeer</a>
          <a href="#">doe het nu</a>
        </template>
      </Modal>
    </div>
    <div v-if="showModal2">
      <Modal @close="toggleModal2">
        <h1>geheime modal</h1>
        <p>welkom</p>
      </Modal>
    </div>
    <button @click="toggleModal">open modal</button>
    <button @click="toggleModal2">open geheime modal</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Eerste vue app met titel',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
