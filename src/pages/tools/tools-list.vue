<template>
  <div class="common-container tools-list-container">
    <grid-menu-list>
      <grid-menu-item :detail="item" v-for="item in ToolsList" :key="item.title" @click="$router.push({ name: item.name })" />
    </grid-menu-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GridMenuList from '_c/gridMenuList'
import GridMenuItem from '_c/gridMenuItem'
import { ToolsList } from './config'
export default defineComponent({
  name: 'Home',
  components: {
    GridMenuList,
    GridMenuItem
  },
  data () {
    return {
      ToolsList
    }
  }
})
</script>

<style scoped lang="scss">
.tools-list-container {
  .tools-item {
    background: wheat;
    width: 400px;
    height: 300px;
    margin-bottom: 16px;
  }
}
</style>
