<template>
    <div class="form-create">
    <Header/>
        <h2>Creation Client</h2>
        <form action="" method="post">
            <input type="text" v-model="name" placeholder="nom">
            <input type="text" v-model="adress" placeholder="adresse">
            <input type="text" v-model="refcontact" placeholder="contact référent">
            <input type="text" v-model="activity" placeholder="activité">
            <button type="button" name="button" v-on:click="formData(name, adress, refcontact, activity)">creer client</button>
        </form>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ClientService from '../services/ClientService.vue'

export default {
    components: {
        Header
    },
    data() {
        return {
            name: "",
            adress: "",
            refcontact: "",
            activity: ""
        }
    },
    methods: {
        formData: function(name, adress, refcontact, activity)
        {
            ClientService.createClient(name, adress, refcontact, activity);
            console.log(name + adress + refcontact + activity);
            //redirection sur la page clients après la création du client
            //this.$router.push('/clients');
        }
        
    }
}
</script>