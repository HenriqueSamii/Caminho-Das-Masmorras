<template>
  <div id="editarPost">
    <h1>Editar Post</h1>
    <form v-on:submit.prevent="editarPost">
      <div class="form-group">
        <label>Titulo</label>
        <input v-model="titulo" type="text" class="form-control" placeholder="Titulo" lazy required />
      </div>
      <div class="form-group">
        <label>URL da Imagem</label>
        <input v-model="imgURL" type="text" class="form-control" placeholder="Sua Imagem Aqui" lazy />
      </div>
      <div class="form-group">
        <label>Corpo</label>
        <input v-model="corpo" type="text" class="form-control" placeholder="Seu Post" lazy required />
      </div>

      <button type="submit" class="btn btn-primary">Editar</button>
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
      id: null,
      criadorId: null,
      titulo: "",
      imgURL: "",
      corpo: "",
      dataDeCriacao: ""
    };
  },
  computed: {
    ...mapGetters(["postById"])
  },
  methods: {
    ...mapActions(["editPost"]),
    editarPost: function() {
      this.editPost({
        id: this.id,
        criadorId: this.criadorId,
        titulo: this.titulo,
        imgURL: this.imgURL,
        corpo: this.corpo,
        dataDeCriacao: this.dataDeCriacao
      });
      this.$router.push({ name: "Home" });
    },
    setarPost: function() {
      let post = this.postById(this.$route.params.id);
      this.id = post.id
      this.criadorId = post.criadorId
      this.titulo = post.titulo
      this.imgURL = post.imgURL
      this.corpo = post.corpo
      this.dataDeCriacao = post.dataDeCriacao
    }
  },
  created: function() {
    this.setarPost();
  }
};
</script>
<style>
#editarPost {
  width: 60%;
  float: none;
  margin: 0 auto;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
}
</style>