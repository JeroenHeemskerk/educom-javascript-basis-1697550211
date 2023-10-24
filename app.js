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
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')