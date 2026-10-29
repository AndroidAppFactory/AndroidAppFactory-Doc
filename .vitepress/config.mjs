import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mjs'

export default defineConfig({
  // 站点部署在 /doc/ 子路径（nginx root 是 AndroidAppFactory-Doc 目录，VitePress 产物复制到 doc/）
  // 这样资源引用 /doc/assets/xxx 才能正确命中
  base: '/doc/',
  title: 'AndroidAppFactory',
  description: 'AAF 框架文档',
  // 构建输出到 _book，nginx root 指向它（与旧 GitBook 产物目录保持一致）
  outDir: '_book',
  // GitBook 时代的相对路径（SUMMARY.md、./../start 等）在 VitePress 里失效，先禁用死链检查
  ignoreDeadLinks: true,
  // 排除旧的 GitBook 产物目录，避免构建时扫描到 _book 里的旧 md
  srcExclude: ['_book/**'],
  // README.md 作为站点首页（映射为 index.html，nginx index 指向它）
  rewrites: {
    'README.md': 'index.md',
  },
  themeConfig: {
    sidebar,
    search: {
      provider: 'local',
    },
  },
})
