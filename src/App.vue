<template>
  <div id="app">
    <PostForm />

    <!-- Здесь выводим колличество постов, получаем мы это количество из геттера в $store -->
    <h1>{{postsCount}}</h1>

    <div class="post" v-for="post of validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' // Тут мы импортируем отдельные методы из стора, для более лаконичной работы с стором (Можно и без этого обойтись)

import PostForm from './components/PostForm'

export default {
  name: 'app',
  components: {
    PostForm
  },

  // Вызываем геттеры из $store (для этого мы его импортировали в начале скриптов)
  // Принимает массив строк, в котором мы перечесляем геттеры которые хотим вызвать
  computed: mapGetters(['validPosts', 'postsCount']),

  // Передаем массив в котором в строковом формате передаем название метода в actions который хотим вызвать
  methods: mapActions(['fetchPosts']),
  async mounted() {
    // И тут мы просто его вызываем, параметром сюда мы передаем какие то данные, которые принимаем в actions ВТОРЫМ параметром (это 
    // важно, потому что первым параметр там контекст, не перепутай это)
    this.fetchPosts(5);
  },



  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

</style>
