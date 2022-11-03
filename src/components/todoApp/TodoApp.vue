<template>
  <input type="text" placeholder="add task" v-model="newItem" />
  <div v-if="items.length < 1" class="info-box" >
    <p data-test="infoAdd">Add task</p>
  </div>
  <div class="task-container">
    <TaskItem
      data-test="todo"
      @onItemDelete="deleteItem"
      @onItemDone="doneItem"
      :i="i"
      v-for="i in items"
      :key="i.id"
    />
  </div>
  <button @click="addItem">+</button>
</template>

<script>
import TaskItem from '../taskItem/TaskItem.vue'
import './todoApp.scss'
export default {
  components: {
    TaskItem,
  },
  data() {
    return {
      newItem: '',
      items: [
        {
          id: 1,
          task: 'walk the dog',
          completed: false,
        },
        {
          id: 2,
          task: 'make dishes',
          completed: true,
        },
        {
          id: 3,
          task: 'learn VUE',
          completed: false,
        },
      ],
    }
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.items.push({
          task: this.newItem,
          completed: false,
          id: Date.now(),
        })
        this.newItem = ''
      }
    },
    doneItem(id) {
      const index = this.items.findIndex((el) => el.id === id)
      if (!this.items[index].completed) {
        this.items[index].completed = true
      } else {
        this.items[index].completed = false
      }
    },
    deleteItem(id) {
      const index = this.items.findIndex((el) => el.id === id)
      console.log(index)
      this.items.splice(index, 1)
    },
  },
}
</script>
