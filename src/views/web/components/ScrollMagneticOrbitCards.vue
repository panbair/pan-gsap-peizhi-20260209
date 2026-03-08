<template>
  <div class="smoc-magnetic-orbit-cards-section-158" ref="componentRoot">
    <div class="smoc-container-158">
      <h2 class="smoc-title-158">磁力轨道卡片</h2>
      <p class="smoc-subtitle-158">Magnetic Orbit Cards</p>

      <div class="smoc-stage-158">
        <div class="smoc-orbit-center-158" ref="orbitCenter">
          <div class="smoc-center-content-158">
            <div class="smoc-center-icon-158">🌟</div>
            <div class="smoc-center-text-158">核心</div>
          </div>
          <div class="smoc-orbit-rings-158">
            <div class="smoc-ring-158" v-for="i in 3" :key="i" :style="`--size: ${300 + i * 100}px`"></div>
          </div>
        </div>

        <div class="smoc-cards-158">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="smoc-orbit-card-158"
            :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
            :style="{
              '--angle': index * 45,
              '--radius': 200 + index * 30,
              '--delay': index * 0.1
            }"
          >
            <div class="smoc-card-inner-158">
              <div class="smoc-card-image-158" :style="{ backgroundImage: `url(${card.image})` }"></div>
              <div class="smoc-card-content-158">
                <span class="smoc-card-number-158">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3 class="smoc-card-title-158">{{ card.title }}</h3>
                <p class="smoc-card-desc-158">{{ card.description }}</p>
              </div>
            </div>
            <div class="smoc-magnetic-field-158"></div>
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

const componentRoot = ref<HTMLElement>()
const orbitCenter = ref<HTMLElement>()
const cardRefs = ref<HTMLElement[]>([])

interface Card {
  image: string
  title: string
  description: string
}

const cards: Card[] = [
  {
    image: new URL('@/assets/image/1.png', import.meta.url).href,
    title: '引力',
    description: 'Gravity'
  },
  {
    image: new URL('@/assets/image/2.png', import.meta.url).href,
    title: '轨道',
    description: 'Orbit'
  },
  {
    image: new URL('@/assets/image/3.png', import.meta.url).href,
    title: '磁力',
    description: 'Magnetic'
  },
  {
    image: new URL('@/assets/image/4.png', import.meta.url).href,
    title: '旋转',
    description: 'Rotate'
  }
]

let ctx: gsap.Context
let orbitTimeline: gsap.core.Timeline | null = null

onMounted(() => {
  setTimeout(() => {
    if (!componentRoot.value) return
    ctx = gsap.context(() => {
      const titleEl = gsap.utils.toArray<HTMLElement>('.smoc-title-158', componentRoot.value)
      const subtitleEl = gsap.utils.toArray<HTMLElement>('.smoc-subtitle-158', componentRoot.value)
      const orbitCards = gsap.utils.toArray<HTMLElement>('.smoc-orbit-card-158', componentRoot.value)
      const stageEl = gsap.utils.toArray<HTMLElement>('.smoc-stage-158', componentRoot.value)
      const cardImages = gsap.utils.toArray<HTMLElement>('.smoc-card-image-158', componentRoot.value)
      const cardTitles = gsap.utils.toArray<HTMLElement>('.smoc-card-title-158', componentRoot.value)
      const cardDescs = gsap.utils.toArray<HTMLElement>('.smoc-card-desc-158', componentRoot.value)
      const cardNumbers = gsap.utils.toArray<HTMLElement>('.smoc-card-number-158', componentRoot.value)
      const orbitRings = gsap.utils.toArray<HTMLElement>('.smoc-ring-158', componentRoot.value)

      // 标题动画
      if (titleEl.length) {
        gsap.from(titleEl, {
          scrollTrigger: {
            trigger: componentRoot.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        })
      }

      if (subtitleEl.length) {
        gsap.from(subtitleEl, {
          scrollTrigger: {
            trigger: componentRoot.value,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        })
      }

      // 轨道环动画
      if (orbitRings.length) {
        gsap.from(orbitRings, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'elastic.out(1, 0.5)'
        })

        // 轨道环持续旋转
        orbitRings.forEach((ring: HTMLElement, index: number) => {
          gsap.to(ring, {
            rotation: 360,
            duration: 20 + index * 10,
            repeat: -1,
            ease: 'none'
          })
        })
      }

      // 卡片轨道动画
      if (orbitCards.length) {
        gsap.from(orbitCards, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 65%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        })

        // 持续轨道旋转
        orbitTimeline = gsap.timeline({ repeat: -1, ease: 'none' })
        orbitTimeline.to(orbitCards, {
          rotation: (i) => `+=360`,
          duration: 30,
          ease: 'none'
        })
      }

      // 卡片内容动画
      if (cardImages.length) {
        gsap.from(cardImages, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          scale: 1.5,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          delay: 0.5,
          ease: 'power2.out'
        })
      }

      if (cardNumbers.length) {
        gsap.from(cardNumbers, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          x: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.7,
          ease: 'power3.out'
        })
      }

      if (cardTitles.length) {
        gsap.from(cardTitles, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.9,
          ease: 'power3.out'
        })
      }

      if (cardDescs.length) {
        gsap.from(cardDescs, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 1.1,
          ease: 'power3.out'
        })
      }

      // 卡片磁力悬停效果
      cardRefs.value.forEach((card, index) => {
        if (!card) return

        card.addEventListener('mouseenter', (e) => {
          gsap.to(card, {
            scale: 1.2,
            boxShadow: '0 30px 60px rgba(139, 92, 246, 0.4)',
            duration: 0.4,
            ease: 'power2.out'
          })

          gsap.to(card.querySelector('.smoc-card-image-158'), {
            scale: 1.1,
            duration: 0.4,
            ease: 'power2.out'
          })

          // 磁力场效果
          gsap.to(card.querySelector('.smoc-magnetic-field-158'), {
            opacity: 1,
            scale: 1.5,
            duration: 0.4,
            ease: 'power2.out'
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            duration: 0.4,
            ease: 'power2.out'
          })

          gsap.to(card.querySelector('.smoc-card-image-158'), {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          })

          gsap.to(card.querySelector('.smoc-magnetic-field-158'), {
            opacity: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
          })
        })

        // 磁力跟随效果
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(card, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })

      // 滚动控制轨道速度
      if (stageEl.length) {
        ScrollTrigger.create({
          trigger: stageEl[0],
          start: 'top 80%',
          end: 'bottom 20%',
          onUpdate: (self) => {
            const speed = 0.5 + self.progress * 2
            if (orbitTimeline) {
              orbitTimeline.timeScale(speed)
            }
          }
        })
      }
    }, componentRoot.value)
  }, 100)
})

onUnmounted(() => {
  ctx?.revert()
  if (orbitTimeline) {
    orbitTimeline.kill()
  }
})
</script>

<style scoped lang="scss">
.smoc-magnetic-orbit-cards-section-158 {
  min-height: 150vh;
  padding: 100px 20px;
  background: radial-gradient(ellipse at center, #1a0a2a 0%, #0a0a1a 70%);
  position: relative;
  overflow: hidden;
}

.smoc-container-158 {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
}

.smoc-title-158 {
  text-align: center;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #8b5cf6, #d946ef, #f97316);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 60px rgba(139, 92, 246, 0.5);
}

.smoc-subtitle-158 {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(139, 92, 246, 0.6);
  margin-bottom: 80px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.smoc-stage-158 {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smoc-orbit-center-158 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.smoc-center-content-158 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #d946ef);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(139, 92, 246, 0.6);
  animation: pulse 2s ease-in-out infinite;
}

.smoc-center-icon-158 {
  font-size: 2.5rem;
}

.smoc-center-text-158 {
  font-size: 0.8rem;
  color: #fff;
  font-weight: 600;
  margin-top: 5px;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 60px rgba(139, 92, 246, 0.6);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 80px rgba(139, 92, 246, 0.8);
  }
}

.smoc-orbit-rings-158 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.smoc-ring-158 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 50%;
}

.smoc-cards-158 {
  position: absolute;
  width: 100%;
  height: 100%;
}

.smoc-orbit-card-158 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(var(--angle)deg) translateX(var(--radius)) rotate(calc(var(--angle) * -1));
  will-change: transform;
}

.smoc-card-inner-158 {
  position: relative;
  width: 220px;
  background: rgba(30, 20, 40, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(139, 92, 246, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.smoc-card-image-158 {
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;
}

.smoc-card-content-158 {
  position: relative;
  padding: 20px;
}

.smoc-card-number-158 {
  position: absolute;
  top: -30px;
  left: 20px;
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #8b5cf6, #d946ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.smoc-card-title-158 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.smoc-card-desc-158 {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.smoc-magnetic-field-158 {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  opacity: 0;
  pointer-events: none;
  transition: opacity, transform 0.4s ease;
}

@media (max-width: 768px) {
  .smoc-orbit-card-158 {
    transform: rotate(var(--angle)deg) translateX(calc(var(--radius) * 0.6)) rotate(calc(var(--angle) * -1));
  }

  .smoc-card-inner-158 {
    width: 180px;
  }

  .smoc-card-image-158 {
    height: 120px;
  }

  .smoc-card-number-158 {
    font-size: 2rem;
    top: -20px;
  }

  .smoc-card-title-158 {
    font-size: 1.2rem;
  }

  .smoc-card-desc-158 {
    font-size: 0.8rem;
  }
}
</style>
