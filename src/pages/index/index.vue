<template>
  <div class="common-container home-container">
    <div class="content">
      <img class="img" src="@/assets/images/logo.png" alt="" />
      <div class="text">Welcome to my Website Library</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  justify-content: center;
  padding-top: 15%;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 50%;
    }
    .text {
      font-size: 28px;
      font-weight: 500;
    }
  }
}
</style>
