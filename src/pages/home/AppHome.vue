<template>
<div ref="root" class='home'>
    <div class="home-div">
        <router-view></router-view>
    </div>
    <top-nav ></top-nav>
</div>
</template>

<script>


import TopNav from "@c/layout/TopNav"
 import  scroll from "@utils/scroll"


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
        // scroll({
        //     el: this.$refs.root
        // })
    },
    components: {
        TopNav
  }
  
};

</script>

<style lang="scss">

.home{
    overflow: auto;
    height:100vh;
    .home-div{

        padding-bottom:1.373333rem;
    }
}
</style>
