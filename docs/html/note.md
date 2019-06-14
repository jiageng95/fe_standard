## 注释规范
### 单行注释
不推荐：
```html
    <div>...</div><!-- Comment Text -->	
        
    <div><!-- Comment Text -->
        ...
    </div>
```
推荐：
```html
    <!-- Comment Text -->
    <div>...</div>  
```

### 模块注释
S代表模块开始，E代表模块结束，模块之间要空一行

不推荐：
```html
    <!-- S Comment Text A -->
    <div class="mod_a">
        ...
    </div>
    <!-- E Comment Text A -->
    <!-- S Comment Text B -->	
    <div class="mod_b">
        ...
    </div>
    <!-- E Comment Text B -->
```
推荐：
```html
    <!-- S Comment Text A -->	
    <div class="mod_a">
        ...
    </div>
    <!-- E Comment Text A -->
        
    <!-- S Comment Text B -->	
    <div class="mod_b">
        ...
    </div>
    <!-- E Comment Text B -->
```
