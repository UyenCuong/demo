<template>
  <div class="headerLayout" />
    <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }">
      <div class="header__topbar">
          <div>
              <a-menu-item key="1">navan</a-menu-item>
          </div>
          <div>
              <a-menu-item key="3">
              <app-icon :name="'magnify-plus-outline'"></app-icon>
                    Search in desktop
              </a-menu-item>
          </div>
          <div>
              <a-menu-item key="4">
                 <app-icon :name="'briefcase'"></app-icon>
                 <app-icon :name="'bell'"></app-icon>
                 <app-icon :name="'account-multiple-outline'"></app-icon>
                 <app-icon :name="'account-circle'"></app-icon>
             </a-menu-item>
          </div>
      </div>
    </a-menu>
</template>
<script lang="ts">

</script>

<style lang="scss">
.header__topbar {
    display: flex;
    color: white;
    justify-content: space-between;
    width: 100%;
}
.ant-layout-header {
      padding: 0;
    }
</style>
