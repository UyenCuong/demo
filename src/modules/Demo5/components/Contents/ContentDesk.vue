<template>
   <div class="brk__chat">
              <a-row type="flex">
                <a-col :flex="3">
                  <app-icon :name="'card-multiple-outline'"></app-icon>
                  <span>www.destop.com</span>
                   <slot name="namedesk"> <p>Desktop.com Help Center</p></slot>
                </a-col>
                <a-col :flex="2"
                  ><img
                    src="https://global-uploads.webflow.com/5fdc9a528126120a2b773972/60d1e5dd4a6cb9331c78550a_chat.svg"
                /></a-col>
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
</template>

<script>
export default {

}
</script>

<style>
.brk__chat {
    background-color: white;
    border-radius: 4px;
}
</style>
