<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/projets">Projets</router-link> |
        <router-link to="/clients">Clients</router-link> |
        <router-link to="/salaries">Salaries</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>