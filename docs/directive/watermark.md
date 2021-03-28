---
title: WaterMark
---
## wave 水波纹指令

常用的操作按钮。

### 基础用法

<ClientOnly>
  <watermark-demos-1></watermark-demos-1>
</ClientOnly>

```vue
<template>
   <div class="wrapper"   v-watermark="{ text: 'chanwingwah'}">
        <MyNotification type="success" :showClose="false" message="水印没有被遮挡"></MyNotification>
  </div>
</template>
```


### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| text| 水印文字 | string | - |  -  
| font| 字体 | string | - |  '30px Microsoft JhengHei' 
| color| 字体颜色 | string | - |  'rgba(0, 0, 0, 0.15)' 
| opacity| 字体透明度 | string | - |  '1'
| rotate| 倾斜角度 | Number | - |  -30 
| zIndex| 层叠 | Number | - |  1000
| height| 单个水印高度 | Number | - |  300 
| width| 单个水印宽 | Number | - |  280
