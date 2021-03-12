---
title: Button 
---
## Button 按钮

常用的操作按钮。

### 基础用法

<ClientOnly>
  <button-demos-1></button-demos-1>
</ClientOnly>

```vue
  <my-button>按钮</my-button>
  <my-button type="primary">按钮</my-button>
  <my-button type="danger">按钮</my-button>
  <my-button type="warning">按钮</my-button>
  <my-button type="success">按钮</my-button>
```

### 禁用状态

<ClientOnly>
  <button-demos-2></button-demos-2>
</ClientOnly>

```vue
    <my-button disabled>按钮</my-button>
    <my-button type="primary" disabled>按钮</my-button>
```

### 图标按钮
<ClientOnly>
  <button-demos-3></button-demos-3>
</ClientOnly>

```vue
    <my-button icon="edit"></my-button>
    <my-button icon="upload"  type="primary">上传</my-button>
    <my-button icon="delete" icon-position="right" type="primary">删除</my-button>
```

### 按钮组
<ClientOnly>
  <button-demos-4></button-demos-4>
</ClientOnly>

```vue
    <my-button-group>
      <my-button >广州</my-button>
      <my-button >北京</my-button>
      <my-button  disabled>上海</my-button>
    </my-button-group>
    <my-button-group>
      <my-button type="primary" icon="plus"></my-button>
      <my-button type="primary" icon="edit"></my-button>
      <my-button type="primary" icon="delete"></my-button>
    </my-button-group>
```

### 加载中

<ClientOnly>
  <button-demos-5></button-demos-5>
</ClientOnly>

```vue
    <my-button loading>按钮</my-button>
    <my-button loading type="primary" >按钮</my-button>
```

### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| type | 按钮类型 |    String | default, primary, success, warning, danger | default
| icon | 图标 |    String | 图标集合中的图标 | -- 
| iconPosition | 图标位置 |    String | left, right | left
|loading|控制loading状态|Boolean|自定义 |--
|disabled|控制disabled状态|Boolean|自定义 |--
