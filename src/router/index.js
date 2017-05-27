import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import VoteSchool from '@/components/vote/VoteSchool' //投票学校模块
import VoteClass from '@/components/vote/VoteClass' //投票班级模块
import Contestant from '@/components/vote/Contestant' //投票选手列表模块
import TalentSpace from '@/components/vote/TalentSpace' //我的才艺空间模块
import SearchResult from '@/components/vote/SearchResult' //搜索结果模块


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{title:"夏日momo哒"}
    },
    {
      path: '/voteSchool',
      name: 'voteSchool',
      component: VoteSchool,
      meta:{title:"投票"}
    },

    {
      path: '/voteClass/:id',
      name: 'voteClass',
      component: VoteClass,
      meta:{title:"投票"}
    },

    {
      path: '/contestant/:id',
      name: 'contestant',
      component: Contestant,
      meta:{title:"投票"}
    },
    
    {
      path: '/searchResult',
      name: 'searchResult',
      component: SearchResult,
      meta:{title:"投票"}
    },

    {
      path: '/talentSpace/:id',
      name: 'talentSpace',
      component: TalentSpace,
      meta:{title:"我的才艺空间"}
    }

  ]

  
})
