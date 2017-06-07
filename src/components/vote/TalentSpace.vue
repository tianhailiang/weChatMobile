
<style scoped>

.talent_box{
	padding:0 20px;
	box-sizing: border-box;
}

.talent_dl{
  border:1px solid #9f9f9d;
}

.talent_dl img{
  width:100%;
  height:335px;
}

.talent_dd{
  position:relative;
}

.talent_dd .txt_div{
   box-sizing: border-box;
    padding-left: 10px;
    margin-top: 10px;
    padding-right: 10px;
}

.diamonds{
   position: absolute;
 }

.vote_div{
   display: flex;
  justify-content: center;
  height:35px;
  align-items: center;
  background:#fee100;
  color:#693a06;
  font-size: 19px;
  margin-top: 10px
 }


.contest_title{
     box-sizing: border-box;
     padding-top:60px;
     padding-bottom: 30px;
     display: flex;
     justify-content: center;

    }

    .contest_title span{
      color:#5f3d10;
      font-size: 23px;
      line-height: 23px;
    }

    .contest_icon{
      flex:1;
      height:23px;
      background:url(../warmUp/img/ucanCup_04.jpg) no-repeat 0 0;
      background-size: contain;
    }









.talent_ul{
	
}

.talent_ul li{
 
  margin-bottom: 30px;
 
}

.talent_ul li:last-child{
  margin-bottom: 0;
}

 


.talent_ul li img{
	width:100%;
	height:325px;
}







</style>


<style type="text/css" media="screen">

.video-js {
  width:100%;
  height:325px;
}
  
</style>

<template>
	
  <div>

	  <div class="talent_box">

        <dl class="talent_dl" >

            <dt>
               <img :src="contestantPicture" />
             </dt>
             <dd class="talent_dd">
               
               <div class="txt_div">
                    <i>姓名：</i><span>{{contestantName}}</span>
               </div>
               <div class="txt_div">
                                
                    <i>编号：</i><span>{{contestantNumber}}</span><i class="diamonds"><b style="font-weight: normal">{{ticket}}</b>票</i>
               </div>
                <div class="txt_div">
                    {{particiIntroduce}}
                </div>
                 

                 <div class="vote_div" @click.stop="voteBtn($event)">
                      投TA一票
                 </div>   
             </dd> 

        </dl>     

	     <div class="contest_title" >
          <span>个人相册</span>
          <div class="contest_icon"></div>
           
       </div>

	     <ul class="talent_ul">

             <li v-for="(item,index) in albumList" :key="index">
             	
             	 <img v-lazy="item.imageVisitUrl" />

             </li>

	     </ul>


	     <div class="contest_title" >
          <span>视屏展示</span>
          <div class="contest_icon"></div>
           
       </div>

	     <ul class="talent_ul">

             <li v-for="(item,index) in videoList" :key="index">
             	
             	  
                 <video id="my-player" class="video-js" controls preload="auto" :poster="item.videoPicture" data-setup='{}' height="100%" width="100%">
                  <source   :src="item.videoVisitUrl" :type="'video/'+item.videoType" >
                   
                    <p class="vjs-no-js">
                        您的浏览器还不支持此类型视频播放！请尝试升级浏览器！
                        <a href="http://videojs.com/html5-video-support/" target="_blank">
                            supports HTML5 video
                        </a>
                    </p>

                </video>

             </li>

	     </ul>

	 
    </div>
   

  </div>
</template>

<script>

import axios from 'axios';


export default {
	name:"TalentSpace",
	data(){
		return{
           contestantPicture:'',
           contestantName:'',
           contestantNumber:'',
           ticket:'', 
           albumList:[],
           videoList:[],
           dialogVisble:false,
           particiIntroduce:""
           

		}
	},

	methods:{
   
     
	},

	mounted:function(){

        //./static/getmock/talentSpace.json
        //http://192.168.3.140:8080/ucanchat/view/activity/getStudentDetailInfo
       console.log(this.$route.params.particiNum)
        axios.get("http://192.168.3.140:8080/ucanchat/view/activity/getStudentDetailInfo",{
               params:{
                 particiNum:this.$route.params.particiNum
               }
             })
            .then(function (response) {

              var result =response.data;

                
                if(result.code==0){

                   console.log(result)
                   this.$set(this,"contestantPicture",result.data.particiHeadImage.imageVisitUrl);
                   this.$set(this,'contestantName',result.data.particiName);
                  this.$set(this,'contestantNumber',result.data.particiNum);
                   this.$set(this,"ticket",result.data.particiVotes);
                   this.$set(this,"particiIntroduce",result.data.particiIntroduce);
                   
                this.$set(this,"albumList",result.data.uParticipantImages);
                this.$set(this,"videoList",result.data.uParticipantVideos);
                   
                 
                  
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