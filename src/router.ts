import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProblemSet from './views/ProblemSet.vue';
import ProblemView from './views/ProblemView.vue';
import ProblemEdit from './views/ProblemEdit.vue';
import JudgeList from './views/JudgeList.vue';
import JudgeStatus from './views/JudgeStatus.vue';
import ContestList from './views/ContestList.vue';
import UserInfo from './views/UserInfo.vue';
import Login from './views/Login.vue';
import NotFound from './views/404.vue';
import Error from './views/Error.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/ProblemSet',
            name: 'ProblemSet',
            component: ProblemSet,
        },
        {
            path: '/Problem/:ProblemID',
            name: 'Problem',
            component: ProblemView,
        },
        {
            path: '/Problem/Edit/:ProblemID',
            name: 'ProblemEdit',
            component: ProblemEdit,
        },
        {
            path: '/JudgeStatus',
            name: 'JudgeList',
            component: JudgeList,
        },
        {
            path: '/JudgeStatus/:JudgeID',
            name: 'JudgeStatus',
            component: JudgeStatus,
        },
        {
            path: '/ContestList',
            name: 'ContestList',
            component: ContestList,
        },
        {
            path: '/User/:UserID',
            name: 'User',
            component: UserInfo,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/Error/:ErrorMessage',
            name: 'Error',
            component: Error,
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
        },
    ],
});
