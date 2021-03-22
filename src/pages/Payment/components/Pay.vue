<template>
    <div class="pay">
        <div class="all">
            <div class="left">商品总价:</div>
            <div class="right">
                ￥{{this.$store.state.obj.price}}元
            </div>
        </div>
        <div class="decide">
            <div class="btn1" @click="giveUp">取消购买</div>
            <div class="btn2">立即购买</div>
        </div>
        <div class="goods" @click="back">
                 <div class="left">
                     <img  class="img" :src="this.$store.state.obj.img" alt="">
                 </div>
                <div class="right">
                <h2 class="title-desc">{{this.$store.state.obj.title}}</h2>
                 <div class="bottom">
                     <div class="sale">
                     <span class="price">{{this.$store.state.obj.price}}元</span>
                     <span>门市价：{{this.$store.state.obj.originPrice}}元</span>
                 </div>
                 <div class="num">销量<span>{{this.$store.state.obj.sales}}</span></div>
                 </div>
                </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Pay',
    methods:{
        giveUp:function(){
            this.$router.go(-1);
            this.$store.state.obj={};
        }
        ,
        back:function(){
            this.$router.go(-1);
        }
    },
    mounted(){
        let {query}=this.$route;
        console.log(query)
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/varible.scss';
.pay{
    .all{
        height: 75px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .left{
            width: 90px;
            height: 24px;
            margin:0 10px;
            font-size: 18px;
            line-height:24px;
            font-weight: bold;
        }
        .right{
            height: 40px;
            font-size: 30px;
            font-weight: bold;
            line-height:40px;
            color:$orange;
            flex:1;

        }
        
    }
    .decide{
        height: 50px;
        display:flex;
        text-align:center;
        justify-content: center;
        .btn1,.btn2{
            width: 80px;
            height: 20px;
            color:white;
            margin-right:10px;
            border-radius:5px;
            line-height:20px;
            background-color:gray;
        }
        .btn2{
            background-color:$orange;
        }
    }
     .goods{
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
}
</style>