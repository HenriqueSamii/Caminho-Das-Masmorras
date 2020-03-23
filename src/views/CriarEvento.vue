<template>
  <div id="criarEvento">
    <h1>Novo Evento</h1>
    <form v-on:submit.prevent="cirarNovoEvento">
      <div class="form-group">
        <label>Local</label>
        <input
          v-model="local"
          type="text"
          class="form-control"
          placeholder="Onde vai occorer este evento"
          required
        />
      </div>
      <div class="form-group">
        <label>Custo</label>
        <input
          v-model="custo"
          type="text"
          class="form-control"
          placeholder="Custo"
          required
        />
      </div>
      <div class="form-group">
        <label>Inicio Do Evento</label>
        <input
          v-model="inicioDoEvento"
          type="datetime"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label>Fim Do Evento</label>
        <input
          v-model="fimDoEvento"
          type="datetime"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label>Numero Maximo De Pessoas</label>
        <input
          v-model="NumeroMaximoDePessoas"
          type="number"
          class="form-control"
          lazy
          required
        />
      </div>
      <div class="form-group">
        <label>Sobre O Evento</label>
        <input
          v-model="sobreOEvento"
          type="text"
          class="form-control"
          placeholder="o que seu evento vai ter"
          required
        />
      </div>
      
      <button type="submit" class="btn btn-primary">Criar Evento</button>
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
      local: "",
      custo: "",
      inicioDoEvento: "",
      fimDoEvento: "",
      NumeroMaximoDePessoas: 0,
      sobreOEvento: ""
    };
  },
  computed: {
    ...mapGetters(["getUsuarioLogado"])
  },
  methods: {
    ...mapActions(["createEvento"]),
    cirarNovoEvento: function() {
      this.createEvento({
        criadorId: this.getUsuarioLogado,
        local: this.local,
        custo: this.custo,
        inicioDoEvento: this.inicioDoEvento,
        fimDoEvento: this.fimDoEvento,
        NumeroMaximoDePessoas: this.NumeroMaximoDePessoas,
        idDeParticipantes: [],
        sobreOEvento: this.sobreOEvento
      });
      this.$router.push({ name: "Eventos" });
    }
  }
};
</script>
<style>
#criarEvento {
  width: 60%;
  float: none;
  margin: 0 auto;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
}

</style>