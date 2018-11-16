<template>
<div class="search-list" :class = "{searchpadding1 : ishasli,searchpadding2:!ishasli}">

    <water-works v-if="itemsDatas.length>0" :indexDatas="itemsDatas"></water-works>
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
      itemsDatas: {},
      typeWords: { SortKey: "" }
    };
  },
  props: ["searchwords", "type","ishasli"],
  watch: {
    searchwords: {
      async handler() {
        let results = await this.getitems();
        this.itemsDatas = results.data.Data.Rows;
        // console.log(results, this.itemsDatas, "ccc");
      },
      immediate: true,
      deep: true
    }
    // typeWords: {
    //   async handler() {
    //     let results = await this.getitems();
    //     this.itemsDatas = results.data.Data.Rows;
    //     // console.log(results, this.itemsDatas, "ccc");
    //   },
    //   immediate: true,
    //   deep: true
    // },
    // type: {
    //   handler() {
    //     console.log(typeof this.type);
    //     switch (this.type) {
    //       case "total-sort": {
    //         this.typeWords["SortKey"] = "";
    //         break;
    //       }
    //       case "hot-sort": {
    //         console.log("hot");
    //         this.typeWords["SortKey"] = "7";
    //         break;
    //       }
    //       case "price-sort": {
    //         this.typeWords["SortKey"] = "1";
    //         break;
    //       }
    //       default: {
    //         console.log("error");
    //       }
    //     }
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  methods: {
    getitems() {
      return this.$http({
        url: "https://www.ywart.com/ajax/index",
        method: "POST",
        data: `module=Goods.Buy&action=GetGoods&category=${
          this.searchwords["category"]
        }&page=1&pageSize=6&keyword=${
          this.searchwords["keyword"] ? this.searchwords["keyword"] : ""
        }`
      }).then(result => {
        // console.log(this.typeWords["SortKey"], result);
        return result;
      });
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
