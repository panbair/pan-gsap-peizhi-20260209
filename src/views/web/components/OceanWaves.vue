<template>
  <section class="ow-ocean-section">
    <div class="ow-content">
      <h2 class="ow-section-title">海洋波浪</h2>
      <p class="ow-subtitle">深海的神秘韵律</p>

      <div class="ow-ocean-container" ref="oceanContainer">
        <div class="ow-ocean-surface">
          <div class="ow-wave ow-wave-1" ref="wave1">
            <div class="ow-wave-segment" v-for="n in 40" :key="n"
                 :style="getWaveSegmentStyle(n, 1)"></div>
          </div>
          <div class="ow-wave ow-wave-2" ref="wave2">
            <div class="ow-wave-segment" v-for="n in 40" :key="n"
                 :style="getWaveSegmentStyle(n, 2)"></div>
          </div>
          <div class="ow-wave ow-wave-3" ref="wave3">
            <div class="ow-wave-segment" v-for="n in 40" :key="n"
                 :style="getWaveSegmentStyle(n, 3)"></div>
          </div>
        </div>

        <div class="ow-ocean-bubbles">
          <div class="ow-bubble" v-for="n in 30" :key="n"
               :style="getBubbleStyle(n)"></div>
        </div>

        <div class="ow-ocean-fish">
          <div class="ow-fish" v-for="n in 10" :key="n"
               :style="getFishStyle(n)"></div>
        </div>

        <div class="ow-ocean-light">
          <div class="ow-light-ray" v-for="n in 8" :key="n"
               :style="getLightRayStyle(n)"></div>
        </div>

        <div class="ow-ocean-seabed">
          <div class="ow-seaweed" v-for="n in 8" :key="n"
               :style="getSeaweedStyle(n)"></div>
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

const oceanContainer = ref<HTMLElement | null>(null)
const wave1 = ref<HTMLElement | null>(null)
const wave2 = ref<HTMLElement | null>(null)
const wave3 = ref<HTMLElement | null>(null)

const getWaveSegmentStyle = (index: number, waveIndex: number) => {
  const height = 40 + Math.sin(index * 0.3) * 20
  const delay = index * 0.05
  return {
    height: `${height}px`,
    animationDelay: `${delay}s`
  }
}

const getBubbleStyle = (index: number) => {
  const left = 10 + (index * 3)
  const size = 5 + Math.random() * 10
  return {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }
}

const getFishStyle = (index: number) => {
  const top = 20 + Math.random() * 60
  const delay = Math.random() * 5
  const direction = index % 2 === 0 ? 1 : -1
  return {
    top: `${top}%`,
    animationDelay: `${delay}s`,
    transform: `scaleX(${direction})`
  }
}

const getLightRayStyle = (index: number) => {
  const left = 10 + (index * 12)
  return {
    left: `${left}%`,
    animationDelay: `${index * 0.2}s`
  }
}

const getSeaweedStyle = (index: number) => {
  const left = 5 + (index * 12)
  const height = 80 + Math.random() * 60
  return {
    left: `${left}%`,
    height: `${height}px`,
    animationDelay: `${index * 0.3}s`
  }
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 波浪滚动动画
    gsap.to('.ow-wave', {
      x: '-10%',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    })

    // 波段脉动
    gsap.to('.ow-wave-segment', {
      scaleY: 1.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.05
    })

    // 气泡上升
    gsap.to('.ow-bubble', {
      y: -500,
      opacity: 0,
      duration: 5,
      repeat: -1,
      stagger: 0.2,
      ease: 'power1.out'
    })

    // 鱼游动
    gsap.to('.ow-fish', {
      x: '+=200',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    })

    // 光线闪烁
    gsap.to('.ow-light-ray', {
      opacity: 0.3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      stagger: 0.2
    })

    // 海草摇摆
    gsap.to('.ow-seaweed', {
      rotation: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    })

    // 滚动效果
    gsap.to('.ow-ocean-container', {
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.ow-ocean-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    // 入场动画
    gsap.from('.ow-ocean-container', {
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.ow-ocean-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.ow-ocean-section {
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a1a2a 0%, #0a2a3a 30%, #051a2a 70%, #020a1a 100%);
}

.ow-content {
  text-align: center;
}

.ow-section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #06b6d4, #0ea5e9, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ow-subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 40px;
}

.ow-ocean-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(6, 182, 212, 0.2);
}

.ow-ocean-surface {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  padding: 0 10px;
}

.ow-wave {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  flex: 1;
}

.ow-wave-segment {
  flex: 1;
  background: linear-gradient(180deg, rgba(6, 182, 212, 0.6), rgba(14, 165, 233, 0.3));
  border-radius: 50% 50% 0 0;
  transition: height 0.3s ease;
  animation: wavePulse 2s ease-in-out infinite;
}

.ow-wave-1 .ow-wave-segment {
  animation-delay: 0s;
}

.ow-wave-2 .ow-wave-segment {
  animation-delay: 0.5s;
  opacity: 0.7;
}

.ow-wave-3 .ow-wave-segment {
  animation-delay: 1s;
  opacity: 0.5;
}

@keyframes wavePulse {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.3);
  }
}

.ow-ocean-bubbles {
  position: absolute;
  inset: 50px 0 100px;
  pointer-events: none;
}

.ow-bubble {
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: bubbleRise 5s ease-out infinite;
}

@keyframes bubbleRise {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-400px) translateX(20px);
    opacity: 0;
  }
}

.ocean-fish {
  position: absolute;
  inset: 100px 0 150px;
  pointer-events: none;
}

.fish {
  position: absolute;
  width: 40px;
  height: 20px;
  background: linear-gradient(180deg, #f97316, #ea580c);
  border-radius: 50% 50% 50% 50%;
  animation: fishSwim 8s ease-in-out infinite;
}

.fish::before {
  content: '';
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-left: 15px solid #ea580c;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.fish::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 6px;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
}

@keyframes fishSwim {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(200px);
  }
}

.ocean-light {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  pointer-events: none;
}

.light-ray {
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent);
  animation: lightShimmer 2s ease-in-out infinite;
}

@keyframes lightShimmer {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;
  }
}

.ocean-seabed {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, transparent, rgba(5, 26, 42, 0.8));
}

.seaweed {
  position: absolute;
  bottom: 0;
  width: 20px;
  background: linear-gradient(180deg, #22c55e, #16a34a);
  border-radius: 20px 20px 0 0;
  transform-origin: bottom center;
  animation: seaweedSway 3s ease-in-out infinite;
}

@keyframes seaweedSway {
  0%, 100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
}

@media (max-width: 768px) {
  .ocean-container {
    height: 400px;
  }
}
</style>
