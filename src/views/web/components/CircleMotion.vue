<template>
  <div class="circle-motion-section">
    <div class="section-header">
      <h2 class="title">CIRCLE MOTION</h2>
      <p class="subtitle">圆形路径动画</p>
    </div>

    <div class="cm-motion-wrapper">
      <svg class="circle-svg" viewBox="0 0 600 600">
        <!-- 圆形路径 -->
        <path id="cm-circlePath" class="cm-circle-path" d="M 300 100 A 200 200 0 1 1 299.9 100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" stroke-dasharray="10,10"/>
        
        <!-- 中心圆 -->
        <circle cx="300" cy="300" r="80" fill="rgba(45, 27, 105, 0.3)" stroke="rgba(45, 27, 105, 0.5)" stroke-width="2"/>
        
        <!-- 中心文字 -->
        <text x="300" y="305" text-anchor="middle" fill="white" font-size="20" font-weight="bold">ROTATE</text>
        
        <!-- 运动卡片 -->
        <foreignObject v-for="(card, index) in cards" :key="index" class="cm-motion-card" :class="`cm-card-${index}`" x="0" y="0" width="140" height="100">
          <div class="cm-card-inner">
            <div class="cm-card-bg" :style="{ backgroundColor: card.color }"></div>
            <div class="cm-card-number">{{ index + 1 }}</div>
          </div>
        </foreignObject>
      </svg>
    </div>

    <div class="cm-motion-controls">
      <button class="cm-control-btn" @click="startRotation">开始旋转</button>
      <button class="cm-control-btn" @click="pauseRotation">暂停</button>
      <button class="cm-control-btn" @click="reverseRotation">反向旋转</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

const cards = ref([
  { color: '#ff6b6b' },
  { color: '#4ecdc4' },
  { color: '#ffe66d' },
  { color: '#95e1d3' },
  { color: '#f38181' },
  { color: '#aa96da' }
])

let ctx: gsap.Context
let rotationTimeline: gsap.core.Timeline | null = null

const startRotation = () => {
  rotationTimeline?.play()
}

const pauseRotation = () => {
  rotationTimeline?.pause()
}

const reverseRotation = () => {
  rotationTimeline?.reverse()
}

const initAnimations = () => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.section-header .title', {
      scrollTrigger: {
        trigger: '.cm-motion-wrapper',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8
    })

    // 副标题动画
    gsap.from('.section-header .subtitle', {
      scrollTrigger: {
        trigger: '.cm-motion-wrapper',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8,
      delay: 0.2
    })

    // 创建圆形运动时间轴 - 使用 MotionPath 插件
    rotationTimeline = gsap.timeline({ paused: true })
    
    cards.value.forEach((_, index) => {
      const cardList = gsap.utils.toArray(`.cm-card-${index}`)
      if (!cardList.length) return
      const card = cardList[0] as HTMLElement

      // 计算每个卡片的起始位置
      const startProgress = index / cards.value.length

      // 使用 MotionPath 沿圆形路径运动
      const tween = gsap.to(card, {
        motionPath: {
          path: '.cm-circle-path',  // 使用选择器引用路径
          align: '.cm-circle-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: startProgress,
          end: startProgress + 1
        },
        duration: 20,
        ease: 'none',
        repeat: -1
      }, 0)
      
      rotationTimeline?.add(tween, 0)
    })

    // 卡片入场
    gsap.from('.cm-card-inner', {
      scrollTrigger: {
        trigger: '.cm-motion-wrapper',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      opacity: 0,
      rotation: -360,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      duration: 0.8
    })

    // 背景渐入
    gsap.from('.cm-card-bg', {
      scrollTrigger: {
        trigger: '.cm-motion-wrapper',
        start: 'top 65%',
        toggleActions: 'play none none reverse'
      },
      scale: 1.5,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2.out',
      duration: 0.6
    })

    // 数字动画
    gsap.from('.cm-card-number', {
      scrollTrigger: {
        trigger: '.cm-motion-wrapper',
        start: 'top 65%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      rotation: -180,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      duration: 0.5
    })

    // 滚动触发旋转
    ScrollTrigger.create({
      trigger: '.cm-motion-wrapper',
      start: 'top center',
      onEnter: () => startRotation(),
      onLeave: () => pauseRotation()
    })

    // 按钮动画
    gsap.from('.cm-control-btn', {
      scrollTrigger: {
        trigger: '.cm-motion-controls',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out',
      duration: 0.6
    })

    // 悬停效果 - 使用gsap.utils.toArray自动清理
    gsap.utils.toArray('.cm-card-inner').forEach((card: Element) => {
      const cardEl = card as HTMLElement
      cardEl.addEventListener('mouseenter', () => {
        gsap.to(cardEl.querySelector('.cm-card-bg'), {
          scale: 1.15,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(cardEl.querySelector('.cm-card-number'), {
          scale: 1.3,
          rotation: 45,
          duration: 0.3,
          ease: 'back.out(1.7)'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.cm-card-bg'), {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(card.querySelector('.cm-card-number'), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
  })
}

onMounted(() => {
  initAnimations()
})

onUnmounted(() => {
  ctx?.revert()
  rotationTimeline?.kill()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.circle-motion-section {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%);
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 56px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(65, 90, 119, 0.5);
}

.subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.cm-motion-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.circle-svg {
  width: 600px;
  height: 600px;
}

.cm-circle-path {
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.cm-card-inner {
  width: 140px;
  height: 100px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: box-shadow 0.4s ease;
}

.cm-card-inner:hover {
  box-shadow: 0 20px 60px rgba(65, 90, 119, 0.5);
}

.cm-card-bg {
  width: 100%;
  height: 100%;
  transition: transform 0.4s ease;
}

.cm-card-number {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
}

.cm-motion-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.cm-control-btn {
  padding: 16px 40px;
  background: linear-gradient(135deg, #415a77 0%, #778da9 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 10px 30px rgba(65, 90, 119, 0.3);
}

.cm-control-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(65, 90, 119, 0.4);
}

@media (max-width: 768px) {
  .title {
    font-size: 32px;
    letter-spacing: 3px;
  }

  .subtitle {
    font-size: 14px;
  }

  .circle-svg {
    width: 400px;
    height: 400px;
  }

  .card-inner {
    width: 100px;
    height: 70px;
  }
}
</style>
