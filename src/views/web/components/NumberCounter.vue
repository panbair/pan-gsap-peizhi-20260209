<template>
  <section ref="counterSection" class="section-8 counter-section-8">
    <h2 class="section-title-8">数字增长</h2>
    <div class="counter-container-8" ref="counterContainer">
      <div class="counter-item-8" v-for="(counter, index) in counters" :key="index">
        <div class="counter-value-8" :ref="el => { if(el) counterRefs[index] = el as HTMLElement }">0</div>
        <div class="counter-label-8">{{ counter.label }}</div>
        <div class="counter-unit-8">{{ counter.unit }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const counterSection = ref<HTMLElement>()
const counterContainer = ref<HTMLElement>()
const counterRefs = ref<HTMLElement[]>([])

const counters = ref([
  { label: '用户', unit: '万', target: 1000 },
  { label: '动画', unit: '个', target: 500 },
  { label: '评分', unit: '分', target: 98 },
  { label: '增长', unit: '%', target: 250 }
])

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
  counterRefs.value.forEach((counterEl, index) => {
    const counter = counters.value[index]
    gsap.to(counterEl,
      {
        innerText: counter.target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counterSection.value,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1
        }
      }
    )
  })
}
</script>

<style scoped lang="scss">
.section-8 {
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-title-8 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.counter-section-8 {
  background: linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.1), transparent);
}

.counter-container-8 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1000px;
  width: 100%;
}

.counter-item-8 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
}

.counter-value-8 {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.counter-label-8 {
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 5px;
}

.counter-unit-8 {
  font-size: 1.5rem;
  color: #fff;
}

@media (max-width: 768px) {
  .counter-container-8 {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .counter-item-8 {
    padding: 30px;
  }

  .counter-value-8 {
    font-size: 2rem;
  }
}
</style>
