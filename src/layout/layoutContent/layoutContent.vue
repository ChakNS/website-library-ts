<template>
  <!-- 路由容器 -->
  <a-layout-content class="main-content"><router-view /></a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LayoutContent'
})
</script>
<style lang="scss" scoped>
.main-content {
  min-width: 700px;
  padding: 16px;
  padding-top: 80px;
  background: #f0f2f5;
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
