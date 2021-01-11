const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            paragraphIsVisible: true,
            inputBackgroundColor: ''
        }
    },
    computed: {
        classes() {
           return {
               user1: this.userInput === 'user1',
               user2: this.userInput === 'user2',
               visible: this.paragraphIsVisible,
               hidden: !this.paragraphIsVisible
           }
        }

    },
    methods: {
        toggleVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
});
app.mount('#assignment');