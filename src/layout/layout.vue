<template>
  <a-layout>
    <!-- 侧边栏 一级目录 -->
    <layout-sider
      :theme="theme"
      :collapsed="collapsed"
      :curr-top-menu="currTopMenu"
      :menu-list="menuList"
      @change-theme="changeTheme"
      @update-top-menu="updateTopMenu"
      @handle-collapsed="collapsed = !collapsed"
    />
    <a-layout>
      <layout-header
        :theme="theme"
        :collapsed="collapsed"
        :curr-top-menu="currTopMenu"
        :menu-list="menuList"
        :active="activeSecondary"
        @change-theme="changeTheme"
        @handle-collapsed="collapsed = !collapsed"
      />
      <!-- 路由容器 -->
      <layout-content />
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Menu from '@/config/menu'
import { MenuConfig } from './config'
import LayoutHeader from './layoutHeader'
import LayoutSider from './layoutSider'
import LayoutContent from './layoutContent'

export default defineComponent({
  components: {
    LayoutHeader,
    LayoutSider,
    LayoutContent
  },
  setup() {
    const data: {
      currTopMenu: Array<MenuConfig>
      activeSecondary: string[]
      collapsed: boolean
      theme: string
      menuList: Array<MenuConfig>
    } = {
      activeSecondary: ['1001'],
      collapsed: false,
      theme: 'dark',
      menuList: Menu,
      currTopMenu: []
    }
    const state = reactive(data)
    // 改变主题
    const changeTheme = (checked: boolean): void => {
      state.theme = checked ? 'light' : 'dark'
    }
    // 初始化菜单 排序
    const init = () => {
      state.menuList.sort((a, b) => a.urlOrder - b.urlOrder)
      state.menuList.forEach(parent => {
        parent.children.sort((a, b) => a.urlOrder - b.urlOrder)
      })
      state.currTopMenu = state.menuList[0].children && state.menuList[0].children.length ? state.menuList[0].children : [state.menuList[0]]
    }
    const updateTopMenu = (key: number) => {
      let target: MenuConfig
      target = state.menuList.find(item => item.menuId === Number(key)) || state.menuList[0]
      state.currTopMenu = target && target.children && target.children.length ? target.children : [target]
      state.activeSecondary = [state.currTopMenu[0].menuId + '']
    }
    init()
    return {
      ...toRefs(state),
      changeTheme,
      updateTopMenu
    }
  }
})
</script>
<style lang="scss" scoped>
</style>
