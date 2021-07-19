<script lang="jsx">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GridMenuList',
  setup (props, ctx) {
    return () => (
      <div className="grid-menu-list-container">
        <a-row gutter={[16, 16]}>{ctx.slots.default().map(slot => <a-col xs={24} sm={12} md={8} xl={6}>{slot}</a-col>)}</a-row>
      </div>
    )
  }
})
</script>

<style lang="scss" scoped>
.grid-menu-list-container {}
</style>
