<template>
  <div id="homeLogado">
    {{this.usuarioById(this.getUsuarioLogado)}}
    <div class="cardList">
      <div class="card" v-for="post of this.allPosts" :key="post">
        <CardPost v-bind:postContent="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardPost from "@/components/CardPost.vue";

export default {
  name: "HomeLogado",
  data: function(){
    return{};
  },computed: {
    ...mapGetters(["getUsuarioLogado","usuarioById","allPosts"])
  },
  components: {
    CardPost
  }
};
</script>
<style>
</style>
