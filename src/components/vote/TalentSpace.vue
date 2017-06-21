
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

.talent_dt{
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
  /* width:80px;
   height:80px;*/
  
   right:22.5px;
   bottom:-42.5px;
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
	

	  <div class="talent_box">

        <dl class="talent_dl" >

            <dt class="talent_dt">
               <img :src="contestantPicture" />
                <canvas   ref="canvas" class="diamonds" width="85" height="85"></canvas>
             </dt>
             <dd class="talent_dd">
               
               <div class="txt_div">
                    <i>姓名：</i><span>{{contestantName}}</span>
               </div>
               <div class="txt_div">
                                
                    <i>编号：</i><span>{{contestantNumber}}</span>
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
           ticket:'200', 
           albumList:[],
           videoList:[],
           dialogVisble:false,
           particiIntroduce:""
           

		}
	},

	methods:{
   
   voteBtn(val,event){
       
         this.$router.push({name:"Recharge"});

   },


     
	},

	mounted:function(){


       var canvas=this.$refs.canvas;
       var ctx = canvas.getContext("2d");
      
       ctx.beginPath();
       ctx.arc(42.5,42.5,40,0,Math.PI*2,true); // 绘制
       ctx.lineWidth=1;
       ctx.strokeStyle="#acacaa";
       ctx.stroke();
       ctx.closePath();
      
       ctx.fillStyle="#fde308";
       ctx.arc(42.5,42.5,39,0,Math.PI*2,true);
       ctx.fill();
      
       ctx.beginPath();
       ctx.fillStyle="#fff1c0";
       ctx.arc(42.5,42.5,34,0,Math.PI*2,true);
       ctx.fill();
       ctx.closePath();
       ctx.beginPath();
       ctx.fillStyle="#fff";
       ctx.arc(42.5,42.5,29,0,Math.PI*2,true);
       ctx.fill();
       ctx.closePath();
       ctx.font="18px bold";
       ctx.fillStyle="#65390a";
       ctx.textAlign="center";
       ctx.fillText(this.ticket+"票", 42.5, 47.5);

        //./static/getmock/talentSpace.json
        //http://192.168.3.140:8080/ucanchat/view/activity/getStudentDetailInfo
       // console.log(this.$route.params.particiNum)
     
        axios.get("./static/getmock/talentSpace.json",{
               params:{
                 particiNum:this.$route.params.particiNum
               }
             })
            .then(function (response) {

              var result =response.data;

                
                if(result.code==0){

                   // console.log(result)
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