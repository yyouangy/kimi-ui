<template>
  <div>
    <button class="k-switch" :class="{ 'k-checked': value }" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      // checked.value = !checked.value;
      context.emit("update:value", !props.value);
    };

    return { toggle };
  },
};
</script>

<style lang='scss'>
$h: 22px;
$h2: $h - 4px;
.k-switch {
  outline: none;
  width: $h * 2;
  height: $h;
  background-color: grey;
  border-radius: 15px;
  border: none;
  position: relative;
  span {
    // display: inline-block;
    width: $h2;
    height: $h2;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: $h2/2;
    transition: left 250ms;
  }
}
.k-checked {
  background-color: rgb(8, 167, 230);
  span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>