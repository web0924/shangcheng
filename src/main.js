// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './config/rem'
import { Search, Toast, Swipe, SwipeItem, Lazyload, Col, Row } from 'vant';
import 'vant/lib/index.css';

Vue.use(Search).use(Toast).use(Swipe).use(SwipeItem).use(Lazyload).use(Col).use(Row);

import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})