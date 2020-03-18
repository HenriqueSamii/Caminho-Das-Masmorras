import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioLogadoId: null,
    usuarios: [{
        id: 1,
        nome: "teste nome 1",
        email: "a@a.com",
        password: "a"
      },
      {
        id: 2,
        nome: "teste nome 2",
        email: "aa@a.com",
        password: "a"
      }
    ],
    posts: [{
        id: 1,
        criadorId: "1",
        titulo: "post 1",
        imgURL: "https://img4.goodfon.com/wallpaper/big/1/2b/warhammer-40-000-death-guard-mortarion-nurgle-plague.jpg",
        corpo: "Nurgle is coming",
        dataDeCriacao: "2020-03-12T18:25:43.511Z"
      },
      {
        id: 2,
        criadorId: "1",
        titulo: "post 2",
        imgURL: "https://i.pinimg.com/736x/38/06/45/38064594c06483f3a13a84c911c947db.jpg",
        corpo: "praised be the omnissiah",
        dataDeCriacao: "2020-03-20T18:25:43.511Z"
      },
      {
        id: 3,
        criadorId: "2",
        titulo: "post 2",
        corpo: "E ai, quem topa uma mesa de D&D amanhã?",
        dataDeCriacao: "2020-03-20T18:25:43.511Z"
      }
    ],
    eventos: [{
        id: 1,
        criadorId: "1",
        local: "17, R. Nelson Mandela, 5 - Botafogo, Rio de Janeiro - RJ, 22713-588",
        custo: "5 R$ por cabeça",
        inicioDoEvento: "2020-03-12T15:00:00.511Z",
        fimDoEvento: "2020-03-12T18:30:00.511Z",
        NumeroMaximoDePessoas: 4,
        idDeParticipantes: [1],
        sobreOEvento: "Evento de 40K com tres mesas prontas para jogar"
      },
      {
        id: 2,
        criadorId: "2",
        local: "Rua Benjamin Constant, 48 - Glória, Rio de Janeiro - RJ, 20241-150",
        custo: "Gratuito",
        inicioDoEvento: "2020-03-21T15:00:00.511Z",
        fimDoEvento: "2020-03-21T1:30:00.511Z",
        NumeroMaximoDePessoas: 6,
        idDeParticipantes: [],
        sobreOEvento: "E ai, quem topam uma D&D amanhã?"
      }
    ]
  },
  getters: {
    usuarioById: (state) => (id) => {
      return state.usuarios.find(usuario => usuario.id === id)
    },
    allUsuarios: state => {
      return state.usuarios
    },
    usuarioNomeExists: (state) => (nome) => {
      let usuario = state.usuarios.find(usuario => usuario.nome === nome);
      if (usuario) {
        return true
      }
      return false
    },
    usuarioEmailExists: (state) => (email) => {
      let usuario = state.usuarios.find(usuario => usuario.email === email);
      if (usuario) {
        return true
      }
      return false
    },
    ///////////////////////////
    allPosts: state => {
      return state.posts
    },
    postById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    //////////////////////////
    allEventos: state => {
      return state.eventos
    },
    eventoById: (state) => (id) => {
      return state.usuarios.find(evento => evento.id === id)
    },
    meusEventos: (state) => {
      return state.usuarios.find(evento => evento.criadorId === usuarioLogadoId)
    }
  },
  mutations: {
    setUsuarioLogadoId(state, {
      id
    }) {
      state.usuarioLogadoId = id;
    },
    deleteUsuarioLogadoId(state) {
      state.usuarioLogadoId = null;
    },
    ///////////////////////////
    createUsuario(state, {
      usuario
    }) {
      let idHolder = 0;
      for (let e of state.usuarios) {
        if (idHolder < e.id) {
          idHolder = e.id;
        }
      }
      usuario.id = ++idHolder;
      state.usuarios.push(usuario);
    },
    ///////////////////////////
    createPost(state, {
      post
    }) {
      let idHolder = 0;
      for (let e of state.posts) {
        if (idHolder < e.id) {
          idHolder = e.id;
        }
      }
      post.id = ++idHolder;
      state.posts.push(post);
    },
    deletePost(state, {
      id
    }) {
      for (let [i, post] of state.posts) {
        if (post.id == id) {
          state.posts.splice(i, 1);
          break;
        }
      }
    },
    editPost(state, {
      post
    }) {
      for (let [i, e] of state.posts) {
        if (e.id == post.id) {
          state.posts[i] = post;
          break;
        }
      }
    },
    ///////////////////////////
    createEvento(state, {
      evento
    }) {
      let idHolder = 0;
      for (let e of state.eventos) {
        if (idHolder < e.id) {
          idHolder = e.id;
        }
      }
      evento.id = ++idHolder;
      state.eventos.push(evento);
    },
    deleteEvento(state, {
      id
    }) {
      for (let [i, evento] of state.eventos) {
        if (evento.id == id) {
          state.eventos.splice(i, 1);
          break;
        }
      }
    },
    editEvento(state, {
      evento
    }) {
      for (let [i, e] of state.eventos) {
        if (e.id == evento.id) {
          state.eventos[i] = evento;
          break;
        }
      }
    }
  },
  actions: {
    login({commit} , id) {
      commit('setUsuarioLogadoId', {
        id
      })
    },
    logout({commit}) {
      commit('deleteUsuarioLogadoId')
    },
    ////////////////////////////
    createUsuario({commit} , usuario) {
      commit('createUsuario', {
        usuario
      })
    },
    ////////////////////////////
    createPost({commit} , post) {
      commit('createPost', {
        post
      })
    },
    deletePost({commit} , id) {
      commit('deletePost', {
        id
      })
    },
    editPost({commit} , post) {
      commit('editPost', {
        post
      })
    },
    ////////////////////////////
    createEvento({commit} , evento) {
      commit('createEvento', {
        evento
      })
    },
    deleteEvento({commit} , id) {
      commit('deleteEvento', {
        id
      })
    },
    editEvento({commit} , evento) {
      commit('editEvento', {
        evento
      })
    }
  }
})