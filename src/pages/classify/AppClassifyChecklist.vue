<template>
    <div class="appclassify-check">
        <div class="appclassify-checklist">
            <div class="checklist-item" 
                v-for = "value in checktitle"
                :key = "value.id"
            >
                <h4 class="item-title">{{value.name}}</h4>
                <div class="ulbox">    
                    <ul class="ulcontent">
                        <li
                            v-for = "i in value.connect"
                            :key = "i"
                            @click = "text"
                        >{{i}}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="appclassify-checkbtn">
            <ul>
                <li class="checkbtn-onestyle" >综合排序</li>
                <li class="checkbtn-onestyle">热度排序</li>
                <li class="checkbtn-onestyle">价格排序</li>
                <li class="checkbtn-twostyle">筛选</li>
            </ul>
        </div>

        <div class="appclassify-checkresult">
           <app-classify-message :message = "urlmessage"></app-classify-message>
        </div>    
        


    </div>    



    
   
</template>

<script>
    import AppClassifyMessage from '@page/classify/AppClassifyMessage'
    import scroll from '@utils/scroll'
    export default {
        data () {
            return {
                checktitle :{
                    first :  { name :"分类" ,connect : {a:"油画",b:"版画",c:"水墨",d:"水彩(粉)",e:"雕塑",f:"摄影",g:"书法",h:"其他"},id : "0"},
                    second :  { name :"题材" ,connect : {a:"风景",b:"人物",c:"静物",d:"动物",e:"花鸟",f:"山水",g:"其他"} ,id : "1"},
                    third :  { name :"价格区间" ,connect : {a:"￥2,000以下",b:"￥2,000-￥8,000",c:"￥8,000-￥15,000",d:"￥15,000-￥30,000",e:"￥30,000以上"},id : "2"},
                },
                urlmessage : {
                    category : '',
                    theme : '',
                    price : ''
                },
                getmessage : ''
            }
        },
        components : {
            AppClassifyMessage
        },
        methods : {
            text:function(e) {
                let dom = e.target
                let first =Object.values(this.checktitle.first.connect) 
                let second = Object.values(this.checktitle.second.connect) 
                let third = Object.values(this.checktitle.third.connect)
                if (!this.getmessage){
                    this.getmessage = dom.innerHTML
                }else {
                    if (this.getmessage == dom.innerHTML){
                        this.getmessage = ""
                    }else {
                        this.getmessage = dom.innerHTML
                    }
                }
                
                console.log(dom.innerHTML)
                console.log(first.indexOf(this.getmessage))
                if (first.indexOf(this.getmessage)>=0){
                    this.urlmessage.category = this.getmessage
                }else if (second.indexOf(this.getmessage)>=0){
                    this.urlmessage.theme = this.getmessage
                }else {
                    this.urlmessage.price = this.getmessage
                }
                console.log(this.urlmessage)
            }
            
        },
        mounted(){
            // this.$nextTick(() => {
            //     scroll({
            //         el: this.$refs.ulcontent
            //     })
            // })
        }
    }
</script>

<style lang="scss">
    .appclassify-check {height:100vh;padding-bottom: 2.666667rem;margin-top:1.12rem}
    .appclassify-checklist {
        .checklist-item {margin-left: .373333rem;margin-bottom: .426667rem;height: .693333rem;width:10.133333rem;
            .item-title{height: .693333rem;padding-right: 20px;margin-right: 5px;border-right:1px solid #dddddd;font-weight: normal;line-height: .693333rem;float: left }
            ul{height:.666667rem;width:auto;width:16rem;
                li{height: .666667rem;padding: .106667rem  .266667rem;display: inline-block;line-height: .533333rem;font-size: .346667rem;color: #666666;}
            }
        }  
    }
    .appclassify-checkbtn {height: 1.066667rem;border-top: .013333rem solid #eeeeee;
        ul {height: 1.066667rem;
            li {display: block;float: left;line-height: 1.066667rem;text-align: center;font-size: .346667rem;}
            .checkbtn-onestyle {width: 2.666667rem;height: 1.066667rem;}
            .checkbtn-twostyle {width: 2rem;height: 1.066667rem;border-left: .013333rem solid #dddddd ;}
        }
    }
    .appclassify-checkresult {padding: .213333rem .213333rem 1.333333rem .213333rem;height:100%;}

    .ulbox {width: 8rem;float: left;height: 1.333333rem;overflow: hidden;
        
    }

   
</style>
