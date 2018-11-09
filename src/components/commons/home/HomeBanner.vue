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
 
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  mounted() {
  
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
