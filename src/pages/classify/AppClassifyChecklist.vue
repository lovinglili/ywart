<template>
    <div class="appclassify-check">
        <div class="appclassify-checklist">
            <div class="checklist-item" 

            >
                <h4 class="item-title">分类</h4>
                <div class="ulbox ulbox1" ref = "ulbox1">    
                    <ul class="ulcontent" >
                        <li
                            v-for = "i in firstlist.connect"
                            :key = "i"
                            @tap = "text"
                        >{{i}}</li>
                    </ul>
                </div>
            </div>
            <div class="checklist-item" 
            >
                <h4 class="item-title">题材</h4>
                <div class="ulbox ulbox2" ref = "ulbox2">    
                    <ul class="ulcontent">
                        <li
                            v-for = "i in secondlist.connect"
                            :key = "i"
                            @tap = "text"
                        >{{i}}</li>
                    </ul>
                </div>
            </div>
            <div class="checklist-item" 
            >
                <h4 class="item-title">价格区间</h4>
                <div class="ulbox ulbox3" ref = "ulbox3">    
                    <ul class="ulcontent" >
                        <li
                            v-for = "i in thirdlist.connect"
                            :key = "i"
                            @tap = "text"
                        >{{i}}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="appclassify-checkbtn" id="checklist-btn">
            <ul>
                <li class="checkbtn-onestyle" @click = "allcheck">综合排序</li>
                <li class="checkbtn-onestyle" @click = "hotcheck">热度排序</li>
                <li class="checkbtn-onestyle" @click = "pricecheck">价格排序</li>
                <li class="checkbtn-twostyle" @click = "othercheck">筛选</li>
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
                
                firstlist :  { name :"分类" ,connect : {a:"油画",b:"版画",c:"水墨",d:"水彩(粉)",e:"雕塑",f:"摄影",g:"书法",h:"其他"},id : "0"},
                secondlist :  { name :"题材" ,connect : {a:"风景",b:"人物",c:"静物",d:"动物",e:"花鸟",f:"山水",g:"其他"} ,id : "1"},
                thirdlist :  { name :"价格区间" ,connect : {"0~2000":"￥2,000以下","2000~8000":"￥2,000-￥8,000","8000~15000":"￥8,000-￥15,000","15000~30000":"￥15,000-￥30,000",e:"￥30,000以上"},id : "2"},
                
                urlmessage : {
                    category : '',
                    theme : '',
                    price : '',
                    sort : '',
                    refresh : 0
                },
                getmessage : '',
                hotmessage : false,
                pricemessage : 0,
                allcheckmessage : false
            
            }
        },
        components : {
            AppClassifyMessage
        },
        methods : {
            text:function(e) {
                let dom = e.target
                let newdom =  dom.parentNode.childNodes 
                newdom.forEach(item => {
                    item.classList.remove('liactive')
                });
                
                if (dom.className == ""){
                    dom.classList.add("liactive")
                }else {
                    dom.classList.remove("liactive")
                }
                
                //dom.classList.toggle('liactive')
                // e.stopPropagation()
                // e.preventDefault()
                let first =Object.values(this.firstlist.connect) 
                let second = Object.values(this.secondlist.connect) 
                let third = Object.values(this.thirdlist.connect)
                if (!this.getmessage){
                    this.getmessage = dom.innerHTML
                }else {
                    if (this.getmessage == dom.innerHTML){
                        this.getmessage = ""
                    }else {
                        this.getmessage = dom.innerHTML
                    }
                }
                
               
                if (first.indexOf(this.getmessage)>=0){
                    this.urlmessage.category = this.getmessage
                }else if (second.indexOf(this.getmessage)>=0){
                    this.urlmessage.theme = this.getmessage
                }else {
                    switch (this.getmessage) {
                        case "￥2,000以下" : this.urlmessage.price = '0～2000';break;
                        case "￥2,000-￥8,000" : this.urlmessage.price = '2000～8000';break;
                        case "￥8,000-￥15,000" : this.urlmessage.price = '8000～15000';break;
                        case "￥15,000-￥30,000" : this.urlmessage.price = '15000～30000';break;
                        case "￥30,000以上" : this.urlmessage.price = '30,000以上';break;
                    }
                }
                
            },
            hotcheck () {
                this.hotmessage = !this.hotmessage
                if (this.sortmessage) {
                    this.urlmessage.sort = 7
                }
                console.log(this.urlmessage.sort)
            },
            pricecheck () {
                this.pricemessage  = this.pricemessage +1
                if (this.pricemessage == 1 ){
                    this.urlmessage.sort = 1
                }else if (this.pricemessage == 2) {
                    this.urlmessage.sort = 2
                }else {
                    this.urlmessage.sort = ''
                }

                if (this.pricemessage >= 3){
                    this.pricemessage = 0
                }
            },
            allcheck(){
                this.allcheckmessage = !this.allcheckmessage 
                
                if (this.allcheckmessage){
                    this.urlmessage.refresh = 1
                }else {
                    this.urlmessage.refresh = 0
                }
            },
            othercheck(){}
            
        },
        mounted(){
           this.$nextTick(() => {
                scroll({
                   el: this.$refs.ulbox1,
                   handler : ()=>{}
                })
                scroll ({
                    el:this.$refs.ulbox2,
                    handler : ()=>{}
                })
                scroll ({
                    el:this.$refs.ulbox3,
                    handler : ()=>{}
                })
            })
            let  scrollTop = document.body.scrollTop
            console.log(scrollTop)
        }
    }
</script>

<style lang="scss">
    .appclassify-check {padding-bottom: 2.666667rem;}
    .appclassify-checklist {
        .checklist-item {margin-left: .373333rem;margin-bottom: .426667rem;height: .693333rem;width:10.133333rem;
            .item-title{height: .693333rem;padding-right: 20px;margin-right: 5px;border-right:1px solid #dddddd;font-weight: normal;line-height: .693333rem;float: left }
            ul{height:.666667rem;
                li{height: .666667rem;padding: .106667rem  .266667rem;display: inline-block;line-height: .533333rem;font-size: .346667rem;color: #666666;margin-right: .266667rem;}
            }
        }  
    }
    .appclassify-checkbtn {height: 1.066667rem;border-top: .013333rem solid #eeeeee;
        ul {height: 1.066667rem;
            li {display: block;float: left;line-height: 1.066667rem;text-align: center;font-size: .346667rem;}
            .checkbtn-onestyle {width: 2.666667rem;height: 1.066667rem;}
            .checkbtn-twostyle {width: 2rem;height: 1.066667rem;border-left: .013333rem solid #dddddd ;font-weight: 700}
        }
    }
    .appclassify-checkresult {padding: .213333rem .213333rem 1.333333rem .213333rem;height: 100vh;overflow: hidden;}

    .ulbox {width: 8rem;float: left;height: .666667rem;overflow: hidden;
        
    }
    .ulbox1{
        ul{width: 12.666667rem;}
    }
    .ulbox2{
        ul{width: 10.666667rem;}
    }
    .ulbox3 {
        ul {width: 17.333333rem;}
    }

    .liactive{background: black;color :white!important;font-weight: 500}

    
</style>
