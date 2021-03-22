<template>
    <div class="list" ref="wrapper">
                    <h2 class="think">猜你喜欢</h2>
         <ul class="list-product">
             <router-link tag="li" :to="'/detail/'+item._id" class="item-li" v-for="(item) of this.lists" :key="item.id">
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
    </div>
</template>
<script>
export default{
    name:'List',
    props:{
        lists:{
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/varible.scss';
.list{
    width: 100%;
    max-width: 540px;
    @include grayBefore();
    .think{
        width: 100%;
        height: 28px;
        padding:15px 0 10px 0;
        line-height:28px;
        font-size: 20px;
        margin:0 10px;
    }
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
}
</style>
