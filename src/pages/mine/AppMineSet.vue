<template>
    <div class="app-mine-all">
        <div class="backbtn">
            <img src="https://cdn.ywart.com/content/image/closeInput.svg" alt="">
        </div>
        <div class="top-btn-list">
            <router-link active-class="active" class="login-btn" tag="div" to ="/mine/zhanghaodenglu">
                <a href="">账号登录</a>
                
            </router-link>
            <router-link active-class="active" tag="div" class="setup-btn"  to ="/mine/shoujidenglu">
                <a href="">手机号登录</a>
            </router-link>
        </div>
        <router-view></router-view>
        <div class="submit-btn">登录</div>
        <div class="other-btn-list">
            <span>忘记密码</span>
            <span style="margin-left:44px;margin-right:44px;border:none">|</span>
            <span>立即注册</span>
        </div>
        <div class="bottom-box">
            <h2>使用以下方式快速登录</h2>
            <div class="weibo-btn">
                <a href="">
                    <i class="fa fa-weibo"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                firstpath : "zhanghaodenglu",
                secondpath : "shoujidenglu"
            }
        }
    }
</script>

<style lang="scss">
    .app-mine-all {padding: 2.4rem  .533333rem  .533333rem .533333rem;height: 18.133333rem;background : white;position: relative;z-index: 9999;
        .backbtn {width: .666667rem;height: .666667rem;position: absolute;top: .266667rem;right: .266667rem;}
        .top-btn-list{height: .746667rem;margin-bottom: 1.493333rem;border-bottom: .053333rem solid lightgray;display: flex;justify-content: center;
            .login-btn {height: .72rem;margin-right: 1.893333rem;font-size: 34px;}
            .setup-btn {height: .72rem;font-size: 34px;}
        }


        .submit-btn {height: 1.066667rem;background: black;color: white;font-size: 36px;text-align: center;line-height: 80px;margin-top:1.6rem; }
        .other-btn-list{height: .533333rem;margin-top: .426667rem;text-align: center;
            span{border-bottom: 1px solid black;}
        }
        
        .bottom-box{height: 2.08rem;margin-top: 4.64rem;
            h2{font-size: 24px;font-weight: normal;text-align: center;margin-bottom: .586667rem;}
            .weibo-btn{height: 1.066667rem;display: flex;justify-content: center;
                a{display: block;width: 1.066667rem;height: 1.066667rem;border-radius: 50%;border: 2px solid black;text-align: center;line-height:1.066667rem;font-size: 40px }
            }
        }
    }

    .active {height: .72rem;font-size: 34px;border-bottom :4px solid black;font-weight: 700;}
</style>
