<template>
<div class="todo">
   <TodoHeader />
   <TodoItem
   :todoProps="todos"
   :removeItemTodo="removeItemTodo" />
   <TodoAddItem
   :addData="addDataTodo" />
</div>
</template>
<script lang="ts">
import { ref } from 'vue'
import TodoHeader from '@/modules/Demo1/components/Todolist-Header/TodoHeader.vue'
import TodoItem from '@/modules/Demo1/components/Todolist-Content/TodoItem.vue'
import TodoAddItem from '@/modules/Demo1/components/Todo-Footer/TodoAddItem.vue'
interface addDataTodo {
  title: string;
  completed: boolean;
}
export default {
  components: {
    TodoHeader,
    TodoItem,
    TodoAddItem
  },
  setup () {
    const todos = ref<addDataTodo[]>([])
    const addDataTodo = (value:any) => {
      todos.value.push({
        title: value,
        completed: false
      })
    }
    const removeItemTodo = (index:any) => {
      todos.value.splice(index, 1)
    }
    return {
      todos,
      addDataTodo,
      removeItemTodo
    }
  }
}
</script>

<style lang="scss">
.todo {
    background-color: $background-widget;
    color: $color-white;
    width: $width-app;
    height: $height-app;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: -1;
}
</style>
