<template>
  <h4>Feature</h4>
    <form action="" class="form-feature">
      <div class="form-feature">
        <input type="checkbox" v-model="checked" :value="lang.id">
        <p>{{ lang.name }}</p>
      </div>
      <div class="form-feature-all" v-for="lang in langs" :key="lang.id">
        <input type="checkbox" v-model="checkAll">
        <p>checkAll</p>
      </div>
    </form>
</template>

<script lang="ts">
interface langs {
  id: string;
  name: string;
}
export default {
  setup () {
    const langs:Array<langs> = [
      { id: '1', name: 'Reactivity' },
      { id: '2', name: 'Encapsulation' },
      { id: '3', name: 'Data Binding' }
    ]
    const checked: Array<[]> = []
    return {
      langs,
      checked
    }
  },
  computed: {
    checkAll: {
      get: function () {
        return this.langs ? this.checked.length === this.langs.length : false
      },
      set: function (value) {
        var checked = []
        if (value) {
          this.langs.forEach(function (lang) {
            checked.push(lang.id)
          })
        }
        this.checked = checked
      }
    }
  }
}
</script>

<style lang="scss">

</style>
