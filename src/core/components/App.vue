<template>
  <div id="nav">
    <router-link :to="{name: 'demo1'}" class="demo1">Demo 1</router-link>
    <router-link :to="{name: 'demo2'}" class="demo2">Demo 2</router-link>
    <router-link :to="{name: 'demo3'}" class="demo3">Demo 3</router-link>
    <router-link :to="{name: 'demo4'}" class="demo4">Demo 4</router-link>
    <router-link :to="{name: 'demo5'}" class="demo5">Demo 5</router-link>
  </div>
  <div class="container">
      <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  background-color: hsl(0, 0%, 93%);
  height: $height;
  text-align: center;
  width: 100%
}
.color {
  color: $promaryColor
}
.demo1, .demo2, .demo3, .demo4, .demo5 {
  margin: 20px;
  text-decoration: none;
}
.container {
}
</style>
