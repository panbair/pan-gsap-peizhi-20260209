<template>
  <div class="sai-section-228" ref="componentRoot">
    <div class="sai-container-228">
      <h2 class="sai-title-228">极光图片流动</h2>
      <p class="sai-subtitle-228">Aurora Image Flow</p>

      <!-- 控制面板 -->
      <div class="sai-control-panel-228">
        <div class="sai-control-group-228">
          <label class="sai-label-228">流动速度</label>
          <input
            type="range"
            min="1"
            max="10"
            v-model.number="flowSpeed"
            class="sai-slider-228"
          />
          <span class="sai-value-228">{{ flowSpeed }}x</span>
        </div>
        <div class="sai-control-group-228">
          <label class="sai-label-228">光晕强度</label>
          <input
            type="range"
            min="0"
            max="100"
            v-model.number="glowIntensity"
            class="sai-slider-228"
          />
          <span class="sai-value-228">{{ glowIntensity }}%</span>
        </div>
        <div class="sai-control-group-228">
          <label class="sai-label-228">混合模式</label>
          <button
            class="sai-mode-btn-228"
            :class="{ 'sai-active-228': currentMode === mode }"
            v-for="mode in blendModes"
            :key="mode"
            @click="setMode(mode)"
          >
            {{ mode }}
          </button>
        </div>
      </div>

      <!-- 极光图片画廊 -->
      <div class="sai-aurora-gallery-228">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="sai-aurora-item-228"
          :class="{ 'sai-active-228': currentIndex === index }"
          @click="setCurrentImage(index)"
        >
          <div class="sai-image-wrapper-228">
            <img
              :src="item.src"
              :alt="item.title"
              class="sai-base-image-228"
            />
            <div class="sai-aurora-overlay-228">
              <div class="sai-aurora-wave-228" v-for="i in 3" :key="i"></div>
            </div>
            <div class="sai-glow-effect-228"></div>
          </div>
          <div class="sai-image-info-228">
            <h3 class="sai-image-title-228">{{ item.title }}</h3>
            <p class="sai-image-desc-228">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 极光进度条 -->
      <div class="sai-progress-bar-228">
        <div class="sai-progress-fill-228" :style="{ width: progress + '%' }"></div>
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
const currentIndex = ref(0)
const flowSpeed = ref(5)
const glowIntensity = ref(60)
const currentMode = ref('overlay')
const progress = ref(0)

const blendModes = ['overlay', 'screen', 'color-dodge', 'exclusion']

interface AuroraImage {
  src: string
  title: string
  desc: string
}

const images: AuroraImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    title: '山川日落',
    desc: 'Mountain Sunset'
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600',
    title: '碧海蓝天',
    desc: 'Ocean Blue'
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
    title: '森林晨光',
    desc: 'Forest Morning'
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600',
    title: '星空璀璨',
    desc: 'Starry Night'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    title: '都市繁华',
    desc: 'City Lights'
  }
]

const setCurrentImage = (index: number) => {
  currentIndex.value = index
  updateAuroraAnimation()
}

const setMode = (mode: string) => {
  currentMode.value = mode
  updateGlowEffect()
}

const updateGlowEffect = () => {
  const glows = document.querySelectorAll('.sai-glow-effect-228')
  glows.forEach(glow => {
    const el = glow as HTMLElement
    el.style.mixBlendMode = currentMode.value
    el.style.opacity = glowIntensity.value / 100
  })
}

let auroraTimeline: gsap.core.Timeline | null = null

const updateAuroraAnimation = () => {
  if (auroraTimeline) {
    auroraTimeline.kill()
  }

  const waves = document.querySelectorAll('.sai-aurora-wave-228')
  const overlays = document.querySelectorAll('.sai-aurora-overlay-228')

  auroraTimeline = gsap.timeline({ repeat: -1, yoyo: true })

  waves.forEach((wave, index) => {
    auroraTimeline!.to(wave, {
      xPercent: -50,
      yPercent: -30,
      rotation: 15,
      duration: 3 + index,
      ease: 'sine.inOut',
      opacity: 0.3 + (index * 0.2)
    }, 0)
  })

  overlays.forEach(overlay => {
    auroraTimeline!.to(overlay, {
      opacity: 0.4,
      duration: 2,
      ease: 'power1.inOut'
    }, 0)
  })
}

const initAnimations = () => {
  // 极光波浪动画
  updateAuroraAnimation()

  // 滚动触发图片流动
  const items = document.querySelectorAll('.sai-aurora-item-228')

  items.forEach((item, index) => {
    gsap.fromTo(item,
      {
        y: 100,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // 滚动进度
  ScrollTrigger.create({
    trigger: componentRoot.value,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    onUpdate: (self) => {
      progress.value = self.progress * 100
    }
  })

  // 图片悬停效果
  items.forEach(item => {
    const image = item.querySelector('.sai-base-image-228') as HTMLElement
    const glow = item.querySelector('.sai-glow-effect-228') as HTMLElement

    gsap.to(image, {
      scale: 1.1,
      duration: 0.5,
      ease: 'power2.out',
      paused: true,
      onReverseComplete: () => {
        gsap.set(image, { scale: 1 })
      }
    })

    item.addEventListener('mouseenter', () => {
      gsap.to(image, { scale: 1.1, duration: 0.5, ease: 'power2.out' })
      gsap.to(glow, { opacity: glowIntensity.value / 100, duration: 0.3 })
    })

    item.addEventListener('mouseleave', () => {
      gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' })
      gsap.to(glow, { opacity: 0, duration: 0.3 })
    })
  })
}

const cleanup = () => {
  if (auroraTimeline) {
    auroraTimeline.kill()
    auroraTimeline = null
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

onMounted(() => {
  initAnimations()
})

onUnmounted(() => {
  cleanup()
})

watch([flowSpeed, glowIntensity], () => {
  updateAuroraAnimation()
  updateGlowEffect()
})
</script>

<style scoped lang="scss">
.sai-section-228 {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a2a 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

.sai-section-228::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.sai-container-228 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sai-title-228 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.sai-subtitle-228 {
  font-size: 1.2rem;
  color: #94a3b8;
  text-align: center;
  margin-bottom: 40px;
}

.sai-control-panel-228 {
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

.sai-control-group-228 {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
}

.sai-label-228 {
  font-size: 14px;
  color: #94a3b8;
  font-weight: 500;
}

.sai-slider-228 {
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
    background: linear-gradient(135deg, #a78bfa, #60a5fa);
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.sai-value-228 {
  font-size: 13px;
  color: #a78bfa;
  font-weight: 600;
}

.sai-mode-btn-228 {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.sai-active-228 {
    background: linear-gradient(135deg, #a78bfa, #60a5fa);
    border-color: transparent;
  }
}

.sai-aurora-gallery-228 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.sai-aurora-item-228 {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s;

  &.sai-active-228 {
    border-color: #a78bfa;
    box-shadow: 0 0 30px rgba(167, 139, 250, 0.3);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #60a5fa;
  }
}

.sai-image-wrapper-228 {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.sai-base-image-228 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.sai-aurora-overlay-228 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.sai-aurora-wave-228 {
  position: absolute;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    135deg,
    rgba(167, 139, 250, 0.3) 0%,
    rgba(96, 165, 250, 0.2) 50%,
    rgba(244, 114, 182, 0.3) 100%
  );
  border-radius: 50%;
  filter: blur(60px);
  mix-blend-mode: screen;
}

.sai-glow-effect-228 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(167, 139, 250, 0.6) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.sai-image-info-228 {
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.sai-image-title-228 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 5px;
}

.sai-image-desc-228 {
  font-size: 0.9rem;
  color: #94a3b8;
}

.sai-progress-bar-228 {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.sai-progress-fill-228 {
  height: 100%;
  background: linear-gradient(90deg, #a78bfa, #60a5fa, #f472b6);
  transition: width 0.3s;
}
</style>
