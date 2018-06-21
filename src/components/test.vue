<script>
import elTableRender from '@/components/table'
export default {
    components: { elTableRender },
    data() {
        return {
            tableObject: {
                columns: [],
                list: [],
                checkedList: [],
                listLoading: true
            },
        }
    },
    methods: {
        setTableCol () {
            this.tableObject.columns = [
                { column: 'date', label: 'date', width: '150', align: 'center' },
                { column: 'name', label: 'name', width: '150', align: 'center' },
                { column: 'state', label: 'state', align: 'center' },
                { column: 'city', label: 'city', width: '150' },
                { column: 'address', label: 'address', width: '' },
                { column: 'zip', label: 'zip', width: '150' },
                { column: 'tag', label: 'tag', width: '150' }
            ]
        },

        getList () {
            this.setTableCol()
            this.tableObject.list = [{
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Home'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Office'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Home'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Office'
            }]

            return this.tableObject
        }
    },
    render (createElement) {
        return createElement('el-form', 
            {
                attrs : {
                    'label-width': '120px'
                },
            },
            [
                createElement('el-form-item', {
                    attrs: {
                        label: "Activity name"
                    }
                },
                [
                    createElement('el-input', {}, [])
                ]
                ), 

                createElement('el-form-item', {
                    attrs: {
                        label: "Activity zone"
                    },
                    on : {
                        updateValue: () => {
                            alert(111)
                        }
                    }
                },
                [
                    createElement('el-select', {
                        attrs: {
                            placeholder: "please select your zone"
                        }
                    }, 
                    [
                        createElement('el-option', {
                            attrs: {
                                label: 'Zone one',
                                value: 'shanghai'
                            },
                            on: {
                                change: () => {
                                    alert('11112222')
                                    // this.$emit('updateValue', 'shanghai')
                                }
                            }
                        }),
                        createElement('el-option', {
                            attrs: {
                                label: 'Zone two',
                                value: 'beijing'
                            },
                            on: {
                                change: () => {
                                    alert('11112222')
                                    // this.$emit('updateValue', 'shanghai')
                                }
                            }
                        })
                    ]
                    )
                ]
                ), 
                createElement('el-form-item', {
                    attrs: {
                        label: "Activity name"
                    },                    
                },
                [
                    createElement('el-input', {
                        style: {
                            width: '200px'
                        }
                    }, []),
                    createElement('span', {
                        style: {
                            margin: '10px'
                        },
                        domProps: {
                            innerHTML: `<button>btn1</button>`
                        },
                        on: {
                            click: function() {
                                alert('btn1')
                            }
                        }
                    }, []),
                    createElement('span', {
                        domProps: {
                            innerHTML: `<button>btn2</button>`
                        },
                        on: {
                            click: function() {
                                alert('btn2')
                            }
                        }
                    }, [])
                ]
                ),
                createElement('el-form-item', {
                    attrs: {
                        label: "Activity table"
                    },                    
                },
                [
                    createElement('table-render', {
                        props: {
                            tableObject: this.getList()
                        }
                    }, [])
                ]
                )
            ]
        )
    }
}
</script>