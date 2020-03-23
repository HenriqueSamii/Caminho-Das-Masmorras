<template>
  <div class="container">
    <div class="card">
      <h2 class="card-title">{{postContent.titulo}}</h2>
      <dir class="butoesDiv">
        <router-link
          tag="button"
          class="btn btn-primary btnEditar"
          type="submit"
          v-if="getUsuarioLogado == this.postContent.criadorId"
          :to="{name:'EditarPost', params: { id: this.postContent.id } }"
        >Editar</router-link>
        <button
          class="btn btn-danger btnDeletar"
          type="button"
          v-on:click="deleteThisPos"
          v-if="getUsuarioLogado == this.postContent.criadorId"
        >Deletar</button>
      </dir>
      <img
        v-if="(this.postContent.imgURL != null && this.postContent.imgURL != '')"
        class="card-img-top"
        v-bind:src="this.postContent.imgURL"
        alt="Card image"
        style="width:100%"
      />
      <div class="card-body">
        <p class="card-text sideText">Postado Por: {{usuarioById(this.postContent.criadorId).nome}}</p>
        <p class="card-text sideText">PostadoEm: {{this.postContent.dataDeCriacao}}</p>
        <p class="card-text mainText">{{this.postContent.corpo}}</p>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
import { mapGetters, mapActions } from "vuex";
//import { mapGetters } from "vuex";
export default {
  name: "loginECreate",
  props: {
    postContent: Object
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["getUsuarioLogado", "usuarioById"])
  },
  methods: {
    ...mapActions(["deletePost"]),
    deleteThisPos: function() {
      this.deletePost(this.postContent.id);
    }
  }
};
</script>
<style>
.container {
  width: 70%;
  background-color: transparent;
}
.btnEditar,
.btnDeletar {
  width: 50%;
}
.butoesDiv {
  padding: 0%;
  margin: 0%;
  display: inline-block;
}
.mainText{
  font-size: 1.5em;
}
.sideText{
  font-weight: bold;
}
.card{
  background-color: antiquewhite;
}
</style>