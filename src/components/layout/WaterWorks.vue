<template>
    
<ul class="water-works">
        <waterfall  :line-gap="screenW"   line="v" align="center" :watch="indexDatas" >
  <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot
          v-for="(item, index) in indexDatas"
          :width="screenW"
          :height=" item.ImgHeight * screenW/ item.ImgWidth + 170"
          :order="index"
          :key="index"
        >
            <li class='li_item'>
                <div class="li_img">
                    <a >
                        <img :src="imgurl(item.ImgName)">
                    </a>
                </div>
                <div class="li_words">
                    <div class="activity">
                        <a v-if="item.Activities">{{item.Activities[0].TagName}}</a>
                    </div>
                    <p class="price">￥{{item.Price}}</p>
                    <div class="woInFo">
                        <a>{{item.Material}}</a>
                        <a>，</a>
                        <a>{{item.Title}}</a>
                    </div>
                </div>
            </li>
  </waterfall-slot>
</waterfall>
</ul>

</template>

<script>
import { Waterfall, WaterfallSlot } from "vue-waterfall";

export default {
  props: ["indexDatas"],

components: {
    Waterfall,
    WaterfallSlot
  },
  data(){
    return {
      screenW:window.screen.width * 0.49*2,
      }
  },
  methods:{
    imgurl(name){
        // console.log(name)
        return "https://cdn.ywart.com/yw/"+name+"_small01"
    }
  }
}
</script>

<style lang="scss"> 
ul.water-works{
    width: 98%;
    margin: 0 auto;
   
    li {
      margin: 3%;
    }
    .li_img {
      a {
        display: block;
          text-align: right;
        img {
          width: 100%;
          display: block;
        
        }
      }
    }
    .li_words {
      padding: 0.266667rem 0 0 0;
      .activity {
        font-size: 22px;
        line-height: 18px;
        text-align: right;
        margin-bottom: 1px;
        a {
          color: #f27875;
          background: #ffe9e9;
          text-align: center;
          display: inline-block;
          margin-left: 0.08rem;
        }
      }
      p.price {
        font: size 24px;
        text-align: right;
        margin-bottom: 0.026667rem;
      }
      .woInFo {
        color: #666;
        text-align: right;
        font-size: 0;
        a {
          color: #666;
          font-size: 24px;
          display: inline-block;
        }
        a:last-child,
        a:first-child {
          max-width: 2rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    }
</style>
