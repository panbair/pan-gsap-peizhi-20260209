<template>
  <div class="qc-container-187">
    <h2 class="qc-title-187">量子卡片滚动动画</h2>
    <div class="qc-stage-187">
      <div class="qc-cards-187">
        <div class="qc-card-187" v-for="(card, index) in cards" :key="index">
          <div class="qc-quantum-187">
            <div class="qc-particles-187"></div>
            <div class="qc-core-187">
              <div class="qc-ring-187 qc-ring-1-187"></div>
              <div class="qc-ring-187 qc-ring-2-187"></div>
              <div class="qc-ring-187 qc-ring-3-187"></div>
            </div>
          </div>
          <div class="qc-content-187">
            <div class="qc-icon-187">{{ card.icon }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  { icon: '⚛️', title: '量子叠加', description: '多重状态同时存在' },
  { icon: '🔗', title: '量子纠缠', description: '粒子间的神秘连接' },
  { icon: '🌌', title: '量子隧道', description: '穿越不可能的屏障' },
  { icon: '💠', title: '量子自旋', description: '粒子的内在旋转' },
  { icon: '✨', title: '量子涨落', description: '真空中的能量波动' },
  { icon: '🌀', title: '量子涡旋', description: '粒子的旋转运动' }
]

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.qc-title-187', {
      scrollTrigger: {
        trigger: '.qc-title-187',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // 卡片动画
    gsap.utils.toArray<HTMLElement>('.qc-card-187').forEach((card, index) => {
      const core = card.querySelector('.qc-core-187') as HTMLElement
      const particles = card.querySelector('.qc-particles-187') as HTMLElement
      const rings = card.querySelectorAll('.qc-ring-187')

      // 入场动画
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        rotate: 360,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: index * 0.15
      })

      // 核心动画 - 滚动触发
      gsap.to(core, {
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        rotate: 720,
        scale: 1.2,
        ease: 'none'
      })

      // 环形动画
      rings.forEach((ring, ringIndex) => {
        gsap.to(ring, {
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          },
          rotate: (ringIndex + 1) * 360,
          duration: 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        })
      })

      // 粒子波动动画
      gsap.to(particles, {
        scrollTrigger: {
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        opacity: 0.8,
        scale: 1.5,
        ease: 'none'
      })

      // 悬停效果
      card.addEventListener('mouseenter', () => {
        gsap.to(core, {
          scale: 1.5,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        })
        gsap.to(card.querySelector('.qc-icon-187'), {
          scale: 1.3,
          rotate: 360,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        })
        gsap.to(rings, {
          borderColor: 'rgba(0, 255, 255, 0.8)',
          duration: 0.3
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(core, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        })
        gsap.to(card.querySelector('.qc-icon-187'), {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'power2.out'
        })
        gsap.to(rings, {
          borderColor: 'rgba(255, 255, 255, 0.3)',
          duration: 0.3
        })
      })
    })

    // 整体卡片容器动画
    gsap.from('.qc-cards-187', {
      scrollTrigger: {
        trigger: '.qc-cards-187',
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse'
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  })
})
</script>

<style scoped>
.qc-container-187 {
  min-height: 100vh;
  padding: 80px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a6e 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.qc-container-187::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.qc-title-187 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 60px;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3);
}

.qc-stage-187 {
  max-width: 1400px;
  margin: 0 auto;
}

.qc-cards-187 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  perspective: 1000px;
}

.qc-card-187 {
  position: relative;
  padding: 40px 30px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
}

.qc-card-187::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(0, 255, 255, 0.1) 0%, 
    transparent 50%,
    rgba(255, 0, 255, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.qc-card-187:hover::before {
  opacity: 1;
}

.qc-card-187:hover {
  transform: translateY(-10px);
  border-color: rgba(0, 255, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2);
}

.qc-quantum-187 {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
}

.qc-particles-187 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%);
  opacity: 0.4;
  transition: all 0.3s ease;
  animation: qc-pulse-187 2s ease-in-out infinite;
}

@keyframes qc-pulse-187 {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.qc-core-187 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qc-ring-187 {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: border-color 0.3s ease;
}

.qc-ring-1-187 {
  width: 40px;
  height: 40px;
  animation: qc-rotate-187 3s linear infinite;
}

.qc-ring-2-187 {
  width: 60px;
  height: 60px;
  animation: qc-rotate-187 4s linear infinite reverse;
}

.qc-ring-3-187 {
  width: 80px;
  height: 80px;
  animation: qc-rotate-187 5s linear infinite;
}

@keyframes qc-rotate-187 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.qc-content-187 {
  text-align: center;
}

.qc-icon-187 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: inline-block;
  transition: transform 0.5s ease;
}

.qc-content-187 h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

.qc-content-187 p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .qc-title-187 {
    font-size: 1.8rem;
  }
  
  .qc-cards-187 {
    grid-template-columns: 1fr;
  }
}
</style>
