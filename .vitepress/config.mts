import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "杜家小屋",
  description: "在这里记录成长、分享好物",
  themeConfig: {
    // 顶部导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '我的博客', link: '/posts/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/posts/': [
        {
          text: '我的博文',
          items: [
            { text: '我的第二篇文章', link: '/posts/my-second-post' },
            { text: '你好，世界', link: '/posts/hello-world' }
          ]
        }
      ],
      '/shop/': [
        {
          text: '好物分类',
          items: [
            { text: '精品推荐', link: '/shop/' },
            { text: '数字资源', link: '/shop/digital' }
          ]
        }
      ]
    },

    footer: {
      message: '基于 VitePress 搭建',
      copyright: 'Copyright © 2026-Present'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
