import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLocalStorage from 'vue-localstorage'
//import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'
import router from './router/route'

Vue.use(ElementUI)
Vue.use(VueLocalStorage)
//Vue.use(VueSession)
Vue.use(VueCookies)
Vue.use(router)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
