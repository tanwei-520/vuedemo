import Vue from 'vue'
import App from './App'
import Fromis from './Fromis'
import Router from './Router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);
//入口js 创建VUE实例
Vue.config.productionTip = false
//el看index.html
new Vue({
    el: '#app',
    components: { App },//映射
    template: '<App/>'//模板
  })
new Vue({
  el:'#app2',
  components:{Fromis},
  template:'<Fromis/>'
})
new Vue({
  el:'#app3',
  components:{Router},
  template:'<Router/>'
})