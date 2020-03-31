import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import Velocity from 'velocity-animate'
import 'mavon-editor-guoj/dist/css/index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io-extended';
import io from 'socket.io-client';
import vuescroll from 'vuescroll';

Vue.use(vuescroll)
const socket = io('http://127.0.0.1:3000');
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;
Vue.prototype.Velocity = Velocity;

Vue.use(VueSocketIO,socket)

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

export default new vuetify({
    icons: {
        iconfont: 'mdi',
    }
})