import wave from "./wave";

const install = function(Vue) {
  Vue.directive("wave", wave);
};

wave.install = install;
export default wave;
