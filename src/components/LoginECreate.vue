<template>
  <div id="loginECreate">
    <h1>{{pageTitle}}</h1>
    <form v-on:submit.prevent="metodoFormSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          ref="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
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
          placeholder="Password"
          required
        />
      </div>
      <button v-if="isLogin" type="submit" class="btn btn-primary">Logar</button>
      <button v-else type="submit" class="btn btn-primary" v-on:click="metodoCriarConta">Criar Conta</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginECreate",
  props: {
    pageTitle: String,
    isLogin: Boolean
  },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    metodoFormSubmit: function() {
      if (this.isLogin) {
        this.metodoLogin();
      } else {
        this.metodoCriarConta();
      }
    },
    metodoLogin: function() {
      //TODO: Fazer funcao de Login
      console.log(this.$refs.email.value + " " + this.$refs.password.value + " login");
      this.$router.push({ name: "Home" });
    },
    metodoCriarConta: function() {
      //TODO: Fazer funcao de Criar Conta
      console.log(this.$refs.email.value + " " + this.$refs.password.value + " criar conta");
      this.$router.push({ name: "Home" });
    }
  }
};
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