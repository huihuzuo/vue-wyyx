import Vue from "vue";
import Router from "vue-router"

import Home from "../pages/Home/Home.vue"
import Item from "../pages/Item/Item.vue"
import Category from "../pages/Category/Category.vue"
import Cart from "../pages/Cart/Cart.vue"
import Personal from "../pages/Personal/Personal.vue"
import InterLayer from "../pages/InterLayer/InterLayer.vue"
import phoneLogin from "../pages/phoneLogin/phoneLogin.vue"
import emailLogin from "../pages/emailLogin/emailLogin.vue"
import Register from "../pages/Register/Register.vue"

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:"/",
      component:Home
    },
    {
      path:"/item",
      component:Item
    },
    {
      path:"/category",
      component:Category
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/personal",
      component:Personal
    },
    {
      path:"/interLayer",
      component:InterLayer
    },
    {
      path:"/phoneLogin",
      component:phoneLogin
    },
    {
      path:"/emailLogin",
      component:emailLogin
    },
    {
      path:"/goRegister",
      component:Register
    },

  ]
})


