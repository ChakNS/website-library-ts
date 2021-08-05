<template>
  <div class="common-container menus-container">
    <div class="content">
      <custom-table :config="config" :data-source="data" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomTable from '_c/table'
import Config from './config'
interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}
const data: DataItem[] = []
for (let i = 0; i < 1; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}
export default defineComponent({
  name: 'MenusList',
  components: {
    CustomTable
  },
  data () {
    return {
      config: Config,
      data
    }
  }
})
</script>

<style scoped lang="scss">
.menus-container {
}
</style>
