<template>
     <div class='banner-down-nav'>
            <router-link class="banner-down-nav-item" v-for= '(imgNav,index) in imgNavs' :key="index" :to='{name: "bannernav"}'>
                <img  :src='imgNav.ImgUrl' >
            </router-link>     
        </div>
</template>

<script>
export default {
  data() {
    return {
      imgNavs: []
      // ,
      // paths: ["youhua", "shuimo", "banhua", "sheying", "diaoshu"]

    };
  },
  created() {
    this.$http({
      url: "/ycmain/2.0/api/AppView/Index/New2?_=1541592295622"
    }).then(result => {
     
      this.imgNavs = result.data.Body.CustomMenus.Menus;
      // this.imgNavs.forEach((item, index) => {
      //   item["path"] = this.paths[index];
      // });
    });
  }
};
</script>

<style lang='scss'>
.banner-down-nav{
        width: 100%;
        background: #FFF;
        padding-top: .106667rem;
        font-size: 0;
        margin-bottom: .266667rem;
        padding: 0 .4rem 0 .266667rem;
        .banner-down-nav-item{
            display: inline-block;
            width:20%;
            text-align: center;
            overflow: hidden;
            img{
                display: block;
                height:1.6rem;
                margin:auto;
            }
        }
}
</style>
