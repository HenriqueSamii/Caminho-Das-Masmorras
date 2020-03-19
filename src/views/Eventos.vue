<template>
  <div id="eventos">
    <button class="btn btn-primary" type="submit">Criar Evento</button>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Criador</th>
          <th scope="col">Local</th>
          <th scope="col">Custo</th>
          <th scope="col">Sobre O Evento</th>
          <th scope="col">Inicio DoEvento</th>
          <th scope="col">Fim Do Evento</th>
          <th scope="col">Lotação</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evento in this.allEventos" :key="evento">
          <!-- <th scope="row">1</th> -->
          <td>{{evento.criadorId}}<!-- {{this.usuarioById(evento.criadorId).email}} --></td>
          <td>{{evento.local}}</td>
          <td>{{evento.custo}}</td>
          <td>{{evento.sobreOEvento}}</td>
          <td>{{evento.inicioDoEvento}}</td>
          <td>{{evento.fimDoEvento}}</td>
          <td>{{evento.idDeParticipantes.length}}/{{evento.NumeroMaximoDePessoas}}</td>
          <td><button class="btn btn-primary" type="submit">Deletar</button></td>
          <td><button class="btn btn-primary" type="submit">Canselar</button></td>
          <td><button class="btn btn-primary" type="submit">Editar</button></td>
          <td><button class="btn btn-primary" type="submit">Entrar No Evento</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import Header from "./components/Header.vue";
import { mapGetters} from "vuex";
export default {
  name: "Eventos",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["allEventos","getUsuarioLogado","usuarioById"])
  }
  /* ,
  components: {
    Header
  } */
  /* {
            id: 1,
            criadorId: "1",
            local: "17, R. Nelson Mandela, 5 - Botafogo, Rio de Janeiro - RJ, 22713-588",
            custo: "5 R$ por cabeça",
            inicioDoEvento: "2020-03-12T15:00:00.511Z",
            fimDoEvento: "2020-03-12T18:30:00.511Z",
            NumeroMaximoDePessoas: 4,
            idDeParticipantes: [1],
            sobreOEvento: "Evento de 40K com tres mesas prontas para jogar"
        } */
};
</script>
<style>
</style>
