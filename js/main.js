
Vue.component('coupon',{
    template:' <input placeholder="Enter you coupon code" @blur="CouponApplied">',
    methods:{
        CouponApplied(){
            this.$emit('applied');
        }
    }
});


new Vue({
    el:'#root',
    data:{
        couponApplied:false,
    },
    methods:{
        onCouponApplied(){
            this.couponApplied=true;
        }
    }
});