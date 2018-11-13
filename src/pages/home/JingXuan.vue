<template>
    <div >
      <template v-if="homeData.Banners" class="home-contents">
        
        <home-banner  :billboards= "homeData.Banners.Banners" >
            <!-- <div class="swiper-scrollbar scrollWidth" slot="scrollbar"></div>       -->
        </home-banner>
        <banner-down :imgNavs= "homeData.CustomMenus.Menus"></banner-down>
        <hot-original  :hots= "homeData.HotOriginals"></hot-original>
        <flash-sale  :flashes= "homeData.SetPriceAction"></flash-sale>
        <art-eye  :artview="homeData.ArtisticView"></art-eye>
        <more-use  :moreuse="moreuses"></more-use>
      </template>
      <div v-else class="bg-lazy"></div>
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
  data() {
    return {
      homeData: {},
      moreuses: {}
    };
  },
  created() {
    this.$http({
      url: "/ycmain/2.0/api/AppView/Index/New2?_=1541592295622"
    }).then(result => {
      this.homeData = result.data.Body;
      var {
        ArtisticLives,
        ArtisticGifts,
        HonourableCustomized,
        YwartsIntroduce
      } = this.homeData;
      this.moreuses = {
        ArtisticLives,
        ArtisticGifts,
        HonourableCustomized,
        YwartsIntroduce
      };
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
};
</script>

<style lang="scss">
.home-contents {
  overflow: hidden;
  // background-color: #f8f8f8;
  padding-bottom: 1.333333rem;
  
}
.bg-lazy {
  width: 100vw;
  height: 100vh;
  background: red;
}

</style>
