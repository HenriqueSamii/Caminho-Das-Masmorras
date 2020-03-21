<template>
  <div id="editarEvento">
    <h1>{{eventoById(this.$route.params.id)}}</h1>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "EditarEvento",
  data: function() {
    return {
      /* evento: "test" */
    }
  },
  methods: {
    /* ...mapActions(["login", "createUsuario"]),
    setarEvento: function() {
      this.evento = this.eventoById(this.$route.params.id);
    } */
  },
  computed: {
    ...mapGetters(["eventoById"])
  }/* ,
  created: function() {
    this.setarEvento();
  } */
};

<style></style>;

/* name: "editarEvento",
  props: {
    //id: Number
    //isLogin: Boolean
  },
  data: function() {
    return {
      evento: "teste"
    }
  },
  methods: {
    ...mapActions(["login", "createUsuario"]),
    setarEvento: function() {
      this.evento = this.eventoById(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters(["eventoById"])
  },
  created: function() {
    //this.setarEvento();
  }
 */