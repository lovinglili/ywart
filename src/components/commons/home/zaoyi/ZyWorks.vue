<template>
    <div class="zyworks-container">
      <h3>造艺作品</h3>
      <water-works :indexDatas="indexDatas"></water-works>
    </div>
</template>

<script>
import WaterWorks from "@/components/layout/WaterWorks";
export default {
  props: ["indexDatas"],
  components: {
    WaterWorks
  }
};
</script>

<style lang="scss">
.zyworks-container {
  background: #fff;
  margin-top: 0.266667rem;
  h3 {
    width: 100%;
    height: 1.333333rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.333333rem;
    font-size: 34px;
    margin-bottom: 0.213333rem;
    padding-top: 0.213333rem;
  }
}
</style>
