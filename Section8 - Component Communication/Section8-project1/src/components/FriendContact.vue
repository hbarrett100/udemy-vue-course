<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">ToggleFavorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props: {
    id: {
       type: String, 
      required: true
    },
    name: {
      type: String, 
      required: true
    },
    phoneNumber: {
      type: String, 
      required: true

    }, 
    emailAddress: {
      type: String, 
      required: true
    },
    isFavorite: {
      type: Boolean, 
      required: false,
      default: false
      // // validator function for props sent from parent
      // validator: function(value) {
      //   return value === "1" || value === "0"
      // }

    }
  },
  // document the events which will be emitted from the component
  emits: [
    'toggle-favorite',
    'delete-friend'
  ],
  // emits: {
    // this specifies that toggle-favorite is a function which depends on id
    // can add validation - can make debugging easier
    // 'toggle-favorite': function(id) {
    //   if (id) {
    //     return true;
    //   } else {
    //     console.warn("id is missing!");
    //     return false;
    //   }
    // }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  }
};
</script>