<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .weui-uploader__bd{
    padding-left: 10px;
  }
.weui-uploader__file{
  border: 1px solid #D9D9D9;
}
  .weui-gallery__img{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .showGallery-enter-active,.showGallery-leave-active{
    transition: all 0.5s ease;
    opacity: 1;
  }
  .showGallery-enter, .showGallery-leave-active{
    opacity: 0;
  }
</style>


<template>
  <div>
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <div class="weui-uploader">
          <div class="weui-cell__ft weui-uploader__info">0/2</div>
          <div class="weui-uploader__bd">
            <!--v-for="(item,idnex)in files_list"-->
            <ul class="weui-uploader__files" @click="uploaderShowFn" id="uploaderFiles" >
              <li class="weui-uploader__file" >
                <img src="./img/loading.gif" width="100%" alt="">
              </li>
              <!--<li class="weui-uploader__file" style="background-image:url(./img/loading.gif)"></li>-->

              <!--<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./img/ucanCup_01.jpg)">-->
              <!--<div class="weui-uploader__file-content">-->
              <!--<i class="weui-icon-warn"></i>-->
              <!--</div>-->
              <!--</li>-->

              <!--<li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./img/ucanCup_01.jpg)">-->
              <!--<div class="weui-uploader__file-content">50%</div>-->
              <!--</li>-->
            </ul>
            <div class="weui-uploader__input-box" @click="picUploadFn">
              <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
            </div>
          </div>

        </div>
      </div>
    </div>


    <!--<script type="text/javascript" class="uploader js_show">-->
    <!--$(function(){-->
    <!--var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',-->
    <!--$gallery = $("#gallery"), $galleryImg = $("#galleryImg"),-->
    <!--$uploaderInput = $("#uploaderInput"),-->
    <!--$uploaderFiles = $("#uploaderFiles")-->
    <!--;-->

    <!--$uploaderInput.on("change", function(e){-->
    <!--var src, url = window.URL || window.webkitURL || window.mozURL, files = e.target.files;-->
    <!--for (var i = 0, len = files.length; i < len; ++i) {-->
    <!--var file = files[i];-->

    <!--if (url) {-->
    <!--src = url.createObjectURL(file);-->
    <!--} else {-->
    <!--src = e.target.result;-->
    <!--}-->

    <!--$uploaderFiles.append($(tmpl.replace('#url#', src)));-->
    <!--}-->
    <!--});-->
    <!--$uploaderFiles.on("click", "li", function(){-->
    <!--$galleryImg.attr("style", this.getAttribute("style"));-->
    <!--$gallery.fadeIn(100);-->
    <!--});-->
    <!--$gallery.on("click", function(){-->
    <!--$gallery.fadeOut(100);-->
    <!--});-->
    <!--});</script>-->

    <transition name="showGallery">
      <div class="weui-gallery" id="gallery" style="display: block" v-show="showGallery">
      <span class="weui-gallery__img" id="galleryImg" @click="closeGallery">
        <img src="./img/loading.gif" alt="" width="100%">
      </span>
        <div class="weui-gallery__opr">
          <a href="javascript:void(0)" class="weui-gallery__del" @click="delImgFn">
            <i class="weui-icon-delete weui-icon_gallery-delete"></i>
          </a>
        </div>
      </div>
    </transition>

  </div>








</template>

<script>
  export default {
    data () {
      return {
          showGallery:false,
          files_list:[]
      }
    },
    components: {},
    methods:{
      uploaderShowFn(event){
          if (event.target.tagName =='IMG'){
            this.showGallery = true;
            this.$emit('showGallery', this.showGallery);

          }

      },
      closeGallery(){
        this.showGallery = false;
      },
      delImgFn(){
        this.showGallery = false;
        this.$emit('showGallery', this.showGallery);
      },
      picUploadFn(event){
        var parent_obj = event.target.parent();// ul
        console.log(parent_obj);

        var img_length = parent_obj.find('li').length;
        cosole.log(img_length);
        img_length--;
        if (img_length >= 6) {
          return false;
        }
        img_length = 6 - img_length;
        wx.chooseImage({
          count: 6, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            var localId = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            for (i = 0; i < localId.length; i++) {
              parent_obj.prepend('<li class="pic_list">' +
                '<div class="pic upload-img">' + '<img src="' + localId[i] + '" class="show_img" >' +
                '<div class="pic-close"><img src="' +
                $close_img + '"/></div></div>' +
                '</li>');
            }

          }
        });
      }
  }

  }
</script>
