import Vue from "vue";
import Notification from "./func-notification";

const NotificationConstructor = Vue.extend(Notification);
// 实例栈 用来多个实例处理位置逻辑
const positionArr = ["top-right", "top-left", "bottom-right", "bottom-left"];
const instanceArr = {};
positionArr.forEach(position => {
  instanceArr[position] = [];
});
let seed = 1;

// 计算位置
const beforeAddInstance = instance => {
  instance.id = `my_notification_${seed++}`;
  var verticalOffset = 20;
  instanceArr[instance.position].forEach(item => {
    verticalOffset += item.$el.offsetHeight + 20;
  });
  instance.verticalOffset = verticalOffset;
  instanceArr[instance.position].push(instance);
};

// 关闭时，需要维护位置信息
const beforeRemoveInstance = instance => {
  if (!instance) return;
  const len = instanceArr[instance.position].length;
  const index = instanceArr[instance.position].findIndex(
    inst => instance.id === inst.id
  );
  instanceArr[instance.position].splice(index, 1);
  if (len <= 1) return;
  const removeHeight = instance.height;
  // 位置顺移
  for (let i = index; i < len - 1; i++) {
    instanceArr[instance.position][i].verticalOffset =
      parseInt(instanceArr[instance.position][i].verticalOffset) -
      removeHeight -
      20;
  }
};

const removeInstance = instance => {
  if (!instance) return;
  document.body.removeChild(instance.$el);
  instance.$destroy();
};

const notify = propsData => {
  const instance = new NotificationConstructor({
    propsData
  });
  // 计算相关位置
  beforeAddInstance(instance);
  // 手动挂载
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  // 绑定关闭按钮事件
  instance.$on("closed", () => {
    removeInstance(instance);
  });
  instance.$on("close", () => {
    beforeRemoveInstance(instance);
    instance.visible = false;
  });

  instance.close = () => {
    this.$emit("close");
  };
  return instance;
};

// ['success', 'info','warning', 'error']
const types = ["success", "info", "warning", "error"];
types.forEach(type => {
  notify[type] = propsData => {
    propsData = Object.assign({}, propsData, {
      type: type
    });
    notify(propsData);
  };
});

notify.closeAll = () => {
  positionArr.forEach(position => {
    instanceArr[position].forEach(item => {
      item.$emit("closed");
    });
    instanceArr[position].length = 0;
  });
};

export default notify;
