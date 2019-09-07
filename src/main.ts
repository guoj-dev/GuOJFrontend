import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import Velocity from 'velocity-animate'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader



Vue.config.productionTip = false;
Vue.prototype.Velocity = Velocity;



new Vue({
  vuetify,
  router,
  store,
  GeminiScrollbar,
  render: h => h(App)
}).$mount('#app')

export default new vuetify({
  icons: {
    iconfont: 'md',
  }
})