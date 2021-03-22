<template>
    <div ref="wrapper" class="wrapper">
        <div class="contetn">
        <home-header></home-header>
        <home-icon></home-icon>
        <home-ads :ads="ad"></home-ads>
        <home-list :lists="list"></home-list>
        </div>
    </div>
</template>
<script>
import HomeHeader from './components/Header';
import HomeIcon from './components/Icon';
import HomeAds from './components/Ads';
import HomeList from '../components/List';
//引入axios
import axios from 'axios';
//引入better-scroll
import Bscroll from 'better-scroll';
export default{
    name:'Home',
    components:{HomeHeader,HomeIcon,HomeAds,HomeList},
    data(){
        return {
            ad:[],
            list:[]
        }
    },
    methods:{
        getInfo:function(){
        axios.get('/api/data/home.json')
        .then(this.getSucc)
        },
        getSucc:function(res){
            const result=res.data;
            console.log(result)
            this.ad=result.ad;
            this.list=result.list;
            console.log(this.ad,this.list)
        }
    },
    created(){
        this.getInfo();
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper,{click:true})
    },
    updated(){
        this.scroll.refresh()
    }
}
</script>
<style scoped>
.wrapper{
    width: 100%;
    max-width: 540px;
    height: 667px;
    overflow: hidden;
}
</style>
