<script>
import elTableColumn from '@/components/Table/tableColumn'
export default {
  components: { elTableColumn },
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
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('getCheckedItems', this.multipleSelection)
    }
  },
  render (createElement) {
    return createElement(
      'el-table', {
        attrs: {
          data: this.tableObject.list,
          style: 'width: 100%',
          // height: '478',
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
        return createElement('el-table-column', data)
      })
    )
  }
}
</script>
