import Vue from 'vue'
import Vuex from 'vuex'
import user from './store/user'
import serversession from './store/server-session'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        serversession,
    }
})
