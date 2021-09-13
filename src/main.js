import Vue from 'vue'
import App from './App'
import Fromis from './Fromis'
import Router2 from './Router2'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import  router from './router/';
import store from './store';
Vue.use(ElementUI);
//入口js 创建VUE实例 配置对象一般为特定属性值，不能随意修改
Vue.config.productionTip = false
//el看index.html
new Vue({
    el: '#app',
    components: { App },//映射
    template: '<App/>',//模板
  })
new Vue({
  el:'#app2',
  components:{Fromis},
  template:'<Fromis/>',
})
new Vue({
  el:'#app3',
  components:{Router2},
  template:'<Router2/>',
  router,
  store//所有的组件对象都多了一个属性$store
})