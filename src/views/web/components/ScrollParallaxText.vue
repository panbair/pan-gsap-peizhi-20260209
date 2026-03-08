<template>
  <section class="spt-scroll-parallax-text-122">
    <div class="spt-container-122">
      <h2 class="spt-section-title-122">视差文字滚动</h2>
      <p class="spt-section-subtitle-122">Parallax Text Scrolling</p>

      <div class="spt-parallax-sections-122">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="spt-section-122"
          :ref="el => { if (el) sectionRefs[index] = el as HTMLElement }"
        >
          <div class="spt-text-layer-122" :class="`spt-layer-${index + 1}`">
            <h3 class="spt-text-122" :data-text="section.text">{{ section.text }}</h3>
          </div>
          <div class="spt-image-layer-122">
            <img :src="section.image" :alt="`Image ${index + 1}`" />
          </div>
        </div>
      </div>

      <!-- 滚动进度指示器 -->
      <div class="spt-progress-122">
        <div class="spt-progress-bar-122" ref="progressBar"></div>
        <div class="spt-progress-dots-122">
          <span
            v-for="(section, index) in sections"
            :key="index"
            :class="['spt-dot-122', { 'spt-active-122': currentSection === index }]"
            @click="scrollToSection(index)"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRefs = ref<HTMLElement[]>([])
const progressBar = ref<HTMLElement>()
const currentSection = ref(0)

const sections = [
  {
    text: '探索',
    image: new URL('@/assets/image/1.png', import.meta.url).href
  },
  {
    text: '创造',
    image: new URL('@/assets/image/2.png', import.meta.url).href
  },
  {
    text: '灵感',
    image: new URL('@/assets/image/3.png', import.meta.url).href
  },
  {
    text: '突破',
    image: new URL('@/assets/image/4.png', import.meta.url).href
  }
]

const scrollToSection = (index: number) => {
  const target = sectionRefs.value[index]
  if (target) {
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: 'power2.inOut'
    })
  }
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画 - 3D进入效果
    gsap.from('.spt-section-title-122', {
      scrollTrigger: {
        trigger: '.spt-scroll-parallax-text-122',
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1
      },
      y: 120,
      scale: 0.8,
      opacity: 0,
      ease: 'power3.out'
    })

    gsap.from('.spt-section-subtitle-122', {
      scrollTrigger: {
        trigger: '.spt-scroll-parallax-text-122',
        start: 'top 85%',
        end: 'top 65%',
        scrub: 1
      },
      y: 60,
      opacity: 0,
      ease: 'power3.out'
    })

    // 视差文字层动画
    sectionRefs.value.forEach((section, index) => {
      const textLayer = section.querySelector('.spt-text-layer-122') as HTMLElement
      const text = section.querySelector('.spt-text-122') as HTMLElement
      const imageLayer = section.querySelector('.spt-image-layer-122') as HTMLElement
      const img = imageLayer.querySelector('img') as HTMLElement

      // 文字层滚动视差 - 不同的移动速度和方向
      const speeds = [-80, 80, -60, 60]
      const rotationSpeeds = [3, -3, 5, -5]

      gsap.set(text, {
        y: 150,
        scale: 0.85,
        opacity: 0,
        rotationX: 20,
        filter: 'blur(10px)'
      })
      gsap.set(img, { y: 120, scale: 1.2, opacity: 0.3, filter: 'blur(20px)' })

      // 文字入场 - 更平滑的3D翻转效果
      gsap.to(text, {
        y: 0,
        scale: 1,
        opacity: 1,
        rotationX: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1.5
        }
      })

      // 图片层滚动视差 - 更柔和的淡入效果
      gsap.to(img, {
        y: 0,
        scale: 1,
        opacity: 0.25,
        filter: 'blur(8px)',
        duration: 2.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1.5
        }
      })

      // 文字层持续视差移动 - 更流畅
      gsap.to(textLayer, {
        y: (progress) => {
          const baseSpeed = speeds[index % speeds.length]
          return baseSpeed * progress
        },
        rotationX: (progress) => {
          const baseRot = rotationSpeeds[index % rotationSpeeds.length]
          return baseRot * Math.sin(progress * Math.PI * 0.8)
        },
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        },
        ease: 'power1.inOut'
      })

      // 图片层反向视差 - 更自然的缩放
      gsap.to(img, {
        scale: 1.05,
        y: (progress) => {
          return -30 * Math.sin(progress * Math.PI)
        },
        filter: (progress) => {
          const blur = 8 - progress * 4
          return `blur(${blur}px)`
        },
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: 2
        },
        ease: 'power1.inOut'
      })

      // 文字悬停效果 - 更精致
      text.addEventListener('mouseenter', () => {
        gsap.to(text, {
          scale: 1.05,
          filter: 'blur(0px)',
          textShadow: '0 0 120px rgba(236, 72, 153, 0.9), 0 0 240px rgba(168, 85, 247, 0.7)',
          duration: 0.5,
          ease: 'power2.out'
        })
        gsap.to(img, {
          scale: 1.15,
          opacity: 0.4,
          filter: 'blur(5px)',
          duration: 0.6,
          ease: 'power2.out'
        })
      })

      text.addEventListener('mouseleave', () => {
        gsap.to(text, {
          scale: 1,
          filter: 'blur(0px)',
          textShadow: '0 0 80px rgba(236, 72, 153, 0.6), 0 0 160px rgba(168, 85, 247, 0.4)',
          duration: 0.5,
          ease: 'power2.out'
        })
        gsap.to(img, {
          scale: 1.05,
          opacity: 0.25,
          filter: 'blur(8px)',
          duration: 0.6,
          ease: 'power2.out'
        })
      })

      // 更新当前活动区块
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => { currentSection.value = index },
        onEnterBack: () => { currentSection.value = index }
      })
    })

    // 进度条动画
    gsap.to('.spt-progress-bar-122', {
      width: '100%',
      scrollTrigger: {
        trigger: '.spt-parallax-sections-122',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.3
      }
    })

    // 进度点动画
    gsap.from('.spt-dot-122', {
      scale: 0,
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.spt-scroll-parallax-text-122',
        start: 'top 90%'
      }
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.spt-scroll-parallax-text-122 {
  min-height: 450vh;
  padding: 100px 0;
  background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 25%, #1e1e4a 50%, #1a1a3a 75%, #0a0a1a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
    pointer-events: none;
    animation: pulse-bg 10s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 10% 20%, rgba(236, 72, 153, 0.05) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.03) 0%, transparent 50%);
    pointer-events: none;
    animation: pulse-bg 15s ease-in-out infinite reverse;
  }
}

@keyframes pulse-bg {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

.spt-container-122 {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 1;
}

.spt-section-title-122 {
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #ec4899 0%, #a855f7 25%, #3b82f6 50%, #06b6d4 75%, #10b981 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 80px rgba(168, 85, 247, 0.5);
  animation: gradient-shift 6s ease infinite;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
    filter: blur(30px);
    animation: float 4s ease-in-out infinite;
  }

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 5px;
    background: linear-gradient(90deg, transparent, #ec4899, #a855f7, #3b82f6, transparent);
    background-size: 200% 100%;
    margin: 30px auto 0;
    border-radius: 3px;
    animation: gradient-line 3s linear infinite;
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-line {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-10px);
  }
}

.spt-section-subtitle-122 {
  text-align: center;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 80px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 500;
  text-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
}

.spt-parallax-sections-122 {
  display: flex;
  flex-direction: column;
  gap: 0;
  perspective: 2000px;
}

.spt-section-122 {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
}

.spt-text-layer-122 {
  position: absolute;
  z-index: 10;
  text-align: center;
  width: 100%;
  padding: 0 30px;
  transform-style: preserve-3d;
}

.spt-text-122 {
  font-size: clamp(4.5rem, 11vw, 9rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.97) 30%, rgba(255, 255, 255, 0.92) 70%, #e0e0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.15;
  will-change: transform;
  position: relative;
  text-shadow:
    0 0 80px rgba(236, 72, 153, 0.5),
    0 0 160px rgba(168, 85, 247, 0.4),
    0 0 240px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(20px) scale(1.02);
    filter: blur(1.5px);
    opacity: 0.8;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
    animation: text-glow 4s ease-in-out infinite;
  }
}

@keyframes text-glow {
  0%, 100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.15);
  }
}

.spt-image-layer-122 {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  pointer-events: none;
  filter: blur(10px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
    opacity: 0.7;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
      linear-gradient(225deg, rgba(168, 85, 247, 0.12) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%);
    filter: blur(70px);
    pointer-events: none;
  }
}

.spt-progress-122 {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  z-index: 100;
  backdrop-filter: blur(15px);
  padding: 25px 50px;
  background: rgba(15, 15, 47, 0.7);
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 15px 50px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(168, 85, 247, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #ec4899, #a855f7, #3b82f6, transparent);
    border-radius: 2px;
  }
}

.spt-progress-bar-122 {
  width: 0%;
  height: 5px;
  background: linear-gradient(90deg, #ec4899, #a855f7, #3b82f6, #06b6d4, #10b981);
  background-size: 300% 100%;
  border-radius: 3px;
  min-width: 320px;
  box-shadow:
    0 0 25px rgba(168, 85, 247, 0.6),
    0 0 50px rgba(236, 72, 153, 0.3);
  animation: progress-glow 3s linear infinite;
}

@keyframes progress-glow {
  0%, 100% {
    background-position: 300% 0;
  }
  50% {
    background-position: -300% 0;
  }
}

.spt-progress-dots-122 {
  display: flex;
  gap: 18px;
  align-items: center;
}

.spt-dot-122 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &.spt-active-122 {
    background: linear-gradient(135deg, #ec4899, #a855f7);
    transform: scale(1.5);
    box-shadow:
      0 0 25px rgba(236, 72, 153, 0.7),
      0 0 50px rgba(168, 85, 247, 0.5);

    &::before {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.3);
    }
  }

  &:hover {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(168, 85, 247, 0.6));
    transform: scale(1.3);
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
  }
}

@media (max-width: 768px) {
  .spt-text-122 {
    font-size: clamp(2.8rem, 9vw, 4.5rem);
    letter-spacing: 0.08em;
  }

  .spt-progress-bar-122 {
    min-width: 220px;
    height: 4px;
  }

  .spt-progress-122 {
    padding: 20px 35px;
    bottom: 40px;
    gap: 20px;
  }

  .spt-section-title-122 {
    margin-bottom: 50px;
    font-size: clamp(2.2rem, 6vw, 3rem);
  }

  .spt-section-subtitle-122 {
    margin-bottom: 70px;
    font-size: 0.9rem;
  }

  .spt-dot-122 {
    width: 14px;
    height: 14px;
  }
}
</style>
