<template>
  <section class="particle-section">
    <div class="particle-container" id="particleContainer" ref="containerRef">
      <div class="particle-controls">
        <button class="particle-btn" @click="explode">
          <span>💥</span> 能量爆发
        </button>
        <button class="particle-btn" @click="attract">
          <span>🧲</span> 磁场吸引
        </button>
        <button class="particle-btn" @click="vortex">
          <span>🌀</span> 旋涡吸入
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  particleCount?: number
  containerHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  particleCount: 100,
  containerHeight: '600px'
})

const containerRef = ref<HTMLElement>()
let particles: HTMLElement[] = []

function createParticles() {
  const container = document.getElementById('particleContainer')
  if (!container) return

  for (let i = 0; i < props.particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'
    particle.style.background = `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
    container.appendChild(particle)
    particles.push(particle)

    // 随机浮动
    gsap.to(particle, {
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      duration: 3 + Math.random() * 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }
}

function explode() {
  particles.forEach((p) => {
    gsap.to(p, {
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      scale: 2,
      opacity: 0.8,
      duration: 0.8,
      ease: 'power3.out',
      yoyo: true,
      repeat: 1
    })
  })
}

function attract() {
  particles.forEach((p, i) => {
    const delay = i * 0.02
    gsap.to(p, {
      x: '50%',
      y: '50%',
      scale: 1.5,
      duration: 1.2,
      delay,
      ease: 'elastic.out(1, 0.5)'
    })
  })
}

function vortex() {
  particles.forEach((p, i) => {
    const angle = (i / particles.length) * Math.PI * 2
    const radius = 200
    gsap.to(p, {
      x: `calc(50% + ${Math.cos(angle) * radius}px)`,
      y: `calc(50% + ${Math.sin(angle) * radius}px)`,
      rotation: 360,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(p, {
          x: '50%',
          y: '50%',
          scale: 0,
          duration: 0.8,
          ease: 'power2.in'
        })
      }
    })
  })
}

onMounted(() => {
  createParticles()

  ScrollTrigger.create({
    trigger: containerRef.value,
    start: 'top 70%',
    onEnter: () => {
      particles.forEach((p, i) => {
        gsap.fromTo(p,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: i * 0.01,
            ease: 'back.out(1.7)'
          }
        )
      })
    }
  })
})
</script>

<style scoped lang="scss">
.particle-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 100px 5%;
}

#particleContainer {
  position: relative;
  width: 100%;
  height: v-bind('containerHeight');
  background: rgba(0, 0, 0, 0.3);
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.2);
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 0 0 15px currentColor;
}

.particle-controls {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 10;
}

.particle-btn {
  padding: 14px 28px;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  background: rgba(124, 58, 237, 0.3);
  border: 1px solid rgba(167, 139, 250, 0.4);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(124, 58, 237, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
  }

  span {
    margin-right: 8px;
  }
}
</style>
