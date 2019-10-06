import Vue from 'vue'
import Vuex from 'vuex'

import post from './modules/post' // Отдельный модуль, в который венесена логика для работы с постами

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {},

  // В mutations функции которые напрямую изменяют $store
  mutations: {},

  // Здесь мы определяем изначальные данные
  state: {},

  // Тут мы можем получать данные из стора, или как-то их трансформировать
  getters: {},

  // Тут мы подключаем дополнительные модули, (нужно для того, чтобы часть логики перенести в другие файлы)
  modules: {
    post
  }
})