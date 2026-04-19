import {createRouter,createWebHashHistory} from 'vue-router'

import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
/* import AppHeader from '../components/AppHeader.vue' */
import ShowSchedule from '../components/ShowSchedule.vue'

import pinia from '../pinia'

import {defineUser} from '../store/userStore'

let user = defineUser(pinia);


const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path : '/',
            component : Login
        },
        {
            path : '/showSchedule',
            component : ShowSchedule
        },
        {
            path : '/login',
            component : Login
        },
        {
            path : '/regist',
            component : Regist
        },
    ]
})

//路由的全局前置守卫 判断是否可以访问showSchedule
router.beforeEach((to,from) => {
    if(to.path == '/showSchedule'){
        //没登录  返回login
        if(user.username == ''){
            return '/login'
        }
    }
})

export default router