<template>
    <div class="art-newmessage">
        <h3 class="message-title">艺术家动态</h3>
        <div class="message-wraper" ref = "messageWraper">
            <div class="message-content">
                <div class="message-item"
                    v-for = "item in newMessage"
                    :key = "item.ViewCount"
                >
                    <a :href="item.Url">
                        <img :src="item.ImgUrl" alt="">
                    </a>
                    <div class="message-include">
                        <p>{{item.Title}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import scroll from '@utils/scroll'
    export default {
        data () {
            return  {
                newMessage: []
            }
        },
        beforeCreate () {
            this.$http({
                url: "https://openapi.ywart.com/2.0/api/AppView/Page/YSY?category=%E8%89%BA%E6%9C%AF%E5%AE%B6%E5%8A%A8%E6%80%81&_=1542111739785",
                method: "get",
                data: ''
                
            }).then(res => {
                // console.log(res.data.Data.Rows)
                // console.log(this.newArr)
                
                this.newMessage = res.data.Body
               // console.log(this.newMessage)
               
                    
                    
            });
        },
        mounted (){
            
            setTimeout(()=>{
              //  console.log(this.newMessage,123457)
              //  console.log(document.getElementsByClassName("message-content"))
                this.scroll = scroll({
                    // el: this.$el
                    el: this.$refs.messageWraper,
                    handler : ()=>{}
                    //   handler : this.getData()
                    
                })
            },100)
                
        }
    }
</script>

<style lang="scss">
    .art-newmessage{height: 8.466667rem;padding-left: .746667rem;padding-right: .746667rem;padding-bottom:.266667rem;background: white;margin-top: .266667rem;}
    .message-title{padding: .533333rem 0 ;font-size: .453333rem;text-align: center;}
    .message-item{height: 6.533333rem;float:left;margin-right:.533333rem;
        img{height: 5.146667rem;width: 8.506667rem;}
        .message-include{padding-top:.32rem;
            p{width: 100%;max-height: .506667rem;font-size: 28px;font-weight: bold;font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;color: #000000;text-align: left;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
        }
    }
    .message-wraper{width: 8.52rem;overflow: hidden;}
    .message-content{height: 6.533333rem;width: 37.333333rem;}
</style>