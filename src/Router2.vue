<template>
    <div class="three">
        <h3>路由</h3>
        <router-link to="/about">About</router-link>
        <router-link to="/home">Home</router-link>
        <router-view></router-view>
        <!-- 什么是路由，就是一种映射关系（后台路由：处理请求的回调函数，前台路由：组件） -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style>
.three{
    width: 500px;
    float: left;
}
</style>