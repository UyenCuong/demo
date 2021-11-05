<template>
  <div class="contentchat">
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
          <h4 class="today"><span class="todays">Today</span></h4>
          <a-row type="flex">
            <div class="chat__icon">
              <a-col :span="10"
                ><app-icon
                  :name="'card-multiple-outline'"
                  class="blueicon"
                ></app-icon
              ></a-col>
            </div>
            <a-col :span="14">
              <div class="desktop">
                <p>Destop.com 09:11 AM</p>
                <p class="text">
                  Welcome to Desktop.com This is where you can<br />
                  chat with af other invited<br />
                  members of ths specific desktop. Go ahead and <br />Invite
                  membeif you haven't aiready To<br />
                  start a 1 on 1 chat or a now group chat, s<br />
                  mply go to Chats and click on new chat
                </p>
              </div>
            </a-col>
          </a-row>
          <div class="input">
            <div class="input__space">
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
    </div>
  </div>
</template>

<script>
import ContentsToolbar from './ContentsToolbar.vue'
export default {
  components: {
    ContentsToolbar
  }
}
</script>

<style lang="scss">
.contentchat {
  .text {
    background-color: $background-gray;
    border-radius: 5px;
    width: 190px;
  }
  .input {
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 0 5px;
    .input__space {
      width: 100%;
    }
  }
  .bkr__chats {
    background-color: $background-gray;
    height: 652px;
    padding: 18px;
    border-radius: 5px;
    margin-left: 10px;
    .bkr__center {
      background-color: $background-white;
      height: 615px;
      border-radius: 5px;
      .bkr__center {
        background-color: $background-white;
        height: 630px;
        border-radius: 5px;
      }
      .input__mess {
        width: 100%;
        border-radius: 8px;
      }
      .today {
        width: auto;
        position: relative;
        text-align: center;
        padding-top: 30px;
        z-index: 1;
        &:after {
          content: " ";
          border-top: 1px solid rgb(194, 187, 187);
          position: absolute;
          width: 100%;
          top: 80%;
          left: 0;
          z-index: -1;
          padding: 0 20px;
        }
        .todays {
          background-color: #fff;
          display: inline-block;
        }
      }
      .chat__icon {
        padding-top: 35px;
      }
      .desktop {
        margin-left: 30px;
      }
      .blueicon {
        margin-left: 30px;
        color: blue;
      }
    }
  }
}
</style>
