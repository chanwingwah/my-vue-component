---
title: 快速上手
---

## 安装
 
npm 安装

```bash
npm install @chanwingwah/my-vue-component
```

yarn 安装


```bash
yarn add @chanwingwah/my-vue-component
```



## Hello World


```javascript
import Vue from 'vue'
import { MyIcon, MyButton } from "@chanwingwah/my-vue-component"; // 导入组件
import "@chanwingwah/my-vue-component/dist/myComponent.css";  // 导入样式

Vue.component("MyIcon", MyIcon);
Vue.component("MyButton", MyButton);
new Vue({
  el: '#app',
})

```
