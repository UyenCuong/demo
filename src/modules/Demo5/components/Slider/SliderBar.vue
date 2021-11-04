 <template>
 <a-layout-sider :width="60">
     <div class="headerlayoutvertical" />
      <a-menu
        theme="dark"
        mode="vertical"
        :style="{  lineHeight: '64px' }"
      >
        <div class="header__menu--vertical">
          <div>
              <a-menu-item key="5">
                  <app-icon :name="'alpha-n'" ></app-icon>
              </a-menu-item>
              <div class="sliderbar">
                <div><div>
                    <app-icon :name="'plus'" class="mricon"></app-icon>
                  </div>
                <div>
                 <app-icon :name="'shield-lock-outline'" class="mricon"></app-icon>
                 <p>Unlock</p>
                 <app-icon :name="'cog-outline'" class="mricon"></app-icon>
                 <p>Setting</p>
                  <app-icon :name="'help-circle-outline'" class="mricon"></app-icon>
                 <p>Help?</p>
                </div>
              </div></div>
          </div>
        </div>
      </a-menu>
</a-layout-sider></template>
<script lang="ts">

</script>

<style lang="scss">
.ant-layout-sider-children .ant-menu.ant-menu-inline-collapsed {
    width: 30px;
}
.mricon {
  margin-left: 15px;
}
</style>
