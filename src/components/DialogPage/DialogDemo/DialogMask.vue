<demo>
    阻止点击遮罩层关闭dialog
    </demo>
    <template>
      <k-button @click="showDialog">打开Dialog</k-button>
      <k-dialog v-model:active="active" :closeByMask="false">
        <template #title>
          <strong>Tips</strong>
        </template>
        <template #content>
          <strong>First Content</strong>
          <div>Second Content</div>
        </template>
      </k-dialog>
    </template>
    
    <script>
    import { ref } from "vue";
    
    export default {
      setup() {
        const active = ref(false);
        const showDialog = () => {
          active.value = true;
        };
        return { active, showDialog };
      },
    };
    </script>
    