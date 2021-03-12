import Vue from "vue";

import { MyIcon, MyButton } from "./index";

const components = [MyIcon, MyButton];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

install(Vue);
