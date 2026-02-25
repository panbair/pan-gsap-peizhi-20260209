<template>
  <Teleport to="body">
    <Transition
      name="modal"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div v-if="modelValue" class="animated-modal-overlay" @click="handleOverlayClick">
        <div
          ref="modalRef"
          class="animated-modal"
          :class="[
            `animated-modal--${size}`,
            `animated-modal--${animation}`
          ]"
          @click.stop
        >
          <div class="animated-modal__header">
            <h3 class="animated-modal__title">
              <slot name="title">{{ title }}</slot>
            </h3>
            <button class="animated-modal__close" @click="close">
              <span>&times;</span>
            </button>
          </div>
          <div class="animated-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="animated-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'small' | 'medium' | 'large' | 'fullscreen'
  animation?: 'fade' | 'slide' | 'scale' | 'zoom' | 'flip' | 'bounce'
  closeOnClickOverlay?: boolean
  closeOnEscape?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  size: 'medium',
  animation: 'fade',
  closeOnClickOverlay: true,
  closeOnEscape: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
  open: []
}>()

const modalRef = ref<HTMLElement>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    close()
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEscape) {
    close()
  }
}

// GSAP 动画
const onBeforeEnter = () => {
  if (!modalRef.value) return

  const animations = {
    fade: () => {
      gsap.set(modalRef.value, { opacity: 0 })
    },
    slide: () => {
      gsap.set(modalRef.value, { opacity: 0, y: -50 })
    },
    scale: () => {
      gsap.set(modalRef.value, { opacity: 0, scale: 0.8 })
    },
    zoom: () => {
      gsap.set(modalRef.value, { opacity: 0, scale: 0.5 })
    },
    flip: () => {
      gsap.set(modalRef.value, { opacity: 0, rotationY: 90 })
    },
    bounce: () => {
      gsap.set(modalRef.value, { opacity: 0, y: -100 })
    }
  }

  animations[props.animation]?.()
  emit('open')
}

const onEnter = (el: Element, done: () => void) => {
  if (!modalRef.value) {
    done()
    return
  }

  const animations = {
    fade: () => {
      gsap.to(modalRef.value, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: done
      })
    },
    slide: () => {
      gsap.to(modalRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: done
      })
    },
    scale: () => {
      gsap.to(modalRef.value, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
        onComplete: done
      })
    },
    zoom: () => {
      gsap.to(modalRef.value, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
        onComplete: done
      })
    },
    flip: () => {
      gsap.to(modalRef.value, {
        opacity: 1,
        rotationY: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        onComplete: done
      })
    },
    bounce: () => {
      gsap.to(modalRef.value, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'bounce.out',
        onComplete: done
      })
    }
  }

  animations[props.animation]?.()
}

const onLeave = (el: Element, done: () => void) => {
  if (!modalRef.value) {
    done()
    return
  }

  const animations = {
    fade: () => {
      gsap.to(modalRef.value, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: done
      })
    },
    slide: () => {
      gsap.to(modalRef.value, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: done
      })
    },
    scale: () => {
      gsap.to(modalRef.value, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: done
      })
    },
    zoom: () => {
      gsap.to(modalRef.value, {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: done
      })
    },
    flip: () => {
      gsap.to(modalRef.value, {
        opacity: 0,
        rotationY: -90,
        duration: 0.5,
        ease: 'back.in(1.7)',
        onComplete: done
      })
    },
    bounce: () => {
      gsap.to(modalRef.value, {
        opacity: 0,
        y: -100,
        duration: 0.6,
        ease: 'bounce.in',
        onComplete: done
      })
    }
  }

  animations[props.animation]?.()
}

// ESC键关闭
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleEscape)
}
</script>

<style scoped>
.animated-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.animated-modal {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
}

.animated-modal--small {
  width: 400px;
}

.animated-modal--medium {
  width: 600px;
}

.animated-modal--large {
  width: 800px;
}

.animated-modal--fullscreen {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  border-radius: 0;
}

.animated-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.animated-modal__title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
}

.animated-modal__close {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #6b7280;
  transition: all 0.2s;
}

.animated-modal__close:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.animated-modal__body {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.animated-modal__footer {
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* 过渡动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
