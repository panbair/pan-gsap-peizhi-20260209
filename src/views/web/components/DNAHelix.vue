<template>
  <section class="dna-helix-section">
    <div class="content">
      <h2 class="section-title">DNA双螺旋</h2>
      <p class="subtitle">生命之链的完美螺旋</p>

      <div class="dna-container" ref="dnaContainer">
        <div class="dna-helix">
          <div class="dna-strand strand-1">
            <div class="base-pair" v-for="n in 20" :key="n"
                 :style="getBasePairStyle(n, 'a')">
              <div class="base base-a"></div>
              <div class="connection"></div>
              <div class="base base-t"></div>
            </div>
          </div>

          <div class="dna-strand strand-2">
            <div class="base-pair" v-for="n in 20" :key="n"
                 :style="getBasePairStyle(n, 'c')">
              <div class="base base-c"></div>
              <div class="connection"></div>
              <div class="base base-g"></div>
            </div>
          </div>

          <div class="dna-particles">
            <div class="dna-particle" v-for="n in 30" :key="n"
                 :style="getDNAParticleStyle(n)"></div>
          </div>
        </div>

        <div class="dna-info">
          <div class="info-card">
            <h3>ATCG</h3>
            <p>腺嘌呤 胸腺嘧啶 胞嘧啶 鸟嘌呤</p>
          </div>
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

const dnaContainer = ref<HTMLElement | null>(null)

const getBasePairStyle = (index: number, type: string) => {
  const angle = index * 30
  const translateY = index * 30
  const rotate = type === 'a' ? angle : angle + 180
  return {
    transform: `rotateY(${rotate}deg) translateY(${translateY}px)`,
    animationDelay: `${index * 0.1}s`
  }
}

const getDNAParticleStyle = (index: number) => {
  const angle = (index / 30) * Math.PI * 2
  const radius = 100 + Math.random() * 50
  const x = Math.cos(angle) * radius
  const y = (Math.random() - 0.5) * 600
  const z = Math.sin(angle) * radius
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: `translateZ(${z}px)`,
    animationDelay: `${Math.random() * 2}s`
  }
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 双螺旋旋转
    gsap.to('.dna-strand', {
      rotationY: 360,
      duration: 10,
      repeat: -1,
      ease: 'none'
    })

    // 碱基对脉动
    gsap.to('.base', {
      scale: 1.2,
      opacity: 0.8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.1
    })

    // 连接线闪烁
    gsap.to('.connection', {
      opacity: 0.3,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      stagger: 0.05
    })

    // 粒子漂浮
    gsap.to('.dna-particle', {
      y: '-=20',
      opacity: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.05
    })

    // 滚动时DNA展开
    gsap.to('.dna-helix', {
      rotationX: 30,
      scale: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: '.dna-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })

    // 入场动画
    gsap.from('.dna-helix', {
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.dna-helix',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // 信息卡片入场
    gsap.from('.info-card', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.dna-info',
        start: 'top 80%',
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
.dna-helix-section {
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0a0a1a, #1a0a2a, #0a0a1a);
}

.content {
  text-align: center;
  position: relative;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 80px;
}

.dna-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  perspective: 1000px;
}

.dna-helix {
  position: relative;
  width: 300px;
  height: 700px;
  transform-style: preserve-3d;
}

.dna-strand {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
}

.strand-2 {
  transform: rotateY(180deg);
}

.base-pair {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-style: preserve-3d;
  width: 200px;
  height: 20px;
  margin-left: -100px;
  margin-top: -10px;
}

.base {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform-style: preserve-3d;
}

.base-a {
  left: 0;
  background: radial-gradient(circle, #06b6d4, #0891b2);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
}

.base-t {
  right: 0;
  background: radial-gradient(circle, #8b5cf6, #7c3aed);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
}

.base-c {
  left: 0;
  background: radial-gradient(circle, #ec4899, #db2777);
  box-shadow: 0 0 15px rgba(236, 72, 153, 0.6);
}

.base-g {
  right: 0;
  background: radial-gradient(circle, #10b981, #059669);
  box-shadow: 0 0 15px rgba(16, 185, 129, 0.6);
}

.connection {
  position: absolute;
  left: 20px;
  right: 20px;
  top: 50%;
  height: 2px;
  background: linear-gradient(90deg, rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.5));
  transform: translateY(-50%);
}

.dna-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.dna-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
  animation: particleFloat 3s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) scale(1.5);
    opacity: 0.8;
  }
}

.dna-info {
  position: relative;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  h3 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.6;
  }
}

@media (max-width: 768px) {
  .dna-container {
    flex-direction: column;
  }

  .dna-helix {
    width: 200px;
    height: 500px;
  }

  .base-pair {
    width: 140px;
    margin-left: -70px;
  }
}
</style>
