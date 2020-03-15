<template>
  <div id="criarConta">
    <LoginECreate v-bind:isLogin="false" />
  </div>
</template>

<script>

import LoginECreate from "@/components/LoginECreate.vue";
export default {
  name: "CriarConta",
  data: function() {
    return {};
  },
  components: {
    LoginECreate
  }
};
</script>
<style>
</style>