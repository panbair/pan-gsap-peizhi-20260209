<template>
  <div class="infinite-loader" :class="{ 'infinite-loader--hidden': !loading }">
    <div class="infinite-loader__dots">
      <span
        v-for="(dot, index) in 3"
        :key="index"
        ref="dotRefs"
        class="infinite-loader__dot"
        :style="{ '--index': index }"
      ></span>
    </div>
    <p v-if="text" class="infinite-loader__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

interface Props {
  loading?: boolean
  text?: string
  size?: 'small' | 'medium' | 'large'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  loading: true,
  text: '',
  size: 'medium',
  color: '#667eea'
})

const dotRefs = ref<HTMLElement[]>([])
let animationTimeline: gsap.core.Timeline | null = null

const animateDots = () => {
  animationTimeline = gsap.timeline({ repeat: -1 })

  dotRefs.value.forEach((dot, index) => {
    animationTimeline!.to(dot, {
      scale: 1.5,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
      delay: index * 0.1
    })

    animationTimeline!.to(dot, {
      scale: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power2.in',
      delay: 0.1
    })
  })
}

onMounted(() => {
  if (props.loading) {
    animateDots()
  }
})

onUnmounted(() => {
  if (animationTimeline) {
    animationTimeline.kill()
  }
})
</script>

<style scoped>
.infinite-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 16px;
}

.infinite-loader--hidden {
  display: none;
}

.infinite-loader__dots {
  display: flex;
  gap: 8px;
}

.infinite-loader__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-color, #667eea);
  opacity: 0.5;
  transition: background-color 0.3s;
}

.infinite-loader--small .infinite-loader__dot {
  width: 8px;
  height: 8px;
}

.infinite-loader--large .infinite-loader__dot {
  width: 16px;
  height: 16px;
}

.infinite-loader__text {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}
</style>
