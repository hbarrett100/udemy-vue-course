<template>
  <user-data @new-user="addUser"></user-data>
  <active-user
  v-for="user in users"
  :key="user.id"
  :id=user.id
  :name="user.name"
  :age="user.age"
  @delete-user="deleteUser"
  ></active-user>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "hannah",
          age: 28,
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users.push(newUser);
    },
    deleteUser(id) {
        this.users = this.users.filter((user) => user.id !== id);
    }
  },
};
</script> 