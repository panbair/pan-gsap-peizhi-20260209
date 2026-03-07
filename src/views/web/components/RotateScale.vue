<template>
  <div class="rs-rotate-scale-section-51">
    <div class="rs-section-header-51">
      <h2 class="rs-title-51">
        <span class="rs-word-51" v-for="(word, i) in ['ROTATE', 'SCALE']" :key="i">{{ word }}</span>
      </h2>
      <p class="rs-subtitle-51">旋转缩放动画</p>
    </div>

    <div class="rs-rotate-scale-container-51">
      <div class="rs-rotate-scale-item-51" v-for="(item, index) in items" :key="index">
        <div class="rs-item-rotator-51">
          <div class="rs-item-image-51" :style="{ backgroundImage: `url(${item.image})` }"></div>
          <div class="rs-item-number-51">{{ String(index + 1).padStart(2, '0') }}</div>
        </div>
        <div class="rs-item-info-51">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <div class="rs-controls-51">
      <button class="rs-control-btn-51" @click="triggerWave">触发波浪</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = ref([
  { image: new URL('@/assets/image/1.png', import.meta.url).href, title: 'Spiral Motion', description: 'Infinite rotation' },
  { image: new URL('@/assets/image/2.png', import.meta.url).href, title: 'Pulse Beat', description: 'Rhythmic scaling' },
  { image: new URL('@/assets/image/3.png', import.meta.url).href, title: 'Orbit Dance', description: 'Circular movement' },
  { image: new URL('@/assets/image/4.png', import.meta.url).href, title: 'Vortex Spin', description: 'Twisting energy' },
  { image: new URL('@/assets/image/5.png', import.meta.url).href, title: 'Glow Rotate', description: 'Shining motion' },
  { image: new URL('@/assets/image/6.png', import.meta.url).href, title: 'Zoom Burst', description: 'Expanding life' }
])

let ctx: gsap.Context

const triggerWave = () => {
  // 波浪缩放动画
  gsap.to('.rs-item-rotator-51', {
    scale: 1.2,
    duration: 0.3,
    ease: 'power2.out',
    stagger: {
      each: 0.08,
      from: 'center'
    },
    yoyo: true,
    repeat: 1
  })

  // 波浪旋转动画
  gsap.to('.rs-item-image-51', {
    rotation: (i) => 15 * (i - 2.5),
    duration: 0.5,
    ease: 'power2.out',
    stagger: {
      each: 0.08,
      from: 'center'
    },
    yoyo: true,
    repeat: 1
  })
}

const initAnimations = () => {
  ctx = gsap.context(() => {
    // 标题词语分别入场
    gsap.from('.rs-title-51 .rs-word-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-section-51',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: -100,
      opacity: 0,
      rotationY: 90,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      duration: 0.8
    })

    // 副标题入场
    gsap.from('.rs-subtitle-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-section-51',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      opacity: 0,
      ease: 'back.out(1.7)',
      duration: 0.6,
      delay: 0.3
    })

    // 旋转容器入场
    gsap.from('.rs-item-rotator-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      rotation: -180,
      scale: 0,
      opacity: 0,
      stagger: {
        each: 0.12,
        ease: 'power2.out'
      },
      ease: 'back.out(1.5)',
      duration: 1
    })

    // 图片渐入
    gsap.from('.rs-item-image-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top 65%',
        toggleActions: 'play none none reverse'
      },
      scale: 2,
      opacity: 0,
      stagger: {
        each: 0.12,
        ease: 'power2.out'
      },
      ease: 'power2.out',
      duration: 0.8
    })

    // 数字旋转入场
    gsap.from('.rs-item-number-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top 65%',
        toggleActions: 'play none none reverse'
      },
      rotation: 360,
      scale: 0,
      opacity: 0,
      stagger: {
        each: 0.12,
        ease: 'power2.out'
      },
      ease: 'back.out(1.7)',
      duration: 0.7
    })

    // 信息从底部入场
    gsap.from('.rs-item-info-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top 55%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      stagger: {
        each: 0.1,
        ease: 'power2.out'
      },
      ease: 'power3.out',
      duration: 0.7
    })

    // 滚动时容器旋转
    gsap.to('.rs-item-rotator-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      rotation: (i) => (i - 2.5) * 45,
      ease: 'none'
    })

    // 滚动时图片独立旋转
    gsap.to('.rs-item-image-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      rotation: (i) => (i - 2.5) * -30,
      scale: (i) => 1 + Math.sin(i * 0.5) * 0.1,
      ease: 'none'
    })

    // 滚动时数字缩放
    gsap.to('.rs-item-number-51', {
      scrollTrigger: {
        trigger: '.rs-rotate-scale-container-51',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      scale: 1.3,
      ease: 'none'
    })

    // 控制按钮渐入
    gsap.from('.rs-control-btn-51', {
      scrollTrigger: {
        trigger: '.rs-controls-51',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.6
    })

    // 持续旋转动画
    gsap.to('.rs-item-rotator-51', {
      rotation: '+=360',
      duration: 60,
      ease: 'none',
      repeat: -1,
      paused: true
    })

    // 悬停效果 - 使用gsap.utils.toArray自动清理
    gsap.utils.toArray('.rs-rotate-scale-item-51').forEach((item: Element, i: number) => {
      const itemEl = item as HTMLElement
      itemEl.addEventListener('mouseenter', () => {
        gsap.to(itemEl.querySelector('.rs-item-rotator-51'), {
          scale: 1.15,
          rotation: (i - 2.5) * 15,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(itemEl.querySelector('.rs-item-image-51'), {
          scale: 1.1,
          rotation: (i - 2.5) * -10,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(itemEl.querySelector('.rs-item-number-51'), {
          scale: 1.4,
          rotation: 45,
          duration: 0.3,
          ease: 'back.out(1.7)'
        })
      })

      itemEl.addEventListener('mouseleave', () => {
        gsap.to(itemEl.querySelector('.rs-item-rotator-51'), {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(itemEl.querySelector('.rs-item-image-51'), {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(itemEl.querySelector('.rs-item-number-51'), {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
  })
}

onMounted(() => {
  initAnimations()
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.rs-rotate-scale-section-51 {
  min-height: 100vh;
  padding: 80px 40px;
  background: linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #4a0e4e 100%);
  position: relative;
  overflow: hidden;
}

.rs-section-header-51 {
  text-align: center;
  margin-bottom: 80px;
}

.rs-title-51 {
  font-size: 64px;
  font-weight: 900;
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 40px;
  text-shadow: 0 0 30px rgba(255, 0, 128, 0.5);
}

.rs-title-51 .rs-word-51 {
  display: inline-block;
  perspective: 1000px;
}

.rs-subtitle-51 {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.rs-rotate-scale-container-51 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
}

.rs-rotate-scale-item-51 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.rs-item-rotator-51 {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 40px rgba(255, 0, 128, 0.3);
  transition: box-shadow 0.4s ease;
}

.rs-item-rotator-51:hover {
  box-shadow: 0 20px 60px rgba(255, 0, 128, 0.5);
}

.rs-item-image-51 {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;
}

.rs-item-number-51 {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 0, 128, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: 2px solid rgba(255, 0, 128, 0.5);
  transition: all 0.4s ease;
}

.rs-item-info-51 {
  text-align: center;
}

.rs-item-info-51 h3 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.rs-item-info-51 p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.rs-controls-51 {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.rs-control-btn-51 {
  padding: 18px 48px;
  background: linear-gradient(135deg, #ff0080 0%, #ff8c00 100%);
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 0, 128, 0.4);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.rs-control-btn-51:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 0, 128, 0.5);
}

.rs-control-btn-51:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .rs-title-51 {
    font-size: 40px;
    gap: 20px;
  }

  .rs-subtitle-51 {
    font-size: 14px;
  }

  .rs-item-rotator-51 {
    width: 220px;
    height: 220px;
  }
}
</style>
