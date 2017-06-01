<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


<template>
<div>
    <div class="box">
          <div class="bannerBox">
            <img src="./img/ucanCup_01.jpg" alt="Banner图">
          </div>
          <div class="textBox">
            　　2017“优看”杯超级宝贝才艺大奖赛，是贵州优看教育科技有限公司面向贵州省3-6岁儿童，以亲子为主题举办的大型幼儿才艺竞赛
          </div>

      <div class="videoBox">
        <video
          id="my-player"
          class="video-js"
          controls
          preload="auto"
          data-setup='{}'>
          <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
          <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
          <p class="vjs-no-js">
            您的浏览器还不支持此类型视频播放！请尝试升级浏览器！
            <a href="http://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name: 'warmUp',
        data () {
            return {}
        },
        components: {

        }

    }
</script>
