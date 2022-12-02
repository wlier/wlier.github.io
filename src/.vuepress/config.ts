import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'WLier',
      description: 'A docs demo for vuepress-theme-hope',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'WLier',
      description: 'vuepress-theme-hope 的文档演示',
    },
  },

  theme,

  shouldPrefetch: false,
})
