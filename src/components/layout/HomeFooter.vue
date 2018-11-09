<template>
    <footer>
        <section class="appdownload">
            <div class="logo"><img src="https://cdn.ywart.com/content/image/appicon.png"></div>
            <div class="info">
                <p class="p1">有艺网，你的App圈更具艺术范儿</p>
                <p class="p2">海量作品  购买便捷  实景体验</p>
            
            </div>
            <div class="apple">
                    <a href="https://itunes.apple.com/us/app/yi-wang/id1142923429?mt=8"><img src="https://cdn.ywart.com/content/image/IOSBlackDL.png" alt=""></a>
            </div>
            <div class="android">
                    <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ywart.android"><img src="https://cdn.ywart.com/content/image/AndroidBlackDL.png" alt=""></a>
            </div>
        </section>
        <div class="footer-nav">
            <footer-nav>
            </footer-nav>
        </div>
    </footer>
</template>

<script>
import FooterNav from "@c/layout/FooterNav"
export default {
    components:{
        FooterNav
    }

}
</script>

<style lang="scss">
footer{
   box-sizing: border-box;
    width: 100%;
    color: #333;
    padding: 0 .266667rem 1.546667rem .266667rem;
    margin-top: .266667rem;
    background-color: #fff;
    .footer-nav{
         margin-bottom:.266667rem;
    }
    .appdownload{
        height:10.4rem;
    }
    .logo{
       height: 4.266667rem;
    text-align: center;
    padding: .8rem;
        img{
            height:100%;
        }
    }
    .info{
        text-align:center;
     
        .p1{
            font-size: .48rem;
            letter-spacing: .053333rem;
            color: #000000;
            text-align: center;
        }
        .p2{
            font-weight: bold;
        }
    }
    .apple{
            margin-top: 1.066667rem;
            height: 1.066667rem;
            text-align: center;
            img{
                height:100%;
            }
    }
    .android{
         margin-top: .533333rem;
            height: 1.066667rem;
            text-align: center;
            img{
                height:100%;
            }
    }
}

</style>
