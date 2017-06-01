<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart-minus, .cart-plus {
    display: inline-block;
    vertical-align: top;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid !important;
    text-align: center;
    line-height: 15px;
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 50px;
    height: 15px;
    border: 1px solid !important;
    text-align: center;
    line-height: 15px;
  }

</style>


<template>
  <div>
    <div class="cart-minus"  @click="minus">-</div>
    <span class="cart-count">{{rechargeNum}}</span>
    <div class="cart-plus" @click="plus">+</div>
  </div>

</template>

<script>

  export default {
    data(){
      return {
        rechargeNum: 0
      }
    },
    props: {
      ucoin: {
        type: Object
      }
    },
    created(){
//        console.log(this.ucoin);
    },
    computed: {


    },
    methods: {
      minus(){
//          if (!this.ucoin.count)
//              this.ucoin.count =1
//          else
//              this.ucoin.count--
        if (this.rechargeNum > 0)
          this.rechargeNum--
        this.$emit('rechargeNum', this.rechargeNum);
      },
      plus(){
        if (this.rechargeNum >= 0)
          this.rechargeNum++
        this.$emit('rechargeNum', this.rechargeNum);
      }
    }
  }
</script>
