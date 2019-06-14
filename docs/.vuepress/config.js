module.exports = {
    title: '代码规范 | LCFE',
    description: 'LC前端代码规范',
    base: '/fe_standard/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: '上次更新',
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
            {
                title: 'CSS规范',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    ['/css/', '代码规范'],
                    ['/css/note', '注释规范'],
                    ['/css/sass', 'sass规范']
                ]
            },
            ['/dir/', '目录规范'],
            ['/js/', 'JS规范'],
            ['/name/', '命名规范'],
        ]
    }
}