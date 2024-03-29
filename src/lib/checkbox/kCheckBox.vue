<template>
  <div class="k-checkbox">
    <label :aria-disabled="isDisabled" @click="handleClick">
      <input
        ref="input"
        type="checkbox"
        :checked="currentChecked"
        :disabled="isDisabled || readonly"
        :tabindex="props.tabIndex"
        :name="props.name"
        @submit.prevent
        @change="handleChange(!currentChecked)"
        @click.stop
      />
      <span v-if="hasLabel || hasSlot">
        <slot>{{ props.label }}</slot>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, inject } from "vue";
import { GROUP_STATE } from "./props";

interface checkboxProps {
  checked: Boolean;
  value: String | Number;
  label: String;
  disabled: Boolean;
  control: Boolean;
  loading: Boolean;
  loadingLock: Boolean;
  color: String;
  onChange: null;
  onClick: null;
}
const props = withDefaults(defineProps<Partial<checkboxProps>>(), {
  checked: false,
  value: null,
  label: "框",
  disabled: false,
  control: false,
  loading: false,
  loadingLock: false,
  color: "#000",
});
const emits = defineEmits(["update:checked", "onChange", "onClick"]);
const currentChecked = ref(props.checked);
const currentValue = computed(() => props.value);
const computedSize = computed(() => props.size);
const isDisabled = computed(
  () => props.disabled === "" || props.disabled !== false
);
const groupState = inject(GROUP_STATE, null);
const isLoading = computed(() => props.loading);
const isLoadingLock = computed(() => props.loadingLock);
const readonly = computed(() => isLoading.value && isLoadingLock.value);
const hasLabel = computed(() => {
  return props.label !== "";
});
const hasSlot = computed(() => {
  return !!slots.default;
});
const handleChange = (checked: boolean) => {
  console.log(groupState);

  setCurrentChecked(checked);
  if (groupState) {
    console.log(currentValue.value);
    groupState.setItemChecked(currentValue.value, checked);
  }
};

function setCurrentChecked(checked: boolean) {
  if (props.control && groupState?.handleControlChange) {
    groupState.handleControlChange();
  } else if (currentChecked.value !== checked) {
    currentChecked.value = checked;
    emitCheckEvent();
  }
}
function emitCheckEvent() {
  const checked = currentChecked.value;
  emits("update:checked", checked);
  emits("onChange");
}
</script>

<style lang="scss">
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.k-checkbox {
  padding: 6px;

  #checkbox {
    margin-right: 5px;
    cursor: pointer;
  }

  .checked {
  }
}

.k-button {
  font-size: 14px;
  box-sizing: border-box;
  height: $h;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  //按钮theme
  &.k-theme-primary {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: #2080f0;

    &:hover,
    &:focus {
      // color: lighten($blue, 5%);
      background-color: #4098fc;
    }
  }

  &.k-theme-success {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    // background-color: rgb(43, 131, 21);
    background-color: #18a058;

    &:hover,
    &:focus {
      background-color: #36ad6a;
    }
  }

  &.k-theme-warning {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: #f0a020;

    &:hover,
    &:focus {
      background-color: #fcb040;
    }
  }

  &.k-theme-danger {
    border-color: transparent;
    box-shadow: none;
    color: #fff;
    background-color: #d03050;

    &:hover,
    &:focus {
      background-color: #de576d;
    }
  }

  //按钮size
  &.k-size-big {
    height: $h + 6px;
    font-size: 18px;
  }

  &.k-size-small {
    height: $h - 6px;
    font-size: 12px;
  }

  > .k-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: rgb(15, 19, 20) rgb(15, 19, 20) rgb(15, 19, 20) transparent;
    border-style: dotted;
    border-width: 2px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

// .k-size-big{
//   height: $h + 6px;
//   font-size: 18px;
// }
// .k-size-small{
//   height: $h - 6px;
//   font-size: 14px;
// }
</style>
