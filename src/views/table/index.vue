<template>
    <div>
        <!-- <table-render :table-object="tableObject" v-on:getCheckedItems="getCheckedItems"></table-render> -->
        <form-render :form-object="formObject"></form-render>{{formObject}}
    </div>
</template>
<script>
import tableRender from '@/components/table/table'
import formRender from '@/components/form'
export default {
    components: { tableRender, formRender },
    created () {
        this.getList()
        this.setForm()
    },
    data () {
        return {
            tableObject: {
                columns: [],
                list: [],
                checkedList: [],
                listLoading: true
            },
            formObject: {
                style: {},
                items: []
            }
        }
    },
    methods: {
        setForm () {
            this.formObject.items = [
                {
                    column: 'column2',
                    type: 'select',
                    label: 'Activity zone',
                    value: '',
                    placeholder: '선택하세요',
                    options: [
                        { label: 'select1', value: 'value1' },
                        { label: 'select2', value: 'value2' },
                        { label: 'select3', value: 'value3' }
                    ],
                    rules: {
                        required: true,
                        message: 'Activity zone null 메세지',
                        trigger: false
                    }
                },
                {
                    column: 'column2',
                    type: 'select',
                    label: 'Activity zone',
                    value: '',
                    placeholder: '선택하세요',
                    options: [
                        { label: 'select1', value: 'value1' },
                        { label: 'select2', value: 'value2' },
                        { label: 'select3', value: 'value3' }
                    ],
                    rules: {
                        required: true,
                        message: 'Activity zone null 메세지',
                        trigger: false
                    }
                },
                                {
                    column: 'column2',
                    type: 'select',
                    label: 'Activity zone',
                    value: '',
                    placeholder: '선택하세요',
                    options: [
                        { label: 'select1', value: 'value1' },
                        { label: 'select2', value: 'value2' },
                        { label: 'select3', value: 'value3' }
                    ],
                    rules: {
                        required: true,
                        message: 'Activity zone null 메세지',
                        trigger: false
                    }
                },                {
                    column: 'column2',
                    type: 'select',
                    label: 'Activity zone',
                    value: '',
                    placeholder: '선택하세요',
                    options: [
                        { label: 'select1', value: 'value1' },
                        { label: 'select2', value: 'value2' },
                        { label: 'select3', value: 'value3' }
                    ],
                    rules: {
                        required: true,
                        message: 'Activity zone null 메세지',
                        trigger: false
                    }
                },
                {
                    column: 'column7',
                    type: 'table-render',
                    label: 'Activity table',
                    tableObject: this.tableObject,
                    value: ''
                },
                {
                    column: 'column5',
                    type: 'checkbox',
                    label: 'Activity type',
                    value: [],
                    group: [
                        { label: 'Online activities', value: 'checkVal1' },
                        { label: 'Promotion activities', value: 'checkVal2' },
                        { label: 'Offline activities', value: 'checkVal3' },
                        { label: 'Simple brand exposure', value: 'checkVal4' }
                    ],
                    rules: {
                    required: true,
                    message: '체크박스 null 메세지',
                    trigger: false
                    }
                },
                {
                    column: 'column6',
                    type: 'radio',
                    label: 'Resources',
                    value: '',
                    group: [{ label: 'Yes', value: 'Y' }, { label: 'No', value: 'N' }],
                    rules: {
                        required: true,
                        message: 'Resources null 메세지',
                        trigger: false
                    }
                },
                                {
                    column: 'column3',
                    type: 'date-picker',
                    label: 'Activity time',
                    value: '',
                    kinds: 'date',
                    placeholder: '날짜를 선택하세요',
                    rules: {
                        required: true,
                        message: '날짜 null 메세지',
                        trigger: false
                    }
                },
                {
                    column: 'column3',
                    type: 'date-picker',
                    label: 'Activity time',
                    value: '',
                    kinds: 'date',
                    placeholder: '날짜를 선택하세요',
                    rules: {
                        required: true,
                        message: '날짜 null 메세지',
                        trigger: false
                    }
                },
                {
                    column: 'column5',
                    type: 'checkbox',
                    label: 'Activity type',
                    value: [],
                    group: [
                        { label: 'Online activities', value: 'checkVal1' },
                        { label: 'Promotion activities', value: 'checkVal2' },
                        { label: 'Offline activities', value: 'checkVal3' },
                        { label: 'Simple brand exposure', value: 'checkVal4' }
                    ],
                    rules: {
                    required: true,
                    message: '체크박스 null 메세지',
                    trigger: false
                    }
                },
                {
                    column: 'column7',
                    type: 'table-render',
                    label: 'Activity table',
                    tableObject: this.tableObject,
                    value: ''
                }

            ]
        },
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
