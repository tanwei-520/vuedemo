<template>
    <div>
     <h2>搜索（兄弟组件间的消息订阅PubSub）</h2>
     <input type="text" style="width:100%;" class=" form-control" @keyup.enter="suo()" v-model="text" placeholder="搜索">
    </div>    
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    data(){
        return{
            text:'',
        }
    },
    methods:{
        suo(){
            const suoname=this.text.trim();
            if(suoname){
                PubSub.publish('search',suoname);//方法名称  2参数
            }
        }
    }
}
</script>

<style>

</style>
