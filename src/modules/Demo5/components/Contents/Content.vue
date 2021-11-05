<template>
  <div class="content">
    <a-row type="flex">
      <a-col :span="16">
        <ContentApps :data="appData" />
        <ContentDesk :data="question" />
      </a-col>
      <a-col :span="8">
        <ContentChat />
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import ContentDesk from './ContentDesk.vue'
import ContentApps from './ContentApps.vue'
import ContentChat from './ContentChat.vue'

interface App {
  src: string;
  title: string;
}
interface Desktop {
  makequestion: string;
  src: string;
}
export default {
  components: {
    ContentApps,
    ContentDesk,
    ContentChat
  },

  setup () {
    const appData: Array<App> = [
      {
        src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_meet_512dp.png',
        title: 'Meet'
      },
      {
        src: 'https://ssl.gstatic.com/images/icons/material/product/1x/groups_512dp.png',
        title: 'Groups Business'
      },
      {
        src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_docs_512dp.png',
        title: 'Docs'
      },
      {
        src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_forms_512dp.png',
        title: 'Forms'
      },
      {
        src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_chat_512dp.png',
        title: 'Google Chat'
      },
      {
        src: 'https://ssl.gstatic.com/images/icons/material/product/1x/hangouts_512dp.png',
        title: 'Google Hangouts'
      },
      {
        src: 'https://www.gstatic.com/images/branding/product/1x/jamboard_512dp.png',
        title: 'Jamboard'
      },
      {
        src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_gmail_512dp.png',
        title: 'Gmail'
      },
      {
        src: 'https://ssl.gstatic.com/keep/icon_2020q4_128.png',
        title: 'Keep'
      },
      {
        src: 'https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_64dp.png',
        title: 'Drive and Docs'
      },
      {
        src: 'https://ssl.gstatic.com/images/icons/material/product/1x/contacts_512dp.png',
        title: 'Contacts'
      },
      {
        src: 'https://ssl.gstatic.com/images/branding/product/1x/hh_sheets_512dp.png',
        title: 'Sheets'
      }
    ]
    const question: Array<Desktop> = [
      {
        makequestion: 'Desktop.com Help Center',
        src: 'https://cdn.desktop.com/assets/images/ddbd3a0a-dc44-11eb-9582-42010a200015/content/link-data-6a1a71a3-a409-11eb-9567-42010a200013-preview-60e0d53e02735012819475.png?w=76&h=76'
      },
      {
        makequestion: 'What is a desktop ?',
        src: 'https://cdn.desktop.com/assets/images/e21a57c4-dc44-11eb-9582-42010a200015/content/link-data-d36ea6ef-d9d6-11eb-9582-42010a200015-preview-60e0d54558ba1303269651.png?w=76&h=76'
      },
      {
        makequestion: 'How to create a desktop ?',
        src: 'https://cdn.desktop.com/assets/images/e7263fd0-dc44-11eb-9582-42010a200015/content/link-data-d36c72d6-d9d6-11eb-9582-42010a200015-preview-60e0d54dc7849799142598.png?w=76&h=76'
      }
    ]
    return {
      appData,
      question
    }
  }
}
</script>

<style lang="scss">
  .row-content {
    margin-left: 15px;
    border-radius: 5px;
    background: $background-gray;
    height: 300px;
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
</style>
