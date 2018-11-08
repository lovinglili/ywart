<template>
     <div class='banner-down-nav'>
            <div class="banner-down-nav-item" v-for= '(imgNav,index) in imgNavs' :key="index" @click="goToList(imgNav.categories)">
                <img  :src='imgNav.ImgUrl' >
            </div>     
        </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ["油画", "水墨", "版画", "摄影", "雕塑"]

    };
  },
  props:["imgNavs"],
  created() {
    // console.log(this.imgNavs,"imgNavs")
    // this.$http({
    //   url: "/ycmain/2.0/api/AppView/Index/New2?_=1541592295622"
    // }).then(result => {
     
      // this.imgNavs = result.data.Body.CustomMenus.Menus;
      this.imgNavs.forEach((item, index) => {
        item["categories"] = this.categories[index];
      });
    // });
  },
  methods:{
    goToList(categories){
      this.$router.push({name:'bannernav',query:{name:categories}})
    }
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
