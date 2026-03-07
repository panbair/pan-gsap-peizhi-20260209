<template>
  <section class="tornado-section">
    <div class="content">
      <h2 class="tor-section-title">龙卷风</h2>
      <p class="tor-subtitle">自然的狂暴旋涡</p>

      <div class="tornado-container" ref="tornadoContainer">
        <div class="storm-sky">
          <div class="lightning bolt-1"></div>
          <div class="lightning bolt-2"></div>
          <div class="storm-cloud cloud-1"></div>
          <div class="storm-cloud cloud-2"></div>
          <div class="storm-cloud cloud-3"></div>
        </div>

        <div class="tornado-body">
          <div class="tornado-segment" v-for="n in 15" :key="n"
               :style="getSegmentStyle(n)"></div>
        </div>

        <div class="debris-particles">
          <div class="debris" v-for="n in 40" :key="n"
               :style="getDebrisStyle(n)"></div>
        </div>

        <div class="tornado-ground">
          <div class="ground-dust">
            <div class="dust-cloud" v-for="n in 20" :key="n"></div>
          </div>
        </div>

        <div class="wind-lines">
          <div class="wind-line" v-for="n in 30" :key="n"
               :style="getWindLineStyle(n)"></div>
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

const tornadoContainer = ref<HTMLElement | null>(null)

const getSegmentStyle = (index: number) => {
  const width = 100 + (index * 15)
  const opacity = 0.8 - (index * 0.04)
  const rotation = index * 2
  return {
    width: `${width}px`,
    opacity: opacity,
    animationDelay: `${index * 0.1}s`
  }
}

const getDebrisStyle = (index: number) => {
  const angle = Math.random() * 360
  const radius = 50 + Math.random() * 150
  const x = Math.cos(angle * Math.PI / 180) * radius
  const y = (Math.random() - 0.5) * 400
  const size = 5 + Math.random() * 10
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${Math.random() * 2}s`
  }
}

const getWindLineStyle = (index: number) => {
  const left = 10 + Math.random() * 80
  const top = 20 + Math.random() * 60
  const length = 50 + Math.random() * 100
  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${length}px`,
    animationDelay: `${Math.random() * 2}s`
  }
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 闪电效果
    gsap.to('.lightning', {
      opacity: 0,
      duration: 0.1,
      repeat: 3,
      yoyo: true,
      ease: 'none',
      stagger: 0.5
    })

    // 龙卷风段旋转
    gsap.to('.tornado-segment', {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: 'none',
      stagger: 0.1
    })

    // 碎片旋转上升
    gsap.to('.debris', {
      y: -200,
      rotation: 360,
      scale: 0.5,
      opacity: 0,
      duration: 3,
      repeat: -1,
      stagger: 0.1,
      ease: 'power1.out'
    })

    // 尘云漂浮
    gsap.to('.dust-cloud', {
      x: 30,
      y: -20,
      opacity: 0.3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    })

    // 风线流动
    gsap.to('.wind-line', {
      x: 100,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: 0.1,
      ease: 'power1.out'
    })

    // 风暴云移动
    gsap.to('.storm-cloud', {
      x: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 1
    })

    // 龙卷风摆动
    gsap.to('.tornado-body', {
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // 滚动效果
    gsap.to('.tornado-body', {
      scaleY: 1.3,
      duration: 1,
      scrollTrigger: {
        trigger: '.tornado-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    // 入场动画
    gsap.from('.tornado-container', {
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.tornado-section',
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
.tornado-section {
  min-height: 100vh;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1a1a2a 0%, #2a2a3a 50%, #3a3a4a 100%);
}

.content {
  text-align: center;
}

.tor-section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  color: #6b7280;
  text-shadow: 0 0 20px rgba(107, 114, 128, 0.6);
}

.tor-subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 40px;
}

.tornado-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 600px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 60px rgba(107, 114, 128, 0.3);
}

.storm-sky {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #1a1a2a, #2a2a3a 60%, #3a3a4a);
}

.lightning {
  position: absolute;
  width: 4px;
  height: 200px;
  background: linear-gradient(180deg, #fef08a, transparent);
  opacity: 0;
  filter: blur(2px);
}

.bolt-1 {
  top: 50px;
  left: 20%;
  transform: rotate(15deg);
}

.bolt-2 {
  top: 80px;
  right: 15%;
  transform: rotate(-20deg);
}

.storm-cloud {
  position: absolute;
  width: 150px;
  height: 60px;
  background: linear-gradient(180deg, #4a4a5a, #3a3a4a);
  border-radius: 30px;
  filter: blur(10px);
}

.cloud-1 {
  top: 10%;
  left: 10%;
}

.cloud-2 {
  top: 15%;
  right: 20%;
}

.cloud-3 {
  top: 8%;
  left: 60%;
}

.tornado-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.tornado-segment {
  border-radius: 50%;
  background: linear-gradient(180deg, #6b7280, #4b5563);
  animation: segmentSpin 3s linear infinite;
}

@keyframes segmentSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.debris-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.debris {
  position: absolute;
  background: #6b7280;
  border-radius: 3px;
  animation: debrisFly 3s ease-out infinite;
}

@keyframes debrisFly {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-200px) rotate(360deg) scale(0.5);
    opacity: 0;
  }
}

.tornado-ground {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(180deg, transparent, rgba(75, 85, 99, 0.4));
}

.ground-dust {
  position: absolute;
  inset: 0;
}

.dust-cloud {
  position: absolute;
  bottom: 20px;
  width: 80px;
  height: 40px;
  background: rgba(107, 114, 128, 0.4);
  border-radius: 50%;
  filter: blur(20px);
}

.wind-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.wind-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(107, 114, 128, 0.6), transparent);
  animation: windFlow 2s ease-out infinite;
}

@keyframes windFlow {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(100px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .tornado-container {
    height: 400px;
  }
}
</style>
