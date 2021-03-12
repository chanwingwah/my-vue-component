import Vue from "vue";

import { MyIcon, MyButton, MyButtonGroup } from "./index";

const components = [MyIcon, MyButton, MyButtonGroup];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

install(Vue);
