import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'


import warmUp from  '@/components/warmUp/warmUp'

import VoteSchool from '@/components/vote/VoteSchool' //投票学校模块
import VoteClass from '@/components/vote/VoteClass' //投票班级模块
import Contestant from '@/components/vote/Contestant' //投票选手列表模块
import TalentSpace from '@/components/vote/TalentSpace' //我的才艺空间模块
import SearchResult from '@/components/vote/SearchResult' //搜索结果模块

import personalCenter from '@/components/personalCenter/personalCenter' //个人中心
import loginOn from '@/components/personalCenter/loginOn' //个人中心参赛者登录页面


import Recharge from  '@/components/Recharge/Recharge' //充值页面
import ShowRecharge from '@/components/Recharge/ShowRecharge' //充值页面

import  aboutUcan from   '@/components/aboutMe/aboutUcan' //关于优看

import  partnerSchool from   '@/components/partnerSchool/partnerSchool' //合作学校
import  everyPartnerSchool from   '@/components/partnerSchool/everyPartnerSchool'  //合作学校详情页

import  sponsor from   '@/components/sponsor/sponsor' //赞助商



import  fileUploader from '@/components/fileUploader/fileUploader'   //上传文件
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {title: "夏日momo哒"}
    },
    {
      path:'/warmUp',
      name:'warmUp',
      component:warmUp,
      meta:{title: "优看杯大赛"}
    },
    {
      path:'/personalCenter',
      name:'personalCenter',
      component:personalCenter,
      meta:{title: "个人中心"}
    },
    {
      path:'/loginOn',
      name:'loginOn',
      component:loginOn,
      meta:{title: "参赛者登录"}
    },
    {
      path: '/voteSchool',
      name: 'voteSchool',
      component: VoteSchool,
      meta: {title: "投票"}
    },
    {
      path: '/voteClass/:id',
      name: 'voteClass',
      component: VoteClass,
      meta: {title: "投票"}
    },

    {
      path: '/contestant/:id',
      name: 'contestant',
      component: Contestant,
      meta: {title: "投票"}
    },

    {
      path: '/searchResult',
      name: 'searchResult',
      component: SearchResult,
      meta:{title:"投票"}
    },

    {
      path: '/talentSpace/:particiNum',
      name: 'talentSpace',
      component: TalentSpace,
      meta: {title: "我的才艺空间"}
    },
    {
      path: '/talentSpace/Recharge/:id',
      name: 'Recharge',
      component: Recharge,
      meta: {title: "优看杯大赛支付"}
    },
    {
      path:'/ShowRecharge',
      name:'ShowRecharge',
      component:ShowRecharge,
      meta:{title: "优看杯大赛充值"}
    },
    {
      path:'/aboutUcan',
      name:'aboutUcan',
      component:aboutUcan,
      meta:{title: "关于优看"}
    },
    {
      path: '/partnerSchool',
      name: 'partnerSchool',
      component: partnerSchool,
      meta:{title: "合作学校"}
    },
    {
      path: '/partnerSchool/everyPartnerSchool/:id',
      name: 'everyPartnerSchool',
      component: everyPartnerSchool,
      meta:{title: "合作学校"}
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: sponsor,
      meta:{title: "赞助商"}
    },

    {
      path: '/fileUploader',
      name: 'fileUploader',
      component: fileUploader,
      meta:{title: "上传文件"}
    }


]

})
