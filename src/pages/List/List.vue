<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
        <list-header></list-header>
        <list-search @change="receiveMsg"></list-search>
        <list-show :lists="list"></list-show>
        </div>
    </div>
</template>
<script>
import ListHeader from './components/Header';
import ListSearch from './components/Search';
import ListShow from './components/Show';
import axios from 'axios';
export default{
    name:'List',
    components:{ListHeader,ListSearch,ListShow},
    data(){
        return {
            //数据
            list:[]
        }
    },
    methods:{
        getInfo:function(){
        //获取路由数据
        let {params}=this.$route;
        //axios发送请求
        axios.get('/api/data/list.json',{params})
        .then(({data})=>{
            this.list=data;
            console.log(this.list)
        })
        },
        receiveMsg:function(msg){
            if(msg==0){
                this.list.sort((a,b)=>{
                    return a.price-b.price;
                })
            }else if(msg==1){
            this.list.sort((a,b)=>{
                    return a.sales-b.sales;
                })
            }else if(msg==2){
                this.list.sort((a,b)=>{
                    return a.evaluate-b.evaluate;
                })
            }else{
                this.list.sort((a,b)=>{
                    return (a.originPrice-a.price)-(b.originPrice-b.price);
                })
            }
        }
    },
    created(){
        this.getInfo()
    },
    watch:{
        //监听路由
        $route:function(){
            this.getInfo()
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/varible.scss';

</style>
