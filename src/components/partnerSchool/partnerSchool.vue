<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul{
    width: 96%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 20px;

  }
  ul li{
    width: 50%;

  }
  ul li .inBox_img{
    padding: 0px 5px;
  }
  ul li .inBox_text{
    text-align: center;
    padding: 15px 0;
    font-size: 16px;
  }
</style>
<template>
  <div>
    <div class="box">
      <ul >
          <router-link tag="li" v-for="item in schoolList" :key="item.schoolId" :to="{name:'everyPartnerSchool',params: { id: item.schoolId}}">
            <figure class="inBox_img">
              <img v-lazy="item.schoolLogo.imageVisitUrl"  alt="" width="100%" height="140px">
            </figure>
            <div class="inBox_text">
                <span>
                  {{item.schoolName}}
                </span>
            </div>
          </router-link>
        </ul>
      </div>

  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'partnerSchool',
    data () {
      return {
        schoolList:[]
      }
    },
    components: {
    },
    mounted: function () {
//      http://192.168.3.140:8080/ucanchat/view/activity/getSchoolList

      axios.get("http://192.168.3.140:8080/ucanchat/view/activity/getSchoolList", {})
        .then(function (response) {

          var result = response.data;

          if (result.code == 0) {
            console.log(result)
            this.$set(this, "schoolList", result.data.schoolList);
          } else {
            console.log(result.msg);
          }
        }.bind(this)).catch(function (error) {
        console.log(error);
      });

    }
  }
</script>
