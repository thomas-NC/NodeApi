<template>
  <div id="general-layout">
    <Header/>
    <router-view/>
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
export default {
  components: {
    Header
  }
}
</script>
