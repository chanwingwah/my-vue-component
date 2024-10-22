import Vue from "vue";

import {
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  notify,
  MyMessage,
  message,
  MySkeleton,
  MyTab,
  MyTabs,
  wave,
  watermark,
  MyImage
} from "./index";

const components = [
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  MyMessage,
  MySkeleton,
  MyTab,
  MyTabs,
  MyImage
];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

Vue.use(notify);
Vue.use(message);
Vue.use(wave);
Vue.use(watermark);

install(Vue);
