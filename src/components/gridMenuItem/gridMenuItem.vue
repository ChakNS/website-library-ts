<template>
  <div class="grid-menu-item-container">
    <a-card hoverable>
      <template v-slot:actions class="ant-card-actions">
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta>
        <template v-slot:title>
          <span class="menu-card-title">{{ detail.title }}</span>
        </template>
        <template v-slot:description>
          <span class="menu-card-desc">{{ detail.desc }}</span>
        </template>
        <template v-slot:avatar>
          <a-avatar :src="detail.pic" :size="72" />
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'GridMenuItem',
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined
  },
  props: {
    detail: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style lang="scss" scoped>
.grid-menu-item-container {
  :deep(.ant-card-body) {
    height: 150px;
  }
  &:hover {
    .menu-card-title {
      color: $primary-color;
    }
  }
  .menu-card-title {

  }
  .menu-card-desc {

  }
}
</style>
