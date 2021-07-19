export default [
  {
    'children': [
      {
        'name': 'library-info',
        'path': '/library-info',
        'title': '简介',
        'icon': 'jianjie',
        'menuId': 1001,
        'isDisplay': 'Y',
        'urlOrder': 1,
        children: []
      }
    ],
    'name': 'index',
    'path': '/index',
    'title': '首页',
    'icon': 'home',
    'menuId': 1,
    'isDisplay': 'Y',
    'urlOrder': 1
  },
  {
    'children': [
      {
        'name': 'tools',
        'path': '/list',
        'title': '工具库',
        'icon': 'tools',
        'menuId': 2001,
        'isDisplay': 'Y',
        'urlOrder': 1,
        children: []
      }
    ],
    'name': 'tools',
    'path': '/tools',
    'title': '工具',
    'icon': 'tool',
    'menuId': 2,
    'isDisplay': 'Y',
    'urlOrder': 2
  }
]
