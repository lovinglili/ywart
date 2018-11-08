<template>
<header>
    <div class="headerTop">
        <div class="headerTop-left"></div>
        <div class="headerTop-center"><input type="text" placeholder="输入关键字搜索作品"></div>
        <div class="headerTop-right"></div>
    </div>
    <div class="headerTops">
        <ul>
            <li @click="type.which='jing-xuan'">精选</li>
            <li @click="type.which='yuan-chuang'">原创</li>
            <li>精选</li>
            <li>精选</li>
            <li>精选</li>
        </ul>
    </div>
</header>
    
</template>

<script>
export default {
    data(){
        
    },
    props:["type"]
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  height: 2.613333rem;
  padding-top: .533333rem !important;
  .headerTops{
      height: 1.253333rem;
    line-height:  1.253333rem;
      ul{
          width:80%;
          margin:0 auto;
          display:flex;
          justify-content: space-between;
          li{
              flex-grow:1;
              color:#fff;
              text-align: center;
          }
      }
  }
  .headerTop{
      display:flex;
      justify-content: space-around;
          height: .8rem;
      .headerTop-left {
          width:10%;
        background: url(https://cdn.ywart.com/icon/headerKefuB.png) no-repeat center
          center;
        background-size: .693333rem !important;
        
      }
      .headerTop-center{
          width:80%;
          input{

                  display: block;
            width: 100%;
            height: 100%;
            outline: none;
            border: 0;
            background: #F2F2F2;
            padding-left:.266667rem;
          }
      }
      .headerTop-right{
          width:10%;
              background: url(https://cdn.ywart.com/icon/znx.png) no-repeat center center;
                background-size: .693333rem !important;
               
      }
  }

}
</style>
