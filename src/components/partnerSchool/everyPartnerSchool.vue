<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {

    padding: 10px 10px;
    padding-top: 20px;
  }

  .textBox {
    text-indent: 32px;
    line-height: 25px;
    font-size: 16px;
    color: #666666;
  }

  .titleBox {
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
  }

  .lineBox {
    width: 100%;
    height: 1px;
    background-color: #dcdcdc;
    margin: 0 auto;
    position: relative;
    margin-bottom: 15px;
  }

  .inlineBox {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 80px;
    background-color: #ffe100;
  }

  ul li {
    width: 100%;
    height: 240px;
    margin-top: 20px;
  }

  ul li .showBox {
    width: 100%;
    height: 200px;
  }

  ul li .bottomTextBox {
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }

  .video-js {
    width: 100%;
    height: 100%;
    border: none;
  }
  ul li .videoBox{
    height: 240px;
  }
</style>
<template>
  <div class="box">
    <div class="textBox">
        {{schoolIntroduction}}
    </div>
    <div class="titleBox">学校展示</div>
    <div class="lineBox">
      <div class="inlineBox"></div>
    </div>
    <ul>
      <li>
        <div class="showBox" v-for="item in uParticipantImages" >
          <img :src="item.imageVisitUrl" alt="" width="100%" height="100%">
        </div>


        <p class="bottomTextBox">{{imageNewName}}</p>
      </li>

      <li>
        <div class="showBox videoBox" v-for="item in uParticipantImages">
          <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            :poster="videoVisitUrl='/static/video/ucanCup_summary.jpg'"
            data-setup='{}'>
            <source :src="item.imageVisitUrl" :type="videoType"></source>
            <source :src="videoVisitUrl" :type="videoType"></source>
            <source :src="videoVisitUrl" :type="videoType"></source>
            <p class="vjs-no-js">
              您的浏览器还不支持此类型视频播放！请尝试升级浏览器！
              <a href="http://videojs.com/html5-video-support/" target="_blank">
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
        <p class="bottomTextBox">{{videoNewName}}</p>
      </li>

    </ul>

  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'everyPartnerSchool',
    data () {
      return {
        schoolName:'',
        schoolIntroduction:'',
        imageVisitUrl: '',
        imageNewName: '学校展示图片',
        videoVisitUrl: '',
        videoNewName:'学校展示视频',
        videoImg: '',
        videoType:''
      }
    },
    components: {},
    mounted: function () {
      axios.get("http://192.168.3.140:8080/ucanchat/view/activity/getSchoolDetailInfo", {
        params:{
          schoolId:this.$route.params.id
        }
      }).then(function (response) {
          console.log(response);
          var result = response.data;

          if (result.code == 0) {

            console.log(result.data.schoolDetail.uParticipantImages)

            this.$set(this, "schoolName", result.data.schoolDetail.schoolName);
            this.$set(this, "schoolIntroduction", result.data.schoolDetail.schoolIntroduction);
            this.$set(this, "uParticipantImages", result.data.schoolDetail.uParticipantImages);
            this.$set(this, "uParticipantVideos", result.data.schoolDetail.uParticipantVideos);
          } else {

            console.log(result.msg)
          }

        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });


    }

  }
</script>
