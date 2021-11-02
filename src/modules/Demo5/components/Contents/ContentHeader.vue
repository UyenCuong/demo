<template>
          <div class="content__header">
            <div>
             <a-button type="text">General
                <app-icon :name="'chevron-down'"></app-icon>
            </a-button>
            </div>
            <div>
              <a-button>
                <app-icon :name="'clock-time-four-outline'"></app-icon>
                    Activiti
                </a-button>
              <a-button >
                <app-icon :name="'account-multiple-outline'"></app-icon>
                    Share
                </a-button>
              <a-button type="primary">
                  <app-icon :name="'plus'"></app-icon>
                    Add
              </a-button>
                  <app-icon :name="'phone-outline'"></app-icon>
                  <app-icon :name="'video-outline'"></app-icon>
            </div>
         </div>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
</template>

<script>
export default {

}
</script>

<style>

</style>
