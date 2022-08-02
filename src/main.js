import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import axios from 'axios'
import apiFun from "@/utils/api.js";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.prototype.$axios = axios
Vue.prototype.$apiFun = apiFun;//请求接口api


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
