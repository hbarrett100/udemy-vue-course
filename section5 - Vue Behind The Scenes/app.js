const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: { 
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()")
  },
  created() {
    console.log("created()");
  },
  mounted() {
    console.log("mounted!");
  }
});

app.mount('#app');
