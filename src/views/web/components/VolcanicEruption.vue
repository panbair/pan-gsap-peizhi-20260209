<template>
  <section class="volcano-section">
    <div class="content">
      <h2 class="ve-section-title">火山喷发</h2>
      <p class="ve-subtitle">大自然的磅礴力量</p>

      <div class="volcano-container" ref="volcanoContainer">
        <div class="sky-background">
          <div class="cloud cloud-1"></div>
          <div class="cloud cloud-2"></div>
          <div class="cloud cloud-3"></div>
        </div>

        <div class="volcano-mountain">
          <div class="mountain-left"></div>
          <div class="mountain-right"></div>
          <div class="mountain-center"></div>
          <div class="crater"></div>
        </div>

        <div class="magma-chamber">
          <div class="magma-glow"></div>
        </div>

        <div class="lava-streams">
          <div class="lava-stream stream-1" ref="stream1">
            <div class="lava-particle" v-for="n in 20" :key="n"
                 :style="getLavaStyle(n, 1)"></div>
          </div>
          <div class="lava-stream stream-2" ref="stream2">
            <div class="lava-particle" v-for="n in 20" :key="n"
                 :style="getLavaStyle(n, 2)"></div>
          </div>
          <div class="lava-stream stream-3" ref="stream3">
            <div class="lava-particle" v-for="n in 20" :key="n"
                 :style="getLavaStyle(n, 3)"></div>
          </div>
        </div>

        <div class="ash-particles">
          <div class="ash" v-for="n in 80" :key="n"
               :style="getAshStyle(n)"></div>
        </div>

        <div class="eruption-column">
          <div class="column-column"></div>
          <div class="column-sparks">
            <div class="spark" v-for="n in 40" :key="n"
                 :style="getSparkStyle(n)"></div>
          </div>
        </div>

        <div class="lava-pool">
          <div class="pool-surface">
            <div class="pool-ripple" v-for="n in 10" :key="n"></div>
          </div>
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

const volcanoContainer = ref<HTMLElement | null>(null)
const stream1 = ref<HTMLElement | null>(null)
const stream2 = ref<HTMLElement | null>(null)
const stream3 = ref<HTMLElement | null>(null)

const getLavaStyle = (index: number, streamIndex: number) => {
  const delay = index * 0.1
  return {
    animationDelay: `${delay}s`
  }
}

const getAshStyle = (index: number) => {
  const left = Math.random() * 100
  const delay = Math.random() * 3
  const duration = 4 + Math.random() * 2
  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}

const getSparkStyle = (index: number) => {
  const angle = Math.random() * 360
  const distance = 50 + Math.random() * 100
  const x = Math.cos(angle * Math.PI / 180) * distance
  const y = Math.sin(angle * Math.PI / 180) * distance
  const delay = Math.random() * 2
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    animationDelay: `${delay}s`
  }
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 火山灰飘落
    gsap.to('.ash', {
      y: 400,
      opacity: 0,
      duration: 5,
      repeat: -1,
      stagger: 0.1,
      ease: 'power1.out'
    })

    // 熔岩流动
    gsap.to('.lava-particle', {
      y: 200,
      x: '+=20',
      scale: 0.5,
      duration: 3,
      repeat: -1,
      stagger: 0.1,
      ease: 'power1.out'
    })

    // 火星飞溅
    gsap.to('.spark', {
      y: -100,
      opacity: 0,
      scale: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.05,
      ease: 'power2.out'
    })

    // 熔岩脉动
    gsap.to('.magma-glow', {
      scale: 1.3,
      opacity: 0.8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    // 喷发柱脉动
    gsap.to('.column-column', {
      scaleY: 1.2,
      scaleX: 0.9,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    // 火山震动
    gsap.to('.volcano-mountain', {
      y: '+=2',
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    })

    // 池面波纹
    gsap.to('.pool-ripple', {
      scale: 2,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.3,
      ease: 'power1.out'
    })

    // 滚动效果
    gsap.to('.eruption-column', {
      scaleY: 1.5,
      duration: 1,
      scrollTrigger: {
        trigger: '.volcano-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    // 入场动画
    gsap.from('.volcano-container', {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.volcano-section',
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
.volcano-section {
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1a0a0a 0%, #2a1a0a 50%, #0a0a0a 100%);
}

.content {
  text-align: center;
}

.ve-section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ef4444, #f97316, #fbbf24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ve-subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 40px;
}

.volcano-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 600px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(239, 68, 68, 0.3);
}

.sky-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #1a0a0a, #2a1a1a 60%, #3a2a1a);
}

.cloud {
  position: absolute;
  width: 100px;
  height: 40px;
  background: rgba(50, 40, 40, 0.6);
  border-radius: 20px;
  filter: blur(10px);
}

.cloud-1 {
  top: 10%;
  left: 10%;
  animation: cloudFloat 20s ease-in-out infinite;
}

.cloud-2 {
  top: 15%;
  right: 15%;
  animation: cloudFloat 25s ease-in-out infinite reverse;
}

.cloud-3 {
  top: 20%;
  left: 60%;
  animation: cloudFloat 18s ease-in-out infinite;
}

@keyframes cloudFloat {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }
}

.volcano-mountain {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 300px;
}

.mountain-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 300px;
  background: linear-gradient(135deg, #4a3a2a, #3a2a1a);
  clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
}

.mountain-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 300px;
  background: linear-gradient(225deg, #4a3a2a, #3a2a1a);
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
}

.mountain-center {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 280px;
  background: linear-gradient(180deg, #5a4a3a, #3a2a1a);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.crater {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 40px;
  background: radial-gradient(ellipse, #2a1a0a, #3a2a1a);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
}

.magma-chamber {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
}

.magma-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, #fbbf24, #f97316, transparent);
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(251, 191, 36, 0.6);
}

.lava-streams {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 150px;
  pointer-events: none;
}

.lava-stream {
  position: absolute;
  width: 20px;
  height: 100px;
}

.stream-1 {
  left: 120px;
  transform: rotate(-30deg);
}

.stream-2 {
  left: 190px;
}

.stream-3 {
  right: 120px;
  transform: rotate(30deg);
}

.lava-particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #fbbf24, #f97316);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  animation: lavaFlow 3s ease-out infinite;
}

@keyframes lavaFlow {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(150px) scale(0.5);
    opacity: 0.3;
  }
}

.ash-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.ash {
  position: absolute;
  top: -20px;
  width: 4px;
  height: 4px;
  background: rgba(100, 80, 80, 0.6);
  border-radius: 50%;
  animation: ashFall 5s linear infinite;
}

@keyframes ashFall {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }
  100% {
    transform: translateY(400px) translateX(20px);
    opacity: 0;
  }
}

.eruption-column {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 200px;
  pointer-events: none;
}

.column-column {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 150px;
  background: linear-gradient(180deg, rgba(239, 68, 68, 0.4), rgba(249, 115, 22, 0.2), transparent);
  border-radius: 50% 50% 0 0;
}

.column-sparks {
  position: absolute;
  inset: 0;
}

.spark {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fbbf24;
  border-radius: 50%;
  box-shadow: 0 0 10px #fbbf24;
  animation: sparkFly 2s ease-out infinite;
}

@keyframes sparkFly {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx, 20px), -100px) scale(0);
    opacity: 0;
  }
}

.lava-pool {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, transparent, rgba(239, 68, 68, 0.3));
}

.pool-surface {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 40px;
  background: linear-gradient(180deg, #f97316, #ea580c);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
}

.pool-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 20px;
  border: 2px solid rgba(251, 191, 36, 0.6);
  border-radius: 50%;
  animation: rippleExpand 2s ease-out infinite;
}

@keyframes rippleExpand {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>
