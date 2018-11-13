<template>
    <div class="art-search-box">
        <div class="art-search-head">
            <span class="searchimg-box">
            </span>
            <input type="text" placeholder="搜索艺术家">
           
            
        </div>
    </div> 
</template>

<script>
    export default {
     
    }
</script>

<style lang="scss">
    .art-search-box{height: 1.413333rem;padding-top: .266667rem;border-bottom: 1px solid #f2f2f2;position:fixed;width:100%;background:white;
        .art-search-head{height: .8rem;text-align: center;display:flex;justify-content: center;
            .searchimg-box{display: inline-block;height: .8rem;width: .72rem;border-radius: .133333rem;background:url(https://cdn.ywart.com/search/ss.png) no-repeat center right }
            span{background: #F2F2F2;font-size: .48rem;}
            input {background: #F2F2F2;width: 8.266667rem!important;height: .8rem;border: none;outline: none;border-radius: .133333rem;}
        }
    }
</style>