import Vue from "vue";
import { Button, Select, Row, Input, Checkbox, Link } from "element-ui";
import App from "./App.vue";

import store from "./store";

Vue.config.productionTip = false; // 关闭生产提示

Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Link);

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
});
