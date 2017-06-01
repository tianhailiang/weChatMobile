import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'


import warmUp from  '@/components/warmUp/warmUp'

import VoteSchool from '@/components/vote/VoteSchool' //投票学校模块
import VoteClass from '@/components/vote/VoteClass' //投票班级模块
import Contestant from '@/components/vote/Contestant' //投票选手列表模块
import TalentSpace from '@/components/vote/TalentSpace' //我的才艺空间模块


import Recharge from  '@/components/Recharge/Recharge' //充值页面
import ShowRecharge from '@/components/Recharge/ShowRecharge' //充值页面

import  aboutUcan from   '@/components/aboutMe/aboutUcan' //关于优看


Vue.use(Router)

export default new Router({
  mode:'history',
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
      path: '/talentSpace/:id',
      name: 'talentSpace',
      component: TalentSpace,
      meta: {title: "我的才艺空间"}
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge,
      meta: {title: "优看杯大赛充值"}
    },
    {
      path:'/Recharge/ShowRecharge',
      name:'ShowRecharge',
      component:ShowRecharge,
      meta:{title: "优看杯大赛充值"}
    },
    {
      path:'/aboutUcan',
      name:'aboutUcan',
      component:aboutUcan,
      meta:{title: "关于优看"}
    }

  ]


})
