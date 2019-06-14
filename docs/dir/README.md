## 目录规范
### 项目结构
```javascript
    ├── build                  // 项目构建(webpack)相关代码
    |  ├── build.js            // 生产环境构建代码
    |  ├── check-versions.js   // 检查node、npm等版本
    |  ├── logo.png            
    |  ├── utils.js            // 构建工具相关
    |  ├── vue-loader.conf.js  // webpack loader配置
    |  ├── webpack.base.conf.js// webpack基础配置
    |  ├── webpack.dev.conf.js // webpack开发环境配置,构建开发本地服务器
    |  └── webpack.prod.conf.js// webpack生产环境配置
    ├── config                 // 项目开发环境配置
    |  ├── dev.env.js          // 测试环境配置/开发环境变量
    |  ├── index.js            // 端口配置,域名配置,静态资源路径配置等
    |  └── prod.env.js         // 正式环境配置
    ├── index.html
    ├── package.json
    ├── README.md
    ├── scripts
    |  └── cdn.js
    ├── src
    |  ├── App.vue
    |  ├── assets              // 静态文件
    |  |  ├── css              // 样式
    |  |  ├── images           // 图片
    |  |  └── font             // 字体
    |  ├── components          // 组件
    |  |  ├── Headers.vue      // 公共头部
    |  |  └── Footers.vue      // 公共尾部
    |  ├── api                 // 接口文件
    |  |  ├── apiModules       // 按模块分接口
    |  |  |  ├── baseApi.js    // 基础接口
    |  |  |  └── module1Api.js // 模块1接口
    |  |  ├── global.js        // 接口url
    |  |  └── index.js         // 导出接口
    |  ├── store               // vuex仓库
    |  |  ├── actions.js       // 异步方法
    |  |  ├── getters.js       // 获取state
    |  |  ├── mutations.js     // 同步方法
    |  |  ├── state.js         // 存放数据
    |  |  └── index.js         // 引入vuex
    |  ├── http                // axios请求文件夹
    |  |  └── index.js         // 配置axios
    |  ├── util                // 公共方法文件夹
    |  |  └── util.js          // 常用公共方法
    |  ├── main.js
    |  ├── router              // 路由文件夹
    |  |  └── index.js         // 路由配置
    |  └── views               // 页面
    |     ├── index.vue
    |     ├── page1.vue
    |     ├── page2.vue
    |     └── page3.vue
    └── static                 // 静态资源
```