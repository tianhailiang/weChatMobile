

<style scoped>

.vote-top{
      width:100%;
      height:120px;
    }

    .vote-top img{
      width:100%;
      height:100%;
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


     .vote_school_ul{
      display: flex;
      flex-wrap:wrap;
      padding:0 20px;
      margin-top: 10px;
     }

     .vote_school_ul li{

       width:50%;
       box-sizing: border-box;
       margin-bottom: 20px;


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


.vote_school_figure{
  border:1px solid #9f9f9d;
}


.vote_school_figure .txt_div{
   box-sizing: border-box;
    padding-left: 10px;
    margin-top: 10px;
    font-size: 15px;
    color:#666;
    padding-right:10px;
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
  margin-top: 10px;

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

      <div class="contest_title" >
          <span>参赛选手展示</span>
          <div class="contest_icon"></div>

      </div>

     <div class="vote_school_ul" >

        <router-link   tag="li" v-for="item in contestantList" :key="item.participantId" :to="{name:'talentSpace',params: { particiNum: item.participantNum}}">

            <figure class="vote_school_figure">
                     <img  v-lazy="item.participantHeadImage.imageVisitUrl" class="vote_school_img" lazy="loading"/>

                     <figcaption>

                        <div class="txt_div">
                            <i>姓名：</i><span>{{item.participantName}}</span>

                        </div>

                        <div class="txt_div">

                          <i>编号：</i><span>{{item.participantNum}}</span><i class="diamonds" ><b style="font-weight: normal;">{{item.participantVotes}}</b>票</i>
                        </div>
                        <div class="vote_div" @click.stop="voteBtn(item.participantId,$event)">
                            投TA一票
                        </div>

                     </figcaption>
            </figure>

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

      <div class="js_dialog"   v-show="dialogVisble">
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

import wx from 'weixin-js-sdk';

// console.log(wx)
export default {
  name: 'VoteClass',
  data () {
    return {
     contestantList:[],
     dialogVisble:false,
     balance:0,
     dialogSuccess:false,
     succesVal:true
    }
  },
  components: {


  },

  methods:{
    

      voteBtn(val,event){
       

         this.$router.push({name:"Recharge"});

      // if(this.balance){

      //     //./static/getmock/voteSuccess.json
         
      //     axios.get("./static/getmock/voteSuccess.json",{
      //             params:{
      //               id:this.$route.params.id
      //             }
      //          })
      //         .then(function (response) {

      //           var result =response.data;

      //             this.$set(this,"dialogSuccess",true);
      //             if(result.code==0){

      //                event.target.parentNode.children[1].children[2].children[0].innerHTML=Number(event.target.parentNode.children[1].children[2].children[0].innerHTML)+1;

      //                var vm=this;


      //                setTimeout(function(){

      //                     vm.$set(vm,"dialogSuccess",false);

      //                },3000)


      //             }else{


      //                 this.$set(this,"succesVal",false);


      //                 this.$refs.weuiDialog.children[1].innerHTML=result.message;

      //                  var vm=this;


      //                  setTimeout(function(){

      //                       vm.$set(vm,"dialogSuccess",false);

      //                  },3000)


      //             }



      //         }.bind(this))
      //         .catch(function (error) {
      //             console.log(error);
      //         });


      //   }else{

      //     this.$set(this,'dialogVisble',true);

      //   }


    }


  },
  mounted:function(){

       //./static/getmock/contestant.json
      //http://192.168.3.140:8080/ucanchat/view/activity/getStudentList
       axios.get("http://192.168.3.140:8080/ucanchat/view/activity/getStudentList",{
              params:{
                id:this.$route.params.id
              }

             })
            .then(function (response) {

              var result =response.data;


                if(result.code==0){

                   console.log(result)
                   this.$set(this,"contestantList",result.data.particiList);
                   // this.$set(this,"balance",result.data.balance);

                }else{

                  console.log(result.msg)
                }



            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

         //获取微信时间戳和签名
         // console.log(wx)
         //http://m.wishlist1314.com/wishlist_mobile/wechat/getConfig

         axios.get("./static/getmock/wxConfig.json",{

         }).then(function(response){
                
              var result =response.data;
              // console.log(result)
              if(result.code==0){

                  wx.config({
                    debug:true,
                    appId: "wx94db2a3298ae63ab",
                    timestamp: result.data.timestamp,
                    nonceStr: result.data.nonceStr,
                    signature: result.data.signature,
                    jsApiList:[ 'onMenuShareTimeline']
                 });

                   wx.ready(function() {


                      wx.onMenuShareTimeline({
                            title: '海盗', // 分享标题
                            link: window.location.href, // 分享链接
                            imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1462881185&di=475c7fc9a669c537d2caf6a1032e1f79&src=http://img5.duitang.com/uploads/item/201202/25/20120225171212_d4GAF.thumb.700_0.jpg', // 分享图标
                            success: function () {
                                // 用户确认分享后执行的回调函数
                                alert("分享成功")
                            },
                            cancel: function () {
                                // 用户取消分享后执行的回调函数
                                alert("不分享，你怎么得到钱")
                            }
                        });

                    //ready
                 });

              }else{
                console.log(result.message)
              }

                

               

         }.bind(this))
         .catch(function(error){

           console.log(error)
         });


  }

 }



</script>
