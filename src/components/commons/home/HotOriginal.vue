<template>
    <div class="hot-original">
        <!-- <div class="hot-title">
            <p class="hoth2">{{hots.Title}}</p>
            <p class="hotp">{{hots.Summary}}</p>
        </div> -->
           <home-top-words :title="hots.Title " :smallwords="hots.Summary "></home-top-words>

        <ul>
            <li v-for="(hot,index) in (hots.Artworks ? hots.Artworks:hots.Prints)" :key="index">
                <div class="hot-item-img">
                    <a><img :src=" hot.ImgUrl ? hot.ImgUrl : hot.PreviewImgUrl"></a>
                </div>
                <div class="hot-item-words">
                    <i>{{hot.ArtistName}}</i>
                    <i class="shu">|</i>
                    <i>{{hot.ArtworkName}}</i>
                    <i>¥{{hot.Price | insertDot}}</i>
                </div>
            </li>
        </ul>
        <div v-if="isbutton" class="hotMore">
                <span>全部造艺作品</span>
            </div>
    </div>
</template>

<script>
import HomeTopWords from "@c/layout/HomeTopWords"
export default {
  props: ["hots","isbutton"],
   components:{
      HomeTopWords
  },
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
.hotMore {
  margin-top: -0.533333rem;
  width: 100%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  text-align: center;
  color: #666666;
  font-size: 0.373333rem;
  span {
    background: url(https://cdn.ywart.com/icon/JianTou/indexJt.png) no-repeat
      center right;
    background-size: 0.106667rem 0.16rem;
    padding-right: 0.24rem;
  }
}
</style>
