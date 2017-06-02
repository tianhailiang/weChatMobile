<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped >
  @import  '../../common/css/wx-personal.css';
  #container{
    z-index: 10 !important;

  }
</style>


<template>

  <div>

    <div class="container" id="container">
      <div class="page uploader js_show">
        <div class="page uploader js_show">
          <div class="page__hd">
            <div class="page__hd">
              <h1 class="page__title">请上传您的图片</h1>
            </div>
          </div>
          <div class="page__bd">
            <div class="weui-gallery" id="gallery">
              <span class="weui-gallery__img" id="galleryImg"></span>
              <div class="weui-gallery__opr">
                <a href="javascript:" class="weui-gallery__del">
                  <i class="weui-icon-delete weui-icon_gallery-delete"></i>
                </a>
              </div>
            </div>

            <div class="weui-cells weui-cells_form">
              <div class="weui-cell">
                <div class="weui-cell__bd">
                  <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                      <p class="weui-uploader__title">图片上传</p>
                      <div class="weui-uploader__info">0/2</div>
                    </div>
                    <div class="weui-uploader__bd">
                      <ul class="weui-uploader__files" id="uploaderFiles">
                        <li class="weui-uploader__file" >
                          <!--<img src="./img/ucanCup_01.jpg" width="100%" alt="">-->
                        </li>
                        <li class="weui-uploader__file" ></li>
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
                      <div class="weui-uploader__input-box">
                        <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page__ft j_bottom">
            <a href="javascript:home()">
              <!--<img src="./img/ucanCup_01.jpg">-->
            </a>
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


</template>

<script>
  export default {
    data () {
      return {}
    },
    components: {

    }

  }
</script>
