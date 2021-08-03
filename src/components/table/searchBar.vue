<template>
  <div class="table-search-container">
    <div class="search-item">
      <div class="search-form" v-for="(item, index) in searchConfig.slice(0, 3)" :key="index">
        <div class="item-label text-ellipsis" :title="item.label" :style="{ width: item.labelWidth || '100px' }">{{ item.label }}</div>
        <template v-if="item.type === 'input'">
          <a-input v-model:value="item.value" :placeholder="item.placeholder || '请输入'" />
        </template>
      </div>
    </div>
    <div class="search-item confirm">
      <div class="show-more">高级</div>
      <a-button>
        <template #icon><RedoOutlined /></template>
        <template #default>重置</template>
      </a-button>
      <a-button type="primary">
        <template #icon><SearchOutlined /></template>
        <template #default>查询</template>
      </a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { SearchOutlined, RedoOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    SearchOutlined,
    RedoOutlined
  },
  props: {
    searchConfig: {
      type: Array,
      default: (): unknown[] => []
    }
  }
})
</script>
<style lang="scss" scoped>
.table-search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 50px;
  padding: 0 16px;
  margin-bottom: 10px;
  .search-item {
    display: flex;
    .search-form {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    .item-label {
      margin-right: 5px;
    }
  }
  .confirm {
    width: 215px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .show-more {
      cursor: pointer;
      color: $primary-color;
    }
  }
}
</style>
