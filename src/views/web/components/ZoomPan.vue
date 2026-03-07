<template>
  <div class="zp-zoom-pan-section">
    <div class="zp-section-header">
      <h2 class="zp-title">ZOOM PAN GALLERY</h2>
      <p class="zp-subtitle">缩放平移效果</p>
    </div>

    <div class="zp-zoom-pan-container">
      <div class="zp-zoom-pan-card" v-for="(card, index) in cards" :key="index">
        <div class="zp-card-inner">
          <div class="zp-card-bg" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="zp-card-overlay"></div>
          <div class="zp-card-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="zp-card-content">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="zp-zoom-hint">滚动查看缩放平移效果</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = ref([
  { image: new URL('@/assets/image/1.png', import.meta.url).href, title: 'Urban Life', description: 'City stories unfold' },
  { image: new URL('@/assets/image/2.png', import.meta.url).href, title: 'Nature\'s Art', description: 'Beauty in every leaf' },
  { image: new URL('@/assets/image/3.png', import.meta.url).href, title: 'Ocean Tales', description: 'Deep blue mysteries' },
  { image: new URL('@/assets/image/4.png', import.meta.url).href, title: 'Mountain High', description: 'Touching the sky' },
  { image: new URL('@/assets/image/5.png', import.meta.url).href, title: 'Desert Dreams', description: 'Golden horizons' },
  { image: new URL('@/assets/image/6.png', import.meta.url).href, title: 'Forest Paths', description: 'Into the wild' }
])

let ctx: gsap.Context

const initAnimations = () => {
  ctx = gsap.context(() => {
    // 标题入场
    gsap.from('.zp-zoom-pan-section .zp-title', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8
    })

    // 副标题入场
    gsap.from('.zp-zoom-pan-section .zp-subtitle', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.8,
      delay: 0.2
    })

    // 卡片从两侧入场
    gsap.from('.zp-zoom-pan-card', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-container',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      x: (i) => i % 2 === 0 ? -200 : 200,
      opacity: 0,
      scale: 0.8,
      rotationY: (i) => i % 2 === 0 ? -30 : 30,
      stagger: {
        each: 0.15,
        ease: 'power2.out'
      },
      ease: 'power3.out',
      duration: 1
    })

    // 背景图片缩放平移
    gsap.to('.zp-card-bg', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      scale: 1.3,
      x: (i) => (i % 2 === 0 ? 30 : -30) + '%',
      ease: 'none'
    })

    // 覆盖层渐变
    gsap.to('.zp-card-overlay', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-container',
        start: 'top 60%',
        end: 'top 20%',
        scrub: true
      },
      opacity: 0.7,
      ease: 'none'
    })

    // 数字旋转缩放
    gsap.to('.zp-zoom-pan-card .zp-card-number', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      rotation: 360,
      scale: 1.2,
      ease: 'none'
    })

    // 内容从底部滑入
    gsap.from('.zp-zoom-pan-card .zp-card-content', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-container',
        start: 'top 50%',
        toggleActions: 'play none none reverse'
      },
      y: 60,
      opacity: 0,
      stagger: {
        each: 0.1,
        ease: 'power2.out'
      },
      ease: 'power3.out',
      duration: 0.8
    })

    // 滚动时内容向上移动
    gsap.to('.zp-zoom-pan-card .zp-card-content', {
      scrollTrigger: {
        trigger: '.zp-zoom-pan-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -30,
      ease: 'none'
    })

    // 提示文字渐入
    gsap.from('.zp-zoom-hint', {
      scrollTrigger: {
        trigger: '.zp-zoom-hint',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.6
    })

    // 悬停效果 - 使用gsap.utils.toArray自动清理
    gsap.utils.toArray('.zp-zoom-pan-card').forEach((card: Element) => {
      const cardEl = card as HTMLElement
      cardEl.addEventListener('mouseenter', () => {
        gsap.to(cardEl.querySelector('.zp-card-bg'), {
          scale: 1.5,
          duration: 0.6,
          ease: 'power2.out'
        })
        gsap.to(cardEl.querySelector('.zp-card-content'), {
          y: -10,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(cardEl.querySelector('.zp-card-number'), {
          scale: 1.3,
          rotation: 180,
          duration: 0.5,
          ease: 'power2.out'
        })
      })

      cardEl.addEventListener('mouseleave', () => {
        gsap.to(cardEl.querySelector('.zp-card-bg'), {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
        gsap.to(cardEl.querySelector('.zp-card-content'), {
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(cardEl.querySelector('.zp-card-number'), {
          scale: 1,
          rotation: 0,
          duration: 0.5,
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
})
</script>

<style scoped>
.zp-zoom-pan-section {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b4e 100%);
  position: relative;
  overflow: hidden;
}

.zp-section-header {
  text-align: center;
  margin-bottom: 80px;
}

.zp-title {
  font-size: 56px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 8px;
  text-transform: uppercase;
  text-shadow: 0 0 30px rgba(138, 43, 226, 0.5);
}

.zp-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.zp-zoom-pan-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
}

.zp-zoom-pan-card {
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: box-shadow 0.4s ease;
}

.zp-zoom-pan-card:hover {
  box-shadow: 0 25px 70px rgba(138, 43, 226, 0.3);
}

.zp-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.zp-card-bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}

.zp-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.zp-card-number {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: rgba(138, 43, 226, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: 2px solid rgba(138, 43, 226, 0.5);
  transition: all 0.5s ease;
}

.zp-card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 32px;
  transform: translateZ(30px);
}

.zp-card-content h3 {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.zp-card-content p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.zp-zoom-hint {
  text-align: center;
  margin-top: 60px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .zp-title {
    font-size: 32px;
    letter-spacing: 4px;
  }

  .zp-subtitle {
    font-size: 14px;
  }

  .zp-zoom-pan-container {
    gap: 24px;
  }

  .zp-zoom-pan-card {
    height: 320px;
  }
}
</style>
