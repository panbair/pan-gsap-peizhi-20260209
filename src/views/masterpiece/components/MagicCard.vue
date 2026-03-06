<template>
  <div
    ref="cardRef"
    class="magic-card"
    @click="handleFlip"
  >
    <div class="card-inner" ref="innerRef">
      <div class="card-front">
        <div class="card-icon">{{ icon }}</div>
        <div class="card-title">{{ title }}</div>
        <div class="card-badge">{{ badge }}</div>
      </div>
      <div class="card-back">
        <div class="back-icon">✨</div>
        <div class="back-text">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  icon?: string
  title?: string
  badge?: string
  desc?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  icon: '🎨',
  title: 'Card Title',
  badge: 'NEW',
  desc: 'Card description',
  delay: 0
})

const cardRef = ref<HTMLElement>()
const innerRef = ref<HTMLElement>()

function handleFlip() {
  gsap.to(innerRef.value, {
    rotateY: 180,
    duration: 0.6,
    ease: 'power2.inOut'
  })

  setTimeout(() => {
    gsap.to(innerRef.value, {
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.inOut'
    })
  }, 1500)
}

onMounted(() => {
  ScrollTrigger.create({
    trigger: cardRef.value,
    start: 'top 85%',
    onEnter: () => {
      gsap.from(cardRef.value, {
        opacity: 0,
        y: 80,
        rotateY: -45,
        scale: 0.8,
        duration: 0.8,
        delay: props.delay,
        ease: 'power3.out'
      })
    }
  })
})
</script>

<style scoped lang="scss">
.magic-card {
  height: 320px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-front, .card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

.card-front {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.card-back {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(79, 70, 229, 0.2));
  transform: rotateY(180deg);
}

.card-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 12px;
}

.card-badge {
  padding: 6px 16px;
  background: rgba(167, 139, 250, 0.2);
  border-radius: 50px;
  font-size: 0.75rem;
  color: #a78bfa;
}

.back-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.back-text {
  font-size: 1.1rem;
  color: #e2e8f0;
  text-align: center;
  line-height: 1.6;
}
</style>
