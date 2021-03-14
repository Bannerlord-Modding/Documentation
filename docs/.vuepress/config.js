const apiGen = require('./apiPathGenerator')

module.exports = {
  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Bannerlord Documentation',
      description: 'Community Documentation for Mount & Blade II: Bannerlord'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '骑马与砍杀2 领主 Mod 制作文档',
    }
  },

  head: [
    // ['meta', { property: 'og:title', content: 'Bannerlord Documentation' } ],
    ['meta', { property: 'description', content: 'Community Documentation for Mount & Blade II: Bannerlord' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.bannerlordmodding.com' }],
    ['meta', { property: 'og:site_name', content: 'docs.bannerlordmodding.com' }],
    ['meta', { property: 'og:image', content: '/images/bannerlord-icon.png' }],
    ['meta', { property: 'og:image:width', content: '352' }],
    ['meta', { property: 'og:image:height', content: '352' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '352x352', href: '/images/bannerlord-icon.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '352x352', href: '/images/bannerlord-icon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
		yuu: {
			defaultDarkTheme: true,
		},
    repo: 'Bannerlord-Modding/Documentation',
    repoLabel: 'Contribute',
    editLinks: true,
    docsRepo: 'Bannerlord-Modding/Documentation',
    editLinkText: 'Click to edit this page!',
    lastUpdated: false,

    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'Guide',
            link: '/_intro/getting-started'
          }
        ],
        sidebar: [
          {
            title: 'Introduction',
            sidebarDepth: 1,
            children: [
              '/_intro/getting-started',
              '/_intro/folder-structure',
              '/_intro/advanced'
            ]
          },
          {
            title: 'Tutorials',
            sidebarDepth: 1,
            children: apiGen.getAPITree('docs', '_tutorials')
          },
          {
            title: 'C# API',
            sidebarDepth: 1,
            children: apiGen.getAPITree('docs', '_csharp-api')
          },
          {
            title: 'Gauntlet',
            sidebarDepth: 1,
            children: apiGen.getAPITree('docs', '_gauntlet')
          },
          {
            title: 'XML Docs',
            sidebarDepth: 1,
            children: apiGen.getAPITree('docs', '_xmldocs', false)
          }
        ]
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
      }
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/google-analytics',
    {
      ga: 'UA-164248376-1'
    }
  ]
}
