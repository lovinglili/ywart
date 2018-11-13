<template>
    <div class="artindex-item">
        <div class="index-item"
            v-for = "item in message"
            :key = "item.code"
            v-if = "item.headimg"
        >
            <img :src="newSrc+item.headimg+urlHelp"  alt="">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["message"],
        data (){
            return {
                newSrc : "https://cdn.ywart.com/ysj/",
                urlHelp : "@120h_120w_1e_1c_1wh_1pr",
                specData : []
            }
        },
        beforeMount(){
            this.message.forEach(item => {
                if (item.headimg==null){
                    item.headimg = "https://cdn.ywart.com/content/image/avatar_default.jpg"
                    this.specData.push(item)
                    console.log(this.specData)
                }
            });
        }
        
    }
</script>

<style lang="scss">
    .artindex-item{padding-left: .533333rem;padding-right: .533333rem;background:white;
        .index-item{width: 1.6rem;height: 2.4rem;margin-left: .30rem;margin-right: .30rem;display:inline-block;}
        span{display: block;margin-top: .266667rem;font-size: 24px;color: #666;
        text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
    }
</style>