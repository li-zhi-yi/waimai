<template>
    <div class="search">
        <div class="search-top">
            <i class="iconfont">&#xe62b;</i>
            <input type="text" placeholder="请输入搜措词语" v-model="inputValue" @input="()=>{this.$store.commit('updateSearch',inputValue)}">
        </div>
        <ul>

        </ul>
        <ul class="search-sort">
            <li class="item-sort" v-for="(item,index) in arr" :key="index" @click="handleclick(index)">
                <h2>{{item}}</h2>
                <div class="arrow"></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'Search',
    data(){
        return {
            arr:['价格排序','销量排序','好评排序','优惠排序'],
            inputValue:''
        }
    },
    methods:{
        handleclick:function(msg){
            this.$emit('change',msg)
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/varible.scss';
.search{
    width: 100%;
    max-width: 540px;
    .search-top{
        width: 100%;
        height: 60px;
        padding:10px 20px;
        box-sizing: border-box;
        position:relative;
        left: 0;
        top: 0;
        input{
            width: 90%;
            height: 40px;
            background-color:$bgGray;
            position:absolute;
            box-sizing: border-box;
            padding-left:40px;
            border:1px solid black;
            border-radius:20px;
        }
        i{
            position:absolute;
            left: 30px;
            font-size: 18px;
            top: 20px;
            z-index:6;
        }
    }
    .search-sort{
        width: 100%;
        display:flex;
        justify-content: space-evenly;
        text-align:center;
        .item-sort{
            width: 25%;
            height: 35px;
            padding:10px 0 8px 0;
            box-sizing: border-box;
            border-bottom:1px solid $bgGray;
            border-right:1px solid $bgGray;
            display:flex;
            justify-content: center;
            .arrow{
            @include box($w:5px);
            margin:5px 0 0 5px;
            }
        }
        li:nth-of-type(4n){
            border-right:none;
        }
        
    }
}
</style>
