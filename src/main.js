import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Toastr from 'vue-toastr'
Vue.use(Toastr)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
