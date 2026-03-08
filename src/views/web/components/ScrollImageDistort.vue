<template>
  <section class="sid-scroll-image-distort-127">
    <div class="sid-container-127">
      <h2 class="sid-section-title-127">滚动图片扭曲</h2>
      <p class="sid-section-subtitle-127">Scroll Image Distortion Animation</p>

      <div class="sid-distort-wrapper-127">
        <div class="sid-main-image-127" ref="mainImage">
          <div class="sid-image-layers-127">
            <div
              v-for="(img, index) in images"
              :key="index"
              class="sid-image-layer-127"
              :data-layer="index"
              :ref="el => { if (el) imageLayers[index] = el as HTMLElement }"
            >
              <img :src="img.url" :alt="`Image ${index + 1}`" />
              <div class="sid-layer-overlay-127">
                <h3 class="sid-layer-title-127">{{ img.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="sid-info-panel-127" ref="infoPanel">
          <div class="sid-info-content-127">
            <div class="sid-indicator-127">
              <span class="sid-current-127" ref="currentNum">01</span>
              <span class="sid-separator-127">/</span>
              <span class="sid-total-127">06</span>
            </div>
            <div class="sid-progress-bar-127" ref="progressBar">
              <div class="sid-progress-fill-127" ref="progressFill"></div>
            </div>
            <h3 class="sid-main-title-127" ref="mainTitle">视觉扭曲</h3>
            <p class="sid-main-desc-127" ref="mainDesc">
              通过滚动扭曲图片，创造独特的视觉体验，每个角度都是艺术品。
            </p>
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

const mainImage = ref<HTMLElement | null>(null)
const infoPanel = ref<HTMLElement | null>(null)
const imageLayers = ref<HTMLElement[]>([])
const currentNum = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const progressFill = ref<HTMLElement | null>(null)
const mainTitle = ref<HTMLElement | null>(null)
const mainDesc = ref<HTMLElement | null>(null)

const images = [
  { url: new URL('@/assets/image/1.png', import.meta.url).href, title: '第一层' },
  { url: new URL('@/assets/image/2.png', import.meta.url).href, title: '第二层' },
  { url: new URL('@/assets/image/3.png', import.meta.url).href, title: '第三层' },
  { url: new URL('@/assets/image/4.png', import.meta.url).href, title: '第四层' },
  { url: new URL('@/assets/image/5.png', import.meta.url).href, title: '第五层' },
  { url: new URL('@/assets/image/6.png', import.meta.url).href, title: '第六层' }
]

const titles = ['视觉扭曲', '空间变换', '角度重构', '维度探索', '形态演变', '艺术创造']
const descriptions = [
  '通过滚动扭曲图片，创造独特的视觉体验。',
  '在空间中变换视角，发现新的视觉语言。',
  '重新构建观看角度，打破传统认知。',
  '探索多维度的视觉表现，拓展创作边界。',
  '观察形态的演变过程，感受动态之美。',
  '将技术转化为艺术，每帧都是创作。'
]

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题扭曲动画
    gsap.from('.sid-section-title-127', {
      scrollTrigger: {
        trigger: '.sid-scroll-image-distort-127',
        start: 'top 90%'
      },
      skewX: 20,
      skewY: 10,
      scale: 1.3,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    })

    // 副标题淡入
    gsap.from('.sid-section-subtitle-127', {
      scrollTrigger: {
        trigger: '.sid-scroll-image-distort-127',
        start: 'top 85%'
      },
      x: -80,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out'
    })

    // 延迟执行图片层动画，确保refs已填充
    setTimeout(() => {
      imageLayers.value.forEach((layer, index) => {
        if (!layer) return

        const overlay = layer.querySelector('.sid-layer-overlay-127') as HTMLElement
        const title = layer.querySelector('.sid-layer-title-127') as HTMLElement

        // 初始状态 - 错位分布
        gsap.set(layer, {
          x: (index - 2.5) * 120,
          y: (index - 2.5) * 40,
          scale: 1 - Math.abs(index - 2.5) * 0.1,
          rotation: (index - 2.5) * 12,
          skewX: (index - 2.5) * 8,
          opacity: 0
        })

        if (overlay) gsap.set(overlay, { opacity: 0 })
        if (title) gsap.set(title, { scale: 0, rotation: -180 })

        // 滚动扭曲动画 - 简化为固定值
        gsap.to(layer, {
          scrollTrigger: {
            trigger: mainImage.value,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.5
          },
          x: (index - 2.5) * 60,
          y: (index - 2.5) * 20,
          scale: 1 - Math.abs(index - 2.5) * 0.05,
          rotation: (index - 2.5) * 6,
          skewX: (index - 2.5) * 4,
          opacity: 1 - Math.abs(index - 2.5) * 0.15,
          ease: 'power2.out'
        })

        // 覆盖层动画
        if (overlay) {
          gsap.to(overlay, {
            scrollTrigger: {
              trigger: mainImage.value,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1
            },
            opacity: 1 - Math.abs(index - 2.5) * 0.2,
            ease: 'power2.out'
          })
        }

        // 标题展开
        if (title) {
          gsap.to(title, {
            scrollTrigger: {
              trigger: mainImage.value,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1
            },
            scale: 1 - Math.abs(index - 2.5) * 0.1,
            rotation: 0,
            opacity: 1 - Math.abs(index - 2.5) * 0.2,
            ease: 'back.out(1.7)'
          })
        }

        // 悬停效果
        layer.addEventListener('mouseenter', () => {
          gsap.to(layer, {
            scale: 1.1,
            rotation: (index - 2.5) * 12 + 5,
            duration: 0.4,
            ease: 'power2.out'
          })
        })

        layer.addEventListener('mouseleave', () => {
          gsap.to(layer, {
            scale: 1 - Math.abs(index - 2.5) * 0.05,
            rotation: (index - 2.5) * 6,
            duration: 0.4,
            ease: 'power2.out'
          })
        })
      })
    }, 100)

    // 信息面板动画
    if (infoPanel.value) {
      gsap.fromTo(infoPanel.value,
        {
          x: 100,
          opacity: 0,
          rotationY: 30
        },
        {
          scrollTrigger: {
            trigger: mainImage.value,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1
          },
          x: 0,
          opacity: 1,
          rotationY: 0,
          ease: 'power3.out'
        }
      )
    }

    // 数字切换动画
    gsap.to({}, {
      scrollTrigger: {
        trigger: mainImage.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const index = Math.floor(progress * 6)
          const safeIndex = Math.min(Math.max(index, 0), 5)
          if (currentNum.value) {
            currentNum.value.textContent = String(safeIndex + 1).padStart(2, '0')
          }
          if (progressFill.value) {
            progressFill.value.style.width = `${progress * 100}%`
          }
          if (mainTitle.value) {
            mainTitle.value.textContent = titles[safeIndex]
          }
          if (mainDesc.value) {
            mainDesc.value.textContent = descriptions[safeIndex]
          }
        }
      }
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.sid-scroll-image-distort-127 {
  min-height: 300vh;
  padding: 100px 20px;
  background: linear-gradient(180deg, #0a0a1a 0%, #1e1e3f 50%, #0a0a1a 100%);
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
      radial-gradient(ellipse at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 70%),
      radial-gradient(ellipse at 20% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
}

.sid-container-127 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sid-section-title-127 {
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ec4899, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 60px rgba(236, 72, 153, 0.4);
}

.sid-section-subtitle-127 {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 150px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.sid-distort-wrapper-127 {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
}

.sid-main-image-127 {
  flex: 1;
  position: relative;
  height: 600px;
  perspective: 2000px;
}

.sid-image-layers-127 {
  width: 100%;
  height: 100%;
  position: relative;
}

.sid-image-layer-127 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    box-shadow: 0 35px 100px rgba(236, 72, 153, 0.5);
  }
}

.sid-layer-overlay-127 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  pointer-events: none;
}

.sid-layer-title-127 {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.sid-info-panel-127 {
  flex: 0 0 350px;
  position: sticky;
  top: 100px;
  background: linear-gradient(135deg, rgba(30, 30, 63, 0.9) 0%, rgba(15, 15, 47, 0.9) 100%);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.sid-info-content-127 {
  position: relative;
}

.sid-indicator-127 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
}

.sid-current-127 {
  font-size: 3rem;
  background: linear-gradient(135deg, #ec4899, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sid-separator-127 {
  color: rgba(255, 255, 255, 0.3);
}

.sid-total-127 {
  color: rgba(255, 255, 255, 0.3);
}

.sid-progress-bar-127 {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 40px;
  overflow: hidden;
}

.sid-progress-fill-127 {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #ec4899, #a855f7, #3b82f6);
  border-radius: 2px;
  transition: width 0.1s ease;
}

.sid-main-title-127 {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.3;
  background: linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sid-main-desc-127 {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .sid-distort-wrapper-127 {
    flex-direction: column;
    gap: 40px;
  }

  .sid-main-image-127 {
    height: 400px;
  }

  .sid-info-panel-127 {
    flex: none;
    width: 100%;
    position: static;
  }

  .sid-current-127 {
    font-size: 2rem;
  }

  .sid-main-title-127 {
    font-size: 1.5rem;
  }

  .sid-layer-title-127 {
    font-size: 1.5rem;
  }

  .sid-section-title-127 {
    margin-bottom: 80px;
  }

  .sid-section-subtitle-127 {
    margin-bottom: 60px;
    font-size: 0.9rem;
  }

  .sid-container-127 {
    padding: 0 20px;
  }
}
</style>
