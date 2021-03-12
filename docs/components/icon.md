---
title: Icon 
---
## Icon 图标
提供了一套常用的图标集合。

### 使用方法


<!-- #### 预览 -->
<ClientOnly>
<icon-demos></icon-demos>
</ClientOnly>

<!-- #### 代码示例 -->

```vue
    <my-icon name="refresh"></my-icon>
    <my-icon name="setting" style="font-size:20px"></my-icon>
    <my-icon name="loading" style="font-size:30px"></my-icon>
    <my-icon name="picture-outline" 
        style="color:red;font-size:40px">
    </my-icon>
    <my-icon name="star-off" class-name="fontFize50"></my-icon>
    <style>
      .fontFize50 {
        font-size:50px
      }
    </style>
```

### 图标集合

<ClientOnly>
<icons-demos></icons-demos>
</ClientOnly>



### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| name | 图标name |    String | 图标集合中的图标 | -- 
|className|自定义class|String|自定义 |--
