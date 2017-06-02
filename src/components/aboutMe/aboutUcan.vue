<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ucanSummary{
      text-indent: 32px;
      line-height:25px;
      font-size: 16px;
      color: #666666;
      padding: 5px 10px;
    }
    .featuredCoursesBox{
        width: 100%;
        margin:  0 auto;
    }
    .featuredCoursesBox .titleBox{
      font-weight: 700;
      font-size: 20px;
      margin-left: 4%;
      margin-top: 10px;


    }
    .lineBox{
      width: 92%;
      height: 1px;
      background-color: #dcdcdc;
      margin: 0 auto;
      position: relative;
      margin-bottom: 10px;
    }
    .inlineBox{
      position: absolute;
      top:0;
      left: 0;
      height: 1px;
      width: 80px;
      background-color: #ffe100;
    }
    .featuredCoursesBox ul{
      width: 96%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

    }
    .featuredCoursesBox ul li{
        width: 50%;

    }
    .featuredCoursesBox ul li .inBox_img{
      padding: 0px 5px;
    }
    .featuredCoursesBox ul li .inBox_text{
          text-align: center;
          padding: 5px 0;
          font-size: 15px;
    }
</style>


<template>
  <div>
    <div class="box">
      <div class="ucanSummary">
          智慧之星教育科技有限公司是一家致力于青少年教育和娱乐的高科技公司，公司引进美国哈佛教育科技研究院和北京师范大学研究的“3i”（interactive+innovative+intelligent）
          教育理念，我们将用最新网络技术和动漫表现形似开发出为幼儿园、中小学生、老师和家长所需的互动智能教学平台。在此平台上，学生们能够通过一系列青少年智能课件满足学习和娱乐需求。老是、学生和家长可以通过APP获取学习课件、电子图书、教学、交流、娱乐等在线学习和服务。
      </div>
      <div class="featuredCoursesBox">
        <div class="titleBox">特色课程</div>
        <div class="lineBox">
              <div class="inlineBox">

              </div>
        </div>
        <ul >
          <li v-for="item in courses">
            <div class="inBox_img">
              <img :src="item.coursePicture" alt="" width="100%" height="140px">
            </div>
            <div class="inBox_text">
                <span>
                  {{item.courseName}}
                </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'aboutUcan',
    data () {
      return {
        courses:[]
      }
    },
    components: {},
    mounted: function () {

      axios.get("./static/getmock/aboutMe.json", {})
        .then(function (response) {

          var result = response.data;

          if (result.code == 0) {
            console.log(result)
            this.$set(this, "courses", result.data.aboutUcan.featuredCourses);
          } else {
            console.log(result.msg);
          }
        }.bind(this)).catch(function (error) {
          console.log(error);
        });

    }
  }
</script>
