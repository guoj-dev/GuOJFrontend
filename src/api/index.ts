import axios from 'axios'
import Vue from 'vue'
import store from '@/store'
import auth from './auth'

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export default {
    auth,
    
}