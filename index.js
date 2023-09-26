const app = Vue.createApp({
    data() {
        return {
            items: {
                regular: {
                    name: "Regular",
                    price: 2,
                    description: "Regular cuppa joe.",
                },
                specialty: {
                    name: "No Specialty",
                    price: 3,
                    description: "Specialty coffee is not avaliable right now but you never know when it will be avaliable again.",
                },
            }
        }
    },
    methods: {
    }
})

app.mount("#app")