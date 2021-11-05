 <template>
  <div class="slderbar">
    <a-layout-sider :width="60">
      <div class="headerlayoutvertical" />
      <a-menu theme="dark" mode="vertical" :style="{ lineHeight: '64px' }">
        <div class="header__menu--vertical">
          <div>
            <a-menu-item key="5">
              <div class="iconbr"> <app-icon :name="'alpha-n'" class="iconN"></app-icon></div>
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
                      <p class="sliderbar__height--title">Help?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-menu>
    </a-layout-sider>
  </div>
</template>
<script lang="ts">
</script>

<style lang="scss">
.slderbar {
  .sliderbar__wrap--height {
    height: 740px;
    position: relative;
    .sliderbar__bt {
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
  .iconbr {
    background: #1d3168;
    border: 1px solid blue;
    width: 35px;
    height: 35px;
    margin-top: 5px;
    border-radius: 2px;
    .iconN{
      margin-left: 5px;
    }
  }
}
</style>
