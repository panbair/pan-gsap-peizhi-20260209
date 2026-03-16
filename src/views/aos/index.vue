<template>
  <div ref="containerRef" class="home-container">
    <div class="scroll-counter" aria-label="Scroll position">Scroll: {{ scrollY }}px</div>
    <div class="header-section">
      <h1 class="title">🎨 GSAP 滚动动画库 (119+ 特效)</h1>
      <p class="subtitle">滚动页面查看动画效果，每张卡片展示一种不同的 GSAP 动画</p>
    </div>
    <div class="aos-all">
      <div
        v-for="item in animationItems"
        :key="item.id"
        ref="aosItemRefs"
        class="aos-item"
        :aria-label="item.label + ' animation'"
      >
        <div class="aos-content">
          <div class="card-icon">✨</div>
          <div class="card-text">{{ item.label }}</div>
          <div class="card-type">{{ item.type }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { config } from '../page2/animation/config'
import { animationOptions } from '../page2/animationOptions'

gsap.registerPlugin(ScrollTrigger)

// 类型定义
interface GSAPAnimationConfig {
  type: 'timeline' | 'fromTo' | 'to'
  animations: gsap.TweenVars[]
}

interface AnimationItem {
  id: number
  label: string
  type: string
  animationKey: string
  delay: number
  duration: number
  offset: number
}

// 常量配置
const CONFIG = {
  DEFAULT_OFFSET: 100,
  DEFAULT_DURATION: 0.8,
  DEFAULT_DELAY: 0
} as const

// Anchor Placement 映射表
const getAnchorPlacement = (offset: number, placement: string): string => {
  const map = {
    'top-bottom': `top bottom-${offset}`,
    'top-center': `top center-${offset}`,
    'top-top': `top top-${offset}`,
    'center-bottom': `center bottom-${offset}`,
    'center-center': `center center-${offset}`,
    'center-top': `center top-${offset}`,
    'bottom-bottom': `bottom bottom-${offset}`,
    'bottom-center': `bottom center-${offset}`,
    'bottom-top': `bottom top-${offset}`
  } as const
  return map[placement as keyof typeof map] || map['top-bottom']
}



// 响应式状态
const containerRef = ref<HTMLElement | null>(null)
const scrollY = ref(0)
const scrollTriggers = ref<ScrollTrigger[]>([])
const aosItemRefs = ref<HTMLElement[]>([])

// 生成动画项数据 - 整合 page2 的 119 个动画
const animationItems = computed<AnimationItem[]>(() => {
  const items: AnimationItem[] = []
  let id = 1

  animationOptions.forEach((group) => {
    group.options.forEach((option) => {
      items.push({
        id: id++,
        label: option.label,
        type: group.label,
        animationKey: option.value,
        delay: CONFIG.DEFAULT_DELAY,
        duration: CONFIG.DEFAULT_DURATION,
        offset: CONFIG.DEFAULT_OFFSET
      })
    })
  })

  return items
})

// 获取动画配置
const getAnimationConfig = (key: string): GSAPAnimationConfig | null => {
  return config[key as keyof typeof config] || null
}



// 创建单个元素的滚动动画
const createElementAnimation = (element: HTMLElement, item: AnimationItem): ScrollTrigger | null => {
  const animConfig = getAnimationConfig(item.animationKey)
  if (!animConfig) return null

  // 过滤掉无效的 CSS 属性（如 timeScale）
  const filterAnimationProps = (props: gsap.TweenVars): gsap.TweenVars => {
    const filtered: gsap.TweenVars = {}
    const invalidProps = ['timeScale', 'globalTimeline']

    for (const [key, value] of Object.entries(props)) {
      if (!invalidProps.includes(key)) {
        filtered[key] = value
      }
    }

    return filtered
  }

  // 先设置初始状态（如果是 fromTo 类型，使用 from 状态）
  const setInitialState = () => {
    if (animConfig.type === 'fromTo') {
      gsap.set(element, filterAnimationProps(animConfig.animations[0]))
    } else if (animConfig.type === 'timeline') {
      gsap.set(element, {
        opacity: 0,
        scale: 0.8
      })
    }
  }

  // 执行动画
  const playAnimation = () => {
    if (animConfig.type === 'timeline') {
      const tl = gsap.timeline()
      animConfig.animations.forEach((anim) => {
        tl.to(element, filterAnimationProps(anim))
      })
    } else if (animConfig.type === 'fromTo') {
      gsap.fromTo(
        element,
        filterAnimationProps(animConfig.animations[0]),
        filterAnimationProps(animConfig.animations[1])
      )
    } else if (animConfig.type === 'to') {
      gsap.to(element, filterAnimationProps(animConfig.animations[0]))
    }
  }

  const trigger = ScrollTrigger.create({
    trigger: element,
    start: 'top bottom-=100',
    end: 'bottom top',
    toggleActions: 'play reverse play reverse',
    onEnter: () => {
      playAnimation()
    },
    onLeave: () => {
      setInitialState()
    },
    onEnterBack: () => {
      playAnimation()
    },
    onLeaveBack: () => {
      setInitialState()
    }
  })

  // 检查元素是否已经在视口内
  const checkViewport = () => {
    const rect = element.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight - 100 && rect.bottom > 0

    if (isInViewport) {
      setInitialState()
      playAnimation()
    } else {
      setInitialState()
    }
  }

  checkViewport()

  return trigger
}

// 初始化所有动画
const initAllAnimations = (): void => {
  if (!aosItemRefs.value.length) return

  aosItemRefs.value.forEach((element, index) => {
    if (element && animationItems.value[index]) {
      const trigger = createElementAnimation(element, animationItems.value[index])
      if (trigger) {
        scrollTriggers.value.push(trigger)
      }
    }
  })
}

// 清理所有动画
const cleanupAllAnimations = (): void => {
  scrollTriggers.value.forEach((trigger) => trigger.kill())
  scrollTriggers.value = []
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}

// 刷新动画
const refreshAnimations = (): void => {
  ScrollTrigger.refresh()
}

// 重新初始化动画
const reinitializeAnimations = async (): Promise<void> => {
  cleanupAllAnimations()
  await nextTick()
  initAllAnimations()
}

// 事件处理函数
const handleScroll = (): void => {
  scrollY.value = window.scrollY
}

const handleResize = (): void => {
  refreshAnimations()
}

// 生命周期钩子
onMounted(async () => {
  await nextTick()
  initAllAnimations()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  cleanupAllAnimations()
})

// 监听 refs 变化重新初始化动画
watch(aosItemRefs, () => {
  reinitializeAnimations()
})
</script>

<style scoped>
.home-container {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-bottom: 100px;
}

.header-section {
  text-align: center;
  padding: 50px 20px 30px;
  color: white;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  letter-spacing: 0.5px;
}

.scroll-counter {
  position: fixed;
  right: 0;
  top: 0;
  padding: 15px 25px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  z-index: 1000;
  border-bottom-left-radius: 10px;
  backdrop-filter: blur(10px);
}

.aos-all {
  width: 1400px;
  max-width: 98%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}

.aos-item {
  width: 800px;
  height: 200px;
  padding: 16px;
  perspective: 1000px;
  backface-visibility: hidden;
}

.aos-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1da4e2 0%, #0d6e99 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  overflow: hidden;
  will-change: transform, opacity;
  transition: box-shadow 0.3s ease;
}

.aos-content:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.aos-content::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.aos-content:hover::before {
  left: 100%;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.card-text {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  padding: 0 10px;
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-type {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  letter-spacing: 0.5px;
}

@media (min-width: 480px) {
  .aos-all {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .aos-all {
    grid-template-columns: repeat(3, 1fr);
  }

  .title {
    font-size: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .aos-all {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1400px) {
  .aos-all {
    grid-template-columns: repeat(5, 1fr);
  }

  .aos-item {
    height: 300px;
  }
}
</style>
