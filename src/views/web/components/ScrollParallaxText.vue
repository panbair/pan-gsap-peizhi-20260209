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
            <h3 class="spt-text-122">{{ section.text }}</h3>
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
    // 标题动画
    gsap.from('.spt-section-title-122', {
      scrollTrigger: {
        trigger: '.spt-scroll-parallax-text-122',
        start: 'top 90%'
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })

    gsap.from('.spt-section-subtitle-122', {
      scrollTrigger: {
        trigger: '.spt-scroll-parallax-text-122',
        start: 'top 85%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    })

    // 视差文字层动画
    sectionRefs.value.forEach((section, index) => {
      const textLayer = section.querySelector('.spt-text-layer-122') as HTMLElement
      const text = section.querySelector('.spt-text-122') as HTMLElement
      const imageLayer = section.querySelector('.spt-image-layer-122') as HTMLElement
      const img = imageLayer.querySelector('img') as HTMLElement

      // 文字层滚动视差 - 不同的移动速度
      const speeds = [-100, 100, -80, 120]

      gsap.set(text, { y: 200, opacity: 0 })
      gsap.set(img, { y: 150, scale: 1.3 })

      // 文字入场
      gsap.to(text, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1
        }
      })

      // 图片层滚动视差
      gsap.to(img, {
        y: 0,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: 1
        }
      })

      // 文字层持续视差移动
      gsap.to(textLayer, {
        y: speeds[index % speeds.length],
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        ease: 'none'
      })

      // 图片层反向视差
      gsap.to(img, {
        scale: 1.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1
        },
        ease: 'none'
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
        scrub: 0.5
      }
    })

    // 进度点动画
    gsap.from('.spt-dot-122', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.2,
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
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(180deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
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
      radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(96, 165, 250, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
}

.spt-container-122 {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.spt-section-title-122 {
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 100px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(167, 139, 250, 0.5);

  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #a78bfa, #60a5fa, #34d399);
    margin: 24px auto 0;
    border-radius: 2px;
  }
}

.spt-parallax-sections-122 {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.spt-section-122 {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.spt-text-layer-122 {
  position: absolute;
  z-index: 10;
  text-align: center;
  width: 100%;
  padding: 0 40px;
}

.spt-text-122 {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 60px rgba(167, 139, 250, 0.6);
  line-height: 1;
  will-change: transform;
}

.spt-image-layer-122 {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.15;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
  }
}

.spt-progress-122 {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 100;
}

.spt-progress-bar-122 {
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #a78bfa, #60a5fa, #34d399);
  border-radius: 2px;
  min-width: 200px;
}

.spt-progress-dots-122 {
  display: flex;
  gap: 12px;
}

.spt-dot-122 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &.spt-active-122 {
    background: linear-gradient(135deg, #a78bfa, #60a5fa);
    transform: scale(1.3);
    box-shadow: 0 0 20px rgba(167, 139, 250, 0.6);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.2);
  }
}

@media (max-width: 768px) {
  .spt-text-122 {
    font-size: clamp(3rem, 8vw, 5rem);
  }

  .spt-progress-bar-122 {
    min-width: 150px;
  }

  .spt-section-title-122 {
    margin-bottom: 60px;
  }
}
</style>
