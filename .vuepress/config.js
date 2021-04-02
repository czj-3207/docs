module.exports = {
  title:"陈陈的私人空间",
  description:"第一份作品",
  head: [
    ['meta', { name: 'author', content: '陈陈的第一份博客' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
  ],
    themeConfig: {
      lastUpdated: '跟新时间', // string | boolean
      logo: '/assets/img/favicon.svg',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [{ text: 'Home', link: '/' },
              { text: 'Guide', link: '/about/' },] },
              { text: 'Group2', items: [{ text: 'Home', link: '/' },
              { text: 'Guide', link: '/about/' },] }
            ]
          }
      ],
      sidebar: [
        '/',
        '/about/',
        {
            title: '美丽的css',   // 必要的
            path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 0,    // 可选的, 默认值是 1
            children: [
              '/css/c-aaa',
              '/css/c-bbb',
              '/css/c-ccc',
            ]
          }
      ]
      
    },
    
  }