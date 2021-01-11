const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    computed: {
        result() {
            console.log("inside computed")
            if (this.number < 37) {
                return 'Not there yet';
            }
            else if (this.number > 37) {
                return 'Too much';
            } else {
                return this.number;
            }
        }
    },
    methods: {
        addNumber(num) {
            this.number += num
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            },5000);
        }
    }

});
app.mount('#assignment');