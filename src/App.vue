<template>
  <div id="app">
    <Header class="col-12" title="Caminho das Masmorras" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  /* a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  } */
}
</style>
