<template>
  <div class="sir-section-102">
    <div class="sir-header-102">
      <h2 class="sir-title-102">图片揭示效果</h2>
      <p class="sir-desc-102">优雅的图片进入动画</p>
    </div>
    <div class="sir-grid-102">
      <div class="sir-card-102" v-for="(item, index) in imageItems" :key="index">
        <div class="sir-image-wrapper-102">
          <img :src="item.src" :alt="item.title" class="sir-image-102">
          <div class="sir-overlay-102"></div>
        </div>
        <div class="sir-info-102">
          <h3 class="sir-card-title-102">{{ item.title }}</h3>
          <p class="sir-card-text-102">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
})

const imageItems = ref([
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', title: '自然风光', desc: '探索大自然的美丽' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop', desc: '云雾缭绕的山峰' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop', title: '森林深处', desc: '神秘的自然世界' },
  { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop', title: '湖泊美景', desc: '宁静的水面倒影' }
])

let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo('.sir-title-102, .sir-desc-102',
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.sir-header-102',
          start: 'top 90%'
        }
      }
    )

    gsap.fromTo('.sir-card-102',
      { scale: 0.3, rotation: -20, opacity: 0, y: 200 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'back.out(2)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.sir-grid-102',
          start: 'top 85%'
        }
      }
    )

    gsap.fromTo('.sir-overlay-102',
      { scaleX: 1.5 },
      {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.sir-grid-102',
          start: 'top 85%'
        }
      }
    )
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.sir-section-102 {
  padding: 100px 20px;
  background: rgba(0, 0, 0, 0.2);
}

.sir-header-102 {
  text-align: center;
  margin-bottom: 60px;
}

.sir-title-102 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sir-desc-102 {
  font-size: 1.2rem;
  color: #a0aec0;
  font-weight: 300;
}

.sir-grid-102 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.sir-card-102 {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sir-card-102:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.sir-image-wrapper-102 {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.sir-image-102 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sir-overlay-102 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform-origin: left;
}

.sir-info-102 {
  padding: 24px;
}

.sir-card-title-102 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #f093fb;
}

.sir-card-text-102 {
  font-size: 1rem;
  color: #a0aec0;
  line-height: 1.6;
}
</style>
