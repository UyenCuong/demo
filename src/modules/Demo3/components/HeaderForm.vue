<template>
  <form class="form-input">
    <div class="form-input-name">
      <h4>Name</h4>
      <input type="text">
    </div>
    <div class="form-input-email">
      <h4>Email</h4>
      <input type="email">
    </div>
    <div class="form-input-team">
      <h4>Team Member</h4>
      <select v-model="select" name="member" id="select-team-member">
        <option value="">Team 1</option>
        <option value="">Team 2</option>
        <option value="">Team 3</option>
        <option value="">Team 4</option>
        <option value="">Team 5</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>
