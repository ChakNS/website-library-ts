<template>
  <div class="custom-table-container">
    <handler-bar v-if="config.handler?.length" :handler-config="config.handler" :search-config="config.search" />
    <a-table :columns="columns" :data-source="dataSource" :pagination="false" :rowKey="config.rowKey" :scroll="{ x: true, y: tableH }" @change="handleChange" />
    <a-pagination show-quick-jumper v-if="false" v-model:current="currPageNo" :total="500" />
  </div>
</template>
<script lang="tsx">
import { defineComponent, ref, computed, onMounted } from 'vue'
import handlerBar from './handlerBar.vue'
import { TableState, TableStateFilters } from 'ant-design-vue/es/table/interface'
import { renderOperation } from './operation'

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
    // ---------------------------------------------------------------------初始化表格分页
    const currPageNo = ref(1)
    // ---------------------------------------------------------------------初始化表格布局
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
    // ---------------------------------------------------------------------列表过滤设置
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
    // ---------------------------------------------------------------------单元格设置
    // 设置单元格
    const formatCloumns = (columns: any) => {
      const handle = [setDefault, setWidth, setOperation]
      return handle.reduce((pre, curr): any => curr(pre), columns)
    }
    // 设置单元格默认值
    const setDefault = (columns: any):any => {
      columns.forEach((item: { align: string }) => {
        if (!item.align) item.align = 'center'
      })
      return columns
    }
    // 设置单元格宽度
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
    // 设置单元格操作栏
    const setOperation = (columns: any):any => {
      const operation = columns.find((item: { key: string }) => item.key === 'operation')
      if (operation && operation.config) {
        operation.customRender = (row: any) => {
          return renderOperation(operation)
        }
      }
      console.log(222, columns)
      return columns
    }
    // ---------------------------------------------------------------------结束

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
