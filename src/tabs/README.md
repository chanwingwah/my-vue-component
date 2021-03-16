# tabs 组价需求分析


- 使用方式
 ```html
  <my-tabs v-model="Tab1" @tab-click="handleClick">
    <my-tab name="first">
        <span v-slot:label>Tab1</span>
        <p>This is a tab content1</p>
    </my-tab>
    <my-tab label="Tab2" name="second">
        <p>This is a tab content2</p>
    </my-tab>
    <my-tab label="Tab3" name="third" disabled>        
        <p>This is a tab content3</p>
    </my-tab>
  </my-tabs>
```

- 可配置是否禁用
- 切换事件
- 通过v-model 来绑定切换的Tab
- 游标样式
- 内容可动态更新
- 可配置disabled