<template>
  <div class="headerform">
   <form class="form-input">
    <div class="form-input-name">
      <h4>Name</h4>
      <input type="text" class="headerform__input">
    </div>
    <div class="form-input-email">
      <h4>Email</h4>
      <input type="email"  class="headerform__input">
    </div>
    <div class="form-input-team">
      <h4>Team Member</h4>
     <select class="headerform__input">
    <option v-for="option in options" :value="option.text" :key="option.text">
      {{ option.text }}
    </option>
     </select>
    </div>
  </form>
 </div>
</template>

<script lang="ts">
interface options {
  text: string
}
export default {
  setup () {
    const options:Array<options> = [
      { text: 'Team1' },
      { text: 'Team2' },
      { text: 'Team3' }
    ]
    return {
      options
    }
  }
}
</script >

<style lang="scss">
.headerform {
    margin-bottom: 20px;
    position: relative;
    .headerform__input {
      width: 100%;
      height: 32px;
    }
}
</style>
