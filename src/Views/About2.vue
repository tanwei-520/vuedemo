<template>
<div>
    <h5>vuex</h5>
    <hr/>
    <h6>对vue应用中多个组件的共享状态进行集中式的管理</h6>
    <textarea style="width:470px;height:300px">在视图中触发方法引起状态的改变,状态改变后引起视图的改变（单向的数据链）
        state: 驱动应用的数据源
        2) view: 以声明方式将 state 映射到视图
        3) actions: 响应在 view 上的用户输入导致的状态变化(包含 n 个更新状态的方法)
    </textarea>
    <img src="../../img/vuex.png">
    <p style="font-size:16px;">check：{{$store.state.count}}，count is {{odd}}</p>
    <button @click="add()" class="btn btn-default">对象+</button>
    <button @click="add2()" class="btn btn-default">数组+</button>
    <button @click="dep()" class="btn btn-danger">-</button>
    <button @click="ifq()" class="btn btn-primary">偶·</button>
    <input type="text" v-model="$store.state.count">
    <h6>{{$store.state.a1}},{{$store.state.a2}}</h6>
</div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{ 
        }
    },
    computed:{
        // odd(){
        //     //js中要写this
        //     return this.$store.getters.odd
        // },  
        ...mapGetters(['odd'])
    },
    methods: {
        add(){
            let a=this.$store.state.count+1;
            console.log('a:'+a);
            const ac={
                a1:a+1,
                a2:a-1,
            }
            console.log(ac.a1,ac.a2);
            this.$store.dispatch('add',{ac})//触发store  this.$store.dispatch('dep',data)data此组件管理的数据
        },
        add2(){
            let a=this.$store.state.count+1;
            this.$store.dispatch('add2',[a+2,a-2])
        },
        // dep(){
        //     this.$store.dispatch('dep')
        // },
        // ifq(){
        //     this.$store.dispatch('ifq')
        // },
        ...mapActions(['dep','ifq'])//简化代码mapActions({store.js的名称:改组件调用函数的名称})尽量一致
    },
}
</script>

<style>

</style>