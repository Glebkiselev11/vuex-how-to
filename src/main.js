import Vue from 'vue'
import App from './App.vue'
import store from './store' // Импортируем store из того файла, где у нас подключен vuex

Vue.config.productionTip = false

new Vue({
  store, // Добавляем в конструктор вью - вьикс
  render: h => h(App),
}).$mount('#app')
