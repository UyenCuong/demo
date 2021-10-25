<template>
  <h4>Feature</h4>
    <form action="" class="form-feature">
        <div class="form__feature--checked">
        <ul v-for="lang in langs" :key="lang.name" class="form__feature--list" >
          <li class="form__feature--title">
            <input type="checkbox" class="form__feature--input" v-model="lang.comleted">
        <p>{{ lang.name }}</p>
          </li>
        </ul>
      </div>
      <div class="form__feature--all">
        <input
        type="checkbox"
        class="form__feature--input"
         v-model="allSelected">
        <p>CheckAll</p>
      </div>
    </form>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
interface langs {
  id: string;
  name: string;
  comleted: boolean;
}
export default {
  setup () {
    const langs:Array<langs> = [
      { id: '1', name: 'Reactivity', comleted: false },
      { id: '2', name: 'Encapsulation', comleted: false },
      { id: '3', name: 'Data Binding', comleted: false }
    ]
    return {
      langs
    }
  }
}
</script>

<style lang="scss">
.form__feature--checked {
  display: flex;
  .form__feature--list {
    padding: 0;
    margin: 0;
  }
  .form__feature--title {
    list-style-type: none;
    text-align: center;
    display: flex;
    padding: 0;
    .form__feature--input {
       height: 42px;
    }
  }
}
.form__feature--all {
  text-align: center;
  display: flex;
;
  .form__feature--input {
       height: 42px;
}
}
</style>
