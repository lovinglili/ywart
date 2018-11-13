<template>
    <div class="artoldstar">
        <h3 class="artoldstar">往期艺网之星</h3>
        <div class="artoldstar-message">
            <div class="artoldstar-head">
                <div class="person-img">
                    <a href="">
                        <img src="https://cdn.ywart.com/ysj/20170526104431792f3c18cf5.png@120h_120w_1e_1c_1wh_1pr" alt="">
                    </a>
                </div>
                <div class="person-message">
                    <h5>
                        <a href="">张鑫</a>
                    </h5>
                    <div class="person-message-minute">
                        <p class="first-message">出生于天津天津美术学院油画系，硕士现居北京</p>
                        <p class="second-message">作品&nbsp;14</p>
                    </div>
                </div>
            </div>
            <div class="artoldstar-wraper">
            <div class="artolderstar-content">
                <div class="artoldstar-item">
                    <a href="">
                        <img src="https://cdn.ywart.com/yw/2017052610461216630e1b173.jpg@232h_296w_1e_1c_1wh" alt="">
                    </a>
                    <p>￥6,120</p>
                    <span>衡</span>
                </div>
            </div>
            </div>
        </div>    
    </div>
</template>

<script>
    export default {
     
    }
</script>

<style lang="scss">
    .artoldstar{padding: .533333rem 0 ;text-align: center;font-size: 34px;background: white;margin-top: .266667rem;}
    .artoldstar-message{height: 6.08rem;padding-top: .533333rem;
        .artoldstar-head{height: 1.066667rem;padding-left:.533333rem;padding-right: .32rem;margin-bottom: .4rem;
            .person-img{width: 80px;height: 80px;float: left;margin-right:28px;
                img{width: 1.066667rem;height: 1.066667rem;}
            }
            .person-message{height: 80px;float: left;
                h5{margin-bottom: .106667rem;text-align:left;
                    a{color: inherit;text-decoration: none;font-size: 28px;font-weight: normal;}
                }
                .person-message-minute{position: relative;width:574px;
                   .first-message{width: 5.12rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 24px}
                    p{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 24px}
                    .second-message{position: absolute;right: 0;top: 0;}
                }
            }
        }
        .artoldstar-wraper{
            .artolderstar-content{
                .artoldstar-item{width: 3.946667rem;height: 4.066667rem;font-size: 24px;
                    p{text-align: right;}
                    span{display: block;float: right;}
                }
            }
        }
    }
</style>