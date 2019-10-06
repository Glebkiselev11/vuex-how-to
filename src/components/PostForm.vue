<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <button type="submit">Создать пост</button>
    <hr>
  </form>
</template>

<script> 

import { mapMutations } from 'vuex'// Импортируем метод из вьюикса для работы с мутациями

export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    // Вызываем мутации через оператор спреад, куда мы передаем массив строк с названиями нужных методов в мутациях
    ...mapMutations(['createPost']),

    // Этот метод мы вызываем при отправки формы
    submit() {
      // Обращаемся к мутации createPost, куда передаем объект с параметрами
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })

      // Тут мы очищаем инпуты
      this.title = this.body = ''
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>