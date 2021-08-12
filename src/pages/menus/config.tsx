import Iconfont from '_c/iconfont/iconfont.vue'
export default {
  rowKey: 'menuId',
  handler: [
    {
      title: '新增',
      icon: 'DiffOutlined',
      emit: 'handle-add'
    },
    {
      title: '删除',
      icon: 'DeleteOutlined',
      emit: 'handleDelete'
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
  columns: (filtered: any) => {
    return [
      {
        title: '菜单名称',
        dataIndex: 'title',
        key: 'title',
        width: '200px',
        // filters: [
        //   { text: 'Joe', value: 'Joe' },
        //   { text: 'Jim', value: 'Jim' },
        // ],
        // filteredValue: filtered.name || null,
        // onFilter: (value: string, record: any) => record.name.includes(value),
        // customRender: (row: any) => {
        //   return (<div>{row.text}</div>)
        // }
      },
      {
        title: '菜单路径',
        dataIndex: 'path',
        key: 'path',
      },
      {
        title: '菜单图标',
        dataIndex: 'icon',
        key: 'icon',
        customRender: ( { text: icon } : { text: string } ) => <Iconfont name={icon} size="24" color="#001529" />
      },
      {
        title: '是否展示',
        dataIndex: 'isDisplay',
        key: 'isDisplay',
        width: 'auto',
        customRender: ({ text } : { text: string }) => <span>{ text === 'Y' ? '是' : '否' }</span>
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
              text: '编辑'
            },
            {
              icon: 'ExceptionOutlined',
              text: '详情'
            }
          ]
        }
      }
    ]
  }
}
