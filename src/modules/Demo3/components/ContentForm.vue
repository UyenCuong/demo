<template>
  <h4>Frameworks</h4>
  <form action="" class="formframework">
    <div class="framework">
      <ul v-for="framework in frameworks" :key="framework.id" class="framework__list">
        <li class="framework__list--title">
           <input class="framework__list--input" type="radio" name="lang">
           <p>{{ framework.title }}</p>
        </li>
        </ul>
    </div>
  </form>
</template>

<script lang="ts">
  interface frameworks {
  id: string;
  title: string;
}
export default {
  setup () {
    const frameworks:Array<frameworks> = [
      { id: '1', title: 'AngularJS' },
      { id: '2', title: 'ReactJS' },
      { id: '3', title: 'VueJS' }
    ]
    return {
      frameworks
    }
  }
}
</script>

<style lang="scss">
.formframework {
  display: flex;
  align-items: center;
  height: 30px;
  .framework {
    align-items: center;
    display: flex;
    width: 33%;
    .framework__list {
      list-style-type: none;
      text-align: center;
      padding: 0;
    .framework__list--title {
      display: flex;
    .framework__list--input {
      height: 42px;
    }
    }
    }
  }
}
</style>
