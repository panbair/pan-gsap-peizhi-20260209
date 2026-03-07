<template>
  <div class="stagger-grid">
    <div class="sg-container">
      <h2 class="sg-section-title">错开网格</h2>

      <div class="sg-grid-container">
        <div
          class="sg-grid-item"
          v-for="(img, index) in images"
          :key="index"
          ref="items"
        >
          <div class="sg-item-inner">
            <img :src="img" :alt="`Image ${index + 1}`" />
            <div class="sg-item-overlay">
              <span class="sg-item-number">{{ index + 1 }}</span>
              <h3 class="sg-item-title">Grid {{ index + 1 }}</h3>
            </div>
          </div>
        </div>
      </div>

      <button class="sg-replay-btn" @click="replayAnimation">重播动画</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = ref<HTMLElement[]>([])
const images = [
  new URL('@/assets/image/1.png', import.meta.url).href,
  new URL('@/assets/image/2.png', import.meta.url).href,
  new URL('@/assets/image/3.png', import.meta.url).href,
  new URL('@/assets/image/4.png', import.meta.url).href,
  new URL('@/assets/image/5.png', import.meta.url).href,
  new URL('@/assets/image/6.png', import.meta.url).href
]

let ctx: gsap.Context
let timeline: gsap.core.Timeline

const replayAnimation = () => {
  if (timeline) {
    timeline.restart()
  }
}

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.sg-section-title', {
      scrollTrigger: {
        trigger: '.sg-section-title',
        start: 'top 90%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // 创建错开动画时间轴
    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.sg-grid-container',
        start: 'top 80%'
      }
    })

    // 入场错开动画
    timeline.from(items.value, {
      y: 150,
      opacity: 0,
      scale: 0.5,
      rotateY: 90,
      duration: 1.2,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    })

    // 滚动触发动画
    items.value.forEach((item, index) => {
      const img = item.querySelector('img') as HTMLElement
      const overlay = item.querySelector('.sg-item-overlay') as HTMLElement
      const number = item.querySelector('.sg-item-number') as HTMLElement

      // 图片缩放
      gsap.fromTo(img,
        { scale: 1.4 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 30%',
            scrub: true
          },
          ease: 'power2.out'
        }
      )

      // 覆盖层错开淡入
      gsap.fromTo(overlay,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '.sg-grid-container',
            start: 'top 70%',
            end: 'top 30%',
            scrub: true
          },
          stagger: 0.1
        }
      )

      // 数字错开旋转
      gsap.fromTo(number,
        { rotate: -360, scale: 0 },
        {
          rotate: 0,
          scale: 1,
          scrollTrigger: {
            trigger: '.sg-grid-container',
            start: 'top 65%',
            end: 'top 25%',
            scrub: true
          },
          stagger: 0.12
        }
      )

      // 标题错开滑入
      gsap.from('.sg-item-title', {
        x: -30,
        opacity: 0,
        scrollTrigger: {
          trigger: '.sg-grid-container',
          start: 'top 60%',
          end: 'top 20%',
          scrub: true
        },
        stagger: 0.15,
        ease: 'power2.out'
      })
    })

    // 按钮动画
    gsap.from('.sg-replay-btn', {
      scrollTrigger: {
        trigger: '.sg-replay-btn',
        start: 'top 90%'
      },
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(2)'
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.stagger-grid {
  min-height: 120vh;
  padding: 100px 0;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
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
      radial-gradient(circle at 20% 40%, rgba(102, 126, 234, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 60%, rgba(240, 147, 251, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
}

.sg-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.sg-section-title {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 80px;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(102, 126, 234, 0.5);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #f093fb);
    margin: 20px auto 0;
    border-radius: 2px;
  }
}

.sg-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px 0;
}

.sg-grid-item {
  position: relative;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  background: #fff;
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4);
  }
}

.sg-grid-item:hover .sg-item-inner img {
  filter: brightness(1.1) saturate(1.1);
}

.sg-item-inner {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.sg-item-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.sg-item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  padding: 30px;
  pointer-events: none;
}

.sg-item-number {
  display: block;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: -15px;
  font-family: 'Arial', sans-serif;
  opacity: 0.9;
}

.sg-item-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.sg-replay-btn {
  display: block;
  margin: 60px auto 0;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
}

@media (max-width: 1024px) {
  .sg-grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .sg-grid-container {
    grid-template-columns: 1fr;
  }

  .sg-section-title {
    font-size: 2rem;
  }
}
</style>
