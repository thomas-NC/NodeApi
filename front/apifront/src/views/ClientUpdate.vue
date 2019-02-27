<template>
    <div class="form-create">
    <Header/>
        <h2>Modification Client </h2>
        <form action="" method="post">
            <input type="text" v-model="form.name">
            <input type="text" v-model="form.adress">
            <input type="text" v-model="form.refcontact">
            <input type="text" v-model="form.activity">
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
            this.$router.push('/clients');
        }
        
    },
    created() {
        ClientService.getClient(this.id)
        .then((data) =>
        {
            this.form = data;
        })   
    }
}
</script>