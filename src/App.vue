<template>
  <div id="app">
    <Header class="col-12" title="Caminho das Masmorras" />
    <div id="corpo">
      <router-view/>
    </div>
  </div>
</template>

<script>
//import Main from "./components/Main.vue";
//import CartaoFilme from "./components/CartaoFilme.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  data: function(){
    return{};
  },
  components: {
    Header
  }
};
</script>

<style>
body{
  width: 100%;
}
#corpo{
  width: 90%;
  margin:0 auto;
  background-color: slategray;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
 */
  /* a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  } */
/* } */
</style>
