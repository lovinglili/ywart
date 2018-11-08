import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import AppHome from '@page/home/AppHome'
import AppNotFound from '@page/notfound/AppNotFound'
import AppMine from '@page/mine/AppMine'
import AppClassify from '@page/classify/AppClassify'
import AppCart from '@page/cart/AppCart'
import AppArtist from '@page/artist/AppArtist'
import BannerNav from '@c/commons/home/bannerdown/BannerNav'

// home的嵌套组件
// import JingXuan from "@page/home/JingXuan"
// import YuanChuang from "@page/home/YuanChuang"


const routes=[
    {
        
        path:'/',
        redirect:{name:'home'}
    },
    // {
        
    //     path:'/home',
    //     redirect:{path :'/home/jingxuan'}
    // },
    {
        path:'/home',
        name:'home',
        components:{
           main: AppHome
        },
        // children:[
        //     {
        //         path:"jingxuan",
        //         component:JingXuan
        //     },
        //     {
        //         path:"yuanchuang",
        //         component:YuanChuang
        //     }
        // ]
    },
    {
        path: '/not-found',
        name: 'not-found',
        components:{
            noBottomnav: AppNotFound
         }
    },
    {
        path:'/mine',
        name:'mine',
        components:{
            main: AppMine
         }
    },
    {
        path:'/classify',
        name:'classify',
        components:{
            main: AppClassify
         }
    },
    {
        path:'/cart',
        name:'cart',
        components:{
            main: AppCart
         }
    },
    {
        path:'/artist',
        name:'artist',
        components:{
            main: AppArtist
         }
    },
    {
        path: '/bannernav',
        name: 'bannernav',
        components:{
            noBottomnav:BannerNav
         }
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