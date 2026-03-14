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
          <span class="item-category">{{ item.category }}</span>
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
        <span>{{ categories.find(c => c.id === currentCategory)?.name }}</span>
      </div>
    </div>

    <!-- 错误提示 -->
    <div v-if="loadingError" class="error-toast">
      <span class="error-icon">⚠️</span>
      <span>{{ loadingError }}</span>
      <button @click="loadingError = null" class="close-btn">×</button>
    </div>
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
const currentCategory = ref('all')
const visibleIndex = ref(1) // 初始只显示前2个组件 (索引0, 1)
const loadedComponents = ref<Set<string>>(new Set())
const loadingError = ref<string | null>(null)
const isLoading = ref(false)

// 分类定义
const categories = ref([
  { id: 'all', name: '全部', count: 0 },
  { id: 'core', name: '核心', count: 0 },
  { id: 'scroll', name: '滚动', count: 0 },
  { id: 'creative', name: '创意', count: 0 },
  { id: 'card', name: '卡片', count: 0 },
  { id: 'text', name: '文字', count: 0 },
  { id: 'image', name: '图片', count: 0 },
  { id: '3d', name: '3D', count: 0 },
])

// 所有组件
const allComponents = shallowRef<ComponentInfo[]>([])

// 初始化组件列表
const initializeComponents = () => {
  const componentFiles = import.meta.glob('./components/*.vue')

  allComponents.value = Object.keys(componentFiles).map(path => {
    const name = path.split('/').pop()?.replace('.vue', '') || ''
    const category = getCategory(name)
    
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

// 获取分类
const getCategory = (name: string): string => {
  const lowerName = name.toLowerCase()
  if (lowerName.includes('card')) return 'card'
  if (lowerName.includes('text')) return 'text'
  if (lowerName.includes('image')) return 'image'
  if (lowerName.includes('3d')) return '3d'
  if (lowerName.includes('cube') || lowerName.includes('galaxy') || lowerName.includes('particle')) return 'creative'
  return 'scroll'
}

// 更新分类计数
const updateCategoryCounts = () => {
  const components = allComponents.value
  if (!components || !Array.isArray(components)) return
  categories.value = categories.value.map(cat => ({
    ...cat,
    count: cat.id === 'all'
      ? components.length
      : components.filter(c => c.category === cat.id).length
  }))
}

// 过滤后的组件
const filteredComponents = computed(() => {
  const components = allComponents.value
  if (!components || !Array.isArray(components)) {
    return []
  }
  if (currentCategory.value === 'all') {
    return components
  }
  return components.filter(c => c.category === currentCategory.value)
})

// 处理滚动加载
let refreshTimeout: ReturnType<typeof setTimeout> | null = null
let isScrolling = false

const handleScroll = () => {
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
watch(currentCategory, async () => {
  visibleIndex.value = 1 // 重置为前2个组件
  isLoading.value = false
  await nextTick()
  checkVisibleComponents()
  // 延迟刷新确保新组件完全渲染
  setTimeout(() => {
    safeRefreshScrollTrigger()
  }, 200)
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

.item-category {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 12px;
  color: #94a3b8;
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
</style>
