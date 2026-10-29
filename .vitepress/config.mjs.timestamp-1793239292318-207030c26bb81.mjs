// .vitepress/config.mjs
import { defineConfig } from "file:///Volumes/Document/Documents/github/AndroidAppFactory-Doc/node_modules/vitepress/dist/node/index.js";

// .vitepress/sidebar.mjs
var sidebar = [
  {
    text: "\u5173\u4E8E\u6846\u67B6",
    link: "/",
    items: [
      { text: "\u603B\u4F53\u4ECB\u7ECD", link: "/summary/links" },
      { text: "\u5E94\u7528\u4E8B\u4F8B", link: "/demo/samples" }
    ]
  },
  {
    text: "\u7EC4\u4EF6\u4F7F\u7528",
    collapsed: false,
    items: [
      { text: "\u7EC4\u4EF6\u5F15\u5165", link: "/use/start" },
      {
        text: "\u57FA\u7840\u7EC4\u4EF6\u4FE1\u606F",
        collapsed: true,
        items: [
          {
            text: "\u57FA\u7840\u7EC4\u4EF6\u96C6",
            collapsed: true,
            items: [
              { text: "lib-wrapper", link: "/use/libs/combination/lib-wrapper" },
              { text: "lib-wrapper-screen", link: "/use/libs/combination/lib-wrapper-screen" }
            ]
          },
          {
            text: "\u57FA\u7840\u529F\u80FD",
            collapsed: true,
            items: [
              { text: "lib-aaf-tools", link: "/use/libs/noui/lib-aaf-tools" },
              { text: "lib-android", link: "/use/libs/noui/lib-android" },
              { text: "lib-log", link: "/use/libs/noui/lib-log" },
              { text: "lib-utils-common", link: "/use/libs/noui/lib-utils-common" },
              { text: "lib-android-os", link: "/use/libs/noui/lib-android-os" },
              { text: "lib-thread", link: "/use/libs/noui/lib-thread" },
              { text: "lib-encrypt", link: "/use/libs/noui/lib-encrypt" },
              { text: "lib-channel", link: "/use/libs/noui/lib-channel" },
              { text: "lib-request", link: "/use/libs/noui/lib-request" },
              { text: "lib-gson", link: "/use/libs/noui/lib-gson" },
              { text: "lib-http-common", link: "/use/libs/noui/lib-http-common" },
              { text: "lib-http-advanced", link: "/use/libs/noui/lib-http-advanced" },
              { text: "lib-sqlite", link: "/use/libs/noui/lib-sqlite" },
              { text: "lib-device-network", link: "/use/libs/noui/lib-device-network" },
              { text: "lib-timer", link: "/use/libs/noui/lib-timer" },
              { text: "lib-config", link: "/use/libs/noui/lib-config" },
              { text: "lib-utils-apk", link: "/use/libs/noui/lib-utils-apk" },
              { text: "lib-tts", link: "/use/libs/noui/lib-tts" },
              { text: "lib-file", link: "/use/libs/noui/lib-file" },
              { text: "lib-zip", link: "/use/libs/noui/lib-zip" },
              { text: "lib-download", link: "/use/libs/noui/lib-download" },
              { text: "lib-install", link: "/use/libs/noui/lib-install" },
              { text: "lib-text", link: "/use/libs/noui/lib-text" },
              { text: "lib-super-app", link: "/use/libs/noui/lib-super-app" },
              { text: "lib-debug", link: "/use/libs/noui/lib-debug" },
              { text: "lib-ipc", link: "/use/libs/noui/lib-ipc" },
              { text: "lib-block-task", link: "/use/libs/noui/lib-block-task" },
              { text: "lib-okhttp-wrapper", link: "/use/libs/noui/lib-okhttp-wrapper" },
              { text: "lib-coroutines", link: "/use/libs/noui/lib-coroutines" },
              { text: "lib-data-repository", link: "/use/libs/noui/lib-data-repository" },
              { text: "lib-audio", link: "/use/libs/noui/lib-audio" },
              { text: "lib-audio-player", link: "/use/libs/noui/lib-audio-player" },
              { text: "lib-audio-record", link: "/use/libs/noui/lib-audio-record" },
              { text: "lib-ffmpeg-mobile-aaf", link: "/use/libs/noui/lib-ffmpeg-mobile-aaf" },
              { text: "lib-crop", link: "/use/libs/noui/lib-crop" },
              { text: "lib-image-meta", link: "/use/libs/noui/lib-image-meta" },
              { text: "lib-chinese", link: "/use/libs/noui/lib-chinese" },
              { text: "lib-language", link: "/use/libs/noui/lib-language" },
              { text: "lib-pinyin", link: "/use/libs/noui/lib-pinyin" }
            ]
          },
          {
            text: "UI \u76F8\u5173",
            collapsed: true,
            items: [
              { text: "lib-aaf-res", link: "/use/libs/ui/lib-aaf-res" },
              { text: "lib-ui-common", link: "/use/libs/ui/lib-ui-common" },
              { text: "lib-fragmentation-core", link: "/use/libs/ui/lib-fragmentation-core" },
              { text: "lib-fragmentation", link: "/use/libs/ui/lib-fragmentation" },
              { text: "lib-fragmentation-swipeback", link: "/use/libs/ui/lib-fragmentation-swipeback" },
              { text: "lib-flycotablayout", link: "/use/libs/ui/lib-flycotablayout" },
              { text: "lib-qrcode", link: "/use/libs/ui/lib-qrcode" },
              { text: "lib-adapter", link: "/use/libs/ui/lib-adapter" },
              { text: "lib-refresh", link: "/use/libs/ui/lib-refresh" },
              { text: "lib-toast", link: "/use/libs/ui/lib-toast" },
              { text: "lib-media", link: "/use/libs/ui/lib-media" },
              { text: "lib-dialog", link: "/use/libs/ui/lib-dialog" },
              { text: "lib-notification", link: "/use/libs/ui/lib-notification" },
              { text: "lib-bottom-tab", link: "/use/libs/ui/lib-bottom-tab" },
              { text: "lib-recycleview-ext", link: "/use/libs/ui/lib-recycleview-ext" },
              { text: "lib-touchregion", link: "/use/libs/ui/lib-touchregion" },
              { text: "lib-view-ext", link: "/use/libs/ui/lib-view-ext" },
              { text: "lib-view-pager", link: "/use/libs/ui/lib-view-pager" },
              { text: "lib-jsbridge", link: "/use/libs/ui/lib-jsbridge" },
              { text: "lib-lifecycle", link: "/use/libs/ui/lib-lifecycle" },
              { text: "lib-permission", link: "/use/libs/ui/lib-permission" },
              { text: "lib-immersive", link: "/use/libs/ui/lib-immersive" },
              { text: "lib-file-select", link: "/use/libs/ui/lib-file-select" },
              { text: "lib-float-view", link: "/use/libs/ui/lib-float-view" },
              { text: "lib-textview", link: "/use/libs/ui/lib-textview" },
              { text: "lib-ace-editor", link: "/use/libs/ui/lib-ace-editor" },
              { text: "lib-custom-view", link: "/use/libs/ui/lib-custom-view" },
              { text: "lib-theme", link: "/use/libs/ui/lib-theme" },
              { text: "lib-color", link: "/use/libs/ui/lib-color" },
              { text: "lib-panel", link: "/use/libs/ui/lib-panel" },
              { text: "lib-widget", link: "/use/libs/ui/lib-widget" },
              { text: "lib-lock-screen", link: "/use/libs/ui/lib-lock-screen" }
            ]
          }
        ]
      },
      {
        text: "\u516C\u5171\u7EC4\u4EF6\u4FE1\u606F",
        collapsed: true,
        items: [
          {
            text: "\u6846\u67B6\u7EC4\u4EF6",
            link: "/use/common/framework",
            collapsed: true,
            items: [
              { text: "\u5E94\u7528\u66F4\u65B0", link: "/use/common/framework/framework-update" },
              { text: "\u975E UI \u7684\u6838\u5FC3\u6A21\u5757", link: "/use/common/framework/framework-noui" },
              { text: "\u516C\u7528 UI \u6A21\u5757", link: "/use/common/framework/framework-ui" }
            ]
          },
          {
            text: "\u516C\u5171\u7EC4\u4EF6\u96C6",
            collapsed: true,
            items: [
              { text: "common-wrapper", link: "/use/common/common-wrapper" },
              { text: "common-wrapper-min", link: "/use/common/common-wrapper-min" },
              { text: "common-wrapper-tbs", link: "/use/common/common-wrapper-tbs" }
            ]
          },
          {
            text: "\u516C\u5171\u7EC4\u4EF6",
            collapsed: true,
            items: [
              { text: "common-debug", link: "/use/common/common-debug" },
              { text: "common-accessibility", link: "/use/common/common-accessibility" },
              { text: "common-qrcode", link: "/use/common/common-qrcode" },
              { text: "common-message", link: "/use/common/common-message" },
              { text: "common-share", link: "/use/common/common-share" },
              { text: "common-navigation-drawer", link: "/use/common/common-navigation-drawer" },
              { text: "common-bottom-tab", link: "/use/common/common-bottom-tab" },
              { text: "common-svga", link: "/use/common/common-svga" },
              { text: "common-ace-editor", link: "/use/common/common-ace-editor" },
              { text: "common-about", link: "/use/common/common-about" },
              { text: "common-list", link: "/use/common/common-list" },
              { text: "common-splash", link: "/use/common/common-splash" },
              { text: "common-photos", link: "/use/common/common-photos" },
              { text: "common-network", link: "/use/common/common-network" },
              { text: "common-webview", link: "/use/common/common-webview" },
              { text: "common-feedback", link: "/use/common/common-feedback" },
              { text: "common-praise", link: "/use/common/common-praise" },
              { text: "common-permission", link: "/use/common/common-permission" },
              { text: "common-panel", link: "/use/common/common-panel" },
              { text: "common-media", link: "/use/common/common-media" },
              { text: "common-crop", link: "/use/common/common-crop" },
              { text: "common-feedback-tbs", link: "/use/common/common-feedback-tbs" },
              { text: "common-webview-tbs", link: "/use/common/common-webview-tbs" },
              { text: "common-tbs", link: "/use/common/common-tbs" }
            ]
          }
        ]
      },
      {
        text: "\u4E09\u65B9\u7EC4\u4EF6\u4FE1\u606F",
        collapsed: true,
        items: [
          {
            text: "\u4E09\u65B9\u7EC4\u4EF6\u96C6",
            collapsed: true,
            items: [
              { text: "services-wrapper", link: "/use/services/services-wrapper" }
            ]
          },
          {
            text: "\u4E09\u65B9\u7EC4\u4EF6",
            collapsed: true,
            items: [
              { text: "services-google-pay", link: "/use/services/services-google-pay" },
              { text: "services-google-ad", link: "/use/services/services-google-ad" },
              { text: "services-google", link: "/use/services/services-google" }
            ]
          }
        ]
      },
      {
        text: "\u8DEF\u7531\u7EC4\u4EF6\u4FE1\u606F",
        collapsed: true,
        items: [
          { text: "lib-router", link: "/use/router/lib-router" },
          { text: "lib-router-compiler", link: "/use/router/lib-router-compiler" },
          { text: "lib-router-annotation", link: "/use/router/lib-router-annotation" }
        ]
      }
    ]
  },
  {
    text: "\u6846\u67B6\u4F7F\u7528",
    collapsed: false,
    items: [
      { text: "\u8FD0\u884C Demo", link: "/sample/start" },
      { text: "\u72EC\u7ACB\u5F00\u53D1", link: "/sample/customize" }
    ]
  },
  {
    text: "\u5F00\u53D1\u5DE5\u5177",
    collapsed: false,
    items: [
      { text: "H5 \u62C9\u8D77 Android \u5E94\u7528", link: "/tools/android_schema" },
      { text: "JSBridge", link: "/tools/android_jsbridge" },
      { text: "Gradle \u4F9D\u8D56\u51B2\u7A81\u68C0\u67E5", link: "/tools/gradle-dependencies-check" },
      { text: "APK 16KB \u9875\u9762\u5BF9\u9F50\u68C0\u67E5", link: "/tools/apk-16kb-check" },
      { text: "APK \u5B89\u88C5\u5305\u7CBE\u7B80\u4E0E\u7626\u8EAB", link: "/tools/apk-size-analyzer" },
      { text: "replay \u56DB\u7AEF UI \u81EA\u52A8\u5316", link: "/tools/replay" }
    ]
  }
];

// .vitepress/config.mjs
var config_default = defineConfig({
  // 站点部署在 /doc/ 子路径（nginx root 是 AndroidAppFactory-Doc 目录，VitePress 产物复制到 doc/）
  // 这样资源引用 /doc/assets/xxx 才能正确命中
  base: "/doc/",
  title: "AndroidAppFactory",
  description: "AAF \u6846\u67B6\u6587\u6863",
  // 构建输出到 _book，nginx root 指向它（与旧 GitBook 产物目录保持一致）
  outDir: "_book",
  // GitBook 时代的相对路径（SUMMARY.md、./../start 等）在 VitePress 里失效，先禁用死链检查
  ignoreDeadLinks: true,
  // 排除旧的 GitBook 产物目录，避免构建时扫描到 _book 里的旧 md
  srcExclude: ["_book/**"],
  // README.md 作为站点首页（映射为 index.html，nginx index 指向它）
  rewrites: {
    "README.md": "index.md"
  },
  themeConfig: {
    sidebar
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubWpzIiwgIi52aXRlcHJlc3Mvc2lkZWJhci5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9Eb2N1bWVudC9Eb2N1bWVudHMvZ2l0aHViL0FuZHJvaWRBcHBGYWN0b3J5LURvYy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVm9sdW1lcy9Eb2N1bWVudC9Eb2N1bWVudHMvZ2l0aHViL0FuZHJvaWRBcHBGYWN0b3J5LURvYy8udml0ZXByZXNzL2NvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1ZvbHVtZXMvRG9jdW1lbnQvRG9jdW1lbnRzL2dpdGh1Yi9BbmRyb2lkQXBwRmFjdG9yeS1Eb2MvLnZpdGVwcmVzcy9jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5tanMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIFx1N0FEOVx1NzBCOVx1OTBFOFx1N0Y3Mlx1NTcyOCAvZG9jLyBcdTVCNTBcdThERUZcdTVGODRcdUZGMDhuZ2lueCByb290IFx1NjYyRiBBbmRyb2lkQXBwRmFjdG9yeS1Eb2MgXHU3NkVFXHU1RjU1XHVGRjBDVml0ZVByZXNzIFx1NEVBN1x1NzI2OVx1NTkwRFx1NTIzNlx1NTIzMCBkb2MvXHVGRjA5XG4gIC8vIFx1OEZEOVx1NjgzN1x1OEQ0NFx1NkU5MFx1NUYxNVx1NzUyOCAvZG9jL2Fzc2V0cy94eHggXHU2MjREXHU4MEZEXHU2QjYzXHU3ODZFXHU1NDdEXHU0RTJEXG4gIGJhc2U6ICcvZG9jLycsXG4gIHRpdGxlOiAnQW5kcm9pZEFwcEZhY3RvcnknLFxuICBkZXNjcmlwdGlvbjogJ0FBRiBcdTY4NDZcdTY3QjZcdTY1ODdcdTY4NjMnLFxuICAvLyBcdTY3ODRcdTVFRkFcdThGOTNcdTUxRkFcdTUyMzAgX2Jvb2tcdUZGMENuZ2lueCByb290IFx1NjMwN1x1NTQxMVx1NUI4M1x1RkYwOFx1NEUwRVx1NjVFNyBHaXRCb29rIFx1NEVBN1x1NzI2OVx1NzZFRVx1NUY1NVx1NEZERFx1NjMwMVx1NEUwMFx1ODFGNFx1RkYwOVxuICBvdXREaXI6ICdfYm9vaycsXG4gIC8vIEdpdEJvb2sgXHU2NUY2XHU0RUUzXHU3Njg0XHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHVGRjA4U1VNTUFSWS5tZFx1MzAwMS4vLi4vc3RhcnQgXHU3QjQ5XHVGRjA5XHU1NzI4IFZpdGVQcmVzcyBcdTkxQ0NcdTU5MzFcdTY1NDhcdUZGMENcdTUxNDhcdTc5ODFcdTc1MjhcdTZCN0JcdTk0RkVcdTY4QzBcdTY3RTVcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxuICAvLyBcdTYzOTJcdTk2NjRcdTY1RTdcdTc2ODQgR2l0Qm9vayBcdTRFQTdcdTcyNjlcdTc2RUVcdTVGNTVcdUZGMENcdTkwN0ZcdTUxNERcdTY3ODRcdTVFRkFcdTY1RjZcdTYyNkJcdTYzQ0ZcdTUyMzAgX2Jvb2sgXHU5MUNDXHU3Njg0XHU2NUU3IG1kXG4gIHNyY0V4Y2x1ZGU6IFsnX2Jvb2svKionXSxcbiAgLy8gUkVBRE1FLm1kIFx1NEY1Q1x1NEUzQVx1N0FEOVx1NzBCOVx1OTk5Nlx1OTg3NVx1RkYwOFx1NjYyMFx1NUMwNFx1NEUzQSBpbmRleC5odG1sXHVGRjBDbmdpbnggaW5kZXggXHU2MzA3XHU1NDExXHU1QjgzXHVGRjA5XG4gIHJld3JpdGVzOiB7XG4gICAgJ1JFQURNRS5tZCc6ICdpbmRleC5tZCcsXG4gIH0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgc2lkZWJhcixcbiAgfSxcbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Wb2x1bWVzL0RvY3VtZW50L0RvY3VtZW50cy9naXRodWIvQW5kcm9pZEFwcEZhY3RvcnktRG9jLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Wb2x1bWVzL0RvY3VtZW50L0RvY3VtZW50cy9naXRodWIvQW5kcm9pZEFwcEZhY3RvcnktRG9jLy52aXRlcHJlc3Mvc2lkZWJhci5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1ZvbHVtZXMvRG9jdW1lbnQvRG9jdW1lbnRzL2dpdGh1Yi9BbmRyb2lkQXBwRmFjdG9yeS1Eb2MvLnZpdGVwcmVzcy9zaWRlYmFyLm1qc1wiOy8vIHNpZGViYXIubWpzIFx1MjAxNFx1MjAxNCBcdTc1MzEgU1VNTUFSWS5tZFx1RkYwOEdpdEJvb2sgXHU3NkVFXHU1RjU1XHVGRjA5XHU2NjIwXHU1QzA0XHU4MDBDXHU2NzY1XHU3Njg0IFZpdGVQcmVzcyBcdTRGQTdcdThGQjlcdTY4MEZcbi8vIFx1NUM0Mlx1N0VBN1x1N0VEM1x1Njc4NFx1NEUwRVx1NTM5RiBTVU1NQVJZLm1kIFx1NEUwMFx1ODFGNFx1RkYwOFx1NjcwMFx1NkRGMSA0IFx1NUM0Mlx1RkYwOVx1RkYwQ1x1N0E3QVx1OTRGRVx1NjNBNVx1Njc2MVx1NzZFRVx1OEY2Q1x1NEUzQVx1NTNFRlx1NjI5OFx1NTNFMFx1NTIwNlx1N0VDNFxuXG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IFtcbiAge1xuICAgIHRleHQ6ICdcdTUxNzNcdTRFOEVcdTY4NDZcdTY3QjYnLFxuICAgIGxpbms6ICcvJyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnXHU2MDNCXHU0RjUzXHU0RUNCXHU3RUNEJywgbGluazogJy9zdW1tYXJ5L2xpbmtzJyB9LFxuICAgICAgeyB0ZXh0OiAnXHU1RTk0XHU3NTI4XHU0RThCXHU0RjhCJywgbGluazogJy9kZW1vL3NhbXBsZXMnIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTRGN0ZcdTc1MjgnLFxuICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ1x1N0VDNFx1NEVGNlx1NUYxNVx1NTE2NScsIGxpbms6ICcvdXNlL3N0YXJ0JyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU3RUM0XHU0RUY2XHU0RkUxXHU2MDZGJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTU3RkFcdTc4NDBcdTdFQzRcdTRFRjZcdTk2QzYnLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXdyYXBwZXInLCBsaW5rOiAnL3VzZS9saWJzL2NvbWJpbmF0aW9uL2xpYi13cmFwcGVyJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItd3JhcHBlci1zY3JlZW4nLCBsaW5rOiAnL3VzZS9saWJzL2NvbWJpbmF0aW9uL2xpYi13cmFwcGVyLXNjcmVlbicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU1MjlGXHU4MEZEJyxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1hYWYtdG9vbHMnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWFhZi10b29scycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWFuZHJvaWQnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWFuZHJvaWQnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1sb2cnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWxvZycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXV0aWxzLWNvbW1vbicsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItdXRpbHMtY29tbW9uJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItYW5kcm9pZC1vcycsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItYW5kcm9pZC1vcycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXRocmVhZCcsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItdGhyZWFkJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItZW5jcnlwdCcsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItZW5jcnlwdCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWNoYW5uZWwnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWNoYW5uZWwnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1yZXF1ZXN0JywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1yZXF1ZXN0JyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItZ3NvbicsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItZ3NvbicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWh0dHAtY29tbW9uJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1odHRwLWNvbW1vbicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWh0dHAtYWR2YW5jZWQnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWh0dHAtYWR2YW5jZWQnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1zcWxpdGUnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLXNxbGl0ZScgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWRldmljZS1uZXR3b3JrJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1kZXZpY2UtbmV0d29yaycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXRpbWVyJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi10aW1lcicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWNvbmZpZycsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItY29uZmlnJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItdXRpbHMtYXBrJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi11dGlscy1hcGsnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi10dHMnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLXR0cycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWZpbGUnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWZpbGUnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi16aXAnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLXppcCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWRvd25sb2FkJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1kb3dubG9hZCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWluc3RhbGwnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWluc3RhbGwnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi10ZXh0JywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi10ZXh0JyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItc3VwZXItYXBwJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1zdXBlci1hcHAnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1kZWJ1ZycsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItZGVidWcnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1pcGMnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWlwYycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWJsb2NrLXRhc2snLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWJsb2NrLXRhc2snIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1va2h0dHAtd3JhcHBlcicsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItb2todHRwLXdyYXBwZXInIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1jb3JvdXRpbmVzJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1jb3JvdXRpbmVzJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItZGF0YS1yZXBvc2l0b3J5JywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1kYXRhLXJlcG9zaXRvcnknIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1hdWRpbycsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItYXVkaW8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1hdWRpby1wbGF5ZXInLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWF1ZGlvLXBsYXllcicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWF1ZGlvLXJlY29yZCcsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItYXVkaW8tcmVjb3JkJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItZmZtcGVnLW1vYmlsZS1hYWYnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWZmbXBlZy1tb2JpbGUtYWFmJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItY3JvcCcsIGxpbms6ICcvdXNlL2xpYnMvbm91aS9saWItY3JvcCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWltYWdlLW1ldGEnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWltYWdlLW1ldGEnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1jaGluZXNlJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1jaGluZXNlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItbGFuZ3VhZ2UnLCBsaW5rOiAnL3VzZS9saWJzL25vdWkvbGliLWxhbmd1YWdlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItcGlueWluJywgbGluazogJy91c2UvbGlicy9ub3VpL2xpYi1waW55aW4nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1VJIFx1NzZGOFx1NTE3MycsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItYWFmLXJlcycsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLWFhZi1yZXMnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi11aS1jb21tb24nLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi11aS1jb21tb24nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1mcmFnbWVudGF0aW9uLWNvcmUnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1mcmFnbWVudGF0aW9uLWNvcmUnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1mcmFnbWVudGF0aW9uJywgbGluazogJy91c2UvbGlicy91aS9saWItZnJhZ21lbnRhdGlvbicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWZyYWdtZW50YXRpb24tc3dpcGViYWNrJywgbGluazogJy91c2UvbGlicy91aS9saWItZnJhZ21lbnRhdGlvbi1zd2lwZWJhY2snIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1mbHljb3RhYmxheW91dCcsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLWZseWNvdGFibGF5b3V0JyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItcXJjb2RlJywgbGluazogJy91c2UvbGlicy91aS9saWItcXJjb2RlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItYWRhcHRlcicsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLWFkYXB0ZXInIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1yZWZyZXNoJywgbGluazogJy91c2UvbGlicy91aS9saWItcmVmcmVzaCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXRvYXN0JywgbGluazogJy91c2UvbGlicy91aS9saWItdG9hc3QnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1tZWRpYScsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLW1lZGlhJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItZGlhbG9nJywgbGluazogJy91c2UvbGlicy91aS9saWItZGlhbG9nJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItbm90aWZpY2F0aW9uJywgbGluazogJy91c2UvbGlicy91aS9saWItbm90aWZpY2F0aW9uJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItYm90dG9tLXRhYicsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLWJvdHRvbS10YWInIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1yZWN5Y2xldmlldy1leHQnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1yZWN5Y2xldmlldy1leHQnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi10b3VjaHJlZ2lvbicsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLXRvdWNocmVnaW9uJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItdmlldy1leHQnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi12aWV3LWV4dCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXZpZXctcGFnZXInLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi12aWV3LXBhZ2VyJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItanNicmlkZ2UnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1qc2JyaWRnZScgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWxpZmVjeWNsZScsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLWxpZmVjeWNsZScgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXBlcm1pc3Npb24nLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1wZXJtaXNzaW9uJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItaW1tZXJzaXZlJywgbGluazogJy91c2UvbGlicy91aS9saWItaW1tZXJzaXZlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItZmlsZS1zZWxlY3QnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1maWxlLXNlbGVjdCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWZsb2F0LXZpZXcnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1mbG9hdC12aWV3JyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItdGV4dHZpZXcnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi10ZXh0dmlldycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWFjZS1lZGl0b3InLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1hY2UtZWRpdG9yJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItY3VzdG9tLXZpZXcnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1jdXN0b20tdmlldycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXRoZW1lJywgbGluazogJy91c2UvbGlicy91aS9saWItdGhlbWUnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2xpYi1jb2xvcicsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLWNvbG9yJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdsaWItcGFuZWwnLCBsaW5rOiAnL3VzZS9saWJzL3VpL2xpYi1wYW5lbCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLXdpZGdldCcsIGxpbms6ICcvdXNlL2xpYnMvdWkvbGliLXdpZGdldCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnbGliLWxvY2stc2NyZWVuJywgbGluazogJy91c2UvbGlicy91aS9saWItbG9jay1zY3JlZW4nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU1MTZDXHU1MTcxXHU3RUM0XHU0RUY2XHU0RkUxXHU2MDZGJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTY4NDZcdTY3QjZcdTdFQzRcdTRFRjYnLFxuICAgICAgICAgICAgbGluazogJy91c2UvY29tbW9uL2ZyYW1ld29yaycsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTVFOTRcdTc1MjhcdTY2RjRcdTY1QjAnLCBsaW5rOiAnL3VzZS9jb21tb24vZnJhbWV3b3JrL2ZyYW1ld29yay11cGRhdGUnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1OTc1RSBVSSBcdTc2ODRcdTY4MzhcdTVGQzNcdTZBMjFcdTU3NTcnLCBsaW5rOiAnL3VzZS9jb21tb24vZnJhbWV3b3JrL2ZyYW1ld29yay1ub3VpJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTUxNkNcdTc1MjggVUkgXHU2QTIxXHU1NzU3JywgbGluazogJy91c2UvY29tbW9uL2ZyYW1ld29yay9mcmFtZXdvcmstdWknIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ1x1NTE2Q1x1NTE3MVx1N0VDNFx1NEVGNlx1OTZDNicsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24td3JhcHBlcicsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24td3JhcHBlcicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXdyYXBwZXItbWluJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi13cmFwcGVyLW1pbicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXdyYXBwZXItdGJzJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi13cmFwcGVyLXRicycgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU1MTZDXHU1MTcxXHU3RUM0XHU0RUY2JyxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvbW1vbi1kZWJ1ZycsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tZGVidWcnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvbW1vbi1hY2Nlc3NpYmlsaXR5JywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1hY2Nlc3NpYmlsaXR5JyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tcXJjb2RlJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1xcmNvZGUnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvbW1vbi1tZXNzYWdlJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1tZXNzYWdlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tc2hhcmUnLCBsaW5rOiAnL3VzZS9jb21tb24vY29tbW9uLXNoYXJlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tbmF2aWdhdGlvbi1kcmF3ZXInLCBsaW5rOiAnL3VzZS9jb21tb24vY29tbW9uLW5hdmlnYXRpb24tZHJhd2VyJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tYm90dG9tLXRhYicsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tYm90dG9tLXRhYicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXN2Z2EnLCBsaW5rOiAnL3VzZS9jb21tb24vY29tbW9uLXN2Z2EnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvbW1vbi1hY2UtZWRpdG9yJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1hY2UtZWRpdG9yJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tYWJvdXQnLCBsaW5rOiAnL3VzZS9jb21tb24vY29tbW9uLWFib3V0JyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tbGlzdCcsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tbGlzdCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXNwbGFzaCcsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tc3BsYXNoJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tcGhvdG9zJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1waG90b3MnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvbW1vbi1uZXR3b3JrJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1uZXR3b3JrJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24td2VidmlldycsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24td2VidmlldycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLWZlZWRiYWNrJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1mZWVkYmFjaycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXByYWlzZScsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tcHJhaXNlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdjb21tb24tcGVybWlzc2lvbicsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tcGVybWlzc2lvbicgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXBhbmVsJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1wYW5lbCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLW1lZGlhJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi1tZWRpYScgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLWNyb3AnLCBsaW5rOiAnL3VzZS9jb21tb24vY29tbW9uLWNyb3AnIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ2NvbW1vbi1mZWVkYmFjay10YnMnLCBsaW5rOiAnL3VzZS9jb21tb24vY29tbW9uLWZlZWRiYWNrLXRicycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXdlYnZpZXctdGJzJywgbGluazogJy91c2UvY29tbW9uL2NvbW1vbi13ZWJ2aWV3LXRicycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnY29tbW9uLXRicycsIGxpbms6ICcvdXNlL2NvbW1vbi9jb21tb24tdGJzJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NEUwOVx1NjVCOVx1N0VDNFx1NEVGNlx1NEZFMVx1NjA2RicsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU0RTA5XHU2NUI5XHU3RUM0XHU0RUY2XHU5NkM2JyxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ3NlcnZpY2VzLXdyYXBwZXInLCBsaW5rOiAnL3VzZS9zZXJ2aWNlcy9zZXJ2aWNlcy13cmFwcGVyJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTRFMDlcdTY1QjlcdTdFQzRcdTRFRjYnLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnc2VydmljZXMtZ29vZ2xlLXBheScsIGxpbms6ICcvdXNlL3NlcnZpY2VzL3NlcnZpY2VzLWdvb2dsZS1wYXknIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ3NlcnZpY2VzLWdvb2dsZS1hZCcsIGxpbms6ICcvdXNlL3NlcnZpY2VzL3NlcnZpY2VzLWdvb2dsZS1hZCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnc2VydmljZXMtZ29vZ2xlJywgbGluazogJy91c2Uvc2VydmljZXMvc2VydmljZXMtZ29vZ2xlJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1OERFRlx1NzUzMVx1N0VDNFx1NEVGNlx1NEZFMVx1NjA2RicsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdsaWItcm91dGVyJywgbGluazogJy91c2Uvcm91dGVyL2xpYi1yb3V0ZXInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnbGliLXJvdXRlci1jb21waWxlcicsIGxpbms6ICcvdXNlL3JvdXRlci9saWItcm91dGVyLWNvbXBpbGVyJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ2xpYi1yb3V0ZXItYW5ub3RhdGlvbicsIGxpbms6ICcvdXNlL3JvdXRlci9saWItcm91dGVyLWFubm90YXRpb24nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU2ODQ2XHU2N0I2XHU0RjdGXHU3NTI4JyxcbiAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdcdThGRDBcdTg4NEMgRGVtbycsIGxpbms6ICcvc2FtcGxlL3N0YXJ0JyB9LFxuICAgICAgeyB0ZXh0OiAnXHU3MkVDXHU3QUNCXHU1RjAwXHU1M0QxJywgbGluazogJy9zYW1wbGUvY3VzdG9taXplJyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnXHU1RjAwXHU1M0QxXHU1REU1XHU1MTc3JyxcbiAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdINSBcdTYyQzlcdThENzcgQW5kcm9pZCBcdTVFOTRcdTc1MjgnLCBsaW5rOiAnL3Rvb2xzL2FuZHJvaWRfc2NoZW1hJyB9LFxuICAgICAgeyB0ZXh0OiAnSlNCcmlkZ2UnLCBsaW5rOiAnL3Rvb2xzL2FuZHJvaWRfanNicmlkZ2UnIH0sXG4gICAgICB7IHRleHQ6ICdHcmFkbGUgXHU0RjlEXHU4RDU2XHU1MUIyXHU3QTgxXHU2OEMwXHU2N0U1JywgbGluazogJy90b29scy9ncmFkbGUtZGVwZW5kZW5jaWVzLWNoZWNrJyB9LFxuICAgICAgeyB0ZXh0OiAnQVBLIDE2S0IgXHU5ODc1XHU5NzYyXHU1QkY5XHU5RjUwXHU2OEMwXHU2N0U1JywgbGluazogJy90b29scy9hcGstMTZrYi1jaGVjaycgfSxcbiAgICAgIHsgdGV4dDogJ0FQSyBcdTVCODlcdTg4QzVcdTUzMDVcdTdDQkVcdTdCODBcdTRFMEVcdTc2MjZcdThFQUInLCBsaW5rOiAnL3Rvb2xzL2Fway1zaXplLWFuYWx5emVyJyB9LFxuICAgICAgeyB0ZXh0OiAncmVwbGF5IFx1NTZEQlx1N0FFRiBVSSBcdTgxRUFcdTUyQThcdTUzMTYnLCBsaW5rOiAnL3Rvb2xzL3JlcGxheScgfSxcbiAgICBdLFxuICB9LFxuXVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWCxTQUFTLG9CQUFvQjs7O0FDR3pZLElBQU0sVUFBVTtBQUFBLEVBQ3JCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0s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
