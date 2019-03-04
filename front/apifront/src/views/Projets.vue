<template>
  <div class="container">
    <h1>Page Projets</h1>
    <router-link class="cta" tag="button" to='/projet-create'>Add Project</router-link>
    <div class="table-container">
      <table class="table-layout">
        <tr>
          <th>name</th>
          <th>description</th>
          <th>starting date</th>
          <th>end date</th>
          <th>cost</th>
          <th>status</th>
          <th></th>
        </tr>
        <tr v-for="projet in projets">
          <td>{{ projet.name }}</td>
          <td>{{ projet.desc }}</td>
          <td>{{ projet.datestart }}</td>
          <td>{{ projet.dateend }}</td>
          <td>{{ projet.cost }}</td>
          <td>{{ projet.status }}</td>
          <td><router-link class="buttons" tag="button" :to="{ name: 'projet', query: { id: projet._id }}">Details</router-link></td>
        </tr> 
      </table>
    </div> 
    
  </div>
</template>

<style scoped>
.container {
  background: -webkit-linear-gradient(to right, #6c3483, #48c9b0); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #b274d7, #48c9b0);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  min-height: 768px;
}
.container h1 {
  font-size: 40px;
  text-shadow: 2px 2px #6c3483;
  margin: 60px 0 50px 0;
  color: white;
}
.table-container {
  border-top-right-radius: 2px; 
  border-top-left-radius: 2px; 
  background-color: white;
  width: 90%;
  overflow-x: auto;
}
.table-layout {
  border-collapse: collapse;
  width: 100%;
  max-width: 1360px;
  min-width: 1024px;
}
.table-layout tr td {
  min-width: 256px;
  max-width: 340px;
}
.table-layout tr td:last-child {
  min-width: 0px;
}
.table-layout {
  border: 1px solid black;
}
.table-layout th {
  color: white;
  background-color: #17202a;
  border-bottom: 2px solid #48c9b0;
  padding: 15px 20px 15px 20px;
  text-align: left;
}
.table-layout td {
  padding: 15px 20px 15px 20px;
  text-align: left;
  border-bottom: 1px solid black;
}
.buttons {
  border: none;
  width: 55px;
  height: 30px;
  background-color: #17202a;
  color: white;
  border-radius: 25px;
  box-shadow: 1px 1px #48c9b0;
}
.cta {
  border: none;
  width: 160px;
  height: 55px;
  margin: 0 0 30px 0;
  background-color: #17202a;
  color: white;
  font-size: 20px;
  border-radius: 25px;
  box-shadow: 2px 2px #48c9b0;
}
.cta:hover {
  transition: transform 0.3s;
  transform: scale(1.05);
}
.buttons:hover {
  transition: transform 0.3s;
  transform: scale(1.05);
}
.cta:active {
  transform: translateY(2px);
  box-shadow: none;
}
.buttons:active {
  transform: translateY(2px);
  box-shadow: none;
}
</style>

<script>
import ProjetService from '../services/ProjetService.vue'

export default {
  data(){
    return {
      projets: []
    }
  },
  created() {
    ProjetService.getAllProjets()
    .then((data) =>
    {
      this.projets = data;
    })
  },
  updated() {
    ProjetService.getAllProjets()
    .then((data) =>
    {
      this.projets = data;
    })
  }
  
}
</script>