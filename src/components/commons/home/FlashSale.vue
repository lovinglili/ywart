<template>
    <div class="flashsale">
        <div class="flash-title">
           <home-top-words :title="flashes.Title" :smallwords="flashes.Summary"></home-top-words>
        </div>
        <ul>
            <li v-for="(flash,index) in flashes.Artworks" :key="index">
                <div class="flash-img"><img :src="flash.ImgUrl"></div>
                <p class="discount">￥{{flash.Price | insertDot}}</p>
                <p class="price">￥{{flash.OriginalPrice | insertDot}}</P>
            </li>
        </ul>

    </div>
</template>

<script>
import HomeTopWords from "@c/layout/HomeTopWords"

export default {
    
  props: ["flashes"],
   components:{
      HomeTopWords
  }
};
</script>

<style lang="scss" >
.flashsale {
  background: #fff;
  margin-top: 0.266667rem;
  padding-top: 0.346667rem;
  .flash-title {
    text-align: center;
 
  }
  ul {
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
    margin-top: 0.133333rem;
    padding-bottom: 0.106667rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 46%;
      margin: 3% 2%;
      img {
        width: 100%;
        height:3.413333rem;
        display: block;
        margin-bottom: 0.213333rem;
      }
      p{
          text-align: right;
      }
      .discount{
              font-size: .346667rem;
            color: #ee403c;
            font-weight: bold;
            margin-bottom: .026667rem;
      }
      .price{
              color: #999999;
            font-size: .32rem;
            text-decoration: line-through;
      }
    }
  }
}
</style>
