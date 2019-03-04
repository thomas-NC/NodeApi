<template>
    <div class="container">
        <form class="form-layout" action="" method="post">
            <md-field>
                <md-input type="text" v-model="form.name" placeholder="Name"></md-input>
            </md-field>
            <md-field>
                <md-input type="text" v-model="form.firstname" placeholder="Firstname"></md-input>
            </md-field>
            <md-field>
                <md-input type="text" v-model="form.username" placeholder="Username"></md-input>
            </md-field>
            <md-datepicker v-model="form.birthday">
                <label>Birthday</label>
            </md-datepicker>
            <md-field>
                <label>Rue, ville & code postal</label>
                <md-input v-model="form.address.street" placeholder="street"></md-input>
                <md-input v-model="form.address.city" placeholder="city"></md-input>
                <md-input v-model="form.address.cp" placeholder="cp"></md-input>
            </md-field>
            <md-field>
                <md-input v-model="form.tel" placeholder="tel"></md-input>
            </md-field>
            <md-field>
                <md-input v-model="form.mail" placeholder="mail"></md-input>
            </md-field>
            <md-field>
                <md-select v-model="form.job" placeholder="job">
                    <md-option value="Chef de projet">Chef de projet</md-option>
                    <md-option value="Développeur">Développeur</md-option>
                    <md-option value="Commercial">Commercial</md-option>
                    <md-option value="Intégrateur">Intégrateur</md-option>
                </md-select>
            </md-field>
            <template v-if="create">
                <button class="buttons" type="button" name="button" v-on:click="createSalarie(form.name, form.firstname, form.username, form.birthday, form.address, form.tel, form.mail, form.job)">Create Employee</button>
            </template>
            <template v-else>
                <button class="buttons" type="button" name="button" v-on:click="updateSalarie(form.name, form.firstname, form.username, form.birthday, form.address, form.tel, form.mail, form.job)">Update Employee</button>
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
                address: {
                    street: "",
                    city: "",
                    cp: ""
                },
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