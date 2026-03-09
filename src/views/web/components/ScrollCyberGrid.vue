<template>
  <section class="scg-cyber-grid-section-164" ref="componentRoot">
    <div class="scg-container-164">
      <h2 class="scg-title-164">赛博网格</h2>
      <p class="scg-subtitle-164">Cyber Grid</p>

      <div class="scg-grid-canvas-164">
        <canvas ref="gridCanvas"></canvas>
      </div>

      <div class="scg-cards-stage-164">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="scg-cyber-card-164"
          :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
          :data-index="index"
          @mousemove="handleCardMouseMove($event, index)"
          @mouseleave="handleMouseLeave(index)"
        >
          <div class="scg-card-grid-164">
            <div class="scg-grid-line-164" v-for="i in 4" :key="i" :data-line="i"></div>
          </div>
          <div class="scg-card-content-164">
            <div class="scg-card-icon-164">{{ card.icon }}</div>
            <h3 class="scg-card-title-164">{{ card.title }}</h3>
            <p class="scg-card-desc-164">{{ card.description }}</p>
            <div class="scg-card-matrix-164">
              <div class="scg-matrix-cell-164" v-for="i in 9" :key="i"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const componentRoot = ref<HTMLElement>()
const gridCanvas = ref<HTMLCanvasElement>()
const cardRefs = ref<HTMLElement[]>([])

const cards = [
  {
    icon: '🌐',
    title: '网络',
    description: 'NETWORK'
  },
  {
    icon: '💻',
    title: '代码',
    description: 'CODE'
  },
  {
    icon: '🔮',
    title: '预言',
    description: 'PREDICT'
  },
  {
    icon: '⚡',
    title: '能量',
    description: 'ENERGY'
  }
]

let gsapCtx: gsap.Context
let gridCtx: CanvasRenderingContext2D | null = null
let animationFrame: number | null = null
let time = 0
let resizeCanvas: () => void = () => {}
let handleMouseMove: (e: MouseEvent) => void = () => {}

const handleCardMouseMove = (event: MouseEvent, index: number) => {
  const card = cardRefs.value[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  gsap.to(card.querySelector('.scg-card-grid-164'), {
    x: (x - rect.width / 2) * 0.1,
    y: (y - rect.height / 2) * 0.1,
    duration: 0.3,
    ease: 'power2.out'
  })

  gsap.to(card, {
    rotateX: (y / rect.height - 0.5) * -10,
    rotateY: (x / rect.width - 0.5) * 10,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const handleMouseLeave = (index: number) => {
  const card = cardRefs.value[index]
  if (!card) return

  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: 'elastic.out(1, 0.5)'
  })

  gsap.to(card.querySelector('.scg-card-grid-164'), {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
}

const animateGrid = () => {
  if (!gridCtx || !gridCanvas.value) return

  const canvas = gridCanvas.value
  const width = canvas.width
  const height = canvas.height

  gridCtx.fillStyle = 'rgba(5, 5, 15, 0.1)'
  gridCtx.fillRect(0, 0, width, height)

  const gridSize = 40
  const offset = (time * 0.5) % gridSize

  gridCtx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
  gridCtx.lineWidth = 1

  for (let x = 0; x <= width; x += gridSize) {
    gridCtx.beginPath()
    gridCtx.moveTo(x + offset, 0)
    gridCtx.lineTo(x + offset, height)
    gridCtx.stroke()
  }

  for (let y = 0; y <= height; y += gridSize) {
    gridCtx.beginPath()
    gridCtx.moveTo(0, y + offset)
    gridCtx.lineTo(width, y + offset)
    gridCtx.stroke()
  }

  time += 1
  animationFrame = requestAnimationFrame(animateGrid)
}

onMounted(() => {
  setTimeout(() => {
    if (!componentRoot.value) return

    const canvas = gridCanvas.value
    if (!canvas) return

    resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    gridCtx = canvas.getContext('2d')
    if (!gridCtx) return

    animateGrid()

    gsapCtx = gsap.context(() => {
      const titleEl = gsap.utils.toArray<HTMLElement>('.scg-title-164', componentRoot.value)
      const subtitleEl = gsap.utils.toArray<HTMLElement>('.scg-subtitle-164', componentRoot.value)
      const cyberCards = gsap.utils.toArray<HTMLElement>('.scg-cyber-card-164', componentRoot.value)
      const stageEl = gsap.utils.toArray<HTMLElement>('.scg-cards-stage-164', componentRoot.value)

      if (titleEl.length) {
        gsap.from(titleEl, {
          scrollTrigger: {
            trigger: componentRoot.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 60,
          opacity: 0,
          filter: 'blur(10px)',
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
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        })
      }

      if (cyberCards.length) {
        gsap.from(cyberCards, {
          scrollTrigger: {
            trigger: stageEl[0] || componentRoot.value,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          scale: 0.9,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        })
      }

      cardRefs.value.forEach((card, index) => {
        if (!card) return

        const gridLines = card.querySelectorAll('.scg-grid-line-164')
        const matrixCells = card.querySelectorAll('.scg-matrix-cell-164')

        gridLines.forEach((line, lineIndex) => {
          gsap.to(line as HTMLElement, {
            opacity: 0.3 + Math.random() * 0.7,
            duration: 0.3 + Math.random() * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: lineIndex * 0.1
          })
        })

        matrixCells.forEach((cell, cellIndex) => {
          gsap.to(cell as HTMLElement, {
            opacity: 0.2 + Math.random() * 0.6,
            backgroundColor: index % 2 === 0 ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 0, 255, 0.3)',
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: cellIndex * 0.05
          })
        })
      })
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
.scg-cyber-grid-section-164 {
  min-height: 150vh;
  padding: 100px 20px;
  background: #050510;
  position: relative;
  overflow: hidden;
}

.scg-container-164 {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
}

.scg-title-164 {
  text-align: center;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.5));
}

.scg-subtitle-164 {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(0, 255, 255, 0.6);
  margin-bottom: 80px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.scg-grid-canvas-164 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.scg-cards-stage-164 {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  z-index: 2;
}

.scg-cyber-card-164 {
  position: relative;
  width: 300px;
  height: 380px;
  background: rgba(10, 10, 25, 0.9);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.scg-card-grid-164 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.scg-grid-line-164 {
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  opacity: 0.5;
}

.scg-grid-line-164[data-line="1"] { top: 25%; }
.scg-grid-line-164[data-line="2"] { top: 50%; }
.scg-grid-line-164[data-line="3"] { top: 75%; }
.scg-grid-line-164[data-line="4"] { 
  top: 50%;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  left: 50%;
}

.scg-card-content-164 {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
}

.scg-card-icon-164 {
  font-size: 5rem;
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
  transition: transform 0.3s ease;
}

.scg-cyber-card-164:hover .scg-card-icon-164 {
  transform: scale(1.2) rotate(10deg);
}

.scg-card-title-164 {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.scg-card-desc-164 {
  font-size: 1rem;
  color: rgba(0, 255, 255, 0.7);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.scg-card-matrix-164 {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.scg-matrix-cell-164 {
  width: 8px;
  height: 8px;
  background: rgba(0, 255, 255, 0.2);
  border-radius: 2px;
  opacity: 0.3;
}

@media (max-width: 768px) {
  .scg-cards-stage-164 {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .scg-cyber-card-164 {
    width: 260px;
    height: 340px;
  }

  .scg-card-icon-164 {
    font-size: 4rem;
  }

  .scg-card-title-164 {
    font-size: 1.6rem;
  }
}
</style>
