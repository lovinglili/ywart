<template>
    <div class="appclassify-checklist-item clearfix" >
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom = "getData" >
            <template slot-scope="props"> 
                <img :src="newSrc+props.value.ImgName" alt = "" >
                <div class="checklist-item">
                    <div class="checklist-text">
                        <div class="text-head">
                            <a v-if = "props.value.Activities" href="">{{props.value.Activities[0].TagName}}</a>
                        </div>
                        <p>￥{{props.value.Price}}</p>
                        <div class="text-foot">
                            <a href="">{{props.value.Material}}</a><a href="">{{props.value.Title}}</a>
                        </div>
                    </div>
                </div>
            </template>
        </vue-waterfall-easy>
    </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  name: "app",
  data() {
    return {
      imgsArr: [],
      page: 0,
      newSrc: "https://cdn.ywart.com/yw/"
    };
  },
  components: {
    vueWaterfallEasy
  },
  props: ["message"],
  methods: {
    getData() {
      this.page += 1;
      this.$http({
        url: "https://www.ywart.com/ajax/index",
        method: "post",
        data: `module=Goods.Buy&action=GetGoods&category=${this.message.category}&page=${this.page}&pageSize=6&theme=${this.message.theme}&price=${this.message.prise}`
        
      }).then(res => {
        // console.log(res.data.Data.Rows)
        // console.log(this.newArr)
        console.log(this.message ,1)
        this.imgsArr = this.imgsArr.concat(res.data.Data.Rows);
        console.log(this.page, this.imgsArr);
      });
    }
  },
  watch : {
        message :{
            handler (val, oldval) { // val 改变后的值 oldval 改变前的值
                this.imgsArr = []
                this.page = 0
                this.getData()
            },
            deep: true
        }
        
  },
  created() {
    this.getData();
    
  },
  updated(){
      console.log(this.message)
  }
};
</script>

<style lang="scss">
.appclassify-checklist-item {
  width: 9.6rem;
  height: 100% !important;
  .img-wraper {
    height: auto !important;
  }
  img {
    width: 4.6rem !important;
  }
  .checklist-item {
    width: 4.6rem;
    .checklist-text {
      width: 4.333333rem;
      height: 2.533333rem;
      padding: 0.266667rem 0.133333rem;
      font-size: 0.346667rem;
      float: left;
      text-align: right;
      .text-foot {
        a {
          display: block;
          float: right;
          overflow: hidden;
        }
      }
    }
  }
}

.clearfix {
  overflow: auto;
  height: 1%;
}

.vue-waterfall-easy {
  position: absolute !important;
}

.default-card-animation {
  display: inline;
}
</style>