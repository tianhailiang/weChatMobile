<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topTouxBox {
    width: 100%;
    height: 200px;
    background-color: #fff2b8;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

  }

  .touxBox {
    width: 100px;
    height: 100px;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    overflow: hidden;

  }

  .userNameBox {
    flex: 0 1 100%;
    text-align: center;
    font-size: 18px;
  }

  .rechargeBtn {
    background-color: #ffe100;
    color: #6a3906;
    font-size: 16px;
  }

  .weui-btn:active {
     background-color: #eade7d;
   }

  .weui-cell__bd {
    padding-left: 10px;
  }

  .weui-cells__tips {
    width: 100%;
    height: 20px;
    background: #eeeeee;
  }

  .weui-cell:before {
    left: 0 !important;
  }

  .weui-cells::after {
    border: none;
  }
</style>


<template>
  <div>
    <div class="topTouxBox">
      <!--<img src="./img/ucanCup_01.jpg" width="100%" height="100%">-->
      <div class="touxBox">
        <img src="./img/tx-icon.png" width="100%" height="100%">
      </div>
      <div class="userNameBox">
        {{nickname}}
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <img src="./img/balance.png" alt="" style="width:20px;margin-right:5px;display:block">
        </div>
        <div class="weui-cell__bd"><p>账户余额：</p></div>
        <div class="weui-cell__ft">
          <p>
            <span>{{balance}}</span><span>元</span>
          </p>
        </div>
        <!--<div class="weui-cell__ft">-->
          <!--&lt;!&ndash;<button class="rechargeBtn weui-btn weui-btn_mini" >充值</button>&ndash;&gt;-->
          <!--<router-link id="rechargeBtn" class="rechargeBtn weui-btn weui-btn_mini" :to="/Recharge/+userId">充值-->
          <!--</router-link>-->
        <!--</div>-->
      </div>
      <div class="weui-cells__tips" style="padding-left: 0">
      </div>
      <a class="weui-cell weui-cell_access" href="javascript:void(0);" @click="isShowUploaderFn">
        <div class="weui-cell__hd">
          <img  src="./img/uploader.png" alt="" style="width:20px;margin-right:5px;display:block">
        </div>
        <div class="weui-cell__bd">
          <p>我的才艺上传</p>
        </div>
        <div class="weui-cell__ft">
          <span style="font-size: 16px">打开上传模块</span>
        </div>
      </a>
      <v-uploader v-if="isShowUploader"></v-uploader>
      <div class="weui-cells__tips">
      </div>

      <div class="weui-cell" href="javascript:void (0);">
        <div class="weui-cell__hd">
          <img
            src="./img/ranking.png"
            alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>我的排名</p>
        </div>
        <div class="weui-cell__ft">
          <!--排名-->
          <span>{{ranking}}</span>/<span>{{rankings}}</span>
        </div>
      </div>


      <div class="weui-cell" href="javascript:void(0);">
        <div class="weui-cell__hd">
          <img
            src="./img/myPoll.png"
            alt="" style="width:20px;margin-right:5px;display:block">
        </div>
        <div class="weui-cell__bd">
          <p>我的票数</p>
        </div>
        <div class="weui-cell__ft">
          {{myPoll}}
        </div>
      </div>


    </div>


  </div>


</template>

<script>
  import axios from 'axios';
  import uploader from '../tools/uploader';
  import Recharge from  '../Recharge/Recharge';
  import loginOn from  '../personalCenter/loginOn';
  import wx from 'weixin-js-sdk';

  export default {
    name: 'personalCenter',
    data () {
      return {
        isShowUploader: false,  //点击显示上传卡槽
        balance:'',
        ranking: '',
        rankings: '',
        myPoll :'',
        headimgurl:"",
        wxConfigOptions:'',
        userId: '',
        nickname:'',

      }
    },
    created(){
//      console.log(this.$route.params.id);
//      this.userId = this.$route.params.id;
    },
    components: {
      'v-uploader': uploader,
      Recharge,
      loginOn
    },
    mounted: function () {
      //        ajax获得页面动态数据
      axios.get("./static/getmock/personalCenter.json",{

      }).then(function (response) {
        var result =response.data;
        console.log(result)
        if(result.code==0){
          this.$set(this, "balance", result.data.balance);
          this.$set(this, "ranking", result.data.ranking);
          this.$set(this, "rankings", result.data.rankings);
          this.$set(this, "myPoll", result.data.myPoll);
        }else{

        }
      }.bind(this)).catch(function (error) {
        console.log(error);
      });


      console.log(this.$refs);

      console.log('wx'+wx);
//      let is_ajax =false;
//        //获取微信时间戳和签名
//        axios.get("http://m.wishlist1314.com/wishlist_mobile/wechat/getConfig",{
//
//        }).then(function(response){
//          this.$set(this,"wxConfigOptions",response); //保存wxConfig信息
//          wx.config({
//            debug:true,
//            appId: "wx0155c458e601b602",
//            timestamp: response.timestamp,
//            nonceStr: response.nonceStr,
//            signature: response.signature,
//            jsApiList:[ 'chooseImage','previewImage','getLocalImgData',]
//          });
//          is_ajax =true;
//
////          wx.ready(function() {
////
////
////          });
//
//        }.bind(this))
//          .catch(function(error){
//            is_ajax =false;
//            console.log(error)
//          });
//
//        if(is_ajax){
//
//          axios.get("https://api.weixin.qq.com/cgi-bin/user/info?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN",{
//
//          }).then(function(response){
//
//            this.$set(this,"nickname",response.nickname);
//            this.$set(this,"headimgurl",response.headimgurl);
//
//          }.bind(this))
//            .catch(function(error){
//              console.log(error)
//            });
//
//        }



      //ajax 获得wx.config 签名

//      let localStorage = window.localStorage;
//      if (localStorage) {
//        let user = localStorage.getItem('user');
//        if (user) {
//          this.user = JSON.parse(user);
//        } else {
//          axios.get('/api/initUser').then(res => {
//            this.user = res.data
//            localStorage.setItem('user', JSON.stringify(res.data))
//          }, err => {
//            console.log('err', err);
//           console.log('初始化数据失败');
//          })
//        }
//      } else {
//        console.log('不支持h5新特性');
//      }
//
//      axios.get('/api/token', {}).then((res) => {
//        wx.config(res.data.jsConfig)
//      }, (err) => {
//        console.log('init jssdk fail:', err)
//      })


//      this.$http.get({
//        url: 'api/wx/tokenSignature',
//        data: {
//          url: mui.os.ios === true ? window.url : (location.protocol + '//' + location.host + '/wx' + url)
//        },
//        success: function (json) {
//          wx.config({
//            debug: false,
//            appId: json.appId,
//            timestamp: parseInt(json.timestamp),
//            nonceStr: json.nonce,
//            signature: json.signature,
//            jsApiList: [
//              'onMenuShareAppMessage'
//            ]
//          });
//          wx.ready(function () {
//            wx.onMenuShareAppMessage({
//              success: function () {
//                // 用户确认分享后执行的回调函数
//              },
//              cancel: function () {
//                // 用户取消分享后执行的回调函数
//              }
//            });
//          });
//        }
//      })

    },
    methods: {

      isShowUploaderFn () {
        if (this.isShowUploader)
          this.isShowUploader = false
        else {
          this.isShowUploader = true
          console.log('点击显示了')
//          this.$refs.uploader.tinyImgUpload('#upload', {
//            path: '/',
//            onSuccess: function (res) {
//              console.log(res);
//            },
//            onFailure: function (res) {
//              console.log(res);
//            }
//          })
        }
      }
    }

  }
</script>
