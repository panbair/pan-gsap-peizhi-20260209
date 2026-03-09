<template>
  <section class="scg-cyber-grid-section-165" ref="componentRoot">
    <div class="scg-container-165">
      <h2 class="scg-title-165">赛博网格</h2>
      <p class="scg-subtitle-165">Cyber Grid</p>

      <div class="scg-grid-canvas-165">
        <canvas ref="gridCanvas"></canvas>
      </div>

      <div class="scg-cards-stage-165">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="scg-cyber-card-165"
          :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
          :data-index="index"
          @mousemove="handleCardMouseMove($event, index)"
          @mouseleave="handleMouseLeave(index)"
        >
          <div class="scg-card-grid-165">
            <div class="scg-grid-line-165" v-for="i in 4" :key="i" :data-line="i"></div>
          </div>
          <div class="scg-card-content-165">
            <div class="scg-card-icon-165">{{ card.icon }}</div>
            <h3 class="scg-card-title-165">{{ card.title }}</h3>
            <p class="scg-card-desc-165">{{ card.description }}</p>
            <div class="scg-card-matrix-165">
              <div class="scg-matrix-cell-165" v-for="i in 9" :key="i"></div>
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

const handleCardMouseMove = (event: MouseEvent, index: number) => {
  const card = cardRefs.value[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  gsap.to(card.querySelector('.scg-card-grid-165'), {
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

  gsap.to(card.querySelector('.scg-card-grid-165'), {
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
      const titleEl = gsap.utils.toArray<HTMLElement>('.scg-title-165', componentRoot.value)
      const subtitleEl = gsap.utils.toArray<HTMLElement>('.scg-subtitle-165', componentRoot.value)
      const cyberCards = gsap.utils.toArray<HTMLElement>('.scg-cyber-card-165', componentRoot.value)
      const stageEl = gsap.utils.toArray<HTMLElement>('.scg-cards-stage-165', componentRoot.value)

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
          opacity: 0,
          scale: 0.8,
          rotationX: 45,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        })
      }

      cardRefs.value.forEach((card) => {
        if (!card) return

        const matrixCells = card.querySelectorAll('.scg-matrix-cell-165') as NodeListOf<HTMLElement>
        matrixCells.forEach((cell, cellIndex) => {
          gsap.to(cell, {
            opacity: 0.3 + Math.random() * 0.7,
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
</script>

<style scoped lang="scss">
.scg-cyber-grid-section-165 {
  position: relative;
  min-height: 200vh;
  padding: 120px 20px;
  background: linear-gradient(180deg, #0a0a15 0%, #050510 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at 20% 50%, rgba(0, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 50%, rgba(255, 0, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
}

.scg-container-165 {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
}

.scg-title-165 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(0, 255, 255, 0.3);
}

.scg-subtitle-165 {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 80px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
}

.scg-grid-canvas-165 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.scg-cards-stage-165 {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 40px 20px;
  z-index: 2;
}

.scg-cyber-card-165 {
  position: relative;
  background: rgba(10, 10, 25, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 40px rgba(0, 255, 255, 0.1),
    inset 0 0 60px rgba(0, 255, 255, 0.05);
  transition: border-color 0.3s, box-shadow 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ffff, transparent);
    animation: cyber-line 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      linear-gradient(-135deg, rgba(255, 0, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(0, 255, 255, 0.5);
    box-shadow: 
      0 0 60px rgba(0, 255, 255, 0.2),
      inset 0 0 80px rgba(0, 255, 255, 0.1);
  }
}

@keyframes cyber-line {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

.scg-card-grid-165 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.3;
  pointer-events: none;
}

.scg-grid-line-165 {
  position: absolute;
  background: linear-gradient(180deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  pointer-events: none;

  &[data-line="1"] {
    left: 20%;
    top: 0;
    width: 1px;
    height: 100%;
  }

  &[data-line="2"] {
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
  }

  &[data-line="3"] {
    left: 80%;
    top: 0;
    width: 1px;
    height: 100%;
  }

  &[data-line="4"] {
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
}

.scg-card-content-165 {
  position: relative;
  z-index: 2;
}

.scg-card-icon-165 {
  font-size: 4rem;
  margin-bottom: 20px;
  text-align: center;
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
}

.scg-card-title-165 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.scg-card-desc-165 {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.6;
}

.scg-card-matrix-165 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 20px;
}

.scg-matrix-cell-165 {
  width: 100%;
  padding-bottom: 100%;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 4px;
  opacity: 0.1;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 255, 255, 0.3);
  }
}
</style>
