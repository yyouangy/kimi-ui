import kDialog from "./dialog/kDialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, onConfirm, onCancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        kDialog,
        {
          active: true,
          "onUpdate:active": (newActive) => {
            if (newActive === false) {
              close();
            }
          },
          onConfirm,
          onCancel,
        },
        {
          title: () => title,
          content: () => content,
        }
      );
    },
  });
  app.mount(div);
};
