import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchPage/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonPage/ButtonDemo.vue";
import DialogDemo from "./components/DialogPage/DialogDemo.vue";
import TabsDemo from "./components/TabsPage/TabsDemo.vue";
import CollapseDemo from "./components/CollapsePage/CollapseDemo.vue";
import PaginationDemo from "./components/PaginationPage/PaginationDemo.vue";
import Unfinished from "./components/Unfinished.vue";
import { h } from "vue";
import Markdown from "./components/Markdown.vue";
import Intro from "./markdown/intro.md";
import Install from "./markdown/install.md";
import Start from "./markdown/start.md";

const md = (string) => {
  return h(Markdown, { content: string, key: string });
};
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: md(Intro) },
        { path: "start", component: md(Start) },
        { path: "install", component: md(Install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "collapse", component: CollapseDemo },
        { path: "pagination", component: PaginationDemo },
        { path: "continue", component: Unfinished },
      ],
    },
  ],
});
