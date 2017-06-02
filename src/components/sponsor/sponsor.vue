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
        <li v-for="item in sponsors">
          <div class="inBox_img">
            <img :src="item.coursePicture" alt="" width="100%" height="140px">
          </div>
          <div class="inBox_text">
                <span>
                  {{item.sponsors}}
                </span>
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  export default {
    name: 'sponsor',
    data () {
      return {
        sponsors:[]
      }
    },
    components: {},
    mounted: function () {

      axios.get("./static/getmock/aboutMe.json", {})
        .then(function (response) {

          var result = response.data;

          if (result.code == 0) {
            console.log(result)
            this.$set(this, "sponsors", result.data.sponsor.sponsors);
          } else {
            console.log(result.msg);
          }
        }.bind(this)).catch(function (error) {
        console.log(error);
      });

    }
  }
</script>
