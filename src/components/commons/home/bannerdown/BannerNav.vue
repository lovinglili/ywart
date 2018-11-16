<template>
    <div class="home-pic-search">
        <header class="headerMin">
            <div class="header-search">
                <!-- <div class="back"></div> -->
                <router-link tag="div" class="back" to="home"></router-link>
                <div class="header-input-out">
                    <div class="search-input">
                        <span></span>
                        <input ref="inputs" type="text" placeholder="输入关键字搜索作品" @keyup.enter="enterSearch">
                     </div>
                </div> 
            </div>
        </header>
        <div class="search-down">
            <search-words ref="ul" v-if="searchWords.keyword || searchWords.category" :searchwords="searchWords" :nocategory="noCategory" :ishasli="isHasLi"></search-words>
            <div class="appear-pic-type">
                <div class="appear">

                <div class="appear-left">
                    <ul>
                        <li v-for="item in types" 
                            :key="item.id"
                            @click="type = item.type"
                            :class = "{active_class: item.type === type}"
                            > 
                            <a>{{item.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="appear-right">
                    <a>筛选</a>
                </div>
                </div>
            </div>
        </div>
        <search-list :searchwords="searchWords" :type="type" :ishasli="isHas"></search-list>
        <!-- list -->
    </div>
</template>

<script>
import SearchWords from "./SearchWords";
import SearchList from "./SearchList";
export default {
  components: {
    SearchWords,
    SearchList
  },
  data() {
    return {
      types: [
        { id: 1, title: "综合排序", type: "total-sort" },
        { id: 2, title: "热度排序", type: "hot-sort" },
        { id: 3, title: "价格排序", type: "price-sort" }
      ],
      type: "total-sort",
      searchWords: { category: "" },
      isHas: true
    };
  },
  methods: {
    enterSearch() {
      this.$set(this.searchWords, "keyword", this.$refs.inputs.value);
       this.isHas = true;
    },
    noCategory() {
      this.$route.query.category = "";
      this.$set(this.searchWords, "category", this.$route.query.category);
    },
    isHasLi() {
      if (this.$refs.ul.$refs.lis.length == 1) {
        this.isHas = false;
      } else {
        this.isHas = true;
      }
      // console.log(this.isHas);
    }
  },
  mounted() {
    //  this.$set(this.searchWords, "category",  this.$route.query.category);
    this.searchWords["category"] = this.$route.query.category;
  }
};
</script>

<style lang="scss">
.home-pic-search {
  width: 100vw;
  height: 100vh;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 999;
  .headerMin {
    background: #fff;
    height: 1.413333rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 0.266667rem !important;
    border-bottom: 1px solid #f8f8f8;
    box-sizing: border-box;
    .header-search {
      height: 0.8rem;

      display: flex;
      justify-content: space-around;
      .back {
        background: url(https://cdn.ywart.com/icon/JianTou/backJt.png) no-repeat
          center center;
        height: 100%;
        width: 15%;
      }
      .header-input-out {
        width: 85%;
        border-radius: 4px;
        background: white;
        .search-input {
          width: 90%;
          background: #f2f2f2;
          height: 100%;
          display: flex;
          justify-content: space-between;
          span {
            background: url(https://cdn.ywart.com/search/ss.png) no-repeat
              center right;
            display: inline-block;
            height: 100%;
            width: 10%;
            background-size: 0.533333rem;
            margin-right: 0.266667rem;
          }
          input {
            border-radius: 4px;
            display: block;
            height: 100%;
            width: 90%;
            outline: none;
            border: 0;
            background: #f2f2f2;
          }
        }
      }
    }
  }
  .search-down {
    position: fixed;
    width: 100%;
    top: 1.413333rem;
    z-index: 12;
  }
  .appear-pic-type {
    height: 1.0666667rem;
    background: white;
    width: 100%;
    .appear {
      justify-content: space-between;
      text-align: center;
      border-top: 1px solid #ccc;
      display: flex;
      height: 100%;
    }
    .appear-left {
      width: 75%;
      height: 100%;
      ul {
        display: flex;
        justify-content: space-between;
        height: 100%;
        li {
          width: 33.333%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          a {
            color: #333333;
            padding-right: 0.32rem;
            box-sizing: border-box;
            display: inline-block;
          }
        }
        .active_class {
          a {
            font-weight: bold;
            color: #000;
            background: url(https://cdn.ywart.com/icon/JianTou/PxJt.png)
              no-repeat center right;
            background-size: 0.16rem 0.106667rem;
          }
        }
      }
    }
    .appear-right {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #ccc;
      a {
        background: url(https://cdn.ywart.com/icon/ShaiXuan/sxct.png) no-repeat;
        background-size: 24px !important;
        padding-right: 28px !important;
        background-position: right 6px !important;
        color: #333;
      }
    }
  }
}
</style>
