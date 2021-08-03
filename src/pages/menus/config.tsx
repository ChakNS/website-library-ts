export default {
  handler: [
    {
      title: '新增',
      icon: 'DiffOutlined',
      emit: ''
    },
    {
      title: '删除',
      icon: 'DeleteOutlined',
      emit: ''
    }
  ],
  search: [
    {
      label: '菜单名称',
      key: 'name',
      type: 'input'
    }
  ],
  columns: [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      customRender: (row: any) => {
        return (<div>{row.text}</div>)
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Action',
      key: 'operation',
      slots: { customRender: 'action' }
    }
  ]
}
