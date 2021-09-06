<template>
<div>
    <h4>镶嵌路由</h4>
    <ul>
        <li v-for="itrem in items" :key="itrem.id"><router-link :to="'/news/messige/list/'+itrem.id">{{itrem.text}}</router-link>
        <router-link :to="'/news/messige/list/?id='+itrem.id">{{itrem.text}} query</router-link></li>
    </ul>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
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
 }
}
</script>

<style>

</style>