<template>
  <div class="sim-morph-section-231" ref="componentRoot">
    <div class="sim-container-231">
      <h2 class="sim-title-231">图片变形</h2>
      <p class="sim-subtitle-231">Image Morphing Effect</p>

      <!-- 变形控制面板 -->
      <div class="sim-morph-control-panel-231">
        <div class="sim-control-group-231">
          <label class="sim-label-231">变形强度</label>
          <input
            type="range"
            min="0"
            max="100"
            v-model.number="morphIntensity"
            class="sim-slider-231"
          />
          <span class="sim-value-231">{{ morphIntensity }}%</span>
        </div>
        <div class="sim-control-group-231">
          <label class="sim-label-231">变形速度</label>
          <input
            type="range"
            min="1"
            max="10"
            v-model.number="morphSpeed"
            class="sim-slider-231"
          />
          <span class="sim-value-231">{{ morphSpeed }}x</span>
        </div>
        <div class="sim-control-group-231">
          <label class="sim-label-231">变形模式</label>
          <div class="sim-mode-buttons-231">
            <button
              v-for="mode in modes"
              :key="mode.id"
              class="sim-mode-btn-231"
              :class="{ 'sim-active-231': currentMode === mode.id }"
              @click="setMode(mode.id)"
            >
              {{ mode.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- 变形画廊 -->
      <div class="sim-morph-gallery-231">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="sim-morph-item-231"
          ref="morphItems"
        >
          <div class="sim-morph-wrapper-231">
            <!-- 变形容器 -->
            <div class="sim-morph-container-231">
              <!-- 原始图片 -->
              <div class="sim-original-layer-231">
                <img :src="item.image" :alt="item.title" class="sim-morph-image-231" />
              </div>

              <!-- 变形层 -->
              <div class="sim-morphed-layer-231">
                <canvas
                  :ref="el => { if (el) canvasRefs[index] = el as HTMLCanvasElement }"
                  class="sim-morph-canvas-231"
                ></canvas>
              </div>

              <!-- 变形网格 -->
              <div class="sim-morph-grid-231" ref="morphGrids">
                <div class="sim-grid-point-231" v-for="i in 16" :key="i" :style="{ '--i': i }"></div>
              </div>

              <!-- 液体波纹 -->
              <div class="sim-liquid-ripple-231" ref="liquidRipples">
                <div class="sim-ripple-231" v-for="i in 8" :key="i" :style="{ '--delay': i * 0.3 }"></div>
              </div>
            </div>

            <!-- 信息覆盖层 -->
            <div class="sim-morph-overlay-231">
              <div class="sim-morph-content-231">
                <div class="sim-morph-badge-231">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  变形 {{ morphIntensity }}%
                </div>
                <h3 class="sim-card-title-231">{{ item.title }}</h3>
                <p class="sim-card-desc-231">{{ item.desc }}</p>
                <div class="sim-morph-metrics-231">
                  <div class="sim-metric-231">
                    <span class="sim-metric-label-231">强度</span>
                    <span class="sim-metric-value-231">{{ morphIntensity }}%</span>
                  </div>
                  <div class="sim-metric-231">
                    <span class="sim-metric-label-231">速度</span>
                    <span class="sim-metric-value-231">{{ morphSpeed }}x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 变形状态指示器 -->
      <div class="sim-morph-status-231" ref="statusIndicator">
        <div class="sim-status-display-231">
          <div class="sim-morph-icon-231">
            <svg viewBox="0 0 50 50" class="sim-icon-svg-231">
              <path d="M25 5 L45 25 L25 45 L5 25 Z" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="25" cy="25" r="5" fill="currentColor"/>
            </svg>
          </div>
          <div class="sim-status-info-231">
            <span class="sim-status-label-231">变形引擎</span>
            <span class="sim-status-text-231">{{ statusText }}</span>
          </div>
        </div>
        <div class="sim-morph-wave-231">
          <div class="sim-wave-line-231" v-for="i in 6" :key="i"></div>
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
const morphItems = ref<HTMLElement[]>([])
const canvasRefs = ref<(HTMLCanvasElement | null)[]>([])
const morphGrids = ref<HTMLElement[]>([])
const liquidRipples = ref<HTMLElement[]>([])
const statusIndicator = ref<HTMLElement>()

const morphIntensity = ref(60)
const morphSpeed = ref(5)
const currentMode = ref<'wave' | 'twist' | 'expand'>('wave')

const statusText = computed(() => {
  return `模式: ${currentMode.value} | 强度: ${morphIntensity.value}%`
})

interface MorphMode {
  id: 'wave' | 'twist' | 'expand'
  name: string
}

const modes: MorphMode[] = [
  { id: 'wave', name: '波浪' },
  { id: 'twist', name: '扭曲' },
  { id: 'expand', name: '扩散' }
]

interface GalleryItem {
  image: string
  title: string
  desc: string
}

const galleryItems: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    title: '星空变形',
    desc: '银河的流动变换'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: '山脉变形',
    desc: '山峰的形态变换'
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
    title: '森林变形',
    desc: '树木的有机变换'
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    title: '海洋变形',
    desc: '波浪的形态变化'
  }
]

let ctx: gsap.Context

const setMode = (mode: 'wave' | 'twist' | 'expand') => {
  currentMode.value = mode
  ScrollTrigger.refresh()
}

const applyMorphEffect = (canvas: HTMLCanvasElement, imageUrl: string, intensity: number) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = imageUrl

  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height

    // 简单的变形效果 - 使用波浪滤镜
    ctx.filter = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='wave'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01 0.02' numOctaves='3' seed='1'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='${intensity * 0.5}'/%3E%3C/filter%3E%3C/svg%3E#wave")`
    ctx.drawImage(img, 0, 0)
  }
}

const initAnimations = () => {
  ctx = gsap.context(() => {
    const items = gsap.utils.toArray('.sim-morph-item-231') as HTMLElement[]

    items.forEach((item, index) => {
      const wrapper = item.querySelector('.sim-morph-wrapper-231') as HTMLElement
      const morphContainer = item.querySelector('.sim-morph-container-231') as HTMLElement
      const morphedLayer = item.querySelector('.sim-morphed-layer-231') as HTMLElement
      const morphGrid = item.querySelector('.sim-morph-grid-231') as HTMLElement
      const liquidRipple = item.querySelector('.sim-liquid-ripple-231') as HTMLElement
      const overlay = item.querySelector('.sim-morph-overlay-231') as HTMLElement

      // 初始化变形canvas
      const canvas = canvasRefs.value[index]
      if (canvas && galleryItems[index]) {
        applyMorphEffect(canvas, galleryItems[index].image, morphIntensity.value)
      }

      // Initial reveal animation
      gsap.fromTo(
        wrapper,
        { y: 100, opacity: 0, scale: 0.95 },
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

      // Morph animation based on mode
      if (currentMode.value === 'wave') {
        gsap.to(morphContainer, {
          rotationY: () => gsap.utils.random(-5, 5),
          rotationX: () => gsap.utils.random(-5, 5),
          duration: 3 / (morphSpeed.value / 5),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play pause pause pause'
          }
        })
      } else if (currentMode.value === 'twist') {
        gsap.to(morphContainer, {
          rotation: 5,
          skewX: 3,
          duration: 2 / (morphSpeed.value / 5),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play pause pause pause'
          }
        })
      } else if (currentMode.value === 'expand') {
        gsap.to(morphContainer, {
          scale: 1.05,
          duration: 2.5 / (morphSpeed.value / 5),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play pause pause pause'
          }
        })
      }

      // Morphed layer opacity
      gsap.fromTo(
        morphedLayer,
        { opacity: 0 },
        {
          opacity: morphIntensity.value / 100,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1
          }
        }
      )

      // Grid points animation
      const gridPoints = morphGrid.querySelectorAll('.sim-grid-point-231')
      gridPoints.forEach((point) => {
        const i = parseFloat(point.style.getPropertyValue('--i'))
        gsap.to(point, {
          x: () => gsap.utils.random(-20, 20) * (morphIntensity.value / 100),
          y: () => gsap.utils.random(-20, 20) * (morphIntensity.value / 100),
          scale: () => 0.8 + Math.random() * 0.4,
          duration: 2 / (morphSpeed.value / 5),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play pause pause pause'
          }
        })
      })

      // Liquid ripple animation
      const ripples = liquidRipple.querySelectorAll('.sim-ripple-231')
      ripples.forEach((ripple) => {
        gsap.to(ripple, {
          scale: 1 + (morphIntensity.value / 50),
          opacity: 0,
          duration: 3 / (morphSpeed.value / 5),
          ease: 'power2.out',
          repeat: -1,
          delay: parseFloat(ripple.style.getPropertyValue('--delay')),
          scrollTrigger: {
            trigger: item,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play pause pause pause'
          }
        })
      })

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
      const contentElements = overlay.querySelectorAll('.sim-morph-badge-231, h3, p, .sim-morph-metrics-231')
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

    // Status indicator wave animation
    if (statusIndicator.value) {
      const iconSvg = statusIndicator.value.querySelector('.sim-icon-svg-231')
      const waveLines = statusIndicator.value.querySelectorAll('.sim-wave-line-231')

      gsap.to(iconSvg, {
        rotation: 360,
        duration: 15,
        ease: 'none',
        repeat: -1
      })

      gsap.to(waveLines, {
        scaleY: 0.3,
        duration: 0.6,
        stagger: 0.1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    }
  }, componentRoot.value)
}

// Update morph effect when settings change
watch([morphIntensity, morphSpeed, currentMode], () => {
  canvasRefs.value.forEach((canvas, index) => {
    if (canvas && galleryItems[index]) {
      applyMorphEffect(canvas, galleryItems[index].image, morphIntensity.value)
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
.sim-morph-section-231 {
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
    background:
      radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(234, 179, 8, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
}

.sim-container-231 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sim-title-231 {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #22c55e, #eab308, #f97316, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: sim-gradient-flow-231 6s ease infinite;
}

@keyframes sim-gradient-flow-231 {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
}

.sim-subtitle-231 {
  text-align: center;
  color: #22c55e;
  font-size: 1.2rem;
  margin-bottom: 40px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.sim-morph-control-panel-231 {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding: 25px;
  background: rgba(34, 197, 94, 0.03);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.sim-control-group-231 {
  display: flex;
  align-items: center;
  gap: 15px;
}

.sim-label-231 {
  color: #22c55e;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}

.sim-slider-231 {
  width: 120px;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 3px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #22c55e, #eab308);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
  }
}

.sim-value-231 {
  color: #eab308;
  font-size: 14px;
  font-weight: 600;
  min-width: 50px;
}

.sim-mode-buttons-231 {
  display: flex;
  gap: 8px;
}

.sim-mode-btn-231 {
  padding: 8px 16px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;

  &:hover {
    background: rgba(34, 197, 94, 0.2);
    border-color: rgba(34, 197, 94, 0.6);
  }

  &.sim-active-231 {
    background: linear-gradient(135deg, #22c55e, #eab308);
    border-color: transparent;
    color: #0a0a1a;
    font-weight: 600;
  }
}

.sim-morph-gallery-231 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 50px;
  margin-bottom: 60px;
}

.sim-morph-item-231 {
  perspective: 2000px;
}

.sim-morph-wrapper-231 {
  position: relative;
  border-radius: 16px;
  padding: 40px;
  background: rgba(10, 10, 26, 0.8);
  border: 1px solid rgba(34, 197, 94, 0.3);
  box-shadow:
    0 0 60px rgba(34, 197, 94, 0.2),
    inset 0 0 60px rgba(34, 197, 94, 0.05);
  transform-style: preserve-3d;
}

.sim-morph-container-231 {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.sim-original-layer-231 {
  position: relative;
  z-index: 1;
}

.sim-morph-image-231 {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.sim-morphed-layer-231 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.sim-morph-canvas-231 {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.sim-morph-grid-231 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.sim-grid-point-231 {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(34, 197, 94, 0.5);
  border-radius: 50%;
  top: 20%;
  left: 20%;
  transform: translate(calc(var(--i) * 20px), calc(var(--i) * 15px));
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
}

.sim-liquid-ripple-231 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 4;
  pointer-events: none;
}

.sim-ripple-231 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 2px solid rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
}

.sim-morph-overlay-231 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(transparent, rgba(10, 10, 26, 0.95));
  z-index: 10;
  border-top: 1px solid rgba(34, 197, 94, 0.3);
}

.sim-morph-content-231 {
  transform: translateZ(10px);
}

.sim-morph-badge-231 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: 6px;
  color: #22c55e;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.sim-card-title-231 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #eab308;
  margin-bottom: 8px;
  text-shadow: 0 0 20px rgba(234, 179, 8, 0.5);
}

.sim-card-desc-231 {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 20px;
  line-height: 1.6;
}

.sim-morph-metrics-231 {
  display: flex;
  gap: 20px;
}

.sim-metric-231 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sim-metric-label-231 {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sim-metric-value-231 {
  font-size: 14px;
  color: #eab308;
  font-weight: 600;
}

.sim-morph-status-231 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 30px;
  background: rgba(34, 197, 94, 0.03);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.sim-status-display-231 {
  display: flex;
  align-items: center;
  gap: 15px;
}

.sim-morph-icon-231 {
  width: 50px;
  height: 50px;
  color: #22c55e;
}

.sim-icon-svg-231 {
  width: 100%;
  height: 100%;
}

.sim-status-info-231 {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sim-status-label-231 {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sim-status-text-231 {
  font-size: 14px;
  color: #eab308;
  font-weight: 600;
}

.sim-morph-wave-231 {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 30px;
}

.sim-wave-line-231 {
  width: 3px;
  height: 100%;
  background: linear-gradient(to top, #22c55e, #eab308);
  border-radius: 2px;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .sim-title-231 {
    font-size: 2rem;
  }

  .sim-morph-gallery-231 {
    grid-template-columns: 1fr;
  }

  .sim-morph-control-panel-231 {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
