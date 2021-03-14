# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {kButton, kTabs, kSwitch, kDialog} from "Kimi-Ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <k-button>按钮</k-button>
  </div>
</template>
<script>
import {kButton, kTabs, kSwitch, kDialog} from "Kimi-Ui"
export default {
  components: {kButton}
}
</script>
```