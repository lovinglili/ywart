<template>
    <div class="appclassify-checklist-item clearfix" >
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom = "getData">
            <div class="checklist-item clearfix" slot-scope="props">
                <img :src="newSrc+props.value.ImgName" alt = "" >
                <div class="checklist-text">
                    <div class="text-head">
                        <a v-if = "props.value.Activities" href="">{{props.value.Activities[0].TagName}}</a>
                    </div>
                    <p>￥{{props.value.Price}}</p>
                    <div class="text-foot">
                        <a href="">{{props.value.Material}}</a><a href="">{{props.value.Title}}</a>
                    </div>
                </div>
            </div>
        </vue-waterfall-easy>
        
    </div>
</template>


<script>
    import vueWaterfallEasy from 'vue-waterfall-easy'
    export default {
        name : "app",
        data () {
            return {
                imgsArr : [],
                newArr : [],
                page :0 ,
                newSrc : "https://cdn.ywart.com/yw/"
            }
        },
        components: {
            vueWaterfallEasy
        },
        props : {
            timeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
                type: Number,
                default: 500
    }
        },
        methods : {
            getData() {
                this.page +=1;
                this.$http({
                    url : "https://www.ywart.com/ajax/index",
                    method : "post",
                    data : `module=Goods.Buy&action=GetGoods&page=${this.page}&pageSize=10`
                }).then(res => {
                // console.log(res.data.Data.Rows)
                   this.newArr = res.data.Data.Rows;
                // console.log(this.newArr)
                  this.imgsArr= this.imgsArr.concat(this.newArr)
                console.log(this.page,this.imgsArr)

                });
            }
        },
        created () {
            this.getData()
        }
    }
</script>

<style lang="scss">
    .appclassify-checklist-item{width: 9.6rem;height:80%!important;
        .img-wraper {height: auto !important;}
        img{width: 4.6rem !important;}
        .checklist-item {width: 4.6rem;
            .checklist-text {width: 4.333333rem;height: 2.533333rem;padding:.266667rem .133333rem;font-size: .346667rem;float: left;text-align: right;
                .text-foot{
                    a{display:block;float: right;overflow: hidden;}
                }
            }
        }
    }

    .clearfix{overflow:auto;height:1%}

   

    .vue-waterfall-easy {position: relative!important;}
    
</style>