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
      智慧之星教育科技有限公司是一家致力于青少年教育和娱乐的高科技公司，公司引进美国哈佛教育科技研究院和北京师范大学研究的教育理念，我们将用最新网络技术和动漫表现形似开发出为幼儿园、中小学生、老师和家长所需的互动智能教学平台。在此平台上，学生们能够通过一系列青少年智能课件满足学习和娱乐需求。老是、学生和家长可以通过APP获取学习课件、电子图书、教学、交流、娱乐等在线学习和服务。
    </div>
    <div class="titleBox">学校展示</div>
    <div class="lineBox">
      <div class="inlineBox"></div>
    </div>
    <ul>
      <li>
        <div class="showBox">
          <img :src="imgSrc" alt="" width="100%" height="100%">
        </div>


        <p class="bottomTextBox">{{imgText}}</p>
      </li>

      <li>
        <div class="showBox videoBox">
          <video
            id="my-player"
            class="video-js"
            controls
            preload="auto"
            :poster="videoImg='/static/video/ucanCup_summary.jpg'"
            data-setup='{}'>
            <source :src="videoFile[0]" type="video/mp4"></source>
            <source :src="videoFile[1]" type="video/webm"></source>
            <source :src="videoFile[2]" type="video/ogg"></source>
            <p class="vjs-no-js">
              您的浏览器还不支持此类型视频播放！请尝试升级浏览器！
              <a href="http://videojs.com/html5-video-support/" target="_blank">
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
        <p class="bottomTextBox">{{videoText}}</p>
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
        imgSrc: '',
        videoSrc: '',
        imgText: '学校展示图片',
        videoText:'学校展示视频',
        videoFile: ['//vjs.zencdn.net/v/oceans.mp4', '//vjs.zencdn.net/v/oceans.webm', '//vjs.zencdn.net/v/oceans.ogv'],
        videoImg: ''
      }
    },
    components: {},
    mounted: function () {

      axios.get("./static/getmock/voteSchool.json", {}).then(function (response) {

          var result = response.data;

          if (result.code == 0) {

            console.log(result)

            this.$set(this, "schoolList", result.data.schoolList);

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
