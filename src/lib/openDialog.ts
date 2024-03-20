import kDialog from "./kDialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
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
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok,
          cancel,
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
