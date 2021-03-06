import Vue from 'vue'
import App from './App.vue'
import '@styles/main.scss'
import '@libs/flexible'
import '@libs'
import '@utils/filter.js'
Vue.config.productionTip = false
import router from './router'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
