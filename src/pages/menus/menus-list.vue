<template>
  <div class="common-container menus-container">
    <div class="content">
      <custom-table :config="config" :data-source="menuList" @handle-add="handleAdd" />
    </div>
  </div>
  <a-modal v-model:visible="modalStatus['add']" title="新增菜单">
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
import { defineComponent, onMounted, ref, reactive, UnwrapRef } from 'vue'
import CustomTable from '_c/customTable'
import Config from './config'
import SystemApi from '_a/system'
interface FormState {
  pId: number | null
  title: string
  path: string
  name: string
  icon: string
  isDisplay: string | boolean
  urlOrder: number
}

export default defineComponent({
  name: 'MenusList',
  components: {
    CustomTable
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      pId: null,
      title: '',
      path: '',
      name: '',
      icon: '',
      isDisplay: true,
      urlOrder: 0
    })
    const config = reactive(Config)
    const modalStatus = reactive({
      add: false
    })
    const menuList = ref()
    const fetchMenuList = () => SystemApi.MenuList().then((res: any) => {
      return res.data
    })
    onMounted(async () => (menuList.value = await fetchMenuList()))
    const handleAdd = () => {
      modalStatus['add'] = true
    }
    return {
      config,
      modalStatus,
      menuList,
      handleAdd,
      formState
    }
  }
})
</script>

<style scoped lang="scss">
.menus-container {
}
</style>
