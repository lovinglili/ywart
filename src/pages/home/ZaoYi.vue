<template>
<div>
    <div v-if="homeData.Banners" class="home-contents" >
          <home-banner  :billboards= "homeData.Banners.Banners"></home-banner>
    </div>
</div>
</template>

<script>
import HomeBanner from "@c/commons/home/HomeBanner";
export default {
     data(){
        return {
            homeData:{},
            moreuses:{}
        }
    },
    created(){
        this.$http({
        url: "/ycmain/1.0/api/AppView/Index/Print2?_=1541767996767"
        
        })
        .then(result => {
           
        this.homeData=result.data.Body;
     
      });
    },
  components: {
    HomeBanner
  }
};
</script>

<style>
</style>
