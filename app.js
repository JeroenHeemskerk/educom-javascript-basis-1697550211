const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.youtube.com',
            showBooks: true,
            books: [
                { title: 'dagboek van een loser', author: 'jeff', img: 'assets/3.jpg', isFav: true},
                { title: 'dagboek van een loser deel 2', author: 'jeff', img: 'assets/2.jpg', isFav: false},
                { title: 'empire', author: 'steven', img: 'assets/1.jpg', isFav: false}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type, data)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')