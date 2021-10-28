<template>
 <div class="todoFooter">
   <p>{{ addTodo }}</p>
   <div class="todoFooter--add">
      <form @submit.prevent="onSubmit()">
        <a-input v-model:value="nameTitle" class="todoFooter--add__input" />
      </form>
      <button class="todoFooter--add__btn" @click="onSubmit()">Add Item</button>
    </div>
 </div>
</template>

<script lang="ts">
import { ref, SetupContext } from 'vue'

export default {
  name: 'TodoAddItem',
  emit: ['addData'],
  setup (props:any, { emit }:SetupContext) {
    const addTodo = ref<string>('Add to the todo list')
    const nameTitle = ref('')
    const onSubmit = () => {
      emit('addData', nameTitle.value)
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
    width: $widthbtn ;
    background-color: $background-transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 0 12px;
    }
 }
}
</style>
