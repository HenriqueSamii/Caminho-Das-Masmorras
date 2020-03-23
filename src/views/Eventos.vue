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
                v-on:click="deletrarEvento(evento.id)"
              >Deletar</button>

              <button
                class="btn btn-primary"
                type="submit"
                v-if="estaNoEvento(evento.idDeParticipantes)"
                v-on:click="sairDoEvento(evento.id)"
              >Sair</button>

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
                v-on:click="entrarNoEvento(evento.id)"
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
import { mapGetters, mapActions } from "vuex";
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
      "isUsuarioLogado",
      "eventoById",
      "getUsuarioLogado"
    ])
  },
  methods: {
    ...mapActions(["editEvento", "deleteEvento"]),
    estaNoEvento: function(lista) {
      //console.log(lista)
      for (let id of lista) {
        if (id == this.getUsuarioLogado) {
          return true;
        }
      }
      return false;
    },
    deletrarEvento: function(id) {
      this.deletePost(id);
    },
    sairDoEvento: function(id) {
      let even = this.eventoById(id);
      for (let i in even.idDeParticipantes) {
        if (even.idDeParticipantes[i] == this.getUsuarioLogado) {
          even.idDeParticipantes.splice(i, 1);
          this.editEvento(even);
          break;
        }
      }
    },
    entrarNoEvento: function(id) {
      let e = this.eventoById(id);
      e.idDeParticipantes.push(this.getUsuarioLogado);
      this.editEvento(e);
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
