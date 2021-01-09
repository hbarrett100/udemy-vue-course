const app = Vue.createApp({
    data() {
        return {
            input: '',
            confirmedInput: ''
        }
     
    },
    methods: {
        showAlert() {
            alert('Button pressed!');
        },
        showValue(event) {
            this.input = event.target.value;
        },
        confirmInput(event) {
            this.confirmedInput = this.input;
        }
    }

});
app.mount('#assignment');