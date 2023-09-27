const app = Vue.createApp({
    data() {
        return {
            today: new Date(),
            openDate: new Date(2023, 9, 10),


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
        isOpen(){
            if(this.openDate>this.today){
                return false
            }else{
                return true
            }
        },
    }
})

app.mount("#app")