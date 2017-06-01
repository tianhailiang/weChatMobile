<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>


<template>
  <div>
    <div class="box">
        <div class="topImgBox">
          <img src="./img/ucanCup_01.jpg" width="100%">
        </div>


      <!--<div class="weui_cells_title">余额</div>-->
      <!--<div class="weui_cells">-->
        <!--<div class="weui_cell">-->
          <!--<div class="weui_cell_hd">-->
            <!--<img src="" alt="icon" style="width:20px;margin-right:5px;display:block">-->
          <!--</div>-->
          <!--<div class="weui_cell_bd weui_cell_primary">-->
            <!--<p>标题文字</p>-->
          <!--</div>-->
          <!--<div class="weui_cell_ft">-->
            <!--说明文字-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->




      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">余额</label></div>
          <div class="weui-cell__bd">
            <!--<input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号"/>-->
            0优币
          </div>
        </div>
        <div class="weui-cell weui-cell_vcode">
          <div class="weui-cell__hd">
            <label class="weui-label">余额</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入手机号"/>
          </div>
          <div class="weui-cell__ft">
            <button class="weui-vcode-btn">获取验证码</button>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label for="" class="weui-label">日期</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="date" value=""/>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label for="" class="weui-label">时间</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="datetime-local" value="" placeholder=""/>
          </div>
        </div>
        <div class="weui-cell weui-cell_vcode">
          <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" placeholder="请输入验证码"/>
          </div>
          <div class="weui-cell__ft">
            <!--<img class="weui-vcode-img" src="./images/vcode.jpg" />-->
          </div>
        </div>
      </div>




    </div>
  </div>


</template>

<script>
  import axios from 'axios';

    export default {
        name: 'personalCenter',
        data () {
            return {}
        },
        components: {

        }

    }
</script>
