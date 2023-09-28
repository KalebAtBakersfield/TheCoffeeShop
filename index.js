const app = Vue.createApp({
    data() {
        return {
            today: new Date(2024,9),
            openDate: new Date(2023, 9, 10),


            items: {
                regular: {
                    name: "Regular",
                    price: 2,
                    description: "Regular cuppa joe.",
                },
                specialty: {
                    name: "Specialty",
                    price: 3,
                    description: "Periodically we will have specialty coffee. We will let you know when it will be avaliable.",
                },
            }
        }
    },
    methods: {
    }
})

app.mount("#app")