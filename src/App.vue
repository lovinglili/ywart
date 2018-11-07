<template>
  <div id="app">
    <main>
     <router-view></router-view>
    </main>
    <app-bottom>
    </app-bottom>
  </div>
</template>
<script>
    
import AppBottom from '@c/layout/AppBottom';
    export default {
      components:{
        AppBottom
      }
    }
</script>

<style lang="scss">

</style>
