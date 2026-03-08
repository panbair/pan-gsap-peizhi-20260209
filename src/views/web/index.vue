<template>
  <div class="web-wrapper">
    <!-- 滚动进度条 -->
    <ScrollProgress />

    <!-- 页面标题 -->
    <header class="page-header">
      <h1 class="page-title">滚动控制动画</h1>
      <p class="page-subtitle">使用滚动条控制动画进度</p>
    </header>

    <!-- 组件容器 - 用于懒加载 -->
    <div ref="componentsContainer" class="components-container">
      <!-- 核心组件 - 立即加载 -->
      <div v-if="0">
        <Card3DFlipGallery />
        <Timeline />
        <TextTypewriter />
        <Cube3D />
        <ImageParallax />

        <!-- 3D/视差组件 - 懒加载 -->
        <LazyLiquidWave v-if="visibilityState.showLiquidWave" />
        <LazyParticleExplosion v-if="visibilityState.showParticleExplosion" />
        <LazyNumberCounter v-if="visibilityState.showNumberCounter" />
        <LazyBouncingBall v-if="visibilityState.showBouncingBall" />
        <LazyCircularProgress v-if="visibilityState.showCircularProgress" />
        <LazyTextReveal v-if="visibilityState.showTextReveal" />
        <LazyMagneticButton v-if="visibilityState.showMagneticButton" />
        <LazyParallaxCards v-if="visibilityState.showParallaxCards" />
        <LazyRotatingRings v-if="visibilityState.showRotatingRings" />
        <LazyTextDistortion v-if="visibilityState.showTextDistortion" />
        <LazyGlassmorphismGallery v-if="visibilityState.showGlassmorphismGallery" />
        <LazyInfiniteScrollText v-if="visibilityState.showInfiniteScrollText" />
        <LazyHolographic3D v-if="visibilityState.showHolographic3D" />
        <LazyNeonGlowText v-if="visibilityState.showNeonGlowText" />
        <LazyMorphingShapes v-if="visibilityState.showMorphingShapes" />

        <!-- 创意特效 - 延迟加载 -->
        <LazyCyberpunkCity v-if="visibilityState.showCyberpunkCity" />
        <LazyDNAHelix v-if="visibilityState.showDNAHelix" />
        <LazyAuroraBorealis v-if="visibilityState.showAuroraBorealis" />
        <LazyGalaxySpiral v-if="visibilityState.showGalaxySpiral" />
        <LazyOceanWaves v-if="visibilityState.showOceanWaves" />
        <LazyQuantumField v-if="visibilityState.showQuantumField" />
        <LazyVolcanicEruption v-if="visibilityState.showVolcanicEruption" />
        <LazySolarSystem v-if="visibilityState.showSolarSystem" />
        <LazyTornado v-if="visibilityState.showTornado" />

        <!-- 滚动交互组件 - 按需加载 -->
        <!-- ... existing code ... -->

        <!-- 滚动交互组件 - 按需加载 -->
        <!--
        以下组件通过 IntersectionObserver 实现懒加载，根据滚动位置动态显示
        包含多种滚动驱动的动画效果：
        - 视差滚动效果：ParallaxZoomGallery, DiagonalParallax, CascadeParallax, ParallaxScroll, FixedParallax
        - 旋转动画效果：RotationCarousel, RotationGallery, RotateScale
        - 缩放动画效果：ScaleWave, ScaleShapes, ZoomPan
        - 淡入堆叠效果：FadeInStack
        - 水平滚动效果：HorizontalScroll
        - 文本滚动效果：TextScroll
        - 渐变流动效果：GradientFlow
        - 浮动效果：FloatingImages
        - 交错动画效果：StaggerGrid, StaggerTimeline, StaggerCards
        - 圆形布局效果：CircleGallery
        - 折叠变形效果：FoldEffect, MorphGrid
        - 波浪揭示效果：WaveReveal
        - 滚动揭示效果：ScrollReveal
        - 时间线序列效果：TimelineSequence, OverlappingTimeline, NestedTimeline
        - 卡片变换效果：FlipCards, SlidingPanels, MorphingCards, MotionPathCards, AccordionCards
        - 曲线运动效果：CircleMotion, InfinityMotion
        - 星云漩涡效果：NebulaVortex
        - 标签切换效果：TabSwitch
        - 图像对比效果：ImageComparison
        - 卡片堆叠效果：CardStack, HorizontalScrollCards
      -->

        <LazyParallaxZoomGallery v-if="visibilityState.showParallaxZoomGallery" />
        <LazyRotationCarousel v-if="visibilityState.showRotationCarousel" />
        <LazyFadeInStack v-if="visibilityState.showFadeInStack" />
        <LazyScaleWave v-if="visibilityState.showScaleWave" />
        <LazyHorizontalScroll v-if="visibilityState.showHorizontalScroll" />
        <LazyDiagonalParallax v-if="visibilityState.showDiagonalParallax" />
        <LazyRotationGallery v-if="visibilityState.showRotationGallery" />
        <LazyTextScroll v-if="visibilityState.showTextScroll" />
        <LazyScaleShapes v-if="visibilityState.showScaleShapes" />
        <LazyGradientFlow v-if="visibilityState.showGradientFlow" />
        <LazyCascadeParallax v-if="visibilityState.showCascadeParallax" />
        <LazyFloatingImages v-if="visibilityState.showFloatingImages" />
        <LazyStaggerGrid v-if="visibilityState.showStaggerGrid" />
        <LazyStaggerTimeline v-if="visibilityState.showStaggerTimeline" />
        <LazyStaggerCards v-if="visibilityState.showStaggerCards" />
        <LazyCircleGallery v-if="visibilityState.showCircleGallery" />
        <LazyFoldEffect v-if="visibilityState.showFoldEffect" />
        <LazyMorphGrid v-if="visibilityState.showMorphGrid" />
        <LazyWaveReveal v-if="visibilityState.showWaveReveal" />
        <LazyZoomPan v-if="visibilityState.showZoomPan" />
        <LazyRotateScale v-if="visibilityState.showRotateScale" />
        <LazyScrollReveal v-if="visibilityState.showScrollReveal" />
        <LazyParallaxScroll v-if="visibilityState.showParallaxScroll" />
        <LazyFixedParallax v-if="visibilityState.showFixedParallax" />
        <LazyTimelineSequence v-if="visibilityState.showTimelineSequence" />
        <LazyOverlappingTimeline v-if="visibilityState.showOverlappingTimeline" />
        <LazyNestedTimeline v-if="visibilityState.showNestedTimeline" />
        <LazyFlipCards v-if="visibilityState.showFlipCards" />
        <LazySlidingPanels v-if="visibilityState.showSlidingPanels" />
        <LazyMorphingCards v-if="visibilityState.showMorphingCards" />
        <LazyMotionPathCards v-if="visibilityState.showMotionPathCards" />
        <LazyCircleMotion v-if="visibilityState.showCircleMotion" />
        <LazyInfinityMotion v-if="visibilityState.showInfinityMotion" />
      </div>
      <LazyNebulaVortex v-if="visibilityState.showNebulaVortex" />
      <LazyAccordionCards v-if="visibilityState.showAccordionCards" />
      <LazyTabSwitch v-if="visibilityState.showTabSwitch" />
      <LazyImageComparison v-if="visibilityState.showImageComparison" />
      <LazyCardStack v-if="visibilityState.showCardStack" />
      <LazyHorizontalScrollCards v-if="visibilityState.showHorizontalScrollCards" />
      <LazyQuantumWormhole v-if="visibilityState.showQuantumWormhole" />
      <LazyMagneticOrbit v-if="visibilityState.showMagneticOrbit" />
      <LazySpringBounce v-if="visibilityState.showSpringBounce" />
    </div>

    <!-- 加载指示器 -->
    <Transition name="fade">
      <div v-if="isLoading" class="loading-indicator">
        <div class="spinner"></div>
        <p>加载动画组件中...</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue'

// 立即加载的核心组件
import ScrollProgress from './components/ScrollProgress.vue'
import Card3DFlipGallery from './components/Card3DFlipGallery.vue'
import Timeline from './components/Timeline.vue'
import TextTypewriter from './components/TextTypewriter.vue'
import Cube3D from './components/Cube3D.vue'
import ImageParallax from './components/ImageParallax.vue'

// 懒加载组件
const LazyLiquidWave = defineAsyncComponent(() => import('./components/LiquidWave.vue'))
const LazyParticleExplosion = defineAsyncComponent(
  () => import('./components/ParticleExplosion.vue')
)
const LazyNumberCounter = defineAsyncComponent(() => import('./components/NumberCounter.vue'))
const LazyBouncingBall = defineAsyncComponent(() => import('./components/BouncingBall.vue'))
const LazyCircularProgress = defineAsyncComponent(() => import('./components/CircularProgress.vue'))
const LazyTextReveal = defineAsyncComponent(() => import('./components/TextReveal.vue'))
const LazyMagneticButton = defineAsyncComponent(() => import('./components/MagneticButton.vue'))
const LazyParallaxCards = defineAsyncComponent(() => import('./components/ParallaxCards.vue'))
const LazyRotatingRings = defineAsyncComponent(() => import('./components/RotatingRings.vue'))
const LazyTextDistortion = defineAsyncComponent(() => import('./components/TextDistortion.vue'))
const LazyGlassmorphismGallery = defineAsyncComponent(
  () => import('./components/GlassmorphismGallery.vue')
)
const LazyInfiniteScrollText = defineAsyncComponent(
  () => import('./components/InfiniteScrollText.vue')
)
const LazyHolographic3D = defineAsyncComponent(() => import('./components/Holographic3D.vue'))
const LazyNeonGlowText = defineAsyncComponent(() => import('./components/NeonGlowText.vue'))
const LazyMorphingShapes = defineAsyncComponent(() => import('./components/MorphingShapes.vue'))

const LazyCyberpunkCity = defineAsyncComponent(() => import('./components/CyberpunkCity.vue'))
const LazyDNAHelix = defineAsyncComponent(() => import('./components/DNAHelix.vue'))
const LazyAuroraBorealis = defineAsyncComponent(() => import('./components/AuroraBorealis.vue'))
const LazyGalaxySpiral = defineAsyncComponent(() => import('./components/GalaxySpiral.vue'))
const LazyOceanWaves = defineAsyncComponent(() => import('./components/OceanWaves.vue'))
const LazyQuantumField = defineAsyncComponent(() => import('./components/QuantumField.vue'))
const LazyVolcanicEruption = defineAsyncComponent(() => import('./components/VolcanicEruption.vue'))
const LazySolarSystem = defineAsyncComponent(() => import('./components/SolarSystem.vue'))
const LazyTornado = defineAsyncComponent(() => import('./components/Tornado.vue'))

const LazyParallaxZoomGallery = defineAsyncComponent(
  () => import('./components/ParallaxZoomGallery.vue')
)
const LazyRotationCarousel = defineAsyncComponent(() => import('./components/RotationCarousel.vue'))
const LazyFadeInStack = defineAsyncComponent(() => import('./components/FadeInStack.vue'))
const LazyScaleWave = defineAsyncComponent(() => import('./components/ScaleWave.vue'))
const LazyHorizontalScroll = defineAsyncComponent(() => import('./components/HorizontalScroll.vue'))
const LazyDiagonalParallax = defineAsyncComponent(() => import('./components/DiagonalParallax.vue'))
const LazyRotationGallery = defineAsyncComponent(() => import('./components/RotationGallery.vue'))
const LazyTextScroll = defineAsyncComponent(() => import('./components/TextScroll.vue'))
const LazyScaleShapes = defineAsyncComponent(() => import('./components/ScaleShapes.vue'))
const LazyGradientFlow = defineAsyncComponent(() => import('./components/GradientFlow.vue'))
const LazyCascadeParallax = defineAsyncComponent(() => import('./components/CascadeParallax.vue'))
const LazyFloatingImages = defineAsyncComponent(() => import('./components/FloatingImages.vue'))
const LazyStaggerGrid = defineAsyncComponent(() => import('./components/StaggerGrid.vue'))
const LazyStaggerTimeline = defineAsyncComponent(() => import('./components/StaggerTimeline.vue'))
const LazyStaggerCards = defineAsyncComponent(() => import('./components/StaggerCards.vue'))
const LazyCircleGallery = defineAsyncComponent(() => import('./components/CircleGallery.vue'))
const LazyFoldEffect = defineAsyncComponent(() => import('./components/FoldEffect.vue'))
const LazyMorphGrid = defineAsyncComponent(() => import('./components/MorphGrid.vue'))
const LazyWaveReveal = defineAsyncComponent(() => import('./components/WaveReveal.vue'))
const LazyZoomPan = defineAsyncComponent(() => import('./components/ZoomPan.vue'))
const LazyRotateScale = defineAsyncComponent(() => import('./components/RotateScale.vue'))
const LazyScrollReveal = defineAsyncComponent(() => import('./components/ScrollReveal.vue'))
const LazyParallaxScroll = defineAsyncComponent(() => import('./components/ParallaxScroll.vue'))
const LazyFixedParallax = defineAsyncComponent(() => import('./components/FixedParallax.vue'))
const LazyTimelineSequence = defineAsyncComponent(() => import('./components/TimelineSequence.vue'))
const LazyOverlappingTimeline = defineAsyncComponent(
  () => import('./components/OverlappingTimeline.vue')
)
const LazyNestedTimeline = defineAsyncComponent(() => import('./components/NestedTimeline.vue'))
const LazyFlipCards = defineAsyncComponent(() => import('./components/FlipCards.vue'))
const LazySlidingPanels = defineAsyncComponent(() => import('./components/SlidingPanels.vue'))
const LazyMorphingCards = defineAsyncComponent(() => import('./components/MorphingCards.vue'))
const LazyMotionPathCards = defineAsyncComponent(() => import('./components/MotionPathCards.vue'))
const LazyCircleMotion = defineAsyncComponent(() => import('./components/CircleMotion.vue'))
const LazyInfinityMotion = defineAsyncComponent(() => import('./components/InfinityMotion.vue'))
const LazyNebulaVortex = defineAsyncComponent(() => import('./components/NebulaVortex.vue'))
const LazyAccordionCards = defineAsyncComponent(() => import('./components/AccordionCards.vue'))
const LazyTabSwitch = defineAsyncComponent(() => import('./components/TabSwitch.vue'))
const LazyImageComparison = defineAsyncComponent(() => import('./components/ImageComparison.vue'))
const LazyCardStack = defineAsyncComponent(() => import('./components/CardStack.vue'))
const LazyHorizontalScrollCards = defineAsyncComponent(
  () => import('./components/HorizontalScrollCards.vue')
)
const LazyQuantumWormhole = defineAsyncComponent(() => import('./components/QuantumWormhole.vue'))
const LazyMagneticOrbit = defineAsyncComponent(() => import('./components/MagneticOrbit.vue'))
const LazySpringBounce = defineAsyncComponent(() => import('./components/SpringBounce.vue'))

// 组件显示状态
const isLoading = ref(true)
const componentsContainer = ref<HTMLElement>()

// 组件可见性状态映射
const visibilityState = ref<Record<string, boolean>>({
  showLiquidWave: false,
  showParticleExplosion: false,
  showNumberCounter: false,
  showBouncingBall: false,
  showCircularProgress: false,
  showTextReveal: false,
  showMagneticButton: false,
  showParallaxCards: false,
  showRotatingRings: false,
  showTextDistortion: false,
  showGlassmorphismGallery: false,
  showInfiniteScrollText: false,
  showHolographic3D: false,
  showNeonGlowText: false,
  showMorphingShapes: false,
  showCyberpunkCity: false,
  showDNAHelix: false,
  showAuroraBorealis: false,
  showGalaxySpiral: false,
  showOceanWaves: false,
  showQuantumField: false,
  showVolcanicEruption: false,
  showSolarSystem: false,
  showTornado: false,
  showParallaxZoomGallery: false,
  showRotationCarousel: false,
  showFadeInStack: false,
  showScaleWave: false,
  showHorizontalScroll: false,
  showDiagonalParallax: false,
  showRotationGallery: false,
  showTextScroll: false,
  showScaleShapes: false,
  showGradientFlow: false,
  showCascadeParallax: false,
  showFloatingImages: false,
  showStaggerGrid: false,
  showStaggerTimeline: false,
  showStaggerCards: false,
  showCircleGallery: false,
  showFoldEffect: false,
  showMorphGrid: false,
  showWaveReveal: false,
  showZoomPan: false,
  showRotateScale: false,
  showScrollReveal: false,
  showParallaxScroll: false,
  showFixedParallax: false,
  showTimelineSequence: false,
  showOverlappingTimeline: false,
  showNestedTimeline: false,
  showFlipCards: false,
  showSlidingPanels: false,
  showMorphingCards: false,
  showMotionPathCards: false,
  showCircleMotion: false,
  showInfinityMotion: false,
  showNebulaVortex: false,
  showAccordionCards: false,
  showTabSwitch: false,
  showImageComparison: false,
  showCardStack: false,
  showHorizontalScrollCards: false,
  showQuantumWormhole: false,
  showMagneticOrbit: false,
  showSpringBounce: false
})

// 组件分批加载配置
const componentBatches = [
  ['showLiquidWave', 'showParticleExplosion', 'showNumberCounter', 'showBouncingBall'],
  ['showCircularProgress', 'showTextReveal', 'showMagneticButton', 'showParallaxCards'],
  ['showRotatingRings', 'showTextDistortion', 'showGlassmorphismGallery', 'showInfiniteScrollText'],
  ['showHolographic3D', 'showNeonGlowText', 'showMorphingShapes', 'showCyberpunkCity'],
  ['showDNAHelix', 'showAuroraBorealis', 'showGalaxySpiral', 'showOceanWaves'],
  ['showQuantumField', 'showVolcanicEruption', 'showSolarSystem', 'showTornado'],
  ['showParallaxZoomGallery', 'showRotationCarousel', 'showFadeInStack', 'showScaleWave'],
  ['showHorizontalScroll', 'showDiagonalParallax', 'showRotationGallery', 'showTextScroll'],
  ['showScaleShapes', 'showGradientFlow', 'showCascadeParallax', 'showFloatingImages'],
  ['showStaggerGrid', 'showStaggerTimeline', 'showStaggerCards', 'showCircleGallery'],
  ['showFoldEffect', 'showMorphGrid', 'showWaveReveal', 'showZoomPan'],
  ['showRotateScale', 'showScrollReveal', 'showParallaxScroll', 'showFixedParallax'],
  ['showTimelineSequence', 'showOverlappingTimeline', 'showNestedTimeline', 'showFlipCards'],
  ['showSlidingPanels', 'showMorphingCards', 'showMotionPathCards', 'showCircleMotion'],
  ['showInfinityMotion', 'showNebulaVortex', 'showAccordionCards', 'showTabSwitch'],
  ['showImageComparison', 'showCardStack', 'showHorizontalScrollCards', 'showQuantumWormhole'],
  ['showMagneticOrbit', 'showSpringBounce']
]

// 交叉观察器用于懒加载
let observer: IntersectionObserver | null = null
let loadInterval: number | null = null

const loadComponentsInBatch = (batchIndex: number) => {
  if (batchIndex >= componentBatches.length) {
    isLoading.value = false
    return
  }

  const batch = componentBatches[batchIndex]
  batch.forEach(keyName => {
    visibilityState.value[keyName] = true
  })
}

const initObserver = () => {
  if (!window.IntersectionObserver) {
    // 浏览器不支持时，直接开始加载
    startBatchLoading()
    return
  }

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startBatchLoading()
          if (observer) {
            observer.disconnect()
            observer = null
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  if (componentsContainer.value) {
    observer.observe(componentsContainer.value)
  }
}

const startBatchLoading = () => {
  let batchIndex = 0
  loadComponentsInBatch(batchIndex)
  batchIndex++

  loadInterval = window.setInterval(() => {
    loadComponentsInBatch(batchIndex)
    batchIndex++

    if (batchIndex >= componentBatches.length) {
      if (loadInterval) {
        clearInterval(loadInterval)
        loadInterval = null
      }
    }
  }, 300) // 每300ms加载一批，避免一次性加载过多
}

onMounted(() => {
  setTimeout(() => {
    initObserver()
  }, 500)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (loadInterval) {
    clearInterval(loadInterval)
  }
})
</script>

<style scoped lang="scss">
.web-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a2a 100%);
  overflow-x: hidden;
  position: relative;
}

.page-header {
  text-align: center;
  padding: 80px 20px 40px;
  position: relative;
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleFadeIn 1s ease-out;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  animation: subtitleFadeIn 1s ease-out 0.3s both;
}

.components-container {
  position: relative;
}

.loading-indicator {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-indicator p {
  margin: 0;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
