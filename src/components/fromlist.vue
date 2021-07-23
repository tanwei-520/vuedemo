<template>
    <div>
    <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="login"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="img"
      label="头像"
      width="100">
      <template slot-scope="scope">
        <img :src="scope.row.avatar_url" min-width="70" height="70" @click="fangda(scope.row.avatar_url)"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="html_url"
      label="详情" :show-overflow-tooltip="true">
      <template slot-scope="scope">
        <a :href=scope.row.html_url target="_blank">{{scope.row.html_url}}</a>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
  title="图片详情"
  :visible.sync="dialogVisible"
  width="30%">
 <img :src="url2" width="100%" height="100%" />
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    </div>    
</template>

<script>
import PubSub from 'pubsub-js' 
import axios from 'axios';
export default {
    data(){
        return{
          tableData:[],
          loading: true,
          stripe:true,
          dialogVisible:false,
          url2:''
        }
    },
    mounted(){
      PubSub.subscribe('search',(msg,suoname)=>{
        const url='https://api.github.com/search/users?q='+suoname;
        this.tableData=[];
        this.loading=true;
        axios.get(url).then(response => { // 得到返回结果数据
                const data=response.data.items;
                // const data=response.data.items.map(item =>({
                //   url:item.html_url,
                //   avatar_url:item.avatar_url,
                //   name:item.name
                // }));将数据转为指定的名称
                this.tableData=data;
                this.loading=false;})
          .catch(error => {
                    alert(error.msg)})
      })
    },
    methods: {
      fangda(url){
        this.url2=url;
        this.dialogVisible=true;
      }
    },
}
</script>

<style>

</style>
