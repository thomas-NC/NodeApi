<template>
  <div id="general-layout">
    <Header/>
    <router-view/>

    <Footer/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR|Raleway');

#general-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
