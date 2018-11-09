<template>
    <div class="artview">
        <!-- <div class="art-title"> 
            <p  class="art">{{artview.Title}}</p>
            <p class="art-small">{{artview.Summary}}</p>
        </div> -->
           <home-top-words :title="artview.Title" :smallwords="artview.Summary"></home-top-words>

        <ul>
            <li v-for="(art,index) in artview.Items" :key="index">
                <div class="art-img"><img :src="art.ImgUrl"></div>
                
            </li>
        </ul>

    </div>
</template>

<script>
import HomeTopWords from "@c/layout/HomeTopWords"

export default {
  props: ["artview"],
   components:{
      HomeTopWords
  }
};
</script>

<style lang="scss" >
.artview {
  background: #fff;
  margin-top: 0.266667rem;
  padding-top: 0.346667rem;
  .art-title {
    text-align: center;
    .art{
        
        margin-bottom: 0.053333rem;
        font-weight: bold;
        color: #000;
    }
    .art-small{
        text-align: center;
        // font-size: 0.32rem;
        color: #a4a3a3;
    }
  }
  ul {
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
    margin-top: 0.133333rem;
    padding-bottom: 0.106667rem;
    li :first-child{
          display: block;
            width: 100%;
            margin-top: 20px;
   
        img{
            width:100%;
        }
    }
    li:nth-of-type(2),li:nth-of-type(3),li:nth-of-type(4),li:nth-of-type(5){
        width: 48%;
        display: inline-block;
        margin-top: .32rem;
        overflow: hidden;
    }
    li:nth-of-type(2n){
        margin-right: 4%;
    }
  }
}
</style>
