@echo off
echo ========================================
echo    Hakuto作品集网站部署脚本
echo ========================================
echo.

echo 步骤1: 初始化Git仓库
git init
echo.

echo 步骤2: 添加所有文件到暂存区
git add .
echo.

echo 步骤3: 提交更改
git commit -m "部署Hakuto作品集网站"
echo.

echo ========================================
echo 接下来请手动执行以下步骤：
echo.
echo 1. 在GitHub上创建新仓库（推荐）
echo    或使用现有仓库

echo 2. 添加远程仓库地址：
echo    git remote add origin https://github.com/你的用户名/仓库名.git

echo 3. 推送代码到GitHub：
echo    git push -u origin main

echo.
echo 4. 在GitHub仓库设置中启用GitHub Pages：
echo    - 进入 Settings > Pages
echo    - Source 选择 "GitHub Actions"
echo.
echo 5. 访问您的网站：
echo    https://你的用户名.github.io/仓库名
echo ========================================
echo.
pause