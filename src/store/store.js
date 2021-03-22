import Vue from 'vue';
import Vuex from 'vuex';

//注册
Vue.use(Vuex);

//实例化
const store=new Vuex.Store({
    state:{
        //搜索词；
        search:'',
        //商品
        obj:{}
    },
    getters:{},
    mutations:{
        updateSearch:function(state,value){
            state.search=value;
        }
    },
    actions:{

    }
})


//暴露接口
export default store;