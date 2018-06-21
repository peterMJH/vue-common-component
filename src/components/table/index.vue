<script>
export default {
  props: {
    tableObject: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      multipleSelection: []
    }
  },
  methods: {
    createChildElement(createElement, item) {
      return createElement('el-table-column', {
        attrs: {
          prop: item.props.data.column,
          label: item.props.data.label,
          width: item.props.data.width,
          align: item.props.data.align,
          formatter: item.props.data.formatter
        }
      })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('getCheckedItems', this.multipleSelection)
    }
  },
  render (createElement) {
    return createElement('el-table', {
        attrs: {
          data: this.tableObject.list,
          style: 'width: 100%',
          height: this.tableObject.style.height,
          border: true,
          fit: true,
          'highlight-current-row': true,
          'v-loading': this.tableObject.listLoading,
          'element-loading-text': 'loading...'
        },
        on: {
          'selection-change': this.handleSelectionChange
        }
      },
      this.tableObject.columns.map(item => {
        const data = {
          props: {
            data: item
          }
        }
        return this.createChildElement(createElement, data)
      })
    )
  }
}
</script>
