<template>
  <div class="app">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from './components/todoApp/TodoApp.vue'
import './app.scss'

export default {
  name: 'App',
  components: {
    TodoApp,
  },
}
</script>
