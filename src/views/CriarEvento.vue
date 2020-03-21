<template>
  <div id="criarEvento">
    <h1>Novo Evento</h1>
    <form v-on:submit.prevent="cirarNovoEvento">
      <div v-if="!isLogin" class="form-group">
        <label for="exampleInputEmail1">Nome</label>
        <input
          v-model="nome"
          ref="nome"
          type="text"
          class="form-control"
          id="exampleInputNome1"
          aria-describedby="nomeHelp"
          placeholder="Entere com o seu Nome"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          v-model="email"
          ref="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Entere com o seu email"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          ref="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Entere com o sua Password"
          required
        />
      </div>
      <button v-if="isLogin" type="submit" class="btn btn-primary">Logar</button>
      <button v-else type="submit" class="btn btn-primary">Criar Conta</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
//import { mapGetters, mapActions } from "vuex";

export default {
  name: "CriarEvento",
  props: {
    pageTitle: String,
    isLogin: Boolean
  },
  data: function() {
    return {
      erro: "",
      email: "",
      password: "",
      nome: ""
    };
  },
  methods: {
    ...mapActions(["login", "createUsuario"]),
    cirarNovoEvento: function(){
        
    }
  }
};

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
</script>
<style>
#loginECreate {
  width: 60%;
  float: none;
  margin: 0 auto;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
}
</style>