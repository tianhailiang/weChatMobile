<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .js_show{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .weui-msg{
    padding-top: 50%;

  }
</style>


<template>
  <div>
    <div class="page msg_warn js_show">
      <div class="weui-msg">
        <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
          <h2 class="weui-msg__title">支付失败</h2>
          <p class="weui-msg__desc"></p>
        </div>
        <div class="weui-msg__opr-area">
          <p class="weui-btn-area">
            <a href="javascript:history.back();" class="weui-btn weui-btn_primary"></a>
            <!--<a href="javascript:history.back();" class="weui-btn weui-btn_default">辅助操作</a>-->
          </p>
        </div>
        <div class="weui-msg__extra-area">
          <div class="weui-footer">
            <p class="weui-footer__links">
              <a href="javascript:void(0);" class="weui-footer__link">uCan教育微信平台</a>
            </p>
            <p class="weui-footer__text"></p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

  export default {
    name: 'msg_success',
    data () {
      return {
        dialogMsg:this.dialogText
      }
    },
    props:['dialogStatus','dialogText'],
    components: {

    }

  }
</script>
