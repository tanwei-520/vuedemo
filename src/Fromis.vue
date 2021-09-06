<template>
    <div class="zhong">
        <p style=" font-size:24px;">使用计算属性监听选中状态-localStorage-sessionStorage以及深度监听</p>
        <input type="text" style="width:400px;" class=" form-control" @keyup.enter="add()" v-model="text">
     <div class="one">
        <ul>
            <li v-for="(litem,index) in list" :key="index" :style="{background:bgclor}" @mouseenter="Eteshow(true)" @mouseleave="Eteshow(false)" >
               <!-- @mouseover="" @mouseout="" 存在冒泡  @mouseenter="" @mouseleave= 不存在冒泡 -->
              <input type="checkbox" v-model="litem.check">
              <span>{{litem.tille}}</span>
              <button class="btn btn-sm btn-danger s" v-show="isShow">删除</button>       
            </li>
        </ul>
     </div>
     <div>
            <input type="checkbox" v-model="isall">
            <span>选中{{chexks}}/{{list.length}}</span>
     </div>
     <div>
         <div v-if="!ajax.name">lading...</div>
         <div v-else><a :href="ajax.url" >{{ajax.name}}</a></div> 
     </div>
     <suosuo/>
     <fromlist/>
    </div> 
</template>

<script>
import axios from 'axios';
import fromlist  from './components/fromlist'
import suosuo from './components/suosuo'
export default {
    data(){
        return{
            list:JSON.parse(window.localStorage.getItem('key') ||'[]'),//获取localStorage里的值，存的是字符串，要转json对象，若为空则为[]
            bgclor:'#FFFFFF',
            isShow:false,
            text:'',
            ajax:{
                name:'',
                url:''
            }
        }
    },
    components:{
        fromlist,
        suosuo,
    },
    mounted(){
       this.geturl();
    },
    computed:{
        chexks(){
            return this.list.reduce((sum,list)=>sum+(list.check?1:0),0)//计算数组元素相加后的总和
        },
        isall:{
            get(){
                return this.chexks==this.list.length && this.chexks>0
            },
            set(value){
               this.checkall(value);
            }
        }
    },
    methods:{
        Eteshow(show){
            if(show){
                this.bgclor='#CCCCCC';
                this.isShow=true;
            }
            else{
                this.bgclor='#FFFFFF';
                this.isShow=false;
            }
        },
        checkall(value){
            this.list.forEach(lists=>lists.check=value);
        },
        add(){
            const is={tille:this.text,check:false};
            this.list.unshift(is);
            this.text='';
        },
        geturl(){
            const url='https://api.github.com/search/repositories?q=vue&sort=stars';
            axios.get(url).then(response => { // 得到返回结果数据
                const data=response.data.items[0];
                this.ajax.name=data.name;
                this.ajax.url=data.owner.html_url})
                  .catch(error => {
                    alert(error.message)})
        }
    },
    watch:{
        list:{
            deep:true,
            handler:function(value){//将最新的值保存
            window.localStorage.setItem('key',JSON.stringify(value))//写入localStorage，key值对应
            window.sessionStorage.setItem('key',JSON.stringify(value))
            }
        }
    }
}
</script>

<style>
.zhong{
    width:500px;
    margin-left :20px;
    float: left;
}
ul{
    width: 300px;
        margin: 0 auto;
    margin-top: 15px;
}
li{
    width: 300px;
    border: 1px solid #333;
    margin: 0;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
}
.s{
    float:right;
    margin-top: 10px;
    margin-right: 5px;
}
.one{
    width: 400px;
    height: 180px;
    border: 1px solid #3333;
    margin-top: 15px;
}
</style>