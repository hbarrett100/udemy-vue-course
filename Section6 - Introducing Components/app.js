const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'orla',
                    name: 'Orla Finan',
                    phone: 0861200842,
                    email: "orla@orla.com"
                },

            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }} </li>
        </ul>
    </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friend: {

                id: 'conor',
                name: 'Conor Short',
                phone: 086493284098,
                email: "conor@short.com"

            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});


app.mount('#app');