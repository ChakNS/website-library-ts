<template>
  <div class="common-container menus-container">
    <div class="content">
      <custom-table :config="config" :data-source="menuList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import CustomTable from '_c/customTable'
import Config from './config'
import SystemApi from '_a/system'

export default defineComponent({
  name: 'MenusList',
  components: {
    CustomTable
  },
  data () {
    return {
      config: Config
    }
  },
  setup() {
    const menuList = ref()
    const fetchMenuList = () => {
      return SystemApi.MenuList().then((res: any) => res.data)
    }
    onMounted(async () => {
      menuList.value = await fetchMenuList()
    })
    return {
      menuList
    }
  }
})
</script>

<style scoped lang="scss">
.menus-container {
}
</style>
