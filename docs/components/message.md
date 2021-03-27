---
title: Message 
---
## Message 通知

常用于主动操作后的反馈提示。与 Message 的区别是后者更多用于系统级通知的被动提醒。
(基本实现了和Element UI一致的体验)

### 基础用法

<ClientOnly>
  <message-demos-1></message-demos-1>
</ClientOnly>

```vue
<template>
  <div class="wrapper">
    <my-button @click="message1" >打开消息提示info</my-button>
    <my-button @click="message2" type="warning">打开消息提示warning</my-button>
    <my-button @click="message3" type="success">打开消息提示success</my-button>
    <my-button @click="message4" type="danger">打开消息提示error</my-button>
  </div>
</template>
<script>
export default {
  methods: {
    message1() {
      this.$message('这是一条默认的消息提示信息')
    },
    message2() {
      this.$message({
        type: 'warning',
        message: '这是一条警告类型的消息'
      })
    },
    message3() {
      this.$message.success('这是一条成功类型的消息')
    },
    message4() {
      this.$message.error('这是一条错误提示类型的消息')
    }
  }
}
</script>
```

### 隐藏关闭按钮

可以不显示关闭按钮

<ClientOnly>
  <message-demos-2></message-demos-2>
</ClientOnly>

```vue
<script>  
export default {
  methods: {
    message1() {
      this.$message({
        type: "error",
        showClose: false,
        message: '关闭按钮不见了'
      })
    }
  }
}
</script>
```

### 全局方法

在 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 Message。


### 单独引用

单独引入 Message ：

```js
import { Message } from  "@chanwingwah/my-vue-component";

```
此时调用方法为 Message(options)。我们也为每个 type 定义了各自的方法，如 Message.success(options)。并且可以调用 Message.closeAll() 手动关闭所有实例
<ClientOnly>
  <message-demos-3></message-demos-3>
</ClientOnly>

```js
<script>
import { Message } from  "@chanwingwah/my-vue-component";
import MyButton from '../../../src/button/button'
export default {
  methods: {
    message1() {
      Message.closeAll()
    },
    message2() {
      Message({
        type: 'warning',
        message: '这是一条警告类型的消息'
      })
    },
  }
}
</script>

```
### Options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| message |	说明文字|	string | — | — 
| type |	主题样式   |	string |	success/warning/info/error	| —
| duration |	显示时间, 毫秒。设为 0 则不会自动关闭|	number	| — |	3000
| showClose |	是否显示关闭按钮|	boolean |	—|	true
| onClose |	关闭时的回调函数|	function	|—|	—
| onClick |	点击 Message 时的回调函数	| function | 	—	|—

### 方法
调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

|方法名| 说明 | 
| :-------------: |:-------------:|
|close| 关闭当前的 Message |
|this.$message.closeAll| 关闭当所有的通知 |

方法名	说明
close	关闭当前的 Message