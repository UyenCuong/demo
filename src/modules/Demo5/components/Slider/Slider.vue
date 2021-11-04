<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible class="siderbar">
    <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
      <div class="siderbar__item">
        <a-menu-item key="1">
          <app-icon :name="'heart-outline'"></app-icon>
          <span :class="{ hiden: collapsed }">Favorites</span>
        </a-menu-item>
        <a-menu-item key="2">
          <app-icon :name="'shield-lock-outline'"></app-icon>
          <span :class="{ hiden: collapsed }">Passwords</span>
        </a-menu-item>
        <a-menu-item key="3">
          <app-icon :name="'forum'"></app-icon>
          <span :class="{ hiden: collapsed }">Chats</span>
        </a-menu-item>
        <a-menu-item key="4">
          <app-icon :name="'toy-brick-outline'"></app-icon>
          <span :class="{ hiden: collapsed }">Meetings</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <app-icon :name="'checkbox-blank-circle-outline'"></app-icon>
              <span :class="{ hiden: collapsed }">INTERNAL DESKTOP</span>
            </span>
          </template>
          <a-menu-item key="5" class="clorItem">General</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <app-icon :name="'account-box-outline'"></app-icon>
              <span :class="{ hiden: collapsed }">SHARED DESKTOPS</span>
            </span>
          </template>
          <div class="clorItem">
          <a-menu-item key="6" >You don't have any shared destops</a-menu-item>
          <a-menu-item key="7" >Learn more</a-menu-item>
          </div>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <app-icon :name="'account-multiple-outline'"></app-icon>
              <span :class="{ hiden: collapsed }">PRIVATE DESKTOP</span>
            </span>
          </template>
          <div class="clorItem">
            <a-menu-item key="8" >You don't have any private destops</a-menu-item>
          <a-menu-item key="9" >Learn more</a-menu-item>
          </div>
        </a-sub-menu>
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup () {
    const collapsed = ref<boolean>(false)
    return {
      collapsed
    }
  }
}
</script>

<style lang="scss">

.siderbar {
  min-height: 100vh;
  &__item {
    min-height: 100vh;
    background-color: $backround-slide;
  }
  .ant-layout-sider-children {
    background-color: $backround-slide;
  }
  .ant-layout-sider-trigger {
    background-color: $backround-slide;
  }
  .ant-menu-item {
    margin-top: 0;
  }
  .hiden {
    display: none;
  }
  .clorItem{
    background-color:$backround-slide ;
  }
}
</style>
