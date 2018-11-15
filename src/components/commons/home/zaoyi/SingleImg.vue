<template>
<div>
        <div class="more-img" v-for="(img ,index) in moreImg" :key="index">
            <img :src="img.ImgUrl">
        </div>
    </div>
</template>

<script>
export default {
  props: ["moreImg"]
};
</script>

<style lang="scss">
.more-img{
              width: 92%;
        margin: 0 auto;
        margin-top: .4rem;
        img{
            width:100%;
        }
      }
</style>
