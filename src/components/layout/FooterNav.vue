<template>
    <ul class="footer-nav">
        <li v-for ="(footerData,index) in footerDatas" :key="index" @click="isShow(index)">
            <strong>{{footerData.title}}</strong>
        
            <span>+</span>
            <transition 
              name="fade"
             >
                <div v-if="footerData.isShow" class="items">
                    <a v-for ="(datas,index) in footerData.words" :key="index">{{datas}}</a>
                </div>
            </transition>
        </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      footerDatas: [
        {
          title: "YWART.com",
          words: ["精选", "原创艺术", "藏艺术", "艺居生活"],
          isShow: false
        },
        {
          title: "YWART.com",
          words: ["精选", "原创艺术", "藏艺术", "艺居生活"],
          isShow: false
        },
        {
          title: "YWART.com",
          words: ["精选", "原创艺术", "藏艺术", "艺居生活"],
          isShow: false
        },
        {
          title: "YWART.com",
          words: ["精选", "原创艺术", "藏艺术", "艺居生活"],
          isShow: false
        }
      ]
    };
  },
  methods: {
    isShow(indexs) {
      if (this.footerDatas[indexs].isShow) {
        this.footerDatas[indexs].isShow = false;
        return;
      }
      this.footerDatas.forEach((item, index) => {
        if (item.isShow) {
          item.isShow = false;
        }
        if (index == indexs) {
          item.isShow = true;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.footer-nav {
  li:last-of-type {
    border-bottom: 0.026667rem solid #eee;
  }
  li {
    box-sizing: border-box;
    border-top: 0.026667rem solid #eee;
    line-height: 1.013333rem;
    padding: 0 0.266667rem;
    strong {
      color: #676767;
      font-size: 0.373333rem;
      font-weight: normal;
    }
    span {
      float: right;
    }
    .items {
      padding: 0 0 0.266667rem 0.266667rem;

      a {
        display: block;
        color: #333;
        font-size: 0.32rem;
        line-height: 0.746667rem;
      }
    }
  }
}
</style>
