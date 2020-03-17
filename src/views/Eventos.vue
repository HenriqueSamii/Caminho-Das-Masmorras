<template>
  <div id="eventos">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">local</th>
          <th scope="col">custo</th>
          <th scope="col">sobreOEvento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evento in todosEventos" :key="evento">
          <!-- <th scope="row">1</th> -->
          <td>{{evento.id}}</td>
          <td>{{evento.local}}</td>
          <td>{{evento.custo}}</td>
          <td>{{evento.sobreOEvento}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import Header from "./components/Header.vue";
export default {
  name: "Eventos",
  data: function() {
    return {};
  },
  computed: {
    todosEventos() {
      return this.$store.getters.allEventos;
    }
  }
  /* ,
  components: {
    Header
  } */
};
</script>
<style>
</style>
