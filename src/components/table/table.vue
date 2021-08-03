<template>
  <div class="custom-table-container">
    <handler-bar v-if="config.handler?.length" :handler-config="config.handler" />
    <search-bar v-if="config.search?.length" :search-config="config.search" />
    <a-table :columns="config.columns" :data-source="dataSource" :pagination="false" :scroll="{ x: true, y: tableH }">
      <template #action>
        <a>action</a>
      </template>
    </a-table>
    <a-pagination show-quick-jumper v-model:current="currPageNo" :total="500" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import searchBar from './searchBar.vue'
import handlerBar from './handlerBar.vue'

export default defineComponent({
  components: {
    searchBar,
    handlerBar
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dataSource: {
      type: Array,
      default: (): unknown[] => []
    }
  },
  mounted() {
    this.handleTableHCalc()
    window.addEventListener('resize', this.handleTableHCalc)
  },
  computed: {
    otherSpace() {
      let result = 215
      this.config.handler?.length && (result += 42)
      this.config.search?.length && (result += 60)
      return result
    }
  },
  data() {
    return {
      tableH: window.innerHeight - 215,
      currPageNo: 1
    }
  },
  methods: {
    handleTableHCalc() {
      this.tableH = window.innerHeight - this.otherSpace
    }
  }
})
</script>
<style lang="scss" scoped>
.custom-table-container {
  :deep(.ant-table) {
    td {
      white-space: nowrap;
    }
    th {
      white-space: nowrap;
    }
  }
  :deep(.ant-pagination) {
    position: absolute;
    bottom: 0;
    width: calc(100% - 232px);
    min-width: 667px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #fff;
    padding: 16px;
  }
}
</style>
