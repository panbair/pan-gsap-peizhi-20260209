<template>
  <section ref="cubeSection" class="section cube-section">
    <h2 class="section-title">3D立方体</h2>
    <div class="cube-container" ref="cubeContainer">
      <div class="cube-scene">
        <div class="cube" ref="cube">
          <div class="cube-face front">前</div>
          <div class="cube-face back">后</div>
          <div class="cube-face right">右</div>
          <div class="cube-face left">左</div>
          <div class="cube-face top">上</div>
          <div class="cube-face bottom">下</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cubeSection = ref<HTMLElement>()
const cubeContainer = ref<HTMLElement>()
const cube = ref<HTMLElement>()

onMounted(() => {
  setTimeout(() => {
    initAnimations()
  }, 100)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  gsap.killTweensOf('*')
})

const initAnimations = () => {
  if (!cube.value) return

  gsap.to(cube.value,
    {
      rotateX: 360,
      rotateY: 360,
      duration: 3,
      ease: 'none',
      scrollTrigger: {
        trigger: cubeSection.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    }
  )

  gsap.fromTo(cube.value,
    {
      scale: 0.5
    },
    {
      scale: 1.5,
      duration: 2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: cubeSection.value,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1
      }
    }
  )
}
</script>

<style scoped lang="scss">
.section {
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.cube-section {
  background: linear-gradient(180deg, transparent, rgba(67, 233, 123, 0.1), transparent);
}

.cube-container {
  perspective: 1000px;
  width: 200px;
  height: 200px;
}

.cube-scene {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
}

.cube-face.front {
  background: rgba(102, 126, 234, 0.7);
  transform: translateZ(100px);
}

.cube-face.back {
  background: rgba(240, 147, 251, 0.7);
  transform: rotateY(180deg) translateZ(100px);
}

.cube-face.right {
  background: rgba(79, 172, 254, 0.7);
  transform: rotateY(90deg) translateZ(100px);
}

.cube-face.left {
  background: rgba(67, 233, 123, 0.7);
  transform: rotateY(-90deg) translateZ(100px);
}

.cube-face.top {
  background: rgba(245, 87, 108, 0.7);
  transform: rotateX(90deg) translateZ(100px);
}

.cube-face.bottom {
  background: rgba(253, 186, 116, 0.7);
  transform: rotateX(-90deg) translateZ(100px);
}
</style>
