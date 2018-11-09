<template>
    <div >
      <div class="home-contents">
        <home-banner v-if="homeData.Banners" :billboards= "homeData.Banners.Banners"></home-banner>
        <banner-down v-if="homeData.CustomMenus" :imgNavs= "homeData.CustomMenus.Menus"></banner-down>
        <hot-original v-if="homeData.HotOriginals" :hots= "homeData.HotOriginals"></hot-original>
        <flash-sale  v-if="homeData.SetPriceAction" :flashes= "homeData.SetPriceAction"></flash-sale>
        <art-eye v-if = "homeData.ArtisticView" :artview="homeData.ArtisticView"></art-eye>
        <more-use v-if = "homeData.ArtisticLives" :moreuse="moreuses"></more-use>
      </div>
      <home-footer></home-footer>
    </div>
</template>

<script>
import HomeBanner from "@c/commons/home/HomeBanner";
import BannerDown from "@c/commons/home/BannerDown";
import HotOriginal from "@c/commons/home/HotOriginal";
import FlashSale from "@c/commons/home/FlashSale";
import ArtEye from "@c/commons/home/ArtEye";
import MoreUse from "@c/commons/home/MoreUse";
import HomeFooter from "@c/layout/HomeFooter";

export default {
 data(){
        return {
            homeData:{},
            moreuses:{}
        }
    },
    created() {
      this.$http({
        url: "/ycmain/2.0/api/AppView/Index/New2?_=1541592295622"
      })
      .then(result => {
    //   result.data.Body.Banner?s.Banners;
        this.homeData=result.data.Body;
        // console.log(result.data.Body,"jk")
      var {ArtisticLives ,ArtisticGifts ,HonourableCustomized,YwartsIntroduce}=this.homeData;
      this.moreuses={ArtisticLives ,ArtisticGifts ,HonourableCustomized,YwartsIntroduce};
      console.log(this.moreuses)
      });
    },
    
    components: {
        HomeBanner,
        BannerDown,
        HotOriginal,
        FlashSale,
        ArtEye,
        MoreUse,
        HomeFooter
  }
}
</script>

<style lang="scss">
.home-contents{
      overflow: hidden;
    // background-color: #f8f8f8;
    padding-bottom: 1.333333rem;
}
</style>
