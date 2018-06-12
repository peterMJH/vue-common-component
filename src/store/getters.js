const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  table: state => state.table,
  tableItems: state => state.table.list,
  tableColumns: state => state.table.column,
  tableHeight: state => state.table.tableHeight,
  pageItem: state => state.table.page
}
export default getters
