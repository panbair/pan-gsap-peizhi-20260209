<template>
  <div class="text-scroll">
    <div class="ts-container">
      <h2 class="ts-section-title">文字滚动</h2>

      <div class="ts-text-container">
        <div class="ts-text-line" v-for="(line, index) in textLines" :key="index" ref="lines">
          <span class="ts-text-char" v-for="(char, charIndex) in line.split('')" :key="charIndex">{{ char }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lines = ref<HTMLElement[]>([])
const textLines = [
  'SCROLL TO ANIMATE',
  'EACH LETTER MOVES',
  'WITH PRECISION'
]

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.ts-section-title', {
      scrollTrigger: {
        trigger: '.ts-section-title',
        start: 'top 90%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    lines.value.forEach((line, index) => {
      const chars = line.querySelectorAll('.ts-text-char')
      
      // 字母从下方淡入
      gsap.fromTo(chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          },
          duration: 1,
          stagger: 0.03,
          delay: index * 0.2,
          ease: 'power3.out'
        }
      )

      // 滚动时字母波浪
      gsap.to(chars, {
        y: -30,
        scrollTrigger: {
          trigger: line,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
          toggleActions: 'play reverse play reverse'
        },
        stagger: 0.02,
        ease: 'power1.inOut'
      })

      // 滚动时颜色变化
      gsap.to(chars, {
        color: '#ff6b6b',
        scrollTrigger: {
          trigger: line,
          start: 'top 50%',
          end: 'top 10%',
          scrub: true,
          toggleActions: 'play reverse play reverse'
        },
        stagger: 0.03
      })
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.text-scroll {
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
}

.ts-container {
  width: 100%;
  max-width: 1000px;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.ts-section-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 100px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #f39c12 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(255, 107, 107, 0.5);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #ee5a24, #f39c12);
    margin: 20px auto 0;
    border-radius: 2px;
  }
}

.ts-text-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 0;
}

.ts-text-line {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
}

.ts-text-char {
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  display: inline-block;
  transition: color 0.3s ease;
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
  font-family: 'Arial', sans-serif;

  &:hover {
    color: #ff6b6b;
    cursor: default;
  }
}

@media (max-width: 768px) {
  .ts-text-char {
    font-size: 2.5rem;
  }

  .ts-section-title {
    font-size: 2rem;
  }
}
</style>
