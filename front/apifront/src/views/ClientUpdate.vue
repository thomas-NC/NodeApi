<template>
    <div class="form-update">
        <h2>Update Client</h2>       
        <Form/>
    </div>
</template>

<style lang="css" scoped>
.form-update {
    background: -webkit-linear-gradient(to right, #6c3483, #48c9b0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #b274d7, #48c9b0);
    min-height: 768px;
}
h2 {
    text-align: center;
    font-size: 35px;
    text-shadow: 2px 2px #6c3483;
    margin: 60px 0 50px 0;
    color: white;
}
</style>

<script>
import Form from '../components/FormsClient.vue'

export default {
    components: {
        Form
    }
}
</script>