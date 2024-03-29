// @ts-nocheck
import { md } from "./plugins/md";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
import prismjs from "vite-plugin-prismjs";
export default {
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  base: "./",
  assetsDir: "assets",
  plugins: [
    md(),
    prismjs({
      // languages: ['json'],
      languages: "all",
      // theme: 'dark'
    }),
  ],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options;
      const file = fs.readFileSync(path).toString();
      const parsed = baseParse(file).children.find((n) => n.tag === "demo");
      const title = parsed.children[0].content;
      const main = file.split(parsed.loc.source).join("").trim();
      return `export default function (Component) {
            Component.__sourceCode = ${JSON.stringify(main)}
            Component.__sourceCodeTitle = ${JSON.stringify(title)}
          }`.trim();
    },
  },
};
