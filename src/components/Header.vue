<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link tag="b-navbar-brand" :to="{name:'main'}">Caminho Das Masmorras</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" :to="{name:'main'}">Home</router-link>
          <router-link tag="b-nav-item" :to="{name:'main'}">Eventos</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link tag="b-nav-item" :to="{name:'criarConta'}">Criar Conta</router-link>
            <router-link tag="b-nav-item" :to="{name:'login'}">Login</router-link>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    myFunction: function() {
      return null;
    }
  }
};
</script>

<style>

</style>
