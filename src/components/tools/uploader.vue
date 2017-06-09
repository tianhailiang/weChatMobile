<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .weui-uploader__bd {
    padding-left: 10px;
  }

  .weui-uploader__file {
    border: 1px solid #D9D9D9;
  }

  .weui-gallery__img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .showGallery-enter-active, .showGallery-leave-active {
    transition: all 0.5s ease;
    opacity: 1;
  }

  .showGallery-enter, .showGallery-leave-active {
    opacity: 0;
  }
  .submit {
    background-color: #ffe100;
    color: #6a3906;
  }
  .weui-btn:active {
    background-color: #eade7d;
  }

</style>
<style>
  #img-container {
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  #img-container:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    overflow: hidden;
    clear: both;
  }

  .img-item {
    float: left;
    margin: 5px;
    width: 80px;
    height: 80px;
    background: no-repeat center center;
    background-size: contain;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .img-thumb {
    border: 1px solid #000;
  }

  .thumb-icon {
    height: 100%;
    overflow: hidden;
    display: block;
  }

  .img-up-add {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #E0E0E0;
  }

  .img-add-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-remove {
    position: absolute;
    right: -8px;
    top: -5px;
    display: block;
    text-align: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f7333d;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    line-height: 18px;
    overflow: hidden;
    background-clip: padding-box;
  }

  #img-file-input {
    display: none;
  }
  .submit{
    width: 80px;
    height: 30px;

  }
  .imgUpBox{
    text-align: left;
    float: left;
    font-size: 15px;
    color: #6a3906;
  }
  .weui-cells:before{
    z-index: inherit;
  }
  .weui-cell:before{
    border:none;
    z-index: inherit;
  }
</style>


<template>

  <div>

    <div class="weui-cell">
    <div class="weui-cell__bd">
    <div class="weui-uploader">

    <!--<div class="weui-cell__ft weui-uploader__info">{{slectedImg}}/{{allFileNum}}</div>-->
      <div class="weui-cell__ft weui-uploader__info">
        <span class="imgUpBox">{{selectedFileNum}}/6</span>
        <span style="font-size: 13px">(只能上传图片和视频哟!)</span>
        <button class="submit weui-btn weui-btn_mini" @click="upload">开始上传</button>

      </div>
    <div class="weui-uploader__bd">
    <!--v-for="(item,idnex)in files_list"-->
    <ul class="weui-uploader__files" @click="uploaderShowFn" id="upload">
    <!--<li class="weui-uploader__file">-->
    <!--<img src="./img/loading.gif" width="100%" alt="">-->
    <!--</li>-->
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
    <!--<button class="weui-uploader__input-box" type="submit" @click="">-->
    <!--<input id="uploaderInput" class="weui-uploader__input"  type="file" accept="image/*" multiple="">-->
    <!--</button>-->
    </div>

    </div>
    </div>
    </div>



    <transition name="showGallery">
      <div class="weui-gallery" id="gallery" style="display: block" v-show="showGallery">
      <span class="weui-gallery__img" id="galleryImg" @click="closeGallery">
        <img class="fdImgBox" :src="fdImgBoxSrc" alt="" width="100%">
      </span>
        <div class="weui-gallery__opr">
          <!--<a href="javascript:void(0)" class="weui-gallery__del" @click="delImgFn">-->
            <!--<i class="weui-icon-delete weui-icon_gallery-delete"></i>-->
          <!--</a>-->
        </div>
      </div>
    </transition>


    <!--通知弹出浮层-->
    <v-dialog :dialogStatus="dialogStatus" :dialogText="dialogText"
              @update:dialogStatus="val => dialogStatus = val"></v-dialog>

  </div>

</template>

<script>
  import axios from 'axios';
  import wx from 'weixin-js-sdk';
  import dialog from './dialog';

  export default {
    data () {
      return {
        showGallery: false,
        files_list: [],
        slectedImg:0,
        allFileNum: 9,
        selectedFileNum:0,
        upload: '',
        fdImgBoxSrc:'',
        dialogStatus: false,
        dialogText:'',
        userid:1
      }
    },
    components: {
      'v-dialog': dialog
    },
    mounted(){
        let vm =this;
        console.log(this);
        this.upload = this.tinyImgUpload('#upload', {
        path: 'http://192.168.3.142:9080/ucanchat/owner/postOwnerMedia',
        onSuccess: function (res) {
          console.log("成功res"+res);
          console.log('成功上传');
          vm.dialogStatus = true;
          vm.dialogText = '成功上传';

        },
        onFailure: function (res) {
          console.log("失败res"+res);
          console.log('上传失败')
          vm.dialogStatus = true;
          vm.dialogText = '上传失败，您可重新尝试！';
        }
      })
    },
    methods: {
      uploaderShowFn(event){
        if (event.target.tagName == 'IMG') {
          this.showGallery = true;
          this.fdImgBoxSrc = event.target.src;
//          this.$emit('showGallery', this.showGallery);
        }else if(event.target.tagName == 'VIDEO'){
          this.showGallery = true;
          this.fdImgBoxSrc = event.target.src;
        }
      },
      closeGallery(){
        this.showGallery = false;
      },
      delImgFn(){
        this.showGallery = false;

//        this.$emit('showGallery', this.showGallery);
      },
      tinyImgUpload(ele, options){
        var vm = this;
        // 判断容器元素合理性并且添加基础元素
        var eleList = document.querySelectorAll(ele);
        if (eleList.length == 0) {
          console.log('绑定的元素不存在');
          return;
        } else if (eleList.length > 1) {
          console.log('请绑定唯一元素');
          return;
        } else {
          eleList[0].innerHTML = '<div id="img-container" >' +
            '<div class="img-up-add  img-item"> <span class="img-add-icon">+</span> </div>' +
            '<input type="file" name="files" id="img-file-input" multiple>' +
            '</div>';
          var ele = eleList[0].querySelector('#img-container');
          ele.files = [];   // 当前上传的文件数组
        }

        // 为添加按钮绑定点击事件，设置选择图片的功能
        var addBtn = document.querySelector('.img-up-add');
        addBtn.addEventListener('click', function () {
          document.querySelector('#img-file-input').value = null;
          document.querySelector('#img-file-input').click();
          return false;
        }, false)

        // 预览图片和视频
        //处理input选择的图片
        function handleFileSelect(evt) {
            if (parseInt(vm.selectedFileNum) >5){
              console.log('做多6个')
              vm.dialogStatus = true;
              vm.dialogText = '一次性最多可上传6张图片哟！';
                return;
            }
          var files = evt.target.files;

          console.log(files);
//          vm.slectedImg = vm.slectedImg + 1 ;
          for (var i = 0, f; f = files[i]; i++) {
            // 过滤掉非图片和视频类型文件
            if (!f.type.match('image.*') && !f.type.match('video.*')) {
              continue;
            }
            // 过滤掉重复上传的图片和视频
            var tip = false;
            for (var j = 0; j < (ele.files).length; j++) {
              if ((ele.files)[j].name == f.name) {
                tip = true;
                break;
              }
            }
            if (!tip) {
              vm.selectedFileNum = vm.selectedFileNum +1;
              // 图片文件绑定到容器元素上
              ele.files.push(f);
              var reader = new FileReader();
              reader.onload = (function (theFile) {
                  console.log(theFile);

                return function (e) {
                  var oDiv = document.createElement('div');
                  oDiv.className = 'img-thumb img-item';
                  console.log('文件类型~~~~~~~');
                  console.log(ele.files);
                  if (theFile.type.match('video.*')){
                    console.log('这是一个视频文件')
                    oDiv.innerHTML = '<span class="thumb-icon" style="font-size: 14px;display: flex;justify-content: center;align-items: center;background-color: rgba(0,0,0,0.5);width: 100%;height: 100%;color: #fff">视频文件</span>' +
                      '<a href="javscript:;" class="img-remove">x</a>'

                  }else if(theFile.type.match('image.*')){
                    console.log('这是一个图片文件')
                    // 向图片容器里添加元素
                    oDiv.innerHTML = '<img class="thumb-icon" src="' + e.target.result + '" />' +
                      '<a href="javscript:;" class="img-remove">x</a>'
                  }
                  ele.insertBefore(oDiv, addBtn);
                };
              })(f);

              reader.readAsDataURL(f);
            }
          }
          console.log('count000a' +vm.selectedFileNum);
        }
        document.querySelector('#img-file-input').addEventListener('change', handleFileSelect, false);

        // 删除图片
        function removeImg(evt) {
          if (evt.target.className.match(/img-remove/)) {
            console.log('3', ele.files);
            // 获取删除的节点的索引
            function getIndex(ele) {

              if (ele && ele.nodeType && ele.nodeType == 1) {
                var oParent = ele.parentNode;
                var oChilds = oParent.children;
                for (var i = 0; i < oChilds.length; i++) {
                  if (oChilds[i] == ele)
                    return i;
                }
              } else {
                return -1;
              }
            }

            // 根据索引删除指定的文件对象
            var index = getIndex(evt.target.parentNode);
            ele.removeChild(evt.target.parentNode);
            if (index < 0) {
              return;
            } else {
              ele.files.splice(index, 1);
            }
            console.log('4', ele.files);
//            var filesLength = ele.files.length;
//            console.log('fileslength'+filesLength);
            vm.selectedFileNum = vm.selectedFileNum -1;
          }

        }

        ele.addEventListener('click', removeImg, false);

        // 上传图片
        function uploadImg() {
          console.log('上传前的检查')
          if(ele.files.length == 0){
            vm.dialogStatus = true;
            vm.dialogText = '您还没有添加文件！'
            return;
          }else {
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            formData.userid = 1;

            for (var i = 0, f; f = ele.files[i]; i++) {
              formData.append('files', f);
            }

            console.log('1', ele.files);
            console.log('2', formData);

            xhr.onreadystatechange = function (e) {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  options.onSuccess(xhr.responseText);
                } else {
                  options.onFailure(xhr.responseText);
                }
              }
            }

            //侦查当前附件上传情况
            xhr.upload.onprogress = function(evt) {
             var loaded = evt.loaded;
             var tot = evt.total;
             var per = Math.floor(100 * loaded / tot); //已经上传的百分比
                console.log(per);
            };


            xhr.open('POST', options.path, true);
            xhr.send(formData);

          }



        }

        return uploadImg;
      }


    }

  }
</script>
