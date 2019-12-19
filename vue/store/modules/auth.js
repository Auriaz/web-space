// import auth from '../../firebase/auth'  
// import db from '../../firebase/firestore'
// import store from '../index'

const state = {
    user: null,
    online: false,
}

const getters = {
    online: (state) => {
        if (state.user !== null && state.user !== undefined) {
            return state.online = true
        }
    },
    user: (state) => {
        if (state.user !== null && state.user !== undefined) {
            return state.user
        }
    }
}

const mutations = {
    logout: (state) => {
        state.user = null
        state.online = false
    },
    setUser: (state, payload) => {
        state.user = payload
    },
}

// const actions = {
//     registration({ commit }, payload) {
//         commit('setLoading', true)
//         // commit('clearError')
//         auth
//             .createUserWithEmailAndPassword(payload.email, payload.password)
//             .then(query => {
//                 commit('setLoading', false)

//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'success',
//                     text: `Konto dla maila ${query.user.email} zostało utworzone`,
//                     snackbar: true,
//                 })
//             })
//             .catch(error => {
//                 commit('setLoading', false)
//                 // commit('setError', error)
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'error',
//                     text: error.message,
//                     snackbar: true,
//                 })
//             })
//     },
//     login({ commit }, payload) {
//         commit('setLoading', true)
//         // commit('clearError')
//         auth
//             .signInWithEmailAndPassword(payload.email, payload.password)
//             .then(query => {
//                 commit('setLoading', false)
//                 db.collection("users")
//                     .where("email", "==", query.user.email)
//                     .get()
//                     .then(querySnapshot => {
//                         querySnapshot.forEach(doc => {
//                             commit("setUser", doc.data());
//                         });
//                     });

//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'success',
//                     text: 'Użytkownik został pomyślnie zalogowany',
//                     snackbar: true,
//                 })
//             })
//             .catch(error => {
//                 store.commit('setLoading', false)
//                 // commit('setError', error.message)
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'error',
//                     text: error.message,
//                     snackbar: true,
//                 })
//             })
//     },
//     logout({ commit }) {
//         auth
//             .signOut()
//             .then(() => {
//                 commit('logout')
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'success',
//                     text: 'Użytkownik został pomyślnie wylogowany',
//                     snackbar: true,
//                 })
//             })
//             .catch(error => {
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'error',
//                     text: error.message,
//                     snackbar: true,
//                 })
//             })
//     },
// }




export default {
    state,
    getters,
    mutations,
    // actions
}