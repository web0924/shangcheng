import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import First from '../pages/first.vue'
import Login from '../pages/Login.vue'
import taobao from '../pages/taobao.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'First',
            component: First
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/taobao',
            name: 'taobao',
            component: taobao
        },
    ]
})