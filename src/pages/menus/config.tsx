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
        title: 'Full Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filtered.name || null,
        onFilter: (value: string, record: any) => record.name.includes(value),
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
}
