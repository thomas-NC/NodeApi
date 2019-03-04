<template>
    <div class="container">
        <form class="form-layout" action="" method="post">
            <md-field>
                <md-input type="text" v-model="form.name" placeholder="Name"></md-input>
            </md-field>
            <md-field>
                <md-input type="text" v-model="form.desc" placeholder="Description"></md-input>
            </md-field>
            <md-datepicker v-model="form.datestart">
                <label>Starting date</label>
            </md-datepicker>
            <md-datepicker v-model="form.dateend">
                <label>End date</label>
            </md-datepicker>
            <md-field>
                <md-input v-model="form.cost" placeholder="Total cost"></md-input>
            </md-field>
            <md-field>
                <md-select v-model="form.status" placeholder="Status">
                    <md-option value="In progress">In progress</md-option>
                    <md-option value="Canceled">Canceled</md-option>
                    <md-option value="Finished">Finished</md-option>
                    <md-option value="Prospect">Prospect</md-option>
                </md-select>
            </md-field>
            <template v-if="create">
                <button class="buttons" type="button" name="button" v-on:click="createProjet(form.name, form.desc, form.datestart, form.dateend, form.cost, form.status)">create project</button>
            </template>
            <template v-else>
                <button class="buttons" type="button" name="button" v-on:click="updateProjet(form.name, form.desc, form.datestart, form.dateend, form.cost, form.status)">update project</button>
            </template>
        </form>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
    background: transparent;
}
.form-layout {
    width: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background: white;
    padding: 25px 25px 25px 25px;
    box-shadow: 2px 2px black;
}
.buttons {
  border: none;
  width: auto;
  height: 40px;
  background-color: #17202a;
  color: white;
  border-radius: 25px;
  box-shadow: 1px 1px #48c9b0;
  margin: 10px 10px 0 10px;
}
.buttons:hover {
  transition: transform 0.3s;
  transform: scale(1.05);
}
.buttons:active {
  transform: translateY(2px);
  box-shadow: none;
}  
</style>

<script>
import ProjetService from '../services/ProjetService.vue'

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
                desc: "",
                datestart: "",
                dateend: "",
                cost: "",
                status: ""
            }         
        }
    },
    //si le prop create est défini comme true dans le parent, on affiche le bouton de création,
    //sinon on affiche le bouton d'update et on pré-remplit le formulaire
    methods: {
        createProjet: function(name, desc, datestart, dateend, cost, status)
        {
            ProjetService.createProjet(name, desc, datestart, dateend, cost, status);
            this.$router.push('/projets');
        },
        updateProjet: function(name, desc, datestart, dateend, cost, status)
        {
            ProjetService.updateProjet(this.id , name, desc, datestart, dateend, cost, status);
            this.$router.push('/projets');
        }      
    },
    //si l'id est défini, alors on est sur la page update et on pré-remplit le formulaire avec les valeurs déja
    //existantes
    created() {
        if(this.id !== undefined)
        {
            ProjetService.getProjet(this.id)
            .then((data) =>
            {
                this.form = data;
            })  
        }
    }
}
</script>