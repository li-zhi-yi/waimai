<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-product></detail-product>
        <detail-footer></detail-footer>
    </div>
</template>
<script>
import DetailHeader from './components/Header';
import DetailProduct from './components/Product';
import DetailFooter from './components/Footer';
export default{
    name:'Detail',
    components:{DetailHeader,DetailProduct,DetailFooter}
}
</script>
<style scoped>

</style>