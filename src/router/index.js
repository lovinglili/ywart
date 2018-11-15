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
import JingXuan from "@page/home/JingXuan"
import YuanChuang from "@page/home/YuanChuang"
import CangYi from "@page/home/CangYi"
import ZaoYi from "@page/home/ZaoYi"

//mine 的嵌套组件
import AppMineLogin from  '@page/mine/AppMineLogin'
import AppMineNewmessage from  '@page/mine/AppMineNewmessage'




const routes=[
    {
        
        path:'/',
        redirect:{path :'/home/jingxuan'}
    },
    {
        path:'/home',
        redirect:{path :'/home/jingxuan'}
    },
    {
        path:'/home',
        name:'home',
        components:{
           main: AppHome
        },
        children:[
            {
                path:"jingxuan",
                name:"jingxuan",
                component:JingXuan,
                
            },
            {
                path:"yuanchuang",
                name:"yuanchuang",
                component:YuanChuang
            },
            {
                path:"cangyi",
                name:"cangyi",
                component:CangYi,
               
            },
            {
                path:"zaoyi",
                name:"zaoyi",
                component:ZaoYi
            }
        ]
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
         },
         children : [
            {
                path:"zhanghaodenglu",
                name:"zhanghaodenglu",
                component:AppMineLogin,
                
            },
            {
                path:"shoujidenglu",
                name:"shoujidenglu",
                component:AppMineNewmessage,
                
            },
        ]
    },
    {
        path:'/classify',
        name:'classify',
        components:{
            main: AppClassify
         },
         
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
        path: '/bannernav:id',
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