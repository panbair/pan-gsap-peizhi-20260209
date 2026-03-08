<template>
  <div class="cstack-section-70">
    <div class="cs-header-70">
      <h2 class="cs-title-70">卡片堆叠</h2>
      <p class="cs-subtitle-70">Card Stack Animation</p>
    </div>

    <div class="cstack-container-70">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="cstack-card-70"
        :class="{ 'cs-active-70': activeIndex === index }"
        :style="{ zIndex: cards.length - index, transform: `translateY(${index * 20}px)` }"
        @click="activateCard(index)"
      >
        <div class="cstack-content-70">
          <div class="cstack-image-70" :style="{ backgroundImage: `url(${card.image})` }">
            <div class="cstack-number-70">{{ String(index + 1).padStart(2, '0') }}</div>
          </div>
          <div class="cstack-info-70">
            <h3 class="cstack-title-70">{{ card.title }}</h3>
            <p class="cstack-desc-70">{{ card.description }}</p>
            <div class="cstack-tags-70">
              <span v-for="(tag, i) in card.tags" :key="i" class="cstack-tag-70">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cs-controls-70">
      <button class="cs-btn-70" @click="prevCard">
        <span>←</span>
        <span>上一个</span>
      </button>
      <button class="cs-btn-70" @click="nextCard">
        <span>下一个</span>
        <span>→</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activeIndex = ref(0)

const cards = [
  {
    title: '创意设计',
    description: '突破传统思维边界，创造独特视觉体验，让设计成为品牌的强力支撑。',
    image: new URL('@/assets/image/1.png', import.meta.url).href,
    tags: ['UI设计', '品牌', '插画']
  },
  {
    title: '技术开发',
    description: '运用前沿技术构建稳定高效的系统，为用户提供流畅的使用体验。',
    image: new URL('@/assets/image/2.png', import.meta.url).href,
    tags: ['前端', '后端', 'DevOps']
  },
  {
    title: '数据分析',
    description: '深入挖掘数据价值，通过科学分析为决策提供有力支持。',
    image: new URL('@/assets/image/3.png', import.meta.url).href,
    tags: ['大数据', 'AI', '可视化']
  },
  {
    title: '用户体验',
    description: '以用户为中心的设计理念，打造符合直觉和习惯的交互方式。',
    image: new URL('@/assets/image/4.png', import.meta.url).href,
    tags: ['交互', '可用性', '调研']
  },
  {
    title: '产品管理',
    description: '从需求到上线，全流程把控产品质量和交付进度。',
    image: new URL('@/assets/image/5.png', import.meta.url).href,
    tags: ['敏捷', '规划', '迭代']
  }
]

let ctx: gsap.Context

const activateCard = (index: number) => {
  activeIndex.value = index
  updateCardPositions()
}

const prevCard = () => {
  activeIndex.value = Math.max(0, activeIndex.value - 1)
  updateCardPositions()
}

const nextCard = () => {
  activeIndex.value = Math.min(cards.length - 1, activeIndex.value + 1)
  updateCardPositions()
}

const updateCardPositions = () => {
  const cardElements = document.querySelectorAll('.cstack-card-70') as NodeListOf<HTMLElement>

  cardElements.forEach((card, i) => {
    const isActive = i === activeIndex.value
    const yOffset = isActive ? 0 : Math.min((i - activeIndex.value) * 40, 200)
    const scale = isActive ? 1 : 1 - Math.min(Math.abs(i - activeIndex.value) * 0.1, 0.5)
    const opacity = isActive ? 1 : 1 - Math.min(Math.abs(i - activeIndex.value) * 0.3, 0.9)
    const brightness = isActive ? 1 : 0.5

    gsap.to(card, {
      y: Math.max(yOffset, -100),
      scale: scale,
      opacity: opacity,
      duration: 0.5,
      ease: 'power3.out'
    })

    const image = card.querySelector('.cstack-image-70') as HTMLElement
    if (image) {
      gsap.to(image, {
        filter: `brightness(${brightness}) saturate(${isActive ? 1 : 0.5})`,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    if (isActive) {
      gsap.to(card.querySelector('.cstack-title-70'), {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0.1,
        ease: 'power3.out'
      })
      gsap.to(card.querySelector('.cstack-desc-70'), {
        x: 0,
        opacity: 1,
        duration: 0.4,
        delay: 0.2,
        ease: 'power3.out'
      })
      gsap.to(card.querySelectorAll('.cstack-tag-70'), {
        x: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.4,
        delay: 0.3,
        ease: 'power3.out'
      })
    } else {
      gsap.to(card.querySelector('.cstack-title-70'), {
        x: -30,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
      gsap.to(card.querySelector('.cstack-desc-70'), {
        x: -30,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
      gsap.to(card.querySelectorAll('.cstack-tag-70'), {
        x: -30,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  })
}

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.cs-title-70', {
      scrollTrigger: { trigger: '.cstack-section-70', start: 'top 80%' },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })

    gsap.from('.cs-subtitle-70', {
      scrollTrigger: { trigger: '.cstack-section-70', start: 'top 75%' },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    })

    gsap.from('.cstack-card-70', {
      scrollTrigger: { trigger: '.cstack-container-70', start: 'top 70%' },
      y: 100,
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out'
    })

    gsap.from('.cs-btn-70', {
      scrollTrigger: { trigger: '.cs-controls-70', start: 'top 90%' },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    })

    gsap.set('.cstack-title-70, .cstack-desc-70, .cstack-tag-70', {
      x: -30,
      opacity: 0
    })

    setTimeout(() => {
      const firstCard = document.querySelector('.cstack-card-70') as HTMLElement
      if (firstCard) {
        gsap.to(firstCard.querySelector('.cstack-title-70'), {
          x: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.6,
          ease: 'power3.out'
        })
        gsap.to(firstCard.querySelector('.cstack-desc-70'), {
          x: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.7,
          ease: 'power3.out'
        })
        gsap.to(firstCard.querySelectorAll('.cstack-tag-70'), {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.4,
          delay: 0.8,
          ease: 'power3.out'
        })
      }
    }, 100)
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.cstack-section-70 {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  overflow: hidden;
}

.cs-header-70 {
  text-align: center;
  margin-bottom: 60px;
}

.cs-title-70 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cs-subtitle-70 {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 4px;
  text-transform: uppercase;
}

.cstack-container-70 {
  position: relative;
  max-width: 500px;
  height: 650px;
  margin: 0 auto;
  perspective: 1000px;
}

.cstack-card-70 {
  position: absolute;
  width: 100%;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.cstack-card-70.cs-active-70 {
  box-shadow: 0 25px 80px rgba(17, 153, 142, 0.4);
}

.cstack-content-70 {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.cstack-image-70 {
  position: relative;
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  transition: filter 0.5s ease;
}

.cstack-number-70 {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  box-shadow: 0 4px 15px rgba(17, 153, 142, 0.4);
}

.cstack-info-70 {
  padding: 32px;
}

.cstack-title-70 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.cstack-desc-70 {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 24px;
}

.cstack-tags-70 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cstack-tag-70 {
  padding: 6px 14px;
  background: rgba(17, 153, 142, 0.2);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #38ef7d;
  border: 1px solid rgba(17, 153, 142, 0.3);
}

.cs-controls-70 {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.cs-btn-70 {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(17, 153, 142, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(17, 153, 142, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
}

@media (max-width: 768px) {
  .cs-title-70 {
    font-size: 2.2rem;
  }

  .cstack-container-70 {
    height: 550px;
    max-width: 400px;
  }

  .cstack-image-70 {
    height: 260px;
  }

  .cstack-info-70 {
    padding: 24px;
  }

  .cstack-title-70 {
    font-size: 1.4rem;
  }
}
</style>
