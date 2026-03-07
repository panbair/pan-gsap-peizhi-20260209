<template>
  <div class="stacked-cards-41">
    <div class="st-container-41">
      <h2 class="st-section-title-41">堆叠卡片</h2>

      <div class="st-stack-container-41" ref="stackContainer">
        <div
          class="st-stack-card-41"
          v-for="(img, index) in images"
          :key="index"
          :style="{
            transform: `translateX(${(index - activeIndex) * 50}px) scale(${index === activeIndex ? 1.1 : 1 - Math.abs(index - activeIndex) * 0.15})`,
            opacity: index === activeIndex ? 1 : 0.6,
            zIndex: images.length - Math.abs(index - activeIndex)
          }"
          @mouseenter="activeIndex = index"
          ref="items"
        >
          <div class="st-card-inner-41">
            <img :src="img" :alt="`Image ${index + 1}`" />
            <div class="st-card-content-41">
              <span class="st-card-index-41">{{ index + 1 }}</span>
              <h3 class="st-card-heading-41">{{ headings[index] }}</h3>
              <p class="st-card-text-41">Stack Effect</p>
            </div>
          </div>
        </div>
      </div>

      <div class="st-stack-nav-41">
        <button class="st-nav-btn-41 prev-41" @click="prevCard">←</button>
        <div class="st-dots-41">
          <span
            v-for="(_, index) in images"
            :key="index"
            class="st-dot-41"
            :class="{ 'st-active-41': activeIndex === index }"
            @click="activeIndex = index"
          ></span>
        </div>
        <button class="st-nav-btn-41 next-41" @click="nextCard">→</button>
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
const stackContainer = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const images = [
  new URL('@/assets/image/1.png', import.meta.url).href,
  new URL('@/assets/image/2.png', import.meta.url).href,
  new URL('@/assets/image/3.png', import.meta.url).href,
  new URL('@/assets/image/4.png', import.meta.url).href,
  new URL('@/assets/image/5.png', import.meta.url).href,
  new URL('@/assets/image/6.png', import.meta.url).href
]

const headings = ['探索', '创造', '设计', '灵感', '艺术', '未来']

const prevCard = () => {
  gsap.to({}, {
    duration: 0.3,
    onComplete: () => {
      activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : images.length - 1
    }
  })
}

const nextCard = () => {
  gsap.to({}, {
    duration: 0.3,
    onComplete: () => {
      activeIndex.value = activeIndex.value < images.length - 1 ? activeIndex.value + 1 : 0
    }
  })
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.st-section-title-41', {
      scrollTrigger: {
        trigger: '.st-section-title-41',
        start: 'top 90%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // 卡片入场
    gsap.from('.st-stack-card-41', {
      scrollTrigger: {
        trigger: '.st-stack-container-41',
        start: 'top 80%'
      },
      opacity: 0,
      scale: 0.5,
      x: -200,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1
    })

    // 导航按钮动画
    gsap.from('.st-nav-btn-41', {
      scrollTrigger: {
        trigger: '.st-stack-nav-41',
        start: 'top 85%'
      },
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(2)',
      stagger: 0.2
    })

    // 指示点动画
    gsap.from('.st-dot-41', {
      scrollTrigger: {
        trigger: '.st-dots-41',
        start: 'top 85%'
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.5)',
      stagger: 0.08
    })

    items.value.forEach((item, index) => {
      const img = item.querySelector('img') as HTMLElement
      const content = item.querySelector('.st-card-content-41') as HTMLElement
      const cardIndex = item.querySelector('.st-card-index-41') as HTMLElement

      // 图片缩放
      gsap.fromTo(img,
        { scale: 1.3 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 30%',
            scrub: true
          },
          ease: 'power2.out'
        }
      )

      // 滚动时轻微旋转
      gsap.to(img, {
        rotate: (index - 3) * 10,
        scrollTrigger: {
          trigger: item,
          start: 'top 100%',
          end: 'bottom 0%',
          scrub: 1
        },
        ease: 'none'
      })

      // 内容渐入
      gsap.fromTo(content,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true
          }
        }
      )

      // 索引缩放
      gsap.fromTo(cardIndex,
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          scrollTrigger: {
            trigger: item,
            start: 'top 65%',
            end: 'top 25%',
            scrub: true
          }
        }
      )
    })

    // 滚动时整体移动
    gsap.to('.st-stack-container-41', {
      scrollTrigger: {
        trigger: '.st-stack-container-41',
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: 0.5
      },
      x: 50,
      ease: 'none'
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.stacked-cards-41 {
  min-height: 120vh;
  padding: 100px 0;
  background: linear-gradient(180deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
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
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
}

.st-container-41 {
  width: 100%;
  max-width: 1400px;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

.st-section-title-41 {
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(102, 126, 234, 0.5);

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    margin: 20px auto 0;
    border-radius: 2px;
  }
}

.st-stack-container-41 {
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  margin-bottom: 60px;
}

.st-stack-card-41 {
  position: absolute;
  width: 320px;
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  background: #fff;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  transform-style: preserve-3d;

  &:hover {
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
  }
}

.st-card-inner-41 {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.st-stack-card-41 img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.st-stack-card-41:hover img {
  filter: brightness(1.1);
}

.st-card-content-41 {
  padding: 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
}

.st-card-index-41 {
  display: block;
  font-size: 3.5rem;
  font-weight: 900;
  color: #fff;
  opacity: 0.9;
  margin-bottom: -15px;
  font-family: 'Arial', sans-serif;
}

.st-card-heading-41 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 5px;
}

.st-card-text-41 {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.st-stack-nav-41 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.st-nav-btn-41 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(102, 126, 234, 0.8);
    border-color: #667eea;
    transform: scale(1.1);
  }
}

.st-dots-41 {
  display: flex;
  gap: 12px;
}

.st-dot-41 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active-41 {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-color: transparent;
    transform: scale(1.3);
  }

  &:hover {
    transform: scale(1.2);
    border-color: #667eea;
  }
}

@media (max-width: 768px) {
  .st-stack-card-41 {
    width: 260px;
    height: 350px;
  }

  .st-stack-card-41 img {
    height: 260px;
  }

  .st-section-title-41 {
    font-size: 2rem;
  }
}
</style>
