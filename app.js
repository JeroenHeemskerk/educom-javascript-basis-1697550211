const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'empire',
            author: 'stephan',
            age: 22
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')