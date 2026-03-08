<template>
  <div class="scs-section-117">
    <div class="scs-header-117">
      <h2 class="scs-title-117">水晶破碎效果</h2>
      <p class="scs-desc-117">优雅的碎片重组动画</p>
    </div>
    <div class="scs-container-117">
      <div class="scs-crystal-117" v-for="(item, index) in crystals" :key="index">
        <div class="scs-fragments-117">
          <div class="scs-fragment-117" v-for="n in 12" :key="n"></div>
        </div>
        <div class="scs-center-117">
          <div class="scs-icon-117">{{ item.icon }}</div>
          <h3 class="scs-text-117">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
})

const crystals = [
  { icon: '💎', title: '水晶之心' },
  { icon: '🔮', title: '神秘能量' },
  { icon: '✨', title: '星光璀璨' },
  { icon: '🌟', title: '永恒之光' }
]

let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo('.scs-title-117, .scs-desc-117',
      { y: 120, opacity: 0, scale: 0.7 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.scs-header-117',
          start: 'top 90%'
        }
      }
    )

    document.querySelectorAll('.scs-crystal-117').forEach((crystal, index) => {
      gsap.fromTo(crystal,
        {
          y: 350,
          opacity: 0,
          scale: 0.3,
          rotationY: -180
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'back.out(2)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.scs-container-117',
            start: 'top 85%'
          }
        }
      )

      const fragments = crystal.querySelectorAll('.scs-fragment-117')
      gsap.fromTo(fragments,
        {
          x: (i) => (Math.random() - 0.5) * 400,
          y: (i) => (Math.random() - 0.5) * 400,
          opacity: 0,
          rotation: (i) => Math.random() * 720 - 360,
          scale: 0.1
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: {
            each: 0.08,
            from: 'center',
            grid: [4, 3]
          },
          scrollTrigger: {
            trigger: crystal,
            start: 'top 85%'
          }
        }
      )

      fragments.forEach((fragment, i) => {
        const delay = i * 0.08
        gsap.to(fragment, {
          rotation: i % 2 === 0 ? 15 : -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          delay,
          ease: 'sine.inOut'
        })

        gsap.to(fragment, {
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          delay: delay + 0.5,
          ease: 'sine.inOut'
        })
      })

      gsap.fromTo(crystal.querySelector('.scs-center-117'),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.8,
          scrollTrigger: {
            trigger: crystal,
            start: 'top 85%'
          }
        }
      )

      gsap.fromTo(crystal.querySelector('.scs-icon-117'),
        { scale: 0, rotation: -360 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(2)',
          delay: 1,
          scrollTrigger: {
            trigger: crystal,
            start: 'top 85%'
          }
        }
      )
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.scs-section-117 {
  padding: 100px 20px;
  background: rgba(0, 0, 0, 0.3);
}

.scs-header-117 {
  text-align: center;
  margin-bottom: 80px;
}

.scs-title-117 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.scs-desc-117 {
  font-size: 1.2rem;
  color: #a0aec0;
  font-weight: 300;
}

.scs-container-117 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.scs-crystal-117 {
  position: relative;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.scs-fragments-117 {
  position: absolute;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;
  padding: 10px;
}

.scs-fragment-117 {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 0.3s ease;
}

.scs-crystal-117:hover .scs-fragment-117 {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.5) 0%, rgba(139, 92, 246, 0.5) 100%);
  border-color: rgba(255, 255, 255, 0.4);
}

.scs-center-117 {
  position: relative;
  z-index: 10;
  text-align: center;
}

.scs-icon-117 {
  font-size: 4rem;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.8));
  display: inline-block;
}

.scs-text-117 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f0abfc;
  text-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
}

@media (max-width: 768px) {
  .scs-container-117 {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .scs-fragments-117 {
    width: 160px;
    height: 160px;
    gap: 3px;
  }
}
</style>
