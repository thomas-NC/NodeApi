<template>
    <div>
        <h1>{{salarie.name}}</h1>
        <p>firstname: {{salarie.firstname}}</p>
        <p>username: {{salarie.username}}</p>
        <p>adresse: {{salarie.address}}</p>
        <p>birthday: {{salarie.birthday}}</p>
        <p>tel: {{salarie.tel}}</p>
        <p>mail: {{salarie.mail}}</p>
        <p>job: {{salarie.job}}</p>
        <button type="button" v-on:click="deleteItem(id)">Supprimer un salarie</button>
        <router-link tag="button" :to="{ name: 'salarieUpdate', query: { id: salarie._id }}">Modifier un salarie</router-link>

    </div>
</template>

<script>
import SalarieService from '../services/SalarieService.vue';

export default {
    data() {
        return {
            id: this.$route.query.id,
            salarie: []
        }
    },
    created() {
        SalarieService.getSalarie(this.$route.query.id)
        .then((data) =>
        {
            this.salarie = data;
        })   
    },
    methods: {
        deleteItem: function(id){
            SalarieService.deleteSalarie(id)
            this.$router.push('/salaries');
        }
    }

}
</script>