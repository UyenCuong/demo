<template>
   <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <div class="content__header">
            <div>
              <a-breadcrumb-item>Geberal
                <app-icon :name="'chevron-down'"></app-icon>
              </a-breadcrumb-item>
            </div>
            <div>
              <a-breadcrumb-item><a-button>
                <app-icon :name="'clock-time-four-outline'"></app-icon>
                    Activiti
                </a-button></a-breadcrumb-item>
              <a-breadcrumb-item><a-button >
                <app-icon :name="'account-multiple-outline'"></app-icon>
                    Share
                </a-button></a-breadcrumb-item>
              <a-breadcrumb-item><a-button type="primary">
                  <app-icon :name="'plus'"></app-icon>
                    Add
              </a-button></a-breadcrumb-item>
                  <app-icon :name="'phone-outline'"></app-icon>
                  <app-icon :name="'video-outline'"></app-icon>
            </div>
         </div>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
</template>

<script>
export default {

}
</script>

<style>
.content__header {
  display: flex;
  justify-content: space-between;
}
</style>
