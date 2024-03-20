<demo>
    单选框功能
    </demo>
<template>
  <k-check-box v-model:value="a" desc="吃药"></k-check-box>
  <k-check-box v-model:value="b" desc="打针"></k-check-box>
  <k-check-box v-model:value="c" desc="吊水"></k-check-box>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const a = ref(true);
    const b = ref(false)
    const c = ref(false)
    return { a, b, c }
  }
}

</script>