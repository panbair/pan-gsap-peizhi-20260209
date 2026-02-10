<template>
  <div class="scroll-demo-container">
    <!-- 导航栏 -->
    <nav class="demo-nav">
      <div class="nav-brand">GSAP 滚动动画演示</div>
      <ul class="nav-menu">
        <li><a href="#section1">首页</a></li>
        <li><a href="#section2">特性展示</a></li>
        <li><a href="#section3">产品介绍</a></li>
        <li><a href="#section4">团队展示</a></li>
        <li><a href="#section5">联系信息</a></li>
      </ul>
    </nav>

    <!-- 第一屏：Hero 区域 -->
    <section id="section1" class="section hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">欢迎来到</span>
          <span class="title-line">GSAP 动画世界</span>
        </h1>
        <p class="hero-subtitle">体验流畅的滚动触发动画效果</p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number" data-value="100">0</div>
            <div class="stat-label">动画效果</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-value="50">0</div>
            <div class="stat-label">交互组件</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-value="99">0</div>
            <div class="stat-label">用户满意度</div>
          </div>
        </div>
        <button class="cta-button">开始探索</button>
      </div>
      
      <!-- 装饰元素 -->
      <div class="floating-elements">
        <div class="float-element circle-1"></div>
        <div class="float-element circle-2"></div>
        <div class="float-element shape-1"></div>
        <div class="float-element shape-2"></div>
      </div>
    </section>

    <!-- 第二屏：特性展示 -->
    <section id="section2" class="section features-section">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 class="feature-title">高性能动画</h3>
            <p class="feature-desc">基于 GSAP 引擎，提供流畅的 60fps 动画体验</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="feature-title">响应式设计</h3>
            <p class="feature-desc">适配各种屏幕尺寸，移动端同样出色</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="feature-title">丰富插件</h3>
            <p class="feature-desc">内置 ScrollTrigger、Draggable 等强大插件</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三屏：产品展示 -->
    <section id="section3" class="section products-section">
      <div class="container">
        <h2 class="section-title">精选产品</h2>
        <div class="products-showcase">
          <div class="product-item">
            <div class="product-image">
              <div class="image-placeholder"></div>
            </div>
            <div class="product-info">
              <h3 class="product-name">创新科技产品</h3>
              <p class="product-desc">采用最新技术打造，为用户提供卓越体验</p>
              <div class="product-tags">
                <span class="tag">科技</span>
                <span class="tag">创新</span>
                <span class="tag">未来</span>
              </div>
            </div>
          </div>
          
          <div class="product-item reverse">
            <div class="product-image">
              <div class="image-placeholder"></div>
            </div>
            <div class="product-info">
              <h3 class="product-name">智能解决方案</h3>
              <p class="product-desc">AI 驱动的智能化产品，提升工作效率</p>
              <div class="product-tags">
                <span class="tag">AI</span>
                <span class="tag">智能</span>
                <span class="tag">效率</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四屏：团队展示 -->
    <section id="section4" class="section team-section">
      <div class="container">
        <h2 class="section-title">核心团队</h2>
        <div class="team-members">
          <div class="team-member">
            <div class="member-avatar">
              <div class="avatar-placeholder"></div>
            </div>
            <h3 class="member-name">张伟</h3>
            <p class="member-role">首席技术官</p>
            <p class="member-bio">拥有 10 年前端开发经验，专注于动画技术和用户体验</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">
              <div class="avatar-placeholder"></div>
            </div>
            <h3 class="member-name">李娜</h3>
            <p class="member-role">产品设计师</p>
            <p class="member-bio">资深 UI/UX 设计师，擅长创造直观美观的界面设计</p>
          </div>
          
          <div class="team-member">
            <div class="member-avatar">
              <div class="avatar-placeholder"></div>
            </div>
            <h3 class="member-name">王强</h3>
            <p class="member-role">架构师</p>
            <p class="member-bio">系统架构专家，致力于构建高可用性的技术方案</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 第五屏：联系信息 -->
    <section id="section5" class="section contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2 class="section-title">联系我们</h2>
            <p class="contact-desc">有任何问题或合作意向？随时与我们取得联系</p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4>电话</h4>
                  <p>+86 138 0013 8000</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4>邮箱</h4>
                  <p>contact@example.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4>地址</h4>
                  <p>北京市朝阳区创新大厦</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form">
            <form class="form">
              <div class="form-group">
                <input type="text" placeholder="您的姓名" class="form-input">
              </div>
              <div class="form-group">
                <input type="email" placeholder="邮箱地址" class="form-input">
              </div>
              <div class="form-group">
                <textarea placeholder="留言内容" class="form-textarea"></textarea>
              </div>
              <button type="submit" class="form-submit">发送消息</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 进度指示器 -->
    <div class="scroll-progress">
      <div class="progress-bar"></div>
    </div>

    <!-- 返回顶部按钮 -->
    <button class="back-to-top" @click="scrollToTop">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// 防抖函数
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// 返回顶部
const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: 0, autoKill: false },
    ease: 'power3.inOut'
  })
}

// 数字动画
const animateNumbers = () => {
  const numbers = document.querySelectorAll('.stat-number')
  numbers.forEach(el => {
    const target = parseInt(el.getAttribute('data-value') || '0')
    gsap.fromTo(el, 
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        onUpdate: function() {
          el.textContent = Math.floor(this.targets()[0].textContent as number).toString()
        }
      }
    )
  })
}

// 创建视差滚动效果
const createParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.float-element')
  parallaxElements.forEach((el, index) => {
    gsap.to(el, {
      y: () => -window.innerHeight * 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  })
}

// 创建滚动进度条
const createScrollIndicator = () => {
  gsap.to('.progress-bar', {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.scroll-demo-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3
    }
  })
}

// 创建导航栏固定效果
const createStickyNav = () => {
  ScrollTrigger.create({
    trigger: '.demo-nav',
    start: 'top top',
    end: 'bottom top',
    toggleClass: { targets: '.demo-nav', className: 'scrolled' }
  })
}

// 创建平滑锚点滚动
const createSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      const href = this.getAttribute('href')
      if (href) {
        const target = document.querySelector(href)
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 80 },
            ease: 'power3.inOut'
          })
        }
      }
    })
  })
}

onMounted(() => {
  console.log('组件已挂载，开始初始化滚动动画')
  
  // 检查容器尺寸
  nextTick(() => {
    const container = document.querySelector('.scroll-demo-container')
    console.log('容器元素:', container)
    console.log('容器高度:', container?.offsetHeight)
    console.log('窗口高度:', window.innerHeight)
    console.log('文档高度:', document.documentElement.scrollHeight)
    
    // 初始化所有动画
    
    // 1. Hero 区域动画序列
    gsap.from('.title-line', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.hero-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.hero-subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hero-subtitle',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // 2. 统计数字动画
    animateNumbers()

    // 3. 特性卡片动画
    gsap.from('.feature-card', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // 4. 产品展示动画
    gsap.from('.product-item:not(.reverse) .product-image', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.product-item:not(.reverse)',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.product-item:not(.reverse) .product-info', {
      x: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.product-item:not(.reverse)',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.product-item.reverse .product-image', {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.product-item.reverse',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.product-item.reverse .product-info', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.product-item.reverse',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // 5. 团队成员动画
    gsap.from('.team-member', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.team-members',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // 6. 联系信息动画
    gsap.from('.contact-info', {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.contact-form', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // 7. 装饰元素动画
    gsap.to('.circle-1', {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })

    gsap.to('.circle-2', {
      rotate: -360,
      duration: 25,
      repeat: -1,
      ease: 'none'
    })

    gsap.to('.shape-1', {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    gsap.to('.shape-2', {
      y: -20,
      rotate: 180,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    // 8. 创建各种效果
    createParallaxEffect()
    createScrollIndicator()
    createStickyNav()
    createSmoothScroll()

    // 9. 表单元素动画
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.2,
          ease: 'power2.out'
        })
      })
      
      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        })
      })
    })

    // 10. 按钮悬停效果
    document.querySelectorAll('.cta-button, .form-submit').forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: 'back.out(1.7)'
        })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // 刷新所有 ScrollTrigger
    ScrollTrigger.refresh()
  })
})
</script>

<style scoped lang="scss">
.scroll-demo-container {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}

/* 导航栏样式 */
.demo-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  
  li a {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4f46e5;
    }
  }
}

/* 通用 section 样式 */
.section {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  padding: 100px 5%;
  display: flex;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 700;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  .title-line {
    display: block;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

.cta-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
}

/* 浮动装饰元素 */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.float-element {
  position: absolute;
  border-radius: 50%;
}

.circle-1 {
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  top: 20%;
  left: 10%;
}

.circle-2 {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.15);
  bottom: 20%;
  right: 15%;
}

.shape-1 {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  top: 40%;
  right: 10%;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.shape-2 {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  top: 60%;
  left: 20%;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

/* Features Section */
.features-section {
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-desc {
  color: #666;
  line-height: 1.6;
}

/* Products Section */
.products-section {
  background: white;
}

.products-showcase {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 3rem;
}

.product-item {
  display: flex;
  gap: 3rem;
  align-items: center;
  
  &.reverse {
    flex-direction: row-reverse;
  }
}

.product-image {
  flex: 1;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
}

.product-info {
  flex: 1;
}

.product-name {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.product-desc {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.product-tags {
  display: flex;
  gap: 0.5rem;
  
  .tag {
    background: #e0e7ff;
    color: #4f46e5;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }
}

/* Team Section */
.team-section {
  background: #f8fafc;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.member-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
}

.member-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.member-role {
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-bio {
  color: #666;
  line-height: 1.6;
}

/* Contact Section */
.contact-section {
  background: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-desc {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: #e0e7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: #4f46e5;
  }
}

.contact-item h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.contact-item p {
  margin: 0;
  color: #666;
}

/* 表单样式 */
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  width: 100%;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-submit {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
}

/* 滚动进度条 */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.progress-bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: width 0.1s ease;
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section {
    padding: 80px 5%;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .product-item {
    flex-direction: column !important;
    text-align: center;
  }
  
  .team-members {
    grid-template-columns: 1fr;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .nav-menu {
    display: none;
  }
}
</style>