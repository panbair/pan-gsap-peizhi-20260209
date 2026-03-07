<template>
  <section class="pc-parallax-cards-section-13">
    <div class="pc-content-13">
      <h2 class="pc-section-title-13">视差卡片</h2>
      <p class="pc-subtitle-13">滚动时卡片产生深度层次效果</p>

      <div class="pc-cards-container-13">
        <div class="pc-card-13" ref="card1">
          <div class="pc-card-content-13">
            <div class="pc-card-icon-13">🚀</div>
            <h3>极速性能</h3>
            <p>优化的动画性能，流畅丝滑的用户体验</p>
          </div>
          <div class="pc-card-bg-13" ref="bg1"></div>
        </div>

        <div class="pc-card-13" ref="card2">
          <div class="pc-card-content-13">
            <div class="pc-card-icon-13">🎨</div>
            <h3>创意设计</h3>
            <p>现代化的设计风格，吸引眼球的视觉效果</p>
          </div>
          <div class="pc-card-bg-13" ref="bg2"></div>
        </div>

        <div class="pc-card-13" ref="card3">
          <div class="pc-card-content-13">
            <div class="pc-card-icon-13">⚡</div>
            <h3>交互反馈</h3>
            <p>丰富的交互细节，提升用户参与度</p>
          </div>
          <div class="pc-card-bg-13" ref="bg3"></div>
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

const card1 = ref<HTMLElement | null>(null)
const card2 = ref<HTMLElement | null>(null)
const card3 = ref<HTMLElement | null>(null)
const bg1 = ref<HTMLElement | null>(null)
const bg2 = ref<HTMLElement | null>(null)
const bg3 = ref<HTMLElement | null>(null)

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    const cards = [
      { card: card1.value, bg: bg1.value },
      { card: card2.value, bg: bg2.value },
      { card: card3.value, bg: bg3.value }
    ]

    cards.forEach(({ card, bg }, index) => {
      if (!card || !bg) return

      // 卡片入场
      gsap.from(card, {
        y: 100,
        opacity: 0,
        rotationX: 30,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      })

      // 视差滚动效果
      gsap.to(card, {
        y: -50,
        rotationX: -5,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // 背景移动
      gsap.to(bg, {
        x: 30,
        y: 30,
        rotation: 15,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // 悬停效果
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -20,
          duration: 0.4,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
      })
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped lang="scss">
.pc-parallax-cards-section-13 {
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.05), transparent);
}

.pc-content-13 {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.pc-section-title-13 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pc-subtitle-13 {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 80px;
}

.pc-cards-container-13 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.pc-card-13 {
  position: relative;
  height: 350px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
    pointer-events: none;
  }
}

.pc-card-bg-13 {
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(circle at center, rgba(139, 92, 246, 0.2), transparent 70%);
  pointer-events: none;
}

.pc-card-content-13 {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.pc-card-icon-13 {
  font-size: 4rem;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 20px rgba(167, 139, 250, 0.5));
}

.pc-card-13 h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 12px;
}

.pc-card-13 p {
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .pc-cards-container-13 {
    grid-template-columns: 1fr;
  }
}
</style>
