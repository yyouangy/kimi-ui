<demo>
常规用法
</demo>
<template>
  <k-collapse v-model="activeName">
    <k-collapse-item name="1" title="第1项">
      <template v-slot:content
        ><div>云母屏风烛影深,长河渐落晓星沉。</div>
        <div>嫦娥应悔偷灵药,碧海青天夜夜心。</div></template
      >
    </k-collapse-item>
    <k-collapse-item name="2" title="第2项">
      <template v-slot:content
        ><div>云母屏风烛影深,长河渐落晓星沉。</div>
        <div>嫦娥应悔偷灵药,碧海青天夜夜心。</div></template
      >
    </k-collapse-item>
    <k-collapse-item name="3" title="第3项">
      <template v-slot:content
        ><div>云母屏风烛影深,长河渐落晓星沉。</div>
        <div>嫦娥应悔偷灵药,碧海青天夜夜心。</div></template
      >
    </k-collapse-item>
    <k-collapse-item name="4" title="第4项">
      <template v-slot:content
        ><div>云母屏风烛影深,长河渐落晓星沉。</div>
        <div>嫦娥应悔偷灵药,碧海青天夜夜心。</div></template
      >
    </k-collapse-item>
  </k-collapse>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const activeName = ref(["1,2"]);
    return { activeName };
  },
};
</script>
