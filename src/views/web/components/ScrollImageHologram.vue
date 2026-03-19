<template>
  <div class="saii-section-232" ref="componentRoot">
    <div class="saii-container-232">
      <h2 class="saii-title-232">全息图片投影</h2>
      <p class="saii-subtitle-232">Holographic Image Projection</p>

      <!-- 控制面板 -->
      <div class="saii-control-panel-232">
        <div class="saii-control-group-232">
          <label class="saii-label-232">投影角度</label>
          <input
            type="range"
            min="-45"
            max="45"
            v-model.number="projectionAngle"
            class="saii-slider-232"
          />
          <span class="saii-value-232">{{ projectionAngle }}°</span>
        </div>
        <div class="saii-control-group-232">
          <label class="saii-label-232">全息强度</label>
          <input
            type="range"
            min="0"
            max="100"
            v-model.number="hologramIntensity"
            class="saii-slider-232"
          />
          <span class="saii-value-232">{{ hologramIntensity }}%</span>
        </div>
        <div class="saii-control-group-232">
          <label class="saii-label-232">扫描速度</label>
          <input
            type="range"
            min="1"
            max="10"
            v-model.number="scanSpeed"
            class="saii-slider-232"
          />
          <span class="saii-value-232">{{ scanSpeed }}x</span>
        </div>
      </div>

      <!-- 全息投影舞台 -->
      <div class="saii-hologram-stage-232">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="saii-hologram-item-232"
          :class="{ 'saii-active-232': currentIndex === index }"
          @click="setCurrentImage(index)"
        >
          <!-- 全息基底 -->
          <div class="saii-base-plate-232">
            <div class="saii-base-ring-232" v-for="i in 3" :key="i"></div>
            <div class="saii-base-core-232"></div>
          </div>

          <!-- 全息投影层 -->
          <div class="saii-projection-layers-232">
            <!-- 扫描线层 -->
            <div class="saii-scan-layer-232">
              <div class="saii-scan-line-232"></div>
              <div class="saii-scan-beam-232"></div>
            </div>

            <!-- 图像投影层 -->
            <div class="saii-image-layer-232">
              <img
                :src="image.src"
                :alt="image.title"
                class="saii-projection-image-232"
                :style="getImageStyle()"
              />
              <div class="saii-image-overlay-232">
                <div class="saii-overlay-grid-232" v-for="i in 8" :key="i"></div>
              </div>
            </div>

            <!-- 全息效果层 -->
            <div class="saii-effect-layer-232">
              <div class="saii-particle-field-232" v-for="i in 50" :key="i"></div>
              <div class="saii-glitch-effect-232">
                <div class="saii-glitch-line-232" v-for="i in 5" :key="i"></div>
              </div>
            </div>

            <!-- 光束层 -->
            <div class="saii-beam-layer-232">
              <div class="saii-light-beam-232"></div>
              <div class="saii-energy-ring-232" v-for="i in 4" :key="i"></div>
            </div>
          </div>

          <!-- 图片信息 -->
          <div class="saii-image-info-232">
            <h3 class="saii-image-title-232">{{ image.title }}</h3>
            <p class="saii-image-desc-232">{{ image.desc }}</p>
            <div class="saii-projection-status-232">
              <span class="saii-status-dot-232"></span>
              <span class="saii-status-text-232">投影中</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 全息控制器 -->
      <div class="saii-hologram-controls-232">
        <button
          class="saii-control-btn-232"
          @click="toggleProjection"
          :class="{ 'saii-active-232': isProjecting }"
        >
          {{ isProjecting ? '⏸ 暂停投影' : '▶ 开始投影' }}
        </button>
        <button
          class="saii-control-btn-232"
          @click="rotateProjection"
        >
          🔄 旋转投影
        </button>
        <button
          class="saii-control-btn-232"
          @click="changeColor"
        >
          🎨 切换颜色
        </button>
      </div>

      <!-- 全息数据面板 -->
      <div class="saii-data-panel-232">
        <div class="saii-data-row-232">
          <span class="saii-data-label-232">投影角度</span>
          <span class="saii-data-value-232">{{ projectionAngle }}°</span>
        </div>
        <div class="saii-data-row-232">
          <span class="saii-data-label-232">全息强度</span>
          <span class="saii-data-value-232">{{ hologramIntensity }}%</span>
        </div>
        <div class="saii-data-row-232">
          <span class="saii-data-label-232">扫描速度</span>
          <span class="saii-data-value-232">{{ scanSpeed }}x</span>
        </div>
        <div class="saii-data-row-232">
          <span class="saii-data-label-232">粒子数量</span>
          <span class="saii-data-value-232">50</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const componentRoot = ref<HTMLElement>()
const currentIndex = ref(0)
const projectionAngle = ref(15)
const hologramIntensity = ref(80)
const scanSpeed = ref(5)
const isProjecting = ref(true)
const currentColor = ref(0)

const colors = [
  'rgba(96, 165, 250, 0.6)',
  'rgba(192, 132, 252, 0.6)',
  'rgba(244, 114, 182, 0.6)',
  'rgba(34, 211, 238, 0.6)'
]

interface HologramImage {
  src: string
  title: string
  desc: string
}

const images: HologramImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    title: '山川全息',
    desc: 'Mountain Hologram'
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600',
    title: '海洋投影',
    desc: 'Ocean Projection'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
    title: '森林全息',
    desc: 'Forest Hologram'
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
    title: '星空投影',
    desc: 'Starry Projection'
  }
]

const setCurrentImage = (index: number) => {
  currentIndex.value = index
}

const getImageStyle = () => {
  return {
    opacity: hologramIntensity.value / 100,
    transform: `rotateX(${projectionAngle.value}deg) scale(${1 + hologramIntensity.value / 200})`
  }
}

const toggleProjection = () => {
  isProjecting.value = !isProjecting.value
}

const rotateProjection = () => {
  const projectionLayer = document.querySelector('.saii-image-layer-232') as HTMLElement
  if (projectionLayer) {
    gsap.to(projectionLayer, {
      rotateY: 360,
      duration: 2,
      ease: 'power2.inOut'
    })
  }
}

const changeColor = () => {
  currentColor.value = (currentColor.value + 1) % colors.length
}

let scanAnimation: gsap.core.Tween | null = null
let particleAnimations: gsap.core.Tween[] = []
let baseRingAnimations: gsap.core.Tween[] = []

const initHologramEffects = () => {
  const items = document.querySelectorAll('.saii-hologram-item-232')
  const scanLines = document.querySelectorAll('.saii-scan-line-232')
  const scanBeams = document.querySelectorAll('.saii-scan-beam-232')
  const particles = document.querySelectorAll('.saii-particle-field-232')
  const baseRings = document.querySelectorAll('.saii-base-ring-232')
  const glitchLines = document.querySelectorAll('.saii-glitch-line-232')
  const energyRings = document.querySelectorAll('.saii-energy-ring-232')

  // 扫描线动画
  scanAnimation = gsap.to(scanLines, {
    yPercent: 100,
    opacity: [0, 1, 0],
    duration: 2 / scanSpeed.value,
    repeat: -1,
    ease: 'linear'
  })

  gsap.to(scanBeams, {
    scaleY: 1.5,
    opacity: [0.5, 0.2, 0.5],
    duration: 1.5 / scanSpeed.value,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })

  // 粒子动画
  particleAnimations = Array.from(particles).map((particle, index) => {
    const x = (index % 10) * 30
    const y = Math.floor(index / 10) * 30
    gsap.set(particle, { left: x, top: y })

    return gsap.to(particle, {
      y: -20,
      x: Math.sin(index) * 10,
      opacity: [0, 1, 0],
      duration: 2 + Math.random(),
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: index * 0.02
    })
  })

  // 基底环旋转
  baseRingAnimations = Array.from(baseRings).map((ring, index) => {
    return gsap.to(ring, {
      rotation: 360,
      duration: 10 + index * 5,
      repeat: -1,
      ease: 'none',
      direction: index % 2 === 0 ? 1 : -1
    })
  })

  // 故障效果
  gsap.to(glitchLines, {
    xPercent: [0, -20, 20, 0],
    opacity: [0, 1, 0.5, 0],
    duration: 0.5,
    repeat: -1,
    stagger: 0.1,
    ease: 'none'
  })

  // 能量环
  gsap.to(energyRings, {
    scale: 1.5,
    opacity: 0,
    duration: 2,
    repeat: -1,
    stagger: 0.3,
    ease: 'power1.out'
  })

  // 滚动触发
  items.forEach((item, index) => {
    gsap.fromTo(item,
      {
        y: 150,
        opacity: 0,
        rotateX: 30
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
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

  // 鼠标交互
  items.forEach(item => {
    const projectionLayer = item.querySelector('.saii-image-layer-232') as HTMLElement

    projectionLayer.addEventListener('mousemove', (e) => {
      const rect = projectionLayer.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(projectionLayer, {
        rotateX: projectionAngle.value - y * 30,
        rotateY: x * 30,
        duration: 0.3,
        ease: 'power2.out'
      })
    })

    projectionLayer.addEventListener('mouseleave', () => {
      gsap.to(projectionLayer, {
        rotateX: projectionAngle.value,
        rotateY: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      })
    })
  })
}

const cleanup = () => {
  if (scanAnimation) {
    scanAnimation.kill()
    scanAnimation = null
  }
  particleAnimations.forEach(anim => anim.kill())
  baseRingAnimations.forEach(anim => anim.kill())
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

onMounted(() => {
  initHologramEffects()
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped lang="scss">
.saii-section-232 {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a2a 0%, #1a0a3a 50%, #0a2a3a 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  opacity: 1 !important;}

.saii-section-232::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(192, 132, 252, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.saii-container-232 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  opacity: 1 !important;}

.saii-title-232 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #60a5fa, #c084fc, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;

  opacity: 1 !important;}

.saii-subtitle-232 {
  font-size: 1.2rem;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 40px;

  opacity: 1 !important;}

.saii-control-panel-232 {
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

  opacity: 1 !important;}

.saii-control-group-232 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;

  opacity: 1 !important;}

.saii-label-232 {
  font-size: 14px;
  color: #94a3b8;
  font-weight: 500;

  opacity: 1 !important;}

.saii-slider-232 {
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
    background: linear-gradient(135deg, #60a5fa, #c084fc);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    
  opacity: 1 !important;}
  }
}

.saii-value-232 {
  font-size: 13px;
  color: #60a5fa;
  font-weight: 600;

  opacity: 1 !important;}

.saii-hologram-stage-232 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.saii-hologram-item-232 {
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s;
  perspective: 2000px;

  &.saii-active-232 {
    border-color: #60a5fa;
    box-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
  
  opacity: 1 !important;}

  &:hover {
    transform: translateY(-5px);
    border-color: #c084fc;
  }
}

.saii-base-plate-232 {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  z-index: 1;

  opacity: 1 !important;}

.saii-base-ring-232 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(96, 165, 250, 0.3);
  border-radius: 50%;

  &:nth-child(1) { width: 200px; height: 200px; 
  opacity: 1 !important;}
  &:nth-child(2) { width: 150px; height: 150px; border-color: rgba(192, 132, 252, 0.3); }
  &:nth-child(3) { width: 100px; height: 100px; border-color: rgba(244, 114, 182, 0.3); }
}

.saii-base-core-232 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.6);
  animation: pulse 2s ease-in-out infinite;

  opacity: 1 !important;}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}

.saii-projection-layers-232 {
  position: relative;
  height: 300px;
  perspective: 1000px;

  opacity: 1 !important;}

.saii-scan-layer-232 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.saii-scan-line-232 {
  position: absolute;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent);
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.8);

  opacity: 1 !important;}

.saii-scan-beam-232 {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100px;
  height: 150px;
  background: linear-gradient(180deg, rgba(96, 165, 250, 0.3) 0%, transparent 100%);
  transform: translateX(-50%);
  filter: blur(20px);

  opacity: 1 !important;}

.saii-image-layer-232 {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 80px;
  transform-style: preserve-3d;
  transition: all 0.3s;
}

.saii-projection-image-232 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(1.2) contrast(1.1);

  opacity: 1 !important;}

.saii-image-overlay-232 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.saii-overlay-grid-232 {
  position: absolute;
  width: 100%;
  height: 25%;
  background: linear-gradient(90deg, rgba(96, 165, 250, 0.1) 0%, transparent 100%);

  &:nth-child(1) { top: 0; 
  opacity: 1 !important;}
  &:nth-child(2) { top: 25%; }
  &:nth-child(3) { top: 50%; }
  &:nth-child(4) { top: 75%; }
}

.saii-effect-layer-232 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.saii-particle-field-232 {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(96, 165, 250, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.6);

  opacity: 1 !important;}

.saii-glitch-effect-232 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.saii-glitch-line-232 {
  position: absolute;
  width: 100%;
  height: 2px;
  background: rgba(192, 132, 252, 0.4);
  filter: blur(2px);

  &:nth-child(1) { top: 20%; 
  opacity: 1 !important;}
  &:nth-child(2) { top: 40%; }
  &:nth-child(3) { top: 60%; }
  &:nth-child(4) { top: 80%; }
  &:nth-child(5) { top: 90%; }
}

.saii-beam-layer-232 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.saii-light-beam-232 {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(96, 165, 250, 0.5) 100%);
  filter: blur(2px);

  opacity: 1 !important;}

.saii-energy-ring-232 {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  border: 2px solid rgba(96, 165, 250, 0.6);
  border-radius: 50%;
  filter: blur(2px);

  opacity: 1 !important;}

.saii-image-info-232 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  opacity: 1 !important;}

.saii-image-title-232 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 5px;

  opacity: 1 !important;}

.saii-image-desc-232 {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 10px;

  opacity: 1 !important;}

.saii-projection-status-232 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.saii-status-dot-232 {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  animation: statusPulse 1s ease-in-out infinite;

  opacity: 1 !important;}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.saii-status-text-232 {
  font-size: 12px;
  color: #22c55e;
  font-weight: 600;

  opacity: 1 !important;}

.saii-hologram-controls-232 {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.saii-control-btn-232 {
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
  
  opacity: 1 !important;}

  &.saii-active-232 {
    background: linear-gradient(135deg, #60a5fa, #c084fc);
    border-color: transparent;
  
  opacity: 1 !important;}
}

.saii-data-panel-232 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  opacity: 1 !important;}

.saii-data-row-232 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;

  opacity: 1 !important;}

.saii-data-label-232 {
  font-size: 13px;
  color: #94a3b8;

  opacity: 1 !important;}

.saii-data-value-232 {
  font-size: 14px;
  font-weight: 600;
  color: #60a5fa;

  opacity: 1 !important;}
</style>
