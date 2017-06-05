<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .countBox{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .countBox label{
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-minus,.cart-plus {
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    border: 1px solid #dcdcdc !important;
    text-align: center;
    color: #dcdcdc;
    display: block;
  }
  .cart-minus:hover{
    background: #ffe200 !important;
    color:#683810;
  }
  .cart-plus:hover{
    background: #ffe200 !important;
    color:#683810;
  }
  .cart-count {
    vertical-align: top;
    width: 60px;
    height: 20px;
    margin: 0 5px;
    border: 1px solid #dcdcdc !important ;
    border-radius: 5px !important;
    text-align: center;
    line-height: 15px;
    color: #dcdcdc;
  }

</style>


<template>
  <div class="countBox">
    <label for="cart-minus">
      <a href="javascript:void(0);" class="cart-minus"  id="cart-minus" @click="minus">-</a>
    </label>

    <input class="cart-count" type="number" v-model.number="rechargeNum" @change="onInput">
    <!--<span class="cart-count">{{rechargeNum}}</span>-->
    <label for="cart-plus">
      <a href="javascript:void(0);" class="cart-plus" id="cart-plus" @click="plus">+</a>
    </label>
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
      onInput(){
        this.$emit('rechargeNum', this.rechargeNum);
      },
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
