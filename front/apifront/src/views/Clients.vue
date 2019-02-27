<template>
  <div class="clients">
    <Header/>
    <h1>Page Clients</h1>
    <router-link tag="button" to='/client-create'>Ajouter un Client</router-link>
    <table v-for="client in clients">
      <tr>
        <td>{{ client.name }}</td>
        <td>{{ client.adress }}</td>
        <td>{{ client.refcontact }}</td>
        <td>{{ client.activity }}</td>
        <td><router-link tag="button" :to="{ name: 'client', query: { id: client._id }}">Details</router-link></td>
        
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
import Header from '../components/Header.vue'
import ClientService from '../services/ClientService.vue'

export default {
  components: {
    Header
  },
  data(){
    return {
      clients: []
    }
  },
  created() {
    ClientService.getAllClients()
    .then((data) =>
    {
      this.clients = data;
    })
  },
  updated() {
    ClientService.getAllClients()
    .then((data) =>
    {
      this.clients = data;
    })
  }
  
}
</script>