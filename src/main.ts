import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import Velocity from 'velocity-animate'
import mavonEditor from 'mavon-editor-guoj'
import 'mavon-editor-guoj/dist/css/index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'




Vue.config.productionTip = false;
Vue.prototype.Velocity = Velocity;
Vue.use(mavonEditor)



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