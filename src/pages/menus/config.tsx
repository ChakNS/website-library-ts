import Iconfont from '_c/iconfont/iconfont.vue'
import SystemApi from '_a/system'
import { message } from 'ant-design-vue'
const config = (vm: any): any => ({
  rowKey: 'menuId',
  selection: true,
  handler: [
    {
      title: '新增',
      icon: 'DiffOutlined',
      on: () => {
        vm.modalStatus['edit'] = true
        vm.formState = {
          pId: null,
          title: '',
          path: '',
          name: '',
          icon: '',
          isDisplay: true,
          urlOrder: 0,
          menuId: 0
        }
      }
    },
    {
      title: '删除',
      icon: 'DeleteOutlined',
      on: (selectedKeys: (number | string)[]) => {
        if (!selectedKeys.length) return
        console.log(selectedKeys)
        SystemApi.MenuDelete(selectedKeys[0]).then((res: any) => {
          if (res.status === 'SUCCESS') {
            vm.fetchMenuList()
            message.success(res.data)
          } else {
            message.error(res.error)
          }
        })
      }
    }
  ],
  search: [
    {
      label: '',
      key: 'name',
      type: 'input',
      placeholder: '输入菜单名称查询',
      width: '300px'
    }
  ],
  columns: () => {
    return [
      {
        title: '菜单名称',
        dataIndex: 'title',
        key: 'title',
        align: 'left',
        width: '200px'
      },
      {
        title: '菜单路径',
        dataIndex: 'path',
        key: 'path'
      },
      {
        title: '菜单图标',
        dataIndex: 'icon',
        key: 'icon',
        customRender: ({ text: icon }: { text: string }) => <Iconfont name={icon} size="24" color="#001529" />
      },
      {
        title: '是否展示',
        dataIndex: 'isDisplay',
        key: 'isDisplay',
        width: 'auto',
        customRender: ({ text }: { text: string }) => <span>{text === 'Y' ? '是' : '否'}</span>
      },
      {
        title: '菜单排序',
        dataIndex: 'urlOrder',
        key: 'urlOrder',
        width: 'auto'
      },
      {
        title: '操作',
        key: 'operation',
        config: {
          list: [
            {
              icon: 'EditOutlined',
              text: '编辑',
              on: (row: any) => {
                vm.modalStatus['edit'] = true
                vm.formState = row.record
                vm.formState.pId = [row.record.pId]
              }
            }
          ]
        }
      }
    ]
  }
})

export default config
