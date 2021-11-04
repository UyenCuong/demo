<template>
  <div class="bkr__chats">
    <div class="bkr__center">
      <div class="bkr__center--wrap">
        <p class="today">Today</p>
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
</template>

<script>
export default {}
</script>

<style lang="scss">
.text {
  background-color: $background-gray;
  border-radius: 5px;
  width: auto;
}
</style>
