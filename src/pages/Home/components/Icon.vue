<template>
    <ul class="icon">
        <router-link tag="li" :to="'/list/'+item.id" v-for="(item) of list" :key="item.id" class="icon-item">
            <div class="icon-img">
                <img class="img" :src="'/static/img/icon/'+item.img" alt="">
            </div>
            <p class="icon-desc">{{item.text}}</p>
        </router-link>
    </ul>
</template>
<script>
export default{
    name:'Icon',
    data(){
        return {
            list:[
				{ id: '1',  img: '01.png', text: '美食' },
				{ id: '2',  img: '02.png', text: '电影' },
				{ id: '3',  img: '03.png', text: '酒店' },
				{ id: '4',  img: '04.png', text: '休闲' },
				{ id: '5',  img: '05.png', text: '外卖' },
				{ id: '6',  img: '06.png', text: 'ktv' },
				{ id: '7',  img: '07.png', text: '丽人' },
				{ id: '8',  img: '08.png', text: '周边游' },
				{ id: '9',  img: '09.png', text: '小吃' },
				{ id: '10',  img: '10.png', text: '火车票' }
			]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/varible.scss';
.icon{
    width: 100%;
    max-width: 540px;
    display:flex;
    flex-wrap:wrap;
    @include grayAfter();
    .icon-item{
        width: 20%;
        height: 80px;
        padding-top:10px;
        text-align:center;
        .icon-img{
            width: 50px;
            margin:0 auto;
            padding-bottom:65%;
            height:0;
            overflow: hidden;
            .img{
                width: 100%;
            }
        }
        .icon-desc{
            margin-top:10px;
        }
    }
}
</style>