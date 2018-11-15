<template>
<div>
    <div class="firstclass"><span>+86</span><input type="text" placeholder="请输入手机"></div>
    <div class="secondclas"><input type="text" placeholder="请输入验证码"><a href="">发送验证码</a></div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .firstclass{height: .853333rem;border-bottom: .013333rem solid black;
        span {margin-right: .533333rem;}
        input {outline: none;border: none;}
    }
    .secondclas{height: .853333rem;margin-top: .8rem;padding-left:1.226667rem;border-bottom: .013333rem solid black;
        input {outline: none;border: none;}
        a{display: inline-block;border-left: .053333rem solid gray;width: 2.666667rem;text-align: center;}
    }
</style>
