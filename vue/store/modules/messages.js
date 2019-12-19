const state = {
    messages: [
        { icon: 'far fa-handshake', color: 'info', text: 'Witaj na stronie WebSpace', snackbar: true },
    ],
}

const getters = {
    getMessages: (state) => {
        return state.messages
    }
}

const mutations = {
    setMessage: (state, msg) => {
        state.messages.push(msg)
    },
}

export default {
    state,
    getters,
    mutations,
}