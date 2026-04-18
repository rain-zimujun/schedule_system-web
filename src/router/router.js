import {createRouter,createWebHashHistory} from 'vue-router'

import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
/* import AppHeader from '../components/AppHeader.vue' */
import ShowSchedule from '../components/ShowSchedule.vue'

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

export default router