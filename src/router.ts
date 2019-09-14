import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProblemSet from './views/ProblemSet.vue'
import ProblemView from './views/ProblemView.vue'

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
  ]
})
