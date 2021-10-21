<template>
  <div class="todoItem">
      <ul class="todoItem__list"
        v-for="(todo, index) in todoProps" :key="index">
          <li class="todoItem__list--title">
              <p class="todoItem__list--text">{{ todo.title }}</p>
              <input type="checkbox">
        <button>Delete</button>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">

export default {
  name: 'TodoItem',
  props: {
    todoProps: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
$max-widthItem :450px;
$max-heightItem: 200px;
$background-colorItem: rgba(255, 255, 255, 0.2);
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
</style>
