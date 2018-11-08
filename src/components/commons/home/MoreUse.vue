<template>
    <div class="moreuse"  >
        <div v-for = "(more,item) in moreuse" :key= "item"> 
            <!-- <div class="more-title"> 
                <p  class="more">{{more.Title}}</p>
                <p class="more-small">{{more.Summary}}</p>
            </div> -->
            <home-top-words :title="more.Title" :smallwords="more.Summary"></home-top-words>
            <div class="more-content">

                <div class="more-img" v-for="(img ,index) in more.Items" :key="index"><img :src="img.ImgUrl"></div>
                <div class="go-more"><span>点击查看</span></div>
            </div>
        </div>
        

    </div>
</template>

<script>
import HomeTopWords from "@c/layout/HomeTopWords"
export default {
  props: ["moreuse"],
  components:{
      HomeTopWords
  }
};
</script>

<style lang="scss" >
.moreuse {
  background: #fff;
  margin-top: 0.266667rem;
  padding-top: 0.346667rem;
  
  .more-content{
      .more-img{
              width: 92%;
        margin: 0 auto;
        margin-top: .4rem;
        img{
            width:100%;
        }
      }
      .go-more{
            margin-top: .666667rem;
            text-align: center;
            padding-bottom: .4rem;
            span{
                color: #777777;
                font-size:.32rem;
                    background: url(https://cdn.ywart.com/icon/JianTou/indexJt.png) no-repeat center right;
                    background-size: .106667rem .16rem;
                    padding-right: .24rem;
            }
      }
  }
 
}
</style>
