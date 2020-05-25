import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: resolve => (require(["@/page/home/home"], resolve)),
        },
        {
            path: '/shopSearch',
            name: 'shopSearch',
            component: resolve => (require(["@/page/homeSearch/homeSeach"], resolve))
        },
        {
            path: '/HotRecommended',
            name: 'HotRecommended',
            component: resolve => (require(["@/page/HotRecommended/HotRecommended"], resolve))
        }
    ]
})