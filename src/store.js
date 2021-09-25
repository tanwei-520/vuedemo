//vuex的核心管理模块
import Vue  from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:0,
    a1:0,
    a2:2,
}

const mutations={
    add(state,{ac}){
        state.count++;
        state.a1=ac.a1;
        state.a2=ac.a2;
    },
    add2(state,[a1,a2]){
        state.count++;
        state.a1=a1;
        state.a2=a2;
    },
    dep(state){
        state.count--
    }
}

const actions={
    //增加的action
    add({commit},{ac}){
        //提交mutations
        commit('add',{ac})
    },
    add2({commit},[a1,a2]){
        //提交mutations
        commit('add2',[a1,a2])
    },
    dep({commit}){
        commit('dep')
    },
    ifq({commit,state}){
        if(state.count%2===0){
            commit('add')
        }
    }
}

const getters={
    odd(state){//不需要调用，只需要读取
        return state.count%2===0 ?'偶数' :'奇数'
    }
}
export default new Vuex.Store({
    state,//状态对象
    mutations,//包含多个更新state函数的对象
    actions,//包含多个对应事件回调的对象
    getters//包含多个getters计算属性函数的对象
})