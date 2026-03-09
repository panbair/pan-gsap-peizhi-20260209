<template>
  <div class="at-container-188">
    <h2 class="at-title-188">极光文字滚动动画</h2>
    <div class="at-stage-188">
      <div class="at-text-188">
        <span v-for="(word, index) in words" :key="index" class="at-word-188">
          <span v-for="(char, charIndex) in word" :key="charIndex" class="at-char-188">{{ char }}</span>
        </span>
      </div>
      <div class="at-aurora-188"></div>
      <div class="at-description-188">
        <p>滚动触发极光效果</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const words = ['AURORA', 'NORTHERN', 'LIGHTS', 'MAGNETIC', 'FIELD', 'POLAR']

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // 标题动画
    gsap.from('.at-title-188', {
      scrollTrigger: {
        trigger: '.at-title-188',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // 单词入场动画
    gsap.utils.toArray<HTMLElement>('.at-word-188').forEach((word, index) => {
      gsap.from(word, {
        scrollTrigger: {
          trigger: word,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: index * 0.1
      })
    })

    // 字符极光动画 - 滚动触发
    gsap.utils.toArray<HTMLElement>('.at-word-188').forEach((word, wordIndex) => {
      const chars = word.querySelectorAll('.at-char-188')
      
      chars.forEach((char, charIndex) => {
        gsap.to(char, {
          scrollTrigger: {
            trigger: word,
            start: 'top center',
            end: 'bottom center',
            scrub: 1
          },
          color: `hsl(${(wordIndex * 60 + charIndex * 10) % 360}, 100%, 70%)`,
          textShadow: `0 0 ${10 + charIndex * 2}px hsl(${(wordIndex * 60 + charIndex * 10) % 360}, 100%, 50%)`,
          y: Math.sin(charIndex * 0.3) * 20,
          scale: 1.1 + Math.sin(charIndex * 0.5) * 0.1,
          ease: 'none'
        })

        // 悬停效果
        char.addEventListener('mouseenter', () => {
          gsap.to(char, {
            scale: 1.5,
            textShadow: `0 0 30px hsl(${(wordIndex * 60 + charIndex * 10) % 360}, 100%, 50%)`,
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)'
          })
        })

        char.addEventListener('mouseleave', () => {
          gsap.to(char, {
            scale: 1.1,
            textShadow: `0 0 ${10 + charIndex * 2}px hsl(${(wordIndex * 60 + charIndex * 10) % 360}, 100%, 50%)`,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      })
    })

    // 极光背景动画
    gsap.to('.at-aurora-188', {
      scrollTrigger: {
        trigger: '.at-aurora-188',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      backgroundPosition: '0% 100%',
      ease: 'none'
    })

    // 描述动画
    gsap.from('.at-description-188', {
      scrollTrigger: {
        trigger: '.at-description-188',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // 3D交互
    const textContainer = document.querySelector('.at-text-188') as HTMLElement
    if (textContainer) {
      textContainer.addEventListener('mousemove', (e) => {
        const rect = textContainer.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        gsap.to(textContainer, {
          rotateX: y * -15,
          rotateY: x * 15,
          duration: 0.3,
          ease: 'power2.out'
        })
      })

      textContainer.addEventListener('mouseleave', () => {
        gsap.to(textContainer, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        })
      })
    }
  })
})
</script>

<style scoped>
.at-container-188 {
  min-height: 100vh;
  padding: 80px 20px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a7e 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.at-container-188::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 255, 128, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(128, 0, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.at-title-188 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 80px;
  text-align: center;
  background: linear-gradient(90deg, #00ff80, #8000ff, #00ff80);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: at-glow-188 3s ease-in-out infinite;
}

@keyframes at-glow-188 {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 200% center; }
}

.at-stage-188 {
  max-width: 1400px;
  width: 100%;
  position: relative;
  perspective: 1000px;
  text-align: center;
}

.at-text-188 {
  position: relative;
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  line-height: 1.8;
  transform-style: preserve-3d;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.at-word-188 {
  display: inline-flex;
  gap: 5px;
}

.at-char-188 {
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.at-char-188:hover {
  transform: scale(1.5) translateY(-10px);
}

.at-aurora-188 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, 
      transparent 0%, 
      rgba(0, 255, 128, 0.05) 25%, 
      rgba(128, 0, 255, 0.05) 50%, 
      rgba(0, 255, 128, 0.05) 75%, 
      transparent 100%);
  background-size: 200% 100%;
  pointer-events: none;
  opacity: 0.5;
  animation: at-aurora-188 8s linear infinite;
}

@keyframes at-aurora-188 {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

.at-description-188 {
  margin-top: 60px;
  text-align: center;
}

.at-description-188 p {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 5px;
}

@media (max-width: 768px) {
  .at-title-188 {
    font-size: 1.8rem;
    margin-bottom: 60px;
  }
  
  .at-text-188 {
    font-size: 2rem;
    gap: 15px;
  }
  
  .at-description-188 p {
    font-size: 1.1rem;
    letter-spacing: 3px;
  }
}
</style>
