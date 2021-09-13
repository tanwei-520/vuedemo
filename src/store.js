//vuex的核心管理模块
import Vue  from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:0
}

const mutations={
    add(state){
        state.count++
    },
    dep(state){
        state.count--
    }
}

const actions={
    //增加的action
    add({commit}){
        //提交mutations
        commit('add')
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