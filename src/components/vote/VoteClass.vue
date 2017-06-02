
<style scoped>

 .vote-top{
      width:100%;
      height:120px;
      margin-bottom: 25px;
    }

    .vote-top img{
      width:100%;
      height:100%;
    }

 .vote_school_ul{
      display: flex;
      flex-wrap:wrap;
      padding:0 20px;
      margin-top: 10px;
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


     <div class="vote_school_ul" >
      <router-link   tag="li" v-for="item in classList" :key="item.classId" :to="{name:'contestant',params: { id: item.classId}}">
       

            <figure class="vote_school_figure">
                     <img  v-lazy="item.classPicture" class="vote_school_img" lazy="loading"/>
                     
                     <figcaption>{{item.className}}</figcaption> 
            </figure> 
          
        </router-link>

     </div>

	

</div>
</template>


<script>

import axios from 'axios';

export default {
  name: 'VoteClass',
  data () {
    return {
   
     classList:[]
    }
  },
  components: {
    
  },
  
  mounted:function(){

      axios.get("http://localhost:7777/static/getmock/voteClass.json",{

           })
          .then(function (response) {

            var result =response.data;

              if(result.code==0){

                 console.log(result)
                 this.$set(this,"classList",result.data.classList);

                
              }else{

                console.log(result.msg)
              } 
             
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });


  }

 } 
</script>