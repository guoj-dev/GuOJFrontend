import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProblemSet from './views/ProblemSet.vue'
import ProblemView from './views/ProblemView.vue'
import ProblemEdit from './views/ProblemEdit.vue'
import JudgeList from './views/JudgeList.vue'
import JudgeStatus from './views/JudgeStatus.vue'
import UserInfo from './views/UserInfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/ProblemSet',
        name: 'ProblemSet',
        component: ProblemSet
    },
    {
        path: '/Problem/:ProblemID',
        name: 'Problem',
        component: ProblemView
    },
    {
        path: '/Problem/Edit/:ProblemID',
        name: 'ProblemEdit',
        component: ProblemEdit
    },
    {
        path: '/JudgeStatus/:JudgeID',
        name: 'JudgeStatus',
        component: JudgeStatus
    },
    {
        path: '/JudgeStatus',
        name: 'JudgeList',
        component: JudgeList
    },
    {
        path: '/User/:UserID',
        name: 'User',
        component: UserInfo
    },
  ]
})
