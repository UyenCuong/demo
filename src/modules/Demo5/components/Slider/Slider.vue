<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible class="siderbar">
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <div class="siderbar__item"><a-menu-item key="1">
          <app-icon :name="'heart-outline'" ></app-icon>
          <span>Favorites</span>
        </a-menu-item>
        <a-menu-item key="2">
          <app-icon :name="'shield-lock-outline'"></app-icon>
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
               <app-icon :name="'checkbox-blank-circle-outline'"></app-icon>
              <span>INTERNAL DESKTOP</span>
            </span>
          </template>
          <a-menu-item key="5">General</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
               <app-icon :name="'account-box-outline'"></app-icon>
              <span>SHARED DESKTOPS</span>
            </span>
          </template>
          <a-menu-item key="6">You don't have any shared destops</a-menu-item>
          <a-menu-item key="7">Learn more</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
                <app-icon :name="'account-multiple-outline'"></app-icon>
              <span>PRIVATE DESKTOP</span>
            </span>
          </template>
          <a-menu-item key="6">You don't have any private destops</a-menu-item>
          <a-menu-item key="7">Learn more</a-menu-item>
        </a-sub-menu></div>
      </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
export default {
}

</script>

<style lang="scss">
.siderbar {
  min-height: 100vh;
  background-color: #ecdddd79;
}
.siderbar__item {
  min-height: 100vh;
  background-color: #ecdddd79;
}
</style>
