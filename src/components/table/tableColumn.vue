<script>
export default {
  props: {
    data: Object
  },
  methods: {
    renderTemplate (createElement) {
      if (this.data.renderBody !== undefined) {
        // eturn createElement('template', this.$scopedSlots.default(this.data.renderBody))
        return createElement('div', this.data.renderBody.map((item) => {
          return this.$scopedSlots.default(item.pets)
        }))
      }
    }
  },
  render (createElement) {
    return createElement('el-table-column', {
      attrs: {
        prop: this.data.column,
        label: this.$t(this.data.label),
        width: this.data.width,
        align: this.data.align,
        formatter: this.data.formatter
      }
      /* scopedSlots: {
        default: props => createElement('div', `${props.name} is a ${props.type}`)
      } */
    },
      // [this.renderTemplate(createElement)]
    )
  }
}
</script>
