
<style scoped>

.search_dl{
  width:50%;
  margin:0 auto;
}

.search_dl img{
  width:100%;
}

.search_dd div{
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

 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}


</style>

<template>
	<div>
		 <dl class="search_dl">
       <dt>
         <img :src="contestantPicture" />
       </dt>
       <dd class="search_dd">
         
         <div>
              <i>姓名：</i><span>{{contestantName}}</span>
         </div>
         <div>
                          
              <i>编号：</i><span>{{contestantNumber}}</span><i class="diamonds">{{diamonds}}钻</i>
          </div>
           <div class="vote_div">
                <span class="vote_btn" @click.stop="voteBtn" >投TA一票</span>
           </div>   
       </dd>

     </dl>

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
      diamonds:0,
      balance:0,
      dialogVisble:false

    }
  },
  components: {
    
  },

  methods:{

    voteBtn(){

      if(this.balance){


      }else{

        this.$set(this,'dialogVisble',true);

      }

     
    }

  },
  
  mounted:function(){


      axios.get("http://localhost:7777/static/getmock/searchResult.json",{
             contestantId:this.$route.query.searchVal
             
           })
          .then(function (response) {

            var result =response.data;

              if(result.code==0){

                this.$set(this,"contestantPicture",result.data.contestantPicture);
                this.$set(this,"contestantName",result.data.contestantName);
                this.$set(this,"contestantNumber",result.data.contestantNumber);
                this.$set(this,"diamonds",result.data.diamonds);
                
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