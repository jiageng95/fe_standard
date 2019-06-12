### 组件中的data
组件的 data 必须是一个函数。当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
```
    export default {
        data () {
            return {
                foo: 'bar'
            }
        }
    }
```
### 为v-for设置键值
总是用 key 配合 v-for。
```
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
```

### 指令缩写
