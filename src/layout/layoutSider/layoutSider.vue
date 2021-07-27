<template>
  <a-layout-sider
    v-model:collapsed="isCollapsed"
    class="main-sider"
    :class="[`${theme}-bcg-imp`]"
    :style="{ borderRight: theme === 'dark' ? 'none' : '1px solid #f0f0f0' }"
    :trigger="null"
    collapsible
  >
    <!-- logo图标 -->
    <div class="logo">
      <div class="logo-container">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <span :class="[`logo-text-${collapsed ? 'hide' : 'show'}`, `${theme}-color`]">Website Library</span>
    </div>
    <a-menu
      v-model:selectedKeys="activeMain"
      :style="[!collapsed && theme === 'light' ? { borderRight: 'none' } : '']"
      :theme="theme"
      mode="inline"
      @select="handleNavigate"
    >
      <a-menu-item v-for="item in menuList" :key="item.menuId + ''">
        <iconfont :name="item.icon" class="menu-icon" size="20" :color="theme === 'dark' ? '#fff' : '#001529'" />
        <span :class="[`menu-text-${collapsed ? 'hide' : 'show'}`]">{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, PropType, computed } from 'vue'
import { useRouter } from 'vue-router'
import Iconfont from '_c/iconfont/iconfont.vue'
import { MenuConfig } from '@/model/layout'

export default defineComponent({
  name: 'LayoutSider',
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    currTopMenu: {
      type: Array as PropType<MenuConfig[]>
    },
    menuList: {
      type: Array as PropType<MenuConfig[]>
    }
  },
  components: {
    Iconfont
  },
  setup(props, { emit }) {
    const router = useRouter()
    const data = {
      activeMain: ['1']
    }
    const isCollapsed = computed({
      get: () => props.collapsed,
      set: () => {
        emit('handle-collapsed')
      }
    })
    const state = reactive(data)
    // 点击菜单跳转
    const handleNavigate = ({key = 0}) => {
      emit('update-top-menu', key)
      setTimeout(() => {
        router.push({ name: (props.currTopMenu as MenuConfig[])[0].name })
      }, 0)
    }
    return {
      ...toRefs(state),
      isCollapsed,
      handleNavigate
    }
  }
})
</script>
<style lang="scss" scoped>
.main-sider {
  border-right: 1px solid #f0f0f0;
  height: 100vh;
  :deep(.ant-menu) {
    .ant-menu-item {
      display: flex;
      &:first-child {
        margin-top: 0;
      }
    }
  }
  :deep(.ant-menu-title-content) {
    display: flex;
  }
  .menu-text-show {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .menu-text-hide {
    display: inline-block;
    max-width: 0;
    opacity: 0;
  }
  :deep(.menu-icon) {
    margin-right: 8px;
  }
  .logo {
    height: 32px;
    margin: 16px 16px 16px 24px;
    display: flex;
    align-items: center;
    .logo-text-show {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .logo-text-hide {
      display: inline-block;
      max-width: 0;
      opacity: 0;
    }
    .logo-container {
      width: 32px;
      height: 32px;
      img {
        height: 100%;
      }
    }
    span {
      display: inline-block;
      min-width: 104px;
      font-weight: 500;
      margin-left: 10px;
    }
  }
}
</style>
