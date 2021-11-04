 <template>
  <a-layout-sider :width="60">
    <div class="headerlayoutvertical" />
    <a-menu theme="dark" mode="vertical" :style="{ lineHeight: '64px' }">
      <div class="header__menu--vertical">
        <div>
          <a-menu-item key="5">
            <app-icon :name="'alpha-n'"></app-icon>
          </a-menu-item>
          <div class="sliderbar">
            <div class="sliderbar__wrap">
              <div>
                <app-icon :name="'plus'" class="mricon"></app-icon>
              </div>
              <div class="sliderbar__wrap--height">
                <div class="sliderbar__bt">
                <div class="sliderbar__height">
                  <app-icon
                    :name="'shield-lock-outline'"
                    class="mricon"
                  ></app-icon>
                  <span class="sliderbar__height--title">Unlock</span>
                </div>
                <div class="sliderbar__height">
                  <app-icon :name="'cog-outline'" class="mricon"></app-icon>
                  <p class="sliderbar__height--title">Setting</p>
                </div>
                <div class="sliderbar__height">
                  <app-icon
                    :name="'help-circle-outline'"
                    class="mricon"
                  ></app-icon>
                  <p  class="sliderbar__height--title">Help?</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
</script>

<style lang="scss">
  .sliderbar__wrap--height {
  height: 800px;
    position: relative;
    .sliderbar__bt{
    position: absolute;
    bottom: 0;
}
}
.mricon {
  margin-left: 15px;
}
.sliderbar__height--title {
  text-align: center;
}
</style>
