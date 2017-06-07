<template>
  <div>
    <vue-file-upload url='upload.do' ref="vueFileUploader" :filters="filters" :events='cbEvents'
                     :request-options="reqopts" :onAdd="onAddItem"></vue-file-upload>
    <ul>
      <div>
        <span class="name">name</span>
        <span class="size">name</span>
        <span class="progress">name</span>
        <span class="status">status</span>
        <span class="action">action</span>
      </div>
      <li v-for="file in files">
        <span v-text='file.name'>1</span>
        <span v-text='file.size'>2</span>
        <span v-text='file.progress'>3</span>
        <span v-text='file.onStatus(file)'>4</span>
      </li>
    </ul>
    <button type="button" @click="uploadItem(file)">上传文件</button>
    <button type="button" @click="uploadAll">上传所有文件</button>
    <button type="button" @click="clearAll">上传所有文件</button>
  </div>

</template>

<script>
  import VueFileUpload from 'vue-file-upload';
  console.log(VueFileUpload);
  export default{
    data(){
      return {
        files: [],
        //文件过滤器，只能上传图片
        filters: [
          {
            name: "imageFilter",
            fn(file){
              var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
          }
        ],
        //回调函数绑定
        cbEvents: {
          onCompleteUpload: (file, response, status, header) => {
            console.log(file);
            console.log("finish upload;")
          }
        },
        //xhr请求附带参数
        reqopts: {
          formData: {
            tokens: 'tttttttttttttt'
          },
          responseType: 'json',
          withCredentials: false
        }
      }

    },

    methods: {
      onStatus(file){
        if (file.isSuccess) {
          return "上传成功";
        } else if (file.isError) {
          return "上传失败";
        } else if (file.isUploading) {
          return "正在上传";
        } else {
          return "待上传";
        }
      },
      onAddItem(files){
        console.log(files);
        this.files = files;
      },
      uploadItem(file){
          console.log(1222)
        //单个文件上传
        file.upload();
      },
      uploadAll(){
        //上传所有文件
        this.$refs.vueFileUploader.uploadAll();
      },
      clearAll(){
        //清空所有文件
        this.$refs.vueFileUploader.clearAll();
      }
    },
    components: {
      VueFileUpload
    }
  }
</script>
