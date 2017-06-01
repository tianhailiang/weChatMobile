
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
             	
             	 <img :src="item.videoPicture" @click="videoPlay(index)"  v-show="pictureFlag[index]" />
             	  <video  controls width="100%" height="100%" :src="item.videoSource" v-show="videoFlag[index]"  >
				
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
           pictureFlag:[],
           videoFlag:[],
           dialogVisble:false

		}
	},

	methods:{
   
      videoPlay(index){
          
         this.pictureFlag.splice(index,1,false);
         this.videoFlag.splice(index,1,true);

      }
     
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
                   
                   var that=this;
                   this.videoList.map(function(item,index){
                     
                      that.pictureFlag.push(true);
                      that.videoFlag.push(false);

                   });
                   
                   console.log(this.videoFlag)



                  
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