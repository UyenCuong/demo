<template>
  <ContentsToolbar></ContentsToolbar>
  <div class="row-content">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="{ span: 4 }" v-for="(item, index) in data" :key="index">
        <ContentAppsItem :src="item.src" :title="item.title" />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import ContentsToolbar from './ContentsToolbar.vue'
import ContentAppsItem from './ContentAppsItem.vue'

export default {
  components: {
    ContentsToolbar,
    ContentAppsItem
  },
  props: {
    data: {
      type: Array
    }
  }
}

</script>

<style lang="scss">

</style>
