<template>
  <div class="page">
    <span class="page-block center">«</span>
    <span v-if="pageList[2] - 2 > 1" class="page-block center">...</span>
    <span
      v-for="pageNum in pageList"
      :key="pageNum"
      class="page-block center"
      :style="{ color: pageNum === page ? '#80bd01' : '#778087' }"
      >{{ pageNum }}</span
    >
    <span v-if="pageMax - pageList[2] > 2" class="page-block center">...</span>
    <span class="page-block center">»</span>
  </div>
</template>

<script lang='ts'>
export default {
  setup() {
    const pageList = [1, 2, 3, 4, 5, 6, 7, 8]; // 页码列表
    const page = 1; // 当前页码
    const pageMax = 7; // 最大页数
    return {
      pageList,
      page,
      pageMax,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 10px;
  background-color: #fff;

  &-block {
    display: inline-block;
    width: 30px;
    height: 28px;
    padding: 4px 8px;
    font-size: 0.8em;
    line-height: 18px;
    border: 1px solid #ddd;
    border-right: none;
    box-sizing: border-box;

    &:first-child {
      width: 34px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      width: 34px;
      border-right: 1px solid #ddd;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>