<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <HomeLogado v-if="userLogado"/>
    <HomeNaoLogado v-else/>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */
import HomeNaoLogado from "@/components/HomeNaoLogado.vue"; 

export default {
  name: "Home",
  components: {
    //HelloWorld
    HomeNaoLogado
  },
  data: function(){
    return{
      userLogado: false
    }
  }
};
</script>
