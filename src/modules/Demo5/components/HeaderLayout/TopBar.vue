<template>
  <div class="headerLayout" />
  <a-menu
    theme="dark"
    mode="horizontal"
    v-model:selectedKeys="selectedKeys1"
    :style="{ lineHeight: '64px' }"
  >
    <div class="header__topbar">
      <div>
        <a-menu-item key="1">navan</a-menu-item>
      </div>
      <div>
        <a-input placeholder="Search in desktop" v-model:value="userName">
          <template #prefix>
            <app-icon :name="'magnify'"></app-icon>
          </template>
        </a-input>
      </div>
      <div>
        <a-menu-item key="4">
          <app-icon :name="'briefcase'" class="icontopbar"></app-icon>
          <app-icon :name="'bell'" class="icontopbar"></app-icon>
          <app-icon :name="'account-multiple-outline'" class="icontopbar"></app-icon>
          <app-icon :name="'account-circle'" class="icontopbar"></app-icon>
        </a-menu-item>
      </div>
    </div>
  </a-menu>
</template>
<script lang="ts">
</script>

<style lang="scss">
.ant-layout-header {
  padding: 0;
  .header__topbar {
    display: flex;
    color: white;
    justify-content: space-between;
    width: 100%;
    background-color: #e7cccc79;
    .ant-input-affix-wrapper {
      width: 450px;
    }
    .icontopbar {
          margin: 0 10px;
      }
  }
}

</style>
