<template>
    <div class="moreuse"  >
        <div v-for = "(more,item) in moreuse" :key= "item"> 
            <!-- <div class="more-title"> 
                <p  class="more">{{more.Title}}</p>
                <p class="more-small">{{more.Summary}}</p>
            </div> -->
            <home-top-words :title="more.Title" :smallwords="more.Summary"></home-top-words>
            <div class="more-content">
                <single-img :moreImg="more.Items"></single-img>
            </div>
                <div class="go-more"><span>点击查看</span></div>
        </div>
        

    </div>
</template>

<script>
import HomeTopWords from "@c/layout/HomeTopWords"
import SingleImg from "@c/commons/home/zaoyi/SingleImg"
export default {
  props: ["moreuse"],
  components:{
      HomeTopWords,
      SingleImg
  }
};
</script>

<style lang="scss" >
.moreuse {
  background: #fff;
  margin-top: 0.266667rem;
  padding-top: 0.346667rem;
  
  
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
</style>
