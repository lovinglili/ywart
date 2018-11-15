<template>
  <div id="app">
    <main>
     <router-view name="main"></router-view>
     <router-view name="noBottomnav"></router-view>
     <app-bottom></app-bottom>
    </main>
   
     
    
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
.app,main{
    // overflow: aut?o;
    height:100vh;
}

</style>
