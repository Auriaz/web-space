// import db from '../../firebase/firestore'

const state = {
    users: [],
}

const getters = {
    getUsers: state => {
        return state.users
    }
}

const mutations = {
    setLoadedUsers: (state, payload) => {
        state.users.push(payload)
    },
    createdUser: (state, payload) => {
        state.users.push(payload)
    },
    updatedUser: (state, user) => {
        state.users.forEach(element => {
            if (element.user_id == user.user_id) {
                element = user
            }
        });
    },
    deletedUser: (state, email) => {
        let index = state.users.findIndex(user => user.email == email)
        state.users.splice(index, 1)
    },
}

// const actions = {
//     deletedUser({ commit }, user) {
//         db
//             .collection('users')
//             .where('email', '==', user.email)
//             .get()
//             .then(query => {
//                 query.forEach(doc => {
//                     doc.ref.delete()
//                 });
//                 commit('deletedUser', user.email)
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'success',
//                     text: `Użytkownik o meilu ${user.email} został usuniety`,
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
//     updatedUser({ commit }, user) {
//         db
//             .collection('users')
//             .where('user_id', '==', user.user_id)
//             .get()
//             .then(query => {
//                 query.forEach(doc => {
//                     doc.ref.update(user)
//                         .then(() => {
//                             commit('updatedUser', user.data())
//                             commit('addMessage', {
//                                 icon: 'fas fa-envelope',
//                                 color: 'success',
//                                 text: 'Dane użytkownika zostały uaktualnione',
//                                 snackbar: true,
//                             })
//                         })
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
//     loadUsers({ commit }) {
//         commit('setLoading', true)

//         db
//             .collection('users')
//             .orderBy('department')
//             .get()
//             .then(query => {
//                 query.forEach(doc => {
//                     const users = {
//                         id: doc.id,
//                         user_id: doc.data().user_id,
//                         department: doc.data().department,
//                         roles: doc.data().roles,
//                         authenticator: doc.data().authenticator,
//                         email: doc.data().email,
//                         first_name: doc.data().first_name,
//                         last_name: doc.data().last_name,
//                         avatar: doc.data().avatar,
//                         avatar_url: doc.data().avatar_url,
//                         createdAt: doc.data().createdAt
//                     }
//                     commit('setLoadedUsers', users)
//                 })

//                 commit('setLoading', false)
//             })
//             .catch(error => {
//                 commit('setLoading', false)
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'error',
//                     text: error.message,
//                     snackbar: true,
//                 })
//             })
//     },
//     createdUser({ commit }, payload) {
//         db.collection('users')
//             .add(payload)
//             .then(docRef => {
//                 let key = docRef.id

//                 commit('createdUser', { ...payload, id: key })
//                 commit('addMessage', {
//                     icon: 'fas fa-envelope',
//                     color: 'success',
//                     text: `Nowy użytkownik o mailu ${payload.email} został dodany`,
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