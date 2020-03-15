<template>
  <div id="loginECreate">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button v-if="isLogin == true" type="submit" class="btn btn-primary">Logar</button>
      <button v-else type="submit" class="btn btn-primary">Criar Conta</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginECreate",
  props: {
    isLogin: Boolean
  },
  data: function() {
    return {};
  },
  methods: {
    metodoLogin: function() {
      //TODO: Fazer funcao de Login
      this.$router.push({ name: "Home" });
    },
    metodoCriarConta: function() {
      //TODO: Fazer funcao de Criar Conta
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
<style>
#loginECreate{
    width: 60%;
    float: none;
    margin: 0 auto;
    padding-top: 2.5em;
    padding-bottom: 2.5em;
}
</style>