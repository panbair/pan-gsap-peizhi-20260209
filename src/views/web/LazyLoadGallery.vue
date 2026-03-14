<template>
  <div class="lazy-load-gallery">
    <!-- 页面标题 -->
    <header class="page-header">
      <h1 class="page-title">滚动动画组件库</h1>
      <p class="page-subtitle">{{ filteredComponents.length }} 个组件 · 懒加载优化</p>
    </header>

    <!-- 分类筛选 -->
    <div class="filter-bar">
      <button
        v-for="cat in categories"
        :key="cat.id"
        :class="['filter-btn', { active: currentCategory === cat.id }]"
        @click="currentCategory = cat.id"
      >
        {{ cat.name }} ({{ cat.count }})
      </button>
    </div>

    <!-- 组件容器 -->
    <div class="components-container" ref="containerRef">
      <div
        v-for="(item, index) in filteredComponents"
        :key="item.id"
        class="component-wrapper"
        :class="{ 'component-visible': index <= visibleIndex }"
      >
        <div class="item-header">
          <span class="item-number">#{{ index + 1 }}</span>
          <span class="item-name">{{ item.name }}</span>
        </div>

        <!-- 懒加载组件或占位符 -->
        <template v-if="index <= visibleIndex">
          <KeepAlive>
            <Suspense>
              <template #default>
                <component
                  :is="item.component"
                  :key="item.id"
                />
              </template>
              <template #fallback>
                <div class="component-loading">
                  <div class="loading-spinner"></div>
                  <p>加载组件中...</p>
                </div>
              </template>
            </Suspense>
          </KeepAlive>
        </template>
        <div v-else class="component-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-icon">📦</div>
            <p>滚动加载组件 #{{ index + 1 }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部状态栏 -->
    <div class="status-bar">
      <div class="status-item">
        <span>已加载:</span>
        <span>{{ Math.min(visibleIndex + 1, filteredComponents.length) }} / {{ filteredComponents.length }}</span>
      </div>
      <div class="status-item">
        <span>当前:</span>
        <span>#{{ Math.min(visibleIndex + 1, filteredComponents.length) }}</span>
      </div>
      <div class="status-item">
        <span>分类:</span>
        <span>{{ currentCategory }} ({{ categories.find(c => c.id === currentCategory)?.name }})</span>
      </div>
    </div>

    <!-- 错误提示 -->
    <div v-if="loadingError" class="error-toast">
      <span class="error-icon">⚠️</span>
      <span>{{ loadingError }}</span>
      <button @click="loadingError = null" class="close-btn">×</button>
    </div>

    <!-- 返回顶部按钮 -->
    <button
      class="back-to-top"
      :class="{ 'is-visible': showBackToTop }"
      @click="scrollToTop"
      title="返回顶部"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, onMounted, onUnmounted, markRaw, nextTick, watch } from 'vue'
import { defineAsyncComponent } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { safeRefreshScrollTrigger } from '@/utils/gsapHelper'

gsap.registerPlugin(ScrollTrigger)

// 状态
const containerRef = ref<HTMLElement | null>(null)
const currentCategory = ref('animation-1')
const visibleIndex = ref(0) // 初始只显示第1个组件
const loadingError = ref<string | null>(null)
const isLoading = ref(false)
const showBackToTop = ref(false) // 是否显示返回顶部按钮

// 分类定义 - 动态生成
const categories = ref<{ id: string; name: string; count: number }[]>([])

// 所有组件
const allComponents = shallowRef<ComponentInfo[]>([])

// 初始化组件列表
const initializeComponents = () => {
  const componentFiles = import.meta.glob('./components/*.vue')
  const paths = Object.keys(componentFiles)

  allComponents.value = paths.map((path, index) => {
    const name = path.split('/').pop()?.replace('.vue', '') || ''
    const category = getCategoryByIndex(index)

    // 创建带错误处理的异步组件
    const asyncComponent = defineAsyncComponent({
      loader: () => {
        console.log(`[LazyLoad] Loading component: ${name}`)
        return componentFiles[path]().then(module => {
          console.log(`[LazyLoad] Successfully loaded: ${name}`)
          return module
        }).catch(error => {
          console.error(`[LazyLoad] Failed to load ${name}:`, error)
          loadingError.value = `Failed to load ${name}: ${error.message}`
          throw error
        })
      },
      loadingComponent: {
        template: '<div class="component-loading">加载中...</div>'
      },
      errorComponent: {
        template: '<div class="component-error">加载失败</div>'
      },
      delay: 200,
      timeout: 30000 // 增加到30秒
    })

    return {
      id: name,
      name,
      category,
      component: markRaw(asyncComponent)
    }
  })

  updateCategoryCounts()
}

// 获取分类 - 基于索引，每20个组件为一组
const getCategoryByIndex = (index: number): string => {
  const groupIndex = Math.floor(index / 20)
  return `animation-${groupIndex + 1}`
}

// 更新分类计数 - 动态生成分类
const updateCategoryCounts = () => {
  const components = allComponents.value
  if (!components || !Array.isArray(components)) return

  const totalCategories = Math.ceil(components.length / 20)
  const cats: { id: string; name: string; count: number }[] = []

  for (let i = 0; i < totalCategories; i++) {
    const start = i * 20
    const end = Math.min((i + 1) * 20, components.length)
    cats.push({
      id: `animation-${i + 1}`,
      name: `动画${i + 1}`,
      count: end - start
    })
  }

  categories.value = cats
}

// 过滤后的组件
const filteredComponents = computed(() => {
  const components = allComponents.value
  if (!components || !Array.isArray(components)) {
    return []
  }
  return components.filter(c => c.category === currentCategory.value)
})

// 处理滚动加载
let refreshTimeout: ReturnType<typeof setTimeout> | null = null
let isScrolling = false

const handleScroll = () => {
  // 检查是否显示返回顶部按钮
  const scrollY = window.scrollY || document.documentElement.scrollTop
  showBackToTop.value = scrollY > 300

  if (isScrolling) return
  isScrolling = true

  requestAnimationFrame(() => {
    checkVisibleComponents()
    isScrolling = false
  })

  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
  }
  refreshTimeout = setTimeout(() => {
    safeRefreshScrollTrigger()
    refreshTimeout = null
  }, 150)
}

// 返回顶部
const scrollToTop = () => {
  // 临时禁用滚动监听，避免触发昂贵的刷新操作
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 600) // 600ms 足够 smooth 滚动完成
  // 等待滚动完成后重新启用监听
  setTimeout(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    // 重置滚动位置相关的状态
    showBackToTop.value = false
    // 重新检查可见组件
    checkVisibleComponents()
  }, 600) // 600ms 足够 smooth 滚动完成
}

const checkVisibleComponents = async () => {
  if (!containerRef.value || isLoading.value) return

  const container = containerRef.value
  const containerRect = container.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  // 找到当前可见的组件
  const wrappers = container.querySelectorAll('.component-wrapper')
  let newVisibleIndex = visibleIndex.value

  wrappers.forEach((wrapper, index) => {
    const rect = wrapper.getBoundingClientRect()
    const isVisible = rect.top < viewportHeight * 1.2 // 只加载即将进入视口的组件

    if (isVisible && index > visibleIndex.value) {
      newVisibleIndex = index
    }
  })

  // 如果有新的组件需要加载
  if (newVisibleIndex > visibleIndex.value) {
    isLoading.value = true
    
    // 逐个加载组件,避免同时加载太多
    for (let i = visibleIndex.value + 1; i <= newVisibleIndex; i++) {
      visibleIndex.value = i
      await nextTick()
      // 短暂延迟,让组件有时间初始化
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    isLoading.value = false
    
    // 所有组件加载完成后刷新 ScrollTrigger
    safeRefreshScrollTrigger()
  }
}

// 监听分类变化,重置可见索引
watch(currentCategory, async (newCategory) => {
  console.log('[LazyLoad] Category changed to:', newCategory)
  console.log('[LazyLoad] Filtered components count:', filteredComponents.value.length)
  
  // 先重置可见索引，强制重新渲染
  visibleIndex.value = -1
  isLoading.value = false
  
  await nextTick()
  
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
  
  // 等待滚动后再加载组件
  setTimeout(async () => {
    visibleIndex.value = 0
    await nextTick()
    await checkVisibleComponents()
    
    // 延迟刷新确保新组件完全渲染
    setTimeout(() => {
      safeRefreshScrollTrigger()
    }, 200)
  }, 500)
})

// 组件类型
interface ComponentInfo {
  id: string
  name: string
  category: string
  component: any
}

// 生命周期
onMounted(async () => {
  if (!allComponents.value || !Array.isArray(allComponents.value)) {
    allComponents.value = []
  }
  initializeComponents()

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })

  await nextTick()
  await checkVisibleComponents()

  // 延迟刷新确保初始组件完全渲染
  setTimeout(() => {
    safeRefreshScrollTrigger()
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
  }

  // 清理所有 ScrollTrigger 实例
  try {
    ScrollTrigger.getAll().forEach(trigger => {
      try {
        trigger.kill()
      } catch (error) {
        // 忽略单个 trigger 清理失败
      }
    })
  } catch (error) {
    console.warn('Error during ScrollTrigger cleanup:', error)
  }
})
</script>

<style scoped lang="scss">
.lazy-load-gallery {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a2a 100%);
  padding: 20px;
}

.page-header {
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #94a3b8;
}

.filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.filter-btn {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background: linear-gradient(135deg, #a78bfa, #60a5fa);
    border-color: transparent;
  }
}

.components-container {
  width: 100%;
  margin: 0 auto;
}

.component-wrapper {
  margin-bottom: 40px;
  min-height: 400px;
  transition: all 0.3s;
}

.item-header {
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 12px 12px 0 0;
}

.item-number {
  padding: 4px 10px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
}

.item-name {
  flex: 1;
  font-weight: 600;
  color: #e2e8f0;
}

.component-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px;
}

.placeholder-content {
  text-align: center;
  color: #94a3b8;
}

.placeholder-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.component-visible {
  opacity: 1;
}

.status-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  font-size: 14px;

  span:last-child {
    color: #e2e8f0;
    font-weight: 600;
  }
}

// 加载状态样式
.component-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 12px 12px;
  color: #94a3b8;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.component-error {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 0 0 12px 12px;
  color: #f87171;
}

// 错误提示
.error-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(239, 68, 68, 0.95);
  color: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 10000;
  animation: slideIn 0.3s ease-out;
  max-width: 500px;
}

.error-icon {
  font-size: 24px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

// 返回顶部按钮
.back-to-top {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(167, 139, 250, 0.4);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &.is-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(167, 139, 250, 0.6);

    svg {
      transform: translateY(-2px);
    }
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
