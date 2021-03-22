<template>
  <div class="detail-footer">
    <div class="left">共￥{{ this.$store.state.obj.price>0?this.$store.state.obj.price: 0.00}}元</div>
    <div class="right" @click="shoppingcar">选好了</div>
  </div>
</template>
<script>
export default{
    name:'Footer',
    methods:{
        shoppingcar:function(){
            if(this.$store.state.obj.price>0){
            this.$router.push({path:'/payment'})
            }else{
             return   alert('请添加商品')
            }
        }
    }
}

</script>
<style scoped lang="scss">
@import "@/assets/varible.scss";
.detail-footer {
  height: 50px;
  background-color: gray;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  color: white;
  .left {
    flex: 1;
    background-color: #484d54;
  }
  .right {
    width: 100px;
    background-color: $bgred;
  }
}
</style>

