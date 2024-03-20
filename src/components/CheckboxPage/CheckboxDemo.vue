<template>
    <div>
        <h1>Checkbox 组件示例</h1>
        <Demo :component="CheckboxSingle" />
    </div>
</template>

<script>
import CheckboxSingle from "./CheckboxDemo/CheckboxSingle.vue";
import Demo from "../Demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return { CheckboxSingle, };
    },
};
</script>

<style></style>