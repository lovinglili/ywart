import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AppHome from '@page/home/AppHome'
import AppNotFound from '@page/notfound/AppNotFound'
import AppMine from '@page/mine/AppMine'
import AppClassify from '@page/classify/AppClassify'
import AppCart from '@page/cart/AppCart'
import AppArtist from '@page/artist/AppArtist'


const routes=[
    {
        path:'/home',
        name:'home',
        component:AppHome
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: AppNotFound
    },
    {
        path:'/mine',
        name:'mine',
        component:AppMine
    },
    {
        path:'/classify',
        name:'classify',
        component:AppClassify
    },
    {
        path:'/cart',
        name:'cart',
        component:AppCart
    },
    {
        path:'/artist',
        name:'artist',
        component:AppArtist
    },
    {
        path: '**',
        redirect: '/not-found'
    }
]

const router=new VueRouter({
    mode:'history',
    routes
})
export default router