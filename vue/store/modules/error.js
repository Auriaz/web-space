
const state = {
    error: null,
}

// const getters = {

// }

const mutations = {
    setError: (state, payload) => {
        state.error = payload
    },
    clearError: (state) => {
        state.error = null
    },
}

// const actions = {

// }




export default {
    state,
    // getters,
    mutations,
    // actions
}