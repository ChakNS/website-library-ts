<template>
  <div class="common-container no-found-container">
    <img class="img-404" src="@/assets/images/404.png" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NoFound'
})
</script>

<style scoped lang="scss">
.no-found-container {
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-404 {
    width: 45vw;
  }
}
</style>
