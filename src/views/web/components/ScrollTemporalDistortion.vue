<template>
  <div class="std-temporal-distortion-section-163" ref="componentRoot">
    <div class="std-container-163">
      <h2 class="std-title-163">时空扭曲</h2>
      <p class="std-subtitle-163">Temporal Distortion</p>

      <div class="std-temporal-stage-163">
        <div class="std-time-vortex-163">
          <div class="std-vortex-ring-163" v-for="i in 8" :key="i" :style="`--size: ${100 + i * 50}px; --speed: ${10 + i}s`"></div>
          <div class="std-vortex-core-163"></div>
        </div>

        <div class="std-time-cards-163">
          <div
            v-for="(card, index) in timeCards"
            :key="index"
            class="std-time-card-163"
            :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
            :data-era="card.era"
            @mousemove="handleTimeMove($event, index)"
            @mouseleave="handleTimeLeave(index)"
          >
            <div class="std-time-glow-163" :style="{ background: card.glow }"></div>
            <div class="std-time-distortion-163">
              <div class="std-distortion-wave-163" v-for="i in 3" :key="i"></div>
            </div>

            <div class="std-card-time-163">
              <div class="std-time-display-163">
                <span class="std-time-eras-163">{{ card.era }}</span>
                <span class="std-time-year-163">{{ card.year }}</span>
              </div>
            </div>

            <div class="std-card-inner-163">
              <div class="std-card-image-163" :style="{ backgroundImage: `url(${card.image})` }">
                <div class="std-image-filter-163"></div>
              </div>
              <div class="std-card-content-163">
                <span class="std-card-number-163">{{ String(index + 1).padStart(2, '0') }}</span>
                <h3 class="std-card-title-163">{{ card.title }}</h3>
                <p class="std-card-desc-163">{{ card.description }}</p>
                <div class="std-timeline-163">
                  <div class="std-timeline-dot-163" v-for="i in 5" :key="i"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="std-space-particles-163">
          <div class="std-particle-163" v-for="i in 40" :key="i"></div>
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
const cardRefs = ref<HTMLElement[]>([])

interface TimeCard {
  image: string
  title: string
  description: string
  era: string
  year: string
  glow: string
}

const timeCards: TimeCard[] = [
  {
    image: new URL('@/assets/image/1.png', import.meta.url).href,
    title: '起源',
    description: 'Origins',
    era: 'PAST',
    year: '2000',
    glow: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)'
  },
  {
    image: new URL('@/assets/image/2.png', import.meta.url).href,
    title: '现在',
    description: 'Present',
    era: 'NOW',
    year: '2025',
    glow: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
  },
  {
    image: new URL('@/assets/image/3.png', import.meta.url).href,
    title: '未来',
    description: 'Future',
    era: 'AHEAD',
    year: '2050',
    glow: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
  },
  {
    image: new URL('@/assets/image/4.png', import.meta.url).href,
    title: '永恒',
    description: 'Eternal',
    era: 'BEYOND',
    year: '∞',
    glow: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)'
  }
]

let ctx: gsap.Context
let timeProgress = 0

const handleTimeMove = (event: MouseEvent, index: number) => {
  const card = cardRefs.value[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const y = ((event.clientY - rect.top) / rect.height) * 2 - 1

  const cardInner = card.querySelector('.std-card-inner-163') as HTMLElement
  if (cardInner) {
    gsap.to(cardInner, {
      rotateY: x * 15,
      rotateX: -y * 15,
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const glow = card.querySelector('.std-time-glow-163') as HTMLElement
  if (glow) {
    gsap.to(glow, {
      opacity: 0.6,
      scale: 1.3,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const distortion = card.querySelector('.std-time-distortion-163') as HTMLElement
  if (distortion) {
    const waves = distortion.querySelectorAll('.std-distortion-wave-163') as NodeListOf<HTMLElement>
    waves.forEach((wave, i) => {
      gsap.fromTo(wave,
        {
          scale: 0,
          opacity: 0.5
        },
        {
          scale: 3,
          opacity: 0,
          duration: 1.5,
          delay: i * 0.3,
          ease: 'power2.out'
        }
      )
    })
  }
}

const handleTimeLeave = (index: number) => {
  const card = cardRefs.value[index]
  if (!card) return

  const cardInner = card.querySelector('.std-card-inner-163') as HTMLElement
  if (cardInner) {
    gsap.to(cardInner, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  const glow = card.querySelector('.std-time-glow-163') as HTMLElement
  if (glow) {
    gsap.to(glow, {
      opacity: 0.4,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    if (!componentRoot.value) return
    ctx = gsap.context(() => {
      const titleEl = gsap.utils.toArray<HTMLElement>('.std-title-163', componentRoot.value)
      const subtitleEl = gsap.utils.toArray<HTMLElement>('.std-subtitle-163', componentRoot.value)
      const timeCards = gsap.utils.toArray<HTMLElement>('.std-time-card-163', componentRoot.value)
      const stageEl = gsap.utils.toArray<HTMLElement>('.std-temporal-stage-163', componentRoot.value)
      const vortexRings = gsap.utils.toArray<HTMLElement>('.std-vortex-ring-163', componentRoot.value)
      const vortexCore = gsap.utils.toArray<HTMLElement>('.std-vortex-core-163', componentRoot.value)
      const timeDisplays = gsap.utils.toArray<HTMLElement>('.std-time-display-163', componentRoot.value)
      const cardImages = gsap.utils.toArray<HTMLElement>('.std-card-image-163', componentRoot.value)
      const cardNumbers = gsap.utils.toArray<HTMLElement>('.std-card-number-163', componentRoot.value)
      const cardTitles = gsap.utils.toArray<HTMLElement>('.std-card-title-163', componentRoot.value)
      const cardDescs = gsap.utils.toArray<HTMLElement>('.std-card-desc-163', componentRoot.value)
      const timelineDots = gsap.utils.toArray<HTMLElement>('.std-timeline-dot-163', componentRoot.value)
      const particles = gsap.utils.toArray<HTMLElement>('.std-particle-163', componentRoot.value)

      // 标题动画 - 时空扭曲效果
      if (titleEl.length) {
        gsap.from(titleEl, {
          scrollTrigger: {
            trigger: componentRoot.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          scaleX: 1.5,
          duration: 1.2,
          ease: 'power3.out'
        })

        // 标题持续扭曲
        gsap.to(titleEl, {
          scaleX: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
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

      // 时间漩涡动画
      if (vortexRings.length) {
        gsap.from(vortexRings, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.5)'
        })

        // 漩涡持续旋转
        vortexRings.forEach((ring: HTMLElement) => {
          const speed = parseFloat(ring.style.getPropertyValue('--speed')) || 10
          gsap.to(ring, {
            rotation: 360,
            duration: speed,
            repeat: -1,
            ease: 'none'
          })
        })
      }

      if (vortexCore.length) {
        gsap.from(vortexCore, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 1,
          delay: 1,
          ease: 'elastic.out(1, 0.5)'
        })

        // 漩涡核心脉冲
        gsap.to(vortexCore, {
          scale: 1.2,
          opacity: 0.8,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        })
      }

      // 时间卡片动画
      if (timeCards.length) {
        gsap.from(timeCards, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          y: 120,
          opacity: 0,
          scale: 0.7,
          skewX: 10,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        })

        // 时间卡片持续漂浮
        timeCards.forEach((card: HTMLElement, index: number) => {
          gsap.to(card, {
            y: -15,
            skewX: (index % 2 === 0 ? 2 : -2),
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4
          })
        })
      }

      // 时间显示动画
      if (timeDisplays.length) {
        gsap.from(timeDisplays, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 65%',
            toggleActions: 'play none none reverse'
          },
          y: -30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: 'power3.out'
        })
      }

      // 卡片内容动画
      if (cardImages.length) {
        gsap.from(cardImages, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 65%',
            toggleActions: 'play none none reverse'
          },
          scale: 1.3,
          opacity: 0,
          rotateX: 90,
          duration: 1,
          stagger: 0.2,
          delay: 0.5,
          ease: 'back.out(2)'
        })
      }

      if (cardNumbers.length) {
        gsap.from(cardNumbers, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          },
          x: -40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
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
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
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
          duration: 0.6,
          stagger: 0.2,
          delay: 1.1,
          ease: 'power3.out'
        })
      }

      // 时间线动画
      if (timelineDots.length) {
        gsap.from(timelineDots, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 55%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 1.2,
          ease: 'back.out(1.7)'
        })

        // 时间线持续闪烁
        gsap.to(timelineDots, {
          opacity: 0.3 + Math.random() * 0.7,
          duration: 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        })
      }

      // 空间粒子动画
      if (particles.length) {
        gsap.from(particles, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 1.5,
          stagger: {
            each: 0.05,
            from: 'random'
          },
          ease: 'elastic.out(1, 0.5)'
        })

        // 粒子持续运动
        particles.forEach((particle: HTMLElement) => {
          const duration = 4 + Math.random() * 6
          const delay = Math.random() * 3
          const endX = (Math.random() - 0.5) * 200
          const endY = (Math.random() - 0.5) * 200

          gsap.to(particle, {
            x: endX,
            y: endY,
            opacity: 0,
            duration,
            repeat: -1,
            delay,
            ease: 'none'
          })

          gsap.to(particle, {
            scale: 0,
            duration: 0.5,
            repeat: -1,
            delay,
            ease: 'power2.in'
          })
        })
      }

      // 滚动控制时空扭曲
      if (stageEl.length) {
        ScrollTrigger.create({
          trigger: stageEl[0],
          start: 'top 80%',
          end: 'bottom 20%',
          onUpdate: (self) => {
            timeProgress = self.progress
            const scale = 1 + timeProgress * 0.5
            const rotate = timeProgress * 360

            vortexRings.forEach((ring: HTMLElement) => {
              gsap.set(ring, {
                scale: scale * (0.5 + Math.random() * 0.5)
              })
            })

            if (vortexCore.length) {
              gsap.set(vortexCore[0], {
                rotate: rotate
              })
            }
          }
        })
      }
    }, componentRoot.value)
  }, 100)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.std-temporal-distortion-section-163 {
  min-height: 150vh;
  padding: 100px 20px;
  background: linear-gradient(180deg, #0a0510 0%, #150a20 30%, #100a15 60%, #150a20 100%);
  position: relative;
  overflow: hidden;
}

.std-container-163 {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
}

.std-title-163 {
  text-align: center;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4, #ec4899, #8b5cf6);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

.std-subtitle-163 {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(139, 92, 246, 0.6);
  margin-bottom: 80px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.std-temporal-stage-163 {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
}

.std-time-vortex-163 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

.std-vortex-ring-163 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  border-style: dashed;
}

.std-vortex-core-163 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(10px);
}

.std-time-cards-163 {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  z-index: 2;
  max-width: 1200px;
}

.std-time-card-163 {
  position: relative;
  background: rgba(15, 10, 25, 0.9);
  border-radius: 20px;
  overflow: visible;
  cursor: pointer;
  perspective: 1000px;
  backdrop-filter: blur(20px);
}

.std-time-glow-163 {
  position: absolute;
  inset: -30px;
  opacity: 0.4;
  border-radius: 50px;
  pointer-events: none;
  transition: opacity, transform 0.4s ease;
  filter: blur(30px);
}

.std-time-distortion-163 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.std-distortion-wave-163 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 2px solid rgba(139, 92, 246, 0.5);
  border-radius: 50%;
}

.std-card-time-163 {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.std-time-display-163 {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 12px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
}

.std-time-eras-163 {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(139, 92, 246, 0.8);
  letter-spacing: 0.2em;
}

.std-time-year-163 {
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
}

.std-card-inner-163 {
  position: relative;
  padding: 30px;
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
}

.std-card-image-163 {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  background-size: cover;
  background-position: center;
}

.std-image-filter-163 {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(15, 10, 25, 0.9));
}

.std-card-content-163 {
  position: relative;
}

.std-card-number-163 {
  position: absolute;
  top: -30px;
  left: 30px;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.std-card-title-163 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.std-card-desc-163 {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}

.std-timeline-163 {
  display: flex;
  gap: 8px;
  align-items: center;
}

.std-timeline-dot-163 {
  width: 10px;
  height: 10px;
  background: rgba(139, 92, 246, 0.5);
  border-radius: 50%;
}

.std-space-particles-163 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.std-particle-163 {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%);
  border-radius: 50%;
}

@media (max-width: 768px) {
  .std-time-cards-163 {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .std-card-number-163 {
    font-size: 3rem;
    top: -20px;
  }

  .std-card-title-163 {
    font-size: 1.3rem;
  }
}
</style>
