<template>
    <div class="show">
        <ul class="list-product">
             <router-link tag="li" :to="'/detail/'+item._id" class="item-li" v-for="(item) of this.dealList" :key="item.id">
                 <div class="left">
                     <img  class="img" :src="item.img" alt="">
                 </div>
                <div class="right">
                <h2 class="title-desc">{{item.title}}</h2>
                 <div class="bottom">
                     <div class="sale">
                     <span class="price">{{item.price}}元</span>
                     <span>门市价：{{item.originPrice}}元</span>
                 </div>
                 <div class="num">销量<span>{{item.sales}}</span></div>
                 </div>
                </div>
             </router-link>
        </ul>
        <div class="show-others" v-if="!show">
            <h2  @click="showOthers">查看剩余条{{this.lists.length-this.dealList.length}}数据</h2>
            <div></div>
        </div>
    </div>
</template>
<script>
import ShowList from '../../components/List';
export default{
    name:'List',
    props:{
        lists:{
            type:Array
        }
    },
    data(){
        return {
           show:false,
           arr:[]
        }
    },
    computed:{
        dealList:function(){
            return (this.show? this.arr=this.lists: this.arr=this.lists.slice(0,3)).filter((item)=>{
                return item.title.indexOf(this.$store.state.search.toUpperCase())>-1;
            })
        }
    },
    components:{ShowList},
    methods:{
        showOthers:function(){
            this.show=!this.show;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/varible.scss';
.show{
     .item-li{
        width:100%;
        height: 81.5px;
        margin:10px 10px;
        display:flex;
        .left{
            width: 100px !important;
            height: 0;
            overflow: hidden;
            padding-bottom:60px;
            margin-right:10px;
            .img{
                width: 100%;
            }
        }
        .right{
            flex:1;
            padding-right:30px;
            .title-desc{
                width: 100%;
                height: 20px;
                font-size: 16px;
                font-weight: bold;
                line-height:20px;
                margin-bottom:20px;
            }
            .bottom{
                display:flex;
                justify-content: space-between;
                .sale{
                    height: 16px;
                    margin-right:5px;
                    .price{
                        color:$bgcolor;
                        margin-right:10px;
                    }
                }
                .num{
                    height: 16px;
                }
            }
        }
    }
    .show-others{
        width: 100%;
        display:flex;
        height: 41px;
        background-color:$bgGray;
        text-align:center;
        justify-content: center;
        line-height:41px;
        font-size: 16px;
        font-weight: bold;
        h2{
            color:$bgcolor;
        }
        div{
            @include box($c:$bgGray);
            position:relative;
            left:20px;
            top:13px;
            z-index: 6;
        }
        &:after{
            content:'';
            position:relative;
            top:15px;
            display:block;
            @include box($c:$bgcolor);
        }
    }
}
</style>
