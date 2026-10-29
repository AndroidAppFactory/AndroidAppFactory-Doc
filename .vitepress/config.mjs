import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AndroidAppFactory',
  description: 'AAF 框架文档',
  // 构建输出到 _book，nginx root 指向它（与旧 GitBook 产物目录保持一致）
  outDir: '_book',
  // GitBook 时代的相对路径（SUMMARY.md、./../start 等）在 VitePress 里失效，先禁用死链检查
  ignoreDeadLinks: true,
  // 排除旧的 GitBook 产物目录，避免构建时扫描到 _book 里的旧 md
  srcExclude: ['_book/**'],
})
