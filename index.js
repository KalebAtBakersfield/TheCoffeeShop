const app = Vue.createApp({
    data() {
        return {
            today: new Date(2024,9),
            openDate: new Date(2023, 9, 10),
        }
    },
    methods: {
    }
})

app.mount("#app")