// Логика для работы с постами
export default {

  // actions нам нужны для работы с бэкенд api (Внутри них обычно делают какие нибудь асинхронные операции)
  actions: {

    // В actions всегда первый параметр это некий контекст (с помощью ес6 синтаксиса, мы можем
    // сразу диструктурировать данную переменную, например вытаскивать {commit} или {dispatch} или все сразу {commit, dispatch})
    // А второй параметр, это уже данные, которыем мы передаем из компонента (он не обязателен, в том случае, если нам нечего передать из компонента)
    async fetchPosts({commit, dispatch}, limit = 3) {
      // Тут мы этот limit подставляем в запрос
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      const posts = await res.json()
      
      // Метод commit, первым параметром мы передаем название мутации, которую мы хотим вызвать.
      // А второй параметр, это то, что мы хотим передать в мутацию
      commit('updatePosts', posts)
       
      // Через диспатч мы можем вызывать другие методы внутри actions
      dispatch('sayHellow')
    },

    // Который в себя так же принимает некий контекст и так далее
    sayHellow({commit, dispatch}) {

    }
  },

  // В mutations функции которые напрямую изменяют $store (Здесь всегда синхронный код)
  mutations: {

    // Первый параментр всегда state, а второй, это то что мы будем в него передавать
    updatePosts(state, posts) {
      // А тут мы просто заносим в стейт нужные данные
      state.posts = posts
    },


    // Имитация того, как мы можем метять стейт через мутации, прямо из шаблона
    createPost(state, newPost) {
      // Добавляем в начало массива новый пост
      state.posts.unshift(newPost)
    }
  },

  // Здесь храним данные, вносим их сюда, и забираем отсюда
  state: {
    posts: []
  },

  // Тут мы можем заводить методы, чтобы получать данные из стора, или как-то их трансформировать
  getters: {
    // Все методы в геттерсах имеют первый параметр state 

    // Тут мы валидируем посты к примеру, да это можно делать и тут на уровне гетерса, на стейт это никак не влияет, влияет только на отображение в шаблоне
    validPosts(state) {
      return state.posts.filter(p => {
        return p.title && p.body
      })
    },

    // Этот метод, чтобы получать все посты пришедшие с бэкенда
    allPosts(state) {
      return state.posts
    },

    // Тут получаем количество постов, вторым параметром сюда мы можем передать другие геттеры
    postsCount(state, getters) {
      return getters.validPosts.length
    }
  },
}