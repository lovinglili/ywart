<template>
    <div class="zyworks-container">
        <h3>造艺作品</h3>
        <ul>
            <li class='li_item'>
                <div class="li_img">
                    <a >
                        <img src="https://cdn.ywart.com/yw/20170210122418979ba81e3c3.jpg_small01">
                    </a>
                </div>
                <div class="li_words">
                    <div class="activity">
                        <a>囤画节</a>
                    </div>
                    <p class="price">￥1232</p>
                    <div class="woInFo">
                        <a>泛太克美术纸</a>
                        <a>，</a>
                        <a>不变的发生的</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:["indexDatas"]
};
</script>

<style lang="scss">
.zyworks-container {
  background: #fff;
  margin-top: 0.266667rem;
  h3 {
    width: 100%;
    height: 1.333333rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.333333rem;
    font-size: 17px;
    margin-bottom: 0.213333rem;
    padding-top: 0.213333rem;
  }
  ul {
    width: 98%;
    margin: 0 auto;
    position: relative;
    height: 13.333333rem;
    li {
      width: 46%;
      margin: 3% 2%;
      position: absolute;
    }
    .li_img {
      a {
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .li_words {
      padding: 0.266667rem 0 0 0;
      .activity {
        font-size: 11px;
        line-height: 18px;
        text-align: right;
        margin-bottom: 1px;
        a {
          color: #f27875;
          background: #ffe9e9;
          padding: 0 5px;
          height: 0.48rem;
          text-align: center;
          display: inline-block;
          margin-left: 0.08rem;
        }
      }
      p.price {
        font-size: 12px;
        text-align: right;
        margin-bottom: 0.026667rem;
      }
      .woInFo {
        color: #666;
        text-align: right;
        font-size: 0;
        a {
          color: #666;
          font-size: 12px;
          display: inline-block;
        }
        a:last-child,a:first-child {
          max-width: 2rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
