
<template>
    <div >
        
        <div class="appclassify" ref = "appclassify">
            <div class="classify-content">  
                
                <app-classify-checklist>
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
        components : {
            AppClassifyHeader,
            AppClassifyChecklist
           
        },
        mounted() {
            this.scroll = scroll({
                    // el: this.$el
                el: this.$refs.appclassify,
                handler : ()=>{}
                // onscroll: (y) => {
                    
                // }
            })
        }

    }
</script>

<style lang = "scss">
    .appclassify{background: white;overflow: hidden;margin-top: 1.386667rem;height: 100vh;}
   
   
</style>
