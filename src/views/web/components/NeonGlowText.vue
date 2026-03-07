<template>
  <section class="ngt-neon-glow-section">
    <div class="ngt-content">
      <h2 class="ngt-section-title">霓虹光辉</h2>
      <p class="ngt-subtitle">动态霓虹灯光文字效果</p>

      <div class="ngt-neon-container">
        <div class="ngt-neon-text" ref="neon1">
          <span class="ngt-letter" v-for="(char, index) in 'NEON'" :key="index">{{ char }}</span>
        </div>
        <div class="ngt-neon-text" ref="neon2">
          <span class="ngt-letter" v-for="(char, index) in 'LIGHT'" :key="index">{{ char }}</span>
        </div>
        <div class="ngt-neon-text" ref="neon3">
          <span class="ngt-letter" v-for="(char, index) in 'EFFECT'" :key="index">{{ char }}</span>
        </div>
      </div>

      <div class="ngt-neon-controls">
        <button class="ngt-neon-btn" @mouseenter="activateNeon" @mouseleave="deactivateNeon">
          激活霓虹
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const neon1 = ref<HTMLElement | null>(null)
const neon2 = ref<HTMLElement | null>(null)
const neon3 = ref<HTMLElement | null>(null)

let ctx: gsap.Context

const activateNeon = () => {
  gsap.to('.ngt-letter', {
    textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff',
    color: '#ffffff',
    scale: 1.2,
    duration: 0.5,
    stagger: 0.1
  })
}

const deactivateNeon = () => {
  gsap.to('.ngt-letter', {
    textShadow: '0 0 5px rgba(255, 0, 255, 0.5), 0 0 10px rgba(255, 0, 255, 0.3)',
    color: '#ff00ff',
    scale: 1,
    duration: 0.5,
    stagger: 0.1
  })
}

onMounted(() => {
  ctx = gsap.context(() => {
    const neonTexts = [neon1.value, neon2.value, neon3.value].filter(Boolean) as HTMLElement[]

    neonTexts.forEach((text, textIndex) => {
      const letters = text.querySelectorAll('.ngt-letter')

      // 入场动画
      gsap.from(letters, {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      })

      // 滚动时的闪烁效果
      gsap.to(letters, {
        opacity: 0.5,
        duration: 0.5,
        repeat: 3,
        yoyo: true,
        stagger: 0.05,
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      })

      // 持续的霓虹闪烁
      letters.forEach((letter, index) => {
        gsap.to(letter, {
          opacity: 0.7 + Math.random() * 0.3,
          duration: 0.5 + Math.random() * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'none',
          delay: index * 0.1
        })
      })
    })

    // 滚动时的颜色变换
    gsap.to('.ngt-neon-text', {
      filter: 'hue-rotate(180deg)',
      duration: 2,
      scrollTrigger: {
        trigger: '.ngt-neon-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.ngt-neon-glow-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a0a1a, #1a0a1a, #0a0a1a);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.05), transparent 70%);
    pointer-events: none;
  }
}

.ngt-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.ngt-section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  color: #ff00ff;
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
}

.ngt-subtitle {
  font-size: 1.1rem;
  color: #c084fc;
  margin-bottom: 60px;
  text-shadow: 0 0 10px rgba(192, 132, 252, 0.5);
}

.ngt-neon-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
}

.ngt-neon-text {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  display: flex;
  justify-content: center;
  gap: 0.1em;
}

.ngt-letter {
  display: inline-block;
  color: #ff00ff;
  text-shadow: 0 0 5px rgba(255, 0, 255, 0.5),
               0 0 10px rgba(255, 0, 255, 0.3),
               0 0 15px rgba(255, 0, 255, 0.2);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.ngt-neon-controls {
  display: flex;
  justify-content: center;
}

.ngt-neon-btn {
  padding: 16px 48px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  background: transparent;
  border: 2px solid #ff00ff;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.3),
              inset 0 0 10px rgba(255, 0, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 255, 0.1);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.6),
                0 0 40px rgba(255, 0, 255, 0.4),
                inset 0 0 20px rgba(255, 0, 255, 0.2);
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  }

  &:active {
    transform: scale(0.95);
  }
}

@media (max-width: 768px) {
  .ngt-neon-text {
    font-size: clamp(2rem, 12vw, 3rem);
  }
}
</style>
