<template>
<div v-cloak>
    <p>{{textinfo.name}}：</p>
    <textarea class="form-control" v-model="textinfo.text"></textarea>
    <Button class=" btn btn-toolbar btn-sm" style="margin-left:20px;margin-top:15px;float:left;" @click.stop="remove1(index)">删除</Button>
    <Button class=" btn btn-info btn-sm" style="margin-left:20px;margin-top:15px;" @click.stop="update1(index)">修改</Button>
</div>
</template>

<script>

export default ({
   data(){
       return{
       }
   },
   props:['textinfo','remove','update','index'],
   mounted(){
   },
   methods:{
       remove1(index){
           alert(this.index);
           this.remove(index);
       },
       update1(index){
        //    alert(textinfo[index].name);
          var s=JSON.stringify(this.textinfo);
          s=eval("("+s+")");
        //   s.push({index:index});
          var a=[s.name,s.text,index];
          this.$emit('update1',a);
       }
   }
})
</script>

<style scoped>
p{
    color:darkgrey;
    font-size: 14px;
    font-weight: bold;
}
[v-cloak]{
    display: none;
}
</style>