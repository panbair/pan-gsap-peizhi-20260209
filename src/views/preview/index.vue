<template>
  <div class="preview-debugger-container">
    <el-container>
      <!-- 头部 -->
      <el-header class="debugger-header">
        <h1 class="title">
          <span class="icon">🎬</span>
          动画预览调试器
        </h1>
      </el-header>

      <!-- 主内容 -->
      <el-main class="debugger-main">
        <el-row :gutter="20">
          <!-- 左侧: 预览区 -->
          <el-col :span="16">
            <div class="preview-area">
              <!-- 播放控制 -->
              <div class="playback-controls">
                <el-button-group>
                  <el-button :icon="DArrowLeft" @click="previousFrame" :disabled="!isPaused">上一帧</el-button>
                  <el-button :icon="VideoPlay" @click="play" :disabled="isPlaying">播放</el-button>
                  <el-button :icon="VideoPause" @click="pause" :disabled="!isPlaying">暂停</el-button>
                  <el-button :icon="DArrowRight" @click="nextFrame" :disabled="!isPaused">下一帧</el-button>
                </el-button-group>

                <el-slider
                  v-model="currentTime"
                  :min="0"
                  :max="totalDuration"
                  :step="0.016"
                  :format-tooltip="formatTime"
                  @input="seekTo"
                  class="timeline-slider"
                />

                <el-input-number
                  v-model="currentTime"
                  :min="0"
                  :max="totalDuration"
                  :step="0.016"
                  :precision="3"
                  size="small"
                  class="time-input"
                  @change="seekTo"
                />

                <el-select v-model="playbackSpeed" class="speed-select">
                  <el-option label="0.1x" :value="0.1" />
                  <el-option label="0.25x" :value="0.25" />
                  <el-option label="0.5x" :value="0.5" />
                  <el-option label="1x" :value="1" />
                  <el-option label="2x" :value="2" />
                  <el-option label="4x" :value="4" />
                </el-select>

                <el-button @click="restart" :icon="RefreshRight">重播</el-button>
              </div>

              <!-- 预览画布 -->
              <div class="preview-canvas" ref="canvas">
                <div
                  v-for="(element, index) in elements"
                  :key="index"
                  :ref="el => setElementRef(index, el)"
                  class="preview-element"
                  :style="getElementStyle(index)"
                  @click="selectElement(index)"
                >
                  元素 {{ index + 1 }}
                </div>
              </div>

              <!-- 性能监控 -->
              <div class="performance-panel">
                <div class="metric-item">
                  <span class="label">FPS</span>
                  <span class="value" :class="{ 'good': fps >= 55, 'warning': fps >= 30 && fps < 55, 'bad': fps < 30 }">
                    {{ fps }}
                  </span>
                </div>
                <div class="metric-item">
                  <span class="label">帧时间</span>
                  <span class="value">{{ frameTime.toFixed(2) }}ms</span>
                </div>
                <div class="metric-item">
                  <span class="label">重排</span>
                  <span class="value warning">{{ reflowCount }}</span>
                </div>
                <div class="metric-item">
                  <span class="label">重绘</span>
                  <span class="value info">{{ repaintCount }}</span>
                </div>
              </div>
            </div>
          </el-col>

          <!-- 右侧: 调试面板 -->
          <el-col :span="8">
            <div class="debug-panel">
              <!-- 时间轴 -->
              <el-card class="debug-card">
                <template #header>
                  <div class="card-header">
                    <span>时间轴</span>
                    <el-button size="small" @click="showTimeline = !showTimeline">
                      {{ showTimeline ? '隐藏' : '显示' }}
                    </el-button>
                  </div>
                </template>

                <div v-if="showTimeline" class="timeline-view">
                  <div
                    v-for="(keyframe, index) in keyframes"
                    :key="index"
                    class="keyframe-marker"
                    :style="{ left: `${(keyframe.time / totalDuration) * 100}%` }"
                    :class="{ 'active': Math.abs(currentTime - keyframe.time) < 0.05 }"
                    @click="seekTo(keyframe.time)"
                  >
                    <span class="time">{{ keyframe.time.toFixed(2) }}s</span>
                  </div>
                </div>
              </el-card>

              <!-- 当前值 -->
              <el-card class="debug-card">
                <template #header>
                  <span>当前值</span>
                </template>

                <div v-if="selectedElement !== null" class="current-values">
                  <div class="value-item">
                    <span class="label">X: </span>
                    <span class="value">{{ currentValues.x?.toFixed(2) || 0 }}px</span>
                  </div>
                  <div class="value-item">
                    <span class="label">Y: </span>
                    <span class="value">{{ currentValues.y?.toFixed(2) || 0 }}px</span>
                  </div>
                  <div class="value-item">
                    <span class="label">Scale: </span>
                    <span class="value">{{ currentValues.scale?.toFixed(3) || 1 }}</span>
                  </div>
                  <div class="value-item">
                    <span class="label">Rotation: </span>
                    <span class="value">{{ currentValues.rotation?.toFixed(1) || 0 }}°</span>
                  </div>
                  <div class="value-item">
                    <span class="label">Opacity: </span>
                    <span class="value">{{ currentValues.opacity?.toFixed(2) || 1 }}</span>
                  </div>
                  <div class="value-item">
                    <span class="label">Progress: </span>
                    <span class="value">{{ ((currentTime / totalDuration) * 100).toFixed(1) }}%</span>
                  </div>
                </div>
                <el-empty v-else description="点击元素查看详情" :image-size="80" />
              </el-card>

              <!-- 元素管理 -->
              <el-card class="debug-card">
                <template #header>
                  <div class="card-header">
                    <span>元素管理</span>
                    <el-button size="small" :icon="Plus" @click="addElement">添加</el-button>
                  </div>
                </template>

                <div class="element-list">
                  <div
                    v-for="(element, index) in elements"
                    :key="index"
                    class="element-item"
                    :class="{ 'selected': selectedElement === index }"
                    @click="selectElement(index)"
                  >
                    <span>元素 {{ index + 1 }}</span>
                    <el-button
                      size="small"
                      type="danger"
                      :icon="Delete"
                      @click.stop="removeElement(index)"
                      :disabled="elements.length === 1"
                    />
                  </div>
                </div>
              </el-card>

              <!-- 交错控制 -->
              <el-card class="debug-card">
                <template #header>
                  <span>交错控制</span>
                </template>

                <el-form label-position="top">
                  <el-form-item label="交错延迟">
                    <el-slider
                      v-model="staggerDelay"
                      :min="0"
                      :max="2"
                      :step="0.05"
                      @input="updateStagger"
                    />
                    <el-input-number
                      v-model="staggerDelay"
                      :min="0"
                      :max="2"
                      :step="0.05"
                      :precision="2"
                      size="small"
                      class="parameter-input"
                      @change="updateStagger"
                    />
                  </el-form-item>

                  <el-form-item label="交错方向">
                    <el-radio-group v-model="staggerDirection" @change="updateStagger">
                      <el-radio-button label="normal">正向</el-radio-button>
                      <el-radio-button label="reverse">反向</el-radio-button>
                      <el-radio-button label="random">随机</el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                </el-form>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  VideoPlay,
  VideoPause,
  DArrowLeft,
  DArrowRight,
  RefreshRight,
  Plus,
  Delete
} from '@element-plus/icons-vue'
import gsap from 'gsap'

// State
const canvas = ref<HTMLElement>()
const elements = ref([
  { id: 1, animation: 'fadeIn', params: {} }
])
const elementRefs = ref<(HTMLElement | null)[]>([])
const selectedElement = ref<number | null>(0)
const currentTime = ref(0)
const totalDuration = ref(2)
const isPlaying = ref(false)
const isPaused = ref(true)
const playbackSpeed = ref(1)
const showTimeline = ref(true)
const staggerDelay = ref(0)
const staggerDirection = ref<'normal' | 'reverse' | 'random'>('normal')

// Performance
const fps = ref(60)
const frameTime = ref(16.67)
const reflowCount = ref(0)
const repaintCount = ref(0)

// Animation state
let mainTimeline: gsap.core.Timeline | null = null
let animationFrameId: number | null = null
let lastFrameTime = performance.now()
let frameCount = 0

// Keyframes
const keyframes = computed(() => {
  return [
    { time: 0, label: '开始' },
    { time: totalDuration.value * 0.25, label: '25%' },
    { time: totalDuration.value * 0.5, label: '50%' },
    { time: totalDuration.value * 0.75, label: '75%' },
    { time: totalDuration.value, label: '结束' }
  ]
})

// Current values
const currentValues = ref({
  x: 0,
  y: 0,
  scale: 1,
  rotation: 0,
  opacity: 1
})

// Methods
const setElementRef = (index: number, el: HTMLElement | null) => {
  elementRefs.value[index] = el
}

const getElementStyle = (index: number) => {
  const staggerOffset = staggerDirection.value === 'reverse'
    ? (elements.value.length - 1 - index) * staggerDelay.value
    : staggerDirection.value === 'random'
      ? Math.random() * staggerDelay.value * elements.value.length
      : index * staggerDelay.value

  return {
    position: 'absolute',
    left: `${100 + (index * 120)}px`,
    top: '150px',
    width: '100px',
    height: '100px',
    background: `hsl(${index * 40}, 70%, 50%)`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: 'bold',
    color: 'white',
    boxShadow: selectedElement.value === index ? '0 0 20px rgba(0,0,0,0.5)' : '0 2px 8px rgba(0,0,0,0.2)',
    transform: `translateZ(0)`,
    willChange: 'transform, opacity'
  }
}

const selectElement = (index: number) => {
  selectedElement.value = index
  updateCurrentValues(index)
}

const updateCurrentValues = (index: number) => {
  const element = elementRefs.value[index]
  if (!element) return

  const transform = window.getComputedStyle(element).transform
  const matrix = new DOMMatrix(transform)

  currentValues.value = {
    x: matrix.m41,
    y: matrix.m42,
    scale: matrix.a,
    rotation: Math.atan2(matrix.b, matrix.a) * (180 / Math.PI),
    opacity: parseFloat(window.getComputedStyle(element).opacity)
  }
}

const play = () => {
  if (!mainTimeline || isPlaying.value) return

  mainTimeline.play()
  isPlaying.value = true
  isPaused.value = false
}

const pause = () => {
  if (!mainTimeline) return

  mainTimeline.pause()
  isPlaying.value = false
  isPaused.value = true
}

const restart = () => {
  if (mainTimeline) {
    mainTimeline.restart()
  } else {
    createTimeline()
    play()
  }
}

const seekTo = (time: number) => {
  if (!mainTimeline) return

  currentTime.value = time
  mainTimeline.pause()
  mainTimeline.seek(time)

  if (selectedElement.value !== null) {
    updateCurrentValues(selectedElement.value)
  }
}

const previousFrame = () => {
  seekTo(Math.max(0, currentTime.value - 0.033))
}

const nextFrame = () => {
  seekTo(Math.min(totalDuration.value, currentTime.value + 0.033))
}

const formatTime = (val: number) => `${val.toFixed(2)}s`

const addElement = () => {
  elements.value.push({
    id: Date.now(),
    animation: 'fadeIn',
    params: {}
  })
  createTimeline()
}

const removeElement = (index: number) => {
  if (elements.value.length <= 1) return

  elements.value.splice(index, 1)
  if (selectedElement.value === index) {
    selectedElement.value = 0
  } else if (selectedElement.value !== null && selectedElement.value > index) {
    selectedElement.value--
  }
  createTimeline()
}

const updateStagger = () => {
  if (mainTimeline) {
    mainTimeline.kill()
  }
  createTimeline()
}

const createTimeline = () => {
  if (mainTimeline) {
    mainTimeline.kill()
  }

  mainTimeline = gsap.timeline({
    paused: true,
    onUpdate: () => {
      if (mainTimeline) {
        currentTime.value = mainTimeline.time()
      }
    }
  })

  totalDuration.value = 2

  elementRefs.value.forEach((el, index) => {
    if (!el) return

    mainTimeline.fromTo(
      el,
      { scale: 0.5, opacity: 0, rotation: -180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)'
      },
      staggerDirection.value === 'reverse'
        ? index * staggerDelay.value
        : staggerDirection.value === 'random'
          ? Math.random() * staggerDelay.value * elements.value.length
          : index * staggerDelay.value
    )
  })
}

const updatePerformance = () => {
  const now = performance.now()
  const delta = now - lastFrameTime
  frameCount++

  if (delta >= 1000) {
    fps.value = Math.round(frameCount * 1000 / delta)
    frameTime.value = delta / frameCount
    frameCount = 0
    lastFrameTime = now
  }
}

const detectReflowRepaint = () => {
  // 简化的重排/重绘检测
  const start = performance.now()
  elementRefs.value.forEach(el => {
    if (el) {
      el.offsetHeight // 强制重排
    }
  })
  const end = performance.now()
  reflowCount.value++
  repaintCount.value++
}

// Lifecycle
onMounted(() => {
  createTimeline()

  // 性能监控循环
  const performanceLoop = () => {
    updatePerformance()
    animationFrameId = requestAnimationFrame(performanceLoop)
  }
  animationFrameId = requestAnimationFrame(performanceLoop)

  // 定期检测重排
  setInterval(detectReflowRepaint, 500)
})

onUnmounted(() => {
  if (mainTimeline) {
    mainTimeline.kill()
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.preview-debugger-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.debugger-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.title {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  font-size: 32px;
}

.debugger-main {
  padding: 24px;
}

.preview-area {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.playback-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.timeline-slider {
  flex: 1;
  min-width: 200px;
}

.time-input {
  width: 100px;
}

.speed-select {
  width: 100px;
}

.preview-canvas {
  min-height: 400px;
  background: #0d1b2a;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
}

.preview-element {
  transition: box-shadow 0.3s ease;
}

.preview-element:hover {
  transform: scale(1.05);
}

.performance-panel {
  display: flex;
  gap: 24px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  flex-wrap: wrap;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.metric-item .label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.metric-item .value {
  font-size: 24px;
  font-weight: bold;
  color: #00d9ff;
}

.metric-item .value.good {
  color: #00ff88;
}

.metric-item .value.warning {
  color: #ffaa00;
}

.metric-item .value.bad {
  color: #ff4444;
}

.debug-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.debug-card {
  background: rgba(255, 255, 255, 0.95);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.timeline-view {
  position: relative;
  height: 60px;
  background: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 16px;
}

.keyframe-marker {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: #4a90e2;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.keyframe-marker:hover {
  transform: translate(-50%, -50%) scale(1.3);
}

.keyframe-marker.active {
  background: #ff6b6b;
  transform: translate(-50%, -50%) scale(1.5);
}

.keyframe-marker .time {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  white-space: nowrap;
  color: #666;
}

.current-values {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.value-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 4px;
}

.value-item .label {
  font-weight: 500;
  color: #333;
}

.value-item .value {
  font-weight: bold;
  color: #4a90e2;
}

.element-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.element-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.element-item:hover {
  background: #e8f4f8;
}

.element-item.selected {
  background: #d4eaf7;
  border: 2px solid #4a90e2;
}

.parameter-input {
  width: 100px;
}

:deep(.el-form-item__label) {
  font-weight: 500;
}
</style>
