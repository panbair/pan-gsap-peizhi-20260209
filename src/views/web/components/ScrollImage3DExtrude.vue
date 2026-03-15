<template>
  <section ref="extrudeSection" class="ie-section-228">
    <!-- 动态背景 -->
    <div class="ie-bg-gradient-228"></div>
    <canvas ref="particleCanvas" class="ie-particles-228"></canvas>

    <div class="ie-header-228">
      <h2 class="ie-title-228">3D 维度挤出</h2>
      <p class="ie-subtitle-228">3D Dimension Extrusion</p>
    </div>

    <!-- 3D挤出容器 -->
    <div class="ie-extrude-container-228">
      <div ref="scene" class="ie-scene-228">
        <!-- 多层3D卡片 -->
        <div ref="card3D" class="ie-card-3d-228">
          <!-- 底层卡片 -->
          <div class="ie-card-layer-228 ie-layer-back-228" :style="layerStyle(0)">
            <div class="ie-layer-content-228">
              <img :src="currentImage" alt="3D Layer" />
            </div>
          </div>

          <!-- 中间卡片层 -->
          <div
            v-for="i in 6"
            :key="`mid-${i}`"
            :ref="el => { if (el) midLayerRefs[i] = el as HTMLElement }"
            class="ie-card-layer-228 ie-layer-mid-228"
            :style="layerStyle(i * 0.15)"
          >
            <div class="ie-layer-content-228">
              <img :src="currentImage" alt="3D Layer" />
            </div>
          </div>

          <!-- 顶层卡片 -->
          <div
            ref="frontLayer"
            class="ie-card-layer-228 ie-layer-front-228"
            :style="layerStyle(1)"
          >
            <div class="ie-layer-content-228">
              <img :src="currentImage" alt="3D Layer" />
              <div class="ie-layer-glow-228"></div>
            </div>
          </div>

          <!-- 侧边3D面 -->
          <div
            v-for="side in ['top', 'right', 'bottom', 'left']"
            :key="side"
            :ref="el => { if (el) sideRefs[side] = el as HTMLElement }"
            class="ie-card-side-228"
            :class="`ie-side-${side}-228`"
            :style="sideStyle(side)"
          ></div>
        </div>
      </div>
    </div>

    <!-- 装饰性光效 -->
    <div class="ie-decorative-lights-228">
      <div
        v-for="i in 3"
        :key="i"
        :ref="el => { if (el) lightRefs[i] = el as HTMLElement }"
        class="ie-light-228"
        :class="`ie-light-${i}-228`"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const extrudeSection = ref<HTMLElement>()
const scene = ref<HTMLElement>()
const card3D = ref<HTMLElement>()
const frontLayer = ref<HTMLElement>()
const particleCanvas = ref<HTMLCanvasElement>()
const midLayerRefs = ref<Record<number, HTMLElement>>({})
const sideRefs = ref<Record<string, HTMLElement>>({})
const lightRefs = ref<Record<number, HTMLElement>>({})

// 当前图片索引
const currentImageIndex = ref(0)

// 图片列表
const images = [
  new URL('@/assets/image/1.png', import.meta.url).href,
  new URL('@/assets/image/2.png', import.meta.url).href,
  new URL('@/assets/image/3.png', import.meta.url).href
]

// 当前图片
const currentImage = computed(() => images[currentImageIndex.value])

// 卡片尺寸
const cardSize = {
  width: 400,
  height: 280,
  depth: 120
}

// 计算层样式
const layerStyle = (progress: number) => {
  const zOffset = progress * cardSize.depth
  return {
    transform: `translateZ(${zOffset}px)`,
    opacity: 0.9 + progress * 0.1
  }
}

// 计算侧边样式
const sideStyle = (side: string) => {
  const depth = cardSize.depth
  const style: Record<string, string> = {
    position: 'absolute'
  }

  switch (side) {
    case 'top':
      return {
        ...style,
        width: `${cardSize.width}px`,
        height: `${depth}px`,
        top: `-${depth}px`,
        left: '0',
        transform: `rotateX(-90deg)`,
        background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2))'
      }
    case 'right':
      return {
        ...style,
        width: `${depth}px`,
        height: `${cardSize.height}px`,
        top: '0',
        right: `-${depth}px`,
        transform: `rotateY(90deg)`,
        background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2))'
      }
    case 'bottom':
      return {
        ...style,
        width: `${cardSize.width}px`,
        height: `${depth}px`,
        bottom: `-${depth}px`,
        left: '0',
        transform: `rotateX(90deg)`,
        background: 'linear-gradient(180deg, rgba(236, 72, 153, 0.3), rgba(99, 102, 241, 0.2))'
      }
    case 'left':
      return {
        ...style,
        width: `${depth}px`,
        height: `${cardSize.height}px`,
        top: '0',
        left: `-${depth}px`,
        transform: `rotateY(-90deg)`,
        background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.2))'
      }
  }
  return style
}

let ctx: gsap.Context

// 初始化3D挤出动画
const initExtrudeAnimation = () => {
  if (!card3D.value || !extrudeSection.value) return

  ctx = gsap.context(() => {
    // 卡片3D旋转
    gsap.from(card3D.value!, {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 0.8,
      scrollTrigger: {
        trigger: extrudeSection.value,
        start: 'top bottom',
        end: 'center center',
        scrub: 1.2
      }
    })

    // 中间层挤出效果
    Object.values(midLayerRefs.value).forEach((layer, index) => {
      const zOffset = ((index + 1) / 7) * cardSize.depth

      gsap.from(layer, {
        transform: 'translateZ(0px)',
        opacity: 0.8,
        scrollTrigger: {
          trigger: extrudeSection.value,
          start: 'top bottom',
          end: 'center center',
          scrub: 1
        }
      })

      // 悬停效果
      layer.addEventListener('mouseenter', () => {
        gsap.to(layer, {
          scale: 1.02,
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      layer.addEventListener('mouseleave', () => {
        gsap.to(layer, {
          scale: 1,
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // 侧边渐显
    Object.values(sideRefs.value).forEach((side) => {
      gsap.from(side, {
        opacity: 0,
        scrollTrigger: {
          trigger: extrudeSection.value,
          start: 'top 60%',
          end: 'center center',
          scrub: 0.8
        }
      })
    })

    // 装饰光效动画
    Object.values(lightRefs.value).forEach((light, index) => {
      gsap.from(light, {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: extrudeSection.value,
          start: 'top bottom',
          end: 'center center',
          scrub: 1
        }
      })
    })

    // 前层卡片悬停效果
    if (frontLayer.value) {
      frontLayer.value.addEventListener('mouseenter', () => {
        gsap.to(frontLayer.value, {
          scale: 1.03,
          boxShadow: '0 25px 80px rgba(236, 72, 153, 0.4)',
          duration: 0.4,
          ease: 'power2.out'
        })
      })

      frontLayer.value.addEventListener('mouseleave', () => {
        gsap.to(frontLayer.value, {
          scale: 1,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          duration: 0.4,
          ease: 'power2.out'
        })
      })
    }
  }, extrudeSection.value)
}

// 粒子系统
const initParticles = () => {
  if (!particleCanvas.value) return

  const canvas = particleCanvas.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: Array<{
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
    color: string
  }> = []

  const colors = ['#6366f1', '#a855f7', '#ec4899', '#06b6d4']

  const createParticle = () => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }
  }

  // 创建粒子
  for (let i = 0; i < 100; i++) {
    particles.push(createParticle())
  }

  const animateParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      // 边界检测
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

      // 绘制粒子
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
    })

    requestAnimationFrame(animateParticles)
  }

  animateParticles()

  // 窗口大小变化时调整画布
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
}

onMounted(() => {
  setTimeout(() => {
    initParticles()
    setTimeout(() => {
      initExtrudeAnimation()
    }, 100)
  }, 200)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.ie-section-228 {
  min-height: 100vh;
  padding: 60px 20px;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 30%, #0f0f2f 70%, #1a1a3a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.ie-bg-gradient-228 {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
  animation: bgPulse 8s ease-in-out infinite;
}

@keyframes bgPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.ie-particles-228 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.ie-header-228 {
  text-align: center;
  margin-bottom: 60px;
  z-index: 10;
  position: relative;
}

.ie-title-228 {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 4px;
  text-shadow: 0 0 60px rgba(99, 102, 241, 0.4);
  animation: titleGlow 3s ease-in-out infinite;
}

@keyframes titleGlow {
  0%, 100% {
    filter: brightness(1);
    transform: scale(1);
  }
  50% {
    filter: brightness(1.2);
    transform: scale(1.02);
  }
}

.ie-subtitle-228 {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  letter-spacing: 8px;
  text-transform: uppercase;
}

// 3D挤出容器
.ie-extrude-container-228 {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 600px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ie-scene-228 {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
}

.ie-card-3d-228 {
  position: relative;
  width: 400px;
  height: 280px;
  transform-style: preserve-3d;
  cursor: pointer;
}

.ie-card-layer-228 {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  backface-visibility: hidden;
  transition: all 0.3s;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.ie-layer-back-228 {
  background: rgba(99, 102, 241, 0.1);
  border: 2px solid rgba(99, 102, 241, 0.3);
}

.ie-layer-mid-228 {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.2);
  cursor: pointer;
}

.ie-layer-front-228 {
  z-index: 100;
  border: 3px solid rgba(236, 72, 153, 0.4);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(236, 72, 153, 0.3),
    inset 0 0 60px rgba(236, 72, 153, 0.1);
}

.ie-layer-content-228 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.ie-layer-glow-228 {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), transparent);
  pointer-events: none;
  mix-blend-mode: overlay;
}

.ie-card-side-228 {
  backface-visibility: hidden;
  transition: all 0.3s;
}

// 装饰性光效
.ie-decorative-lights-228 {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.ie-light-228 {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
  animation: lightFloat 6s ease-in-out infinite;
}

.ie-light-1-228 {
  width: 200px;
  height: 200px;
  background: rgba(99, 102, 241, 0.3);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.ie-light-2-228 {
  width: 250px;
  height: 250px;
  background: rgba(168, 85, 247, 0.3);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.ie-light-3-228 {
  width: 180px;
  height: 180px;
  background: rgba(236, 72, 153, 0.3);
  bottom: 20%;
  left: 30%;
  animation-delay: 4s;
}

@keyframes lightFloat {
  0%, 100% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(20px, -20px);
  }
  66% {
    transform: translate(-15px, 15px);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .ie-title-228 {
    font-size: 2.2rem;
    letter-spacing: 2px;
  }

  .ie-subtitle-228 {
    font-size: 0.9rem;
    letter-spacing: 4px;
  }

  .ie-extrude-container-228 {
    height: 450px;
    padding: 20px;
  }

  .ie-card-3d-228 {
    width: 280px;
    height: 196px;
  }

  .ie-light-228 {
    width: 120px;
    height: 120px;
  }
}
</style>
