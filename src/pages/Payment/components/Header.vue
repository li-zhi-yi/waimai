<template>
    <div class="payment-header">
        <div class="left">
            <i class="iconfont" @click="back">&#xe624;</i>
        </div>
        <div class="title">外卖平台</div>
        <div class="right">登录</div>
    </div>
</template>
<script>
export default{
    name:'Header',
    methods:{
        back:function(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/varible.scss';
.payment-header{
    width: 100%;
    max-width: 540px;
    height: 50px;
    box-sizing: border-box  ;
    display:flex;
    text-align:center;
    line-height:50px;
    background-color:#06C1AE;
    color:white;
    .left,.right{
        width: 50px;
        font-size: 18px;
        font-weight: bold;
    }
    .title{
        flex:1;
        font-size: 20px;
        font-weight: bold;
    }
}
</style>
