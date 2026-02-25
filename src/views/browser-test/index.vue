<template>
  <div class="browser-test">
    <el-container>
      <el-header>
        <h1>🌐 浏览器兼容性测试</h1>
        <div class="header-actions">
          <el-button type="primary" @click="runAllTests" :loading="isTesting">
            <el-icon><VideoPlay /></el-icon>
            运行全部测试
          </el-button>
          <el-button @click="exportResults" :disabled="testResults.length === 0">
            <el-icon><Download /></el-icon>
            导出结果
          </el-button>
        </div>
      </el-header>

      <el-main>
        <!-- 浏览器信息 -->
        <el-card class="browser-info-card">
          <template #header>
            <div class="card-header">
              <span>🖥️ 当前浏览器</span>
              <el-tag :type="browserInfo.isSupported ? 'success' : 'warning'" size="small">
                {{ browserInfo.isSupported ? '支持' : '部分支持' }}
              </el-tag>
            </div>
          </template>
          <el-descriptions :column="3" border>
            <el-descriptions-item label="名称">{{ browserInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="版本">{{ browserInfo.version }}</el-descriptions-item>
            <el-descriptions-item label="内核">{{ browserInfo.engine }}</el-descriptions-item>
            <el-descriptions-item label="操作系统">{{ browserInfo.os }}</el-descriptions-item>
            <el-descriptions-item label="语言">{{ browserInfo.language }}</el-descriptions-item>
            <el-descriptions-item label="用户代理">
              <el-tooltip :content="browserInfo.userAgent" placement="top">
                <span>{{ browserInfo.userAgent.substring(0, 50) }}...</span>
              </el-tooltip>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>

        <!-- 功能支持矩阵 -->
        <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="16">
            <el-card class="features-card">
              <template #header>
                <div class="card-header">
                  <span>🎨 CSS 动画功能支持</span>
                  <el-button size="small" @click="runAnimationTests">
                    <el-icon><Refresh /></el-icon>
                    重新测试
                  </el-button>
                </div>
              </template>

              <el-table :data="animationFeatures" stripe style="width: 100%">
                <el-table-column prop="name" label="功能" width="200" />
                <el-table-column prop="spec" label="规范" width="150" />
                <el-table-column label="支持状态" width="120">
                  <template #default="{ row }">
                    <el-tag :type="getSupportTagType(row.supported)" size="small">
                      {{ getSupportText(row.supported) }}
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="prefix" label="前缀" width="120" />
                <el-table-column prop="notes" label="说明" />
                <el-table-column label="测试" width="80">
                  <template #default="{ row }">
                    <el-button
                      size="small"
                      type="primary"
                      link
                      @click="testFeature(row)"
                    >
                      测试
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>

          <el-col :span="8">
            <el-card class="stats-card">
              <template #header>
                <div class="card-header">
                  <span>📊 支持统计</span>
                </div>
              </template>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-value">{{ supportedCount }}</div>
                  <div class="stat-label">完全支持</div>
                  <div class="stat-bar" :style="{ width: `${supportedPercent}%`, background: '#67c23a' }"></div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ partialCount }}</div>
                  <div class="stat-label">部分支持</div>
                  <div class="stat-bar" :style="{ width: `${partialPercent}%`, background: '#e6a23c' }"></div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">{{ unsupportedCount }}</div>
                  <div class="stat-label">不支持</div>
                  <div class="stat-bar" :style="{ width: `${unsupportedPercent}%`, background: '#f56c6c' }"></div>
                </div>
              </div>
            </el-card>

            <!-- 动画测试预览 -->
            <el-card style="margin-top: 20px;">
              <template #header>
                <div class="card-header">
                  <span>🎬 动画测试预览</span>
                </div>
              </template>
              <div class="test-preview">
                <div
                  ref="testElement"
                  class="test-element"
                  :class="currentTestClass"
                >
                  {{ testElementText }}
                </div>
              </div>
              <div class="test-controls">
                <el-button @click="playTest('fadeIn')">淡入</el-button>
                <el-button @click="playTest('slideIn')">滑入</el-button>
                <el-button @click="playTest('rotate')">旋转</el-button>
                <el-button @click="playTest('scale')">缩放</el-button>
                <el-button @click="playTest('3dTransform')">3D</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 版本对比 -->
        <el-card style="margin-top: 20px;">
          <template #header>
            <div class="card-header">
              <span>📈 浏览器版本支持对比</span>
            </div>
          </template>
          <el-table :data="browserSupport" stripe style="width: 100%">
            <el-table-column prop="browser" label="浏览器" width="150" />
            <el-table-column prop="version" label="最低版本" width="120" />
            <el-table-column prop="prefix" label="前缀" width="100" />
            <el-table-column prop="notes" label="注意事项" />
          </el-table>
        </el-card>

        <!-- 测试结果 -->
        <el-card v-if="testResults.length > 0" style="margin-top: 20px;">
          <template #header>
            <div class="card-header">
              <span>📋 测试结果</span>
              <el-tag size="small">{{ testResults.length }} 条</el-tag>
            </div>
          </template>
          <el-table :data="testResults" stripe style="width: 100%">
            <el-table-column type="index" label="#" width="60" />
            <el-table-column prop="timestamp" label="时间" width="180">
              <template #default="{ row }">
                {{ new Date(row.timestamp).toLocaleString() }}
              </template>
            </el-table-column>
            <el-table-column prop="browser" label="浏览器" width="150" />
            <el-table-column prop="feature" label="功能" width="200" />
            <el-table-column prop="result" label="结果" width="100">
              <template #default="{ row }">
                <el-tag :type="row.passed ? 'success' : 'danger'" size="small">
                  {{ row.passed ? '通过' : '失败' }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="notes" label="说明" />
          </el-table>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { VideoPlay, Download, Refresh } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import gsap from 'gsap'

// 浏览器信息
const browserInfo = ref({
  name: '',
  version: '',
  engine: '',
  os: '',
  language: '',
  userAgent: '',
  isSupported: true
})

// CSS 动画功能
const animationFeatures = ref<any[]>([])

// 测试状态
const isTesting = ref(false)
const testResults = ref<any[]>([])

// 测试元素
const testElement = ref<HTMLElement>()
const testElementText = ref('测试元素')
const currentTestClass = ref('')

// 浏览器支持数据
const browserSupport = ref([
  { browser: 'Chrome', version: '43+', prefix: '-webkit-', notes: '完全支持' },
  { browser: 'Firefox', version: '16+', prefix: '-moz-', notes: '完全支持' },
  { browser: 'Safari', version: '9+', prefix: '-webkit-', notes: '完全支持' },
  { browser: 'Edge', version: '12+', prefix: '-ms-', notes: '完全支持' },
  { browser: 'IE', version: '10+', prefix: '-ms-', notes: '部分支持,IE11之前需前缀' },
  { browser: 'Opera', version: '30+', prefix: '-webkit-', notes: '完全支持' }
])

// 统计
const supportedCount = computed(() => animationFeatures.value.filter(f => f.supported === true).length)
const partialCount = computed(() => animationFeatures.value.filter(f => f.supported === 'partial').length)
const unsupportedCount = computed(() => animationFeatures.value.filter(f => f.supported === false).length)

const supportedPercent = computed(() => (supportedCount.value / animationFeatures.value.length) * 100)
const partialPercent = computed(() => (partialCount.value / animationFeatures.value.length) * 100)
const unsupportedPercent = computed(() => (unsupportedCount.value / animationFeatures.value.length) * 100)

// 获取浏览器信息
const getBrowserInfo = () => {
  const ua = navigator.userAgent

  let browser = 'Unknown'
  let version = ''
  let engine = ''

  // 检测浏览器
  if (ua.includes('Firefox')) {
    browser = 'Firefox'
    engine = 'Gecko'
    const match = ua.match(/Firefox\/(\d+)/)
    version = match ? match[1] : ''
  } else if (ua.includes('Edg')) {
    browser = 'Edge'
    engine = 'Blink'
    const match = ua.match(/Edg\/(\d+)/)
    version = match ? match[1] : ''
  } else if (ua.includes('Chrome')) {
    browser = 'Chrome'
    engine = 'Blink'
    const match = ua.match(/Chrome\/(\d+)/)
    version = match ? match[1] : ''
  } else if (ua.includes('Safari')) {
    browser = 'Safari'
    engine = 'WebKit'
    const match = ua.match(/Version\/(\d+)/)
    version = match ? match[1] : ''
  } else if (ua.includes('Trident') || ua.includes('MSIE')) {
    browser = 'Internet Explorer'
    engine = 'Trident'
    const match = ua.match(/rv:(\d+)/) || ua.match(/MSIE (\d+)/)
    version = match ? match[1] : ''
  }

  browserInfo.value = {
    name: browser,
    version,
    engine,
    os: getOS(),
    language: navigator.language,
    userAgent: ua,
    isSupported: checkBrowserSupport(browser, version)
  }
}

// 获取操作系统
const getOS = () => {
  const ua = navigator.userAgent
  if (ua.includes('Win')) return 'Windows'
  if (ua.includes('Mac')) return 'macOS'
  if (ua.includes('Linux')) return 'Linux'
  if (ua.includes('Android')) return 'Android'
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS'
  return 'Unknown'
}

// 检查浏览器支持
const checkBrowserSupport = (browser: string, version: string) => {
  const v = parseInt(version)
  switch (browser) {
    case 'Chrome':
    case 'Edge':
      return v >= 43
    case 'Firefox':
      return v >= 16
    case 'Safari':
      return v >= 9
    default:
      return true
  }
}

// 检测 CSS 功能支持
const detectFeatures = () => {
  const features = [
    {
      name: '@keyframes',
      spec: 'CSS Animations',
      check: () => typeof CSS !== 'undefined' && 'animation' in document.documentElement.style,
      notes: '关键帧动画支持'
    },
    {
      name: 'animation',
      spec: 'CSS Animations',
      check: () => 'animation' in document.documentElement.style,
      notes: '动画属性支持'
    },
    {
      name: 'transform',
      spec: 'CSS Transforms',
      check: () => 'transform' in document.documentElement.style,
      notes: '2D/3D变换'
    },
    {
      name: 'transform-style: preserve-3d',
      spec: 'CSS Transforms',
      check: () => 'transformStyle' in document.documentElement.style,
      notes: '3D变换'
    },
    {
      name: 'perspective',
      spec: 'CSS Transforms',
      check: () => 'perspective' in document.documentElement.style,
      notes: '透视效果'
    },
    {
      name: 'backface-visibility',
      spec: 'CSS Transforms',
      check: () => 'backfaceVisibility' in document.documentElement.style,
      notes: '背面可见性'
    },
    {
      name: 'transition',
      spec: 'CSS Transitions',
      check: () => 'transition' in document.documentElement.style,
      notes: '过渡效果'
    },
    {
      name: 'will-change',
      spec: 'CSS Will Change',
      check: () => 'willChange' in document.documentElement.style,
      notes: '性能优化提示'
    },
    {
      name: 'filter',
      spec: 'Filter Effects',
      check: () => 'filter' in document.documentElement.style,
      notes: '滤镜效果'
    },
    {
      name: 'backdrop-filter',
      spec: 'Filter Effects',
      check: () => 'backdropFilter' in document.documentElement.style,
      notes: '背景模糊'
    },
    {
      name: 'mix-blend-mode',
      spec: 'Compositing',
      check: () => 'mixBlendMode' in document.documentElement.style,
      notes: '混合模式'
    },
    {
      name: 'clip-path',
      spec: 'CSS Masking',
      check: () => 'clipPath' in document.documentElement.style,
      notes: '裁剪路径'
    },
    {
      name: 'mask',
      spec: 'CSS Masking',
      check: () => 'mask' in document.documentElement.style,
      notes: '遮罩效果'
    },
    {
      name: 'variable',
      spec: 'CSS Custom Properties',
      check: () => 'CSS' in window && 'supports' in CSS && CSS.supports('--a', '0'),
      notes: 'CSS变量'
    },
    {
      name: 'calc()',
      spec: 'CSS Values',
      check: () => 'CSS' in window && 'supports' in CSS && CSS.supports('width', 'calc(10px)'),
      notes: '计算函数'
    }
  ]

  animationFeatures.value = features.map(feature => {
    const supported = feature.check()
    return {
      name: feature.name,
      spec: feature.spec,
      supported,
      prefix: getPrefix(feature.name),
      notes: feature.notes
    }
  })
}

// 获取前缀
const getPrefix = (prop: string): string => {
  const prefixes = ['webkit', 'moz', 'ms', 'o']
  const style = document.documentElement.style

  for (const prefix of prefixes) {
    const prefixed = prefix + prop.charAt(0).toUpperCase() + prop.slice(1)
    if (prefixed in style) {
      return `-${prefix}-`
    }
  }

  return '无'
}

// 运行动画测试
const runAnimationTests = () => {
  detectFeatures()
  ElMessage.success('功能检测完成')
}

// 测试单个功能
const testFeature = (feature: any) => {
  if (!testElement.value) return

  testElementText.value = feature.name

  // 根据功能播放对应动画
  switch (feature.name) {
    case 'animation':
      playTest('fadeIn')
      break
    case 'transform':
      playTest('rotate')
      break
    case 'transform-style: preserve-3d':
      playTest('3dTransform')
      break
    case 'filter':
      playTest('filterBlur')
      break
    default:
      playTest('fadeIn')
  }

  // 记录结果
  testResults.value.unshift({
    timestamp: Date.now(),
    browser: browserInfo.value.name,
    feature: feature.name,
    passed: feature.supported,
    notes: feature.supported ? '测试通过' : '不支持'
  })
}

// 运行全部测试
const runAllTests = async () => {
  isTesting.value = true
  testResults.value = []

  for (const feature of animationFeatures.value) {
    await new Promise(resolve => setTimeout(resolve, 100))
    testFeature(feature)
  }

  isTesting.value = false
  ElMessage.success(`完成 ${testResults.value.length} 个测试`)
}

// 播放测试动画
const playTest = (animationName: string) => {
  if (!testElement.value) return

  // 移除所有动画类
  testElement.value.className = 'test-element'

  // 强制重绘
  void testElement.value.offsetWidth

  // 添加新的动画类
  testElement.value.classList.add(`test-${animationName}`)

  // 动画结束后移除类
  setTimeout(() => {
    if (testElement.value) {
      testElement.value.classList.remove(`test-${animationName}`)
    }
  }, 500)
}

// 导出结果
const exportResults = () => {
  const report = {
    timestamp: new Date().toISOString(),
    browser: browserInfo.value,
    features: animationFeatures.value,
    results: testResults.value,
    summary: {
      supported: supportedCount.value,
      partial: partialCount.value,
      unsupported: unsupportedCount.value
    }
  }

  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `browser-compatibility-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)

  ElMessage.success('报告已导出')
}

// 获取支持状态标签类型
const getSupportTagType = (supported: any) => {
  if (supported === true) return 'success'
  if (supported === 'partial') return 'warning'
  return 'danger'
}

// 获取支持状态文本
const getSupportText = (supported: any) => {
  if (supported === true) return '支持'
  if (supported === 'partial') return '部分'
  return '不支持'
}

onMounted(() => {
  getBrowserInfo()
  detectFeatures()
})
</script>

<style scoped>
.browser-test {
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

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}

.browser-info-card,
.features-card,
.stats-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #909399;
}

.stat-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  transition: width 0.3s ease;
}

.test-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: #f5f7fa;
  border-radius: 8px;
  margin-bottom: 16px;
}

.test-element {
  padding: 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-weight: bold;
}

.test-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

/* 测试动画 */
@keyframes test-fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.test-fadeIn {
  animation: test-fadeIn 0.5s ease-in-out;
}

@keyframes test-slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.test-slideIn {
  animation: test-slideIn 0.5s ease-in-out;
}

@keyframes test-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.test-rotate {
  animation: test-rotate 0.5s ease-in-out;
}

@keyframes test-scale {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

.test-scale {
  animation: test-scale 0.5s ease-in-out;
}

@keyframes test-3dTransform {
  from { transform: perspective(500px) rotateY(0deg); }
  to { transform: perspective(500px) rotateY(360deg); }
}

.test-3dTransform {
  animation: test-3dTransform 0.5s ease-in-out;
  transform-style: preserve-3d;
}

@keyframes test-filterBlur {
  from { filter: blur(10px); }
  to { filter: blur(0); }
}

.test-filterBlur {
  animation: test-filterBlur 0.5s ease-in-out;
}
</style>
