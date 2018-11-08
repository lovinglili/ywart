<template>
    <div class="appclassify">
        <app-classify-header></app-classify-header>
        <app-classify-checklist>
        </app-classify-checklist>
        
    </div>
    
    
</template>
    
<script>
    import AppClassifyHeader from '@page/classify/AppClassifyHeader'
    import AppClassifyChecklist from '@page/classify/AppClassifyChecklist'
    export default {
        components : {
            AppClassifyHeader,
            AppClassifyChecklist
           
        }
    }
</script>

<style>

</style>
