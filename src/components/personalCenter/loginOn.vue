<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-size: 16px;
  }

  .loginOnBox .weui-cell__hd {
    width: 60px;
  }

  .title {
    font-size: 15px;
  }

  .weui-cells {
    margin-top: 0;
  }

  .weui-cell:before {
    left: 0 !important;
  }

  .weui-btn {
    background-color: #ffe100;
    border: none;
    color: #6c3d11;
  }

  .weui-btn:active {
    background-color: #eade7d;
  }

  .warn {
    color: red;
    text-align: center;
    font-size: 12px;
  }

  .weui-cells:after {
    z-index: inherit;
  }

  .weui-cell:before {
    z-index: inherit;
  }

  ::-webkit-input-placeholder { /* WebKit browsers */
    　　color: #999 !important;
  }

  　　:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    　　color: #999 !important;
  }

  　　::-moz-placeholder { /* Mozilla Firefox 19+ */
    　　color: #999 !important;
  }

  　　:-ms-input-placeholder { /* Internet Explorer 10+ */
    　　color: #999 !important;
  }
</style>


<template>
  <div>
    <div class="weui-cells weui-cell_vcode">
      <div class="weui-cell">
        <div class="weui-cell__hd title">
          （参赛选手才可以登录哦~）
        </div>
      </div>
      <div class="weui-cell loginOnBox">
        <div class="weui-cell__hd">
          <label class="weui-label">账号：</label>
        </div>
        <div class="weui-cell__ft">
          <input class="weui-input" type="text" v-model="userName" placeholder="请输入您的手机或邮箱">
        </div>
        <!--<div class="warn" v-if="isUserError">-->
        <!--（您的账号格式有误）-->
        <!--</div>-->

      </div>

      <div class="weui-cell loginOnBox">
        <div class="weui-cell__hd">
          <label class="weui-label">密码：</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" v-model="passWord" type="password" placeholder="请输入您的密码(大于6位小于18位)">
        </div>
        <!--<div class="weui-cell__ft" v-if="isPasswordError">-->
        <!--（您的密码格式有误）-->
        <!--</div>-->

      </div>


    </div>
    <div class="weui-btn-area">
      <a class="weui-btn" href="javascript:void (0)" @click="loginOn">登录</a>
    </div>

    <!--通知弹出浮层-->
    <v-dialog :dialogStatus="dialogStatus" :dialogText="dialogText"
              @update:dialogStatus="val => dialogStatus = val"></v-dialog>

  </div>
</template>

<script>
  import axios from 'axios';
  import dialog from '../tools/dialog';
  export default {
    name: 'personalCenter',
    data () {
      return {
        userName: '',
        passWord: '',
        isUserError: false,
        isPasswordError: false,
        dialogStatus: false,
        dialogText: ''
      }
    },
    components: {
      'v-dialog': dialog

    },
//    validators:{
//      username:function (val) {
//        return /^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,10}$/.test(val);
//      },
//      password:function (val) {
//
//      }
//    },
    methods: {
      loginOn(){

        if (!/^1[34578][0-9]{9}/.test(this.userName).test(this.userName)) {
          this.dialogStatus = true;
          this.dialogText = '您的账号格式有误（手机或者邮箱）'
          return

        }
        console.log(this.userName);
        if (!/^(\w){6,18}$/.test(this.passWord)) {
          this.dialogStatus = true;
          this.dialogText = '您的密码格式有误(大于6位小于18位)'
          return
        }
        console.log(this.passWord);

        axios.get("./static/getmock/loginOn.json", {
          userName: this.userName,
          passWord: this.passWord
        }).then(function (response) {
          console.log(response);
          this.$router.push({path: '/personalCenter'});

        }.bind(this))
          .catch(function (error) {
            console.log(error);
          });

      },
      listenToDialog(status){
        this.dialogStatus = status;
      }
    }
  }

</script>
