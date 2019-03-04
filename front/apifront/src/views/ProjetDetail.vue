<template>
    <div class="container">
        <div class="content">
            <h1>{{projet.name}}</h1>
            <p><strong>name:</strong> {{projet.name}}</p>
            <p><strong>desc:</strong> {{projet.desc}}</p>
            <p><strong>date start:</strong> {{projet.datestart}}</p>
            <p><strong>date end:</strong> {{projet.dateend}}</p>
            <p><strong>cost:</strong> {{projet.cost}}</p>
            <p><strong>status:</strong> {{projet.status}}</p>
            <div class="buttons-layout">
                <button class="buttons" type="button" v-on:click="deleteItem(id)">Supprimer un projet</button>
                <router-link class="buttons" tag="button" :to="{ name: 'projetUpdate', query: { id: projet._id }}">Modifier un projet</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
  background: -webkit-linear-gradient(to right, #6c3483, #48c9b0); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #b274d7, #48c9b0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  min-height: 768px;
}
.content {
    background: white;
    border-radius: 2px;
    box-shadow: 3px 3px #6c3483;
    width: 90%;
}
.content h1 {
    text-align: center;
    font-size: 35px;
    padding: 15px 20px 0 20px;
    text-decoration: underline;
}
.content p {
    font-size: 20px;
    padding: 10px 30px 0px 40px;
}
.buttons-layout {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 25px 25px 25px;
}
.buttons {
  border: none;
  width: auto;
  height: 30px;
  background-color: #17202a;
  color: white;
  border-radius: 25px;
  box-shadow: 1px 1px #48c9b0;
  margin: 0 10px 0 10px;
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
import ProjetService from '../services/ProjetService.vue';

export default {
    data() {
        return {
            id: this.$route.query.id,
            projet: []
        }
    },
    created() {
        ProjetService.getProjet(this.$route.query.id)
        .then((data) =>
        {
            this.projet = data;
        })   
    },
    methods: {
        deleteItem: function(id){
            ProjetService.deleteProjet(id)
            this.$router.push('/projets');
        }
    }

}
</script>