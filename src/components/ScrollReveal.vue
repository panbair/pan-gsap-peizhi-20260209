<template>
  <div
    ref="revealRef"
    class="scroll-reveal"
    :class="[
      `scroll-reveal--${direction}`,
      `scroll-reveal--${animation}`,
      { 'scroll-reveal--visible': isVisible }
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

interface Props {
  animation?: 'fade' | 'slide' | 'scale' | 'rotate' | 'flip'
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade',
  direction: 'up',
  delay: 0,
  duration: 0.8,
  threshold: 0.2,
  once: true
})

const revealRef = ref<HTMLElement>()
const isVisible = ref(false)
const hasRevealed = ref(false)

let observer: IntersectionObserver | null = null
let animationTimeline: gsap.core.Timeline | null = null

const playAnimation = () => {
  if (!revealRef.value) return

  const animations = {
    fade: () => {
      gsap.to(revealRef.value, {
        opacity: 1,
        duration: props.duration,
        delay: props.delay,
        ease: 'power2.out'
      })
    },
    slide: () => {
      const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 }
      }

      const startValue = directions[props.direction]

      gsap.to(revealRef.value, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: props.duration,
        delay: props.delay,
        ease: 'power2.out'
      })
    },
    scale: () => {
      gsap.to(revealRef.value, {
        opacity: 1,
        scale: 1,
        duration: props.duration,
        delay: props.delay,
        ease: 'back.out(1.7)'
      })
    },
    rotate: () => {
      gsap.to(revealRef.value, {
        opacity: 1,
        rotation: 0,
        duration: props.duration,
        delay: props.delay,
        ease: 'back.out(1.7)'
      })
    },
    flip: () => {
      gsap.to(revealRef.value, {
        opacity: 1,
        rotationY: 0,
        duration: props.duration,
        delay: props.delay,
        ease: 'back.out(1.7)'
      })
    }
  }

  animations[props.animation]?.()
}

const reveal = () => {
  if (props.once && hasRevealed.value) return

  isVisible.value = true
  hasRevealed.value = true
  playAnimation()
}

const initObserver = () => {
  if (!revealRef.value) return

  // 初始化动画状态
  const animations = {
    fade: () => {
      gsap.set(revealRef.value, { opacity: 0 })
    },
    slide: () => {
      const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 }
      }
      gsap.set(revealRef.value, { opacity: 0, ...directions[props.direction] })
    },
    scale: () => {
      gsap.set(revealRef.value, { opacity: 0, scale: 0.8 })
    },
    rotate: () => {
      gsap.set(revealRef.value, { opacity: 0, rotation: -10 })
    },
    flip: () => {
      gsap.set(revealRef.value, { opacity: 0, rotationY: 90 })
    }
  }

  animations[props.animation]?.()

  // 创建Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal()
          if (props.once) {
            observer?.unobserve(entry.target)
          }
        } else if (!props.once) {
          // 非一次性动画,隐藏时重置
          resetAnimation()
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  observer.observe(revealRef.value)
}

const resetAnimation = () => {
  if (!revealRef.value) return

  isVisible.value = false

  const animations = {
    fade: () => {
      gsap.to(revealRef.value, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
    },
    slide: () => {
      const directions = {
        up: { y: 50 },
        down: { y: -50 },
        left: { x: 50 },
        right: { x: -50 }
      }
      gsap.to(revealRef.value, {
        opacity: 0,
        ...directions[props.direction],
        duration: 0.3,
        ease: 'power2.in'
      })
    },
    scale: () => {
      gsap.to(revealRef.value, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'back.in(1.7)'
      })
    },
    rotate: () => {
      gsap.to(revealRef.value, {
        opacity: 0,
        rotation: -10,
        duration: 0.3,
        ease: 'back.in(1.7)'
      })
    },
    flip: () => {
      gsap.to(revealRef.value, {
        opacity: 0,
        rotationY: 90,
        duration: 0.3,
        ease: 'back.in(1.7)'
      })
    }
  }

  animations[props.animation]?.()
}

onMounted(() => {
  initObserver()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (animationTimeline) {
    animationTimeline.kill()
  }
})

defineExpose({
  reveal,
  resetAnimation
})
</script>

<style scoped>
.scroll-reveal {
  will-change: opacity, transform;
}

.scroll-reveal--visible {
  opacity: 1;
}
</style>
