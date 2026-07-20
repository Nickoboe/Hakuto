window.history.scrollRestoration = 'manual';
window.addEventListener('beforeunload', () => window.scrollTo(0, 0));

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);

    // ===== EmailJS Init =====
    emailjs.init('W9G-RXej0tonaIUxs');

    // ===== i18n =====
    const translations = {
        zh: {
            'nav.home': '首页', 'nav.work': '作品', 'nav.about': '关于', 'nav.contact': '联系', 'nav.hire': '联系我',
            'hero.tag': '游戏爱好者 & 开发者',
            'hero.typing': ['你好，我是 Hakuto', '前端开发学习者', 'Unity开发学习者'],
            'hero.cta1': '查看我的项目', 'hero.scroll': '向下滚动',
            'work.title': '时空观测记录', 'work.subtitle': '项目与创意作品集',
            'work.all': '全部', 'work.personal': '个人项目', 'work.study': '学习笔记', 'work.video': '视频剪辑',
            'work.detail': '详情', 'work.cloud': '网盘', 'work.tag_game': '游戏',
            'project.cat_title': '小猫历险记',
            'project.cat_desc': '使用Godot开发的一款2D平台跳跃游戏，包含丰富的关卡设计与流畅的动作手感。',
            'project.survey_title': '问卷调查系统',
            'project.survey_desc': '基于Vue3 + Node.js搭建的现代化全栈系统，前后端分离，支持多类型题目与数据分析。',
            'project.winform_title': 'Winform视频管理系统',
            'project.winform_desc': '基于Winform开发的视频管理系统，支持视频的增删改查与提交功能。',
            'project.wpf_title': 'WPF桌面应用 - Mote',
            'project.wpf_desc': '使用WPF开发的桌面小部件程序，集成了天气更新、每日一句与节假日倒计时等实用功能。',
            'project.ue4_title': 'UE4动作游戏',
            'project.ue4_desc': '2.5D动作游戏，结合了UE引擎的先进技术和丰富的游戏玩法。',
            'project.info_title': '信息流视频',
            'project.info_desc': '曾在信息流公司实习，参与了信息流视频的制作与推广工作。运营账号：DY:老贺做烤羊蝎子',
            'project.anim_title': '3D动画视频',
            'project.anim_desc': '学习过3D动画制作，能够独立完成简单的动画短片。并在未来设计师大赛上获得省级三等奖。',
            'project.amv_title': '漫剪视频',
            'project.amv_desc': '漫威电影动作超燃卡点混剪，使用了大量特效和剪辑技巧，使得视频节奏紧凑，观赏性极强。',
            'project.resume_title': '简历页面',
            'project.resume_desc': '展示我的个人简历，包含我的基本信息，教育背景，实习经历等。',
            'project.oral_title': '口播剪辑',
            'project.oral_desc': '制作个人介绍卡与招聘PPT模板，便于简历投递时直观呈现优势与职业方向。',
            'project.marketing_title': '营销号制作',
            'project.marketing_desc': '网络流行语与热点事件结合，制作具有传播力的营销内容。',
            'about.tag1': '游戏爱好者', 'about.tag2': '开发者', 'about.title': '关于我',
            'about.text1': '我是一名热爱游戏和编程的开发者，喜欢探索新技术，创造有趣的项目。',
            'about.text2': '我喜欢在代码中寻找乐趣，在游戏中体验不同的世界。我的旅程连接着创意与技术之间的桥梁。',
            'about.quote1': '"生活不止眼前的苟且，还有代码和远方"',
            'about.quote2': '"日子是重复的，但快乐不是"',
            'about.quote3': '"把烦心事丢掉，腾出地方装鲜花"',
            'about.quote4': '"万事尽头，终将美好"',
            'about.skills_title': '技能与能力',
            'about.skill_frontend': '前端开发', 'about.skill_backend': '后端 (C# / .NET)',
            'about.skill_gamedev': '游戏开发', 'about.skill_editing': '视频剪辑',
            'about.cta_title': '想和我聊聊？',
            'about.cta_text': '无论是技术交流、游戏开发探讨，还是寻找合作机会，我都非常欢迎。如果你有有趣的想法，不妨和我分享！',
            'about.cta_btn': '前往联系',
            'about.timeline_title': '我的旅程', 'about.present': '至今',
            'about.tl1': '开发之路，启程！',
            'about.tl2': '明确了C#与.NET后端的发展方向，从零搭建并成功将个人主页部署至GitHub Pages。',
            'about.tl3': '深入学习前后端分离架构，在B站等平台疯狂汲取养分。',
            'about.tl4': '正式踏入编程与游戏开发的世界，敲下了生命中第一行 "Hello World"。',
            'contact.title': '建立联系', 'contact.subtitle': '有任何想法或合作意向？欢迎随时联系我。',
            'contact.tagline': '期待与你一起创造精彩？',
            'contact.name_label': '你的姓名', 'contact.name_ph': '请输入姓名',
            'contact.email_label': '邮箱地址', 'contact.email_ph': 'your@email.com',
            'contact.subject_label': '主题', 'contact.subject_ph': '合作咨询',
            'contact.message_label': '消息内容', 'contact.message_ph': '请输入你的消息...',
            'contact.send': '发送消息',
            'contact.sending': '发送中...', 'contact.success': '消息已发送成功！', 'contact.error': '发送失败，请稍后再试。',
            'popup.wechat': '扫描二维码添加微信', 'popup.qq': '扫描二维码添加QQ',
        },
        en: {
            'nav.home': 'Home', 'nav.work': 'Work', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.hire': 'HIRE ME',
            'hero.tag': 'Game Enthusiast & Developer',
            'hero.typing': ["Hello, I'm Hakuto", 'Frontend Dev Learner', 'Unity Dev Learner'],
            'hero.cta1': 'View My Projects', 'hero.scroll': 'Scroll Down',
            'work.title': 'Selected Works', 'work.subtitle': 'Projects & creative works',
            'work.all': 'All', 'work.personal': 'Personal', 'work.study': 'Study', 'work.video': 'Video',
            'work.detail': 'Details', 'work.cloud': 'Cloud', 'work.tag_game': 'Game',
            'project.cat_title': 'Cat Adventure',
            'project.cat_desc': 'A 2D platformer game built with Godot engine, featuring rich level design and smooth action mechanics.',
            'project.survey_title': 'Survey System',
            'project.survey_desc': 'A modern full-stack system built with Vue3 + Node.js, supporting multiple question types and data analytics.',
            'project.winform_title': 'Winform Video Manager',
            'project.winform_desc': 'A video management system built with Winform, supporting CRUD operations and submission workflow.',
            'project.wpf_title': 'WPF Desktop Widget - Mote',
            'project.wpf_desc': 'A minimal desktop widget built with WPF, integrating weather updates, daily quotes, and holiday countdown.',
            'project.ue4_title': 'UE4 Action Game',
            'project.ue4_desc': "A 2.5D action game combining Unreal Engine's advanced technology with rich gameplay mechanics.",
            'project.info_title': 'Information Flow Videos',
            'project.info_desc': 'Internship experience in information flow video production and promotion. Account: DY: LaoHe BBQ',
            'project.anim_title': '3D Animation',
            'project.anim_desc': 'Studied 3D animation production. Won provincial 3rd prize in Future Designer competition.',
            'project.amv_title': 'AMV Edit',
            'project.amv_desc': 'Marvel movie action-packed beat-synced mashup with extensive effects and editing techniques.',
            'project.resume_title': 'Resume Page',
            'project.resume_desc': 'Personal resume showcase including basic info, education background, and internship experience.',
            'project.oral_title': 'Broadcast Editing',
            'project.oral_desc': 'Created personal intro cards and recruitment PPT templates for intuitive resume presentation.',
            'project.marketing_title': 'Marketing Content',
            'project.marketing_desc': 'Combining internet trends and hot topics to create viral marketing content.',
            'about.tag1': 'Game Enthusiast', 'about.tag2': 'Developer', 'about.title': 'About Me',
            'about.text1': "I'm a developer who loves games and programming, passionate about exploring new technologies and creating interesting projects.",
            'about.text2': 'I find joy in code and experience different worlds through games. My journey bridges the gap between creativity and technology.',
            'about.quote1': '"Life is not just about the daily grind, but also about code and the horizon beyond."',
            'about.quote2': '"Days may repeat, but happiness doesn\'t."',
            'about.quote3': '"Let go of worries, make room for flowers."',
            'about.quote4': '"Everything will be beautiful in the end."',
            'about.skills_title': 'Skills & Abilities',
            'about.skill_frontend': 'Frontend Development', 'about.skill_backend': 'Backend (C# / .NET)',
            'about.skill_gamedev': 'Game Development', 'about.skill_editing': 'Video Editing',
            'about.cta_title': 'Want to Chat?',
            'about.cta_text': "Whether it's tech discussion, game dev exploration, or collaboration, I'm always open to interesting ideas!",
            'about.cta_btn': 'Get in Touch',
            'about.timeline_title': 'My Journey', 'about.present': 'Present',
            'about.tl1': 'Development journey, setting sail!',
            'about.tl2': 'Focused on C# and .NET backend development, deployed personal homepage to GitHub Pages.',
            'about.tl3': 'Studied front-end/back-end separation architecture, learning extensively on Bilibili.',
            'about.tl4': 'Entered the world of programming and game development, wrote the first "Hello World".',
            'contact.title': 'Contact', 'contact.subtitle': "Feel free to reach out. I'd love to hear from you.",
            'contact.tagline': 'Ready to create something amazing?',
            'contact.name_label': 'YOUR NAME', 'contact.name_ph': 'John Doe',
            'contact.email_label': 'EMAIL ADDRESS', 'contact.email_ph': 'john@example.com',
            'contact.subject_label': 'SUBJECT', 'contact.subject_ph': 'Collaboration Request',
            'contact.message_label': 'MESSAGE', 'contact.message_ph': 'Write your message here...',
            'contact.send': 'SEND MESSAGE',
            'contact.sending': 'Sending...', 'contact.success': 'Message sent successfully!', 'contact.error': 'Failed to send. Please try again.',
            'popup.wechat': 'Scan to add WeChat', 'popup.qq': 'Scan to add QQ',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'zh';

    function applyTranslations(lang) {
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.placeholder = t[key];
        });
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }

    // ===== Language Toggle =====
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = langToggle.querySelector('span');

    function updateLangButton() {
        langLabel.textContent = currentLang === 'zh' ? 'EN' : '中';
    }

    applyTranslations(currentLang);
    updateLangButton();

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
        updateLangButton();
        startTypingCarousel();
    });

    // ===== Multi-text Typing Carousel =====
    const typingEl = document.getElementById('typing-text');
    let typingTimer;
    let currentTextIndex = 0;

    function startTypingCarousel() {
        if (!typingEl) return;
        clearTimeout(typingTimer);
        currentTextIndex = 0;
        typingEl.textContent = '';
        typeNextText();
    }

    function typeNextText() {
        const texts = translations[currentLang]['hero.typing'];
        const text = texts[currentTextIndex];
        let i = 0;
        typingEl.textContent = '';

        function typeChar() {
            if (i < text.length) {
                typingEl.textContent += text[i];
                i++;
                typingTimer = setTimeout(typeChar, 80);
            } else {
                typingTimer = setTimeout(deleteText, 2000);
            }
        }

        function deleteText() {
            const current = typingEl.textContent;
            if (current.length > 0) {
                typingEl.textContent = current.slice(0, -1);
                typingTimer = setTimeout(deleteText, 40);
            } else {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                typingTimer = setTimeout(typeNextText, 500);
            }
        }

        typeChar();
    }

    startTypingCarousel();

    // ===== Hero Image Carousel =====
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        heroSlides.forEach(s => s.classList.remove('active'));
        heroDots.forEach(d => d.classList.remove('active'));
        if (heroSlides[index]) heroSlides[index].classList.add('active');
        if (heroDots[index]) heroDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % heroSlides.length);
    }

    function startSlideshow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    heroDots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(parseInt(dot.dataset.index));
            startSlideshow();
        });
    });

    if (heroSlides.length > 1) startSlideshow();

    // ===== Sakura Canvas Animation =====
    const sakuraCanvas = document.getElementById('sakura-canvas');
    if (sakuraCanvas) {
        const ctx = sakuraCanvas.getContext('2d');
        const petals = [];
        const isMobile = window.innerWidth < 768;
        const petalCount = isMobile ? 25 : 50;

        function resizeCanvas() {
            sakuraCanvas.width = window.innerWidth;
            sakuraCanvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Petal {
            constructor(spread) {
                this.reset(spread);
            }

            reset(spread) {
                this.x = Math.random() * sakuraCanvas.width;
                this.y = spread ? Math.random() * sakuraCanvas.height : Math.random() * -sakuraCanvas.height;
                this.size = Math.random() * 8 + 4;
                this.speedY = Math.random() * 1 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                this.opacity = Math.random() * 0.4 + 0.15;
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = Math.random() * 0.02 + 0.01;
            }

            update() {
                this.y += this.speedY;
                this.wobble += this.wobbleSpeed;
                this.x += this.speedX + Math.sin(this.wobble) * 0.3;
                this.rotation += this.rotationSpeed;
                if (this.y > sakuraCanvas.height + 20) {
                    this.reset(false);
                    this.y = -10;
                }
                if (this.x > sakuraCanvas.width + 20) this.x = -20;
                if (this.x < -20) this.x = sakuraCanvas.width + 20;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = '#f8b4c8';
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
                ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < petalCount; i++) {
            petals.push(new Petal(true));
        }

        function animateSakura() {
            ctx.clearRect(0, 0, sakuraCanvas.width, sakuraCanvas.height);
            petals.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animateSakura);
        }

        animateSakura();
    }

    // ===== Mobile Menu =====
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== Active Nav Highlight =====
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(section => navObserver.observe(section));

    // ===== Navbar Scroll (transparent → solid) =====
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ===== Scroll Reveal with Stagger =====
    const revealGroups = [
        { selector: '.project-card', stagger: true },
        { selector: '.skills-card, .cta-card', stagger: false },
        { selector: '.contact-info-card, .contact-form-card', stagger: false },
        { selector: '.timeline-item', stagger: true },
        { selector: '.section-header', stagger: false },
        { selector: '.hero-text, .hero-image-wrapper', stagger: false },
        { selector: '.about-grid, .about-bottom', stagger: false },
    ];

    const allRevealEls = [];

    revealGroups.forEach(group => {
        const els = document.querySelectorAll(group.selector);
        els.forEach((el, index) => {
            el.classList.add('reveal');
            if (group.stagger) {
                el.classList.add(`stagger-${Math.min(index % 8 + 1, 8)}`);
            }
            allRevealEls.push(el);
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    allRevealEls.forEach(el => revealObserver.observe(el));

    // ===== Skill Bar Animation =====
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                container.querySelectorAll('.skill-fill').forEach(fill => {
                    fill.style.width = fill.getAttribute('data-width');
                });
                container.querySelectorAll('.skill-level').forEach(level => {
                    const target = parseInt(level.getAttribute('data-target'));
                    animateCounter(level, 0, target, 1200);
                });
                skillObserver.unobserve(container);
            }
        });
    }, { threshold: 0.3 });

    const skillsCard = document.querySelector('.skills-card');
    if (skillsCard) skillObserver.observe(skillsCard);

    function animateCounter(el, start, end, duration) {
        const startTime = performance.now();
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (end - start) * eased);
            el.textContent = `Lv. ${current}`;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // ===== Ripple Effect =====
    document.querySelectorAll('.ripple').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            circle.classList.add('ripple-effect');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            circle.style.width = circle.style.height = size + 'px';
            circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
            circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        });
    });

    // ===== Tilt Card Effect =====
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ===== Popup Logic =====
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const closeBtns = document.querySelectorAll('.close-btn');
    const popups = document.querySelectorAll('.popup-overlay');

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const popupId = trigger.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) popup.classList.add('active');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.popup-overlay').classList.remove('active');
        });
    });

    popups.forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) popup.classList.remove('active');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popups.forEach(p => p.classList.remove('active'));
        }
    });

    // ===== Quote Carousel =====
    document.querySelectorAll('.quote-carousel').forEach(carousel => {
        const items = carousel.querySelectorAll('.quote-item');
        if (items.length > 1) {
            let idx = 0;
            setInterval(() => {
                items[idx].classList.remove('active');
                idx = (idx + 1) % items.length;
                items[idx].classList.add('active');
            }, 4000);
        }
    });

    // ===== Project Detail Popup =====
    const detailTriggers = document.querySelectorAll('.detail-trigger');
    const detailPopup = document.getElementById('project-detail-popup');

    if (detailPopup) {
        const detailImage = detailPopup.querySelector('.detail-image');
        const detailTitle = detailPopup.querySelector('.detail-title');
        const detailDesc = detailPopup.querySelector('.detail-description');

        detailTriggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.project-card');
                if (!card) return;
                const img = card.querySelector('.card-image img');
                const title = card.querySelector('.card-body h3');
                const desc = card.querySelector('.card-body p');
                if (img) { detailImage.src = img.src; detailImage.alt = img.alt; }
                if (title) detailTitle.textContent = title.textContent;
                if (desc) detailDesc.textContent = desc.textContent;
                detailPopup.classList.add('active');
            });
        });
    }

    // ===== Project Filter =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            projectCards.forEach((card, i) => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hide');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, i * 60);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => card.classList.add('hide'), 300);
                }
            });
        });
    });

    // ===== Back to Top =====
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== EmailJS Contact Form =====
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const icon = submitBtn.querySelector('.fa-paper-plane');

            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            if (icon) icon.style.display = 'none';
            submitBtn.disabled = true;

            const t = translations[currentLang];

            emailjs.sendForm('service_fgqamy9', 'template_3cxdwx3', contactForm)
                .then(() => {
                    if (formStatus) {
                        formStatus.textContent = t['contact.success'];
                        formStatus.className = 'form-status success';
                    }
                    contactForm.reset();
                })
                .catch(() => {
                    if (formStatus) {
                        formStatus.textContent = t['contact.error'];
                        formStatus.className = 'form-status error';
                    }
                })
                .finally(() => {
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                    if (icon) icon.style.display = 'inline';
                    submitBtn.disabled = false;
                    setTimeout(() => {
                        if (formStatus) {
                            formStatus.textContent = '';
                            formStatus.className = 'form-status';
                        }
                    }, 5000);
                });
        });
    }

    // ===== Parallax on Hero =====
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const heroImg = document.querySelector('.hero-image-wrapper');
                if (heroImg && scrollY < window.innerHeight) {
                    heroImg.style.transform = `translateY(${scrollY * 0.03}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
});
