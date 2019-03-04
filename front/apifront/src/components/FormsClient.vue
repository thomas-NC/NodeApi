<template>
    <div class="container">
        <form class="form-layout" action="" method="post">
            <md-field :class="getValidationClass('name')">
                <label>Name</label>
                <md-input name="name" type="text" v-model="form.name" placeholder="Name"></md-input>
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
            </md-field>
            <md-field>
                <label>Rue, ville & code postal</label>
                <md-input v-model="form.adress.street" placeholder="street"></md-input>
                <md-input v-model="form.adress.city" placeholder="city"></md-input>
                <md-input v-model="form.adress.cp" placeholder="cp"></md-input>
            </md-field>
            <md-field>
                <label>Nom, telephone et adresse mail</label>
                <md-input v-model="form.refcontact.name" placeholder="contact name"></md-input>
                <md-input v-model="form.refcontact.tel" placeholder="tel"></md-input>
                <md-input v-model="form.refcontact.mail" placeholder="mail"></md-input>
            </md-field>
            <md-field>
                <md-input v-model="form.activity" placeholder="Activity"></md-input>
            </md-field>
            <template v-if="create">
                <button class="buttons" type="button" name="button" v-on:click="createClient(form.name, form.adress, form.refcontact, form.activity)">create client</button>
            </template>
            <template v-else>
                <button class="buttons" type="button" name="button" v-on:click="updateClient(form.name, form.adress, form.refcontact, form.activity)">update client</button>
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
import ClientService from '../services/ClientService.vue'
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

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
                adress: {
                    street: "",
                    city: "",
                    cp: ""
                },
                refcontact: {
                    name: "",
                    tel: "",
                    mail: ""
                },
                activity: ""
            }         
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(4)
            },
            adress: {
                street: {
                    required,
                    minLength: minLength(4)
                },
                city: {
                    required,
                    minLength: minLength(4)
                },
                cp: {
                    required
                }
            },
            refcontact: {
                name: {
                    required,
                    minLength: minLength(4)
                },
                tel: {
                    required,
                    minLength: minLength(4)
                },
                mail: {
                    required,
                    email
                }
            },
            activity: {
                required,
                minLength: minLength(4)
            }
        }
    },
    //si le prop create est défini comme true dans le parent, on affiche le bouton de création,
    //sinon on affiche le bouton d'update et on pré-remplit le formulaire
    methods: {
        createClient: function(name, adress, refcontact, activity)
        {
            ClientService.createClient(name, adress, refcontact, activity);
            console.log(this.$v);
            // this.$router.push('/clients');
        },
        updateClient: function(name, adress, refcontact, activity)
        {
            ClientService.updateClient(this.id , name, adress, refcontact, activity);
            this.$router.push('/clients');
        },
        //validations
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
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