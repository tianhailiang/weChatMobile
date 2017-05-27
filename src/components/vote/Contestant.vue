

<style scoped>

.vote-top{
      width:100%;
      height:200px;
    }

    .vote-top img{
      width:100%;
      height:100%;
    }
    
    .contest_title{
      height:40px;

    }

    .contest_title h2{
        height:100%;
        line-height: 40px;
        text-align:center;
        font-weight: normal;
    }

     .search span:active{
       background:rgba(107,57,6,0.7);
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
       height:150px;
       width:100%;
     }

.vote_school_figure div{
  box-sizing: border-box;
    padding-left: 10px;
    margin-top: 10px;
}
 
 .diamonds{
  margin-left: 10px;
 }

 .vote_div{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
 }

 .vote_btn{
  display: block;
  height:30px;
  color:#fff;
  width:100px;
  line-height: 30px;
  text-align:center;
  background:#6b3906;
  border-radius: 10px;
 }


</style>


<template>

<div>

  <div class="vote-top">
        <img :src="votePicture" />
      </div>

      <div class="contest_title" >
          <h2>夏日momo达活动参赛选手展示</h2>
           
      </div>

     <div class="vote_school_ul" >

        <router-link   tag="li" v-for="item in contestantList" :key="item.contestantId" :to="{name:'talentSpace',params: { id: item.contestantId}}">
       
            <figure class="vote_school_figure">
                     <img  v-lazy="item.contestantPicture" class="vote_school_img" lazy="loading"/>
                     
                     <figcaption>

                        <div>
                            <i>姓名：</i><span>{{item.contestantName}}</span>

                        </div>

                        <div>
                          
                          <i>编号：</i><span>{{item.number}}</span><i class="diamonds">100钻</i>
                        </div>  

                        <div class="vote_div">
                            <span class="vote_btn" @click.stop="votoBtn" >投TA一票</span>
                        </div> 

                     </figcaption> 
            </figure>

         </router-link>

        

     </div>



  <div class="js_dialog" id="iosDialog2"  v-show="dialogVisble">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__bd">您的钻石已经没有了，快去充值吧</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">知道了</a>
                </div>
            </div>
  </div>

	

</div>
</template>


<script>

import axios from 'axios';

export default {
  name: 'VoteClass',
  data () {
    return {
     votePicture:'', 
     contestantList:[],
     dialogVisble:false
    }
  },
  components: {

    voteBtn(){

    }
    
  },

  methods:{



  },
  mounted:function(){

       axios.get("http://localhost:7777/static/getmock/contestant.json",{

             })
            .then(function (response) {

              var result =response.data;

                
                if(result.code==0){

                   console.log(result)
                   this.$set(this,"votePicture",result.data.votePicture);
                   this.$set(this,"contestantList",result.data.contestantList);

                  
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