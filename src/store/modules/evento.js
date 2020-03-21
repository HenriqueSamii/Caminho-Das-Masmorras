const state = {
    eventos: [{
            id: 1,
            criadorId: 1,
            local: "17, R. Nelson Mandela, 5 - Botafogo, Rio de Janeiro - RJ, 22713-588",
            custo: "5 R$ por cabeça",
            inicioDoEvento: "2020-03-12T15:00:00.511Z",
            fimDoEvento: "2020-03-12T18:30:00.511Z",
            NumeroMaximoDePessoas: 4,
            idDeParticipantes: [],
            sobreOEvento: "Evento de 40K com tres mesas prontas para jogar"
        },
        {
            id: 2,
            criadorId: 2,
            local: "Rua Benjamin Constant, 48 - Glória, Rio de Janeiro - RJ, 20241-150",
            custo: "Gratuito",
            inicioDoEvento: "2020-03-21T15:00:00.511Z",
            fimDoEvento: "2020-03-21T1:30:00.511Z",
            NumeroMaximoDePessoas: 6,
            idDeParticipantes: [1],
            sobreOEvento: "E ai, quem topam uma D&D amanhã?"
        }
    ]
};
const getters = {
    allEventos: state => {
        return state.eventos
    },
    eventoById: (state) => (id) => {
        return state.eventos.find(evento => evento.id === id)
    },
    meusEventos: (state) => {
        return state.eventos.find(evento => evento.criadorId === state.usuarioLogadoId)
    }
};
const mutations = {
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
};
const actions = {
    createEvento({
        commit
    }, evento) {
        commit('createEvento', {
            evento
        })
    },
    deleteEvento({
        commit
    }, id) {
        commit('deleteEvento', {
            id
        })
    },
    editEvento({
        commit
    }, evento) {
        commit('editEvento', {
            evento
        })
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};