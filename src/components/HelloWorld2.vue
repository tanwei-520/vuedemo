<template>
    <div class="list"  style="margin-left:50px;">
        <p>{{msg}}(组件1)</p>
        <label>姓名</label><br/>
        <input type="text" class="form-control" id="text" style="width:236px;float:left;margin-right:10px ;" v-model="name" :readonly=isread><br/><br/>
        <label>留言</label><br/>
        <textarea class=" form-control" v-model="text" style="width:236px;float:left;margin-right:10px ;"></textarea><br/><br/><br/><br/>
        <Button class="btn-sm btn-primary" @click="add2()">添加</Button>
        <Button class="btn-sm btn-warning" @click="up()">修改</Button>
        <list v-for="(textinfo,index) in textinfo" :key="index" :textinfo="textinfo" :remove="remove" :update="update" :index="index"  v-on:update1="update4"/>
         <h2 v-show="textinfo.length===0">暂无数据。。。</h2>
    </div>
</template>

<script>
import list from './list.vue'
export default {//配置对象（与vue一致）组件里面必须写函数
    data(){
        return{
            msg:'hello',
            name:'',
            text:'',
            index:'',
            isread:false
        }
    },
    components:{
        list
    },
    methods:{
      to(){
       alert($("#text").val());
      },
      add(){
        var name=this.name.trim();
        var text=this.text.trim();
        if(name){
          this.textinfo.push({name:name,text:text})
          this.name='';
          this.text='';
        }
        else{
          alert("输入内容不能为空！");
          return
        }
      },
      add2(){
        //检查输入合法性
        //根据输入数据，封装成一个对象
        //添加到数组中
       const name=this.name;
       const text=this.text;
        const list={
          name,
          text
        };
        this.addtext(list);
        this.name='';
        this.text='';
      },
      update4(data){
        this.name=data[0];
        this.text=data[1];
        this.index=data[2];
        this.isread=true;
      },
      up(){
        var ps={
          name:this.name,
          text:this.text
        }
        this.update(ps,this.index);
        this.name='';
        this.text='';
        this.isread=false;
        // $("#text").attr("readonly",false);
      }
    },
    props:['textinfo','addtext','remove','update'],
    // props:{
    //   type:Function,
    //   required:true
    // }
}
</script>
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  font-size: 39px;
}
.list{
  width: 300px;
}
</style>