<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-size: 16px;
  }

  .weui-cells__title {
    font-size: 15px !important;
    color: #686868;
  }

  .weui-cell__bd {
    padding-left: 10px;
  }

  .weui-cells__tips {
    width: 100%;
    height: 15px;
    background: #eeeeee;
  }

  .weui-btn {
    background-color: #ffe100;
    border: none;
    color: #6c3d11;
  }

  .weui-btn:active {
    background-color: #eade7d;
  }

  .weui-btn_disabled {
    background: #eeeeee;
    color: #ffffff;
  }

  .weui-btn_disabled:active {
    background-color: #eeeeee;
  }

  .weui-btn:after {
    border: none !important;
  }

  .weui-cell:before {
    left: 0 !important;
    border: none;
  }

  .weui-cells:after {
    z-index: inherit;
  }

  .weui-cells {
    margin-top: 0 !important;
  }

  .numCount-wrapper {
    height: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weui-actionsheet__title {
    height: 50px;
  }

  .confirmzfBox {
    z-index: 1000;
  }

  .toggle-enter-active, .toggle-leave-active {
    transition: transform .5s;
    transform: translate(0, 0);
  }

  .toggle-enter, .toggle-leave-active {
    transform: translate(0, 100%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    opacity: 1;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>

<template>
  <div>
    <div class="weui-cells">
      <div class="weui-cells__title">
        你的好友正在等着你的投票呢，快来给他多多投票吧，一个优币代表一票哦！
      </div>
      <div class="weui-cells__tips"></div>
      <div class="weui-cell">

        <div class="weui-cell__hd">
          <p>购买优币：</p>
        </div>
        <div class="weui-cell__bd">
          <p>
            <span>￥{{rechargeNum | tofixed(2)}}</span>
          </p>
        </div>
        <div class="weui-cell__ft">
          <div class="numCount-wrapper">
            <num-count @rechargeNum="getRechargeNum"></num-count>
          </div>
        </div>

      </div>
    </div>

    <div class="weui-btn-area">
      <a class="weui-btn" :class="{ 'weui-btn_disabled':rechargeNum <=0}"
         @click="toShowRecharge">购买</a>
    </div>

    <transition name="fade">
      <div class="confirmzfBox" v-show="toShowConfirm">
        <div class="weui-mask" id="iosMask" @click="toCloseConfirm"></div>
        <transition name="toggle">
          <div class="weui-actionsheet weui-actionsheet_toggle" v-show="toShowConfirm">
            <div class="weui-actionsheet__title">
              <p class="weui-actionsheet__title-text">支付方式</p>
            </div>
            <div class="weui-actionsheet__menu">
              <div class="weui-cell" href="javascript:void (0);">
                <div class="weui-cell__hd">
                  <img src="./img/wxzf_logo.png" alt="" style="width: 30px;margin-right: 5px">
                </div>
                <div class="weui-cell__bd">
                  <p>微信支付</p>
                </div>
              </div>
            </div>
            <div class="weui-actionsheet__action">
              <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="goPayFn">
                <div class="weui-btn-area">
                  <a class="weui-btn"
                     @click="toShowRecharge">确认支付{{rechargeNum}}元</a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>


  </div>
</template>

<script>
  import axios from 'axios';
  import numCount from  '../tools/numCount';
  import wx from 'weixin-js-sdk';

  export default{
    name: 'Recharge',
    data(){
      return {
        rechargeNum: 0,
        userId: '',
        toShowConfirm: false,
        ucoin: {
          count: '',
          price: ''
        }
      }
    },
    components: {
      numCount
    },
    filters: {
      tofixed:function (value) {
        if (isNaN(value)) {
          return value;
        }
        return value.toFixed(2);
      }
    },
    created(){
      console.log(this.$route.params);
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
        this.toShowConfirm = true;

//        this.$router.push({
//          path: '/ShowRecharge',
//          query: {
//            userId :this.$route.params.id,
//            rechargeNum :this.rechargeNum
//
//          }
//
//        });

      },
      toCloseConfirm(){
        this.toShowConfirm = false;
      },
      goPayFn(){
          console.log('点击去支付');

        //获取微信时间戳和签名
        console.log('wx'+wx);
        axios.get("http://m.wishlist1314.com/wishlist_mobile/wechat/getConfig",{

        }).then(function(response){
          wx.config({
            debug:true,
            appId: "wx0155c458e601b602",
            timestamp: response.timestamp,
            nonceStr: response.nonceStr,
            signature: response.signature,
            jsApiList:[ 'chooseWXPay']
          });

          wx.ready(function() {
            //发起一个微信支付请求
            wx.chooseWXPay({
              timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: '', // 支付签名随机串，不长于 32 位
              package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: '', // 支付签名
              success: function (res) {
                // 支付成功后的回调函数
              }
            });
          });

        }.bind(this))
          .catch(function(error){

            console.log(error)
          });



      }
    }
  }


</script>
