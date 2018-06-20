<script>
import elTableRender from '@/components/table/table'
export default {
    components: { elTableRender },
    data() {
        return {
        }
    },
    props: {
        formObject: {
            type: Object,
            default: null
        }
    },
    methods: {
        createChildElement(createElement, elementType, items) {
            let result = []
            items.map(option => {
                result.push(
                    createElement(elementType, {
                        attrs: {
                            label: option.label,
                            value: option.value
                        }
                    })
                )
            })
            return result
        },
        createMessage(createElement, item) {
            if (item.rules !== undefined && 
                item.rules.required && 
                item.value !== undefined &&
                (item.value === '' || item.value === null || item.value.length === 0) 
                ) {
                return createElement('span', {
                    style: {
                        color: 'red',
                        margin: '10px'
                    },
                    domProps: {
                        innerHTML: item.rules.message
                    },
                },[])
            } else {
                return createElement('', {},[])
            }
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
                this.formObject.items.map(item => {
                    const elementType = (item.group !== undefined) ? 'el-'+item.type+'-group' : 'el-'+item.type
                    let child = []
                    if (item.options !== undefined) {
                        child = this.createChildElement(createElement, 'el-option', item.options)
                    } else if (item.group !== undefined) {
                        child = this.createChildElement(createElement, 'el-'+item.type, item.group)
                    } else {
                        child = []
                    }
                    console.log(elementType)
                    return createElement('el-form-item', {
                        attrs: {
                            label: item.label
                        }
                    },
                    [
                        createElement(elementType, {
                            attrs: {
                                value: item.value,
                                type: item.kinds
                            },
                            on: {
                                input: (value) => {
                                    item.value = value
                                },
                                setValue: () => {
                                    alert('setValue')
                                }
                            },
                            props: {
                                tableObject: item.tableObject
                            }
                        }, 
                        child),
                        this.createMessage(createElement, item)
                    ])
                })
            ]
        )
    }
}
</script>