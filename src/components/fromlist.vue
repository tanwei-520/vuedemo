<template>
    <div element-loading-text="拼命加载中">
    <el-table
    v-loading="loading"
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexcunt"
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
        <el-skeleton style="width:70px;height: 70px;" :loading="loading2" animated :throttle="700">
         <template slot="el-card">
          <el-skeleton-item
           variant="image"
           style="width: 70px; height: 70px;"
          />
         </template>
        <!-- <img :src="scope.row.avatar_url" min-width="70" height="70" @click="fangda(scope.row.avatar_url)"/> -->
          <el-card :body-style="{ width: '70px', height: '70px',padding:'0px' }">
             <img :src="scope.row.avatar_url" min-width="70" height="70" @click="fangda(scope.row.avatar_url)"/>
          </el-card>
        </el-skeleton>
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
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :hideOnSinglePage="true"
      :current-page="currentPage4"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      hide-on-single-page="show"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
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
          name:'',
          tableData:[],
          loading: false,
          stripe:true,
          dialogVisible:false,
          url2:'',
          show:false,
          currentPage4: 1,//当前页数
          pagesize:5,//每页显示
          count:0,//总数,
          loading2:true
        }
    },
    mounted(){
      PubSub.subscribe('search',(msg,suoname)=>{
        let that=this
       that.getmain(suoname);
      })
    },
    methods: {
      fangda(url){
        this.url2=url;
        this.dialogVisible=true;
      },
      handleCurrentChange(val){
        this.currentPage4=val;
        //console.log(this.name);
        this.getmain(this.name);
      },
      getmain(suoname){
        const url='https://api.github.com/search/users?q='+suoname;
        this.name=suoname;
        this.tableData=[];
        this.loading=true;
        this.loading2=true;
        axios.get(url).then(response => { // 得到返回结果数据
                const data=response.data.items;
                // const data=response.data.items.map(item =>({
                //   url:item.html_url,
                //   avatar_url:item.avatar_url,
                //   name:item.name
                // }));将数据转为指定的名称
                this.tableData=data.slice((this.currentPage4-1)*this.pagesize,this.pagesize*this.currentPage4);
                //console.log((this.currentPage4-1)*this.pagesize);
               // console.log(this.pagesize*this.currentPage4);
                this.count=data.length;
                if(this.count!=0 && this.count>this.pagesize)
                this.show=true;
                this.loading=false;
                setTimeout(() => (this.loading2 = false), 1200)
                })
          .catch(error => {
                    alert(error.msg)})
      },
      handleSizeChange(val){//每页显示数修改时调用
        this.pagesize=val;
        this.currentPage4=1;
        this.getmain(this.name);
      },
      indexcunt(index){//使序号跟着页数动
        return (this.currentPage4-1)*this.pagesize+index+1
      }
    },
}
</script>

<style>
ul{
  width:auto;
}
li{
  width: auto;
  border: 0;
  float:none;
  display: inherit;
}
</style>
