<template>
  <div id="editarEvento">
    <h1>{{this.$route.params.id}}</h1>
    
  </div>
</template>

<script>
//import { mapActions } from "vuex";
//import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditarEvento",
  props: {
    id: Number,
    //isLogin: Boolean
  },
  data: function() {
    return {
      /* erro: "",
      email: "",
      password: "",
      nome: "" */
    };
  },
  methods: {
    /* ...mapActions(["login", "createUsuario"]),
    cirarNovoEvento: function(){ 
        
    }*/
  }
};

<style>

</style>