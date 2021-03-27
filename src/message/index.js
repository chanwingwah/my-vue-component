import message from "./function";
const install = function(Vue) {
  Vue.prototype.$message = message;
};
message.install = install;
export default message;
