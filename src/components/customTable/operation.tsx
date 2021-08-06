import * as Icon from '@ant-design/icons-vue'
const alignMap = {
  'center': 'center',
  'left': 'flex-start',
  'right': 'flex-end',
}
export const renderOperation = (column: { align: string, config: any }) => {
  return (
    <div class="table-operation-container" style={{ justifyContent: (alignMap as any)[column.align] }}>
      {
        column.config.list.map((item: { icon: string, text: string }) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const IconComp = Icon[item.icon]
          return <div class="table-operation-icon-wrap"><IconComp /><span style={{ marginLeft: '3px' }}>{ item.text }</span></div>
        })
      }
    </div>
  )
}
