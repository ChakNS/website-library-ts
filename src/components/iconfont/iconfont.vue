<script lang="jsx">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    size: {
      type: [String, Number],
      default: 12,
    },
    tag: {
      type: String,
      default: "div",
    },
    class: {
      type: String,
      default: "",
    },
    style: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    return () => (
      <>
        <props.tag
          className={`iconfont ${
            props.name.startsWith("icon") ? props.name : `icon${props.name}`
          } ${props.class}`}
          style={{
            color: props.color,
            fontSize: props.size + "px",
            ...props.style,
          }}
        ></props.tag>
      </>
    );
  },
});
</script>

<style lang="scss" scoped></style>
