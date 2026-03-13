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
            <component
              :is="item.component"
            />
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
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, onMounted, onUnmounted, markRaw, nextTick, watch } from 'vue'
import { defineAsyncComponent } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 状态
const containerRef = ref<HTMLElement | null>(null)
const currentCategory = ref('all')
const visibleIndex = ref(2) // 初始显示前3个组件 (索引0, 1, 2)
const loadedComponents = ref<Set<string>>(new Set())

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
  const componentFiles = import.meta.glob('./components/Scroll*.vue')

  allComponents.value = Object.keys(componentFiles).map(path => {
    const name = path.split('/').pop()?.replace('.vue', '') || ''
    const category = getCategory(name)
    const asyncComponent = defineAsyncComponent({
      loader: componentFiles[path] as () => Promise<any>,
      delay: 100,
      timeout: 10000
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

const handleScroll = () => {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
  }
  refreshTimeout = setTimeout(() => {
    checkVisibleComponents()
    ScrollTrigger.refresh()
    refreshTimeout = null
  }, 100)
}

const checkVisibleComponents = () => {
  if (!containerRef.value) return

  const container = containerRef.value
  const containerRect = container.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  // 找到当前可见的组件
  const wrappers = container.querySelectorAll('.component-wrapper')
  wrappers.forEach((wrapper, index) => {
    const rect = wrapper.getBoundingClientRect()
    const isVisible = rect.top < viewportHeight * 1.5 // 提前加载

    if (isVisible && index > visibleIndex.value) {
      visibleIndex.value = index
    }
  })
}

// 监听分类变化,重置可见索引
watch(currentCategory, () => {
  visibleIndex.value = 2 // 重置为前3个组件
  nextTick(() => {
    checkVisibleComponents()
    ScrollTrigger.refresh()
  })
})

// 组件类型
interface ComponentInfo {
  id: string
  name: string
  category: string
  component: any
}

// 生命周期
onMounted(() => {
  if (!allComponents.value || !Array.isArray(allComponents.value)) {
    allComponents.value = []
  }
  initializeComponents()

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })

  nextTick(() => {
    checkVisibleComponents()
    ScrollTrigger.refresh()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
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
</style>
