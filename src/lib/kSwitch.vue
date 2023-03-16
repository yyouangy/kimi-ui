<template>
  <div>
    <button class="k-switch" :class="{ 'k-checked': value }" @click="toggle" :disabled="disabled">
      <span>
        <slot :name="value ? 'openIcon' : 'closeIcon'"></slot>
      </span>
      <!-- <p v-if="value"></p>
      <p v-else></p> -->
    </button>
  </div>
</template>

<script lang="ts">
// import { computed, ref } from "vue";
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

    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.k-switch {
  position: relative;
  display: inline-block;
  width: $h * 2;
  height: $h;
  line-height: $h;
  vertical-align: middle;
  border: none;
  padding: 0;
  margin-bottom: 8px;
  background-color: #bfbfbf; //#1890ff
  border-radius: $h/2;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &[disabled] {
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 5px rgba(191, 191, 191, 0.5);
    &:hover {
      box-shadow: none;
    }
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    line-height: $h2;
    border: none;
    border-radius: $h/2;
    background-color: #fff;
    transition: all 0.25s ease-in-out;
    display: inline-block;
    .k-icon {
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  > p {
    width: 14px;
    height: $h;
    font-size: 14px;
    color: #fff;
    margin: 0 7px 0 22px;
    transition: margin 0.25s ease-in-out;
  }
  &:active {
    > span {
      width: $h + 2px;
    }
  }
  &.k-checked {
    background-color: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
    > p {
      margin: 0 25px 0 7px;
    }
    &:focus {
      box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
      &:hover {
        box-shadow: none;
      }
    }

    &:active {
      > span {
        width: $h + 2px;
        margin-left: -6px;
      }
    }
  }
}
</style>
