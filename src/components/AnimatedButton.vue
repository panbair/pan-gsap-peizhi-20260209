<template>
  <button
    ref="buttonRef"
    class="animated-button"
    :class="[
      `animated-button--${variant}`,
      `animated-button--${size}`,
      { 'animated-button--loading': loading },
      { 'animated-button--disabled': disabled }
    ]"
    :style="buttonStyle"
    :disabled="disabled || loading"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="loading" class="animated-button__loader">
      <span class="animated-button__spinner"></span>
    </span>
    <span v-else class="animated-button__content">
      <slot />
    </span>
    <span v-if="ripple" ref="rippleRef" class="animated-button__ripple"></span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large'
  animation?: 'bounce' | 'scale' | 'shake' | 'pulse' | 'glow' | 'none'
  loading?: boolean
  disabled?: boolean
  ripple?: boolean
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  animation: 'bounce',
  loading: false,
  disabled: false,
  ripple: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonRef = ref<HTMLElement>()
const rippleRef = ref<HTMLElement>()

const buttonStyle = computed(() => ({
  '--button-color': props.color
}))

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return

  // 播放点击动画
  if (props.animation !== 'none') {
    playClickAnimation()
  }

  // 创建涟漪效果
  if (props.ripple && buttonRef.value) {
    createRipple(event)
  }

  emit('click', event)
}

const handleMouseEnter = () => {
  if (props.disabled || props.loading) return
  if (props.animation === 'glow' || props.animation === 'pulse') {
    playHoverAnimation()
  }
}

const handleMouseLeave = () => {
  if (props.disabled || props.loading) return
  if (props.animation === 'glow' || props.animation === 'pulse') {
    gsap.to(buttonRef.value, {
      scale: 1,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const playClickAnimation = () => {
  if (!buttonRef.value) return

  const animations = {
    bounce: () => {
      gsap.fromTo(buttonRef.value,
        { scale: 0.95 },
        { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' }
      )
    },
    scale: () => {
      gsap.fromTo(buttonRef.value,
        { scale: 1 },
        { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }
      )
    },
    shake: () => {
      gsap.fromTo(buttonRef.value,
        { x: 0 },
        {
          x: [-5, 5, -5, 5, 0],
          duration: 0.4,
          ease: 'power2.inOut'
        }
      )
    },
    pulse: () => {
      gsap.fromTo(buttonRef.value,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: 'power2.out'
        }
      )
    },
    glow: () => {
      gsap.fromTo(buttonRef.value,
        { boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' },
        {
          boxShadow: '0 0 20px var(--button-color, rgba(102, 126, 234, 0.5))',
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut'
        }
      )
    }
  }

  animations[props.animation]?.()
}

const playHoverAnimation = () => {
  if (!buttonRef.value) return

  gsap.to(buttonRef.value, {
    scale: 1.05,
    boxShadow: props.animation === 'glow'
      ? '0 0 30px var(--button-color, rgba(102, 126, 234, 0.6))'
      : '0 4px 16px rgba(0, 0, 0, 0.15)',
    duration: 0.3,
    ease: 'power2.out'
  })
}

const createRipple = (event: MouseEvent) => {
  if (!buttonRef.value || !rippleRef.value) return

  const button = buttonRef.value.getBoundingClientRect()
  const ripple = rippleRef.value

  const size = Math.max(button.width, button.height)
  const x = event.clientX - button.left - size / 2
  const y = event.clientY - button.top - size / 2

  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  gsap.fromTo(ripple,
    { scale: 0, opacity: 0.6 },
    {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all'
    }
  )
}

onMounted(() => {
  if (buttonRef.value && props.animation === 'glow') {
    gsap.to(buttonRef.value, {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      duration: 0.3
    })
  }
})
</script>

<style scoped>
.animated-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
  --button-color: #667eea;
}

.animated-button--primary {
  background: var(--button-color);
  color: white;
}

.animated-button--secondary {
  background: white;
  color: var(--button-color);
  border: 2px solid var(--button-color);
}

.animated-button--success {
  background: #67c23a;
  color: white;
}

.animated-button--danger {
  background: #f56c6c;
  color: white;
}

.animated-button--warning {
  background: #e6a23c;
  color: white;
}

.animated-button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.animated-button--medium {
  padding: 12px 24px;
  font-size: 16px;
}

.animated-button--large {
  padding: 16px 32px;
  font-size: 18px;
}

.animated-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.animated-button--loading {
  pointer-events: none;
}

.animated-button__loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.animated-button__spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.animated-button__content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.animated-button__ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
