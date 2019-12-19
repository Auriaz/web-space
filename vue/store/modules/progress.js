
const state = {
    loading: false,
    progress: null,
}

const getters = {
    loading: (state) => {
        return state.loading
    },
    progress: (state) => {
        return state.progress
    }
}

const mutations = {
    setLoading: (state, payload) => {
        state.loading = payload
    },
    // setProgress: (state, payload) => {
    //     state.progress = payload
    // },
    // clearProgress: (state) => {
    //     state.progress = null
    // }
}

// const actions = {
//     progressEvent({ commit }, payload) {
//         commit('setProgress', payload)

//         if (payload == 100) {
//             commit('clearProgress')
//         }

//     }
// }

export default {
    state,
    getters,
    mutations,
    // actions
}