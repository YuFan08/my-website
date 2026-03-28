import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "独家空间",
  description: "在这里记录成长与思考",
  themeConfig: {
    // 顶部导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '我的博客', link: '/posts/' },
      { text: '关于我', link: '/about' }
    ],

    // 侧边栏配置（在博客页面显示文章列表）
    sidebar: {
      '/posts/': [
        {
          text: '我的博文',
          items: [
            { text: '你好，世界', link: '/posts/hello-world' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YuFan08' }
    ],

    footer: {
      message: '基于 VitePress 搭建',
      copyright: 'Copyright © 2026-Present'
    },

    // 搜索功能配置
    search: {
      provider: 'local'
    }
  }
})
