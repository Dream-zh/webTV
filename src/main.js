import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client'

Vue.use(VueAxios, axios);

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('ws://localhost:40001')
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
