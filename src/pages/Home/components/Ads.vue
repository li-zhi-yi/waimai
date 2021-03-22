<template>
    <ul class="ads">
        <li v-for="(item,index) of this.ads" :key="item.id" class="item-ads">
            <h2 :class="'color-'+index">{{item.title}}</h2>
            <p class="desc">{{item.description}}</p>
            <div class="img">
                <img :src="item.url" alt="">
            </div>
        </li>
    </ul>
</template>
<script>
export default{
    name:'Ads',
    props:{
        ads:{
            type:Array
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/varible.scss';
.ads{
    width: 100%;
    max-width: 540px;
    height: 170px;
    text-align:center;
    display:flex;
    // @include gray();
    .item-ads{
        width: 33.3%;
        height: 130px;
        padding:20px 10px;
        h2{
            height: 20px;
            font-size: 16px;
            font-weight: bold;
        }
        //引入scss 方法
        @include color(red,green,purple);
        .desc{
            height: 16px;
            padding:6px 0 10px 0;
        }
        .img{
            width: 85px;
            margin:0 auto;
            padding-bottom:80%;
            height:0;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
}
</style>
