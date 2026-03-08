<template>
  <div class="accordion-section-65">
    <div class="ac-header-65">
      <h2 class="ac-title-65">手风琴卡片</h2>
      <p class="ac-subtitle-65">Accordion Cards</p>
    </div>

    <div class="accordion-container-65">
      <div
        v-for="(item, index) in items"
        :key="index"
        ref="cards"
        class="accordion-card-65"
        :class="{ 'ac-active-65': activeIndex === index }"
        @click="toggleCard(index)"
      >
        <div class="ac-card-header-65">
          <span class="ac-card-number-65">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3 class="ac-card-title-65">{{ item.title }}</h3>
          <span class="ac-arrow-65" :class="{ 'ac-arrow-rotate-65': activeIndex === index }">▼</span>
        </div>
        <div class="ac-card-content-65" ref="cardContent">
          <div class="ac-content-inner-65">
            <div class="ac-content-image-65" :style="{ backgroundImage: `url(${item.image})` }"></div>
            <p class="ac-content-text-65">{{ item.description }}</p>
            <div class="ac-content-features-65">
              <span v-for="(feature, i) in item.features" :key="i" class="ac-feature-tag-65">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ac-controls-65">
      <button class="ac-btn-65" @click="expandAll">全部展开</button>
      <button class="ac-btn-65" @click="collapseAll">全部收起</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const activeIndex = ref(0)
const cards = ref<HTMLElement[]>([])
const cardContent = ref<HTMLElement[]>([])

const items = [
  {
    title: '产品设计',
    image: new URL('@/assets/image/1.png', import.meta.url).href,
    description: '创造美观且实用的用户体验，注重细节和交互设计，打造令人印象深刻的产品界面。',
    features: ['用户研究', '原型设计', '视觉设计']
  },
  {
    title: '技术开发',
    image: new URL('@/assets/image/2.png', import.meta.url).href,
    description: '采用最新的技术栈和开发方法，构建高性能、可扩展的应用程序。',
    features: ['前端开发', '后端架构', '性能优化']
  },
  {
    title: '数据分析',
    image: new URL('@/assets/image/3.png', import.meta.url).href,
    description: '深入挖掘数据价值，提供有价值的洞察和建议，助力业务决策。',
    features: ['数据可视化', '趋势分析', '智能预测']
  },
  {
    title: '营销策略',
    image: new URL('@/assets/image/4.png', import.meta.url).href,
    description: '制定全面的营销计划，提升品牌知名度和用户参与度，实现商业目标。',
    features: ['品牌推广', '内容营销', '增长黑客']
  },
  {
    title: '客户服务',
    image: new URL('@/assets/image/5.png', import.meta.url).href,
    description: '提供优质的客户支持，及时解决问题，提升客户满意度和忠诚度。',
    features: ['快速响应', '问题解决', '持续跟进']
  }
]

let ctx: gsap.Context

const toggleCard = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1
  } else {
    activeIndex.value = index
  }

  cards.value.forEach((card, i) => {
    const content = card.querySelector('.ac-card-content-65') as HTMLElement
    const arrow = card.querySelector('.ac-arrow-65') as HTMLElement

    if (i === activeIndex.value) {
      gsap.to(content, { height: 'auto', duration: 0.5, ease: 'power3.out' })
      gsap.to(arrow, { rotation: 180, duration: 0.3, ease: 'power2.out' })
    } else {
      gsap.to(content, { height: 0, duration: 0.4, ease: 'power3.in' })
      gsap.to(arrow, { rotation: 0, duration: 0.3, ease: 'power2.out' })
    }
  })
}

const expandAll = () => {
  cards.value.forEach((card, i) => {
    setTimeout(() => {
      activeIndex.value = i
      const content = card.querySelector('.ac-card-content-65') as HTMLElement
      const arrow = card.querySelector('.ac-arrow-65') as HTMLElement
      gsap.to(content, { height: 'auto', duration: 0.5, ease: 'power3.out' })
      gsap.to(arrow, { rotation: 180, duration: 0.3, ease: 'power2.out' })
    }, i * 100)
  })
}

const collapseAll = () => {
  activeIndex.value = -1
  cards.value.forEach((card) => {
    const content = card.querySelector('.ac-card-content-65') as HTMLElement
    const arrow = card.querySelector('.ac-arrow-65') as HTMLElement
    gsap.to(content, { height: 0, duration: 0.4, ease: 'power3.in' })
    gsap.to(arrow, { rotation: 0, duration: 0.3, ease: 'power2.out' })
  })
}

onMounted(() => {
  setTimeout(() => {
    ctx = gsap.context(() => {
      gsap.set('.ac-card-content-65', { height: 0, overflow: 'hidden' })

      setTimeout(() => {
        if (cards.value[0]) {
          const firstContent = cards.value[0].querySelector('.ac-card-content-65') as HTMLElement
          const firstArrow = cards.value[0].querySelector('.ac-arrow-65') as HTMLElement
          if (firstContent) {
            gsap.to(firstContent, {
              height: 'auto',
              duration: 0.5,
              ease: 'power3.out'
            })
          }
          if (firstArrow) {
            gsap.to(firstArrow, {
              rotation: 180,
              duration: 0.3,
              ease: 'power2.out'
            })
          }
        }
      }, 100)

      gsap.from('.ac-title-65', {
        scrollTrigger: { trigger: '.accordion-section-65', start: 'top 80%' },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.ac-subtitle-65', {
        scrollTrigger: { trigger: '.accordion-section-65', start: 'top 75%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
      })

      gsap.from('.accordion-card-65', {
        scrollTrigger: { trigger: '.accordion-container-65', start: 'top 70%' },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out'
      })

      gsap.from('.ac-btn-65', {
        scrollTrigger: { trigger: '.ac-controls-65', start: 'top 90%' },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out'
      })
    })
  }, 100)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.accordion-section-65 {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.ac-header-65 {
  text-align: center;
  margin-bottom: 60px;
}

.ac-title-65 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #e94560 0%, #533483 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ac-subtitle-65 {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 4px;
  text-transform: uppercase;
}

.accordion-container-65 {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.accordion-card-65 {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(233, 69, 96, 0.3);
    box-shadow: 0 8px 30px rgba(233, 69, 96, 0.2);
  }

  &.ac-active-65 {
    border-color: rgba(233, 69, 96, 0.5);
    background: rgba(233, 69, 96, 0.05);
  }
}

.ac-card-header-65 {
  display: flex;
  align-items: center;
  padding: 24px 32px;
  gap: 20px;
}

.ac-card-number-65 {
  font-size: 1.5rem;
  font-weight: 900;
  color: #e94560;
  min-width: 50px;
}

.ac-card-title-65 {
  flex: 1;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.ac-arrow-65 {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  transition: transform 0.3s ease;
}

.ac-arrow-rotate-65 {
  transform: rotate(180deg);
}

.ac-card-content-65 {
  overflow: hidden;
  height: 0;
  opacity: 1;
}

.ac-content-inner-65 {
  padding: 0 32px 32px;
}

.ac-content-image-65 {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 20px;
}

.ac-content-text-65 {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 16px;
}

.ac-content-features-65 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ac-feature-tag-65 {
  padding: 6px 14px;
  background: rgba(233, 69, 96, 0.2);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #e94560;
  border: 1px solid rgba(233, 69, 96, 0.3);
}

.ac-controls-65 {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.ac-btn-65 {
  padding: 14px 36px;
  background: linear-gradient(135deg, #533483 0%, #e94560 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(233, 69, 96, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(233, 69, 96, 0.4);
  }
}

@media (max-width: 768px) {
  .ac-title-65 {
    font-size: 2.2rem;
  }

  .ac-card-header-65 {
    padding: 18px 24px;
  }

  .ac-card-number-65 {
    font-size: 1.2rem;
    min-width: 40px;
  }

  .ac-card-title-65 {
    font-size: 1.1rem;
  }

  .ac-content-inner-65 {
    padding: 0 24px 24px;
  }

  .ac-content-image-65 {
    height: 160px;
  }
}
</style>
