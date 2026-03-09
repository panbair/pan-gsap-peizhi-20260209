<template>
  <div class="sld-liquid-distort-section-161" ref="componentRoot">
    <div class="sld-container-161">
      <h2 class="sld-title-161">液体扭曲</h2>
      <p class="sld-subtitle-161">Liquid Distortion</p>

      <div class="sld-liquid-stage-161">
        <canvas ref="liquidCanvas" class="sld-canvas-161"></canvas>

        <div class="sld-images-161">
          <div
            v-for="(item, index) in liquidItems"
            :key="index"
            class="sld-liquid-item-161"
            :ref="el => { if (el) itemRefs[index] = el as HTMLElement }"
            @mousemove="handleLiquidMove($event, index)"
            @mouseleave="handleLiquidLeave(index)"
          >
            <div class="sld-image-container-161">
              <div class="sld-image-161" :style="{ backgroundImage: `url(${item.image})` }"></div>
              <div class="sld-liquid-overlay-161"></div>
              <div class="sld-ripple-161" v-for="i in 5" :key="i"></div>
            </div>
            <div class="sld-item-content-161">
              <h3 class="sld-item-title-161">{{ item.title }}</h3>
              <p class="sld-item-desc-161">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div class="sld-particles-161">
          <div class="sld-particle-161" v-for="i in 30" :key="i"></div>
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
const liquidCanvas = ref<HTMLCanvasElement>()
const itemRefs = ref<HTMLElement[]>([])

interface LiquidItem {
  image: string
  title: string
  description: string
}

const liquidItems: LiquidItem[] = [
  {
    image: new URL('@/assets/image/1.png', import.meta.url).href,
    title: '流动',
    description: 'Flow'
  },
  {
    image: new URL('@/assets/image/2.png', import.meta.url).href,
    title: '波动',
    description: 'Wave'
  },
  {
    image: new URL('@/assets/image/3.png', import.meta.url).href,
    title: '涟漪',
    description: 'Ripple'
  },
  {
    image: new URL('@/assets/image/4.png', import.meta.url).href,
    title: '漩涡',
    description: 'Vortex'
  }
]

let gsapCtx: gsap.Context
let animationFrame: number | null = null
let resizeCanvas: () => void = () => {}

const handleLiquidMove = (event: MouseEvent, index: number) => {
  const item = itemRefs.value[index]
  if (!item) return

  const rect = item.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const y = ((event.clientY - rect.top) / rect.height) * 2 - 1

  const image = item.querySelector('.sld-image-161') as HTMLElement
  if (image) {
    gsap.to(image, {
      scale: 1.1 + Math.abs(x) * 0.1,
      translateX: x * 15,
      translateY: y * 15,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  const overlay = item.querySelector('.sld-liquid-overlay-161') as HTMLElement
  if (overlay) {
    gsap.to(overlay, {
      opacity: 0.4 + Math.abs(x) * 0.3,
      duration: 0.5,
      ease: 'power2.out'
    })
  }

  // 涟漪效果
  const ripples = item.querySelectorAll('.sld-ripple-161') as NodeListOf<HTMLElement>
  ripples.forEach((ripple, i) => {
    gsap.fromTo(ripple,
      {
        scale: 0,
        opacity: 0.5
      },
      {
        scale: 2,
        opacity: 0,
        duration: 1.5,
        delay: i * 0.2,
        ease: 'power2.out'
      }
    )
  })
}

const handleLiquidLeave = (index: number) => {
  const item = itemRefs.value[index]
  if (!item) return

  const image = item.querySelector('.sld-image-161') as HTMLElement
  if (image) {
    gsap.to(image, {
      scale: 1,
      translateX: 0,
      translateY: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
  }

  const overlay = item.querySelector('.sld-liquid-overlay-161') as HTMLElement
  if (overlay) {
    gsap.to(overlay, {
      opacity: 0.3,
      duration: 0.6,
      ease: 'power2.out'
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    if (!componentRoot.value) return

    // Canvas 液体动画
    const canvas = liquidCanvas.value
    if (!canvas) return

    resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.8
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const liquidCtx = canvas.getContext('2d')
    if (!liquidCtx) return

    const drops = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 30 + 10,
      speedY: Math.random() * 2 + 1,
      radiusGrow: Math.random() * 0.5 + 0.1
    }))

    const animateLiquid = () => {
      liquidCtx.clearRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop) => {
        drop.y += drop.speedY
        drop.radius += drop.radiusGrow

        if (drop.y > canvas.height + 50) {
          drop.y = -50
          drop.x = Math.random() * canvas.width
          drop.radius = Math.random() * 30 + 10
        }

        const gradient = liquidCtx.createRadialGradient(drop.x, drop.y, 0, drop.x, drop.y, drop.radius)
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)')
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)')
        gradient.addColorStop(1, 'transparent')

        liquidCtx.beginPath()
        liquidCtx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2)
        liquidCtx.fillStyle = gradient
        liquidCtx.fill()
      })

      animationFrame = requestAnimationFrame(animateLiquid)
    }

    animateLiquid()

    // GSAP 动画
    gsapCtx = gsap.context(() => {
      const titleEl = gsap.utils.toArray<HTMLElement>('.sld-title-161', componentRoot.value)
      const subtitleEl = gsap.utils.toArray<HTMLElement>('.sld-subtitle-161', componentRoot.value)
      const liquidItems = gsap.utils.toArray<HTMLElement>('.sld-liquid-item-161', componentRoot.value)
      const stageEl = gsap.utils.toArray<HTMLElement>('.sld-liquid-stage-161', componentRoot.value)
      const itemTitles = gsap.utils.toArray<HTMLElement>('.sld-item-title-161', componentRoot.value)
      const itemDescs = gsap.utils.toArray<HTMLElement>('.sld-item-desc-161', componentRoot.value)
      const particles = gsap.utils.toArray<HTMLElement>('.sld-particle-161', componentRoot.value)

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
          filter: 'blur(20px)',
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
          filter: 'blur(10px)',
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        })
      }

      // 液体项目动画
      if (liquidItems.length) {
        gsap.from(liquidItems, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: (i) => (i % 2 === 0 ? 5 : -5),
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        })

        // 液体项目持续波动
        liquidItems.forEach((item: HTMLElement, index: number) => {
          gsap.to(item, {
            y: -10,
            rotation: (index % 2 === 0 ? 2 : -2),
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3
          })
        })
      }

      // 内容动画
      if (itemTitles.length) {
        gsap.from(itemTitles, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 65%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
          ease: 'power3.out'
        })
      }

      if (itemDescs.length) {
        gsap.from(itemDescs, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 65%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.7,
          ease: 'power3.out'
        })
      }

      // 粒子动画
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

        // 粒子持续动画
        particles.forEach((particle: HTMLElement) => {
          const duration = 3 + Math.random() * 4
          const delay = Math.random() * 2

          gsap.to(particle, {
            y: -window.innerHeight * 0.6,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration,
            repeat: -1,
            delay,
            ease: 'none'
          })
        })
      }

      // 滚动控制液体强度
      if (stageEl.length) {
        ScrollTrigger.create({
          trigger: stageEl[0],
          start: 'top 80%',
          end: 'bottom 20%',
          onUpdate: (self) => {
            const progress = self.progress
            drops.forEach((drop) => {
              drop.speedY = (1 + Math.random()) * (1 + progress * 2)
            })
          }
        })
      }
    }, componentRoot.value)
  }, 100)
})

onUnmounted(() => {
  gsapCtx?.revert()
  window.removeEventListener('resize', resizeCanvas)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})

onUnmounted(() => {
  ctx?.revert()
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped lang="scss">
.sld-liquid-distort-section-161 {
  min-height: 150vh;
  padding: 100px 20px;
  background: linear-gradient(180deg, #0a1525 0%, #0f1f35 50%, #0a1525 100%);
  position: relative;
  overflow: hidden;
}

.sld-container-161 {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
}

.sld-title-161 {
  text-align: center;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.5));
}

.sld-subtitle-161 {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(59, 130, 246, 0.6);
  margin-bottom: 80px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.sld-liquid-stage-161 {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sld-canvas-161 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.sld-images-161 {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  z-index: 2;
  max-width: 1200px;
}

.sld-liquid-item-161 {
  position: relative;
  background: rgba(15, 30, 50, 0.8);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.2);
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.sld-image-container-161 {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.sld-image-161 {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.sld-liquid-overlay-161 {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(15, 30, 50, 0.9));
  opacity: 0.3;
  transition: opacity 0.5s ease;
}

.sld-ripple-161 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  pointer-events: none;
}

.sld-item-content-161 {
  padding: 25px;
}

.sld-item-title-161 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.sld-item-desc-161 {
  font-size: 0.9rem;
  color: rgba(59, 130, 246, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.sld-particles-161 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.sld-particle-161 {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  bottom: -20px;
}

@media (max-width: 768px) {
  .sld-images-161 {
    grid-template-columns: 1fr;
  }

  .sld-item-title-161 {
    font-size: 1.3rem;
  }

  .sld-item-desc-161 {
    font-size: 0.85rem;
  }
}
</style>
