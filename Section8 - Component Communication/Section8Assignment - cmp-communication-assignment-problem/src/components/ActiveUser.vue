<template>
  <h2>Name {{ name }}</h2>
  <h3>Age {{ age }}</h3>
  <button @click="deleteUser">Delete</button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  emits: ['delete-user'],
  methods: {
      deleteUser() {
          this.$emit('delete-user', this.id)
      }
  }
};
</script>