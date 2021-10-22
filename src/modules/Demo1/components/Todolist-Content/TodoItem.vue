<template>
  <div class="todoItem">
    <ul class="todoItem__list"
      v-for="(todo, index) in todoProps"
      :key="index">
        <li class="todoItem__list--title">
          <p class="todoItem__list--text"
            :class="{'is-completed': todo.completed}">
            {{ todo.title }}</p>
          <input type="checkbox"
            v-model="todo.completed">
          <button @click="removeItemTodo(index)">
            Delete
          </button>
        </li>
    </ul>
  </div>
    <h4 class="empty__list"
        v-if="todoProps.length === 0">
        Empty list.
    </h4>
</template>

<script lang="ts">

export default {
  name: 'TodoItem',
  props: {
    todoProps: {
      type: Array
    },
    removeItemTodo: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.todoItem {
  margin-top: 30px;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: $max-widthItem;
  max-height: $max-heightItem;
  .todoItem__list{
    list-style-type: none;
    margin: 0;
    padding: 0;
    .todoItem__list--title {
        background-color:$background-colorItem;
        margin-bottom: 4px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 35px;
    .todoItem__list--text {
        text-align: left;
        width: 300px;
        overflow: hidden;
        word-break: break-all;
        line-height: 50px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        max-width: 300px;
        }
    }
  }
}
.is-completed {
  text-decoration: line-through;
}
.empty__list {
  text-align: center;
}
</style>
