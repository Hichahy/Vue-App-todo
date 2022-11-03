<template>
  <div v-bind:class="{ completed: i.completed }" class="item">
    <div class="i-container">
      <i class="bi bi-check-circle"  data-test="doneTask" @click="doneItem(i.id)"></i>
      <i class="bi bi-x-circle" data-test="delTask" @click="deleteItem(i.id)"></i>
    </div>
    <h2>{{ i.task }}</h2>
  </div>
</template>

<script>
import './taskItem.scss'
export default {
  props: ['i'],
  methods: {
    doneItem() {
      this.$emit('onItemDone', this.i.id)
    },
    deleteItem() {
      this.$emit('onItemDelete', this.i.id)
    },
  },
}
</script>
