<template>
  <div id="app">
    <main>
     <router-view name="main"></router-view>
     <app-bottom></app-bottom>
    </main>
    <hr>
     <router-view name="noBottomnav"></router-view>
    
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
