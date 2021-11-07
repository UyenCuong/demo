<template>
  <div class="contentdeskitem">
    <ContentsToolbar>
      <template v-slot:title>
        <div class="fonttitle"><span>Link 11</span></div>
      </template>
      <template v-slot:action>
        <app-icon :name="'folder-plus-outline'"></app-icon>
      </template>
    </ContentsToolbar>
    <div class="row-content">
      <a-row class="folder">
        <a-col :xs="{ span: 5 }" class="row-content--img"
          ><img
            src="https://thumbs.dreamstime.com/z/nfolder-data-folder-vector-icon-editable-125303145.jpg"
          width="100" height="90"/>
          <h5>Admin Support Folder</h5></a-col
        >
      </a-row>
      <a-row class="folder folderitem">
        <a-col :span="8" v-for="(item, index) in data" :key="index">
          <ContentDeskItem :makequestion="item.makequestion" :src="item.src" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import ContentsToolbar from './ContentsToolbar.vue'
import ContentDeskItem from './ContentDeskItem.vue'

export default {
  components: {
    ContentsToolbar,
    ContentDeskItem
  },
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
.contentdeskitem {
  .brk__chat {
    background-color: $background-white;
    border-radius: 4px;
    width: 205px;
    .icon-sp {
      display: flex;
      justify-content: space-between;
      width: 200px;
      .greenicon {
        color: $background-white;
        background: rgb(172, 230, 14);
        margin-left: 3px;
      }
    }
  }
  .row-content--img {
    margin-top: 20px;
  }
  .folderitem {
    margin: 10px 15px;
  }
}
</style>
