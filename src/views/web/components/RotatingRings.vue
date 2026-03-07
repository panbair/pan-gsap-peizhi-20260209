<template>
  <section class="rotating-rings-section">
    <div class="rr-content">
      <h2 class="rr-section-title">旋转环</h2>
      <p class="rr-subtitle">多层环形旋转动画</p>

      <div class="rr-rings-container">
        <div class="rr-ring rr-ring-outer" ref="ringOuter">
          <div class="rr-ring-dot" v-for="n in 8" :key="n"></div>
        </div>
        <div class="rr-ring rr-ring-middle" ref="ringMiddle">
          <div class="rr-ring-dot" v-for="n in 6" :key="n"></div>
        </div>
        <div class="rr-ring rr-ring-inner" ref="ringInner">
          <div class="rr-ring-dot" v-for="n in 4" :key="n"></div>
        </div>
        <div class="rr-center-circle" ref="centerCircle">
          <div class="rr-center-text">GSAP</div>
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

const ringOuter = ref<HTMLElement | null>(null)
const ringMiddle = ref<HTMLElement | null>(null)
const ringInner = ref<HTMLElement | null>(null)
const centerCircle = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.rotating-rings-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    })

    // 外圈旋转
    timeline.to('.rr-ring-outer', {
      rotation: 360,
      duration: 2
    }, 0)

    // 中圈反向旋转
    timeline.to('.rr-ring-middle', {
      rotation: -360,
      duration: 1.5
    }, 0)

    // 内圈旋转
    timeline.to('.rr-ring-inner', {
      rotation: 360,
      duration: 1
    }, 0)

    // 中心圆缩放
    timeline.to('.rr-center-circle', {
      scale: 1.2,
      rotation: 180,
      duration: 1,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 1
    }, 0)

    // 点的动画
    gsap.from('.rr-ring-dot', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.rr-rings-container',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    })

    // 初始入场
    gsap.from('.rr-rings-container', {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.rr-rings-container',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.rotating-rings-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 60%);
    pointer-events: none;
  }
}

.rr-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.rr-section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.rr-subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 80px;
}

.rr-rings-container {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
}

.rr-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
}

.rr-ring-outer {
  width: 360px;
  height: 360px;
  border-color: rgba(96, 165, 250, 0.3);
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.2);
}

.rr-ring-middle {
  width: 260px;
  height: 260px;
  border-color: rgba(167, 139, 250, 0.4);
  box-shadow: 0 0 25px rgba(167, 139, 250, 0.2);
}

.rr-ring-inner {
  width: 160px;
  height: 160px;
  border-color: rgba(236, 72, 153, 0.5);
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.2);
}

.rr-ring-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 10px currentColor;
}

.rr-ring-outer .rr-ring-dot {
  color: #60a5fa;
  animation: orbit 8s linear infinite;
}

.rr-ring-middle .rr-ring-dot {
  color: #a78bfa;
  animation: orbit 6s linear infinite reverse;
}

.rr-ring-inner .rr-ring-dot {
  color: #ec4899;
  animation: orbit 4s linear infinite;
}

@for $i from 1 through 8 {
  .rr-ring-outer .rr-ring-dot:nth-child(#{$i}) {
    transform: rotate(#{($i - 1) * 45}deg) translate(180px) rotate(-#{($i - 1) * 45}deg);
  }
}

@for $i from 1 through 6 {
  .rr-ring-middle .rr-ring-dot:nth-child(#{$i}) {
    transform: rotate(#{($i - 1) * 60}deg) translate(130px) rotate(-#{($i - 1) * 60}deg);
  }
}

@for $i from 1 through 4 {
  .rr-ring-inner .rr-ring-dot:nth-child(#{$i}) {
    transform: rotate(#{($i - 1) * 90}deg) translate(80px) rotate(-#{($i - 1) * 90}deg);
  }
}

.rr-center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(96, 165, 250, 0.4);
}

.rr-center-text {
  font-size: 1.2rem;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
}

@keyframes orbit {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .rr-rings-container {
    width: 300px;
    height: 300px;
  }

  .rr-ring-outer {
    width: 270px;
    height: 270px;
  }

  .rr-ring-middle {
    width: 190px;
    height: 190px;
  }

  .rr-ring-inner {
    width: 120px;
    height: 120px;
  }

  .rr-center-circle {
    width: 60px;
    height: 60px;
  }

  @for $i from 1 through 8 {
    .rr-ring-outer .rr-ring-dot:nth-child(#{$i}) {
      transform: rotate(#{($i - 1) * 45}deg) translate(135px) rotate(-#{($i - 1) * 45}deg);
    }
  }

  @for $i from 1 through 6 {
    .rr-ring-middle .rr-ring-dot:nth-child(#{$i}) {
      transform: rotate(#{($i - 1) * 60}deg) translate(95px) rotate(-#{($i - 1) * 60}deg);
    }
  }

  @for $i from 1 through 4 {
    .rr-ring-inner .rr-ring-dot:nth-child(#{$i}) {
      transform: rotate(#{($i - 1) * 90}deg) translate(60px) rotate(-#{($i - 1) * 90}deg);
    }
  }
}
</style>
