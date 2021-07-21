<template>
  <a-layout-header class="main-header" :style="{ width: `calc(100% - 80px)` }">
    <!-- 展开图标 -->
    <div :class="['trigger', `${theme}-bcg`]" :style="{ borderColor: theme === 'dark' ? '#001529' : '#f0f0f0' }" @click="$emit('handle-collapsed')">
      <iconfont v-if="collapsed" name="zhankai" size="24" :color="theme === 'dark' ? '#fff' : '#001529'" />
      <iconfont v-else name="shouqi" size="24" :color="theme === 'dark' ? '#fff' : '#001529'" />
    </div>
    <!-- 二级目录 -->
    <a-menu v-model:selectedKeys="activeSecondary" :theme="theme" mode="horizontal" @select="handleNavigate">
      <a-menu-item v-for="item in currTopMenu" :key="item.menuId + ''">{{ item.title }}</a-menu-item>
      <a-switch checked-children="light" un-checked-children="dark" :checked="theme === 'light'" @change="changeTheme" />
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { useRouter } from 'vue-router'
import Iconfont from '_c/iconfont/iconfont.vue'
import { MenuConfig } from '@/model/layout'

export default defineComponent({
  name: 'LayoutHeader',
  components: {
    Iconfont
  },
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    active: {
      type: Array as PropType<string[]>,
      default: () => (['1001'])
    },
    currTopMenu: {
      type: Array as PropType<MenuConfig[]>
    }
  },
  setup(props, { emit }) {
    const router = useRouter()
    // 改变主题
    const changeTheme = (checked: boolean): void => {
      emit('change-theme', checked)
    }
    const activeSecondary = computed({
      get: () => props.active,
      set: (val: string[]) => {
        emit('handle-activeSecondary', val)
      }
    })
    // 点击菜单跳转
    const handleNavigate = ({ key = 0 }) => {
      setTimeout(() => {
        const target: MenuConfig = props.currTopMenu.find(item => item.menuId === Number(key)) || props.currTopMenu[0]
        router.push(target.name)
      }, 0)
    }
    return {
      changeTheme,
      activeSecondary,
      handleNavigate
    }
  }
})
</script>
<style lang="scss" scoped>
.main-header {
  width: 100%;
  position: fixed;
  display: flex;
  background: rgb(255, 255, 255);
  padding: 0px;
  z-index: 999;
  :deep(.ant-menu) {
    width: 100%;
    line-height: 64px;
    position: relative;
  }
  :deep(.ant-switch) {
    position: fixed;
    right: 10px;
    top: 21px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    z-index: 1;
    border-bottom: 1px solid #f0f0f0;
  }
  .trigger:hover {
    div {
      color: #1890ff !important;
    }
  }
}
</style>
