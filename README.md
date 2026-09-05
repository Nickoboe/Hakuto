# Hakuto · 新媒体作品集

面向新媒体方向的个人作品集网站，蓝色玻璃拟态风格，支持明暗双主题。

线上地址：[show.hakuto837.com](https://show.hakuto837.com)

## 功能特性

- 🌙 明/暗主题切换（跟随系统 + 手动记忆）
- 🌐 中英双语切换
- 🖼️ 全本地 SVG 作品封面，无外部图床依赖
- 🎬 打字机、滚动显现、3D 倾斜、涟漪等交互动效
- 📱 响应式设计，支持移动端
- 💬 微信 / QQ 二维码弹窗 + EmailJS 联系表单
- 🗂️ 作品分类筛选（视频剪辑 / 图文创作 / 开发项目）

## 技术栈

- HTML5 / CSS3（CSS 变量、Grid、毛玻璃）
- 原生 JavaScript（ES6+）
- Font Awesome 图标（cdnjs）
- devicon 技能图标（已本地化）

## 项目结构

```
Showmore/
├── index.html          # 主页面
├── css/style.css       # 样式（含暗色主题变量组）
├── js/main.js          # 交互逻辑与双语字典
├── js/vendor/          # 本地化的第三方库（EmailJS）
├── assets/
│   ├── favicon.svg     # 月亮标签页图标
│   ├── covers/         # 作品封面（本地 SVG）
│   ├── icons/          # 技能图标（本地 SVG）
│   ├── wechat-qr.png   # 微信二维码
│   └── qq-qr.png       # QQ二维码
└── CNAME               # 自定义域名
```

## 本地运行

在项目目录启动任意静态服务器（如 `npx serve` 或 VS Code Live Server），浏览器打开即可。

## 部署

推送至 `main` 分支后由 GitHub Pages 自动构建发布，绑定域名 `show.hakuto837.com`。

## 许可证

MIT License

## 作者

Hakuto - [GitHub](https://github.com/Nickoboe/Hakuto)
