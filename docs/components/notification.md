---
title: Notification 
---
## Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。
(基本实现了和Element UI一致的体验)


### 基础用法

<ClientOnly>
  <notification-demos-1></notification-demos-1>
</ClientOnly>

```vue
 <template>
  <div class="wrapper">
    <my-button @click="notify1">可自动关闭</my-button>
    <my-button @click="notify2">不可自动关闭</my-button>
  </div>
</template>
<script>
export default {
  methods: {
    notify1() {
      this.$notify({
        message: '这是一条可自动关闭的消息' })
    },
    notify2() {
      this.$notify({ 
        title:'标题文案',
        duration: 0, 
        message: '这是一条不会自动关闭的消息' })
    }
  }
}
</script>
```

### 带倾向性

带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息

<ClientOnly>
  <notification-demos-2></notification-demos-2>
</ClientOnly>

```js
<script>
   export default {
    methods: {
      notify1() {
        this.$notify({ type: 'success', message: '这是一条成功类型的消息' })
      },
      notify2() {
        this.$notify({ type: 'warning', message: '这是一条警告类型的消息' })
      },
      notify3() {
        this.$notify({ type: 'info', message: '这是一条消息类型的消息' })
      },
      notify4() {
        this.$notify({ type: 'error', message: '这是一条错误类型的消息' })
      }
    }
  }
</script>
```

### 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出。
使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。

<ClientOnly>
  <notification-demos-3></notification-demos-3>
</ClientOnly>

```vue
<script>
export default {
  methods: {
    notify1() {
      this.$notify({ title: '自定义位置', position: 'top-right', message: '这是一条右上的消息' })
    },
    notify2() {
      this.$notify({ title: '自定义位置', position: 'bottom-right', message: '这是一条右下的消息' })
    },
    notify3() {
      this.$notify({ title: '自定义位置', position: 'top-left', message: '这是一条左上的消息' })
    },
    notify4() {
      this.$notify({ title: '自定义位置', position: 'bottom-left', message: '这是一条左下的消息' })
    }
  }
}
</script>
```

### 隐藏关闭按钮

可以不显示关闭按钮

<ClientOnly>
  <notification-demos-4></notification-demos-4>
</ClientOnly>

```vue
<script>
export default {
  methods: {
    notify1() {
      this.$notify.success({
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
    },
  }
}
</script>
```

### 全局方法

在 Vue.prototype 添加了全局方法 $notify。因此在 vue instance 中可以采用本页面中的方式调用 Notification。


### 单独引用

单独引入 Notification：

```js
import { Notification } from  "@chanwingwah/my-vue-component";

```
此时调用方法为 Notification(options)。我们也为每个 type 定义了各自的方法，如 Notification.success(options)。并且可以调用 Notification.closeAll() 手动关闭所有实例
<ClientOnly>
  <notification-demos-5></notification-demos-5>
</ClientOnly>

```js
<script>
import { Notification } from  "@chanwingwah/my-vue-component";
import MyButton from '../../../src/button/button'
export default {
  methods: {
    notify1() {
      Notification.closeAll()
    },
    notify2() {
      Notification.success({
        message: '通过Notification使用'
      })
    },
  }
}
</script>

```
### Options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| title |	标题|	string | — | — 
| message |	说明文字|	string | — | — 
| type |	主题样式   |	string |	success/warning/info/error	| —
| duration |	显示时间, 毫秒。设为 0 则不会自动关闭|	number	| — |	4500
| position |	自定义弹出位置|	string |	top-right/top-left/bottom-right/bottom-left	|top-right
| showClose |	是否显示关闭按钮|	boolean |	—|	true
| onClose |	关闭时的回调函数|	function	|—|	—
| onClick |	点击Notification 时的回调函数	| function | 	—	|—

### 方法
调用 Notification 或 this.$notify 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

|方法名| 说明 | 
| :-------------: |:-------------:|
|close| 关闭当前的 Notification |
|this.$notify.closeAll| 关闭当所有的通知 |

方法名	说明
close	关闭当前的 Notification