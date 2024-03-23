<demo>
    异步关闭
    </demo>
    <template>
      <k-button @click="showDialog">打开Dialog</k-button>
      <k-dialog
        v-model:active="active"
        :onBeforeClose="beforeClose"
        :title="title"
        :loading="loading"
      >
        <template #content>
          <strong>点击确定后，经过3秒自动关闭</strong>
          <div>其他关闭途径将被阻断</div>
        </template>
      </k-dialog>
    </template>
    
    <script lang="ts">
    import { ref } from "vue";
    
    export default {
      setup() {
        const active = ref(false);
        const loading = ref(false);
        const title = ref("加载状态");
        const showDialog = () => {
          active.value = true;
        };
        const beforeClose = async (isConfirm: boolean) => {
          if (isConfirm) {
            title.value = "3 秒后自动关闭";
            loading.value = true;
            return new Promise((resolve) => {
              setTimeout(() => {
                loading.value = false;
                title.value = "加载状态";
                resolve(true);
              }, 3000);
            });
          }
          return false;
        };
        return { active, showDialog, beforeClose, title, loading };
      },
    };
    </script>
    