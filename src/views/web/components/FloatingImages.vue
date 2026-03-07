<template>
  <div class="floating-images">
    <div class="container">
      <h2 class="section-title">浮动图片</h2>
      
      <div class="floating-container" ref="floatingContainer">
        <div 
          class="floating-item" 
          v-for="(img, index) in images" 
          :key="index"
          :style="getFloatStyle(index)"
          ref="items"
        >
          <div class="float-inner">
            <img :src="img" :alt="`Image ${index + 1}`" />
            <div class="float-overlay">
              <span class="float-number">{{ index + 1 }}</span>
              <h3 class="float-title">{{ titles[index] }}</h3>
            </div>
          </div>
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

const items = ref<HTMLElement[]>([])
const floatingContainer = ref<HTMLElement | null>(null)
const images = [
  new URL('@/assets/image/1.png', import.meta.url).href,
  new URL('@/assets/image/2.png', import.meta.url).href,
  new URL('@/assets/image/3.png', import.meta.url).href,
  new URL('@/assets/image/4.png', import.meta.url).href,
  new URL('@/assets/image/5.png', import.meta.url).href,
  new URL('@/assets/image/6.png', import.meta.url).href
]

const titles = ['漂浮一', '漂浮二', '漂浮三', '漂浮四', '漂浮五', '漂浮六']

const floatPositions = [
  { x: -150, y: -100 },
  { x: 150, y: -50 },
  { x: -80, y: 80 },
  { x: 80, y: -120 },
  { x: 180, y: 100 },
  { x: -120, y: 20 }
]

const getFloatStyle = (index: number) => {
  const pos = floatPositions[index]
  return {
    transform: `translate(${pos.x}px, ${pos.y}px)`
  }
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 90%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    items.value.forEach((item, index) => {
      const inner = item.querySelector('.float-inner') as HTMLElement
      const img = item.querySelector('img') as HTMLElement
      const overlay = item.querySelector('.float-overlay') as HTMLElement
      const number = item.querySelector('.float-number') as HTMLElement

      const pos = floatPositions[index]

      // 从中心扩散入场
      gsap.fromTo(item,
        {
          x: -pos.x * 2,
          y: -pos.y * 2,
          opacity: 0,
          scale: 0.5,
          rotate: (index - 2.5) * 20
        },
        {
          x: pos.x,
          y: pos.y,
          opacity: 1,
          scale: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 45%',
            toggleActions: 'play none none reverse'
          },
          duration: 1.2,
          ease: 'back.out(1.2)',
          delay: index * 0.15
        }
      )

      // 持续浮动动画
      gsap.to(item, {
        x: pos.x + (index % 2 === 0 ? 20 : -20),
        y: pos.y + (index % 2 === 0 ? -20 : 20),
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // 图片缩放淡入
      gsap.fromTo(img,
        { scale: 1.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 30%',
            scrub: true
          },
          ease: 'power2.out'
        }
      )

      // 滚动时旋转
      gsap.to(img, {
        rotate: (index - 2.5) * 15,
        scrollTrigger: {
          trigger: item,
          start: 'top 100%',
          end: 'bottom 0%',
          scrub: 1
        },
        ease: 'none'
      })

      // 覆盖层渐入
      gsap.fromTo(overlay,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true
          }
        }
      )

      // 数字旋转缩放
      gsap.fromTo(number,
        { rotate: -360, scale: 0, opacity: 0 },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 65%',
            end: 'top 25%',
            scrub: true
          }
        }
      )
    })

    // 滚动时整体旋转
    gsap.to('.floating-container', {
      rotate: 5,
      scrollTrigger: {
        trigger: '.floating-container',
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: 0.5
      },
      ease: 'none'
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.floating-images {
  min-height: 150vh;
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%);
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
    background: radial-gradient(circle, rgba(118, 75, 162, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 120px;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(118, 75, 162, 0.5);
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #764ba2, #667eea);
    margin: 20px auto 0;
    border-radius: 2px;
  }
}

.floating-container {
  position: relative;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.floating-item {
  position: absolute;
  width: 280px;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  background: #fff;
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    z-index: 100;
    transform: scale(1.1) !important;
    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.5);
  }
}

.float-inner {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.floating-item:hover img {
  filter: brightness(1.1) saturate(1.1);
}

.float-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  padding: 30px 20px 20px;
  pointer-events: none;
}

.float-number {
  display: block;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: -10px;
  font-family: 'Arial', sans-serif;
  opacity: 0.9;
}

.float-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .floating-item {
    width: 200px;
    height: 260px;
  }
  
  .float-number {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
