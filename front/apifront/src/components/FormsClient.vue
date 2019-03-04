<template>
    <div>
        <form action="" method="post">
            <input type="text" v-model="form.name" placeholder="nom">
            <input type="text" v-model="form.adress" placeholder="adresse">
            <input type="text" v-model="form.refcontact" placeholder="contact référent">
            <input type="text" v-model="form.activity" placeholder="activité">
            <template v-if="create">
                <button type="button" name="button" v-on:click="createClient(form.name, form.adress, form.refcontact, form.activity)">creer client</button>
            </template>
            <template v-else>
                <button type="button" name="button" v-on:click="updateClient(form.name, form.adress, form.refcontact, form.activity)">modifier client</button>
            </template>
        </form>
    </div>
</template>

<script>
import ClientService from '../services/ClientService.vue'

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
                adress: "",
                refcontact: "",
                activity: ""
            }         
        }
    },
    //si le prop create est défini comme true dans le parent, on affiche le bouton de création,
    //sinon on affiche le bouton d'update et on pré-remplit le formulaire
    methods: {
        createClient: function(name, adress, refcontact, activity)
        {
            ClientService.createClient(name, adress, refcontact, activity);
            this.$router.push('/clients');
        },
        updateClient: function(name, adress, refcontact, activity)
        {
            ClientService.updateClient(this.id , name, adress, refcontact, activity);
            this.$router.push('/clients');
        }      
    },
    //si l'id est défini, alors on est sur la page update et on pré-remplit le formulaire avec les valeurs déja
    //existantes
    created() {
        if(this.id !== undefined)
        {
            ClientService.getClient(this.id)
            .then((data) =>
            {
                this.form = data;
            })  
        }
    }
}
</script>