<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topTouxBox {
    width: 100%;
    height: 240px;
    background-color: #fff2b8;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

  }

  .touxBox {
    width: 120px;
    height: 120px;
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
        <img src="./img/ucanCup_01.jpg" width="100%" height="100%">
      </div>
      <div class="userNameBox">
        张三
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <p>账户余额：</p>
        </div>
        <div class="weui-cell__bd"></div>
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
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>我的才艺上传</p>
        </div>
        <div class="weui-cell__ft">
          <span>点击上传</span>
        </div>
      </a>
      <v-uploader v-if="isShowUploader"></v-uploader>
      <div class="weui-cells__tips">
      </div>

      <div class="weui-cell" href="javascript:void (0);">
        <div class="weui-cell__hd">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
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
        userId: ''
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
          jsApiList:[ 'chooseImage','previewImage','getLocalImgData',]
        });

        wx.ready(function() {
            //拍照或从手机相册中选图接口
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            }
          });

          //预览图片接口
          wx.previewImage({
            current: '', // 当前显示图片的http链接
            urls: [] // 需要预览的图片http链接列表
          });
          //上传图片接口
          wx.uploadImage({
            localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
              var serverId = res.serverId; // 返回图片的服务器端ID
            }
          });
          //获取本地图片接口
          wx.getLocalImgData({
            localId: '', // 图片的localID
            success: function (res) {
              var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
            }
          });


        });

      }.bind(this))
        .catch(function(error){

          console.log(error)
        });

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
      isShowUploaderFn: function () {
        if (this.isShowUploader)
          this.isShowUploader = false
        else {
          this.isShowUploader = true
        }
      }
    }

  }
</script>
