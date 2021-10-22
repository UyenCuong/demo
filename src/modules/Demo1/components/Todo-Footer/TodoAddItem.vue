<template>
 <div class="todoFooter">
   <p>{{ addTodo }}</p>
   <div class="todoFooter--add">
      <form @submit.prevent="onSubmit()">
        <input
          v-model="nameTitle"
          type="text"
          class="todoFooter--add__input"
          name="nameTitle"
        />
      </form>
      <button class="todoFooter--add__btn" @click="onSubmit()">Add Item</button>
    </div>
 </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'TodoAddItem',
  props: ['addData'],
  setup (props:any) {
    const addTodo = ref<string>('Add to the todo list')
    const nameTitle = ref('')
    const onSubmit = () => {
      props.addData(nameTitle.value)
      nameTitle.value = ''
    }
    return {
      addTodo,
      nameTitle,
      onSubmit
    }
  }
}
</script>

<style lang="scss">
.todoFooter {
  padding: 0 35px;
  .todoFooter--add {
    display: flex;
    justify-content: space-between;
    .todoFooter--add__input {
      outline: none;
      padding: 17px;
      font-size: 0.93rem;
      border: none;
      border-radius: 2px;
      cursor: auto;
      width: $widthAddItem;
   }
   .todoFooter--add__btn {
    height: $height;
    width: $widthbtn ;
    background-color: $background-transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 0 12px;
    }
 }
}
</style>
