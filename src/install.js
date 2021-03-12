import Vue from "vue";

import { MyIcon } from "./index";

const components = [MyIcon];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

install(Vue);
