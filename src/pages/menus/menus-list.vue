<template>
  <div class="common-container menus-container">
    <div class="content">
      <custom-table :config="config" :data-source="menuList" />
    </div>
  </div>
  <a-modal v-model:visible="modalStatus['edit']" title="新增菜单" @ok="handleAdd">
    <a-form :model="formState" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-item label="所属菜单">
        <a-cascader v-model:value="formState.pId" :fieldNames="{ label: 'title', value: 'menuId', children: 'children' }" change-on-select :options="menuList" placeholder="Please select" />
      </a-form-item>
      <a-form-item label="菜单名称">
        <a-input v-model:value="formState.title" />
      </a-form-item>
      <a-form-item label="菜单路径">
        <a-input v-model:value="formState.path" />
      </a-form-item>
      <a-form-item label="菜单标识">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="菜单图标">
        <a-input v-model:value="formState.icon" />
      </a-form-item>
      <a-form-item label="是否展示">
        <a-switch v-model:checked="formState.isDisplay" />
      </a-form-item>
      <a-form-item label="菜单顺序">
        <a-input-number id="inputNumber" v-model:value="formState.urlOrder" :min="1" :max="10" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import CustomTable from '_c/customTable'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import config from './config.tsx'
import SystemApi from '_a/system'
import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'MenusList',
  components: {
    CustomTable
  },
  data () {
    return {
      config: config(this)
    }
  },
  setup() {
    // ****加载菜单****
    const menuList = ref()
    const fetchMenuList = () => SystemApi.MenuList().then((res: any) => {
      res.data.forEach((item: any) => (item.isDisplay = item.isDisplay === 'Y'))
      menuList.value = res.data
    })
    onMounted(() => fetchMenuList())
    // ****添加菜单****
    const modalStatus = ref({
      edit: false
    })
    const formState = ref({
      pId: null,
      title: '',
      path: '',
      name: '',
      icon: '',
      isDisplay: true,
      urlOrder: 0,
      menuId: 0
    })
    const handleAdd = () => {
      const params = {
        ...formState.value,
        isDisplay: formState.value.isDisplay ? 'Y' : 'N'
      }
      const fetchPromise = params.menuId ? SystemApi['MenuUpdate'](params.menuId, params) : SystemApi['MenuAdd'](params)
      fetchPromise.then(async (res: any) => {
        if (res.status === 'SUCCESS') {
          await fetchMenuList()
          message.success(res.data)
        } else {
          message.error(res.error)
        }
        modalStatus.value.edit = false
      })
    }
    return {
      fetchMenuList,
      menuList,
      modalStatus,
      formState,
      handleAdd
    }
  }
})
</script>

<style scoped lang="scss">
.menus-container {
}
</style>
