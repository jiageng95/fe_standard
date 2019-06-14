## SASS规范
### 嵌套规范
* 选择器嵌套

```scss
    /* CSS */
    body .header {}

    /* SCSS */
    body {
        .header {}
    。     {}
    }
```
```scss
    /* CSS */
    .header {}
    .header_cover {}
    .header_info {}
    .header_info_name {}

    /* SCSS */
    .header {
        &_cover {}
        &_info {
            &_name {}
        }
    }
```
* 属性嵌套
```scss
    /* CSS */
    .header {
        background-color: red;
        background-repeat: no-repeat;
        background-image: url(/img/icon.png);
        background-position: 0 0;
    }

    /* SCSS */
    .header {
        background: {
            color: red;
            repeat: no-repeat;
            image: url(/img/icon.png);
            position: 0 0;
        }
    }
```
* 变量

可复用属性尽量抽离为页面变量，易于统一维护
```scss
    // CSS
    .header {
        color: red;
        border-color: red;
    }

    // SCSS
    $color: red;
    .header {
        color: $color;
        border-color: $color;
    }
```
* 混合(mixin)

根据功能定义模块，然后在需要使用的地方通过 @include 调用，避免编码时重复输入代码段
```scss
    // CSS
    .box_1 {
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }
    .box_2 {
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }

    // SCSS
    @mixin radius($radius:5px) {
        -webkit-border-radius: $radius;
        border-radius: $radius;
    }
    .box_1 {
        @include radius; //参数使用默认值
    }
    .box_2 {
        @include radius(10px);
    }



    // CSS
    .box_1 {
        background: url(/img/icon.png) no-repeat -10px 0;
    }
    .box_2 {
        background: url(/img/icon.png) no-repeat -20px 0;
    }

    // SCSS
    @mixin icon($x:0, $y:0) {
        background: url(/img/icon.png) no-repeat $x, $y;
    }
    .box_1 {
        @include icon(-10px, 0);
    }
    .box_2 {
        @include icon(-20px, 0);
    }
```
* extend继承

```scss
    // CSS
    .box_1 {
        font-size: 12px;
        color: red;
    }
    .box_2 {
        font-size: 12px;
        color: red;
        font-weight: bold;
    }

    // SCSS
    .box_1 {
        font-size: 12px;
        color: red;
    }
    .box_2 {
        @extend .box_1;
        font-weight: bold;
    }
```
* function 函数

```scss
    @function pxToRem($px) {
        @return $px / 10px * 1rem;
    }
    .box {
        font-size: pxToRem(12px);
    }
```