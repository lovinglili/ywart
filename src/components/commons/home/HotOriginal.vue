<template>
    <div class="hot-original">
        <!-- <div class="hot-title">
            <p class="hoth2">{{hots.Title}}</p>
            <p class="hotp">{{hots.Summary}}</p>
        </div> -->
           <home-top-words :title="hots.Title" :smallwords="hots.Summary"></home-top-words>

        <ul>
            <li v-for="(hot,index) in hots.Artworks" :key="index">
                <div class="hot-item-img">
                    <a><img :src="hot.ImgUrl"></a>
                </div>
                <div class="hot-item-words">
                    <i>{{hot.ArtistName}}</i>
                    <i class="shu">|</i>
                    <i>{{hot.ArtworkName}}</i>
                    <i>¥{{hot.Price | insertDot}}</i>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import HomeTopWords from "@c/layout/HomeTopWords"
export default {
  props: ["hots"],
   components:{
      HomeTopWords
  }
};
</script>

<style lang="scss" >
.hot-original {
  background: #fff;
  padding-top: 0.533333rem;
 
  ul {
    margin-top: 0.533333rem;
    background: #fff;
    li {
      width: 100%;
      padding-bottom: 0.666667rem;
      .hot-item-img {
        margin: 0 auto;
        width: 85%;
        a {
          img {
            width: 100%;
            display: block;
            filter: drop-shadow(0.053333rem 0.08rem 0.16rem rgba(0, 0, 0, 0.3));
          }
        }
      }
      .hot-item-words {
        margin: 0 auto;
        margin-top: 0.266667rem;
        text-align: right;
        width: 85%;
        font-size:.32rem;
        i:last-child {
          margin-left: 0.506667rem;
        }
        .shu {
          position: relative;
          top: -0.026667rem;
          margin: 0 0.08rem;
        }
      }
    }
  }
}
</style>
