<template>
  <template v-if="visible">
    <div class="k-dialog-Mask" @click="onClickMask"></div>
    <div class="k-dialog-wrapper">
      <div class="k-dialog">
        <header>
          <slot name="title" />
          <span class="k-dialog-close" @click="closeDialog"></span>
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <k-button theme="primary" @click="ok">Ok</k-button>
          <k-button @click="cancel">Cancel</k-button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script>
import kButton from "./kButton.vue";

export default {
  props: {
    title: {
      type: String,
      default: "提示",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    //是否点击遮罩层即关闭Dialog
    closeByClickMask: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: {
    kButton,
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit("update:visible", false);
    };
    const onClickMask = () => {
      if (props.closeByClickMask) {
        closeDialog();
      }
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        closeDialog();
      }
    };
    const cancel = () => {
      if (props.cancel && props.cancel() !== false) {
        closeDialog();
      }
    };
    return { closeDialog, onClickMask, ok, cancel };
  },
};
</script>

<style lang='scss'>
$radius: 4px;
$border-color: #d9d9d9;
.k-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  width: 600px;
  height: 300px;
  &-Mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 122px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>