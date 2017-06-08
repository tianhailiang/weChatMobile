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
        },
        configData:{},
        is_ajax:false
      }
    },
    components: {
      numCount
    },
    filters: {
      tofixed: function (value) {
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
    mounted(){
//      axios.post("http://192.168.3.142:9080/ucanchat/view/linkChat/jsapi",{
//
//      }).then(function(response){
//
//          console.log('configData:')
//          console.log(response);
//        this.$set(this,"configData",response.data);

//        wx.config({
//          debug: true,
//          appId: "wx94db2a3298ae63ab",
//          timestamp: 1496800723,
//          nonceStr: 'cfd485d7-8628-41a7-ac58-e9f22bef1ac1',
//          signature: '5704e9a9d026d025fc48087a40887b69ff66ab48',
//          jsApiList: ['chooseWXPay']
//        });

        //虚拟获取微信时间戳和签名
//        wx.config({
//          debug:true,
//          appId: "wx0155c458e601b602",
//          timestamp: response.timestamp,
//          nonceStr: response.nonceStr,
//          signature: response.signature,
//          jsApiList:[ 'chooseWXPay']
//        });
//        this.is_ajax = true;
//
//      }.bind(this)).catch(function(error){
//        this.is_ajax = false;
//        console.log(error)
//      });

    },
    methods: {
      getRechargeNum(msg){
        this.rechargeNum = msg;
      },
      toShowRecharge(){
        if (this.rechargeNum <= 0)
          return
        else
          console.log(this.rechargeNum);
          console.log('点击出现支付弹窗');
        this.toShowConfirm = true;
        //跳转支付页面（现这个页面的支付直接改为弹窗）
//        this.$router.push({
//          path: '/ShowRecharge',
//          query: {
//            userId :this.$route.params.id,
//            rechargeNum :this.rechargeNum
//          }
//        });

      },
      toCloseConfirm(){
        this.toShowConfirm = false;
      },
      goPayFn(){
        console.log('点击去支付');
//        console.log('goPayfn_is_ajax'+this.is_ajax);
//        if (this.is_ajax){
          axios.get("http://192.168.3.142:9080/ucanchat/view/orderChat/payOrderBefore",{
          }).then(function(response){
            //获取到了支付签名等参数
            console.log('获得支付签名等参数');
            console.log(response);
            //执行调用支付接口函数
            this.weixinPay(response.data.data);
          }.bind(this)).catch(function(error){
            console.log(error)
          });
//        }
      },
      weixinPay: function (data) {
          console.log("微信data输出111111:");
          console.log(data);
        var vm = this;
        if (typeof WeixinJSBridge == "undefined") {//微信浏览器内置对象。参考微信官方文档
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data), false);
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data));
            document.attachEvent('onWeixinJSBridgeReady', vm.onBridgeReady(data));
          }
        } else {
          vm.onBridgeReady(data);
        }
      },
      onBridgeReady: function (data) {
        console.log("微信data输出22222222:");
        console.log(data);
        var vm = this;
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": data.appId,     //公众号名称，由商户传入
            "timeStamp": data.timeStamp, //时间戳，自1970年以来的秒数
            "nonceStr": data.nonceStr, //随机串
            "package": data.package,
            "signType": data.signType, //微信签名方式
            "paySign": data.paySign //微信签名

//              "appId": "wx94db2a3298ae63ab",     //公众号名称，由商户传入
//            "timeStamp": "1496909691562", //时间戳，自1970年以来的秒数
//            "nonceStr": "13798283", //随机串
//            "package": "attach=yongle&bank_type=WX&body=%E6%B5%8B%E8%AF%95%E5%95%86%E5%93%81001&fee_type=1&input_charset=UTF-8&notify_url=http%3A%2F%2Fwww.ucan365.com&out_trade_no=123456&partner=1481744742&spbill_create_ip=192.168.2.237&total_fee=100&sign=7AEF70DEA935288323307DC8FEED1FBC",
//            "signType": "MD5", //微信签名方式
//            "paySign": "8fad7f8d563e22e3ae19f5a246bd5bf72c44719a" //微信签名
          }, function (res) {
            // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            if (res.err_msg == "get_brand_wcpay_request：ok") {
//              vm.$router.push("/paySuccess");

            } else{
              alert('res详情'+res);
              alert(res);
              console.log('res码')
              console.log(res);
              alert("支付失败,请跳转页面" + res.err_msg);
//              vm.$router.push("/payFail");
            }
          })
      }
    }
  }

</script>
