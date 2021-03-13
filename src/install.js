import Vue from "vue";

import {
  MyIcon,
  MyButton,
  MyButtonGroup,
  MyNotification,
  notify
} from "./index";

const components = [MyIcon, MyButton, MyButtonGroup, MyNotification];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

Vue.use(notify);

install(Vue);
