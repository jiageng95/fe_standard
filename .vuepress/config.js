module.exports = {
    title: '代码规范 | LCFE',
    description: 'LC前端代码规范',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        sidebar:[
            {
                title: 'HTML规范',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/html/', '代码规范'],
                    ['/html/note', '注释规范']
                ]
            },
            ['/css/', 'CSS规范']
        ]
    }
}