 <template>
  <div class="slderbar">
    <a-layout-sider :width="60">
      <div class="headerlayoutvertical" />
      <a-menu theme="dark" mode="vertical" :style="{ lineHeight: '64px' }">
        <div class="header__menu--vertical">
          <div class="br__avatar">
            <a-avatar
              shape="square"
              size="large"
              :style="{ backgroundColor: color, marginLeft: '10px' }"
            >
              {{ avatarValue }}
            </a-avatar>
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
import { ref } from 'vue'
const UserList = ['N']
const colorList = ['#1d3168']
export default ({
  setup () {
    const avatarValue = ref(UserList[0])
    const color = ref(colorList[0])
    const changeValue = () => {
      const index = UserList.indexOf(avatarValue.value)
      avatarValue.value = index < UserList.length - 1 ? UserList[index + 1] : UserList[0]
      color.value = index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
    }
    return {
      avatarValue,
      color,
      changeValue
    }
  }
})
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
}
</style>
