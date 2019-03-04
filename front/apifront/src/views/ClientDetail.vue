<template>
    <div>
        <h1>{{client.name}}</h1>
        <p>adresse: {{client.adress}}</p>
        <p>contact référent: {{client.refcontact}}</p>
        <p>secteur d'activité: {{client.activity}}</p>
        <button type="button" v-on:click="deleteItem(id)">Supprimer un client</button>
        <router-link tag="button" :to="{ name: 'clientUpdate', query: { id: client._id }}">Modifier un client</router-link>

    </div>
</template>

<script>
import ClientService from '../services/ClientService.vue';

export default {
    data() {
        return {
            id: this.$route.query.id,
            client: []
        }
    },
    created() {
        ClientService.getClient(this.$route.query.id)
        .then((data) =>
        {
            this.client = data;
        })   
    },
    methods: {
        deleteItem: function(id){
            ClientService.deleteClient(id)
            this.$router.push('/clients');
        }
    }

}
</script>