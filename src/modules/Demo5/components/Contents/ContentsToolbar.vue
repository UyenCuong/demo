<template>
  <div class="toolbar">
    <slot name="title">
      <div class="fonttitle"><span >Apps 13</span></div>
    </slot>
    <div class="contenttoolbar">
      <app-icon :name="'magnify'" class="contenttoolbar__icon"></app-icon>
      <slot name="action">
        <div>
          <app-icon :name="'plus'" class="contenttoolbar__icon"></app-icon>
        </div>
      </slot>
      <app-icon
        :name="'dots-horizontal'"
        class="contenttoolbar__icon"
      ></app-icon>
      <app-icon :name="'arrow-expand'" class="contenttoolbar__icon"></app-icon>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.toolbar {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  .fonttitle {
    color: black;
    font-weight: 500;
    margin-left: 10px;
  }
  .contenttoolbar {
    display: flex;
    justify-content: space-between;
    &__icon {
      margin: 0 10px;
    }
  }

}
</style>
