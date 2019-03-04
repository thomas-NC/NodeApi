<template>
    <div class="form-create">
        <h2>Creation Salarie</h2>
        <Form :create="true"/>  
    </div>
</template>

<script>
import Form from '../components/FormsSalarie.vue'

export default {
    components: {
        Form
    }
}
</script>