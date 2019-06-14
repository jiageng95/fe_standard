## GIT规范
### 分支命名规范
版本迭代：               features-版本号
 
修复bug：                hotfix-版本号

预发布：                   release-版本号

版本号：有三个数字组成，示例：1.0.0

第一个数字为大版本更新

第二个数字为某个功能点更新

第三个数字为修复bug更新


### 主要分支
#### 中央仓库有两个长期分支：
* master：生产分支，用于部署到生产（正式）环境的。
* develop：开发分支，每次创建分支都从develop处创建。

发布时，从发布分支的代码合并到master分支，同时打上一个标签，标签名为发布的版本号。

### 辅助分支
#### 辅助分支的生命周期是有限的，当合并到develop分支后，须删除该分支。辅助分支共三种：
* 特性分支（版本迭代）：features
* 分布分支（预发布）：release
* 紧急修复分支（修复bug）：hotfix

1. 特性分支

特性分支（也叫主题分支）用于开发新特性。每个新特性从develop分支开一个新分支，最终会合并回develop（当特性开发完毕的时候），或者放弃（如果最终决定不开发这个特性）。
```js
    $ git checkout -b myfeature develop
    $ git checkout develop
    $ git merge --no-ff myfeature
    $ git branch -d myfeature
    $ git push origin develop
```
2. 发布分支

发布分支从develop分出，最终必须合并回develop和master。
发布分支为新的发布版本作准备，包括一些小bug的修正和发布的元信息（版本号、发布日期等）的添加。这样develop分支就可以接受针对以后的发布的新特性。
在代码基本可以发布的时候从develop分支分出发布分支。这时要确保此次发布包括的特性都已经合并到develop分支了（同时，为下一版发布准备的特性不能合并到develop分支，必须等待发布分支分出后才能合并）。
```js
    $ git checkout -b release-1.0.0 develop
    $ git commit -a -m "release-1.0.0"
```
3. 紧急修复分支
修复bug之后，需要合并回master，同时也需要合并回develop。

```js
    $ git checkout master
    $ git merge --no-ff hotfix-1.0.1
    $ git tag -a 1.0.1

    $ git checkout develop
    $ git merge --no-ff hotfix-1.0.1
    // 最后删除该分支
    $ git branch -d hotfix-1.0.1
```
如果存在发布分支，代码不应该合并到develop，而是合并到发布分支（由于发布分支最后会合并到develop，所以不用再另外合并到develop）。

### Git Commit Message格式
```
    type: subject
    // 如: fix: 修复了XXXbug
```

#### type 提交类型：
* feature: 新特性
* fix: 修改问题
* style: 代码格式修改
* test: 测试用例修改
* docs: 文档修改
* refactor: 代码重构
* misc: 其他修改, 比如构建流程, 依赖管理

#### subject 提交描述：
对应内容是commit 目的的简短描述，一般不超过50个字符
