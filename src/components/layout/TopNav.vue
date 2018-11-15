<template>
<header>
    <div class="headerTop">
        <div class="headerTop-left"></div>
        <div class="headerTop-center"><input type="text" placeholder="输入关键字搜索作品" @click="shows.isShow=true"></div>
        <div class="headerTop-right"></div>
    </div>
    <div class="headerTops">
        <ul>
            <router-link active-class="active" tag="li" v-for="type in types" :key="type.id" :to="type.path">
                <a >{{type.title}}</a>
                
            </router-link>
           
        </ul>
    </div>
     <transition
          enter-active-class="animated slideInUp"
          leave-active-class="animated slideOutDown"
     >
         <app-home-search   :isShow.sync="shows.isShow" v-if="shows.isShow"></app-home-search>
    </transition>
</header>
    
</template>

<script>
 import AppHomeSearch from "@c/layout/AppHomeSearch"
export default {
  data() {
    return {
      types: [
        { id: "1", title: "精选", path: "jingxuan" },
        { id: "2", title: "原创艺术", path: "yuanchuang" },
        { id: "3", title: "造艺", path: "zaoyi" },
        { id: "4", title: "藏艺术", path: "cangyi" }
      ],
      shows:{
                isShow:false
            }
    };
  },
  components:{
    AppHomeSearch
  }
 
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  height: 2.613333rem;
  padding-top: 0.533333rem !important;
  .headerTops {
    height: 1.253333rem;
    line-height: 1.253333rem;
    ul {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      li {
        flex-grow: 1;
        text-align: center;
        height:100%;
        a {
          color: #fff;
        }
         &.active a {
          padding-bottom: 0.213333rem;
            border-bottom:2px solid #fff;
      }
      }
     
    }
  }
  .headerTop {
    display: flex;
    justify-content: space-around;
    height: 0.8rem;
    .headerTop-left {
      width: 10%;
      background: url(https://cdn.ywart.com/icon/headerKefuB.png) no-repeat
        center center;
      background-size: 0.693333rem !important;
    }
    .headerTop-center {
      width: 80%;
      input {
        display: block;
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        background: #f2f2f2;
        padding-left: 0.266667rem;
      }
    }
    .headerTop-right {
      width: 10%;
      background: url(https://cdn.ywart.com/icon/znx.png) no-repeat center
        center;
      background-size: 0.693333rem !important;
    }
  }
}
</style>
