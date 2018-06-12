const table = {
  state: {
    list: [],
    checkedList: [],
    column: [],
    listLoading: true,
    page: {
      currentPage: 1,
      limit: 15,
      total: 0
    },
    pageSize: [5, 15, 30, 45, 60, 100, 200],
    tableHeight: 432
  },
  mutations: {
    ADD_TABLE_LIST: (state, items) => {
      state.list = items
    },
    ADD_TABLE_COLUMN: (state, col) => {
      state.column = col
    },
    ADD_TABLE_PAGE_ITEM: (state, pageItem) => {
      state.page = pageItem
    },
    ADD_CHECKED_LIST: (state, items) => {
      state.checkedList = items
    },
    INIT_PAGE_CONFIG: (state, config) => {
      state.page = config
    }
  },
  actions: {
    addTableList({ commit }, items) {
      commit('ADD_TABLE_LIST', items)
    },
    addTableColumn({ commit }, col) {
      commit('ADD_TABLE_COLUMN', col)
    },
    addTablePageItem({ commit }, pageItem) {
      commit('ADD_TABLE_PAGE_ITEM', pageItem)
    },
    addCheckedItems({ commit }, items) {
      commit('ADD_CHECKED_LIST', items)
    },
    setInitPageConf({ commit }) {
      commit('INIT_PAGE_CONFIG', {
        currentPage: 1,
        limit: 15,
        total: 0
      })
    }
  }
}

export default table
