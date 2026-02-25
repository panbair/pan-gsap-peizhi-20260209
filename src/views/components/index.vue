<template>
  <div class="components-demo">
    <el-container>
      <el-header>
        <h1>🧩 交互式动画组件库</h1>
        <div class="header-actions">
          <el-button @click="copyCode" :icon="DocumentCopy">复制代码</el-button>
        </div>
      </el-header>

      <el-main>
        <!-- AnimatedButton -->
        <el-card class="component-section">
          <template #header>
            <h2>AnimatedButton - 动画按钮</h2>
          </template>

          <div class="demo-content">
            <div class="demo-row">
              <AnimatedButton
                v-for="variant in ['primary', 'secondary', 'success', 'danger', 'warning']"
                :key="variant"
                :variant="variant"
                :animation="selectedAnimation"
                :ripple="enableRipple"
                class="demo-button"
              >
                {{ variant }}
              </AnimatedButton>
            </div>

            <div class="demo-row">
              <AnimatedButton
                v-for="size in ['small', 'medium', 'large']"
                :key="size"
                :size="size"
                :animation="selectedAnimation"
                class="demo-button"
              >
                {{ size }}
              </AnimatedButton>
            </div>

            <div class="demo-row">
              <AnimatedButton :loading="true">Loading</AnimatedButton>
              <AnimatedButton :disabled="true">Disabled</AnimatedButton>
            </div>

            <div class="demo-controls">
              <div class="control-group">
                <label>动画类型:</label>
                <el-radio-group v-model="selectedAnimation">
                  <el-radio-button label="bounce">Bounce</el-radio-button>
                  <el-radio-button label="scale">Scale</el-radio-button>
                  <el-radio-button label="shake">Shake</el-radio-button>
                  <el-radio-button label="pulse">Pulse</el-radio-button>
                  <el-radio-button label="glow">Glow</el-radio-button>
                </el-radio-group>
              </div>

              <div class="control-group">
                <el-checkbox v-model="enableRipple">启用涟漪效果</el-checkbox>
              </div>
            </div>
          </div>
        </el-card>

        <!-- AnimatedCard -->
        <el-card class="component-section">
          <template #header>
            <h2>AnimatedCard - 动画卡片</h2>
          </template>

          <div class="demo-content">
            <div class="demo-grid">
              <AnimatedCard
                v-for="anim in ['fade', 'slide', 'scale', 'flip', 'rotate', 'bounce']"
                :key="anim"
                :animation="anim"
                :visible="showCards"
                class="demo-card"
              >
                <h3>{{ anim }} Animation</h3>
                <p>This card uses the {{ anim }} animation effect.</p>
                <el-button @click="toggleCards" size="small">Toggle</el-button>
              </AnimatedCard>
            </div>
          </div>
        </el-card>

        <!-- AnimatedModal -->
        <el-card class="component-section">
          <template #header>
            <h2>AnimatedModal - 动画模态框</h2>
          </template>

          <div class="demo-content">
            <div class="demo-row">
              <AnimatedButton
                v-for="anim in ['fade', 'slide', 'scale', 'zoom', 'flip', 'bounce']"
                :key="anim"
                @click="openModal(anim)"
              >
                {{ anim }} Modal
              </AnimatedButton>
            </div>

            <AnimatedModal
              v-model="modalVisible"
              :animation="currentModalAnimation"
              title="动画模态框"
              size="medium"
            >
              <p>这是一个使用 <strong>{{ currentModalAnimation }}</strong> 动画的模态框。</p>
              <p>你可以尝试不同的动画效果来体验不同的视觉效果。</p>
              <p>GSAP 提供了流畅的过渡动画,让用户体验更加愉悦。</p>
              <template #footer>
                <AnimatedButton variant="secondary" @click="modalVisible = false">取消</AnimatedButton>
                <AnimatedButton variant="primary" @click="modalVisible = false">确定</AnimatedButton>
              </template>
            </AnimatedModal>
          </div>
        </el-card>

        <!-- ScrollReveal -->
        <el-card class="component-section">
          <template #header>
            <h2>ScrollReveal - 滚动揭示</h2>
          </template>

          <div class="demo-content scroll-demo">
            <ScrollReveal
              v-for="i in 6"
              :key="i"
              :animation="scrollAnimation"
              :direction="scrollDirection"
              :delay="i * 0.1"
              class="scroll-item"
            >
              <div class="scroll-content">
                <h3>滚动揭示动画 {{ i }}</h3>
                <p>当你滚动页面时,这些元素会依次出现。</p>
              </div>
            </ScrollReveal>
          </div>

          <div class="demo-controls">
            <div class="control-group">
              <label>动画类型:</label>
              <el-radio-group v-model="scrollAnimation">
                <el-radio-button label="fade">Fade</el-radio-button>
                <el-radio-button label="slide">Slide</el-radio-button>
                <el-radio-button label="scale">Scale</el-radio-button>
              </el-radio-group>
            </div>

            <div class="control-group">
              <label>方向:</label>
              <el-radio-group v-model="scrollDirection">
                <el-radio-button label="up">Up</el-radio-button>
                <el-radio-button label="down">Down</el-radio-button>
                <el-radio-button label="left">Left</el-radio-button>
                <el-radio-button label="right">Right</el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </el-card>

        <!-- InfiniteLoader -->
        <el-card class="component-section">
          <template #header>
            <h2>InfiniteLoader - 无限加载器</h2>
          </template>

          <div class="demo-content">
            <div class="demo-row">
              <div class="loader-wrapper">
                <InfiniteLoader :size="size" :text="loadingText" />
              </div>
            </div>

            <div class="demo-controls">
              <div class="control-group">
                <label>尺寸:</label>
                <el-radio-group v-model="size">
                  <el-radio-button label="small">Small</el-radio-button>
                  <el-radio-button label="medium">Medium</el-radio-button>
                  <el-radio-button label="large">Large</el-radio-button>
                </el-radio-group>
              </div>

              <div class="control-group">
                <label>文字:</label>
                <el-input v-model="loadingText" placeholder="输入加载文字" style="width: 200px;" />
              </div>
            </div>
          </div>
        </el-card>

        <!-- ParallaxSection -->
        <el-card class="component-section">
          <template #header>
            <h2>ParallaxSection - 视差滚动</h2>
          </template>

          <div class="demo-content">
            <ParallaxSection :speed="parallaxSpeed" class="parallax-demo">
              <div class="parallax-content">
                <h2>🌟 视差滚动效果</h2>
                <p>向下滚动页面,感受视差效果的魅力</p>
                <p>速度: {{ parallaxSpeed }}</p>
              </div>
            </ParallaxSection>

            <div class="demo-controls">
              <div class="control-group">
                <label>速度:</label>
                <el-slider
                  v-model="parallaxSpeed"
                  :min="0"
                  :max="1"
                  :step="0.1"
                  style="width: 200px;"
                />
              </div>
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DocumentCopy } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import gsap from 'gsap'
import AnimatedButton from '@/components/AnimatedButton.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import AnimatedModal from '@/components/AnimatedModal.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import InfiniteLoader from '@/components/InfiniteLoader.vue'
import ParallaxSection from '@/components/ParallaxSection.vue'

// AnimatedButton
const selectedAnimation = ref('bounce')
const enableRipple = ref(true)

// AnimatedCard
const showCards = ref(true)
const toggleCards = () => {
  showCards.value = !showCards.value
  setTimeout(() => {
    showCards.value = !showCards.value
  }, 600)
}

// AnimatedModal
const modalVisible = ref(false)
const currentModalAnimation = ref('fade')
const openModal = (animation: string) => {
  currentModalAnimation.value = animation
  modalVisible.value = true
}

// ScrollReveal
const scrollAnimation = ref('slide')
const scrollDirection = ref('up')

// InfiniteLoader
const size = ref('medium')
const loadingText = ref('Loading...')

// ParallaxSection
const parallaxSpeed = ref(0.5)

// 复制代码
const copyCode = () => {
  const code = `
<template>
  <!-- AnimatedButton -->
  <AnimatedButton
    variant="primary"
    animation="bounce"
    :ripple="true"
    @click="handleClick"
  >
    Click Me
  </AnimatedButton>

  <!-- AnimatedCard -->
  <AnimatedCard
    animation="fade"
    direction="up"
    :visible="true"
  >
    <h3>Card Content</h3>
  </AnimatedCard>

  <!-- AnimatedModal -->
  <AnimatedModal
    v-model="modalVisible"
    animation="scale"
    title="Modal Title"
  >
    <p>Modal Content</p>
    <template #footer>
      <AnimatedButton @click="modalVisible = false">Close</AnimatedButton>
    </template>
  </AnimatedModal>

  <!-- ScrollReveal -->
  <ScrollReveal
    animation="slide"
    direction="up"
    :delay="0.1"
  >
    <div>Content</div>
  </ScrollReveal>

  <!-- InfiniteLoader -->
  <InfiniteLoader
    size="medium"
    text="Loading..."
  />

  <!-- ParallaxSection -->
  <ParallaxSection
    :speed="0.5"
    direction="vertical"
  >
    <div>Content</div>
  </ParallaxSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AnimatedButton from '@/components/AnimatedButton.vue'
import AnimatedCard from '@/components/AnimatedCard.vue'
import AnimatedModal from '@/components/AnimatedModal.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import InfiniteLoader from '@/components/InfiniteLoader.vue'
import ParallaxSection from '@/components/ParallaxSection.vue'

const modalVisible = ref(false)
</script>
  `

  navigator.clipboard.writeText(code)
  ElMessage.success('代码已复制到剪贴板')
}
</script>

<style scoped>
.components-demo {
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

.el-main {
  padding: 20px;
}

.component-section {
  margin-bottom: 20px;
  background: white;
  border-radius: 12px;
}

.component-section h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.demo-content {
  padding: 20px 0;
}

.demo-row {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.demo-card {
  min-height: 200px;
}

.demo-card h3 {
  margin: 0 0 12px 0;
  color: #303133;
}

.demo-card p {
  margin: 0 0 16px 0;
  color: #606266;
}

.demo-controls {
  padding: 16px;
  background: #f5f7fa;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.control-group label {
  font-weight: 500;
  color: #303133;
  white-space: nowrap;
}

/* Scroll demo */
.scroll-demo {
  max-height: 500px;
  overflow-y: auto;
}

.scroll-item {
  margin-bottom: 16px;
}

.scroll-content {
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.scroll-content h3 {
  margin: 0 0 12px 0;
}

.scroll-content p {
  margin: 0;
  opacity: 0.9;
}

/* Loader demo */
.loader-wrapper {
  padding: 40px;
  background: #f5f7fa;
  border-radius: 8px;
}

/* Parallax demo */
.parallax-demo {
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
}

.parallax-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.parallax-content h2 {
  margin: 0 0 16px 0;
  font-size: 32px;
}

.parallax-content p {
  margin: 8px 0;
  opacity: 0.9;
}
</style>
