webpackJsonp([1],Array(26).concat([function(t,e,s){t.exports=s.p+"static/img/ucanCup_04.48a9b28.jpg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){function a(t){s(110)}var n=s(7)(s(89),s(206),a,"data-v-c2b9df9c",null);t.exports=n.exports},,function(t,e,s){"use strict";var a=s(33),n=s(211),i=s(186),o=s.n(i),c=s(195),r=s.n(c),l=s(194),u=s.n(l),v=s(193),d=s.n(v),p=s(190),_=s.n(p),h=s(192),f=s.n(h),m=s(191),g=s.n(m),C=s(187),w=s.n(C),b=s(188),x=s.n(b),y=s(189),$=s.n(y);a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Index",component:o.a,meta:{title:"夏日momo哒"}},{path:"/warmUp",name:"warmUp",component:r.a,meta:{title:"优看杯大赛"}},{path:"/voteSchool",name:"voteSchool",component:u.a,meta:{title:"投票"}},{path:"/voteClass/:id",name:"voteClass",component:d.a,meta:{title:"投票"}},{path:"/contestant/:id",name:"contestant",component:_.a,meta:{title:"投票"}},{path:"/searchResult",name:"searchResult",component:g.a,meta:{title:"投票"}},{path:"/talentSpace/:id",name:"talentSpace",component:f.a,meta:{title:"我的才艺空间"}},{path:"/Recharge",name:"Recharge",component:w.a,meta:{title:"优看杯大赛充值"}},{path:"/Recharge/ShowRecharge",name:"ShowRecharge",component:x.a,meta:{title:"优看杯大赛充值"}},{path:"/aboutUcan",name:"aboutUcan",component:$.a,meta:{title:"关于优看"}}]})},function(t,e){t.exports=function(t){if(document.title=t,/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())){var e=document.createElement("iframe");e.style.display="none",e.setAttribute("src","http://localhost:7777/static/images/ucan.ico");var s=function t(){setTimeout(function(){e.removeEventListener("load",t),document.body.removeChild(e)},0)};e.addEventListener("load",s),document.body.appendChild(e)}}},function(t,e){},function(t,e){},,,function(t,e,s){function a(t){s(108)}var n=s(7)(s(83),s(203),a,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=s(40),s(100)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a),i=s(182);s.n(i);e.default={name:"Banner",data:function(){return{swiperOption:{notNextTick:!0,autoplay:3e3,loop:!0,direction:"horizontal",grabCursor:!1,setWrapperSize:!0,width:window.innerWidth},swiperSlides:[]}},components:{swiper:i.swiper,swiperSlide:i.swiperSlide},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){var t=this;n.a.get("http://localhost:7777/static/getmock/activeBanner.json",{}).then(function(e){var s=e.data;0==s.code?t.$set(t,"swiperSlides",s.data.banner):console.log(s.msg)}).catch(function(t){console.log(t)})},destroyed:function(){console.log("组件销毁"),this.swiper=null}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(185),n=s.n(a);e.default={name:"Index",data:function(){return{}},components:{Banner:n.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=(s.n(a),s(55)),i=s.n(n);e.default={name:"Recharge",data:function(){return{rechargeNum:"0",ucoin:{count:"",price:""}}},components:{numCount:i.a},computed:{},methods:{getRechargeNum:function(t){this.rechargeNum=t},toShowRecharge:function(){this.rechargeNum<=0||(console.log(this.rechargeNum),this.$router.push({path:"/Recharge/ShowRecharge",query:{rechargeNum:this.rechargeNum}}))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=(s.n(a),s(55)),i=s.n(n);e.default={name:"Recharge",data:function(){return{rechargeNum:"0",ucoin:{count:"",price:""}}},components:{numCount:i.a},created:function(){this.rechargeNum=this.$route.query.rechargeNum},methods:{getRechargeNum:function(t){this.rechargeNum=t},toShowRecharge:function(){console.log("点击去支付")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={name:"aboutUcan",data:function(){return{courses:[]}},components:{},mounted:function(){n.a.get("http://localhost:7777/static/getmock/aboutMe.json",{}).then(function(t){var e=t.data;0==e.code?(console.log(e),this.$set(this,"courses",e.data.aboutUcan.featuredCourses)):console.log(e.msg)}.bind(this)).catch(function(t){console.log(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{rechargeNum:0}},props:{ucoin:{type:Object}},created:function(){},computed:{},methods:{minus:function(){this.rechargeNum>0&&this.rechargeNum--,this.$emit("rechargeNum",this.rechargeNum)},plus:function(){this.rechargeNum>=0&&this.rechargeNum++,this.$emit("rechargeNum",this.rechargeNum)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={name:"VoteClass",data:function(){return{votePicture:"",contestantList:[],dialogVisble:!1,balance:0}},components:{},methods:{voteBtn:function(){this.balance||this.$set(this,"dialogVisble",!0)}},mounted:function(){n.a.get("http://localhost:7777/static/getmock/contestant.json",{}).then(function(t){var e=t.data;0==e.code?(console.log(e),this.$set(this,"votePicture",e.data.votePicture),this.$set(this,"contestantList",e.data.contestantList),this.$set(this,"balance",e.data.concern.balance)):console.log(e.msg)}.bind(this)).catch(function(t){console.log(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={name:"VoteSchool",data:function(){return{contestantPicture:"",contestantName:"",contestantNumber:"",diamonds:0,balance:0,dialogVisble:!1}},components:{},methods:{voteBtn:function(){this.balance||this.$set(this,"dialogVisble",!0)}},mounted:function(){n.a.get("http://localhost:7777/static/getmock/searchResult.json",{contestantId:this.$route.query.searchVal}).then(function(t){var e=t.data;0==e.code?(this.$set(this,"contestantPicture",e.data.contestantPicture),this.$set(this,"contestantName",e.data.contestantName),this.$set(this,"contestantNumber",e.data.contestantNumber),this.$set(this,"diamonds",e.data.diamonds)):console.log(e.msg)}.bind(this)).catch(function(t){console.log(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={name:"TalentSpace",data:function(){return{albumList:[],videoList:[],pictureFlag:[],videoFlag:[],dialogVisble:!1}},methods:{videoPlay:function(t){this.pictureFlag.splice(t,1,!1),this.videoFlag.splice(t,1,!0)}},mounted:function(){n.a.get("http://localhost:7777/static/getmock/talentSpace.json",{}).then(function(t){var e=t.data;if(0==e.code){console.log(e),this.$set(this,"albumList",e.data.albumList),this.$set(this,"videoList",e.data.videoList);var s=this;this.videoList.map(function(t,e){s.pictureFlag.push(!0),s.videoFlag.push(!1)}),console.log(this.videoFlag)}else console.log(e.msg)}.bind(this)).catch(function(t){console.log(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={name:"VoteClass",data:function(){return{votePicture:"",classList:[]}},components:{},mounted:function(){n.a.get("http://localhost:7777/static/getmock/voteClass.json",{}).then(function(t){var e=t.data;0==e.code?(console.log(e),this.$set(this,"votePicture",e.data.votePicture),this.$set(this,"classList",e.data.classList)):console.log(e.msg)}.bind(this)).catch(function(t){console.log(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(10),n=s.n(a);e.default={name:"VoteSchool",data:function(){return{votePicture:"",searchVal:"",schoolList:[]}},components:{},methods:{searchBtn:function(){""!=this.searchVal?this.$router.push({name:"searchResult",query:{searchVal:this.searchVal}}):alert(1)}},mounted:function(){n.a.get("http://localhost:7777/static/getmock/voteSchool.json",{}).then(function(t){var e=t.data;0==e.code?(console.log(e),this.$set(this,"votePicture",e.data.votePicture),this.$set(this,"schoolList",e.data.schoolList)):console.log(e.msg)}.bind(this)).catch(function(t){console.log(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"warmUp",data:function(){return{}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(33),n=s(63),i=s.n(n),o=s(57),c=s(62),r=s.n(c),l=s(59),u=s.n(l),v=s(58),d=s.n(v),p=s(60);s.n(p);s(61),a.a.use(u.a),a.a.use(r.a,{preLoad:1.3,error:"",loading:"http://localhost:7777/static/images/loading.gif",attempt:1}),o.a.beforeEach(function(t,e,s){d()(t.meta.title),s()}),a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,s){t.exports=s.p+"static/img/ucanCup_01.a860afc.jpg"},function(t,e,s){t.exports=s.p+"static/img/ucanCup_08.91f347b.jpg"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){var a=s(7)(s(81),s(207),null,null,null);t.exports=a.exports},function(t,e,s){var a=s(7)(s(82),s(205),null,null,null);t.exports=a.exports},function(t,e,s){function a(t){s(113)}var n=s(7)(s(84),s(210),a,"data-v-ebe67bbe",null);t.exports=n.exports},function(t,e,s){function a(t){s(106)}var n=s(7)(s(85),s(201),a,"data-v-41985c6d",null);t.exports=n.exports},function(t,e,s){function a(t){s(111)}var n=s(7)(s(86),s(208),a,"data-v-dba9bc6c",null);t.exports=n.exports},function(t,e,s){function a(t){s(112)}var n=s(7)(s(87),s(209),a,"data-v-e1c08032",null);t.exports=n.exports},function(t,e,s){function a(t){s(107)}var n=s(7)(s(88),s(202),a,"data-v-41de0a19",null);t.exports=n.exports},function(t,e,s){function a(t){s(109)}var n=s(7)(s(90),s(204),a,"data-v-701921b3",null);t.exports=n.exports},function(t,e,s){function a(t){s(103)}var n=s(7)(s(91),s(198),a,"data-v-1f901645",null);t.exports=n.exports},function(t,e,s){function a(t){s(105)}var n=s(7)(s(92),s(200),a,"data-v-3ff35dca",null);t.exports=n.exports},function(t,e,s){function a(t){s(102)}var n=s(7)(s(93),s(197),a,"data-v-1defd204",null);t.exports=n.exports},function(t,e,s){function a(t){s(104)}var n=s(7)(s(94),s(199),a,"data-v-3e2edade",null);t.exports=n.exports},function(t,e,s){function a(t){s(101)}var n=s(7)(s(95),s(196),a,"data-v-1d8869ac",null);t.exports=n.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"box"},[a("div",{staticClass:"bannerBox"},[a("img",{attrs:{src:s(120),alt:"Banner图",width:"100%",height:"120px"}})]),t._v(" "),a("div",{staticClass:"textBox"},[a("p",[t._v("\n          2017“优看”杯超级宝贝才艺大奖赛，是贵州优看教育科技有限公司面向贵州省3-6岁儿童，以亲子为主题举办的大型幼儿才艺竞赛活动。\n        ")]),t._v(" "),a("p",[t._v("\n          活动通过才艺表演、智力比拼、游戏互动等全方面的展示，让宝贝和家长在欢快的竞赛过程中，增强亲子间的互动与交流，培养宝贝的自信心和主动学习英语的兴趣，提高宝贝的综合素质，使宝贝成长为一个自信、自立、自强的未来之星。\n        ")])]),t._v(" "),a("div",{staticClass:"processBox"},[a("div",{staticClass:"titleBox"},[a("div",{staticClass:"titleBox_top brown"},[t._v("大赛流程")]),t._v(" "),a("div",{staticClass:"borderBox"},[a("img",{attrs:{src:s(26),width:"100%",height:"100%"}})])]),t._v(" "),a("div",{staticClass:"process_contentBox"},[a("img",{attrs:{src:s(121),width:"100%"}})])]),t._v(" "),a("div",{staticClass:"awardBox"},[a("div",{staticClass:"titleBox"},[a("div",{staticClass:"titleBox_top brown"},[t._v("奖项设置")]),t._v(" "),a("div",{staticClass:"borderBox"},[a("img",{attrs:{src:s(26),width:"100%"}})])]),t._v(" "),a("ul",[a("li",[a("span",{staticClass:"strong gray"},[t._v("冠军")]),t._v("参赛家庭代表和学校共同获得："),a("span",{staticClass:"red"},[t._v("¥80000元")]),t._v(" 奖金\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("亚军")]),t._v("参赛家庭代表和学校共同获得："),a("span",{staticClass:"red"},[t._v("¥50000元")]),t._v(" 奖金\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("季军")]),t._v("参赛家庭代表和学校共同获得："),a("span",{staticClass:"red"},[t._v("¥20000元")]),t._v(" 奖金\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("初赛：")]),t._v("进入初赛的家庭均可获得优看"),a("span",{staticClass:"red"},[t._v("¥300元")]),t._v(" 教育金\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("复赛：")]),t._v("进入复赛的家庭均可获得优"),a("span",{staticClass:"red"},[t._v("¥500元")]),t._v(" 教育金\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("决赛：")]),t._v("所有进入决赛参赛家庭均可获得优看 "),a("span",{staticClass:"red"},[t._v(" ¥1000元")]),t._v("现金以及 "),a("span",{staticClass:"red"},[t._v("¥800元")]),t._v("\n          教育金；决赛第4-10组参赛家庭均可获得由优看提供的 "),a("span",{staticClass:"red"},[t._v("¥3000元")]),t._v(" 现金以及 "),a("span",{staticClass:"red"},[t._v("¥800元")]),t._v("教育金\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("参与奖：")]),t._v("所有报名参加本次大赛的参赛家庭均可获得优看吉祥物一只\n        ")]),t._v(" "),a("li",[a("span",{staticClass:"strong gray"},[t._v("报名方式：")]),t._v("宝贝所在学校报名处报名参赛\n        ")])])]),t._v(" "),a("div",{staticClass:"ruleBox"},[a("div",{staticClass:"titleBox"},[a("div",{staticClass:"titleBox_top brown"},[t._v("大赛规则")]),t._v(" "),a("div",{staticClass:"borderBox"},[a("img",{attrs:{src:s(26),width:"100%"}})])]),t._v(" "),a("ul",[a("li",[a("h3",[t._v("预 赛")]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("预赛内容：")]),t._v(" "),a("span",[t._v("现场展示英语儿歌、英语朗诵等才艺表演或进行看图说单词； ")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("时间及地点：")]),t._v(" "),a("span",[t._v("2017年6月23号-6月30号预赛选拔，在宝贝就读幼儿园内进行。")]),a("br"),t._v(" "),a("span",[t._v("经过海选淘汰，每个学校选拔60组票数高者家庭进入初赛。")])])]),t._v(" "),a("li",[a("h3",[t._v("初 赛")]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("初赛内容：")]),t._v(" "),a("span",[t._v("提交一段3-10分钟小朋友英语、国学展示的视频作品（要求至少有英语自我介绍和英语绘本故事诵读、自选国学内容诵读及才艺展示三部分组成，其他题材不限）；")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("提交时间及通道：")]),t._v(" "),a("span",[t._v("2017年7月15号之前将视频作品上传到活动网站；")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("选拔方式：")]),t._v(" "),a("span",[t._v("经过评比得出5组最高得分家庭直通复赛，另外进入复赛的15个名额由投票最多的家庭获得。")])])]),t._v(" "),a("li",[a("h3",{staticStyle:{display:"inline-block"}},[t._v("复 赛")]),a("span",{staticStyle:{"font-size":"12px"}},[t._v("（因在户外进行，需收取一定的住宿费、餐费、交通费）")]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("复赛内容：")]),t._v(" "),a("span",[t._v("以英语互动、国学课堂、小小画家等内容在户外进行；")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("时间及地点：")]),t._v(" "),a("span",[t._v("2017年7月31号-8月17号（场外地址即时通知）；")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("选拔方式：")]),t._v(" "),a("span",[t._v("通过户外比赛每所学校综合素质最高的一组家庭可直接进入决赛，另外一个名额由票数最多的家庭获得。")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("活动收费：")]),t._v(" "),a("span",[t._v("空")]),t._v("元\n          ")])]),t._v(" "),a("li",[a("h3",[t._v("决 赛")]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("决赛内容：")]),t._v(" "),a("span",[t._v("才艺表演、英语及国学知识问答、智力游戏互动；")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("时间及地点：")]),t._v(" "),a("span",[t._v("半决赛时间：2017年9月2号；决赛时间：9月20号，地点为电视台演播厅；")])]),t._v(" "),a("p",[a("strong",{staticClass:"brown"},[t._v("选拔方式：")]),t._v(" "),a("span",[t._v("所有参赛学校进行才艺比拼，比拼结束后关闭所有投票通道，得票数最多的前10名获得角逐前三甲的机会；由10所学校经过下一轮的竞赛规则，选出得分最高的前三名作为冠军、亚军、季军获得者。")])])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vote-top"},[s("img",{attrs:{src:t.votePicture}})]),t._v(" "),s("div",{staticClass:"vote_school_ul"},t._l(t.classList,function(e){return s("router-link",{key:e.classId,attrs:{tag:"li",to:{name:"contestant",params:{id:e.classId}}}},[s("figure",{staticClass:"vote_school_figure"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.classPicture,expression:"item.classPicture"}],staticClass:"vote_school_img",attrs:{lazy:"loading"}}),t._v(" "),s("figcaption",[t._v(t._s(e.className))])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("dl",{staticClass:"search_dl"},[s("dt",[s("img",{attrs:{src:t.contestantPicture}})]),t._v(" "),s("dd",{staticClass:"search_dd"},[s("div",[s("i",[t._v("姓名：")]),s("span",[t._v(t._s(t.contestantName))])]),t._v(" "),s("div",[s("i",[t._v("编号：")]),s("span",[t._v(t._s(t.contestantNumber))]),s("i",{staticClass:"diamonds"},[t._v(t._s(t.diamonds)+"钻")])]),t._v(" "),s("div",{staticClass:"vote_div"},[s("span",{staticClass:"vote_btn",on:{click:function(e){e.stopPropagation(),t.voteBtn(e)}}},[t._v("投TA一票")])])])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisble,expression:"dialogVisble"}],staticClass:"js_dialog",attrs:{id:"iosDialog2"}},[s("div",{staticClass:"weui-mask"}),t._v(" "),s("div",{staticClass:"weui-dialog"},[s("div",{staticClass:"weui-dialog__bd"},[t._v("您的钻石已经没有了，快去充值吧")]),t._v(" "),s("div",{staticClass:"weui-dialog__ft"},[s("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.dialogVisble=!1}}},[t._v("知道了")])])])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vote-top"},[s("img",{attrs:{src:t.votePicture}})]),t._v(" "),s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchVal,expression:"searchVal",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入你要投票选手的编号或者名字"},domProps:{value:t.searchVal},on:{input:function(e){e.target.composing||(t.searchVal=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("span",{on:{click:t.searchBtn}},[t._v("搜索")])]),t._v(" "),s("ul",{staticClass:"vote_school_ul"},t._l(t.schoolList,function(e){return s("router-link",{key:e.schoolId,attrs:{tag:"li",to:{name:"voteClass",params:{id:e.schoolId}}}},[s("figure",{staticClass:"vote_school_figure"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.schoolPicture,expression:"item.schoolPicture"}],staticClass:"vote_school_img"}),t._v(" "),s("figcaption",[t._v(t._s(e.schoolName))])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"talent_box"},[s("h3",[t._v("个人相册：")]),t._v(" "),s("ul",{staticClass:"talent_ul"},t._l(t.albumList,function(t,e){return s("li",{key:e},[s("img",{attrs:{src:t.picTure}})])}))]),t._v(" "),s("div",{staticClass:"talent_box"},[s("h3",[t._v("视屏展示：")]),t._v(" "),s("ul",{staticClass:"talent_ul"},t._l(t.videoList,function(e,a){return s("li",{key:a},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.pictureFlag[a],expression:"pictureFlag[index]"}],attrs:{src:e.videoPicture},on:{click:function(e){t.videoPlay(a)}}}),t._v(" "),s("video",{directives:[{name:"show",rawName:"v-show",value:t.videoFlag[a],expression:"videoFlag[index]"}],attrs:{controls:"",width:"100%",height:"150px",src:e.videoSource}})])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Banner")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"box"},[t._m(0),t._v(" "),s("div",{staticClass:"featuredCoursesBox"},[s("div",{staticClass:"titleBox"},[t._v("特色课程")]),t._v(" "),s("ul",t._l(t.courses,function(e){return s("li",[s("div",{staticClass:"inBox_img"},[s("img",{attrs:{src:e.coursePicture,alt:"",width:"100%"}})]),t._v(" "),s("div",{staticClass:"inBox_text"},[s("span",[t._v("\n                "+t._s(e.courseName)+"\n              ")])])])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ucanSummary"},[s("h3",[t._v("优看公司简介")]),t._v(" "),s("div",{staticClass:"summaryTextBox"},[t._v("\n        　　2017“优看”杯超级宝贝才艺大奖赛，是贵州优看教育科技有限公司面向贵州省3-6岁儿童，以亲子为主题举办的大型幼儿才艺竞赛\n      ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vote-top"},[s("img",{attrs:{src:t.votePicture}})]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"vote_school_ul"},t._l(t.contestantList,function(e){return s("router-link",{key:e.contestantId,attrs:{tag:"li",to:{name:"talentSpace",params:{id:e.contestantId}}}},[s("figure",{staticClass:"vote_school_figure"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.contestantPicture,expression:"item.contestantPicture"}],staticClass:"vote_school_img",attrs:{lazy:"loading"}}),t._v(" "),s("figcaption",[s("div",[s("i",[t._v("姓名：")]),s("span",[t._v(t._s(e.contestantName))])]),t._v(" "),s("div",[s("i",[t._v("编号：")]),s("span",[t._v(t._s(e.number))]),s("i",{staticClass:"diamonds"},[t._v("100钻")])]),t._v(" "),s("div",{staticClass:"vote_div"},[s("span",{staticClass:"vote_btn",on:{click:function(e){e.stopPropagation(),t.voteBtn(e)}}},[t._v("投TA一票")])])])])])})),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogVisble,expression:"dialogVisble"}],staticClass:"js_dialog",attrs:{id:"iosDialog2"}},[s("div",{staticClass:"weui-mask"}),t._v(" "),s("div",{staticClass:"weui-dialog"},[s("div",{staticClass:"weui-dialog__bd"},[t._v("您的钻石已经没有了，快去充值吧")]),t._v(" "),s("div",{staticClass:"weui-dialog__ft"},[s("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.dialogVisble=!1}}},[t._v("知道了")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contest_title"},[s("h2",[t._v("夏日momo达活动参赛选手展示")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"cart-minus",on:{click:t.minus}},[t._v("-")]),t._v(" "),s("span",{staticClass:"cart-count"},[t._v(t._s(t.rechargeNum))]),t._v(" "),s("div",{staticClass:"cart-plus",on:{click:t.plus}},[t._v("+")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"Recharge-mid"},[s("div",{staticClass:"imgBox"}),t._v(" "),s("div",{staticClass:"priceNum"},[t._v(t._s(t.rechargeNum)+"元")])]),t._v(" "),s("div",{staticClass:"Recharge-bottom"},[s("div",{staticClass:"coinNumBox"},[s("span",[t._v("数量:")]),t._v(" "),s("div",{staticClass:"numCount-wrapper"},[s("num-count",{on:{rechargeNum:t.getRechargeNum}})],1)]),t._v(" "),s("div",{staticClass:"weui-btn-area"},[s("a",{staticClass:"weui-btn weui-btn_plain-primary",class:{"weui-btn_plain-disabled":t.rechargeNum<=0},on:{click:t.toShowRecharge}},[t._v("购买")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Recharge-top"},[s("h3",{staticClass:"top_title"},[t._v("你的好友正在等着你的投票呢，快来给他多多投票吧，一个优币代表一票哦！")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"Recharge-mid"},[s("div",{staticClass:"imgBox"}),t._v(" "),s("div",{staticClass:"priceNum"},[t._v(t._s(t.rechargeNum)+"个")])]),t._v(" "),s("div",{staticClass:"Recharge-bottom"},[s("div",{staticClass:"coinNumBox"},[s("div",{staticClass:"numCount-wrapper"},[s("i",[t._v("￥")]),t._v(t._s(t.rechargeNum)+"\n\n        ")])]),t._v(" "),s("div",{staticClass:"weui-btn-area"},[s("a",{staticClass:"weui-btn weui-btn_plain-primary",on:{click:t.toShowRecharge}},[t._v("确认购买")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Recharge-top"},[s("h3",{staticClass:"top_title"},[t._v("你的好友正在等着你的投票呢，快来给他多多投票吧，一个优币代表一票哦！")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.swiperSlides,function(t,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"banner_img",attrs:{src:t.bannerUrl}})])}))},staticRenderFns:[]}},,,,function(t,e){}]),[96]);
//# sourceMappingURL=app.76c1eeeffb3c2336faee.js.map