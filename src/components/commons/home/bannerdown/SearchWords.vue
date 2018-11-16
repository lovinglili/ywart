<template>
    <div class="searchs">
        <div class="searchs-item">
            <ul>
                <template v-for="(searchword,key,index) in searchwords" >
                    <li  v-if="searchword!=''" :key="index" @click="changewords(key)" ref="lis">
                        {{searchword }}
                    </li>
                </template>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ["searchwords", "nocategory","ishasli"],
  methods: {
    changewords(key) {
        this.ishasli();
        if(key=="category"){
            this.nocategory();
        }else{
            this.searchwords[key] = "";
        }
    }
  }
};
</script>

<style lang="scss">
.searchs {
  box-sizing: border-box;
  overflow-x: auto;
  height: 1.173333rem;
  width: 100%;
  background: white;
  .searchs-item {
    margin-left: 0.373333rem;
    box-sizing: border-box;
    overflow-x: auto;
    height: 1.173333rem;
    width: 100%;
  }
  ul {
    width: 16rem;
    overflow: hidden;
    margin-top: 0.24rem;
    li {
      font-size: 0.346667rem;
      float: left;
      padding: 0.106667rem 0.266667rem;
      margin-right: 0.373333rem;
      background: #000;
      color: #fff;
    }
  }
}
</style>
