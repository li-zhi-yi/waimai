<template>
    <div class="payment">
       <payment-header></payment-header> 
       <payment-pay></payment-pay>
    </div>
</template>
<script>
import PaymentHeader from './components/Header'
import PaymentPay from './components/Pay'
export default{
    name:'Payment',
    components:{PaymentHeader,PaymentPay},
    methods:{
        back:function(){
            this.$router.push('/')
        }
    }
}
</script>