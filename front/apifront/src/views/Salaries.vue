<template>
  <div class="container">
    <h1>Page Salarie</h1>
    <router-link class="cta" tag="button" to='/salarie-create'>Add Employee</router-link>
    <div class="table-container">
      <table class="table-layout">
        <tr>
          <th>name</th>
          <th>firstname</th>
          <th>username</th>
          <th>birthday</th>
          <th>address</th>
          <th>tel</th>
          <th>mail</th>
          <th>job</th>
          <th></th>
        </tr>
        <tr v-for="salarie in salaries">
          <td>{{ salarie.name }}</td>
          <td>{{ salarie.firstname }}</td>
          <td>{{ salarie.username }}</td>
          <td>{{ salarie.birthday }}</td>
          <td>{{ salarie.address.street }}, {{ salarie.address.cp }}, {{ salarie.address.city }}</td>
          <td>{{ salarie.tel }}</td>
          <td>{{ salarie.mail }}</td>
          <td>{{ salarie.job }}</td>
          <td><router-link class="buttons" tag="button" :to="{ name: 'salarie', query: { id: salarie._id }}">Details</router-link></td>
          
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
  width: 170px;
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
import SalarieService from '../services/SalarieService.vue'

export default {
  data(){
    return {
      salaries: []
    }
  },
  created() {
    SalarieService.getAllSalaries()
    .then((data) =>
    {
      this.salaries = data;
    })
  },
  updated() {
    SalarieService.getAllSalaries()
    .then((data) =>
    {
      this.salaries = data;
    })
  }
  
}
</script>