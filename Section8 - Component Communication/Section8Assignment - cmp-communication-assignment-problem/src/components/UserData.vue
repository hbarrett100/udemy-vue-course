<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="tel" v-model="enteredAge" />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  emits: ["new-user"],
  methods: {
    submitData() {
      this.$emit("new-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>