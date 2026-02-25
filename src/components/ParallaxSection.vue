<template>
  <div
    ref="sectionRef"
    class="parallax-section"
    :style="sectionStyle"
  >
    <div
      ref="parallaxRef"
      class="parallax-section__content"
      :style="parallaxStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

interface Props {
  speed?: number
  direction?: 'vertical' | 'horizontal'
  offset?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  speed: 0.5,
  direction: 'vertical',
  offset: 0,
  disabled: false
})

const sectionRef = ref<HTMLElement>()
const parallaxRef = ref<HTMLElement>()

const transform = ref({ x: 0, y: 0 })
let animationFrame: number | null = null

const sectionStyle = computed(() => ({
  height: '100vh',
  overflow: 'hidden',
  position: 'relative'
}))

const parallaxStyle = computed(() => ({
  transform: `translate3d(${transform.value.x}px, ${transform.value.y}px, 0)`,
  willChange: 'transform'
}))

const handleScroll = () => {
  if (props.disabled || !sectionRef.value || !parallaxRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // 计算滚动进度 (0-1)
  const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)))

  // 计算视差偏移
  const offset = (progress - 0.5) * props.speed * windowHeight

  if (props.direction === 'vertical') {
    transform.value.y = offset
  } else {
    transform.value.x = offset
  }

  // 使用requestAnimationFrame优化性能
  if (!animationFrame) {
    animationFrame = requestAnimationFrame(() => {
      animationFrame = null
    })
  }
}

const initParallax = () => {
  if (props.disabled) return

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // 初始化位置
}

onMounted(() => {
  initParallax()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.parallax-section {
  position: relative;
}

.parallax-section__content {
  position: relative;
  z-index: 1;
}
</style>
