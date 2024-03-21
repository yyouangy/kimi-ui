<template>
  <template v-if="dialogConfig.visible">
    <teleport to="body"
      ><div class="k-dialog-Mask" @click="onClickMask"></div>
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
            <k-button theme="primary" @click="dialogConfig.handleConfirm">确认</k-button>
            <k-button @click="cancel">取消</k-button>
          </footer>
        </div>
      </div></teleport
    >
  </template>
</template>

<script lang="ts">
import { watch, PropType } from "vue";
import kButton from "./kButton.vue";

interface DialogConfig {
  title: String;
  visible: Boolean;
  closeByClickMask: Boolean;
  showMask: Boolean;
  handleConfirm: () => Promise<any>;
  handleCancel: () => Promise<any>;
}
export default {
  props: {
    dialogConfig: {
      type: Object as PropType<DialogConfig>,
      default: () => ({
        title: "提示",
        visible: false,
        closeByClickMask: false,
        showMask: true,
        handleCancel: () => Promise.resolve(),
        handleConfirm: () => Promise.resolve(),
        // confirmProps: {},
        // cancelProps: {}
      }),
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
      if (props.dialogConfig.closeByClickMask) {
        closeDialog();
      }
    };
    const ok =async  () => {
      if ( await props.dialogConfig.handleConfirm?.() !== false) {
        closeDialog();
      }
    };
    const cancel = async() => {
      if ( await props.dialogConfig.handleConfirm?.() !== false) {
        closeDialog();
      }
    };
    return { closeDialog, onClickMask, ok, cancel };
  },
};
</script>

<style lang="scss">
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
    text-align: center;
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
