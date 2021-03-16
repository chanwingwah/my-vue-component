import Vue from "vue";

import {
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  notify,
  MySkeleton
} from "./index";

const components = [
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  MySkeleton
];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

Vue.use(notify);

install(Vue);
