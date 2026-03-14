<template>
  <div class="sip-pixelate-section-229" ref="componentRoot">
    <div class="sip-container-229">
      <h2 class="sip-title-229">像素化揭示</h2>
      <p class="sip-subtitle-229">Image Pixelate Reveal</p>

      <!-- 像素化控制 -->
      <div class="sip-pixel-control-panel-229">
        <div class="sip-control-group-229">
          <label class="sip-label-229">像素大小</label>
          <input
            type="range"
            min="5"
            max="50"
            v-model.number="pixelSize"
            class="sip-slider-229"
          />
          <span class="sip-value-229">{{ pixelSize }}px</span>
        </div>
        <div class="sip-control-group-229">
          <label class="sip-label-229">过渡速度</label>
          <input
            type="range"
            min="1"
            max="10"
            v-model.number="transitionSpeed"
            class="sip-slider-229"
          />
          <span class="sip-value-229">{{ transitionSpeed }}x</span>
        </div>
        <div class="sip-control-group-229">
          <label class="sip-label-229">像素模式</label>
          <div class="sip-mode-buttons-229">
            <button
              v-for="mode in modes"
              :key="mode.id"
              class="sip-mode-btn-229"
              :class="{ 'sip-active-229': currentMode === mode.id }"
              @click="setMode(mode.id)"
            >
              {{ mode.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- 像素化画廊 -->
      <div class="sip-pixelate-gallery-229">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="sip-pixelate-item-229"
          ref="pixelateItems"
        >
          <div class="sip-pixelate-wrapper-229">
            <!-- 像素化层 -->
            <div class="sip-pixelated-layer-229">
              <canvas
                :ref="el => { if (el) canvasRefs[index] = el as HTMLCanvasElement }"
                class="sip-pixel-canvas-229"
                :data-pixel-size="pixelSize"
              ></canvas>
            </div>

            <!-- 原始图片层 -->
            <div class="sip-original-layer-229">
              <img :src="item.image" :alt="item.title" class="sip-original-image-229" />
            </div>

            <!-- 像素网格叠加 -->
            <div class="sip-pixel-grid-229" :style="{ backgroundSize: `${pixelSize}px ${pixelSize}px` }"></div>

            <!-- 像素粒子效果 -->
            <div class="sip-pixel-particles-229" ref="pixelParticles">
              <div class="sip-particle-229" v-for="i in 20" :key="i" :style="{ '--i': i }"></div>
            </div>

            <!-- 信息覆盖层 -->
            <div class="sip-pixelate-overlay-229">
              <div class="sip-pixelate-content-229">
                <div class="sip-pixel-badge-229">
                  <span class="sip-pixel-icon-229">■</span>
                  {{ pixelSize }}px
                </div>
                <h3 class="sip-card-title-229">{{ item.title }}</h3>
                <p class="sip-card-desc-229">{{ item.desc }}</p>
                <div class="sip-pixel-metrics-229">
                  <div class="sip-metric-229">
                    <span class="sip-metric-label-229">分辨率</span>
                    <span class="sip-metric-value-229">{{ calculateResolution(item) }}</span>
                  </div>
                  <div class="sip-metric-229">
                    <span class="sip-metric-label-229">过渡</span>
                    <span class="sip-metric-value-229">{{ transitionSpeed }}x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 像素化状态指示器 -->
      <div class="sip-pixelate-status-229" ref="statusIndicator">
        <div class="sip-pixel-grid-display-229">
          <div class="sip-pixel-display-229" v-for="i in 12" :key="i"></div>
        </div>
        <div class="sip-pixel-info-229">
          <span class="sip-info-label-229">像素化引擎</span>
          <span class="sip-info-value-229">{{ statusText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const componentRoot = ref<HTMLElement>()
const pixelateItems = ref<HTMLElement[]>([])
const canvasRefs = ref<(HTMLCanvasElement | null)[]>([])
const pixelParticles = ref<HTMLElement[]>([])
const statusIndicator = ref<HTMLElement>()

const pixelSize = ref(15)
const transitionSpeed = ref(5)
const currentMode = ref<'reveal' | 'dissolve' | 'scatter'>('reveal')

const statusText = computed(() => {
  return `模式: ${currentMode.value} | 像素: ${pixelSize.value}px`
})

interface PixelMode {
  id: 'reveal' | 'dissolve' | 'scatter'
  name: string
}

const modes: PixelMode[] = [
  { id: 'reveal', name: '揭示' },
  { id: 'dissolve', name: '溶解' },
  { id: 'scatter', name: '散射' }
]

interface GalleryItem {
  image: string
  title: string
  desc: string
  width?: number
  height?: number
}

const galleryItems: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    title: '星空像素',
    desc: '复古像素风格星空'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: '山脉像素',
    desc: '8位风格山脉景观'
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    title: '森林像素',
    desc: '像素化森林场景'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    title: '海滩像素',
    desc: '复古海滩像素艺术'
  }
]

const calculateResolution = (item: GalleryItem) => {
  const w = item.width || 800
  const h = item.height || 600
  const rw = Math.round(w / pixelSize.value)
  const rh = Math.round(h / pixelSize.value)
  return `${rw}x${rh}`
}

let ctx: gsap.Context
const loadedImages: Map<string, HTMLImageElement> = new Map()

const setMode = (mode: 'reveal' | 'dissolve' | 'scatter') => {
  currentMode.value = mode
  ScrollTrigger.refresh()
}

// 像素化图像处理
const pixelateImage = (canvas: HTMLCanvasElement, imageUrl: string, size: number) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = imageUrl

  img.onload = () => {
    // 设置canvas大小
    canvas.width = img.width
    canvas.height = img.height

    // 小尺寸绘制
    const smallCanvas = document.createElement('canvas')
    const smallCtx = smallCanvas.getContext('2d')!
    const sw = Math.ceil(img.width / size)
    const sh = Math.ceil(img.height / size)

    smallCanvas.width = sw
    smallCanvas.height = sh
    smallCtx.drawImage(img, 0, 0, sw, sh)

    // 放大回原尺寸
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(smallCanvas, 0, 0, sw, sh, 0, 0, canvas.width, canvas.height)
  }
}

const initAnimations = () => {
  ctx = gsap.context(() => {
    const items = gsap.utils.toArray('.sip-pixelate-item-229') as HTMLElement[]

    items.forEach((item, index) => {
      const wrapper = item.querySelector('.sip-pixelate-wrapper-229') as HTMLElement
      const pixelatedLayer = item.querySelector('.sip-pixelated-layer-229') as HTMLElement
      const originalLayer = item.querySelector('.sip-original-layer-229') as HTMLElement
      const pixelGrid = item.querySelector('.sip-pixel-grid-229') as HTMLElement
      const particleContainer = item.querySelector('.sip-pixel-particles-229') as HTMLElement
      const overlay = item.querySelector('.sip-pixelate-overlay-229') as HTMLElement

      // 初始化canvas像素化
      const canvas = canvasRefs.value[index]
      if (canvas && galleryItems[index]) {
        pixelateImage(canvas, galleryItems[index].image, pixelSize.value)
      }

      // Initial reveal animation
      gsap.fromTo(
        wrapper,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1
          }
        }
      )

      // Pixelated layer opacity animation
      gsap.fromTo(
        pixelatedLayer,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 2 / (transitionSpeed.value / 5),
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            end: 'center center',
            scrub: 1
          }
        }
      )

      // Original layer reveal
      gsap.fromTo(
        originalLayer,
        { opacity: 0, filter: `blur(${pixelSize.value / 2}px)` },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2 / (transitionSpeed.value / 5),
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            end: 'center center',
            scrub: 1
          }
        }
      )

      // Pixel grid fade out
      gsap.fromTo(
        pixelGrid,
        { opacity: 0.5 },
        {
          opacity: 0,
          duration: 1.5 / (transitionSpeed.value / 5),
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'top 25%',
            scrub: 1
          }
        }
      )

      // Pixel particles animation based on mode
      const particles = particleContainer.querySelectorAll('.sip-particle-229')
      if (currentMode.value === 'scatter') {
        gsap.fromTo(
          particles,
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          },
          {
            x: () => gsap.utils.random(-200, 200),
            y: () => gsap.utils.random(-200, 200),
            opacity: 0,
            scale: 0,
            duration: 2 / (transitionSpeed.value / 5),
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 60%',
              end: 'top 20%',
              scrub: 1
            }
          }
        )
      } else if (currentMode.value === 'dissolve') {
        gsap.fromTo(
          particles,
          { opacity: 1, scale: 1 },
          {
            opacity: 0,
            scale: 0,
            duration: 1.5 / (transitionSpeed.value / 5),
            stagger: {
              each: 0.1,
              from: 'random'
            },
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 60%',
              end: 'top 20%',
              scrub: 1
            }
          }
        )
      }

      // Overlay reveal
      gsap.fromTo(
        overlay,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 45%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Content stagger animation
      const contentElements = overlay.querySelectorAll('.sip-pixel-badge-229, h3, p, .sip-pixel-metrics-229')
      gsap.from(contentElements, {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // Status indicator grid animation
    if (statusIndicator.value) {
      const gridCells = statusIndicator.value.querySelectorAll('.sip-pixel-display-229')
      gsap.to(gridCells, {
        opacity: () => Math.random(),
        scale: () => 0.8 + Math.random() * 0.4,
        duration: 0.5,
        stagger: 0.05,
        repeat: -1,
        ease: 'sine.inOut',
        yoyo: true
      })
    }
  }, componentRoot.value)
}

// Update pixelation when settings change
watch([pixelSize, transitionSpeed, currentMode], () => {
  canvasRefs.value.forEach((canvas, index) => {
    if (canvas && galleryItems[index]) {
      pixelateImage(canvas, galleryItems[index].image, pixelSize.value)
    }
  })
  ScrollTrigger.refresh()
})

onMounted(() => {
  initAnimations()
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped lang="scss">
.sip-pixelate-section-229 {
  min-height: 100vh;
  padding: 60px 20px;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a2a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334455' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
}

.sip-container-229 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sip-title-229 {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(255, 107, 107, 0.3);
  font-family: 'Courier New', monospace;
  letter-spacing: -2px;
}

.sip-subtitle-229 {
  text-align: center;
  color: #48dbfb;
  font-size: 1.2rem;
  margin-bottom: 40px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
}

.sip-pixel-control-panel-229 {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding: 25px;
  background: rgba(255, 107, 107, 0.03);
  border: 2px solid rgba(255, 107, 107, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.1);
}

.sip-control-group-229 {
  display: flex;
  align-items: center;
  gap: 15px;
}

.sip-label-229 {
  color: #ff6b6b;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sip-slider-229 {
  width: 120px;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 107, 107, 0.2);
  border-radius: 3px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #ff6b6b;
    border: 2px solid #0a0a1a;
    border-radius: 0;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 107, 107, 0.8);
  }
}

.sip-value-229 {
  color: #48dbfb;
  font-size: 14px;
  font-weight: 600;
  min-width: 50px;
  font-family: 'Courier New', monospace;
}

.sip-mode-buttons-229 {
  display: flex;
  gap: 8px;
}

.sip-mode-btn-229 {
  padding: 8px 16px;
  background: rgba(255, 107, 107, 0.1);
  border: 2px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 13px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    border-color: rgba(255, 107, 107, 0.6);
  }

  &.sip-active-229 {
    background: #ff6b6b;
    border-color: #ff6b6b;
    color: #0a0a1a;
    font-weight: 700;
  }
}

.sip-pixelate-gallery-229 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 50px;
  margin-bottom: 60px;
}

.sip-pixelate-item-229 {
  perspective: 2000px;
}

.sip-pixelate-wrapper-229 {
  position: relative;
  border-radius: 0;
  overflow: hidden;
  background: #0a0a1a;
  border: 3px solid rgba(255, 107, 107, 0.3);
  box-shadow:
    0 0 40px rgba(255, 107, 107, 0.2),
    inset 0 0 40px rgba(255, 107, 107, 0.05);
  transform-style: preserve-3d;
}

.sip-pixelated-layer-229 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.sip-pixel-canvas-229 {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.sip-original-layer-229 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.sip-original-image-229 {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.sip-pixel-grid-229 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 107, 107, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 107, 0.1) 1px, transparent 1px);
  background-size: 15px 15px;
}

.sip-pixel-particles-229 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  pointer-events: none;
}

.sip-particle-229 {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff6b6b, #48dbfb);
  top: 20%;
  left: 20%;
  opacity: 0.8;
  transform: translate(calc(var(--i) * 30px), calc(var(--i) * 20px));
}

.sip-pixelate-overlay-229 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(transparent, rgba(10, 10, 26, 0.98));
  z-index: 10;
  border-top: 3px solid rgba(255, 107, 107, 0.4);
}

.sip-pixelate-content-229 {
  transform: translateZ(10px);
}

.sip-pixel-badge-229 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(255, 107, 107, 0.2);
  border: 2px solid rgba(255, 107, 107, 0.5);
  color: #ff6b6b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-family: 'Courier New', monospace;
}

.sip-pixel-icon-229 {
  font-size: 16px;
  line-height: 1;
}

.sip-card-title-229 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #48dbfb;
  margin-bottom: 8px;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 20px rgba(72, 219, 251, 0.5);
}

.sip-card-desc-229 {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 20px;
  line-height: 1.6;
  font-family: 'Courier New', monospace;
}

.sip-pixel-metrics-229 {
  display: flex;
  gap: 20px;
}

.sip-metric-229 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sip-metric-label-229 {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Courier New', monospace;
}

.sip-metric-value-229 {
  font-size: 13px;
  color: #48dbfb;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.sip-pixelate-status-229 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 30px;
  background: rgba(255, 107, 107, 0.03);
  border: 3px solid rgba(255, 107, 107, 0.2);
  border-radius: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.1);
}

.sip-pixel-grid-display-229 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  width: 120px;
  height: 80px;
}

.sip-pixel-display-229 {
  background: linear-gradient(135deg, #ff6b6b, #48dbfb);
  border: 1px solid rgba(255, 107, 107, 0.3);
}

.sip-pixel-info-229 {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sip-info-label-229 {
  font-size: 11px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Courier New', monospace;
}

.sip-info-value-229 {
  font-size: 14px;
  color: #48dbfb;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

@media (max-width: 768px) {
  .sip-title-229 {
    font-size: 2rem;
  }

  .sip-pixelate-gallery-229 {
    grid-template-columns: 1fr;
  }

  .sip-pixel-control-panel-229 {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
