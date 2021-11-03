<template>
 <a-row type="flex">
    <a-col :flex="14" >
        <div class="toolbar">
            <div><span>Apps 13</span></div>
            <div> <app-icon :name="'magnify'"></app-icon>
            <app-icon :name="'plus'"></app-icon>
            <app-icon :name="'dots-horizontal'"></app-icon>
            <app-icon :name="'arrow-expand'"></app-icon></div>
        </div>
        <div class="row-content">
          <a-row type="flex" justify="space-around" align="middle" class="mr__br">
            <a-col :xs="{ span:4}" ><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/hh_meet_512dp.png" alt=""><h5 class="title">Meet</h5></div></a-col>
            <a-col :xs="{ span: 4 }" ><div class="bkr__img"><img src="https://ssl.gstatic.com/images/icons/material/product/1x/contacts_512dp.png"><h5 class="title">Contacts</h5></div></a-col>
            <a-col :xs="{ span: 4 }" ><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/currents_512dp.png" alt=""><h5 class="title">Currents</h5></div></a-col>
            <a-col :xs="{ span: 4 }"><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/hh_docs_512dp.png" alt=""><h5 class="title">Docs</h5></div></a-col>
            <a-col :xs="{ span: 4}"><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/hh_forms_512dp.png" alt=""><h5 class="title">Form</h5></div></a-col>
            <a-col :xs="{ span: 4}"><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_64dp.png" alt=""><h5 class="title">Drive and Docs</h5></div></a-col>
          </a-row>
          <a-row type="flex" justify="space-around" align="middle" class="mr__br">
            <a-col :xs="{ span:4}" ><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/hh_gmail_512dp.png" alt=""><h5 class="title">Gmail</h5></div></a-col>
            <a-col :xs="{ span: 4 }" ><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/hh_chat_512dp.png"><h5 class="title">Google Chat</h5></div></a-col>
            <a-col :xs="{ span: 4 }" ><div class="bkr__img"><img src="https://ssl.gstatic.com/images/icons/material/product/1x/hangouts_512dp.png" alt=""><h5 class="title">Google Hangouts</h5></div></a-col>
            <a-col :xs="{ span: 4 }"><div class="bkr__img"><img src="https://ssl.gstatic.com/images/icons/material/product/1x/groups_512dp.png" alt=""><h5 class="title">Group for Business</h5></div></a-col>
            <a-col :xs="{ span: 4}"><div class="bkr__img"><img src="https://www.gstatic.com/images/branding/product/1x/jamboard_512dp.png" alt=""><h5 class="title">Jamboard</h5></div></a-col>
            <a-col :xs="{ span: 4}"><div class="bkr__img"><img src="https://ssl.gstatic.com/images/branding/product/1x/hh_sheets_512dp.png" alt=""><h5 class="title">Sheets</h5></div></a-col>
          </a-row>
        </div>
        <div class="toolbar">
            <div><span>Links 11</span></div>
            <div> <app-icon :name="'magnify'"></app-icon>
            <app-icon :name="'plus'"></app-icon>
            <app-icon :name="'dots-horizontal'"></app-icon>
            <app-icon :name="'arrow-expand'"></app-icon></div>
        </div>
        <div class="row-content">
          <a-row class="folder">
            <a-col :xs="{ span:5}" ><img src="https://thumbs.dreamstime.com/z/nfolder-data-folder-vector-icon-editable-125303145.jpg" alt=""><h5>Admin Support Folder</h5></a-col>
          </a-row>
          <a-row class="folder">
            <a-col :span="10" >
              <div class="brk__chat">
                  <a-row type="flex">
                    <a-col :flex="3">
                      <app-icon :name="'card-multiple-outline'"></app-icon>
                      <span>www.destop.com</span>
                      <p>Desktop.com Help Center</p>
                    </a-col>
                    <a-col :flex="2"><img src="https://global-uploads.webflow.com/5fdc9a528126120a2b773972/60d1e5dd4a6cb9331c78550a_chat.svg"></a-col>
                  </a-row>
                    <div class="icon-sp">
                        <div>
                          <app-icon :name="'alpha-v'"></app-icon>
                          <app-icon :name="'heart-outline'"></app-icon>
                        </div>
                        <div>
                          <app-icon :name="'dots-horizontal'"></app-icon>
                        </div>
                    </div>
              </div>
            </a-col>
            <a-col :span="10" :offset="2">
                <div class="brk__chat">
                  <a-row type="flex">
                    <a-col :flex="3">
                        <app-icon :name="'card-multiple-outline'"></app-icon>
                        <span>www.destop.com</span>
                        <p>What is a desktop ?</p>
                    </a-col>
                    <a-col :flex="2"><img src="https://global-uploads.webflow.com/5fdc9a528126120a2b773972/60d1e5dd4a6cb9331c78550a_chat.svg"></a-col>
                  </a-row>
                    <div class="icon-sp">
                        <div>
                          <app-icon :name="'alpha-v'"></app-icon>
                          <app-icon :name="'heart-outline'"></app-icon>
                        </div>
                        <div>
                          <app-icon :name="'dots-horizontal'"></app-icon>
                        </div>
                    </div>
                </div>
            </a-col>
            </a-row>
        </div>
    </a-col>
    <a-col :flex="10">
         <div class="toolbar__chat">
            <div><span>Chat</span></div>
            <div> <app-icon :name="'magnify'"></app-icon>
            <app-icon :name="'comment-multiple-outline'"></app-icon>
            <app-icon :name="'dots-horizontal'"></app-icon>
            <app-icon :name="'arrow-expand'"></app-icon></div>
        </div>
        <div class="bkr__chats">
            <div class="bkr__center">
                <div class="bkr__center--wrap">
                 <p class="today">Today</p>
                <a-row>
                    <a-col><app-icon :name="'card-multiple-outline'"></app-icon></a-col>
                <a-col>
                    <div claa="desktop">
                        <p>Destop.com 09:11 AM</p>
                <p>Welcome to Desktop.com<br> This is where you can chat with<br> af other invited members of ths<br> specific desktop. Go ahead<br> and Invite membeif you haven't<br> aiready To start a 1 on 1 chat<br> or a now group chat, s mply go <br>to Chats and click on new chat</p>
                </div>
               </a-col>
                </a-row>
                 <a-input class ="input__mess" placeholder="Message General" />
            </div>
            </div>
        </div>
    </a-col>
  </a-row>
</template>

<script>
export default {

}
</script>

<style>
.content {
    background: white;
    height: 709px;
    width: 1025px;
}
.toolbar {
    display: flex;
    justify-content: space-between;
}
.toolbar__chat{
  display: flex;
    justify-content: space-between;
}
img {
     height: 100px;
      object-fit: cover;
      width: 100px;
      margin: 5px;
      border-radius: 3px;
}
.row-content {
    margin-left: 15px;
    border-radius: 5px;
    background: #bfbfbf;
    height: 340px;
}
.bkr__img {
    background-color: white;
    height: 130px;
    width: 120px;
    border-radius: 4px;
     margin-top: 20px;
}
.mr__br {
    margin-bottom: 15px;
    margin-left: 10px;
}
.title {
    text-align: center;
}
.brk__chat {
    background-color: white;
    border-radius: 4px;
}
.icon-sp {
    display: flex;
    justify-content: space-between;
}
.folder {
    margin-top: 20px;
    margin-left: 10px;
}
.bkr__chats {
    background-color: #bfbfbf;
    height:725px;
    width: 300px;
    padding: 18px;
    border-radius: 5px;
}
.today {
    text-align: center;
}
.bkr__center {
    background-color: white;
    height: 700px;
    width: 270px;
    border-radius: 5px;
}
.input__mess {
    width: 240px;
    margin-left: 20px;
    border-radius: 5px;
    margin-top: 380px;
}

</style>
