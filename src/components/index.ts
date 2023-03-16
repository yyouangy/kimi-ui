import type { App, Component } from 'vue';
import kSwitch from "../lib/kSwitch.vue"
import kButton from "../lib/kButton.vue"
import kDialog from "../lib/kDialog.vue"
import kTab from "../lib/kTab.vue"
import kTabs from "../lib/kTabs.vue"
import kCollapse from "../lib/collapse/kCollapse.vue"
import kCollapseItem from "../lib/collapse/kCollapseItem.vue"
import kTree from "../lib/tree/kTree.vue"
import kTreeItem from "../lib/tree/kTreeItem.vue"
import kIcon from "../lib/kIcon.vue"
const components: { [propName: string]: Component } = {
    kSwitch, kButton, kDialog, kTab, kTabs, kCollapse, kCollapseItem, kTree, kTreeItem, kIcon

};
export default {
    install: (Vue: App) => {
        for (const key in components) {
            Vue.component(key, components[key]);
        }

    }
};