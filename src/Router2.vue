<template>
    <div class="three">
        <h3>路由(基本路由)</h3>
        <router-link to="/about">About</router-link>
        <router-link to="/home">Home</router-link>
        <router-link to="/news">news</router-link>
        <keep-alive>
            <!-- <keep-alive>缓存路由数据（实际是一个路由对象）,使用时要考虑时效性 -->
        <router-view></router-view>
        </keep-alive>
        <!-- 什么是路由，就是一种映射关系（后台路由：处理请求的回调函数，前台路由：组件）切换路由后，再次回来将重新创建 -->
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