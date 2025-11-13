import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: '转生成为陈葱然后寻花问柳',
    description: 'Reincarnation_czc.',
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    // Use root base for Vercel or a custom domain. If you publish to GitHub Pages project site,
    // change this to '/<repo>/' (e.g. '/Novel_Reincarnation_czc/').
    base: '/',
    cleanUrls: true,
    ignoreDeadLinks: true,
    appearance: true,
    lastUpdated: true,
    vite: {
        server: {
            host: '0.0.0.0',
            port: 8081,
            open: true
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        nav: [
            { text: '主页', link: '/' },
            { text: '小说主体', link: '/novel/first_part/first_part_1.md' },
            { text: '声明', link: '/shengming/' }
        ],
        // Sidebar: add an entry for /novel/ so pages under /novel/* show the site sidebar.
        sidebar: {
            '/novel/': [
                {
                    text: '第一卷·重启·往昔的痕迹',
                    items: [
                        { text: '第一章·我转生成为了陈葱？', link: '/novel/first_part/first_part_1.md' },
                        { text: '第二章·篮球的英姿，暗香的短袖', link: '/novel/first_part/first_part_2.md' },
                        { text: '第三章·湖夜告白', link: '/novel/first_part/first_part_3.md' }
                    ]
                },
                {
                    text: '第二卷·交织·失控的人生',
                    items: [
                        { text: '第四章·', link: '' },
                        { text: '第五章·', link: '' },
                        { text: '第六章·', link: '' }
                    ]
                },
                {
                    text: '第三卷·漩涡·深陷与抽离',
                    items: [
                        { text: '第七章·', link: '' },
                        { text: '第八章·', link: '' },
                        { text: '第九章·', link: '' }
                    ]
                },
                {
                    text: '第四卷·抉择·何为真爱',
                    items: [
                        { text: '第十章·', link: '' },
                        { text: '第十一章·', link: '' },
                        { text: '第十二章·', link: '' }
                    ]
                }
            ],
            '/shengming/': [
                {
                    text: '声明',
                    items: [
                        { text: '第X章·', link: '' },
                        { text: '第XX章·', link: '' }
                    ]
                }
            ]
        },
        aside: true,
        outline: {
            level: 'deep',
            label: '目录'
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/ReLuckyLucy' }],
        editLink: {
            pattern: 'https://github.com/ReLuckyLucy'
        },
        search: {
            provider: 'local'
        },
        externalLinkIcon: true
    },
    sitemap: {
        hostname: 'https://github.com/ReLuckyLucy'
    }
});
