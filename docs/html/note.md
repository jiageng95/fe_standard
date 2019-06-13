### 单行注释
推荐：
```
    <!-- Comment Text -->
    <div>...</div>  
```
不推荐：
```
    <div>...</div><!-- Comment Text -->	
        
    <div><!-- Comment Text -->
        ...
    </div>
```

### 模块注释
S代表模块开始，E代表模块结束，模块之间要空一行
推荐：
```
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
不推荐：
```
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