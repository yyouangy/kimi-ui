import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchPage/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonPage/ButtonDemo.vue";
import DialogDemo from "./components/DialogPage/DialogDemo.vue";
import TabsDemo from "./components/TabsPage/TabsDemo.vue";
import { h } from "vue";
import Markdown from './components/Markdown.vue';
const md = (filename) => {
  return h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
}

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md('intro') },
        { path: "start", component: md('start') },
        { path: "install", component: md('install') },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },

      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});