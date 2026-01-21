# Hakuto的作品集

一个简约科技感的作品集展示网站，展示UE5、Unity和视频剪辑作品。当前已支持本地媒体播放与百度网盘下载。

## 功能特性

- 🎨 **简约科技感设计** - 毛玻璃效果、渐变色彩、现代UI
- 🌙 **夜间模式切换** - 支持日间/夜间主题切换
- 🎬 **作品展示** - 分类展示UE5、Unity、视频剪辑作品
- 📹 **视频播放** - 点击图片可查看作品视频
- 📺 **B站嵌入** - 支持使用 B 站 iframe 播放并自动高清
- 📥 **项目下载** - 点击“下载项目”跳转至百度网盘
- ✨ **动画效果** - 悬停动画、过渡效果、滚动进入动画
- 🖼️ **图文简介** - 点击图片或文字可弹出自定义图文介绍
- 📱 **响应式设计** - 适配各种屏幕尺寸

## 项目结构

```
show/
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # 交互脚本
└── README.md           # 项目说明
```

## 快速开始

### 本地运行
1. 克隆或下载项目文件
2. 直接在浏览器中打开 `index.html` 文件
3. 或者使用本地服务器运行：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx http-server
   ```

### GitHub Pages部署
1. 在GitHub上创建新仓库（推荐）或使用现有仓库
2. 将项目文件推送到仓库的 `main` 或 `master` 分支
3. 在仓库设置中启用GitHub Pages：
   - 进入仓库的 Settings 页面
   - 选择 Pages 选项
   - 选择 "GitHub Actions" 作为源
4. 访问 `https://[您的用户名].github.io/[仓库名]` 查看网站

**推荐创建新仓库**来部署这个新网站，这样可以保留您之前的项目历史。

## 使用说明

### 浏览作品
- 点击顶部导航按钮切换不同分类（UE5、Unity、视频剪辑）
- 鼠标悬停在作品图片上查看交互选项

### 查看视频
- 点击作品图片上的“查看视频”按钮
- 在弹出的模态框中观看作品视频（部分作品使用本地媒体文件）
- 支持 B 站 iframe，点击后自动开始播放并启用高清
- 点击模态框外部或按 ESC 键关闭

### 下载项目
- 点击作品图片上的“下载项目”按钮
- 默认跳转到百度网盘链接在新标签页打开
- 支持为单个作品配置专属链接（见下文“自定义内容”）

### 主题切换
- 点击右上角的月亮/太阳图标切换日间/夜间模式
- 主题偏好会自动保存到本地存储

## 自定义内容

### 添加新作品
在 `index.html` 文件中找到对应的作品分类区域，添加新的作品项：

```html
<div class="portfolio-item" data-id="new-project">
    <div class="item-image">
        <img src="path/to/your/image.jpg" alt="项目名称">
        <div class="item-overlay">
            <button class="action-btn view-video" data-video="path/to/video.mp4">
                <i class="fas fa-play"></i>
                <span>查看视频</span>
            </button>
            <button class="action-btn download-project" data-file="project-file.zip" data-pan="https://pan.baidu.com/s/your-share?pwd=xxxx">
                <i class="fas fa-download"></i>
                <span>下载项目</span>
            </button>
        </div>
    </div>
    <div class="item-info">
        <h3>项目标题</h3>
        <p>项目描述</p>
    </div>
</div>
```

### 自定义图文简介
为作品卡片添加自定义图文属性：
- `data-detail-image`：自定义弹窗主图
- `data-detail-title`：自定义标题
- `data-detail-desc`：自定义说明（可写长文本）
- `data-detail-images`：额外图片，逗号分隔

### 修改样式
编辑 `style.css` 文件来自定义：
- 颜色主题
- 字体样式
- 动画效果
- 布局结构

### 扩展功能
在 `script.js` 中添加新的交互功能：
- 新的动画效果
- 额外的交互功能
- 第三方集成

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画（渐变、毛玻璃效果、网格布局）
- **JavaScript** - 交互功能（模态框、主题切换、动画）
- **Font Awesome** - 图标库
- **Google Fonts** - 字体服务

## 当前示例配置
- Godot 2D平台游戏
  - 视频：B 站嵌入
  - 下载：百度网盘（来自 `path/path.txt` 第1条）
- UE4高级角色系统
  - 视频：B 站嵌入
  - 下载：百度网盘（来自 `path/path.txt` 第2条）

### 使用 B 站嵌入
- 在按钮上设置 `data-embed="//player.bilibili.com/player.html?..."`
- 自动添加 `autoplay=1&high_quality=1` 参数实现立即播放与高清

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系Hakuto。

---

*最后更新: 2026年*
