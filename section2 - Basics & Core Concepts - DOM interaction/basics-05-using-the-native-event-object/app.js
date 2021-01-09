const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  // watch: {
  //   name(value) {
  //     if (value === '') {
  //       this.fullname = '';
  //     } else {
  //       this.fullname = value + ' ' + this.lastName;
  //     }
      
  //   },
  //   lastName(value) {
  //     if (value === '') {
  //       this.fullname = '';
  //     } else {
  //       this.fullname = this.name + ' ' + value;
  //     }
  //   }
  // },
  // usually only use computed properties for outputting something.
  computed: {
    fullname() {
      console.log("running again");
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      console.log("running again");
      if (this.name === '') {
        return '';
      }
      return this.name + " " + 'Barrett';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
