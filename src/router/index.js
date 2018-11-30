import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [
        // 首先是登录页的路由
        {
            path: '/',
            name: 'home',
            meta: {
                title: "广东省农业气象综合平台"
            },
            component: resolve => {require(['@/views/home.vue'], resolve)}
        },
    ]
})

export default router
