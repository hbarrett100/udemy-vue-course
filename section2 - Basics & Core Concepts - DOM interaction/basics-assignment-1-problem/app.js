const app = Vue.createApp({
    data() {
        return{
            name: 'Hannah',
            age: 28,
            imageLink: 'https://i.pinimg.com/originals/f3/24/30/f32430b23f1fde522dba1a3b1e1d6eea.jpg'
        }
    },
    methods: {
        ageInFive() {
            return this.age + 5;
        },
        randomNum() {
            return Math.random();
        }
    }
});


app.mount('#assignment')