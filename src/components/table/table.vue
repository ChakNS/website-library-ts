<template>
  <div class="custom-table-container">
    <handler-bar v-if="config.handler?.length" :handler-config="config.handler" :search-config="config.search" />
    <a-table :columns="columns" :data-source="dataSource" :pagination="false" :scroll="{ x: true, y: tableH }" @change="handleChange">
      <template #action>
        <a>action</a>
      </template>
    </a-table>
    <a-pagination show-quick-jumper v-model:current="currPageNo" :total="500" />
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref, computed, onMounted } from 'vue'
import handlerBar from './handlerBar.vue'
import { TableState, TableStateFilters } from 'ant-design-vue/es/table/interface'

type Pagination = TableState['pagination']

export default defineComponent({
  components: {
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
  setup(props) {
    // init pageinfo
    const currPageNo = ref(1)
    // init table layout
    const tableH = ref(window.innerHeight - 215)
    const otherSpace = computed(() => {
      let result = 203
      props.config.handler?.length && (result += 42)
      return result
    })
    const handleTableHCalc = () => {
      tableH.value = window.innerHeight - otherSpace.value
    }
    onMounted(() => {
      handleTableHCalc()
      window.addEventListener('resize', handleTableHCalc)
    })
    // init table filter
    const filteredInfo = ref()
    const columns = computed(() => {
      const filtered = filteredInfo.value || {}
      return props.config.columns(filtered)
    })
    const handleChange = (pagination: Pagination, filters: TableStateFilters, sorter: any) => {
      console.log('Various parameters', pagination, filters, sorter)
      filteredInfo.value = filters
    }
    // return ref
    return {
      currPageNo,
      tableH,
      columns,
      handleChange
    }
  }
})
</script>
<style lang="scss" scoped>
.custom-table-container {
  position: relative;
  :deep(.ant-table) {
    box-shadow: 0 2px 4px 0 rgb(54 58 80 / 32%);
    td {
      white-space: nowrap;
    }
    th {
      white-space: nowrap;
    }
  }
  :deep(.ant-table-thead) {
    th {
      padding: 10px 16px;
    }
  }
  :deep(.ant-pagination) {
    position: absolute;
    width: 100%;
    min-width: 667px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #fff;
    padding: 16px;
    box-shadow: 0 2px 4px 0 rgb(54 58 80 / 32%);
  }
}
</style>
