<template>
  <div class="custom-table-container">
    <handler-bar v-if="config.handler?.length" :selected-keys="selectedRowKeys" :handler-config="config.handler" :search-config="config.search" />
    <a-table :columns="columns" :row-selection="rowSelection" :data-source="dataSource" :pagination="false" :rowKey="config.rowKey" :scroll="{ x: true, y: tableH }" @change="handleChange" />
    <a-pagination show-quick-jumper v-if="false" v-model:current="currPageNo" :total="500" />
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref, toRefs, reactive, computed, onMounted, PropType } from 'vue'
import handlerBar from './handlerBar.vue'
import type { TableState, TableStateFilters } from 'ant-design-vue/es/table/interface'
import { renderOperation } from './operation'

interface DataType {
  menuId: number,
  pId: number | null
  title: string
  path: string
  name: string
  icon: string
  isDisplay: string | boolean
  urlOrder: number
}
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
      type: Array as PropType<DataType[]>,
      default: (): DataType[] => []
    }
  },
  setup(props) {
    // ****初始化表格分页****
    const pageState = reactive({
      currPageNo: 1
    })
    // ****初始化表格布局****
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
    // ****列表过滤设置****
    const filteredInfo = ref()
    const columns = computed(() => {
      if (props.config.columns instanceof Array) return formatCloumns(props.config.columns)
      const filtered = filteredInfo.value || {}
      return formatCloumns(props.config.columns(filtered))
    })
    const handleChange = (pagination: Pagination, filters: TableStateFilters, sorter: any) => {
      console.log('Various parameters', pagination, filters, sorter)
      filteredInfo.value = filters
    }
    // ****单元格设置****
    const formatCloumns = (columns: any) => {
      const handle = [setDefault, setWidth, setOperation]
      return handle.reduce((pre, curr): any => curr(pre), columns)
    }
    // 默认值
    const setDefault = (columns: any):any => {
      columns.forEach((item: { align: string }) => {
        if (!item.align) item.align = 'center'
      })
      return columns
    }
    // 宽度
    const setWidth = (columns: any):any => {
      const unsetCount = columns.filter((item: { width: string }) => !item.width || item.width === 'auto').length
      const currentPersent = columns.reduce((pre: number, curr: { width: string }) => {
        if (!curr.width || !curr.width.endsWith('%')) return pre
        return (pre += parseFloat(curr.width.split('%')[0]))
      }, 0)
      const resultPersent = (100 - currentPersent) / unsetCount
      columns.forEach((item: any) => {
        if (!item.width || item.width === 'auto') {
          item.width = resultPersent + '%'
        }
      })
      console.log(1111, columns)
      return columns
    }
    // 操作栏
    const setOperation = (columns: any):any => {
      const operation = columns.find((item: { key: string }) => item.key === 'operation')
      if (operation && operation.config) {
        operation.customRender = (row: any) => {
          return renderOperation(operation, row)
        }
      }
      console.log(222, columns)
      return columns
    }
    // ****表格选择设置****
    const selectState = reactive({
      selectedRowKeys: []
    })
    const rowSelection = computed(() => {
      if (!props.config.selection) return null
      return {
        selectedRowKeys: selectState.selectedRowKeys,
        onChange: (selected: DataType[]) => {
          console.log('selectedRowKeys changed: ', selected)
          selectState.selectedRowKeys = selected
        }
      }
    })

    return {
      ...toRefs(selectState),
      ...toRefs(pageState),
      tableH,
      columns,
      handleChange,
      rowSelection
    }
  }
})
</script>
<style lang="scss" scoped>
.custom-table-container {
  position: relative;
  :deep(.ant-table) {
    box-shadow: 0 2px 4px 0 rgb(54 58 80 / 32%);
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
<style lang="scss">
.table-operation-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #1890ff;
  .table-operation-icon-wrap {
    padding: 0 5px;
    font-size: 13px;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
  }
}
</style>
