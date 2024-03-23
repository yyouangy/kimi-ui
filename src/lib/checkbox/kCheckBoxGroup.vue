<template>
  <div :class="{ 'group-default': !isVertical }">
    <slot>
      <k-check-box v-if="isControl" control>
        {{ props.controlLabel }}
      </k-check-box>
      <template v-for="(item, index) in props.options" :key="index">
        <k-check-box :control="item.control" :disabled="item.disabled">
          {{ item }}
        </k-check-box>
      </template>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, reactive } from "vue";
import { GROUP_STATE } from "./props";
interface checkboxGroupProps {
  value: Array<any>;
  options: Array<any>;
  control: Boolean;
  vertical: Boolean;
  controlLabel: String;
}
const props = withDefaults(defineProps<Partial<checkboxGroupProps>>(), {
  value: [],
  options: [],
  control: false,
  vertical: false,
  controlLabel: "全选",
});
provide(
  GROUP_STATE,
  reactive({
    setItemChecked,
    handleControlChange,
  })
);
const valueMap = new Map<string | number, boolean>();
const currentValues = ref(props.value);
const isControl = computed(
  () => props.control === "" || props.control !== false
);
const isVertical = computed(
  () => props.vertical === "" || props.vertical !== false
);
const emits = defineEmits(["update:value"]);
function setItemChecked(value: string | number, checked: boolean) {
  valueMap.set(value, checked);
  updateValue();
}

const updateValue = () => {
  currentValues.value = [];
  valueMap.forEach((checked, value) => {
    if (checked) {
      currentValues.value.push(value);
    }
  });
  handleChange(currentValues.value);
};
function handleChange(value: string[]) {
  emits("update:value", value);
}
function handleControlChange() {
      // 在 group 层进行更新, 未选满则全选, 反之全不选
      const allValues = Array.from(valueMap.keys())
      const checked = currentValues.value.length !== allValues.length
      allValues.forEach(value => {
        valueMap.set(value, checked)
      })
      console.log(allValues);
      
      updateValue()
    }
</script>

<style lang="scss">
$h: 40px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.group-default {
  display: flex;
}
.k-checkbox {
  padding: 6px;

  #checkbox {
    margin-right: 5px;
    cursor: pointer;
  }

  //   .checked {
  //   }
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
