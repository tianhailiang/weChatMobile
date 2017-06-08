<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
    opacity: 1;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

</style>


<template>
    <div v-show="dialogStatus">

      <div class="js_dialog" id="iosDialog2">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
          <div class="weui-dialog__bd">{{dialogText}}</div>
          <div class="weui-dialog__ft">
            <a href="javascript:;" @click="closeFn" class="weui-dialog__btn weui-dialog__btn_primary">知道了</a>
          </div>
        </div>
      </div>


    </div>

</template>

<script>

  export default {
    name: 'dialog',
    props:['dialogStatus','dialogText'],
    data () {
      return {
        dialogMsg:this.dialogText
      }
    },
    created(){
        console.log('dialog'+this.dialogStatus);
    }
    ,
    methods:{
      closeFn(){
        console.log('this.dialogStatus'+this.dialogStatus);
        this.$emit('update:dialogStatus', false);
      }
    }

  }
</script>
