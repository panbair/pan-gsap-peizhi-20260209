<template>
  <div class="performance-monitor">
    <el-container>
      <el-header>
        <h1>⚡ 性能分析器</h1>
        <div class="header-actions">
          <el-button type="primary" @click="startRecording" :disabled="isRecording">
            <el-icon><VideoPlay /></el-icon>
            开始录制
          </el-button>
          <el-button type="danger" @click="stopRecording" :disabled="!isRecording">
            <el-icon><VideoPause /></el-icon>
            停止录制
          </el-button>
          <el-button @click="exportReport" :disabled="!hasReport">
            <el-icon><Download /></el-icon>
            导出报告
          </el-button>
        </div>
      </el-header>

      <el-main>
        <el-row :gutter="20">
          <!-- 实时性能指标 -->
          <el-col :span="8">
            <el-card class="metric-card">
              <template #header>
                <div class="card-header">
                  <span>🎯 实时性能</span>
                  <el-tag :type="performanceStatus.type" size="small">
                    {{ performanceStatus.text }}
                  </el-tag>
                </div>
              </template>
              <div class="metrics-grid">
                <div class="metric-item">
                  <div class="metric-label">FPS</div>
                  <div class="metric-value" :class="fpsClass">{{ fps.toFixed(1) }}</div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">帧时间</div>
                  <div class="metric-value">{{ frameTime.toFixed(2) }}ms</div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">重排</div>
                  <div class="metric-value">{{ metrics.reflow }}</div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">重绘</div>
                  <div class="metric-value">{{ metrics.repaint }}</div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">布局</div>
                  <div class="metric-value">{{ metrics.layout }}</div>
                </div>
                <div class="metric-item">
                  <div class="metric-label">内存</div>
                  <div class="metric-value">{{ formatMemory(metrics.memory) }}</div>
                </div>
              </div>
            </el-card>

            <!-- GPU 信息 -->
            <el-card class="metric-card" style="margin-top: 20px;">
              <template #header>
                <div class="card-header">
                  <span>🎮 GPU 硬件加速</span>
                  <el-tag :type="gpuInfo.supported ? 'success' : 'danger'" size="small">
                    {{ gpuInfo.supported ? '已启用' : '不支持' }}
                  </el-tag>
                </div>
              </template>
              <div class="gpu-info">
                <el-descriptions :column="1" border>
                  <el-descriptions-item label="硬件加速">
                    {{ gpuInfo.hardwareAccelerated ? '✅' : '❌' }}
                  </el-descriptions-item>
                  <el-descriptions-item label="GPU 渲染">
                    {{ gpuInfo.gpuRendering ? '✅' : '❌' }}
                  </el-descriptions-item>
                  <el-descriptions-item label="渲染器">
                    {{ gpuInfo.renderer }}
                  </el-descriptions-item>
                  <el-descriptions-item label="供应商">
                    {{ gpuInfo.vendor }}
                  </el-descriptions-item>
                  <el-descriptions-item label="最大纹理大小">
                    {{ gpuInfo.maxTextureSize }}
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </el-card>
          </el-col>

          <!-- FPS 历史图表 -->
          <el-col :span="16">
            <el-card class="chart-card">
              <template #header>
                <div class="card-header">
                  <span>📊 FPS 历史趋势</span>
                  <el-radio-group v-model="timeRange" size="small">
                    <el-radio-button label="10s">10秒</el-radio-button>
                    <el-radio-button label="30s">30秒</el-radio-button>
                    <el-radio-button label="60s">1分钟</el-radio-button>
                  </el-radio-group>
                </div>
              </template>
              <div ref="fpsChart" class="chart-container"></div>
            </el-card>

            <!-- 性能建议 -->
            <el-card class="recommendations-card" style="margin-top: 20px;">
              <template #header>
                <div class="card-header">
                  <span>💡 性能优化建议</span>
                  <el-badge :value="recommendations.length" class="badge-item" />
                </div>
              </template>
              <el-collapse v-model="activeRecommendations">
                <el-collapse-item
                  v-for="(rec, index) in recommendations"
                  :key="index"
                  :name="index"
                  :class="rec.priority"
                >
                  <template #title>
                    <div class="recommendation-title">
                      <el-tag
                        :type="rec.priority === 'high' ? 'danger' : rec.priority === 'medium' ? 'warning' : 'info'"
                        size="small"
                        style="margin-right: 8px;"
                      >
                        {{ rec.priority === 'high' ? '高' : rec.priority === 'medium' ? '中' : '低' }}
                      </el-tag>
                      {{ rec.title }}
                    </div>
                  </template>
                  <div class="recommendation-content">
                    <p>{{ rec.description }}</p>
                    <el-button
                      type="primary"
                      size="small"
                      link
                      @click="applyRecommendation(rec)"
                    >
                      应用修复
                    </el-button>
                  </div>
                </el-collapse-item>
              </el-collapse>
              <el-empty v-if="recommendations.length === 0" description="性能良好,无需优化" />
            </el-card>
          </el-col>
        </el-row>

        <!-- 录制的性能数据 -->
        <el-card v-if="recordedData.length > 0" style="margin-top: 20px;">
          <template #header>
            <div class="card-header">
              <span>📁 录制数据</span>
              <el-tag size="small">{{ recordedData.length }} 条记录</el-tag>
            </div>
          </template>
          <el-table :data="recordedData" stripe style="width: 100%">
            <el-table-column type="index" label="#" width="60" />
            <el-table-column prop="timestamp" label="时间" width="180">
              <template #default="{ row }">
                {{ new Date(row.timestamp).toLocaleTimeString() }}
              </template>
            </el-table-column>
            <el-table-column prop="fps" label="FPS" width="100">
              <template #default="{ row }">
                <el-tag :type="row.fps >= 55 ? 'success' : row.fps >= 30 ? 'warning' : 'danger'" size="small">
                  {{ row.fps.toFixed(1) }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="frameTime" label="帧时间(ms)" width="120">
              <template #default="{ row }">
                {{ row.frameTime.toFixed(2) }}
              </template>
            </el-table-column>
            <el-table-column prop="reflow" label="重排" width="100" />
            <el-table-column prop="repaint" label="重绘" width="100" />
            <el-table-column prop="layout" label="布局" width="100" />
            <el-table-column prop="memory" label="内存" width="120">
              <template #default="{ row }">
                {{ formatMemory(row.memory) }}
              </template>
            </el-table-column>
          </el-table>
        </el-card>

        <!-- 测试动画区域 -->
        <el-card style="margin-top: 20px;">
          <template #header>
            <div class="card-header">
              <span>🎨 测试动画</span>
            </div>
          </template>
          <div class="test-controls">
            <el-select v-model="selectedAnimation" placeholder="选择动画" style="width: 200px;">
              <el-option label="淡入" value="fadeIn" />
              <el-option label="滑入" value="slideIn" />
              <el-option label="缩放" value="scale" />
              <el-option label="旋转" value="rotate" />
              <el-option label="弹跳" value="bounce" />
            </el-select>
            <el-button type="primary" @click="playTestAnimation">播放动画</el-button>
            <el-button @click="stopTestAnimation">停止</el-button>
          </div>
          <div class="test-preview">
            <div ref="testElement" class="test-element">
              测试元素
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { VideoPlay, VideoPause, Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import gsap from 'gsap'

// 性能指标
const fps = ref(60)
const frameTime = ref(16.67)
const metrics = ref({
  reflow: 0,
  repaint: 0,
  layout: 0,
  memory: 0
})

// GPU 信息
const gpuInfo = ref({
  supported: false,
  hardwareAccelerated: false,
  gpuRendering: false,
  renderer: '',
  vendor: '',
  maxTextureSize: 0
})

// 状态
const isRecording = ref(false)
const hasReport = ref(false)
const recordedData = ref<any[]>([])
const timeRange = ref('30s')
const activeRecommendations = ref<number[]>([])

// 测试动画
const selectedAnimation = ref('fadeIn')
const testElement = ref<HTMLElement>()
let animationFrame: number | null = null

// FPS 历史
const fpsHistory = ref<number[]>([])
const fpsChart = ref<HTMLElement>()

// 性能状态
const performanceStatus = computed(() => {
  if (fps.value >= 55) return { type: 'success', text: '优秀' }
  if (fps.value >= 30) return { type: 'warning', text: '良好' }
  return { type: 'danger', text: '差' }
})

const fpsClass = computed(() => {
  if (fps.value >= 55) return 'fps-good'
  if (fps.value >= 30) return 'fps-warning'
  return 'fps-bad'
})

// 性能建议
const recommendations = ref<any[]>([])

// 格式化内存
const formatMemory = (bytes: number) => {
  if (bytes === 0) return 'N/A'
  const mb = bytes / (1024 * 1024)
  return `${mb.toFixed(2)} MB`
}

// 检测 GPU 支持
const detectGPU = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')

  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    gpuInfo.value.supported = true
    gpuInfo.value.hardwareAccelerated = true
    gpuInfo.value.gpuRendering = true

    if (debugInfo) {
      gpuInfo.value.renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      gpuInfo.value.vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
    }

    gpuInfo.value.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)

    // 检测 CSS 硬件加速
    const testDiv = document.createElement('div')
    testDiv.style.transform = 'translateZ(0)'
    gpuInfo.value.hardwareAccelerated = testDiv.style.transform !== ''
  }
}

// 监控性能
const lastFrameTime = ref(0)
let frameCount = 0
let lastFPSUpdate = 0

const monitorPerformance = () => {
  const now = performance.now()

  if (lastFrameTime.value) {
    frameTime.value = now - lastFrameTime.value
    fps.value = 1000 / frameTime.value

    // 记录 FPS 历史
    fpsHistory.value.push(fps.value)
    if (fpsHistory.value.length > 60) {
      fpsHistory.value.shift()
    }
  }

  lastFrameTime.value = now
  frameCount++

  // 每秒更新一次
  if (now - lastFPSUpdate >= 1000) {
    lastFPSUpdate = now
    frameCount = 0

    // 获取性能指标
    if (performance.memory) {
      metrics.value.memory = (performance.memory as any).usedJSHeapSize
    }
  }

  // 检测重排和重绘
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'layout-shift') {
        metrics.value.reflow++
      }
    }
  })
  observer.observe({ entryTypes: ['layout-shift', 'paint'] })

  if (isRecording.value) {
    recordedData.value.push({
      timestamp: Date.now(),
      fps: fps.value,
      frameTime: frameTime.value,
      ...metrics.value
    })
  }

  animationFrame = requestAnimationFrame(monitorPerformance)
}

// 生成性能建议
const generateRecommendations = () => {
  recommendations.value = []

  if (fps.value < 30) {
    recommendations.value.push({
      priority: 'high',
      title: 'FPS 过低',
      description: '当前 FPS 低于 30,建议减少动画数量或使用 CSS transform 代替 left/top',
      action: 'reduceAnimations'
    })
  }

  if (!gpuInfo.value.hardwareAccelerated) {
    recommendations.value.push({
      priority: 'high',
      title: '未启用硬件加速',
      description: 'CSS transform: translateZ(0) 可以强制启用 GPU 加速',
      action: 'enableGPU'
    })
  }

  if (metrics.value.memory > 100 * 1024 * 1024) {
    recommendations.value.push({
      priority: 'medium',
      title: '内存使用过高',
      description: '当前内存使用超过 100MB,建议清理未使用的 DOM 元素',
      action: 'cleanupMemory'
    })
  }

  if (frameTime.value > 16.67) {
    recommendations.value.push({
      priority: 'medium',
      title: '帧时间过长',
      description: '当前帧时间超过 16.67ms,建议优化动画计算或减少重排',
      action: 'optimizeFrameTime'
    })
  }
}

// 应用建议
const applyRecommendation = (rec: any) => {
  switch (rec.action) {
    case 'enableGPU':
      if (testElement.value) {
        testElement.value.style.transform = 'translateZ(0)'
        ElMessage.success('已启用 GPU 加速')
      }
      break
    case 'reduceAnimations':
      ElMessage.info('建议减少并发动画数量')
      break
    case 'cleanupMemory':
      ElMessage.info('请手动清理未使用的 DOM 元素')
      break
    default:
      ElMessage.info('已记录建议')
  }
}

// 开始录制
const startRecording = () => {
  isRecording.value = true
  recordedData.value = []
  ElMessage.success('开始录制性能数据')
}

// 停止录制
const stopRecording = () => {
  isRecording.value = false
  hasReport.value = true
  ElMessage.success('录制完成')
}

// 导出报告
const exportReport = () => {
  const report = {
    timestamp: new Date().toISOString(),
    averageFPS: recordedData.value.reduce((sum, d) => sum + d.fps, 0) / recordedData.value.length,
    averageFrameTime: recordedData.value.reduce((sum, d) => sum + d.frameTime, 0) / recordedData.value.length,
    data: recordedData.value,
    gpuInfo: gpuInfo.value
  }

  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `performance-report-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)

  ElMessage.success('报告已导出')
}

// 播放测试动画
const playTestAnimation = () => {
  if (!testElement.value) return

  const animations: Record<string, string> = {
    fadeIn: 'fadeIn 0.5s ease-in-out',
    slideIn: 'slideIn 0.5s ease-in-out',
    scale: 'scale 0.5s ease-in-out',
    rotate: 'rotate 0.5s ease-in-out',
    bounce: 'bounce 0.5s ease-in-out'
  }

  testElement.value.style.animation = animations[selectedAnimation.value]

  setTimeout(() => {
    testElement.value!.style.animation = ''
  }, 500)
}

// 停止测试动画
const stopTestAnimation = () => {
  if (testElement.value) {
    testElement.value.style.animation = ''
  }
}

onMounted(() => {
  detectGPU()
  monitorPerformance()
  generateRecommendations()
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
.performance-monitor {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.el-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.el-header h1 {
  margin: 0;
  font-size: 24px;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.el-main {
  padding: 20px;
}

.metric-card,
.chart-card,
.recommendations-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.metric-item {
  text-align: center;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 8px;
}

.metric-label {
  font-size: 12px;
  color: #909399;
  margin-bottom: 4px;
}

.metric-value {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
}

.metric-value.fps-good {
  color: #67c23a;
}

.metric-value.fps-warning {
  color: #e6a23c;
}

.metric-value.fps-bad {
  color: #f56c6c;
}

.chart-container {
  height: 300px;
  display: flex;
  align-items: flex-end;
  gap: 2px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 8px;
}

.recommendation-title {
  display: flex;
  align-items: center;
}

.recommendation-content {
  padding: 10px 0;
  color: #606266;
}

.recommendation-content p {
  margin: 0 0 10px 0;
}

.badge-item {
  margin-left: 8px;
}

.test-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.test-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #f5f7fa;
  border-radius: 8px;
}

.test-element {
  padding: 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
}

/* 测试动画 keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes scale {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
}
</style>
