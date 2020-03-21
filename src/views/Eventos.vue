<template>
  <div id="eventos">
    <router-link
      tag="button"
      class="btn btn-primary"
      type="submit"
      v-if="isUsuarioLogado"
      :to="{name:'CriarEvento' }"
    >Criar Evento</router-link>
    <div class="tableScroll">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Criador</th>
            <th scope="col">Local</th>
            <th scope="col">Custo</th>
            <th scope="col">Sobre</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fim</th>
            <th scope="col">Lotação</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="evento in allEventos" :key="evento">
            <td>{{usuarioById(evento.criadorId).email}}</td>
            <td>{{evento.local}}</td>
            <td>{{evento.custo}}</td>
            <td>{{evento.sobreOEvento}}</td>
            <td>{{evento.inicioDoEvento}}</td>
            <td>{{evento.fimDoEvento}}</td>
            <td>{{evento.idDeParticipantes.length}}/{{evento.NumeroMaximoDePessoas}}</td>
            <td class="butonTd">
              <button
                class="btn btn-primary"
                type="submit"
                v-if="getUsuarioLogado == evento.criadorId"
              >Deletar</button>

              <button
                class="btn btn-primary"
                type="submit"
                v-if="estaNoEvento(evento.idDeParticipantes)"
              >Canselar</button>

              <router-link
                tag="button"
                class="btn btn-primary"
                type="submit"
                v-if="getUsuarioLogado == evento.criadorId"
                :to="{name:'EditarEvento', params: { id: evento.id } }"
              >Editar</router-link>

              <button
                class="btn btn-primary"
                type="submit"
                v-if="isUsuarioLogado && !estaNoEvento(evento.idDeParticipantes) && (evento.idDeParticipantes.length < evento.NumeroMaximoDePessoas)"
              >Entrar No Evento</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//import Header from "./components/Header.vue";
import { mapGetters } from "vuex";
export default {
  name: "Eventos",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters([
      "allEventos",
      "getUsuarioLogado",
      "usuarioById",
      "isUsuarioLogado"
    ])
  },
  methods: {
    estaNoEvento: function(lista) {
      //console.log(lista)
      for (let id of lista) {
        if (id == this.getUsuarioLogado) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>
<style>
.butonTd button {
  margin: 0.2em;
}

@media (orientation: portrait) {
  /* For vertical viewports */
  div.tableScroll {
    overflow: auto;
    white-space: nowrap;
  }
}

@media only screen and (max-device-width: 950px) {
  div.tableScroll {
    overflow: auto;
    white-space: nowrap;
  }
}
</style>
