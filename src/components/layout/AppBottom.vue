<template>
   <div class='bottom-nav'>
       <router-link active-class="active"  tag='div' ref='show' class="bottom-nav-item"  v-for= 'nav in navs' :key= 'nav.id'  :to='nav.path'  >
            <div class= "imgs">
                <img  class='img1' :src="nav.img" alt="" >
                <img class="img2" :src="nav.checkimg" alt="" >
            </div>
            
            <span>{{nav.title}}</span>
        </router-link>
     
   </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      navs: [
        {
          id: 1,
          title: "首页",
          path: "/home",
          img: "https://cdn.ywart.com/icon/footerIcon/index.png",
          checkimg: "https://cdn.ywart.com/icon/footerIcon/indexs.png",
        
        },
        {
          id: 2,
          title: "分类",
          path: "/classify",
          img: "https://cdn.ywart.com/icon/footerIcon/fl.png",
          checkimg: "https://cdn.ywart.com/icon/footerIcon/fls.png",

        },
        {
          id: 3,
          title: "艺术家",
          path: "/artist",
          img: "https://cdn.ywart.com/icon/footerIcon/ys.png",
          checkimg: "https://cdn.ywart.com/icon/footerIcon/yss.png",
       
        },
        {
          id: 4,
          title: "购物车",
          path: "/cart",
          img: "https://cdn.ywart.com/icon/footerIcon/car.png",
          checkimg: "https://cdn.ywart.com/icon/footerIcon/cars.png",
         
        },
        {
          id: 5,
          title: "我",
          path: "/mine",
          img: "https://cdn.ywart.com/icon/footerIcon/me.png",
          checkimg: "https://cdn.ywart.com/icon/footerIcon/mes.png",
       
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  background:#fff;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  width: 100%;
  .bottom-nav-item {
    flex-grow: 1;
    width:2rem;
    &.active  {
        span{
            color: #000;
        }
        .img1{
           top:-0.586667rem;
        }
        .img2{
            top:0;
        }
    };
  }
  .imgs{
      overflow: hidden;
       width: 0.586667rem;
        height: 0.586667rem;
        margin: 0 auto;
        margin-top: .213333rem;
        position:relative;
        img{
            display: block;
            width: 0.586667rem;
            height: 0.586667rem;
        }
      .img1 {
        position:absolute;
        top:0;
        left:0;
      }
      .img2{
            position:absolute;
            top:0.586667rem;
            left:0;
      }
  }
  span {
    display: block;
    text-align: center;
    margin-top: .08rem;
    font-size: .333333rem;
    color:#565656;
  }
}
</style>
