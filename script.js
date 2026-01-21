// 全局变量
let currentVideo = '';
let currentDownloadFile = '';
const DEFAULT_PAN_URL = 'https://pan.baidu.com/';

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupEventListeners();
    loadThemePreference();
});

// 初始化作品集功能
function initializePortfolio() {
    console.log('Hakuto作品集初始化完成');
    
    // 添加滚动动画效果
    addScrollAnimations();
}

// 设置事件监听器
function setupEventListeners() {
    // 主题切换按钮
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 分类导航按钮
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            switchCategory(this.dataset.category);
        });
    });
    
    // 查看视频按钮
    const viewVideoBtns = document.querySelectorAll('.view-video');
    viewVideoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            openVideoModal(this.dataset.video);
        });
    });
    
    // 下载项目按钮
    const downloadBtns = document.querySelectorAll('.download-project');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const pan = this.dataset.pan;
            const url = pan || DEFAULT_PAN_URL;
            if (url) {
                window.open(url, '_blank');
            } else {
                openDownloadModal(this.dataset.file);
            }
        });
    });
    
    // 模态框关闭按钮
    const closeModals = document.querySelectorAll('.close-modal');
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', closeAllModals);
    });
    
    // 下载确认按钮
    const confirmDownload = document.getElementById('confirm-download');
    const cancelDownload = document.getElementById('cancel-download');
    
    if (confirmDownload) {
        confirmDownload.addEventListener('click', confirmDownloadFile);
    }
    
    if (cancelDownload) {
        cancelDownload.addEventListener('click', closeAllModals);
    }
    
    // 点击模态框外部关闭
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAllModals();
            }
        });
    });
    
    // 键盘事件
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    const images = document.querySelectorAll('.portfolio-item .item-image img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const item = this.closest('.portfolio-item');
            if (!item) return;
            const titleEl = item.querySelector('.item-info h3');
            const descEl = item.querySelector('.item-info p');
            const title = titleEl ? titleEl.textContent : '';
            const desc = descEl ? descEl.textContent : '';
            openImageModal(this.src, title, desc);
        });
    });

    const infoBlocks = document.querySelectorAll('.portfolio-item .item-info');
    infoBlocks.forEach(info => {
        info.addEventListener('click', function() {
            const item = this.closest('.portfolio-item');
            if (!item) return;
            const imgEl = item.querySelector('.item-image img');
            const titleEl = item.querySelector('.item-info h3');
            const descEl = item.querySelector('.item-info p');
            const src = imgEl ? imgEl.src : '';
            const title = titleEl ? titleEl.textContent : '';
            const desc = descEl ? descEl.textContent : '';
            openImageModal(src, title, desc);
        });
    });
}

// 切换主题
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
        showNotification('已切换到夜间模式', 'success');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
        showNotification('已切换到日间模式', 'success');
    }
    
    // 添加主题切换动画
    themeBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        themeBtn.style.transform = 'scale(1)';
    }, 300);
}

// 加载主题偏好设置
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.className = 'fas fa-sun';
    }
}

// 切换作品分类
function switchCategory(category) {
    // 更新按钮状态
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // 显示对应的作品分类
    const categories = document.querySelectorAll('.portfolio-category');
    categories.forEach(cat => {
        cat.classList.remove('active');
        if (cat.id === `${category}-category`) {
            cat.classList.add('active');
        }
    });
    
    // 添加切换动画
    const activeCategory = document.getElementById(`${category}-category`);
    if (activeCategory) {
        activeCategory.style.animation = 'none';
        setTimeout(() => {
            activeCategory.style.animation = 'fadeIn 0.5s ease';
        }, 10);
    }
    
    // 分类名称映射（保留以备其他用途）
    const categoryNames = {
        'ue5': 'UE5作品',
        'unity': 'Unity作品', 
        'video': '视频剪辑作品'
    };
}

// 打开视频模态框
function openVideoModal(videoSrc) {
    currentVideo = videoSrc;
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    
    // 设置视频源
    video.src = videoSrc;
    
    // 显示模态框
    modal.classList.add('active');
    
    // 自动播放视频
    setTimeout(() => {
        video.play().catch(e => {
            console.log('自动播放被阻止:', e);
        });
    }, 300);
    
    showNotification('视频加载中...', 'info');
}

// 打开下载确认模态框
function openDownloadModal(fileName) {
    currentDownloadFile = fileName;
    const modal = document.getElementById('download-modal');
    const message = document.getElementById('download-message');
    
    // 设置下载消息
    message.textContent = `您即将下载项目文件: ${fileName}`;
    
    // 显示模态框
    modal.classList.add('active');
}

function openImageModal(imageSrc, title, description) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-image-title');
    const modalDesc = document.getElementById('modal-image-desc');
    if (!modal || !modalImage || !modalTitle || !modalDesc) return;
    modalImage.src = imageSrc || '';
    modalTitle.textContent = title || '';
    modalDesc.textContent = description || '';
    modal.classList.add('active');
}

// 确认下载文件
function confirmDownloadFile() {
    if (currentDownloadFile) {
        const url = DEFAULT_PAN_URL;
        if (url) {
            window.open(url, '_blank');
        }
        closeAllModals();
    }
}

// 关闭所有模态框
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    const video = document.getElementById('modal-video');
    
    // 暂停视频
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    
    // 关闭所有模态框
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    
    // 重置变量
    currentVideo = '';
    currentDownloadFile = '';
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 1rem 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        border-left: 4px solid ${getNotificationColor(type)};
    `;
    
    if (document.body.classList.contains('dark-mode')) {
        notification.style.background = 'rgba(44, 62, 80, 0.95)';
        notification.style.color = '#ecf0f1';
    }
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 获取通知图标
function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// 获取通知颜色
function getNotificationColor(type) {
    const colors = {
        'success': '#27ae60',
        'error': '#e74c3c',
        'warning': '#f39c12',
        'info': '#3498db'
    };
    return colors[type] || '#3498db';
}

// 添加滚动动画效果
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有作品项
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(102, 126, 234, 0.3);
        border: 2px solid #667eea;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.2s, height 0.2s, background 0.2s;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // 鼠标悬停效果
    const interactiveElements = document.querySelectorAll('button, .portfolio-item, .action-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.background = 'rgba(102, 126, 234, 0.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'rgba(102, 126, 234, 0.3)';
        });
    });
}

// 页面加载完成后的初始化效果
window.addEventListener('load', function() {
    // 添加加载完成动画
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.animation = 'fadeIn 1s ease';
    }
    
    // 显示欢迎通知
    setTimeout(() => {
        showNotification('欢迎来到Hakuto的作品集！', 'info');
    }, 1000);
});

// 添加窗口调整大小时的响应式处理
window.addEventListener('resize', function() {
    // 可以在这里添加响应式相关的处理
    console.log('窗口大小已调整');
});
