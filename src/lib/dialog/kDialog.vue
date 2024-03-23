<template>
  <template v-if="active">
    <teleport to="body"
      ><div class="k-dialog-Mask" @click="onClickMask"></div>
      <div class="k-dialog-wrapper">
        <div class="k-dialog">
          <header>
            <slot name="title">{{ title }}</slot>
            <span class="k-dialog-close" @click="handleClose(false)"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <k-button theme="primary" @click="handleConfirm" :loading="loading"
              >确认</k-button
            >
            <k-button @click="handleCancel">取消</k-button>
          </footer>
        </div>
      </div></teleport
    >
  </template>
</template>

<script lang="ts" setup>
import { watch, toRefs, nextTick } from "vue";
import kButton from "../kButton.vue";
interface dialogProps {
  active: Boolean;
  loading?: Boolean;
  title?: String;
  closeByMask?: Boolean;
  onBeforeClose?: (isConfirm: Boolean) => any;
}
const props = withDefaults(defineProps<dialogProps>(), {
  active: false,
  loading: false,
  title: "提示",
  closeByMask: true,
  onBeforeClose: null,
});
const emits = defineEmits(["update:active", "confirm", "cancel"]);
const { active, loading, title, closeByMask, onBeforeClose } = toRefs(props);
const onClickMask = () => {
  if (closeByMask.value) {
    handleClose(false);
  }
};
const handleClose = async (isConfirm = false) => {
  let result: unknown = true;
  if (typeof onBeforeClose.value === "function") {
    result = onBeforeClose.value(isConfirm);
    if (result instanceof Promise) {
      result = await result;
    }
  }
  if (result !== false) {
    closeDialog();
  }
  return result;
};
const handleConfirm = () => {
  handleClose(true);
  emits("confirm");
};
const handleCancel = () => {
  handleClose(false);
  emits("cancel");
};
const closeDialog = () => {
  emits("update:active", false);
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.k-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(rgb(182, 167, 167), 0.5);
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
