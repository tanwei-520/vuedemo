<template>
    <div class="msg" style="float:left">
        <h2>留言详情（父组件）</h2>
        <HelloWorld2 :textinfo="list" :addtext="addtext" :remove="remove" :update="update"/>
        <!-- <HelloWorld2/>//编写组件标签 -->
    </div>
</template>

<script>
import HelloWorld2 from './components/HelloWorld2' //引入标签
//配置对象（与vue一致）组件里面必须写函数
export default {
  //映射组件
  components: {
    HelloWorld2,
  },
  data(){
    return{
      list:[{
        name:'TOM',
        text:'Vue 666'
      },
      {
        name:'Jim',
        text:'Vue and text'
      },
      {
        name:'Tony',
        text:'Vue is Good',
      }]
    }
  },
  methods:{
    addtext(list){
      this.list.unshift(list)
    },
    update(list,index){
      this.list.splice(index,1,list);
    },
    remove(index){
      this.list.splice(index,1);
    }
  },
  mounted(){
    //执行异步代码，监听回调
  }
}
</script>
<style >

</style>