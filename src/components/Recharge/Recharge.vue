<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Recharge-top {
    width: 100%;
    height: 50px;
  }

  .Recharge-mid {
    width: 100%;
    height: 200px;
    display: flex;
  }

  .imgBox {
    width: 100px;
    height: 100px;
    border: 1px solid;
    float: left;
    margin-left: calc(50% - 50px);
    align-self: center;
  }

  .priceNum {
    margin-left: 20px;
    float: left;
    align-self: center;
  }

  .coinNumBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

</style>

<template>
  <div>
    <div class="Recharge-top">
      <h3 class="top_title">你的好友正在等着你的投票呢，快来给他多多投票吧，一个优币代表一票哦！</h3>
    </div>
    <div class="Recharge-mid">
      <div class="imgBox"></div>
      <div class="priceNum">{{rechargeNum}}元</div>
    </div>
    <div class="Recharge-bottom">
      <div class="coinNumBox">
        <span>数量:</span>
        <div class="numCount-wrapper">
          <num-count @rechargeNum="getRechargeNum"></num-count>
          <!--<num-count :ucoin="ucoin"></num-count>-->
        </div>
      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_plain-primary" :class="{ 'weui-btn_plain-disabled':rechargeNum <=0}"
           @click="toShowRecharge">购买</a>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import numCount from  '../tools/numCount';

  export default{
    name: 'Recharge',
    data(){
      return {
        rechargeNum: '0',
        ucoin: {
          count: '',
          price: ''
        }
      }
    },
    components: {
      numCount
    },
    computed: {},
    methods: {
      getRechargeNum(msg){
        this.rechargeNum = msg;
      },
      toShowRecharge(){
        if (this.rechargeNum <= 0)
          return
        else
          console.log(this.rechargeNum)
        this.$router.push({

          path: '/Recharge/ShowRecharge',
          query:{
            rechargeNum : this.rechargeNum
          }

        });

      }
    }
  }


</script>
