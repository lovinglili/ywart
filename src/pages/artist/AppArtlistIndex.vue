<template>
    <div class="artindex">
        <h3 class="artindex-title">艺术家索引</h3>
        <div class="artindex-btnbox">
            <button 
                v-for = "item in indexs"
                :key = "item"
                @click = "getData"
            >{{item}}</button>
        </div>
        <div class="artindex-port">{{sign}}</div>
        <app-artlist-indexitem :message = "arrData"></app-artlist-indexitem>
    </div>
</template>

<script>
    import AppArtlistIndexitem from '@page/artist/AppArtlistIndexitem'
    export default {
        data(){
            return {
                indexs : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],
                sign : 'A',
                arrData : [],
                specData  : []
            }
        },
        components : {
            AppArtlistIndexitem
        },
        methods : {
            getData(e) {
                let doms = e.target
                this.sign = doms.innerHTML
                this.getmessage()
            },
            getmessage () {
                this.$http({
                    url: "https://www.ywart.com/ajax/index",
                    method: "post",
                    data: `module=Common.WebMap&action=GetArtistByFirstLetter&firstletter=${this.sign}`
                    
                }).then(res => {
                    this.arrData = res.data.Data
                });
            }
        },
        
        mounted () {
            this.getmessage()
        }
    }
</script>

<style lang="scss">
    .artindex-title{padding: .533333rem 0 ;text-align: center;font-size: 34px;font-weight: bold;}
    .artindex-btnbox{height: 1.973333rem;padding-left: .533333rem;padding-right: .533333rem;box-sizing: border-box;letter-spacing: 14.4px;outline: none;
        button {display: inline-block;font-size: 32px;width: 26px;
        background: none;outline: none;border: 0;margin: 0;padding: 0;line-height: 1.56;
        font-weight: bold;align-items: flex-start;text-align: center;cursor: default;
        text-rendering: optimizeLegibility;letter-spacing: normal;word-spacing: normal;
        text-transform: none;text-indent: 0px;text-shadow: none;box-sizing: border-box;
        width: .8rem;color: buttontext;
        }
    }
    .artindex-port{margin:.533333rem;font-size: 32px;color: buttontext;font-weight: bold;margin-left: 57px;}
</style>