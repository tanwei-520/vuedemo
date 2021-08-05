// 路由器
import Vue from "vue";
import VueRouter from "vue-router";
import About from "../Views/About.vue";
import Home from "../Views/Home.vue";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/',
            redirect:'/about'
        }//访问更目录使重定向至/about
    ]
})