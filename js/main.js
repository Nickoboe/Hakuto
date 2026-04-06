// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. 主题切换逻辑 (黑夜/白天模式)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcon('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark ? 'dark' : 'light');
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // 2. 导航栏平滑滚动 (虽然CSS scroll-behavior 已经处理了部分，但加上JS更稳，且可处理偏移)
    const navLinks = document.querySelectorAll('.nav-links a, .action-buttons a[href^="#"], .intro a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. 二维码弹窗逻辑
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const closeBtns = document.querySelectorAll('.close-btn');
    const popups = document.querySelectorAll('.popup-overlay');

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const popupId = trigger.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.classList.add('active');
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.popup-overlay').classList.remove('active');
        });
    });

    // 点击弹窗外部关闭
    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
    });

    // 4. 轮播效果（支持多个 quote-carousel）
    const quoteCarousels = document.querySelectorAll('.quote-carousel');
    quoteCarousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.quote-item');
        if (items.length > 0) {
            let currentIndex = 0;
            setInterval(() => {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % items.length;
                items[currentIndex].classList.add('active');
            }, 4000); // 每4秒切换一次
        }
    });

    const detailButtons = document.querySelectorAll('.project-card .btn.small-btn:not(.bilibili-btn)');
    const detailPopup = document.getElementById('project-detail-popup');
    if (detailPopup) {
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const card = button.closest('.project-card');
                if (!card) return;

                const image = card.querySelector('img');
                const title = card.querySelector('h3');
                const description = card.querySelector('p');
                const detailImage = detailPopup.querySelector('.detail-image');
                const detailTitle = detailPopup.querySelector('.detail-title');
                const detailDescription = detailPopup.querySelector('.detail-description');

                if (image) {
                    detailImage.src = image.src;
                    detailImage.alt = image.alt || (title ? title.textContent : '项目图片');
                }
                if (title) {
                    detailTitle.textContent = title.textContent;
                }
                if (description) {
                    detailDescription.textContent = description.textContent;
                }

                detailPopup.classList.add('active');
            });
        });
    }

    // 5. 项目笔记过滤功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            // 给当前点击的按钮添加active类
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // 6. 返回顶部按钮
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});