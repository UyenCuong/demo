<template>
  <div class="contents__header">
    <div class="content__header">
      <div>
        <a-button type="text"
          >General
          <app-icon :name="'chevron-down'"></app-icon>
        </a-button>
      </div>
      <div>
        <a-button class="btntoolbar">
          <app-icon :name="'clock-time-four-outline'"></app-icon>
          Activiti
        </a-button>
        <a-button class="btntoolbar">
          <app-icon :name="'account-multiple-outline'"></app-icon>
          Share
        </a-button>
        <a-button type="primary" class="btntoolbar">
          <app-icon :name="'plus'"></app-icon>
          Add
        </a-button>
        <app-icon
          :name="'phone-outline'"
          class="coloricon btntoolbar"
        ></app-icon>
        <app-icon
          :name="'video-outline'"
          class="coloricon btntoolbar"
        ></app-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contents__header {
  .content__header {
    display: flex;
    justify-content: space-between;
    background-color: $background-white;
    .btntoolbar {
      margin: 0 4px;
    }
    .coloricon {
      color: $blue;
    }
  }
}
</style>
