import Vue from "vue";

import {
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  notify,
  MySkeleton,
  MyTab,
  MyTabs
} from "./index";

const components = [
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
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

install(Vue);
