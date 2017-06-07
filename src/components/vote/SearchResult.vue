
<style scoped>

.vote-top{
      width:100%;
      height:120px;
      margin-bottom: 30px;
    }

.vote-top img{
  width:100%;
  height:100%;
}

.search_box{
  padding:0 20px;
}


.search_dl{
 
 border:1px solid #9f9f9d;
 width:50%;
 
}




.search_dl img{
  width:100%;
  height:185px;
}

.search_dd .txt_div{
   box-sizing: border-box;
    padding-left: 10px;
    margin-top: 10px;
    padding-right: 10px;
}

.diamonds{
  float:right;
  
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
     padding:25px 20px;
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
 

 .rule_ul{
  padding:0 20px;

}

.rule_ul li{
  display: flex;
  color:#666;
  font-size: 19px;
}

 .rule_ul li p{
  padding-left: 5px;
  line-height: 35px;
 }

 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.success_icon{
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 5px;
}

</style>

<template>
	<div>
      <div class="vote-top">
        <img src="../warmUp/img/ucanCup_01.jpg" />
      </div>
      <div class="search_box">
      		
            <router-link  class="search_dl" tag="dl"  :to="{name:'talentSpace',params: {id:contestantId}}">
             <dt>
               <img :src="contestantPicture" />
             </dt>
             <dd class="search_dd">
               
               <div class="txt_div">
                    <i>姓名：</i><span>{{contestantName}}</span>
               </div>
               <div class="txt_div">
                                
                    <i>编号：</i><span>{{contestantNumber}}</span><i class="diamonds"><b style="font-weight: normal">{{ticket}}</b>票</i>
                </div>
                 <div class="vote_div" @click.stop="voteBtn($event)">
                      投TA一票
                 </div>   
             </dd>

           </router-link>

     </div>

     <div class="contest_title" >
          <span>投票规则</span>
          <div class="contest_icon"></div>
           
     </div>

    <ul class="rule_ul" >
      <li>
        <i>1.</i>
        <p >规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则</p>

      </li>
    </ul>

    <transition name="fade" >

        <div class="js_dialog" id="iosDialog2"  v-show="dialogVisble">
                  <div class="weui-mask"></div>
                  <div class="weui-dialog">
                      <div class="weui-dialog__bd">您的钻石已经没有了，快去充值吧</div>
                      <div class="weui-dialog__ft">
                          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="dialogVisble=false">知道了</a>
                      </div>
                  </div>
        </div>
  </transition>

   <transition name="fade" >

      <div class="js_dialog"   v-show="dialogSuccess">
                <div class="weui-mask"></div>
                <div class="weui-dialog" ref="weuiDialog">
                    <i class="weui-icon-success weui-icon_msg success_icon" v-if="succesVal"></i>
                    <i class="weui-icon-cancel success_icon" v-else></i>
                    <div class="weui-dialog__bd">投票成功</div>
                   
                </div>
      </div>
 </transition>
	   

	</div>

</template>

<script>

	import axios from 'axios';

	export default {
  name: 'VoteSchool',
  data () {
    return {
      contestantPicture:"",
      contestantName:"",
      contestantNumber:"",
      ticket:0,
      balance:1,
      dialogVisble:false,
      contestantId:' ',
      dialogSuccess:false,
      succesVal:true

    }
  },
  components: {
    
  },

  methods:{

    voteBtn(event){

      if(this.balance){



         axios.get("./static/getmock/voteSuccess.json",{

               })
              .then(function (response) {

                var result =response.data;

                  this.$set(this,"dialogSuccess",true);
                  if(result.code==0){

                     event.target.parentNode.children[1].children[2].children[0].innerHTML=Number(event.target.parentNode.children[1].children[2].children[0].innerHTML)+1;

                     var vm=this;


                     setTimeout(function(){
 
                          vm.$set(vm,"dialogSuccess",false);

                     },3000)

                    
                  }else{

                   
                      this.$set(this,"succesVal",false); 

                     
                      this.$refs.weuiDialog.children[1].innerHTML=result.message;

                       var vm=this;


                       setTimeout(function(){
   
                            vm.$set(vm,"dialogSuccess",false);

                       },3000)


                  } 
                  
                  

              }.bind(this))
              .catch(function (error) {
                  console.log(error);
              });


      }else{

        this.$set(this,'dialogVisble',true);

      }

     
    }

  },
  
  mounted:function(){
     
     //./static/getmock/searchResult.json 

      axios.get("http://192.168.3.140:8080/ucanchat/view/activity/getParticiByNameOrNum",{
             contestantId:this.$route.query.searchVal
             
           })
          .then(function (response) {

            var result =response.data;

              if(result.code==0){

                this.$set(this,"contestantPicture",result.data.contestantPicture);
                this.$set(this,"contestantName",result.data.contestantName);
                this.$set(this,"contestantNumber",result.data.contestantNumber);
                this.$set(this,"ticket",result.data.ticket);
                this.$set(this,"contestantId",result.data.contestantId);
                
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