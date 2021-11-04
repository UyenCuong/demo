<template>
  <div class="toolbar">
    <slot name="title">
      <div><span>Apps 13</span></div>
    </slot>
    <div class="contenttoolbar">
        <app-icon :name="'magnify'"></app-icon>
    <slot name="action">
      <div>
        <app-icon :name="'plus'"></app-icon>
      </div>
    </slot>
    <app-icon :name="'dots-horizontal'"></app-icon>
    <app-icon :name="'arrow-expand'"></app-icon>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.contenttoolbar {
    display: flex;
    justify-content: space-between;
}
</style>
