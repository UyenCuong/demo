<template>
<div class="todo">
   <TodoHeader />
   <TodoItem
   :todoProps="todos" />
</div>
</template>
<script lang="ts">
import { ref } from 'vue'
import TodoHeader from '@/modules/Demo1/components/Todolist-Header/TodoHeader.vue'
import TodoItem from '@/modules/Demo1/components/Todolist-Content/TodoItem.vue'
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
.todo {
    background-color: $background-widget;
    color: $color-white;
    width: $width-app;
    height: $height-app;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

}
</style>
