<script lang="tsx">
import { defineComponent, PropType } from 'vue'
import { Button } from 'ant-design-vue'
import * as Icon from '@ant-design/icons-vue'

interface handlerItem {
  title: string,
  icon: string,
  emit: string
}
export default defineComponent({
  props: {
    handlerConfig: {
      type: Array as PropType<handlerItem[]>,
      default: (): handlerItem[] => []
    }
  },
  setup(props) {
    return () => (
      <div class="table-handler-bar">
        {props.handlerConfig.map(item => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const IconComp = Icon[item.icon]
          return <Button v-slots={{ icon: () => <IconComp />, default: () => <span>{item.title}</span> }} style={{ marginRight: '10px' }} />
        })}
      </div>
    )
  }
})
</script>

<style scoped lang="scss">
.table-handler-bar {
  margin-bottom: 10px;
}
</style>
