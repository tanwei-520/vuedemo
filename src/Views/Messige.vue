<template>
<div>
    <h4>镶嵌路由</h4>
    <ul>
        <li v-for="itrem in items" :key="itrem.id"><router-link :to="'/news/messige/list/'+itrem.id">{{itrem.text}}</router-link>
        <router-link :to="'/news/messige/list/?id='+itrem.id">{{itrem.text}} query</router-link>
        <Button class="btn" @click="push(itrem.id)">push栈查看</Button>
        <button class="btn" @click="replace(itrem.id)">repaace查看</button>
        </li>
    </ul>
    <Button class="btn btn-default" @click="$router.back()">返回</Button>
    <p>编程式导航(使用JS实现跳转)</p>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
//window.location.href=url;
//window.location=url;
export default {
    data(){
        return{
            items:[]
        }
    },
    mounted(){
        setTimeout(() => {
            const items=[
                {
                    id:1,
                    text:'百度'
                },
                {
                    id:2,
                    text:'搜狗'
                },
                {
                    id:3,
                    text:'360'
                }
            ]
        this.items=items;
    },1000)
 },
    methods:{
        push(id){
            this.$router.push("/news/messige/list/"+id);
        },
        replace(id){
            this.$router.replace("/news/messige/list/"+id);
        },
    }
}
</script>

<style>

</style>