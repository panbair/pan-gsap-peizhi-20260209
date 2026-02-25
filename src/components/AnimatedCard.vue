<template>
  <div
    ref="cardRef"
    class="animated-card"
    :class="[
      `animated-card--${animation}`,
      { 'animated-card--visible': isVisible }
    ]"
    :style="cardStyle"
  >
    <div class="animated-card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

interface Props {
  animation?: 'fade' | 'slide' | 'scale' | 'flip' | 'rotate' | 'bounce'
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  visible?: boolean
  color?: string
  shadow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade',
  direction: 'up',
  delay: 0,
  duration: 0.5,
  visible: false,
  shadow: true
})

const cardRef = ref<HTMLElement>()
const isVisible = ref(props.visible)
let animationTimeline: gsap.core.Timeline | null = null

const cardStyle = computed(() => ({
  '--card-color': props.color
}))

const playAnimation = (show: boolean) => {
  if (!cardRef.value) return

  const animations = {
    fade: () => {
      if (show) {
        gsap.fromTo(cardRef.value,
          { opacity: 0 },
          { opacity: 1, duration: props.duration, delay: props.delay, ease: 'power2.out' }
        )
      } else {
        gsap.to(cardRef.value, {
          opacity: 0,
          duration: props.duration,
          ease: 'power2.in'
        })
      }
    },
    slide: () => {
      const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 }
      }

      const startPos = directions[props.direction]

      if (show) {
        gsap.fromTo(cardRef.value,
          { opacity: 0, ...startPos },
          { opacity: 1, x: 0, y: 0, duration: props.duration, delay: props.delay, ease: 'power2.out' }
        )
      } else {
        gsap.to(cardRef.value, {
          opacity: 0,
          ...startPos,
          duration: props.duration,
          ease: 'power2.in'
        })
      }
    },
    scale: () => {
      if (show) {
        gsap.fromTo(cardRef.value,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: props.duration, delay: props.delay, ease: 'back.out(1.7)' }
        )
      } else {
        gsap.to(cardRef.value, {
          opacity: 0,
          scale: 0.8,
          duration: props.duration,
          ease: 'back.in(1.7)'
        })
      }
    },
    flip: () => {
      if (show) {
        gsap.fromTo(cardRef.value,
          { opacity: 0, rotationY: 90 },
          { opacity: 1, rotationY: 0, duration: props.duration, delay: props.delay, ease: 'back.out(1.7)' }
        )
      } else {
        gsap.to(cardRef.value, {
          opacity: 0,
          rotationY: -90,
          duration: props.duration,
          ease: 'back.in(1.7)'
        })
      }
    },
    rotate: () => {
      if (show) {
        gsap.fromTo(cardRef.value,
          { opacity: 0, rotation: -10 },
          { opacity: 1, rotation: 0, duration: props.duration, delay: props.delay, ease: 'back.out(1.7)' }
        )
      } else {
        gsap.to(cardRef.value, {
          opacity: 0,
          rotation: 10,
          duration: props.duration,
          ease: 'back.in(1.7)'
        })
      }
    },
    bounce: () => {
      if (show) {
        gsap.fromTo(cardRef.value,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: props.duration,
            delay: props.delay,
            ease: 'bounce.out'
          }
        )
      } else {
        gsap.to(cardRef.value, {
          opacity: 0,
          y: -50,
          duration: props.duration,
          ease: 'bounce.in'
        })
      }
    }
  }

  animations[props.animation]?.()
}

const enter = () => {
  if (!isVisible.value) {
    isVisible.value = true
    playAnimation(true)
  }
}

const leave = () => {
  if (isVisible.value) {
    isVisible.value = false
    playAnimation(false)
  }
}

onMounted(() => {
  if (props.visible) {
    enter()
  }
})

onUnmounted(() => {
  if (animationTimeline) {
    animationTimeline.kill()
  }
})

defineExpose({
  enter,
  leave
})
</script>

<style scoped>
.animated-card {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.animated-card--visible {
  opacity: 1;
}

.animated-card__content {
  position: relative;
  z-index: 1;
}
</style>
