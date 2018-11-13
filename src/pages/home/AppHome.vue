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
