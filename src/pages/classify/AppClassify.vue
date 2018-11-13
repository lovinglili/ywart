
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
            this.$nextTick(() => {
                scroll({
                   el: this.$refs.appclassify
                })
            })
        }
    }
</script>

<style lang = "scss">
    .appclassify{background: white;height: 100%;overflow: hidden;}
   
</style>
