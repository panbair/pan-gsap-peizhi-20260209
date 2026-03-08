<template>
  <section class="et-scroll-elastic-text-136">
    <div class="et-container-136">
      <h2 class="et-title-136">弹性文字</h2>
      <p class="et-subtitle-136">Elastic Text</p>

      <div class="et-stage-136" ref="stage">
        <div class="et-text-wrapper-136">
          <div
            v-for="(char, index) in text.split('')"
            :key="index"
            :ref="el => { if (el) charRefs[index] = el as HTMLElement }"
            class="et-character-136"
          >
            {{ char }}
          </div>
        </div>

        <div class="et-shadow-text-136">
          <div
            v-for="(char, index) in text.split('')"
            :key="index"
            class="et-shadow-char-136"
          >
            {{ char }}
          </div>
        </div>
      </div>

      <div class="et-elastic-indicator-136">
        <div class="et-indicator-bar-136" ref="indicatorBar"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stage = ref<HTMLElement>()
const indicatorBar = ref<HTMLElement>()
const charRefs = ref<HTMLElement[]>([])

const text = 'ELASTIC MAGIC'

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.et-title-136', {
      scrollTrigger: {
        trigger: '.et-scroll-elastic-text-136',
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1
      },
      opacity: 0,
      scale: 0.8,
      filter: 'blur(20px)',
      ease: 'power2.out'
    })

    gsap.from('.et-subtitle-136', {
      scrollTrigger: {
        trigger: '.et-scroll-elastic-text-136',
        start: 'top 85%',
        end: 'top 65%',
        scrub: 1
      },
      opacity: 0,
      y: 30,
      ease: 'power2.out'
    })

    // 字符弹性动画
    charRefs.value.forEach((char, index) => {
      const totalChars = text.length
      const position = index / totalChars

      // 滚动时的弹性效果
      gsap.to(char, {
        scrollTrigger: {
          trigger: stage.value,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.5
        },
        y: (progress) => {
          const baseSine = Math.sin(progress * Math.PI * 2 + position * Math.PI * 4)
          const elasticity = Math.sin(progress * Math.PI * 6 + index * 0.5)
          return baseSine * 50 + elasticity * 30
        },
        scale: (progress) => {
          const elasticScale = 1 + Math.sin(progress * Math.PI * 8 + index * 0.3) * 0.3
          return elasticScale
        },
        rotation: (progress) => {
          return Math.sin(progress * Math.PI * 4 + index * 0.2) * 15
        },
        ease: 'elastic.out(1, 0.3)'
      })
    })

    // 颜色渐变效果
    gsap.to('.et-character-136', {
      scrollTrigger: {
        trigger: stage.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      },
      color: (index) => {
        const hue = 250 + (index % 6) * 20
        return `hsl(${hue}, 80%, 70%)`
      },
      ease: 'none'
    })

    // 初始入场动画
    charRefs.value.forEach((char, index) => {
      gsap.from(char, {
        scrollTrigger: {
          trigger: stage.value,
          start: 'top 75%',
          end: 'top 55%',
          scrub: 1.5
        },
        y: -200,
        scale: 0,
        opacity: 0,
        rotation: (index % 2 === 0 ? -1 : 1) * 180,
        filter: 'blur(20px)',
        delay: index * 0.05,
        ease: 'elastic.out(1, 0.5)'
      })
    })

    // 持续的弹性波动
    charRefs.value.forEach((char, index) => {
      gsap.to(char, {
        y: Math.sin(index * 0.3) * 20,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: 'elastic.out(1, 0.3)',
        delay: index * 0.05
      })
    })

    // 阴影文字效果
    gsap.to('.et-shadow-char-136', {
      scrollTrigger: {
        trigger: stage.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 2
      },
      y: (progress) => progress * 100,
      opacity: (progress) => 1 - progress * 0.8,
      ease: 'none'
    })

    // 弹性指示器
    gsap.to('.et-indicator-bar-136', {
      scrollTrigger: {
        trigger: stage.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.5
      },
      scaleX: 1,
      ease: 'elastic.out(1, 0.5)'
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.et-scroll-elastic-text-136 {
  min-height: 350vh;
  padding: 100px 20px;
  background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 30%, #0f0f2a 60%, #1a1a3a 100%);
  position: relative;
  overflow: hidden;
}

.et-container-136 {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
}

.et-title-136 {
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #a855f7, #3b82f6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 80px rgba(168, 85, 247, 0.5);
}

.et-subtitle-136 {
  text-align: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 150px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.et-stage-136 {
  position: relative;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
}

.et-text-wrapper-136 {
  display: flex;
  gap: 0.05em;
  position: relative;
  z-index: 10;
}

.et-character-136 {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  display: inline-block;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
  will-change: transform;
  transition: color 0.3s ease;
}

.et-shadow-text-136 {
  position: absolute;
  display: flex;
  gap: 0.05em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
}

.et-shadow-char-136 {
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 900;
  color: rgba(168, 85, 247, 0.1);
  text-transform: uppercase;
  display: inline-block;
  filter: blur(10px);
  user-select: none;
}

.et-elastic-indicator-136 {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  z-index: 100;
}

.et-indicator-bar-136 {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #a855f7, #3b82f6, #ec4899);
  transform-origin: left;
  transform: scaleX(0);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}

@media (max-width: 768px) {
  .et-character-136,
  .et-shadow-char-136 {
    font-size: clamp(2.5rem, 8vw, 5rem);
  }

  .et-title-136 {
    margin-bottom: 60px;
  }

  .et-subtitle-136 {
    margin-bottom: 100px;
    font-size: 0.9rem;
  }

  .et-stage-136 {
    min-height: 400px;
  }

  .et-elastic-indicator-136 {
    width: 200px;
  }
}
</style>
