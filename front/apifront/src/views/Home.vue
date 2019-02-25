<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li>Nombre de Clients actuels -->{{ info.clients }}</li>
      <li>Nombre de Projets actuels -->{{ info.projets }}</li>
      <li>Nombre de Salaries actuels -->{{ info.salaries }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/Header.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header
  },
  data() {
    return {
      info: []
    }
  },
  created() {
    fetch('http://localhost:3333/')
    .then((response) =>
    {
      return response.json();
    })
    .then((data) =>
    {
      this.info = data;
      console.log(this.info);
    })
  }
}
</script>
