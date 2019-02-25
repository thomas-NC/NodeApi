<template>
    <div class="form-create">
    <Header/>
        <h2>Modification Client </h2>
        <form action="" method="post">
            <input type="text" v-model="form.name" placeholder="nom">
            <input type="text" v-model="form.adress" placeholder="adresse">
            <input type="text" v-model="form.refcontact" placeholder="contact référent">
            <input type="text" v-model="form.activity" placeholder="activité">
            <button type="button" name="button" v-on:click="formData(form.name, form.adress, form.refcontact, form.activity)">modifier client</button>
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
            id: this.$route.query.id,
            form: {
                name: "",
                adress: "",
                refcontact: "",
                activity: ""
            }
            
        }
    },
    methods: {
        formData: function(name, adress, refcontact, activity)
        {
            ClientService.updateClient(this.id , name, adress, refcontact, activity);
            //console.log(id +name + adress + refcontact + activity);
            //redirection sur la page clients après la création du client
            //this.$router.push('/clients');
        }
        
    }
}
</script>