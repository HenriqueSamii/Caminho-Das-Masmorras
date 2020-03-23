<template>
  <div id="editarEvento">
    <h1>Editar Evento</h1>
    <form v-on:submit.prevent="modificarEvento">
      <div class="form-group">
        <label>Local</label>
        <input
          v-model="local"
          type="text"
          class="form-control"
          placeholder="Onde vai occorer este evento"
          required
          lazy
        />
      </div>
      <div class="form-group">
        <label>Custo</label>
        <input v-model="custo" type="text" class="form-control" placeholder="Custo" required lazy />
      </div>
      <div class="form-group">
        <label>Inicio Do Evento</label>
        <input v-model="inicioDoEvento" type="datetime" class="form-control" required lazy />
      </div>
      <div class="form-group">
        <label>Fim Do Evento</label>
        <input v-model="fimDoEvento" type="datetime" class="form-control" required lazy />
      </div>
      <div class="form-group">
        <label>Numero Maximo De Pessoas</label>
        <input v-model="NumeroMaximoDePessoas" type="number" class="form-control" lazy required />
      </div>
      <div class="form-group">
        <label>Sobre O Evento</label>
        <input
          v-model="sobreOEvento"
          type="text"
          class="form-control"
          placeholder="o que seu evento vai ter"
          required
          lazy
        />
      </div>

      <button type="submit" class="btn btn-primary">Editar</button>
    </form>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditarEvento",
  data: function() {
    return {
      evento: {},
      local: "",
      custo: "",
      inicioDoEvento: "",
      fimDoEvento: "",
      NumeroMaximoDePessoas: 0,
      sobreOEvento: ""
    };
  },
  methods: {
    ...mapActions(["editEvento"]),
    setarEvento: function() {
      let e = this.eventoById(this.$route.params.id);
      this.evento = e;
      this.local = e.local;
      this.custo = e.custo;
      this.inicioDoEvento = e.inicioDoEvento;
      this.fimDoEvento = e.fimDoEvento;
      this.NumeroMaximoDePessoas = e.NumeroMaximoDePessoas;
      this.sobreOEvento = e.sobreOEvento;
    },
    modificarEvento: function() {
      try {
        let e = this.evento;
        e.local = this.local;
        e.custo = this.custo;
        e.inicioDoEvento = this.inicioDoEvento;
        e.fimDoEvento = this.fimDoEvento;
        e.NumeroMaximoDePessoas = this.NumeroMaximoDePessoas;
        e.sobreOEvento = this.sobreOEvento;
        this.editEvento(e);
      } finally {
        this.$router.push({ name: "Eventos" });
      }
    }
  },
  computed: {
    ...mapGetters(["eventoById"])
  },
  created: function() {
    this.setarEvento();
  }
};
</script>
<style>
#editarEvento {
  width: 60%;
  float: none;
  margin: 0 auto;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
}
</style>;