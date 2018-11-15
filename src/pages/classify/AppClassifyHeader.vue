<template>
    <div class="appclassify-header">
        <div class="header-top">
            <div class="header-peoplehelp">
                <i class="fa fa-user-circle-o"></i>
            </div>
            <div class="header-search">
                <div class="search-title-box">
                    <i class="fa fa-search"></i>
                </div>
                <input type="text" placeholder="请输入关键字搜索作品">
            </div>
        </div>
    </div>
</template>


<script>
    export default {
     
    }
</script>

<style lang="scss">
    .appclassify-header {width: 100%;height: 1.386667rem;padding-top: 20px;border-bottom: 1px solid #f8f8f8;position:fixed;top:0;background:white;
        .header-top {width: 100%;height: .8rem;
            .header-peoplehelp {width: 1.2rem;height: .8rem;text-align: center;font-size: .5rem;float: left;}
        }
        .header-search {width: 8.426667rem;height: .8rem;background: #f2f2f2;border-radius: .053333rem;float: left;
            .search-title-box {width: .693333rem;height: .8rem;float: left;font-size: .5rem;text-align: center;float: left;margin-right: .266667rem;}
            input {width: 7.466667rem;height: .8rem;border: none;outline: none;background: #f2f2f2;}
        }
    }
</style>