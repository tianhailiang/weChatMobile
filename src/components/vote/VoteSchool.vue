<style scoped>

 .vote-top{
      width:100%;
      height:120px;
    }

.vote-top img{
  width:100%;
  height:100%;
}

  .search{
      width:100%;
      display: flex;
     margin-top:25px;
     margin-bottom: 25px;
      align-items: center;
      padding:0 20px;
      box-sizing: border-box;
    }

    .search input{
      height:40px;
      border:1px solid #dcdcdc;
      flex:1;

      margin-right: 5px;
      padding-left: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

    }

     .search span{
      display: block;
      width:50px;
      height:40px;
      background:#fee100;
      color:#663b00;
      text-align:center;
      line-height: 40px;



     }

     .search span:active{
       background:rgba(254,225,0,0.7);

     }


     .vote_school_ul{
      display: flex;
      flex-wrap:wrap;
      padding:0 20px;
     }

     .vote_school_ul li{

       width:50%;
       box-sizing: border-box;

     }

      .vote_school_ul li:nth-of-type(2n+1){

        padding-right:5px;
      }

     .vote_school_ul li:nth-of-type(2n){
       padding-left: 5px
     }



     .vote_school_img{
       height:185px;
       width:100%;
     }

     .vote_school_figure figcaption{
      height:77px;
      text-align: center;

      color:#646464;
      box-sizing: border-box;
      padding-top: 20px;
      font-size:10px;
     }


</style>


<template>
  <div>

      <div class="vote-top">
        <img src="../warmUp/img/ucanCup_01.jpg" />
      </div>

      <div class="search">

         <input type="text" v-model.trim="searchVal" placeholder="请输入你要投票选手的编号或者名字" >
         <span @click="searchBtn">搜索</span>

      </div>

     <ul class="vote_school_ul" >

        <router-link   tag="li" v-for="item in schoolList" :key="item.schoolId" :to="{name:'voteClass',params: { id: item.schoolId}}">

            <figure class="vote_school_figure">
                     <img v-lazy="item.schoolLogo.imageVisitUrl" class="vote_school_img" />


                     <figcaption>{{item.schoolName}}</figcaption>

            </figure>

        </router-link>


     </ul>


  </div>

</template>

<script>

import axios from 'axios';


export default {
  name: 'VoteSchool',
  data () {
    return {

     searchVal:'',
     schoolList:[]
    }
  },
  components: {

  },

  methods:{

    before(){
       console.log(1)
    },
    success(){
      
      console.log(2)
    },
    error(){
      console.log(3)
    },

    searchBtn(){

      if(this.searchVal!=""){

         this.$router.push({ name: 'searchResult',query: { searchVal: this.searchVal }});
      }else{
        alert(1)
      }



    }

  },

  mounted:function(){

      //./static/getmock/voteSchool.json
      //http://192.168.3.140:8080/ucanchat/view/activity/getSchoolList

      axios.get("./static/getmock/voteSchool.json",{

           })
          .then(function (response) {
            console.log(response)

            var result =response.data;

              if(result.code==0){

                 console.log(result)

                 this.$set(this,"schoolList",result.data.schoolList);

              }else{
                console.log(result.message)
              }

          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });


  }

 }
</script>
