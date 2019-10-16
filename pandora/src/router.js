import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import PopularGift from './views/popular_gift.vue'
import PopularGiftSets from './views/popular_gift_sets.vue'
import Gift from './views/gift.vue'
import Stringing from './views/Stringing.vue'
import Gift_pro from './views/gift_pro_detail.vue'
import Product_details from './views/product_details.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import '@/components/header.vue'
import '@/components/footer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/popular_gift",component:PopularGift},
    {path:"/popular_gift_sets",component:PopularGiftSets},
    {path:"/gift",component:Gift},
    {path:"/stringing",component:Stringing},
    {path:"/gift_pro",component:Gift_pro},
    {path:"/product_details",component:Product_details},
    {path:"/login",component:Login},
    {path:"/register",component:Register}
  ]
})
