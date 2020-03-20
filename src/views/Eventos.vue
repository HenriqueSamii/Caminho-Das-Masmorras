<template>
  <div id="eventos">
    <button class="btn btn-primary" type="submit" v-if="isUsuarioLogado">Criar Evento</button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Criador</th>
          <th scope="col">Local</th>
          <th scope="col">Custo</th>
          <th scope="col">Sobre/th>
          <th scope="col">Inicio</th>
          <th scope="col">Fim</th>
          <th scope="col">Lotação</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evento in allEventos" :key="evento">
          <td><!-- {{usuarioById(evento.criadorId).email}} --></td>
          <td>{{evento.local}}</td>
          <td>{{evento.custo}}</td>
          <td>{{evento.sobreOEvento}}</td>
          <td>{{evento.inicioDoEvento}}</td>
          <td>{{evento.fimDoEvento}}</td>
          <td>{{evento.idDeParticipantes.length}}/{{evento.NumeroMaximoDePessoas}}</td>
          <td>
            <button
              class="btn btn-primary"
              type="submit"
              v-if="getUsuarioLogado == evento.criadorId"
            >Deletar</button>
          </td>
          <td>
            <!-- <button
              class="btn btn-primary"
              type="submit"
              v-if="estaNoEvento(evento.criadorId)"
            >Canselar</button>-->
          </td>
          <td>
            <button
              class="btn btn-primary"
              type="submit"
              v-if="getUsuarioLogado == evento.criadorId"
            >Editar</button>
          </td>
          <td>
            <!-- <button
              class="btn btn-primary"
              type="submit"
              v-if="!estaNoEvento(evento.criadorId)"
            >Entrar No Evento</button>-->
          </td>
        </tr>
      </tbody>
    </table>
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
    ]),
    estaNoEvento: function(listaDeIdDeParticipantes) {
      if (this.isUsuarioLogado) {
        for (let id of listaDeIdDeParticipantes) {
          if (id == this.getUsuarioLogado) {
            return true;
          }
        }
      }
      return false;
    }
  }
};
</script>
<style>
</style>
