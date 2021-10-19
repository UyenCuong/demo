<template>
  <div id="nav">
    <router-link :to="{name: 'demo1'}" class="demo1">Demo 1</router-link>
    <router-link :to="{name: 'demo2'}" class="demo2">Demo 2</router-link>
    <router-link :to="{name: 'demo3'}" class="demo3">Demo 3</router-link>
    <router-link :to="{name: 'demo4'}" class="demo4">Demo 4</router-link>
  </div>
  <div class="container">
      <router-view/>
  </div>
</template>

<style lang="scss">
.color {
  color: $promaryColor
}
.demo1, .demo2, demo3, .demo4 {
  margin: 20px;
}
.container {
  text-align: center;
}
</style>
