// 路由器
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../Views/Home.vue";
import News from '../Views/News.vue';
import Messige from '../Views/Messige.vue';
import Messagelist2 from '../Views/Messagelist2.vue';
import About from '../Views/About2.vue';
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
            path:'/news',
            component:News,
            children:[
               {
                   path:'messige',  //path左侧的/永远代表根路由 此为简写 完整为/news/messige
                   component:Messige,
                   children:[
                       {
                           path:'/news/messige/list/:id',
                          // path:'/news/messige/list/',query使用query传参路由注册时不需要占位
                           component:Messagelist2
                       }
                   ]
               }, 
               {
                   path: '/news',
                   redirect:'/news/messige'
               }
            ]
        },       
        {
            path:'/',
            redirect:'/about'
        }//访问更目录使重定向至/about
    ]
})