// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Tooltip,Input,Divider,Backtop,Icon,Button,Image,Popover } from 'element-ui';
import mavonEditor from 'mavon-editor'

Vue.config.productionTip = false;
Vue.use(mavonEditor);
Vue.use(Tooltip);
Vue.use(Input);
Vue.use(Divider);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Image);
Vue.use(Popover);

Vue.prototype.$EventBus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.afterEach(function (to,from,next) {
  window.scrollTo({top:0,behavior: 'smooth',})
});
