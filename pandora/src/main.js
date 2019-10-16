import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Index from './views/index.vue'
import PopularGift from './views/popular_gift.vue'

Vue.component("my-header",Header)
Vue.component("my-footer",Footer)
Vue.component("index",Index)
Vue.component("popular_gift",PopularGift)

Vue.config.productionTip = false

Vue.use(jquery)
Vue.use(bootstrap)
//引入axios模块
import axios from "axios"
//配置服务器基础路径
axios.defaults.baseURL = "http://127.0.0.1:4000/"
//配置保存session信息
axios.defaults.withCredentials = true
//axios注册vue
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
