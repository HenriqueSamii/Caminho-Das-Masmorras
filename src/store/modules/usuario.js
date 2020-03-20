const state = {
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
    ]
};
const getters = {
    isUsuarioLogado: (state) => {
        if (state.usuarioLogadoId != null) {
            return true
        }
        return false
    },
    getUsuarioLogado: (state) => {
        return state.usuarioLogadoId
    },
    usuarioById: (state) => (id) => {
        return state.usuarios.find(usuario => usuario.id === id)
    },
    usuarioByEmail: (state) => (email) => {
        return state.usuarios.find(usuario => usuario.email === email)
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
    }
};
const mutations = {
    setUsuarioLogadoId(state, {
        id
    }) {
        state.usuarioLogadoId = id;
    },
    deleteUsuarioLogadoId(state) {
        state.usuarioLogadoId = null;
        //console.log(state.usuarioLogadoId )
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
};
const actions = {
    login({
        commit
    }, id) {
        commit('setUsuarioLogadoId', {
            id
        })
    },
    logout({
        commit
    }) {
        commit('deleteUsuarioLogadoId')
    },
    ////////////////////////////
    createUsuario({
        commit
    }, usuario) {
        commit('createUsuario', {
            usuario
        })
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};