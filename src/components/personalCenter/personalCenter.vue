<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topImgBox {
    width: 100%;
    height: 300px;
    background-color: #fff2b8;
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
</style>


<template>
  <div>


    <div class="topImgBox">
      <img src="./img/ucanCup_01.jpg" width="100%" height="100%">
    </div>


    <div class="weui-cells">


      <div class="weui-cell">

        <div class="weui-cell__hd">
          <p>账户余额：</p>
        </div>
        <div class="weui-cell__bd">
          <p>
            <span>{{balance}}</span><span>元</span>
          </p>
        </div>

        <div class="weui-cell__ft">
          <button class="rechargeBtn weui-btn weui-btn_mini" >充值</button>
        </div>

      </div>

      <div class="weui-cells__tips">

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

      <div class="weui-cells__tips">

      </div>


      <div class="weui-cell" href="javascript:;">
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


      <div class="weui-cell" href="javascript:;">
        <div class="weui-cell__hd">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>我的票数</p>
        </div>
        <div class="weui-cell__ft">
          {{myVotes}}
        </div>
      </div>


    </div>
    <v-uploader v-if="isShowUploader"></v-uploader>

  </div>


</template>

<script>
  import axios from 'axios';
  import uploader from '../tools/uploader';
  import Recharge from  '../Recharge/Recharge';
  export default {
    name: 'personalCenter',
    data () {
      return {
        isShowUploader: false,
        ranking: 10,
        rankings: 15,
        myVotes: 20,
        balance: 20
      }
    },
    components: {
      'v-uploader': uploader,
      Recharge
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
