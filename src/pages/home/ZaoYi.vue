<template>
<div class="zaoyi-container">
    <div v-if="homeData.Banners" class="home-contents" >
          <home-banner  :billboards= "homeData.Banners.Banners"></home-banner>
          <groom :billboards="homeData.Prints.Params"></groom>
          <div class="singleImg">
            <single-img :moreImg="homeData.ADs"></single-img>
          </div>
          <hot-original :hots="homeData.GoodPrints" :isbutton="isbutton"></hot-original>
          <home-banner  :billboards= "homeData.MarkArtArtistList"></home-banner>
          <zy-works :indexDatas=" indexData.Rows"></zy-works>
    </div>
    <div class="nomore">---已经到底了---</div>
</div>
</template>

<script>
import HomeBanner from "@c/commons/home/HomeBanner";
import groom from "@c/commons/home/zaoyi/groom";
import SingleImg from "@c/commons/home/zaoyi/SingleImg";
import ZyWorks from "@c/commons/home/zaoyi/ZyWorks";
import HotOriginal from "@c/commons/home/HotOriginal";
export default {
  data() {
    return {
      homeData: {},
      moreuses: {},
      indexData:{},
      isbutton:true
    };
  },
  created() {
    this.$http({
      url: "/ycmain/1.0/api/AppView/Index/Print2?_=1541767996767"
    }).then(result => {
      this.homeData = result.data.Body;
      console.log(this.homeData.Prints.Params);
    });

     this.$http({
      url: "/list/ajax/index",
      method:"post",
      data:'module=Goods.Buy&action=GetGoods&page=1&iszaoyi=true'
    }).then(result => {
      this.indexData = result.data.Data;
    });
  },
  components: {
    HomeBanner,
    groom,
    SingleImg,
    HotOriginal,
    ZyWorks
  }
};
</script>

<style lang="scss">
.home-contents{
  background:#f3f3f3;
 
.singleImg {
  width: 100%;
  background:#f3f3f3;
  margin-top: 0.266667rem;
}


}
.nomore{
    line-height: 1.28rem;
    font-size: .32rem;
    background-color: #eee;
    color: #999999;
    text-align: center;
}

</style>
