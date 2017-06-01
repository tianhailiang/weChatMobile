<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .featuredCoursesBox{
        width: 100%;
        margin:  0 auto;
    }
    .featuredCoursesBox .titleBox{
      font-weight: 700;
    }
    .featuredCoursesBox ul{
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
    }
    .featuredCoursesBox ul li{
        width: 50%;

    }
    .featuredCoursesBox ul li .inBox_img{
      padding: 10px;
    }
    .featuredCoursesBox ul li .inBox_text{
          text-align: center;
    }
</style>


<template>
  <div>
    <div class="box">
      <div class="ucanSummary">
        <h3>优看公司简介</h3>
        <div class="summaryTextBox">
          　　2017“优看”杯超级宝贝才艺大奖赛，是贵州优看教育科技有限公司面向贵州省3-6岁儿童，以亲子为主题举办的大型幼儿才艺竞赛
        </div>
      </div>
      <div class="featuredCoursesBox">
        <div class="titleBox">特色课程</div>
        <ul >
          <li v-for="item in courses">
            <div class="inBox_img">
              <img :src="item.coursePicture" alt="" width="100%">
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

      axios.get("http://localhost:7777/static/getmock/aboutMe.json", {})
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
