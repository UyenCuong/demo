<template>
  <a-layout>
      <div class="headerlayoutvertical" />
      <a-menu
        theme="dark"
        mode="vertical"
        :style="{  lineHeight: '64px', width:'70px',height:'100%',position:'absolute',left:'0'}"
      >
        <div class="header__menu--vertical">
          <div>
              <a-menu-item key="5">
                  <app-icon :name="'alpha-n'"></app-icon>
              </a-menu-item>
          </div>
        </div>
      </a-menu>
    </a-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
