<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title" ref="titleRef">
        <span class="title-char" v-for="(char, i) in firstLine.split('')" :key="i">{{ char }}</span>
        <br>
        <span class="title-char" v-for="(char, i) in secondLine.split('')" :key="i + firstLine.length">{{ char }}</span>
      </h1>
      <p class="hero-subtitle" ref="subtitleRef">{{ subtitle }}</p>
      <button class="hero-btn" ref="btnRef">
        <span class="btn-text">{{ btnText }}</span>
        <span class="btn-glow"></span>
      </button>
    </div>
    <slot name="cube"></slot>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

interface Props {
  firstLine?: string
  secondLine?: string
  subtitle?: string
  btnText?: string
}

const props = withDefaults(defineProps<Props>(), {
  firstLine: 'QUANTUM',
  secondLine: 'UNIVERSE',
  subtitle: '探索GSAP动画的无限可能',
  btnText: '开始探索'
})

const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()
const btnRef = ref<HTMLElement>()

onMounted(() => {
  // 标题逐字飞入
  const chars = titleRef.value!.querySelectorAll('.title-char')
  gsap.fromTo(chars,
    { opacity: 0, y: 100, rotationX: 90 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)'
    }
  )

  // 副标题淡入
  gsap.from(subtitleRef.value, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.5,
    ease: 'power3.out'
  })

  // 按钮入场
  gsap.from(btnRef.value, {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    delay: 2,
    ease: 'back.out(1.7)'
  })
})
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 10%;
  position: relative;
  z-index: 1;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  perspective: 500px;
}

.title-char {
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: #94a3b8;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-btn {
  position: relative;
  padding: 18px 48px;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.4);
  }
}

.btn-text {
  position: relative;
  z-index: 1;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.hero-btn:hover .btn-glow {
  opacity: 1;
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 60px 5%;
  }
}
</style>
