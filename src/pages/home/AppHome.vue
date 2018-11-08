<template>
<div ref="root" class='home'>
    <div class="home-div">
    <component :is="type.which"></component>
    <!-- <home-banner v-if="homeData.Banners" :billboards= "homeData.Banners.Banners"></home-banner>
    <banner-down v-if="homeData.CustomMenus" :imgNavs= "homeData.CustomMenus.Menus"></banner-down>
    <hot-original v-if="homeData.HotOriginals" :hots= "homeData.HotOriginals"></hot-original>
    <flash-sale  v-if="homeData.SetPriceAction" :flashes= "homeData.SetPriceAction"></flash-sale>
    <art-eye v-if = "homeData.ArtisticView" :artview="homeData.ArtisticView"></art-eye>
    <more-use v-if = "homeData.ArtisticLives" :moreuse="moreuses"></more-use> -->
    </div>
    <top-nav :type="type"></top-nav>
</div>
</template>

<script>
// import HomeBanner from "@c/commons/home/HomeBanner";
// import BannerDown from "@c/commons/home/BannerDown";
// import HotOriginal from "@c/commons/home/HotOriginal";
// import FlashSale from "@c/commons/home/FlashSale";
// import ArtEye from "@c/commons/home/ArtEye";
// import MoreUse from "@c/commons/home/MoreUse";
// import TopNav from "@c/layout/TopNav"

import TopNav from "@c/layout/TopNav"
 import  scroll from "@utils/scroll"
 import JingXuan from "@page/home/JingXuan"
import YuanChuang from "@page/home/YuanChuang"

export default {
    // data(){
    //     return {
    //         homeData:{},
    //         moreuses:{}
    //     }
    // },
    // created() {
    //   this.$http({
    //     url: "/ycmain/2.0/api/AppView/Index/New2?_=1541592295622"
    //   })
    //   .then(result => {
    // //   result.data.Body.Banner?s.Banners;
    //     this.homeData=result.data.Body;
    //     // console.log(result.data.Body,"jk")
    //   var {ArtisticLives ,ArtisticGifts ,HonourableCustomized}=this.homeData;
    //   this.moreuses={ArtisticLives ,ArtisticGifts ,HonourableCustomized};
    //   console.log(this.moreuses)
    //   });
    // },
    data(){
        return {
            type:{
                which:"jing-xuan"
            }
        }
    },
    mounted(){
        scroll({
            el: this.$refs.root
        })
    },
    components: {
        TopNav,
        JingXuan,
        YuanChuang
  }
  
};

</script>

<style lang="scss">

.home{
    // overflow: auto;
    height:100vh;
    .home-div{

        padding-bottom:1.373333rem;
    }
}
</style>
