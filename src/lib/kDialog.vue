<template>
  <div class="dialog-mask"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <k-button>OK</k-button>
      <k-button>Cancel</k-button>
    </footer>
  </div>
</template>

<script>
import kButton from "./kButton.vue";
export default {
  components: {
    kButton,
  },
};
</script>

<style>
</style>