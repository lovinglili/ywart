<template>
    <div>
        <div class="part-title"> 
            <h2  class="part">{{title}}</h2>
            <p class="part-small">{{smallwords}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:["title","smallwords"]
};
</script>

<style lang="scss">
.part-title {
    text-align: center;
    h2{
        
            font-size: .453333rem;
            margin-bottom: .053333rem;
            font-weight: bold;
    }
    p{
            text-align: center;
            font-size: .32rem;
            color: #a4a3a3;     
    }
  }
</style>
