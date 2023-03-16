import './lib/kimi.scss'
import "./index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';
import globalComponent from "./components/index"
const app = createApp(App);
app.use(router);
app.use(globalComponent)
app.mount("#app");
app.component('Markdown', Markdown)