<template>
  <div class="animator-container">
    <el-container>
      <!-- 头部 -->
      <el-header class="animator-header">
        <h1 class="title">
          <span class="icon">🎨</span>
          可视化动画构建器
        </h1>
        <div class="header-actions">
          <el-button @click="savePreset" type="primary" :icon="Download">保存预设</el-button>
          <el-button @click="loadPreset" :icon="Upload">加载预设</el-button>
          <el-button @click="resetAll" :icon="Refresh">重置</el-button>
        </div>
      </el-header>

      <!-- 主内容区 -->
      <el-main class="animator-main">
        <el-row :gutter="20">
          <!-- 左侧: 预览区 -->
          <el-col :span="16">
            <div class="preview-section">
              <div class="preview-header">
                <span class="label">实时预览</span>
                <div class="preview-controls">
                  <el-button-group>
                    <el-button :icon="VideoPlay" @click="playAnimation" :disabled="isPlaying">播放</el-button>
                    <el-button :icon="VideoPause" @click="pauseAnimation" :disabled="!isPlaying">暂停</el-button>
                    <el-button :icon="RefreshRight" @click="restartAnimation">重播</el-button>
                  </el-button-group>
                  <el-select v-model="playbackSpeed" class="speed-selector">
                    <el-option label="0.5x" :value="0.5" />
                    <el-option label="1x" :value="1" />
                    <el-option label="1.5x" :value="1.5" />
                    <el-option label="2x" :value="2" />
                  </el-select>
                </div>
              </div>

              <!-- 预览画布 -->
              <div class="preview-canvas" ref="previewCanvas">
                <div
                  ref="previewElement"
                  class="preview-element"
                  :style="previewElementStyle"
                  @click="triggerAnimation"
                >
                  {{ previewText }}
                </div>
              </div>

              <!-- 性能监控 -->
              <div class="performance-monitor">
                <el-tag size="small">FPS: {{ fps }}</el-tag>
                <el-tag size="small" type="success">渲染时间: {{ renderTime }}ms</el-tag>
                <el-tag size="small" type="info">重绘: {{ repaints }}</el-tag>
              </div>
            </div>
          </el-col>

          <!-- 右侧: 参数配置区 -->
          <el-col :span="8">
            <div class="parameter-section">
              <!-- 动画选择 -->
              <el-card class="parameter-card">
                <template #header>
                  <span>选择动画</span>
                </template>
                <el-cascader
                  v-model="selectedAnimation"
                  :options="animationOptions"
                  placeholder="请选择动画"
                  :props="{ expandTrigger: 'hover' }"
                  @change="onAnimationChange"
                />
              </el-card>

              <!-- 基础参数 -->
              <el-card class="parameter-card">
                <template #header>
                  <span>基础参数</span>
                </template>
                <el-form label-position="top">
                  <el-form-item label="持续时间">
                    <el-slider
                      v-model="parameters.duration"
                      :min="0.1"
                      :max="5"
                      :step="0.1"
                      :format-tooltip="formatDuration"
                      @input="updatePreview"
                    />
                    <el-input-number
                      v-model="parameters.duration"
                      :min="0.1"
                      :max="5"
                      :step="0.1"
                      :precision="1"
                      size="small"
                      class="parameter-input"
                      @change="updatePreview"
                    />
                  </el-form-item>

                  <el-form-item label="延迟">
                    <el-slider
                      v-model="parameters.delay"
                      :min="0"
                      :max="3"
                      :step="0.1"
                      :format-tooltip="formatDuration"
                      @input="updatePreview"
                    />
                    <el-input-number
                      v-model="parameters.delay"
                      :min="0"
                      :max="3"
                      :step="0.1"
                      :precision="1"
                      size="small"
                      class="parameter-input"
                      @change="updatePreview"
                    />
                  </el-form-item>

                  <el-form-item label="缓动函数">
                    <el-select v-model="parameters.ease" @change="updatePreview">
                      <el-option-group label="基础缓动">
                        <el-option label="None" value="none" />
                        <el-option label="Linear" value="linear" />
                      </el-option-group>
                      <el-option-group label="缓入">
                        <el-option label="Ease In" value="easeIn" />
                        <el-option label="Ease In Quad" value="power1.in" />
                        <el-option label="Ease In Cubic" value="power2.in" />
                        <el-option label="Ease In Quart" value="power3.in" />
                      </el-option-group>
                      <el-option-group label="缓出">
                        <el-option label="Ease Out" value="easeOut" />
                        <el-option label="Ease Out Quad" value="power1.out" />
                        <el-option label="Ease Out Cubic" value="power2.out" />
                        <el-option label="Ease Out Quart" value="power3.out" />
                      </el-option-group>
                      <el-option-group label="缓入缓出">
                        <el-option label="Ease In Out" value="easeInOut" />
                        <el-option label="Ease In Out Quad" value="power1.inOut" />
                        <el-option label="Ease In Out Cubic" value="power2.inOut" />
                        <el-option label="Ease In Out Quart" value="power3.inOut" />
                      </el-option-group>
                      <el-option-group label="弹性">
                        <el-option label="Back Out" value="back.out(1.7)" />
                        <el-option label="Elastic Out" value="elastic.out(1, 0.3)" />
                        <el-option label="Bounce Out" value="bounce.out" />
                      </el-option-group>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-card>

              <!-- 高级参数 -->
              <el-card class="parameter-card">
                <template #header>
                  <span>高级参数</span>
                </template>
                <el-form label-position="top">
                  <el-form-item label="重复次数">
                    <el-slider
                      v-model="parameters.repeat"
                      :min="0"
                      :max="10"
                      :step="1"
                      @input="updatePreview"
                    />
                    <el-input-number
                      v-model="parameters.repeat"
                      :min="0"
                      :max="10"
                      :step="1"
                      size="small"
                      class="parameter-input"
                      @change="updatePreview"
                    />
                  </el-form-item>

                  <el-form-item label="交错延迟">
                    <el-slider
                      v-model="parameters.stagger"
                      :min="0"
                      :max="1"
                      :step="0.05"
                      @input="updatePreview"
                    />
                    <el-input-number
                      v-model="parameters.stagger"
                      :min="0"
                      :max="1"
                      :step="0.05"
                      :precision="2"
                      size="small"
                      class="parameter-input"
                      @change="updatePreview"
                    />
                  </el-form-item>

                  <el-form-item>
                    <el-checkbox v-model="parameters.yoyo" @change="updatePreview">
                      往复播放 (Yoyo)
                    </el-checkbox>
                  </el-form-item>

                  <el-form-item>
                    <el-checkbox v-model="parameters.autoPlay" @change="updatePreview">
                      自动播放
                    </el-checkbox>
                  </el-form-item>
                </el-form>
              </el-card>

              <!-- 样式调整 -->
              <el-card class="parameter-card">
                <template #header>
                  <span>样式调整</span>
                </template>
                <el-form label-position="top">
                  <el-form-item label="预览文字">
                    <el-input
                      v-model="previewText"
                      placeholder="输入预览文字"
                      @input="updatePreviewText"
                    />
                  </el-form-item>

                  <el-form-item label="背景颜色">
                    <el-color-picker v-model="bgColor" @change="updateBgColor" />
                  </el-form-item>

                  <el-form-item label="元素颜色">
                    <el-color-picker v-model="elementColor" @change="updateElementColor" />
                  </el-form-item>

                  <el-form-item label="元素大小">
                    <el-slider
                      v-model="elementSize"
                      :min="100"
                      :max="400"
                      @input="updateElementSize"
                    />
                  </el-form-item>
                </el-form>
              </el-card>
            </div>
          </el-col>
        </el-row>

        <!-- 代码生成区 -->
        <el-row class="code-section" :gutter="20">
          <el-col :span="24">
            <el-card>
              <template #header>
                <div class="code-header">
                  <span>生成的代码</span>
                  <el-button-group>
                    <el-button
                      v-for="lang in ['CSS', 'GSAP', 'React', 'Vue']"
                      :key="lang"
                      :type="codeLanguage === lang ? 'primary' : ''"
                      size="small"
                      @click="codeLanguage = lang"
                    >
                      {{ lang }}
                    </el-button>
                  </el-button-group>
                  <el-button type="success" size="small" :icon="DocumentCopy" @click="copyCode">
                    复制代码
                  </el-button>
                </div>
              </template>
              <div class="code-content">
                <pre><code ref="codeBlock">{{ generatedCode }}</code></pre>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { ElMessage } from 'element-plus'
import {
  Download,
  Upload,
  Refresh,
  VideoPlay,
  VideoPause,
  RefreshRight,
  DocumentCopy
} from '@element-plus/icons-vue'
import gsap from 'gsap'
import { animationOptions as rawAnimationOptions } from '../page2/animationOptions'
import { config as animationConfig } from '../page2/config'

// 将 {label, options:[]} 格式转为 el-cascader 需要的 {value, label, children:[]} 格式
const animationOptions = rawAnimationOptions.map((group: any) => ({
  value: group.label,
  label: group.label,
  children: group.options.map((item: any) => ({
    value: item.value,
    label: item.label
  }))
}))

// Refs
const previewElement = ref<HTMLElement>()
const previewCanvas = ref<HTMLElement>()
const codeBlock = ref<HTMLElement>()

// State
const selectedAnimation = ref<string[]>([])
const isPlaying = ref(false)
const playbackSpeed = ref(1)
const codeLanguage = ref<'CSS' | 'GSAP' | 'React' | 'Vue'>('CSS')
const fps = ref(60)
const renderTime = ref(0)
const repaints = ref(0)

const parameters = ref({
  duration: 1,
  delay: 0,
  ease: 'power2.out',
  repeat: 0,
  stagger: 0,
  yoyo: false,
  autoPlay: false
})

const previewText = ref('点击播放动画')
const bgColor = ref('#1a1a1a')
const elementColor = ref('#ffffff')
const elementSize = ref(200)

// GSAP timeline
let animationTimeline: gsap.core.Timeline | null = null

// 性能监控
let lastFrameTime = performance.now()
let frameCount = 0
let animationFrameId: number | null = null

// Computed
const previewElementStyle = computed(() => ({
  backgroundColor: elementColor.value,
  width: `${elementSize.value}px`,
  height: `${elementSize.value}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#000',
  cursor: 'pointer',
  userSelect: 'none'
}))

const generatedCode = computed(() => {
  const animName = selectedAnimation.value[1]
  if (!animName) return '// 请先选择动画'

  const { duration, delay, ease, repeat, stagger, yoyo } = parameters.value

  if (codeLanguage.value === 'CSS') {
    return generateCSSCode(animName)
  } else if (codeLanguage.value === 'GSAP') {
    return generateGSAPCode(animName)
  } else if (codeLanguage.value === 'React') {
    return generateReactCode(animName)
  } else if (codeLanguage.value === 'Vue') {
    return generateVueCode(animName)
  }
  return ''
})

// Methods
const formatDuration = (val: number) => `${val.toFixed(1)}s`

const onAnimationChange = (value: string[]) => {
  console.log('Animation changed:', value)
  resetAnimation()
}

const playAnimation = () => {
  if (!selectedAnimation.value[1] || !previewElement.value) {
    ElMessage.warning('请先选择动画')
    return
  }

  if (isPlaying.value) return

  const animName = selectedAnimation.value[1]
  const animConfig = (animationConfig as any)[animName]

  if (!animConfig) {
    ElMessage.error(`未找到动画配置: ${animName}`)
    return
  }

  animationTimeline = gsap.timeline({
    repeat: parameters.value.repeat,
    yoyo: parameters.value.yoyo,
    delay: parameters.value.delay
  })

  const { duration, ease } = parameters.value

  // 提取 to 配置，去掉内嵌的 duration/ease，用用户参数覆盖
  const toConfig = { ...animConfig.animations[1] }
  delete toConfig.duration
  delete toConfig.ease

  animationTimeline.fromTo(
    previewElement.value,
    { ...animConfig.animations[0] },
    {
      ...toConfig,
      duration,
      ease,
      onComplete: () => {
        isPlaying.value = false
      }
    }
  )

  isPlaying.value = true
}

const pauseAnimation = () => {
  if (animationTimeline) {
    animationTimeline.pause()
    isPlaying.value = false
  }
}

const restartAnimation = () => {
  resetAnimation()
  setTimeout(() => playAnimation(), 100)
}

const resetAnimation = () => {
  if (animationTimeline) {
    animationTimeline.kill()
    animationTimeline = null
  }
  isPlaying.value = false

  if (previewElement.value) {
    gsap.set(previewElement.value, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      opacity: 1,
      clearProps: 'all'
    })
  }
}

const triggerAnimation = () => {
  if (!isPlaying.value) {
    playAnimation()
  }
}

const updatePreview = () => {
  // 重新应用动画参数
  if (isPlaying.value && animationTimeline) {
    animationTimeline.timeScale(playbackSpeed.value)
  }
}

const updatePreviewText = () => {
  // 文字更新
}

const updateBgColor = () => {
  if (previewCanvas.value) {
    previewCanvas.value.style.backgroundColor = bgColor.value
  }
}

const updateElementColor = () => {
  // 颜色更新
}

const updateElementSize = () => {
  // 大小更新
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(generatedCode.value)
    ElMessage.success('代码已复制到剪贴板')
  } catch (err) {
    ElMessage.error('复制失败')
  }
}

const savePreset = () => {
  const preset = {
    animation: selectedAnimation.value,
    parameters: parameters.value,
    styles: {
      text: previewText.value,
      bgColor: bgColor.value,
      elementColor: elementColor.value,
      elementSize: elementSize.value
    }
  }

  const presets = JSON.parse(localStorage.getItem('animation-presets') || '[]')
  presets.push(preset)
  localStorage.setItem('animation-presets', JSON.stringify(presets))

  ElMessage.success('预设已保存')
}

const loadPreset = () => {
  const presets = JSON.parse(localStorage.getItem('animation-presets') || '[]')
  if (presets.length === 0) {
    ElMessage.info('没有保存的预设')
    return
  }

  // 简单加载最后一个预设
  const preset = presets[presets.length - 1]
  selectedAnimation.value = preset.animation
  parameters.value = preset.parameters
  previewText.value = preset.styles.text
  bgColor.value = preset.styles.bgColor
  elementColor.value = preset.styles.elementColor
  elementSize.value = preset.styles.elementSize

  updateBgColor()
  ElMessage.success('预设已加载')
}

const resetAll = () => {
  resetAnimation()
  parameters.value = {
    duration: 1,
    delay: 0,
    ease: 'power2.out',
    repeat: 0,
    stagger: 0,
    yoyo: false,
    autoPlay: false
  }
  previewText.value = '点击播放动画'
  bgColor.value = '#1a1a1a'
  elementColor.value = '#ffffff'
  elementSize.value = 200
  updateBgColor()

  ElMessage.success('已重置所有设置')
}

// 代码生成函数
const generateCSSCode = (animName: string) => {
  const { duration, ease } = parameters.value
  const divOpen = '<div'
  const divClose = '</div>'
  return `/* CSS Animation */
.animated-element {
  animation: ${animName} ${duration}s ${ease};
}

/* 或使用类名 */
${divOpen} class="${animName}">动画元素${divClose}`
}

const generateGSAPCode = (animName: string) => {
  const { duration, delay, ease, repeat, yoyo, stagger } = parameters.value
  return `// GSAP Animation
import gsap from 'gsap'

const element = document.querySelector('.animated-element')
const animation = animations.${animName}

gsap.fromTo(
  element,
  animation.animations[0],
  {
    ...animation.animations[1],
    duration: ${duration},
    delay: ${delay},
    ease: '${ease}',
    repeat: ${repeat},
    yoyo: ${yoyo},
    stagger: ${stagger}
  }
)`
}

const generateReactCode = (animName: string) => {
  const { duration, ease } = parameters.value
  const divOpen = '<div'
  const divClose = '</div>'
  return `// React + GSAP
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function AnimatedComponent() {
  const ref = useRef(null)
  const { animations } = require('@universal-animations/gsap')

  useEffect(() => {
    const animation = animations.${animName}
    gsap.fromTo(
      ref.current,
      animation.animations[0],
      {
        ...animation.animations[1],
        duration: ${duration},
        ease: '${ease}'
      }
    )
  }, [])

  return ${divOpen} ref={ref}>动画元素${divClose}
}`
}

const generateVueCode = (animName: string) => {
  const { duration, ease } = parameters.value
  const scriptOpen = '<script setup>'
  const scriptClose = '</' + 'script>'
  const tplOpen = '<template>'
  const tplClose = '</' + 'template>'
  const divOpen = '<div'
  const divClose = '</' + 'div>'
  return `// Vue 3 + GSAP
${tplOpen}
  ${divOpen} ref="el">动画元素${divClose}
${tplClose}

${scriptOpen}
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { animations } from '@universal-animations/gsap'

const el = ref(null)

onMounted(() => {
  const animation = animations.${animName}
  gsap.fromTo(
    el.value,
    animation.animations[0],
    {
      ...animation.animations[1],
      duration: ${duration},
      ease: '${ease}'
    }
  )
})
${scriptClose}`
}

// 性能监控
const updatePerformance = () => {
  const now = performance.now()
  frameCount++

  if (now - lastFrameTime >= 1000) {
    fps.value = Math.round((frameCount * 1000) / (now - lastFrameTime))
    frameCount = 0
    lastFrameTime = now
  }
}

const monitorPerformance = () => {
  const startTime = performance.now()

  animationFrameId = requestAnimationFrame(() => {
    const endTime = performance.now()
    renderTime.value = Math.round(endTime - startTime)
    updatePerformance()
    monitorPerformance()
  })
}

// Lifecycle
onMounted(() => {
  updateBgColor()
  monitorPerformance()

  // 自动播放
  if (parameters.value.autoPlay) {
    setTimeout(() => playAnimation(), 500)
  }
})

onUnmounted(() => {
  if (animationTimeline) {
    animationTimeline.kill()
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

// Watch
watch(playbackSpeed, (newSpeed) => {
  if (animationTimeline) {
    animationTimeline.timeScale(newSpeed)
  }
})
</script>

<style scoped>
.animator-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.animator-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.header-actions {
  display: flex;
  gap: 12px;
}

.animator-main {
  padding: 24px;
}

.preview-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.label {
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.preview-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.speed-selector {
  width: 100px;
}

.preview-canvas {
  min-height: 400px;
  background: #1a1a1a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
}

.preview-element {
  transition: all 0.3s ease;
}

.performance-monitor {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.parameter-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.parameter-card {
  background: rgba(255, 255, 255, 0.95);
}

.parameter-input {
  width: 100px;
}

.code-section {
  margin-top: 24px;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.code-content {
  background: #1a1a1a;
  border-radius: 8px;
  padding: 16px;
  overflow: auto;
  max-height: 400px;
}

.code-content pre {
  margin: 0;
}

.code-content code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #a9b7c6;
}

:deep(.el-form-item__label) {
  font-weight: 500;
}
</style>
