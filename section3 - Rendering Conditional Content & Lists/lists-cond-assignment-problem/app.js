const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            tasks: [],
            listIsVisible: true,
        }
    },
    computed: {
        buttonText() {
            return this.listIsVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
        },
        toggleListVisibility() {
            this.listIsVisible = !this.listIsVisible;
        }
    }
});
app.mount('#assignment');