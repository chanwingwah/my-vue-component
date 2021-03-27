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
  wave
} from "./index";

const components = [
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  MyMessage,
  MySkeleton,
  MyTab,
  MyTabs
];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

Vue.use(notify);
Vue.use(message);
Vue.use(wave);

install(Vue);
