<template>
  <div class="slider">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <app-icon :name="'heart-outline'"></app-icon>
          <span>Favorites</span>
        </a-menu-item>
        <a-menu-item key="2">
          <app-icon :name="'lock'"></app-icon>
          <span>Passwords</span>
        </a-menu-item>
        <a-menu-item key="3">
          <app-icon :name="'forum'"></app-icon>
          <span>Chats</span>
        </a-menu-item>
        <a-menu-item key="4">
           <app-icon :name="'toy-brick-outline'"></app-icon>
          <span>Meetings</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <span>INTERNAL DESKTOP</span>
            </span>
          </template>
          <a-menu-item key="5">General</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>SHARED DESKTOPS</span>
            </span>
          </template>
          <a-menu-item key="6">You don't have any shared destops</a-menu-item>
          <a-menu-item key="7">Learn more</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <team-outlined />
              <span>PRIVATE DESKTOP</span>
            </span>
          </template>
          <a-menu-item key="6">You don't have any private destops</a-menu-item>
          <a-menu-item key="7">Learn more</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    </div>
</template>

<script>
export default {
}

</script>

<style>

</style>
