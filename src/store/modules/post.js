const state = {
    posts: [{
            id: 1,
            criadorId: 1,
            titulo: "post 1",
            imgURL: "https://img4.goodfon.com/wallpaper/big/1/2b/warhammer-40-000-death-guard-mortarion-nurgle-plague.jpg",
            corpo: "Nurgle is coming",
            dataDeCriacao: "2020-03-12T18:25:43.511Z"
        },
        {
            id: 2,
            criadorId: 1,
            titulo: "post 2",
            imgURL: "https://i.pinimg.com/736x/38/06/45/38064594c06483f3a13a84c911c947db.jpg",
            corpo: "praised be the omnissiah",
            dataDeCriacao: "2020-03-20T18:25:43.511Z"
        },
        {
            id: 3,
            criadorId: 2,
            titulo: "post 2",
            corpo: "E ai, quem topa uma mesa de D&D amanhã?",
            dataDeCriacao: "2020-03-20T18:25:43.511Z"
        }
    ]
};
const getters = {

    ///////////////////////////
    allPosts: state => {
        return state.posts
    },
    postById: (state) => (id) => {
        return state.posts.find(post => post.id === id)
    }
};
const mutations = {
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
        for (let i in state.posts) {
            if (state.posts[i].id == post.id) {
                state.posts[i] = post;
                break;
            }
        }
    }
};
const actions = {
    createPost({
        commit
    }, post) {
        commit('createPost', {
            post
        })
    },
    deletePost({
        commit
    }, id) {
        commit('deletePost', {
            id
        })
    },
    editPost({
        commit
    }, post) {
        commit('editPost', {
            post
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
};