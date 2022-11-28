module.exports = {
    //set NODE_OPTIONS=--openssl-legacy-provider
    //export NODE_OPTIONS=--openssl-legacy-provider
    base: '/Ablog/',
    title: "AAAAysy",
    themeConfig: {
        lastUpdated: '最近更新', // string | boolean
        logo: 'assets/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Github', link: 'https://github.com/AAAAAysy'},
        ],
        sidebar: [
            {
                title: 'SpringCloud',   // 必要的// 可选的, 标题的跳转链接，应为绝对路径且必须存在
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/springCloud/SpringCloud1',
                    '/springCloud/SpringCloud2',
                    '/springCloud/SpringCloud3',
                    '/springCloud/SpringCloud4',
                ]
            },
            {
                title: 'Java',
                sidebarDepth: 1,
                children: [
                    '/java/java读入优化'
                ]
            },
            {
                title: '网络安全',
                sidebarDepth: 1,
                children: [
                    '/wangan/网安'
                ]
            }
        ],


    }
}