<template>
 <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
        <!-- <li v-for="items in lists" :key="items.id">{{items.text}}</li> -->
        <li>{{lists.text}}</li>
    </ul>
 </div>
</template>

<script>
export default {
    data(){
        return{
            lists:[
                {id:1,text:'百度一下'},
                {id:2,text:'搜狗搜索'},
            ]
        }
    },
    mounted(){
        setTimeout(()=>{
            const text=[
                {id:1,text:'百度一下'},
                {id:2,text:'搜狗搜索'},
                {id:3,text:'360搜索'}
            ]
            this.text=text;
           // const id=this.$route.query.id*1  query使用query传参路由注册时不需要占位
            const id=this.$route.params.id*1;//*1将文本转为数字
            this.lists=text.find(list=>list.id===id);

            // 1. == 用于比较、判断两者相等，比较时可自动换数据类型
            // 2. === 用于（严格）比较、判断两者（严格）相等，不会进行自动转换，要求进行比较的操作数必须类型一致，不一致时返回flase。
        },1200)
    },
    watch:{
        $route:function(val){
            setTimeout(()=>{
               const id=val.params.id*1;//*1将文本转为数字
               this.lists=this.text.find(list=>list.id===id);
            },1300)
        }
    }
}
</script>

<style>

</style>