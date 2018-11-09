<template>
    <div class="banhua">BannerNav</div>
</template>

<script>
    
export default {
    created(){
        this.$http({
            url:"https://www.ywart.com/ajax/index",
            method:"POST",
            data:`module=Goods.Buy&action=GetGoods&category=${this.$route.query.name}&page=1&pageSize=6`
        }).then((result)=>{
            console.log(result,"result")
        })
    }
}
</script>

<style lang="scss">
.banhua{
        width:100vw;
        height:100vh;
        position:relative;
        background:#fff;
        bottom:0;
        left:0;
        z-index:999;
}
</style>
