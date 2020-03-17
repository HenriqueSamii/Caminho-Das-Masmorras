import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios:[
      {id:1,nome:"teste nome 1",email:"a@a.com",password:"a"},
      {id:2,nome:"teste nome 2",email:"aa@a.com",password:"a"}
    ],
    posts:[
      {id:1, criadorId:"1",titulo:"post 1",imgURL:"https://img4.goodfon.com/wallpaper/big/1/2b/warhammer-40-000-death-guard-mortarion-nurgle-plague.jpg",corpo:"Nurgle is coming",dataDeCriacao:"2020-03-12T18:25:43.511Z"},
      {id:2, criadorId:"1",titulo:"post 2",imgURL:"https://i.pinimg.com/736x/38/06/45/38064594c06483f3a13a84c911c947db.jpg",corpo:"praised be the omnissiah", dataDeCriacao:"2020-03-20T18:25:43.511Z"},
      {id:3, criadorId:"2",titulo:"post 2",corpo:"E ai, quem topa uma mesa de D&D amanhã?", dataDeCriacao:"2020-03-20T18:25:43.511Z"}
    ],
    eventos:[
      {id:1, criadorId:"1",local:"17, R. Nelson Mandela, 5 - Botafogo, Rio de Janeiro - RJ, 22713-588",custo:"5 R$ por cabeça",inicioDoEvento:"2020-03-12T15:00:00.511Z",fimDoEvento:"2020-03-12T18:30:00.511Z", NumeroMaximoDePessoas:4,idDeParticipantes:[1,2],sobreOEcento:"Evento de 40K com tres mesas prontas para jogar"},
      {id:2, criadorId:"2",local:"Rua Benjamin Constant, 48 - Glória, Rio de Janeiro - RJ, 20241-150",custo:"Gratuito",inicioDoEvento:"2020-03-21T15:00:00.511Z",fimDoEvento:"2020-03-21T1:30:00.511Z", NumeroMaximoDePessoas:6,idDeParticipantes:[1,2],sobreOEcento:"E ai, quem topam uma D&D amanhã?"}
    ]
  },
  getters:{
    getUsuarioById: (state) => (id) => {
      return state.usuarios.find(todo => todo.id === id)
    },
    getAllUsuarios: state => {
      return state.usuarios
    }
  }
  ,mutations: {
  },
  actions: {
  },
  modules: {
  }
})
