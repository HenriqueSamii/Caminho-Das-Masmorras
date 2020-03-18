import Vue from 'vue'
import Vuex from 'vuex'
import evento from "./modules/evento";
import post from "./modules/post";
import usuario from "./modules/usuario";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    evento,
    post,
    usuario
  }
})