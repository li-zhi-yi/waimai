<template>
    <div class="product" ref="wrapper">
        <div>
            <div class="header">
            <img :src="this.obj.img" alt="">
            <h2>{{this.obj.title}}</h2>
            <p>串亭户外套餐A，建议4-6人使用</p>
        </div>
        <div class="middle">
            <div class="left">
                <h2><strong>{{this.obj.price}}</strong><span>元</span></h2>
                <p>门市价：{{this.obj.originPrice}}元</p>
            </div>
            <div class="right" @click="changeColor" :class="showColor?'active':'unactive'">立即购买</div>
        </div>
        <ul class="sale">
            <li>
                <h2>支持立即退货</h2>
                <h2>支持随时退货</h2>
            </li>
            <li>销量:{{this.obj.sales}}</li>
        </ul>
        <div class="information">
            <h2>店家信息</h2>
            <div class="msg">
                <h3>串亭烧烤居酒屋（五道口店）</h3>
                <p>海淀区成府路35号华清嘉园12号楼底商（华清嘉园东门向北30米）</p>
            </div>
            <div class="others">查看其他分店</div>
        </div>
        <div class="buy-msg">
            <h2>购买须知</h2>
            <ul class="img">
                <li class="item" v-for="item in list" :key="item.id">
                    <h3>{{item.data}}</h3>
                    <p>{{item.text}}</p>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>
<script>
import Bcroll from 'better-scroll';
import axios from 'axios';
export default{
    name:'Product',
    data(){
        return {
            showColor:this.$store.state.obj.price,
            obj:{},
            list:[
                {data:'有效日期',text:'2030.4.27至2040.10.26（周末，法定节假日通用',id:'01'},
                {data:'使用日期',text:'10：00-24：00，请您提前48小时预约，预约电话：010-8424-3309。（仅限东直门店自取）',id:'02'},
                {data:'使用规则',text:'提前48小时预约，电话：010-8424-3309每张美团券建议4至6人使用店内无包间仅限餐前外带，提供免费打包服务亲爱的顾客，为了让您有更好的户外烧烤体验，请仔细阅读以下须知：一，我们将免费为您提供户外烧烤用具（需付押金），烧烤酱料及餐巾抽纸。三，如需串亭专业烤师为您主理烤制，烤师费用标准为200元/日/次/人，烤师的食宿与交通由客户提供安排。四​​，客户购买食品和需返还的烧烤用具数量请在店内（仅限东直门店）进行确​​认。五，请您按需购买食品及辅助材料，减少浪费。六，请您提前48小时预约，预约电话：010-8424-3309。团购用户不可同时享受商家其他优惠酒水饮料等问题，请致电商家咨询，以商家反馈为准如部分菜品因时令或其他不可抗因素导致无法提供，店内会用等价菜品替代，具体而言请与店内协商停车位收费标准：详情咨询商家',id:'03'}]
        }
    },
    methods:{
        changeColor:function(price){
            this.showColor=!this.showColor
            if(this.showColor){
             this.$store.state.obj=this.obj;
            }else{
            this.$store.state.obj={}
            }
        },
        getInfo:function(){
            let {params}=this.$route;
            axios.get('/api/data/home.json')
            .then(({data})=>{
                let arr=data.list;
                let num=params.id;
                num--;
                this.obj=arr[num];
                console.log(num)
                console.log(this.obj)
            })
        }
    },
    mounted(){
        this.scroll=new Bcroll(this.$refs.wrapper,{click:true});
        this.getInfo()
    },
    updated(){
        this.scroll.refresh()
    }
}

</script>
<style scoped lang="scss">
@import '@/assets/varible.scss';
.product{
    width: 100%;
    height: 675px;
    overflow: hidden;
    max-width: 540px;
    .header{
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom:60%;
        position:relative;
        img{
            width: 100%;
        }
        h2{
            position:absolute;
            bottom:40px;
            left: 10px;
            height: 30px;
            line-height: 30px;
            font-size: 22px;
            font-weight: bold;
            color:white;
        }
        p{
            position: absolute;
            margin-left:10px;
            bottom:15px;
            line-height:20px;
            color:white;
            z-index:6;
        }
    }
    .middle{
        height: 50px;
        padding:10px 10px;
        box-sizing: border-box;
        display:flex;
        justify-content: space-between;
        border-bottom:2px solid $bgGray;
        .left{
            width: 250px;
            display:flex;
            strong{
                font-size: 26px;
                color:$bgcolor;
            }
            span{
                font-size: 20px;
                color:$bgcolor;
            }
            p{
                height: 28px;
                line-height:28px;
                font-size: 18px;
                margin-left:15px;
            }
        }
        .right{
            float:right;
            width: 72px;
            height: 24px;
            font-size: 16px;
            line-height:24px;
            text-align:center;
            border-radius:8px;
            color:white;
        }
    }
    .sale{
        width: 100%;
        li{
            padding:10px 10px;
            height: 30px;
            font-size: 16px;
            box-sizing: border-box;
        }
        li:first-child{
            display:flex;
            h2{
                flex:1;
                height: 20px;
                font-size: 16px;
                line-height:20px;
                color:#C4D132;
            }
        }
        @include grayAfter;
    }
    .information{
        h2{
            height: 30px;
            line-height:30px;
            font-size: 20px;
            padding:10px 10px 10px 10px;
            font-weight: bold;
            border-bottom:10px solid $bgGray;
        }
        .msg{
            height: 80px;
                font-size: 16px;
            h3,p{
                height: 20px;
                padding-left:10px;
                line-height:20px;
                font-weight: bold;
                margin-top:5px;
            }
            border-bottom:3px solid $bgGray;
        }
        .others{
            font-size: 16px;
            line-height:20px;
            color:$bgcolor;
            padding:10px 0 10px 10px;
            height: 20px;
        }
        @include grayAfter;
    }
    .buy-msg{
        height: 550px;
        h2{
            height: 30px;
            font-size: 20px;
            line-height:30px;
            border-bottom:4px solid $bgGray;
        }
        .item{
            h3{
                font-size: 16px;
                height:20px;
                line-height:20px;
                color:pink;
            }
            p{
                font-size: 16px;
                height: 20px;
                padding:10px 10px;
            }
        }
    }
}
.active{
    background-color:#FF3300 !important;
}
.unactive{
    background-color:gray!important;
}
</style>

