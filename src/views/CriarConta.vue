<template>
  <div id="criarConta">
    
  </div>
</template>

<script>

//import Header from "./components/Header.vue";
export default {
  name: "CriarConta",
  data: function(){
    return{};
  },
  methods:{
    metodoCriarConta: function() {
      //TODO: Fazer funcao de Criar Conta
      this.$router.push({ name: 'Home' });
    }
  }/* ,
  components: {
    Header
  } */
};
</script>
<style>
</style>