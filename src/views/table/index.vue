<template>
    <div>
        <table-render :table-object="tableObject" v-on:getCheckedItems="getCheckedItems"></table-render>
    </div>
</template>
<script>
import tableRender from '@/components/table/table'
export default {
    components: { tableRender },
    created () {
        this.getList()
    },
    data () {
        return {
            tableObject: {
                columns: [],
                list: [],
                checkedList: [],
                listLoading: true
            }
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
        getCheckedItems (items) {
            this.tableObject.checkedList = items
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
        }
    }
}
</script>
