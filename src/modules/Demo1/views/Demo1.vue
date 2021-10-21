<template>
<div id="todo">
   <TodoHeader />
   <TodoItem
   :todoProps="todos" />
</div>
</template>
<script lang="ts">
import { ref } from 'vue'
import TodoHeader from '@/modules/Demo1/views/Todolist-Header/TodoHeader.vue'
import TodoItem from '@/modules/Demo1/views/Todolist-Content/TodoItem.vue'
export default {
  components: {
    TodoHeader,
    TodoItem
  },
  setup () {
    const todos = ref([
      {
        title: 'Learn Vue JS',
        completed: false
      }
    ])
    return {
      todos
    }
  }
}
</script>

<style lang="scss">
$background-widget : #ff7675;
$color-white: white;
$width-app: 450px;
$height-app: 470px;
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  #todo {
    background-color: $background-widget;
    color: $color-white;
    width: $width-app;
    height: $height-app;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
</style>
