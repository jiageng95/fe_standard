### 对象
* 请使用字面量值创建对象

不推荐：
```javascript
    const a = new Object()
```
推荐：
```javascript
    const a = {}
```
* 别使用保留字作为对象的键值，这样在 IE8 下不会运行

不推荐：
```javascript
    const a = {
        default: {},  // default 是保留字
        common: {}
    }
```
推荐：
```javascript
    const a = {
        defaults: {},
        common: {}
    }
```

* 请使用对象方法的简写方式

不推荐：
```javascript
    const item = {
        value: 1,

        addValue(val) {
            return item.value + val
        }
    }
```
推荐：
```javascript
    const item = {
        value: 1,

        addValue(val) {
            return item.value + val
        }
    }
```
* 请使用对象属性值的简写方式

```javascript
    const job = 'FrontEnd'
```
不推荐：
```javascript
    const item = {
        job: job
    }
```
推荐：
```javascript
    const item = {
        job
    }
```
* 对象属性值的简写方式要和声明式的方式分组

```javascript
    const job = 'FrontEnd'
    const department = 'JDC'
```
不推荐：
```javascript
    const item = {
        sex: 'male',
        job,
        age: 25,
        department
    }
```
推荐：
```javascript
    const item = {
        job,
        department,
        sex: 'male',
        age: 25
    }
```

### 数组
* 请使用字面量值创建数组
不推荐：
```javascript
    const items = new Array()
```
推荐：
``` javascript
    const items = []
```
* 向数组中添加元素时，请使用 push 方法
```javascript
    const items = []
```
不推荐：
```javascript
    items[items.length] = 'test'q
```
推荐：
``` javascript
    items.push('test')
```
* 使用拓展运算符 ... 复制数组

```javascript
    const items = []
    const itemsCopy = []
    const len = items.length
    let i
```
不推荐：
```javascript
    for (i = 0; i < len; i++) {
        itemsCopy[i] = items[i]
    }
```
推荐：
```javascript
    itemsCopy = [...items]
```

### 解构赋值
* 当需要使用对象的多个属性时，请使用解构赋值

不推荐：
```javascript
    function getFullName (user) {
        const firstName = user.firstName
        const lastName = user.lastName

        return `${firstName} ${lastName}`
    }
```
推荐：
```javascript
    function getFullName (user) {
        const { firstName, lastName } = user

        return `${firstName} ${lastName}`
    }
```
最佳：
```javascript
    function getFullName ({ firstName, lastName }) {
        return `${firstName} ${lastName}`
    }
```
* 当需要使用数组的多个值时，请同样使用解构赋值

```javascript
    const arr = [1, 2, 3, 4]
```
不推荐：
```javascript
    const first = arr[0]
    const second = arr[1]
```
推荐：
```javascript
    const [first, second] = arr
```

### 分号
* 我们遵循 Standard 的规范，不使用分号

> 关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 JS 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。

不推荐：
```javascript
    const test = 'good';
    (function () {
        const str = 'hahaha';
    })()
```
推荐：
```javascript
    const test = 'good'
    ;(() => {
        const str = 'hahaha'
    })();
```

### eval()
由于 eval 方法比较 evil，所以我们约定禁止使用该方法

### with() {}
由于 with 方法会产生神奇的作用域，所以我们也是禁止使用该方法的

### 修改内置对象的原型
不要修改内置对象，如 Object 和 Array