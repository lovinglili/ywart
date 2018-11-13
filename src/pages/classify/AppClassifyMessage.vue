<template>
    <div class="appclassify-checklist-item" ref = "appclassifyChecklistItem">
        
           <div class="checklist-content clearfix">
                
                <div class="checklist-item" 
                  v-for = "item in imgsArr"
                  :key = "item.ArtworkId"
                >
                    <img :src="newSrc+item.ImgName" alt = "" >
                    <div class="checklist-text">
                        <div class="text-head">
                            <a v-if = "item.Activities" href="">{{item.Activities[0].TagName}}</a>
                        </div>
                        <p>￥{{item.Price}}</p>
                        <div class="text-foot">
                            <a href="">{{item.Material}}</a><a href="">{{item.Title}}</a>
                        </div>
                    </div>
                </div>
          </div>  
    </div>
</template>

<script>


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
    
  },
  props: ["message"],
  methods: {
    getData() {
      this.page += 1;
      this.$http({
        url: "https://www.ywart.com/ajax/index",
        method: "post",
        data: `module=Goods.Buy&action=GetGoods&category=${this.message.category}&page=${this.page}&pageSize=12&theme=${this.message.theme}&price=${this.message.prise}&SortKey=${~~this.message.sort}`
        
      }).then(res => {
        // console.log(res.data.Data.Rows)
        // console.log(this.newArr)
        
        this.imgsArr = this.imgsArr.concat(res.data.Data.Rows);
        
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
  mounted () {
      this.scroll = scroll({
          // el: this.$el
        el: this.$refs.appclassifyChecklistItem,
     //   handler : this.getData()
        
      })
      
    

  }
}
</script>

<style lang="scss">
.appclassify-checklist-item {
  width: 9.6rem;
  background: white;
  height: 100vh;
  overflow: hidden;
  .img-wraper {
    height: auto !important;
  }
  img {
    width: 4.6rem !important;
  }
  .checklist-item {
    width: 4.6rem;
    float: left;
    margin: .093333rem;
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



.default-card-animation {
  display: inline;
}

.checklist-content {height: auto;}
</style>