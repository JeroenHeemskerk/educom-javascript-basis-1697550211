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
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')