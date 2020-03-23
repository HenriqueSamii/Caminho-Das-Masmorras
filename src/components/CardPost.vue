<template>
  <div id="cardPost">
    {{this.postContent}}
    <router-link
      tag="button"
      class="btn btn-primary"
      type="submit"
      v-if="getUsuarioLogado == this.postContent.criadorId"
      :to="{name:'EditarPost', params: { id: this.postContent.id } }"
    >Editar</router-link>
    <button
                class="btn btn-primary"
                type="button"
                v-on:click="deleteThisPos"
                v-if="getUsuarioLogado == this.postContent.criadorId"
              >Deletar</button>
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
    ...mapGetters(["getUsuarioLogado"])
  },
  methods: {
    ...mapActions(["deletePost"]),
    deleteThisPos: function(){
      this.deletePost(this.postContent.id)
    }
  }
};
</script>
<style>
</style>