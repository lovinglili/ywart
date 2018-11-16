<template>
    <div class="home-search">
        <div class="search">
            <div class="input" >
                <span @click="goToList"></span>
                <input type="text" v-model="message">
            </div>
            <span class="release" @click="$emit('update:isShow',false)">取消</span>
        </div>
        <div class="history">
            <div class="history-words">
                <h2>搜索历史列表</h2>
                <span @click="clearData">清除</span>
            </div>
            <ul class="history-search">
                <li  v-for="item in historyDatas" :key="item.id" ref="liWords" @click="getLiMessage(item.id)">{{item.words}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import bus from "@utils/bus"
export default {
  data() {
    return {
      message: "",
      historyDatasId: JSON.parse(localStorage.historyDatasId || "0"),
      historyDatas: JSON.parse(localStorage.historyDatas || "[]")
    };
  },
  watch: {
    historyDatas: {
      deep: true,
      handler() {
        // 应该将新的historyDatas存放到localstorage
        localStorage.historyDatasId = this.historyDatasId;
        localStorage.historyDatas = JSON.stringify(this.historyDatas);
      }
    }
  },
  methods: {
    goToList() {
      //将数据放到historydatas数组中
      this.historyDatas.push({
        id: this.historyDatasId++,
        words: this.message
      });
      this.$nextTick(() => {
        this.$router.push({ name: "bannernav", query: { name: this.message } });
      });
    },
    clearData() {
      this.historyDatas = [];
       this.historyDatasId=0;
      localStorage.removeItem("historyDatas");
       localStorage.removeItem("historyDatasId");
    },
    getLiMessage(index){
        this.message=this.$refs.liWords[index].innerText;
        this.$router.push({ name: "bannernav", query: { name: this.message } });
    }
  }
};
</script>

<style lang="scss">
.home-search {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(243, 243, 243);
  z-index: 1000;
  .history {
    width: 100%;
    background: #fff;
    margin-top: 0.266667rem;
    .history-words {
      height: 1.173333rem;
      border-bottom: solid 0.026667rem #eeeeee;
      overflow: hidden;
      line-height: 1.173333rem;
      padding: 0 0.533333rem;
      h2 {
        font-size: 0.4rem;
        float: left;
        font-weight: normal;
      }
      span {
        float: right;
        font-size: 0.373333rem;
        color: #999999;
      }
    }
    .history-search {
      width: 100%;
      li {
        height: 1.173333rem;
        padding: 0 0.266667rem;
        border-bottom: solid 0.026667rem #eeeeee;
        overflow: hidden;
        line-height:1.173333rem;
      }
    }
  }
  .search {
    width: 100%;
    height: 1.333333rem;
    border-bottom: 0.026667rem solid #eeeeee;
    background: #fff;
    padding-top: 0.186667rem;
    display: flex;
    justify-content: space-between;
    .input {
      margin-left: 0.4rem;
      height: 0.906667rem;
      background: #f2f2f2;
      border-radius: 0.133333rem;
      width: 80%;
      display: flex;
      justify-content: space-between;

      span {
        width: 10%;
        height: 0.693333rem;

        background: url(https://cdn.ywart.com/search/ss.png) center no-repeat;
        background-size: 100%;
        display: inline-block;
        margin: 0.106667rem 0 0 0.32rem;
        margin-right: 0.213333rem;
      }
      input {
        height: 100%;
        width: 90%;
        background: #f2f2f2;
        outline: none;
        border: 0;
        border-radius: 0.133333rem;
        font-size: 0.373333rem !important;
      }
    }
    .release {
      display: block;
      width: 20%;
      width: 1.866667rem;
      height: 0.906667rem;
      line-height: 0.906667rem;
      text-align: center;
      font-size: 0.4rem;
      color: #666666;
    }
  }
}
</style>
