<template>
    <div>
        <form action="" method="post">
            <input type="text" v-model="form.name" placeholder="nom">
            <input type="text" v-model="form.firstname" placeholder="firstname">
            <input type="text" v-model="form.username" placeholder="username">
            <input type="date" v-model="form.birthday" placeholder="birthday">
            <input type="text" v-model="form.address" placeholder="address">
            <input type="text" v-model="form.tel" placeholder="tel">
            <input type="text" v-model="form.mail" placeholder="mail">
            <input type="text" v-model="form.job" placeholder="job">
            <template v-if="create">
                <button type="button" name="button" v-on:click="createSalarie(form.name, form.firstname, form.username, form.birthday, form.address, form.tel, form.mail, form.job)">creer salarie</button>
            </template>
            <template v-else>
                <button type="button" name="button" v-on:click="updateSalarie(form.name, form.firstname, form.username, form.birthday, form.address, form.tel, form.mail, form.job)">modifier salarie</button>
            </template>
        </form>
    </div>
</template>

<script>
import SalarieService from '../services/SalarieService.vue'

export default {
    name: 'Form',
    props: [
        'create'
    ],
    data() {
        return {
            id: this.$route.query.id,
            form: {
                name: "",
                firstname: "",
                username: "",
                birthday: "",
                address: "",
                tel: "",
                mail: "",
                job: ""
            }         
        }
    },
    //si le prop create est défini comme true dans le parent, on affiche le bouton de création,
    //sinon on affiche le bouton d'update et on pré-remplit le formulaire
    methods: {
        createSalarie: function(name, firstname, username, birthday, address, tel, mail, job)
        {
            SalarieService.createSalarie(name, firstname, username, birthday, address, tel, mail, job);
            this.$router.push('/salaries');
        },
        updateSalarie: function(name, firstname, username, birthday, address, tel, mail, job)
        {
            SalarieService.updateSalarie(this.id , name, firstname, username, birthday, address, tel, mail, job);
            this.$router.push('/salaries');
        }      
    },
    //si l'id est défini, alors on est sur la page update et on pré-remplit le formulaire avec les valeurs déja
    //existantes
    created() {
        if(this.id !== undefined)
        {
            SalarieService.getSalarie(this.id)
            .then((data) =>
            {
                this.form = data;
            })  
        }
    }
}
</script>