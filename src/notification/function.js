import Vue from "vue";
import Notification from "./func-notification";

const NotificationConstructor = Vue.extend(Notification);

const removeInstance = instance => {
  if (!instance) return;
  document.body.removeChild(instance.$el);
  instance.$destroy();
};

const notify = propsData => {
  const instance = new NotificationConstructor({
    propsData
  });
  // 手动挂载
  instance.$mount();
  document.body.appendChild(instance.$el);
  // 绑定关闭按钮事件
  instance.$on("close", () => {
    // instance.visible = false;
    removeInstance(instance);
  });
  return instance;
};

export default notify;
