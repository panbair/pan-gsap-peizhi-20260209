<template>
  <section ref="ballSection" class="bb-section bb-ball-section">
    <div class="bb-header">
      <h2 class="bb-section-title">弹性球动画</h2>
      <p class="bb-subtitle">Physics-based Bouncing Balls</p>
    </div>

    <div class="bb-ball-container" ref="ballContainer">
      <!-- 轨道网格 -->
      <div class="bb-track-grid">
        <div v-for="i in 5" :key="i" class="bb-track-line" :style="{ left: `${i * 20}%` }"></div>
      </div>

      <!-- 地面 -->
      <div class="bb-ground">
        <div class="bb-ground-line"></div>
        <div class="bb-ground-glow"></div>
      </div>

      <!-- 弹性球 -->
      <div class="bb-balls-wrapper">
        <div
          v-for="(ball, index) in balls"
          :key="index"
          class="bb-ball"
          :class="`bb-ball-${index + 1}`"
          :style="{
            '--ball-color': ball.color,
            '--ball-size': ball.size + 'px',
            '--ball-index': index
          }"
        >
          <div class="bb-ball-inner">
            <div class="bb-ball-highlight"></div>
            <div class="bb-ball-shadow"></div>
          </div>
        </div>
      </div>

      <!-- 球体阴影 -->
      <div class="bb-shadows-wrapper">
        <div
          v-for="(ball, index) in balls"
          :key="`shadow-${index}`"
          class="bb-shadow"
          :style="{
            '--shadow-color': ball.color,
            '--shadow-size': ball.size + 'px',
            '--shadow-index': index
          }"
        ></div>
      </div>

      <!-- 装饰粒子 -->
      <div class="bb-particles" ref="particles">
        <div v-for="i in 30" :key="i" class="bb-particle" :style="getParticleStyle(i)"></div>
      </div>

      <!-- 能量条 -->
      <div class="bb-energy-bars">
        <div v-for="i in 5" :key="i" class="bb-energy-bar" :style="{ '--delay': i * 0.1 + 's' }">
          <div class="bb-bar-fill"></div>
        </div>
      </div>
    </div>

    <!-- 信息面板 -->
    <div class="bb-info-panel" ref="infoPanel">
      <div class="bb-info-card">
        <div class="bb-info-icon">⚡</div>
        <div class="bb-info-text">
          <div class="bb-info-value">物理引擎</div>
          <div class="bb-info-desc">真实重力模拟</div>
        </div>
      </div>
      <div class="bb-info-card">
        <div class="bb-info-icon">🎯</div>
        <div class="bb-info-text">
          <div class="bb-info-value">5 个球体</div>
          <div class="bb-info-desc">同步弹跳效果</div>
        </div>
      </div>
      <div class="bb-info-card">
        <div class="bb-info-icon">✨</div>
        <div class="bb-info-text">
          <div class="bb-info-value">60 FPS</div>
          <div class="bb-info-desc">流畅动画体验</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ballSection = ref<HTMLElement>()
const ballContainer = ref<HTMLElement>()
const particles = ref<HTMLElement>()
const infoPanel = ref<HTMLElement>()

const balls = [
  { color: '#ff6b6b', size: 50 },
  { color: '#4ecdc4', size: 60 },
  { color: '#ffe66d', size: 70 },
  { color: '#95e1d3', size: 55 },
  { color: '#f38181', size: 65 }
]

const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const top = Math.random() * 100
  const delay = Math.random() * 2
  const duration = Math.random() * 2 + 1

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
  }, 100)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  gsap.killTweensOf('*')
})

const initAnimations = () => {
  if (!ballSection.value) return

  // 球体弹跳动画
  gsap.utils.toArray<HTMLElement>('.bb-ball').forEach((ball, index) => {
    const bounceHeight = 250 - index * 30
    const duration = 0.8 + index * 0.1

    gsap.to(ball, {
      y: -bounceHeight,
      duration: duration,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: ballSection.value,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const shadowIndex = index
          const shadow = document.querySelectorAll('.bb-shadow')[shadowIndex] as HTMLElement

          if (shadow) {
            const scale = 1 - (progress * 0.7)
            const opacity = 0.8 - (progress * 0.6)
            gsap.set(shadow, {
              scale: scale,
              opacity: opacity
            })
          }
        }
      }
    })
  })

  // 球体挤压效果
  gsap.utils.toArray<HTMLElement>('.bb-ball').forEach((ball) => {
    gsap.to(ball, {
      scaleX: 1.2,
      scaleY: 0.8,
      duration: 0.1,
      repeat: 1,
      yoyo: true,
      scrollTrigger: {
        trigger: ballSection.value,
        start: 'top 30%',
        end: 'top 28%',
        scrub: true
      }
    })
  })

  // 粒子漂浮动画
  gsap.utils.toArray<HTMLElement>('.bb-particle').forEach((particle, i) => {
    gsap.to(particle, {
      y: -50 - Math.random() * 100,
      x: (Math.random() - 0.5) * 100,
      opacity: 0,
      duration: 3 + Math.random() * 2,
      ease: 'power2.out',
      repeat: -1,
      delay: i * 0.05
    })
  })

  // 能量条动画
  gsap.utils.toArray<HTMLElement>('.bb-bar-fill').forEach((bar, i) => {
    gsap.to(bar, {
      width: '100%',
      duration: 1 + i * 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: infoPanel.value,
        start: 'top 80%'
      }
    })
  })

  // 信息卡片入场
  gsap.from('.bb-info-card', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: infoPanel.value,
      start: 'top 85%'
    }
  })

  // 轨道线出现
  gsap.from('.bb-track-line', {
    scaleY: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: ballSection.value,
      start: 'top 75%'
    }
  })

  // 地面光晕脉冲
  gsap.to('.bb-ground-glow', {
    opacity: 0.6,
    scale: 1.1,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
}
</script>

<style scoped lang="scss">
.bb-section {
  min-height: 100vh;
  padding: 80px 20px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%);
  overflow: hidden;
}

.bb-header {
  text-align: center;
  margin-bottom: 60px;
  z-index: 10;
}

.bb-section-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #ffe66d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
}

.bb-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.bb-ball-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 60px;
}

// 轨道网格
.bb-track-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bb-track-line {
  position: absolute;
  bottom: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent);
}

// 地面
.bb-ground {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.bb-ground-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.bb-ground-glow {
  position: absolute;
  bottom: -20px;
  width: 80%;
  height: 40px;
  background: radial-gradient(ellipse, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  filter: blur(20px);
  opacity: 0.4;
}

// 球体容器
.bb-balls-wrapper {
  position: absolute;
  bottom: 100px;
  display: flex;
  gap: 40px;
  z-index: 5;
}

.bb-ball {
  position: relative;
  width: var(--ball-size);
  height: var(--ball-size);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.bb-ball-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, var(--ball-color) 50%, rgba(0, 0, 0, 0.3) 100%);
  border-radius: 50%;
  box-shadow:
    0 0 30px var(--ball-color),
    0 0 60px var(--ball-color),
    inset 0 -10px 20px rgba(0, 0, 0, 0.3);
  animation: ballGlow 2s ease-in-out infinite;
}

.bb-ball-highlight {
  position: absolute;
  top: 15%;
  left: 20%;
  width: 30%;
  height: 20%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%);
  border-radius: 50%;
}

.bb-ball-shadow {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 20%;
  background: radial-gradient(ellipse, rgba(0, 0, 0, 0.4) 0%, transparent 70%);
  filter: blur(5px);
}

@keyframes ballGlow {
  0%, 100% {
    box-shadow:
      0 0 30px var(--ball-color),
      0 0 60px var(--ball-color),
      inset 0 -10px 20px rgba(0, 0, 0, 0.3);
  }
  50% {
    box-shadow:
      0 0 40px var(--ball-color),
      0 0 80px var(--ball-color),
      inset 0 -10px 20px rgba(0, 0, 0, 0.3);
  }
}

// 阴影容器
.bb-shadows-wrapper {
  position: absolute;
  bottom: 95px;
  display: flex;
  gap: 40px;
  z-index: 3;
}

.bb-shadow {
  width: var(--shadow-size);
  height: calc(var(--shadow-size) * 0.3);
  background: radial-gradient(ellipse, var(--shadow-color) 0%, transparent 70%);
  filter: blur(8px);
  opacity: 0.8;
  transform-origin: center;
}

// 粒子
.bb-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bb-particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: floatParticle infinite ease-in-out;
}

@keyframes floatParticle {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

// 能量条
.bb-energy-bars {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bb-energy-bar {
  width: 120px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.bb-bar-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  border-radius: 3px;
}

// 信息面板
.bb-info-panel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 900px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.bb-info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
}

.bb-info-icon {
  font-size: 2.5rem;
}

.bb-info-text {
  flex: 1;
}

.bb-info-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4px;
}

.bb-info-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 1024px) {
  .bb-balls-wrapper {
    gap: 30px;
  }

  .bb-shadows-wrapper {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .bb-section-title {
    font-size: 2rem;
  }

  .bb-ball-container {
    height: 400px;
  }

  .bb-balls-wrapper {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .bb-shadows-wrapper {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .bb-info-panel {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 25px;
  }

  .bb-energy-bars {
    top: 10px;
    right: 10px;
  }

  .bb-energy-bar {
    width: 80px;
  }
}
</style>
