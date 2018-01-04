import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'

Vue.use(Router)

export default new Router({
    mode: 'history',//history
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/hello',
            name: 'HelloWorld1',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/index2',
            name: 'Test2',
            component: Test1
        }
    ]
})
