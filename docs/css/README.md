## CSS规范
### 合理的避免使用ID

不推荐：
```scss
    #content .title {
    font-size: 2em;
    }
```
推荐：
```scss
    .content .title {
    font-size: 2em;
    }
```
### 使用缩写属性
不推荐:
```scss
    border-top-style: none;
    font-family: palatino, georgia, serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
```
推荐:
```scss
    border-top: 0;
    font: 100%/1.6 palatino, georgia, serif;
    padding: 0 1em 2em;
```
### 省略“0”值后面的单位
不推荐：
```scss
    padding-bottom: 0px;
    margin: 0em;
```
推荐：
```scss
    padding-bottom: 0;
    margin: 0;
```
### 声明顺序
*  结构性属性：
```css
    display
    position, left, top, right etc.
    overflow, float, clear etc.
    margin, padding
```
* 表现性属性：
```css
    background, border etc.
    font, text
```
不推荐： 
```scss
    .box {
        font-family: 'Arial', sans-serif;
        border: 3px solid #ddd;
        left: 30%;
        position: absolute;
        text-transform: uppercase;
        background-color: #eee;
        right: 30%;
        isplay: block;
        font-size: 1.5rem;
        overflow: hidden;
        padding: 1em;
        margin: 1em;
    }
```
推荐：
```scss
    .box {
        display: block;
        position: absolute;
        left: 30%;
        right: 30%;
        overflow: hidden;
        margin: 1em;
        padding: 1em;
        background-color: #eee;
        border: 3px solid #ddd;
        font-family: 'Arial', sans-serif;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
```
### 属性名后始终使用一个空格

不推荐：
```scss
    h3 {
    font-weight:bold;
    }
```
推荐：
```scss
    h3 {
    font-weight: bold;
    }
```
### 每个选择器和属性声明总是使用新的一行

不推荐：
```scss
    a:focus, a:active {
    position: relative; top: 1px;
    }
```
推荐：
```scss
    h1,
    h2,
    h3 {
    font-weight: normal;
    line-height: 1.2;
    }
```
### CSS引号
属性选择器或属性值用双引号（””），而不是单引号（”）括起来。

URI值（url()）不要使用引号。

不推荐：
```scss
    @import url('//cdn.com/foundation.css');

    html {
    font-family: 'open sans', arial, sans-serif;
    }

    body:after {
    content: 'pause';
    }
```
推荐：
```scss
    @import url(//cdn.com/foundation.css);

    html {
    font-family: "open sans", arial, sans-serif;
    }

    body:after {
    content: "pause";
    }
```