<template>
    <div class="navbar">
        <router-link class="button" tag="md-button" to="/">Home</router-link> 
        <router-link class="button" tag="md-button" to="/projets">Projects</router-link> 
        <router-link class="button" tag="md-button" to="/clients">Clients</router-link> 
        <router-link class="button" tag="md-button" to="/salaries">Employees</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="css" scoped>
    .button {
        background-color: white;
        color: #6c3483;
        font-weight: bold;
        box-shadow: 2px 2px #6c3483;
    }
    .navbar {
        width: 100%;
        max-height: 50px;
        background: #17202a;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
</style>