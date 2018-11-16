
<template>
    <div >
        
        <div class="appclassify" ref = "appclassify">
            <div class="classify-content">  
                
                <app-classify-checklist :scrolly = "scrolly">
                </app-classify-checklist>
            </div> 
        </div>
        <app-classify-header></app-classify-header>
    </div>
    
</template>
    
<script>
    import scroll from '@utils/scroll'
    import AppClassifyHeader from '@page/classify/AppClassifyHeader'
    import AppClassifyChecklist from '@page/classify/AppClassifyChecklist'
    export default {
        data () {
            return {
                scrolly : 0
            }
        }
        ,
        methods : {
            getscroll () {
               
            }
        }
        ,
        components : {
            AppClassifyHeader,
            AppClassifyChecklist
           
        },
        watch : {
           
        }
        
        ,
        mounted() {
           
            this.scroll = scroll({
                    // el: this.$el
                el: this.$refs.appclassify,
                handler : ()=>{},
                
            })
            this.scroll.on("scroll",()=>{
                this.scrolly = this.scroll.y
               
            })
        }

    }
</script>

<style lang = "scss">
    .appclassify{background: white;overflow: hidden;margin-top: 1.386667rem;height: 100vh;}
   
   
</style>
