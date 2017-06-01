
<style scoped>

.talent_box{
	padding:0 20px;
	box-sizing: border-box;
}

.talent_box h3{
	height:40px;
	line-height: 40px;
}

.talent_ul{
	display: flex;
	flex-wrap:wrap;
}

.talent_ul li{
  width:50%;
  box-sizing: border-box;
  margin-bottom: 10px;

 
}


 .talent_ul li:nth-of-type(2n+1){
        
        padding-right:5px;

  }

 .talent_ul li:nth-of-type(2n){
   padding-left: 5px
 }


.talent_ul li img{
	width:100%;
	height:150px;
}







</style>


<style type="text/css" media="screen">

.video-js {
  width:100%;
  height:150px;
}
  
</style>

<template>
	
  <div>

	  <div class="talent_box">

	     <h3>个人相册：</h3>

	     <ul class="talent_ul">

             <li v-for="(item,index) in albumList" :key="index">
             	
             	 <img :src="item.picTure" />

             </li>

	     </ul>

	  </div> 


	  <div class="talent_box">

	     <h3>视屏展示：</h3>

	     <ul class="talent_ul">

             <li v-for="(item,index) in videoList" :key="index">
             	
             	  
                 <video id="my-player" class="video-js" controls preload="auto" :poster="item.videoPicture" data-setup='{}'>
                  <source   :src="item.videoSource" :type="'video/'+item.type">
                   
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

           albumList:[],
           videoList:[],
           dialogVisble:false

		}
	},

	methods:{
   
     
	},

	mounted:function(){
       
        axios.get("http://localhost:7777/static/getmock/talentSpace.json",{

             })
            .then(function (response) {

              var result =response.data;

                
                if(result.code==0){

                   console.log(result)

                   this.$set(this,"albumList",result.data.albumList);
                   this.$set(this,"videoList",result.data.videoList);
                   
                 
                  
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