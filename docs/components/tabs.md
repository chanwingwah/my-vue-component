---
title: Tabs 
---
## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基本用法


<!-- #### 预览 -->
<ClientOnly>
<tabs-demos-1></tabs-demos-1>
</ClientOnly>
<!-- #### 代码示例 -->

```vue
<my-tabs>
  <my-tab label="Tab1">
    <p>This is a tab content1</p>
  </my-tab>
  <my-tab label="Tab2">
    <p>This is a tab content2</p>
  </my-tab>
  <my-tab label="Tab3">
    <p>This is a tab content3</p>
  </my-tab>
</my-tabs>
```

### 自定义标签页


<ClientOnly>
<tabs-demos-2></tabs-demos-2>
</ClientOnly>


```vue
<template>
  <my-tabs>
    <my-tab>
      <template v-slot:label>
        <span>自定义1</span>
        <my-icon name="setting"></my-icon>
      </template>
      <p>This is a tab content1</p>
    </my-tab>
    <my-tab >
      <template v-slot:label>
        <span>自定义2</span>
        <my-icon name="edit-outline"></my-icon>
      </template>
      <p>This is a tab content2</p>
    </my-tab>
    <my-tab label="Tab3">
      <p>This is a tab content3</p>
    </my-tab>
  </my-tabs>
</template>
```

### 动态内容

<ClientOnly>
<tabs-demos-3></tabs-demos-3>
</ClientOnly>


```vue
<template>
  <div class="wrapper">
    <p>
      请输入改变Tab1的值： <input type="text" v-model="inputValue"  />
    </p>
    <my-tabs >
      <my-tab label="Tab1">
        <p>input里的值： {{inputValue}}</p>
      </my-tab>
      <my-tab label="Tab2">
        <p>This is a tab content2</p>
      </my-tab>
      <my-tab label="Tab3">
        <p>This is a tab content3</p>
      </my-tab>
    </my-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 'Tab1的值'
    }
  }
}
</script>
```



### Tabs Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| value / v-model | 绑定值，选中选项卡的 name |    string	 | — | 第一个选项卡的 name|


### Tabs Events
|事件名称	| 说明 |  回调参数 |
| :-------------: |:-------------:| :-----:|
| tab-click	 | tab 被选中时触发	 |    被选中的标签 tab 实例   |


### Tab Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :--------: |:-----------:| :-----:|:--------:|:---:|
| label | 选项卡标题	 |    string	 | — | - |
|disabled|是否禁用	|Boolean|-| true|
|name|与选项卡绑定值 value 对应的标识符，表示选项卡别名 |string,number|- |默认将内置该选项卡在选项卡列表中的顺序值，如第一个选项卡则为1|
