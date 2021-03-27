---
title: Wave
---
## wave 水波纹指令

常用的操作按钮。

### 基础用法

<ClientOnly>
  <wave-demos-1></wave-demos-1>
</ClientOnly>

```vue
<template>
  <div class="wrapper">
    <MyNotification v-wave type="success" :showClose="false" message="从不同位置请点击查看波纹效果"></MyNotification>
   
    <p>
    <my-button v-wave="{backgroundColor:'rgba(255, 255, 255, 0.5)'}" type="primary">自定义波纹颜色</my-button>
    <my-button v-wave="{backgroundColor:'rgba(255, 0, 0, 0.5)'}" type="warning">自定义波纹颜色</my-button>
    </p> 
  </div>
</template>
```


### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| backgroundColor | 波纹颜色 | string | - |  rgba(0, 0, 0, 0.15)  
