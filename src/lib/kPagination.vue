<template>
  <div class="pagination">
    <a @click="changePage(false)" href="javascript:;" :class="{ disabled: currentPage === 1 }">上一页</a>
    <a @click="changePage(1)">1</a>
    <span v-if="pages > 7 && currentPage >= 5">...</span>
    <a @click="changePage(item)" href="javascript:;" :class="{ active: currentPage === item }" v-for="item in list"
      :key="item">{{ item }}</a>
    <span v-if="pages > 7 && currentPage < pages - 4">...</span>
    <a @click="changePage(pages)">{{ pages }}</a>
    <a @click="changePage(true)" href="javascript:;" :class="{ disabled: currentPage === pages }">下一页</a>
  </div>
</template>
<script>
import { computed, ref } from "vue";

export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 80,
    },
    pagesize: {
      type: Number,
      default: 10,
    },
    // 默认初始页码
    // page: {
    //   type: Number,
    //   default: 1
    // }
  },
  setup(props, { emit, attrs }) {
    // attrs表示父组件传递的属性，但是props没有接收的属性，这种属性不是响应式的
    // 动态计算中期的页码信息
    // 每页的条数
    // const pagesize = 8
    // 总页数
    const pages = computed(() => Math.ceil(props.total / props.pagesize));
    // 当前页码
    const currentPage = ref(attrs.currentPage || 1);
    // 动态计算页码列表
    const list = computed(() => {
      // 当父组件传递total的值发生变化时，计算属性会重新计算
      // pages = Math.ceil(props.total / props.pagesize)
      const result = [];
      // 总页码小于等于7；大于7
      if (pages.value <= 7) {
        // 总页码小于等于5的情况
        for (let i = 2; i < pages.value; i++) {
          result.push(i);
        }//result=[2,3,4,5,6] pages=7
      } else {
        // 总页码大于5
        if (currentPage.value <= 2) {
          // 左侧临界值~
          for (let i = 1; i <= 5; i++) {
            result.push(i);
          }//result=[1,2,3,4,5]
        } else if (currentPage.value >= pages.value - 1) {
          // 右侧临界值
          for (let i = pages.value - 4; i <= pages.value; i++) {
            result.push(i);
          }
        } else {
          // 中间的状态
          for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
            result.push(i);
          }
        }
      }
      return result;
    });
    // 控制上一页和下一页变化
    const changePage = (type) => {
      if (type === false) {
        // 上一页
        // 页面是第一页时，禁止点击操作   
        if (currentPage.value === 1) return;
        if (currentPage.value > 1) {
          currentPage.value -= 1;
        }
      } else if (type === true) {
        // 下一页
        // 页面是最后页时，禁止点击操作
        if (currentPage.value === pages.value) return;
        if (currentPage.value < pages.value) {
          currentPage.value += 1;
        }
      } else {
        // 点击页码
        currentPage.value = type;
      }
      emit("change-page", currentPage.value);
    };
    return { list, currentPage, pages, changePage };
  },
};
</script>
<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  padding: 30px;

  >a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #686666;
    border-radius: 4px;
    margin-right: 10px;

    &:hover {
      color: green;
    }

    &.active {
      background: rgb(192, 248, 255);
      color: #fff;
      border-color: black;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;

      &:hover {
        color: #333;
      }
    }
  }

  >span {
    margin-right: 10px;
  }
}
</style>