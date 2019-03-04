<template>
    <div class="form-create">
        <h2>Creation Client</h2>
        <Form :create="true"/>  
    </div>
</template>

<script>
import Form from '../components/FormsClient.vue'

export default {
    components: {
        Form
    }
}
</script>