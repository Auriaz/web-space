import Vue from 'vue'
import Vuex from 'vuex'


// import auth from './modules/auth'
// import error from './modules/error'
import home from './modules/home'
import messages from './modules/messages'
import progress from './modules/progress'
// import users from './modules/users'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // auth: auth,
        home: home,
        // error: error,
        messages: messages,
        progress: progress,
        // users: users
    }
})