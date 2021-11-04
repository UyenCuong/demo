<template>
  <a-row type="flex">
    <a-col :span="16">
      <ContentsToolbar></ContentsToolbar>
      <div class="row-content">
        <a-row type="flex" justify="space-around" align="middle">
          <a-col :xs="{ span: 4 }">
      <ul >
        <li v-for="app in apps" :key="app">
          <div class="bkr__img">
          <img
              {{img}}
          />
        <h5 class="title">{{title}}</h5>
        </div>
        </li>
      </ul>
        </a-row>
        <a-row type="flex" justify="space-around" align="middle" class="mr__br">
          <a-col :xs="{ span: 4 }">
      <ul >
        <li v-for="apptow in apptows" :key="apptow">
          <div class="bkr__img">
          <img
              {{img}}
          />
        <h5 class="title">{{title}}</h5>
        </div>
        </li>
      </ul>
        </a-row>
      </div>
      <ContentsToolbar>
        <template v-slot:title>
          <div  class="fonttitle"><span>Link 11</span></div>
        </template>
        <template v-slot:action>
          <app-icon :name="'folder-plus-outline'"></app-icon>
        </template>
      </ContentsToolbar>
      <div class="row-content">
        <a-row class="folder">
          <a-col :xs="{ span: 5 }"
            ><img
              src="https://thumbs.dreamstime.com/z/nfolder-data-folder-vector-icon-editable-125303145.jpg"
              alt=""
            />
            <h5>Admin Support Folder</h5></a-col
          >
        </a-row>
        <a-row class="folder">
          <a-col :span="10">
            <ContentDesk></ContentDesk>
          </a-col>
          <a-col :span="10" :offset="2">
            <ContentDesk>
              <template v-slot:namedesk>
                <p>What is a desktop ?</p>
              </template>
            </ContentDesk>
          </a-col>
        </a-row>
      </div>
    </a-col>
    <a-col :span="8">
      <ContentsToolbar>
        <template v-slot:title>
          <div class="fonttitle"><span>Chat</span></div>
        </template>
        <template v-slot:action>
          <app-icon :name="'comment-multiple-outline'"></app-icon>
        </template>
      </ContentsToolbar>
      <div class="bkr__chats">
        <div class="bkr__center">
          <div class="bkr__center--wrap">
            <p class="today">Today</p>
            <a-row>
              <div class="chat__icon">
                <a-col
                  ><app-icon :name="'card-multiple-outline'" class="blueicon"></app-icon
                ></a-col>
              </div>
              <a-col>
                <div class="desktop">
                  <p>Destop.com 09:11 AM</p>
                  <p class="text">
                    Welcome to Desktop.com<br />
                    This is where you can chat with<br />
                    af other invited members of ths<br />
                    specific desktop. Go ahead<br />
                    and Invite membeif you haven't<br />
                    aiready To start a 1 on 1 chat<br />
                    or a now group chat, s mply go <br />to Chats and click on
                    new chat
                  </p>
                </div>
              </a-col>
            </a-row>
            <div>
              <a-input
                placeholder="Message General"
                v-model:value="userName"
                class="input__mess"
              >
                <template #suffix>
                  <app-icon :name="'paperclip'"></app-icon>
                  <app-icon :name="'refresh-auto'"></app-icon>
                  <app-icon :name="'send'"></app-icon>
                </template>
              </a-input>
            </div>
          </div>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import ContentDesk from './ContentDesk.vue'
import ContentsToolbar from './ContentsToolbar.vue'
export default {
  components: {
    ContentsToolbar,
    ContentDesk
  },
  props: {
    apps: {
      type: Array
    },
    apptows: {
      type: Array
    }
  },
  setup () {
    const apps:Array<apps> = [
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_meet_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/icons/material/product/1x/groups_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_docs_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_forms_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_chat_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/icons/material/product/1x/hangouts_512dp.png', title: 'Meet' }
    ]
    const apptows:Array<apptow> = [
      { src: 'https://www.gstatic.com/images/branding/product/1x/jamboard_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_sheets_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_docs_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_docs_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/icons/material/product/1x/groups_512dp.png', title: 'Meet' },
      { src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_docs_512dp.png', title: 'Meet' }
    ]
    return {
      apps,
      apptow
    }
  }
}
</script>

<style lang="scss">

.row-content {
  margin-left: 15px;
  border-radius: 5px;
  background:  $background-gray;
  height: 340px;
  .folder {
    margin-top: 20px;
    margin-left: 10px;
  }
  .title {
    text-align: center;
  }
  .toolbar__chat {
    display: flex;
    justify-content: space-between;
    .content {
      background: $background-white;
      height: 709px;
      width: auto;
    }
  }
}

.bkr__chats {
  background-color:  $background-gray;
  height: 728px;
  padding: 18px;
  border-radius: 5px;
  margin-left: 10px;
  .bkr__center {
    background-color: $background-white;
    height: 700px;
    border-radius: 5px;
    .input__mess {
      width: auto;
      margin-left: 20px;
      border-radius: 5px;
      margin-top: 360px;
    }
    .today {
      text-align: center;
      padding-top: 10px;
    }
  }
  .chat__icon {
    padding-top: 35px;
  }
  .text {
    background-color:  $background-gray;
  }
  .desktop {
    margin-left: 30px;
  }
  .blueicon {
    color: $blue;
  }
}

</style>
