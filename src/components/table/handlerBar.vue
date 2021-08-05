<script lang="tsx">
import { defineComponent, PropType } from 'vue'
import { Button } from 'ant-design-vue'
import { SearchOutlined, RedoOutlined } from '@ant-design/icons-vue'
import * as Icon from '@ant-design/icons-vue'

interface handlerItem {
  title: string,
  icon: string,
  emit: string
}
export default defineComponent({
  components: {
    SearchOutlined,
    RedoOutlined
  },
  props: {
    handlerConfig: {
      type: Array as PropType<handlerItem[]>,
      default: (): handlerItem[] => []
    },
    searchConfig: {
      type: Array,
      default: (): any[] => []
    }
  },
  setup(props) {
    return () => (
      <div class="table-handler-bar">
        <div>
          {props.handlerConfig.map(item => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const IconComp = Icon[item.icon]
            return <Button v-slots={{ icon: () => <IconComp />, default: () => <span>{item.title}</span> }} style={{ marginRight: '10px' }} />
          })}
        </div>
        <div class="search-box">
          {
            props.searchConfig.slice(0, 3).map((item: any) => (
              <div class="search-form">
                { item.label ? <div class="item-label text-ellipsis" title={item.label} style={{ width: item.labelWidth || '100px' }}>{ item.label }</div> : '' }
                <a-input value={item.value} onInput={(val: any) => (item.value = val)} style={{ ...item.style, width: item.width }} placeholder={item.placeholder || '请输入'} />
              </div>
            ))
          }
          <div class="search-handler">
            <SearchOutlined />
            <RedoOutlined />
          </div>
        </div>
      </div>
    )
  }
})
</script>

<style scoped lang="scss">
.table-handler-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .search-box {
    display: flex;
    .search-form {
      display: flex;
      align-items: center;
      margin-right: 15px;
    }
    .search-handler {
      display: flex;
      align-items: center;
      :deep(.anticon) {
        padding: 5px;
        margin-left: 5px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
