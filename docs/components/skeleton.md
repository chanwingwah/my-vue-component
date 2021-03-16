---
title: Skeleton 
---
## skeleton 加载占位图

在需要等待加载内容的位置提供一个占位图。

### 基本用法


<!-- #### 预览 -->
<ClientOnly>
<skeleton-demos-1></skeleton-demos-1>
</ClientOnly>
<!-- #### 代码示例 -->

```vue
  <MySkeleton></MySkeleton>
```

### 动画效果

<ClientOnly>
<skeleton-demos-2></skeleton-demos-2>
</ClientOnly>


```vue
   <MySkeleton active></MySkeleton>
```

### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| title | 是否显示标题 |    Boolean | true,false | true
|paragraph|是否显示段落|Boolean|true,false | true
|rows|段落行数|Number|自定义 |3
|active|是否有动效|Boolean|自定义 |false
