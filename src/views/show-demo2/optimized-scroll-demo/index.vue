<template>
  <div class="optimized-scroll-container">
    <!-- 控制面板 -->
    <div class="control-panel">
      <h3>🚀 滚动模式选择</h3>
      <div class="mode-buttons">
        <button 
          :class="{ active: currentMode === 'vertical' }"
          @click="switchMode('vertical')"
        >
          垂直滚动
        </button>
        <button 
          :class="{ active: currentMode === 'horizontal' }"
          @click="switchMode('horizontal')"
        >
          横向滚动
        </button>
        <button 
          :class="{ active: currentMode === 'infinite' }"
          @click="switchMode('infinite')"
        >
          无限滚动
        </button>
        <button 
          :class="{ active: currentMode === 'scale' }"
          @click="switchMode('scale')"
        >
          缩放滚动
        </button>
      </div>
      <div class="controls">
        <button @click="resetAllAnimations">重置动画</button>
        <button @click="toggleMarkers">调试标记</button>
      </div>
    </div>

    <!-- 垂直滚动模式 -->
    <div v-if="currentMode === 'vertical'" class="scroll-mode vertical-mode">
      <section class="section hero-section" id="vertical-hero">
        <div class="content">
          <h1 class="title">垂直滚动演示</h1>
          <p class="subtitle">经典的上下滚动体验</p>
          <div class="stats">
            <div class="stat-item" data-value="100">
              <span class="number">0</span>
              <span class="label">项目</span>
            </div>
            <div class="stat-item" data-value="50">
              <span class="number">0</span>
              <span class="label">客户</span>
            </div>
            <div class="stat-item" data-value="99">
              <span class="number">0</span>
              <span class="label">满意度</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section features-section" id="vertical-features">
        <div class="container">
          <h2 class="section-title">核心特性</h2>
          <div class="features-grid">
            <div class="feature-card" v-for="i in 3" :key="i">
              <div class="feature-icon">🌟</div>
              <h3>特性 {{ i }}</h3>
              <p>这是第 {{ i }} 个特性的详细描述内容</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section team-section" id="vertical-team">
        <div class="container">
          <h2 class="section-title">团队成员</h2>
          <div class="team-grid">
            <div class="team-member" v-for="i in 4" :key="i">
              <div class="avatar">👤</div>
              <h3>成员 {{ i }}</h3>
              <p>职位描述 {{ i }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 横向滚动模式 -->
    <div v-if="currentMode === 'horizontal'" class="scroll-mode horizontal-mode">
      <div class="horizontal-container" ref="horizontalContainer">
        <div class="panel hero-panel">
          <div class="content">
            <h1>横向滚动</h1>
            <p>左右滑动的创新体验</p>
          </div>
        </div>
        <div class="panel features-panel">
          <div class="content">
            <h2>特色功能</h2>
            <div class="feature-list">
              <div class="feature-item" v-for="i in 4" :key="i">
                功能 {{ i }}
              </div>
            </div>
          </div>
        </div>
        <div class="panel contact-panel">
          <div class="content">
            <h2>联系我们</h2>
            <p>获取更多信息</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 无限滚动模式 -->
    <div v-if="currentMode === 'infinite'" class="scroll-mode infinite-mode">
      <div class="infinite-container">
        <div 
          class="infinite-panel" 
          v-for="(panel, index) in infinitePanels" 
          :key="index"
          :class="`panel-${index + 1}`"
        >
          <div class="content">
            <h2>{{ panel.title }}</h2>
            <p>{{ panel.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 缩放滚动模式 -->
    <div v-if="currentMode === 'scale'" class="scroll-mode scale-mode">
      <div class="scale-container" ref="scaleContainer">
        <div class="scale-panel main-panel">
          <div class="content">
            <h1>缩放滚动</h1>
            <p>视觉冲击力强的滚动效果</p>
          </div>
        </div>
        <div class="scale-panel feature-panel">
          <div class="content">
            <h2>特性展示</h2>
          </div>
        </div>
        <div class="scale-panel team-panel">
          <div class="content">
            <h2>团队介绍</h2>
          </div>
        </div>
        <div class="scale-panel contact-panel">
          <div class="content">
            <h2>联系方式</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- 进度指示器 -->
    <div class="progress-indicator">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// 响应式数据
const currentMode = ref('vertical')
const progress = ref(0)
const horizontalContainer = ref<HTMLElement | null>(null)
const scaleContainer = ref<HTMLElement | null>(null)

// 无限滚动面板数据
const infinitePanels = ref([
  { title: '首页', content: '欢迎来到我们的网站' },
  { title: '关于', content: '了解我们的故事' },
  { title: '服务', content: '我们的专业服务' },
  { title: '作品', content: '精彩案例展示' },
  { title: '联系', content: '随时与我们联系' }
])

// 动画管理器
class AnimationManager {
  private instances: Map<string, any> = new Map()
  private scrollTriggers: Map<string, any> = new Map()

  add(key: string, animation: any, type: string = 'animation') {
    if (type === 'animation') {
      this.instances.set(key, animation)
    } else if (type === 'scrollTrigger') {
      this.scrollTriggers.set(key, animation)
    }
  }

  kill(key: string, type: string = 'animation') {
    const instance = type === 'animation' 
      ? this.instances.get(key) 
      : this.scrollTriggers.get(key)
    
    if (instance) {
      if (instance.kill) instance.kill()
      if (instance.scrollTrigger?.kill) instance.scrollTrigger.kill()
      type === 'animation' 
        ? this.instances.delete(key) 
        : this.scrollTriggers.delete(key)
    }
  }

  killAll() {
    this.instances.forEach(anim => anim?.kill?.())
    this.scrollTriggers.forEach(st => st?.kill?.())
    this.instances.clear()
    this.scrollTriggers.clear()
  }
}

const animationManager = new AnimationManager()

// 防抖函数
const createDebouncedFn = (fn: Function, delay: number, key: string) => {
  const timers = new Map<string, NodeJS.Timeout>()
  
  return (...args: any[]) => {
    if (timers.has(key)) {
      clearTimeout(timers.get(key))
    }
    timers.set(key, setTimeout(() => {
      fn(...args)
      timers.delete(key)
    }, delay))
  }
}

// 模式切换
const switchMode = (mode: string) => {
  // 清理当前动画
  cleanupCurrentMode()
  
  // 切换模式
  currentMode.value = mode
  
  // 延迟初始化新动画
  nextTick(() => {
    setTimeout(() => {
      initializeMode(mode)
    }, 100)
  })
}

// 清理当前模式
const cleanupCurrentMode = () => {
  animationManager.killAll()
  ScrollTrigger.getAll().forEach(st => st.kill())
  
  // 清理特定样式
  document.querySelectorAll('[data-animated]').forEach(el => {
    el.removeAttribute('data-animated')
    ;(el as HTMLElement).style.cssText = ''
  })
}

// 初始化指定模式
const initializeMode = (mode: string) => {
  switch (mode) {
    case 'vertical':
      initVerticalMode()
      break
    case 'horizontal':
      initHorizontalMode()
      break
    case 'infinite':
      initInfiniteMode()
      break
    case 'scale':
      initScaleMode()
      break
  }
  ScrollTrigger.refresh()
}

// 垂直滚动模式初始化
const initVerticalMode = () => {
  console.log('初始化垂直滚动模式')
  
  // 英雄区域动画
  gsap.from('.title', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#vertical-hero',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  gsap.from('.subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    scrollTrigger: {
      trigger: '#vertical-hero',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // 数字动画
  document.querySelectorAll('.stat-item').forEach(el => {
    const target = parseInt(el.getAttribute('data-value') || '0')
    gsap.fromTo(el.querySelector('.number'),
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
          const numEl = el.querySelector('.number')
          if (numEl) {
            numEl.textContent = Math.floor(this.targets()[0].textContent as number).toString()
          }
        }
      }
    )
  })

  // 特性卡片动画
  gsap.from('.feature-card', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '#vertical-features',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // 团队成员动画
  gsap.from('.team-member', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '#vertical-team',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
}

// 横向滚动模式初始化
const initHorizontalMode = () => {
  console.log('初始化横向滚动模式')
  
  if (!horizontalContainer.value) return

  const panels = horizontalContainer.value.querySelectorAll('.panel')
  if (panels.length <= 1) return

  const tween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: horizontalContainer.value,
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (panels.length - 1),
        inertia: false,
        duration: { min: 0.5, max: 0.8 }
      },
      end: () => '+=' + (horizontalContainer.value!.offsetWidth - window.innerWidth)
    }
  })

  animationManager.add('horizontal-scroll', tween)
}

// 无限滚动模式初始化
const initInfiniteMode = () => {
  console.log('初始化无限滚动模式')
  
  const panels = gsap.utils.toArray('.infinite-panel') as HTMLElement[]
  if (panels.length <= 1) return

  // 克隆第一个面板实现无限效果
  const clonedPanel = panels[0].cloneNode(true) as HTMLElement
  clonedPanel.setAttribute('data-cloned', 'true')
  panels[0].parentNode?.appendChild(clonedPanel)

  // 为每个面板创建固定效果
  panels.forEach((panel, index) => {
    const trigger = ScrollTrigger.create({
      trigger: panel,
      start: 'top top',
      pin: true,
      pinSpacing: false
    })
    animationManager.add(`infinite-panel-${index}`, trigger, 'scrollTrigger')
  })

  // 创建页面级snap效果
  const pageTrigger = ScrollTrigger.create({
    snap: (value: number) => {
      const snappedValue = gsap.utils.snap(1 / panels.length, value)
      return snappedValue
    }
  })
  animationManager.add('infinite-page', pageTrigger, 'scrollTrigger')
}

// 缩放滚动模式初始化
const initScaleMode = () => {
  console.log('初始化缩放滚动模式')
  
  if (!scaleContainer.value) return

  const panels = scaleContainer.value.querySelectorAll('.scale-panel')
  if (panels.length <= 1) return

  const tl = gsap.timeline()

  // 为后续面板添加缩放动画
  const animatedPanels = Array.from(panels).slice(1)
  animatedPanels.forEach((panel, index) => {
    const props = {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      force3D: true
    } as any

    if (index % 2 === 0) {
      props.xPercent = 100
    } else {
      props.yPercent = 100
    }

    tl.from(panel, props)
  })

  const scrollTrigger = ScrollTrigger.create({
    trigger: scaleContainer.value,
    start: 'top top',
    end: '+=' + window.innerWidth,
    scrub: 0.5,
    pin: true,
    anticipatePin: 1,
    animation: tl
  })

  animationManager.add('scale-animation', scrollTrigger, 'scrollTrigger')
}

// 重置所有动画
const resetAllAnimations = () => {
  cleanupCurrentMode()
  progress.value = 0
  console.log('所有动画已重置')
}

// 切换调试标记
const toggleMarkers = () => {
  const triggers = ScrollTrigger.getAll()
  triggers.forEach(st => {
    if (st.vars.markers) {
      st.removeMarkers()
    } else {
      st.addMarkers()
    }
  })
}

// 滚动进度监控
const setupProgressTracking = () => {
  ScrollTrigger.create({
    trigger: '.optimized-scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      progress.value = Math.round(self.progress * 100)
    }
  })
}

// 组件生命周期
onMounted(() => {
  console.log('优化滚动演示组件已挂载')
  nextTick(() => {
    initializeMode(currentMode.value)
    setupProgressTracking()
  })
})

onBeforeUnmount(() => {
  cleanupCurrentMode()
})
</script>

<style scoped lang="scss">
.optimized-scroll-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* 控制面板 */
.control-panel {
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 200px;

  h3 {
    margin: 0 0 15px 0;
    color: #333;
    font-size: 1.1rem;
  }

  .mode-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;

    button {
      padding: 8px 12px;
      border: 2px solid #e2e8f0;
      background: white;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;

      &:hover {
        border-color: #4f46e5;
        color: #4f46e5;
      }

      &.active {
        background: #4f46e5;
        color: white;
        border-color: #4f46e5;
      }
    }
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      padding: 8px 12px;
      background: #64748b;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s ease;

      &:hover {
        background: #475569;
      }
    }
  }
}

/* 滚动模式容器 */
.scroll-mode {
  width: 100%;
  min-height: 100vh;
}

/* 垂直模式样式 */
.vertical-mode {
  .section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 100px 5%;
  }

  .hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;

    .title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1.5rem;
      margin-bottom: 3rem;
      opacity: 0.9;
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 3rem;

      .stat-item {
        text-align: center;

        .number {
          font-size: 2.5rem;
          font-weight: bold;
          display: block;
        }

        .label {
          font-size: 1rem;
          opacity: 0.8;
        }
      }
    }
  }

  .features-section {
    background: #f8fafc;

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #333;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        text-align: center;

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 1rem;
          color: #333;
        }

        p {
          color: #666;
        }
      }
    }
  }

  .team-section {
    background: white;

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;

      .team-member {
        text-align: center;
        padding: 2rem;
        background: #f8fafc;
        border-radius: 15px;

        .avatar {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        h3 {
          margin-bottom: 0.5rem;
          color: #333;
        }

        p {
          color: #666;
        }
      }
    }
  }
}

/* 横向模式样式 */
.horizontal-mode {
  .horizontal-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .panel {
    width: 100vw;
    height: 100vh;
    display: inline-block;
    vertical-align: top;
    position: relative;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      text-align: center;
    }
  }

  .hero-panel {
    background: linear-gradient(135deg, #667eea, #764ba2);
  }

  .features-panel {
    background: linear-gradient(135deg, #f093fb, #f5576c);

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;

      .feature-item {
        padding: 1rem 2rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        backdrop-filter: blur(10px);
      }
    }
  }

  .contact-panel {
    background: linear-gradient(135deg, #43e97b, #38f9d7);
  }
}

/* 无限模式样式 */
.infinite-mode {
  .infinite-container {
    width: 100%;
    min-height: 100vh;
  }

  .infinite-panel {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    text-align: center;

    .content {
      h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }

  .panel-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
  .panel-2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
  .panel-3 { background: linear-gradient(135deg, #4facfe, #00f2fe); }
  .panel-4 { background: linear-gradient(135deg, #43e97b, #38f9d7); }
  .panel-5 { background: linear-gradient(135deg, #fa709a, #fee140); }
}

/* 缩放模式样式 */
.scale-mode {
  .scale-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .scale-panel {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;

    .content {
      text-align: center;

      h1, h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
    }
  }

  .main-panel {
    background: linear-gradient(135deg, #667eea, #764ba2);
    z-index: 4;
  }

  .feature-panel {
    background: linear-gradient(135deg, #f093fb, #f5576c);
    z-index: 3;
  }

  .team-panel {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    z-index: 2;
  }

  .contact-panel {
    background: linear-gradient(135deg, #43e97b, #38f9d7);
    z-index: 1;
  }
}

/* 进度指示器 */
.progress-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1001;

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    transition: width 0.1s ease;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .control-panel {
    left: 10px;
    top: 10px;
    padding: 15px;
    min-width: 150px;

    .mode-buttons button {
      font-size: 0.8rem;
      padding: 6px 10px;
    }
  }

  .vertical-mode {
    .hero-section .title {
      font-size: 2rem;
    }

    .hero-section .subtitle {
      font-size: 1.2rem;
    }

    .hero-section .stats {
      flex-direction: column;
      gap: 1.5rem;
    }

    .section-title {
      font-size: 2rem !important;
    }

    .features-grid,
    .team-grid {
      grid-template-columns: 1fr;
    }
  }

  .scale-mode .scale-panel .content h1,
  .scale-mode .scale-panel .content h2 {
    font-size: 2rem;
  }
}
</style>