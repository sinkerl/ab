import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig( {
    title: '我的个人博客',
    description: '记录前端与生活',
    themeConfig: {
        logo: '/logo.png', // 放一张你的 logo
        nav: [
            { text: '首页', link: '/' },
            { text: '如如', link: '/ruru' },
            { text: '关于', link: '/about' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/sinkerl' }
        ],
    },
    head: [
        // 这里添加 favicon
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/cat_favicon.ico' }]
    ]
})
