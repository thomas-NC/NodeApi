<template>
  <div class="salaries">
    <h1>Page Salarie</h1>
    <router-link tag="button" to='/salarie-create'>Ajouter un Salarie</router-link>
    <table v-for="salarie in salaries">
      <tr>
        <td>{{ salarie.name }}</td>
        <td>{{ salarie.firstname }}</td>
        <td>{{ salarie.username }}</td>
        <td>{{ salarie.birthday }}</td>
        <td>{{ salarie.address }}</td>
        <td>{{ salarie.tel }}</td>
        <td>{{ salarie.mail }}</td>
        <td>{{ salarie.job }}</td>
        <td><router-link tag="button" :to="{ name: 'salarie', query: { id: salarie._id }}">Details</router-link></td>
        
      </tr>  
    </table>
    
  </div>
</template>

<style scoped>
table, tr, td {
  border: 1px solid black;
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