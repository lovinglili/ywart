<template>
<div class="search-list" ref="search_list" :class = "{searchpadding1 : ishasli,searchpadding2:!ishasli}">

    <water-works v-if="itemsDatas.length>0" :indexDatas="itemsDatas">
      
    </water-works>
    <div v-else class="no-item">
        <p>没有找到内容，换个关键词试试吧</p>
    </div>
</div>
</template>

<script>
import WaterWorks from "@/components/layout/WaterWorks";
export default {
  components: {
    WaterWorks
  },
  data() {
    return {
      itemsDatas: [],
      typeWords: { "SortKey": "" },
      page:1
    };
  },
  props: ["searchwords", "type","ishasli"],
  watch: {
    searchwords: {
      async handler() {
        let results = await this.getitems();
        this.itemsDatas = results.data.Data.Rows;
      },
      immediate: true,
      deep: true
    },
    typeWords: {
      async handler() {
        this.page=1;
        let results = await this.getitems();
        this.itemsDatas = results.data.Data.Rows;
      },
      immediate: true,
      deep: true
    },
    type: {
      handler() {
        switch (this.type) {
          case "total-sort": {
            this.typeWords["SortKey"] = "";
            break;
          }
          case "hot-sort": {
            this.typeWords["SortKey"] = "7";
            break;
          }
          case "price-sort": {
            this.typeWords["SortKey"] = "1";
            break;
          }
          default: {
            this.typeWords["SortKey"] = "";
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted(){ 
      this.$refs.search_list.addEventListener('scroll', this.scroll)
  },
  beforeDestory(){
      this.$refs.search_list.removeEventListener('scroll', this.scroll)
  },
  methods: {
    getitems() {
      var datas ="";
      if(this.typeWords["SortKey"]!="")
      {
        datas=`module=Goods.Buy&action=GetGoods&category=${
          this.searchwords["category"]
        }&page=${this.page}&pageSize=8&keyword=${
          this.searchwords["keyword"] ? this.searchwords["keyword"] : ""
        }&SortKey=${this.typeWords["SortKey"]}`
      }else{
        datas=`module=Goods.Buy&action=GetGoods&category=${
          this.searchwords["category"]
        }&page=${this.page}&pageSize=8&keyword=${
          this.searchwords["keyword"] ? this.searchwords["keyword"] : ""
        }`
      }
      return this.$http({
        url: "https://www.ywart.com/ajax/index",
        method: "POST",
        data: datas
      }).then(result => {
        return result;
      });
    },
    async scroll(){//滚动加载数据
      var that=this.$refs.search_list;
      if(document.documentElement.clientHeight==that.scrollHeight-that.scrollTop){
        this.page++;
        let result=await this.getitems();
        if(result.data.Data.Rows.length>0){
          this.itemsDatas =this.itemsDatas.concat(result.data.Data.Rows);
        }
      }
    }
  }
};
//186
</script>

<style lang="scss">
.searchpadding1{
  padding-top: 3.653333rem;
}

.search-list {
  background: white;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  .no-item {
    text-align: center;
    line-height: 3.466667rem;
    margin: 0px;
    color: rgb(0, 0, 0);
  }
  
}
.searchpadding2{
  padding-top:2.48rem;
}
</style>
