<template>
  <div class="sli-section-230" ref="componentRoot">
    <div class="sli-container-230">
      <h2 class="sli-title-230">液体图片流动</h2>
      <p class="sli-subtitle-230">Liquid Image Flow</p>

      <!-- 控制面板 -->
      <div class="sli-control-panel-230">
        <div class="sli-control-group-230">
          <label class="sli-label-230">流动速度</label>
          <input
            type="range"
            min="1"
            max="10"
            v-model.number="flowSpeed"
            class="sli-slider-230"
          />
          <span class="sli-value-230">{{ flowSpeed }}x</span>
        </div>
        <div class="sli-control-group-230">
          <label class="sli-label-230">波浪幅度</label>
          <input
            type="range"
            min="10"
            max="100"
            v-model.number="waveAmplitude"
            class="sli-slider-230"
          />
          <span class="sli-value-230">{{ waveAmplitude }}px</span>
        </div>
        <div class="sli-control-group-230">
          <label class="sli-label-230">扭曲强度</label>
          <input
            type="range"
            min="0"
            max="100"
            v-model.number="distortIntensity"
            class="sli-slider-230"
          />
          <span class="sli-value-230">{{ distortIntensity }}%</span>
        </div>
      </div>

      <!-- 液体流动画廊 -->
      <div class="sli-liquid-gallery-230">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="sli-liquid-item-230"
          :class="{ 'sli-active-230': currentIndex === index }"
          @click="setCurrentImage(index)"
        >
          <div class="sli-liquid-wrapper-230">
            <canvas
              :ref="(el) => { if (el) canvasRefs[index] = el as HTMLCanvasElement }"
              class="sli-liquid-canvas-230"
              :width="300"
              :height="200"
            ></canvas>
            <div class="sli-wave-overlay-230">
              <div class="sli-wave-230" v-for="i in 5" :key="i"></div>
            </div>
            <div class="sli-droplet-230" v-for="i in 8" :key="i"></div>
          </div>
          <div class="sli-image-info-230">
            <h3 class="sli-image-title-230">{{ image.title }}</h3>
            <p class="sli-image-desc-230">{{ image.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 液体效果控制器 -->
      <div class="sli-liquid-controls-230">
        <button
          class="sli-control-btn-230"
          @click="toggleFlow"
          :class="{ 'sli-active-230': isFlowing }"
        >
          {{ isFlowing ? '⏸ 暂停流动' : '▶ 开始流动' }}
        </button>
        <button
          class="sli-control-btn-230"
          @click="dropDroplet"
        >
          💧 添加水滴
        </button>
        <button
          class="sli-control-btn-230"
          @click="resetFlow"
        >
          🔄 重置流动
        </button>
      </div>

      <!-- 液体流动指示器 -->
      <div class="sli-flow-indicator-230">
        <div class="sli-flow-bar-230">
          <div
            class="sli-flow-fill-230"
            :style="{ width: flowProgress + '%' }"
          ></div>
        </div>
        <span class="sli-flow-text-230">液体流动强度</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const componentRoot = ref<HTMLElement>()
const currentIndex = ref(0)
const flowSpeed = ref(5)
const waveAmplitude = ref(50)
const distortIntensity = ref(60)
const isFlowing = ref(true)
const flowProgress = ref(0)
const canvasRefs = ref<(HTMLCanvasElement | null)[]>([])

interface LiquidImage {
  src: string
  title: string
  desc: string
}

const images: LiquidImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    title: '山川流动',
    desc: 'Mountain Flow'
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600',
    title: '海洋波浪',
    desc: 'Ocean Waves'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
    title: '森林涟漪',
    desc: 'Forest Ripples'
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
    title: '星空流体',
    desc: 'Starry Fluid'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    title: '都市液态',
    desc: 'City Liquid'
  }
]

let liquidAnimations: gsap.core.Timeline[] = []
let flowInterval: number | null = null
let waveAnimations: gsap.core.Tween[] = []

const setCurrentImage = (index: number) => {
  currentIndex.value = index
}

const toggleFlow = () => {
  isFlowing.value = !isFlowing.value
  if (isFlowing.value) {
    startFlowAnimation()
  } else {
    stopFlowAnimation()
  }
}

const dropDroplet = () => {
  const activeItem = document.querySelector('.sli-liquid-item-230.sli-active-230')
  if (!activeItem) return

  const droplet = document.createElement('div')
  droplet.className = 'sli-droplet-effect-230'
  droplet.style.cssText = `
    position: absolute;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    left: ${Math.random() * 80 + 10}%;
    top: 0;
  `
  activeItem.appendChild(droplet)

  gsap.to(droplet, {
    y: 300,
    scale: 1.5,
    opacity: 0,
    duration: 2 / flowSpeed.value,
    ease: 'power1.in',
    onComplete: () => {
      droplet.remove()
    }
  })
}

const resetFlow = () => {
  flowProgress.value = 0
  const waves = document.querySelectorAll('.sli-wave-230')
  gsap.set(waves, { x: 0, rotation: 0, scale: 1 })
}

const startFlowAnimation = () => {
  const waves = document.querySelectorAll('.sli-wave-230')

  waveAnimations = Array.from(waves).map((wave, index) => {
    return gsap.to(wave, {
      xPercent: -50,
      rotation: 15,
      scale: 1.2,
      duration: 3 / flowSpeed.value,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.2
    })
  })

  flowInterval = window.setInterval(() => {
    flowProgress.value = (flowProgress.value + 2) % 100
  }, 50 / flowSpeed.value)
}

const stopFlowAnimation = () => {
  waveAnimations.forEach(anim => {
    anim.pause()
  })

  if (flowInterval) {
    clearInterval(flowInterval)
    flowInterval = null
  }
}

const initLiquidEffects = () => {
  const items = document.querySelectorAll('.sli-liquid-item-230')
  const waves = document.querySelectorAll('.sli-wave-230')
  const droplets = document.querySelectorAll('.sli-droplet-230')

  // 波浪流动
  waves.forEach((wave, index) => {
    gsap.to(wave, {
      xPercent: -50,
      rotation: 15,
      scale: 1.2,
      duration: 3 / flowSpeed.value,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.2
    })
  })

  // 水滴飘动
  droplets.forEach((droplet, index) => {
    gsap.to(droplet, {
      y: -30,
      x: Math.sin(index) * 20,
      rotation: 360,
      duration: 4 + index,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.3
    })
  })

  // 滚动触发
  items.forEach((item, index) => {
    gsap.fromTo(item,
      {
        y: 100,
        opacity: 0,
        rotationY: 30
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 25%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // 初始化Canvas绘制
  initCanvases()

  // 启动流动
  startFlowAnimation()
}

const initCanvases = () => {
  images.forEach((image, index) => {
    const canvas = canvasRefs.value[index]
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = image.src

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 300, 200)

      // 应用液体扭曲效果
      const imageData = ctx.getImageData(0, 0, 300, 200)
      const pixels = imageData.data

      for (let y = 0; y < 200; y++) {
        for (let x = 0; x < 300; x++) {
          const i = (y * 300 + x) * 4
          const wave = Math.sin(x / waveAmplitude.value + y / waveAmplitude.value) * distortIntensity.value

          if (wave !== 0) {
            const sourceX = Math.floor(x + wave)
            const sourceY = Math.floor(y)

            if (sourceX >= 0 && sourceX < 300 && sourceY >= 0 && sourceY < 200) {
              const sourceI = (sourceY * 300 + sourceX) * 4
              pixels[i] = pixels[sourceI]
              pixels[i + 1] = pixels[sourceI + 1]
              pixels[i + 2] = pixels[sourceI + 2]
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)
    }
  })
}

const cleanup = () => {
  stopFlowAnimation()
  waveAnimations.forEach(anim => anim.kill())
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

onMounted(() => {
  initLiquidEffects()
})

onUnmounted(() => {
  cleanup()
})

watch([flowSpeed, waveAmplitude, distortIntensity], () => {
  stopFlowAnimation()
  startFlowAnimation()
})
</script>

<style scoped lang="scss">
.sli-section-230 {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 50%, #0a2a1a 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

.sli-section-230::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 40% 60%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 60% 40%, rgba(167, 139, 250, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.sli-container-230 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sli-title-230 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #60a5fa, #3b82f6, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.sli-subtitle-230 {
  font-size: 1.2rem;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 40px;
}

.sli-control-panel-230 {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 40px;
}

.sli-control-group-230 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
}

.sli-label-230 {
  font-size: 14px;
  color: #94a3b8;
  font-weight: 500;
}

.sli-slider-230 {
  width: 100%;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, #60a5fa, #22d3ee);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.sli-value-230 {
  font-size: 13px;
  color: #60a5fa;
  font-weight: 600;
}

.sli-liquid-gallery-230 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.sli-liquid-item-230 {
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s;

  &.sli-active-230 {
    border-color: #60a5fa;
    box-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #22d3ee;
  }
}

.sli-liquid-wrapper-230 {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
}

.sli-liquid-canvas-230 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sli-wave-overlay-230 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.sli-wave-230 {
  position: absolute;
  width: 200%;
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(96, 165, 250, 0.3) 0%,
    rgba(34, 211, 238, 0.2) 50%,
    rgba(96, 165, 250, 0.3) 100%
  );
  border-radius: 20px;
  filter: blur(20px);
  mix-blend-mode: screen;
}

.sli-droplet-230 {
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.sli-image-info-230 {
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.sli-image-title-230 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 5px;
}

.sli-image-desc-230 {
  font-size: 0.9rem;
  color: #94a3b8;
}

.sli-liquid-controls-230 {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.sli-control-btn-230 {
  padding: 12px 24px;
  background: rgba(96, 165, 250, 0.2);
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: rgba(96, 165, 250, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(96, 165, 250, 0.4);
  }

  &.sli-active-230 {
    background: linear-gradient(135deg, #60a5fa, #22d3ee);
    border-color: transparent;
  }
}

.sli-flow-indicator-230 {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.sli-flow-bar-230 {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 10px;
}

.sli-flow-fill-230 {
  height: 100%;
  background: linear-gradient(90deg, #60a5fa, #22d3ee, #60a5fa);
  background-size: 200% 100%;
  animation: flowGradient 2s linear infinite;
}

.sli-flow-text-230 {
  font-size: 13px;
  color: #94a3b8;
}

@keyframes flowGradient {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
</style>
