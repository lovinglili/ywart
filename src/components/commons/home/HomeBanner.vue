<template>
    <div class="app-home-swiper" v-if="billboards">
        <swiper v-if= "billboards.length" :options="swiperOption" ref="mySwiper" >
            <swiper-slide v-for= '(billboard ,index) in billboards' :key= 'index'>
                
                <img width='100%' :src= 'billboard.MediaUrl' title= '' alt=  ''>
            </swiper-slide>
           
            <div class="swiper-scrollbar scrollWidth" slot="scrollbar"></div>      
        </swiper>
       
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  props:["billboards"],
  // created() {
  //   this.$http({
  //     url: "/ycmain/2.0/api/AppView/Index/New2?_=1541592295622"
  //   }).then(result => {
  
  //     this.billboards = result.data.Body.Banners.Banners;
  
  //   });
  // },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  mounted() {
    //   var $that=this;
    //   console.log(this)
    // console.log(billboards,"billboards")
  }
};
</script>

<style lang="scss" >
.scrollWidth{
    width: 60% !important;
    top:95%;
    left:50%!important;
    transform: translateX(-50%);

    div {
        background:white!important;
    }
}

</style>
