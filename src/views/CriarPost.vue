<template>
  <div id="criarPost">
    <h1>Novo Post</h1>
    <form v-on:submit.prevent="cirarNovoPost">
      <div class="form-group">
        <label>Titulo</label>
        <input
          v-model="titulo"
          type="text"
          class="form-control"
          placeholder="Titulo"
          required
        />
      </div>
      <div class="form-group">
        <label>URL da Imagem</label>
        <input v-model="imgURL" type="text" class="form-control" placeholder="Sua Imagem Aqui" />
      </div>
      <div class="form-group">
        <label>Corpo</label>
        <input
          v-model="corpo"
          type="text"
          class="form-control"
          placeholder="Seu Post"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Criar Post</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CriarEvento",
  props: {
    pageTitle: String,
    isLogin: Boolean
  },
  data: function() {
    return {
      titulo: "",
      imgURL: "",
      corpo: ""
    };
  },
  computed: {
    ...mapGetters(["getUsuarioLogado"])
  },
  methods: {
    ...mapActions(["createPost"]),
    cirarNovoPost: function() {
      this.createPost({
        criadorId: this.getUsuarioLogado,
        titulo: this.titulo,
        imgURL: this.imgURL,
        corpo: this.corpo,
        dataDeCriacao: new Date().toLocaleString()
      });
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style>
#criarPost {
  width: 60%;
  float: none;
  margin: 0 auto;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
}
</style>