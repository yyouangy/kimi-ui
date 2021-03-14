<template>
  <div>
    <button
      class="k-switch"
      :class="{ 'k-checked': value }"
      @click="toggle"
      :disabled="disabled"
    >
      <span></span>
      <p>{{ switchState }}</p>
    </button>
  </div>
</template>

<script lang='ts'>
import { computed, ref } from "vue";
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const switchState = computed(() => {
      return props.value ? "on" : "off";
    });

    return { toggle, switchState };
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
  > span {
    width: $h2;
    height: $h2;
    background-color: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: $h2/2;
    transition: all 250ms;
  }
  > p {
    display: inline-block;
    width: 14px;
    height: 22px;
    font-size: 14px;
    color: #fff;
    margin: 0 7px 0 22px;
    transition: margin 0.25s ease-in-out;
  }
  &:active {
    > span {
      width: 22px;
    }
  }
}
.k-checked {
  background-color: rgb(8, 167, 230);
  > span {
    left: calc(100% - #{$h2} - 2px);
    &:focus {
      outline: none;
    }
    &:active {
      > span {
        width: $h2 + 4px;
      }
    }
  }
  > p {
    margin: 0 22px 0 7px;
  }
}
</style>