// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面已加载完成');
    
    // 获取"了解更多"按钮元素
    const learnMoreButton = document.getElementById('learn-more');
    
    // 为按钮添加点击事件监听器
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            alert('感谢您的兴趣！这是一个示例Web项目。');
        });
    }
    
    // 添加页面滚动效果
    function addSmoothScrolling() {
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 这里可以添加滚动到特定部分的代码
                console.log('导航链接被点击:', this.textContent);
                
                // 示例：改变页面标题
                document.querySelector('header h1').textContent = '您点击了: ' + this.textContent;
                
                // 2秒后恢复原标题
                setTimeout(() => {
                    document.querySelector('header h1').textContent = '欢迎来到我的Web项目';
                }, 2000);
            });
        });
    }
    
    // 调用函数添加滚动效果
    addSmoothScrolling();
    
    // 添加简单的动画效果
    function addAnimationEffects() {
        const features = document.querySelectorAll('.feature');
        
        features.forEach(feature => {
            feature.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            feature.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // 调用函数添加动画效果
    addAnimationEffects();
});