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
      <!--      <div v-if="1">-->
      <Card3DFlipGallery />
      <Timeline />
      <TextTypewriter />
      <Cube3D />
      <ImageParallax />
      <div v-if="0">
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

        <LazyNebulaVortex v-if="visibilityState.showNebulaVortex" />
        <LazyAccordionCards v-if="visibilityState.showAccordionCards" />
        <LazyTabSwitch v-if="visibilityState.showTabSwitch" />
        <LazyImageComparison v-if="visibilityState.showImageComparison" />
        <LazyCardStack v-if="visibilityState.showCardStack" />
        <LazyHorizontalScrollCards v-if="visibilityState.showHorizontalScrollCards" />
        <LazyScrollCard3D v-if="visibilityState.showScrollCard3D" />
        <LazyScrollTextBlur v-if="visibilityState.showScrollTextBlur" />
        <LazyScrollShapeElastic v-if="visibilityState.showScrollShapeElastic" />

        <LazyScrollStaggerWave v-if="visibilityState.showScrollStaggerWave" />
        <LazyScrollParallaxLayer v-if="visibilityState.showScrollParallaxLayer" />
        <LazyScrollMagneticRotate v-if="visibilityState.showScrollMagneticRotate" />
        <LazyScrollFluidPanels v-if="visibilityState.showScrollFluidPanels" />
        <LazyScrollGravityBounce v-if="visibilityState.showScrollGravityBounce" />
        <LazyScrollPixelCard v-if="visibilityState.showScrollPixelCard" />

        <LazyScrollLaserLine v-if="visibilityState.showScrollLaserLine" />
        <LazyScrollHologram v-if="visibilityState.showScrollHologram" />
        <LazyScrollLiquidMorph v-if="visibilityState.showScrollLiquidMorph" />

        <LazyScrollNeonPulse v-if="visibilityState.showScrollNeonPulse" />
        <LazyScrollTimeWarp v-if="visibilityState.showScrollTimeWarp" />
        <LazyScrollCrystalShatter v-if="visibilityState.showScrollCrystalShatter" />
        <LazyQuantumWormhole v-if="visibilityState.showQuantumWormhole" />
        <LazyMagneticOrbit v-if="visibilityState.showMagneticOrbit" />
        <LazySpringBounce v-if="visibilityState.showSpringBounce" />

        <!-- 新增高级滚动动画组件 -->
        <LazyScrollImageReveal v-if="visibilityState.showScrollImageReveal" />
        <LazyScrollTextSplit v-if="visibilityState.showScrollTextSplit" />
        <LazyScrollCardFloat v-if="visibilityState.showScrollCardFloat" />
        <LazyScrollMagnify v-if="visibilityState.showScrollMagnify" />
        <LazyScrollParallaxText v-if="visibilityState.showScrollParallaxText" />
        <LazyScroll3DGallery v-if="visibilityState.showScroll3DGallery" />

        <!-- 超级高级滚动动画组件 -->
        <LazyScrollImageFlow v-if="visibilityState.showScrollImageFlow" />
        <LazyScrollTextCurtain v-if="visibilityState.showScrollTextCurtain" />
        <LazyScrollCardWave v-if="visibilityState.showScrollCardWave" />

        <!-- 极致高级滚动动画组件 -->
        <LazyScrollImageDistort v-if="visibilityState.showScrollImageDistort" />
        <LazyScrollText3D v-if="visibilityState.showScrollText3D" />
        <LazyScrollCardPolaroid v-if="visibilityState.showScrollCardPolaroid" />

        <!-- 全新高级滚动动画组件 -->
        <LazyScrollInkReveal v-if="visibilityState.showScrollInkReveal" />
        <LazyScrollParticleText v-if="visibilityState.showScrollParticleText" />
        <LazyScrollFoldCard v-if="visibilityState.showScrollFoldCard" />
        <LazyScrollMagneticFluid v-if="visibilityState.showScrollMagneticFluid" />
        <LazyScrollGlitchText v-if="visibilityState.showScrollGlitchText" />

        <!-- 全新高级动画组件 (2026) -->
        <LazyScrollImageStackReveal v-if="visibilityState.showScrollImageStackReveal" />
        <LazyScrollTextWaveSplit v-if="visibilityState.showScrollTextWaveSplit" />
        <LazyScrollCard3DFlip v-if="visibilityState.showScrollCard3DFlip" />
        <LazyScrollParallaxGallery v-if="visibilityState.showScrollParallaxGallery" />
        <LazyScrollElasticText v-if="visibilityState.showScrollElasticText" />
        <LazyScrollMagneticCards v-if="visibilityState.showScrollMagneticCards" />
        <LazyScrollInfiniteScroll v-if="visibilityState.showScrollInfiniteScroll" />
        <LazyScrollWaveCards v-if="visibilityState.showScrollWaveCards" />

        <!-- 全新创意动画组件 (2026-03) -->
        <LazyScrollLensReveal v-if="visibilityState.showScrollLensReveal" />
        <LazyScrollMorphPath v-if="visibilityState.showScrollMorphPath" />
        <LazyScrollTimeline v-if="visibilityState.showScrollTimeline" />
        <LazyScrollTextScatter v-if="visibilityState.showScrollTextScatter" />
        <LazyScrollCardStack v-if="visibilityState.showScrollCardStack" />
        <LazyScrollGradientFlow v-if="visibilityState.showScrollGradientFlow" />
        <LazyScrollParticleWave v-if="visibilityState.showScrollParticleWave" />
        <LazyScrollImageMosaic v-if="visibilityState.showScrollImageMosaic" />
        <!--      </div>-->
        <!-- 全新高级创意动画组件 (2026-03 扩展) -->
        <LazyScrollFluidText v-if="visibilityState.showScrollFluidText" />
        <LazyScrollMorphingCards v-if="visibilityState.showScrollMorphingCards" />
        <LazyScrollRippleCards v-if="visibilityState.showScrollRippleCards" />
        <LazyScrollDistortGallery v-if="visibilityState.showScrollDistortGallery" />
        <LazyScrollMagneticGrid v-if="visibilityState.showScrollMagneticGrid" />
        <LazyScrollFoldEffect v-if="visibilityState.showScrollFoldEffect" />
        <LazyScroll3DTunnel v-if="visibilityState.showScroll3DTunnel" />
        <LazyScrollSpiralReveal v-if="visibilityState.showScrollSpiralReveal" />

        <!-- 全新终极创意动画组件 (2026-03 超级扩展) -->
        <LazyScrollGlitchEffect v-if="visibilityState.showScrollGlitchEffect" />
        <LazyScrollAuroraField v-if="visibilityState.showScrollAuroraField" />
        <LazyScrollMagneticOrbitCards v-if="visibilityState.showScrollMagneticOrbitCards" />
        <LazyScrollNeonTrailCards v-if="visibilityState.showScrollNeonTrailCards" />
        <LazyScrollHologramGallery v-if="visibilityState.showScrollHologramGallery" />
        <LazyScrollLiquidDistort v-if="visibilityState.showScrollLiquidDistort" />
        <LazyScrollPrismCards v-if="visibilityState.showScrollPrismCards" />
        <LazyScrollTemporalDistortion v-if="visibilityState.showScrollTemporalDistortion" />

        <!-- 全新超级创意动画组件 (2026-03 终极扩展) -->
        <LazyScrollCyberGrid v-if="visibilityState.showScrollCyberGrid" />
        <LazyScrollQuantumPortal v-if="visibilityState.showScrollQuantumPortal" />
        <LazyScrollNeonMatrix v-if="visibilityState.showScrollNeonMatrix" />
        <LazyScrollCrystalPrism v-if="visibilityState.showScrollCrystalPrism" />
        <LazyScrollAuroraAurora v-if="visibilityState.showScrollAuroraAurora" />
        <LazyScrollGalaxyVortex v-if="visibilityState.showScrollGalaxyVortex" />
        <LazyScrollInfinityMirrors v-if="visibilityState.showScrollInfinityMirrors" />

        <LazyScrollNeonRain v-if="visibilityState.showScrollNeonRain" />

        <!-- 全新创意滚动控制动画组件 (2026-03) -->
        <LazyScrollParallaxCardsScroll v-if="visibilityState.showScrollParallaxCardsScroll" />
        <LazyScrollTextCascadEffect v-if="visibilityState.showScrollTextCascadEffect" />
        <LazyScrollCardMorphReveal v-if="visibilityState.showScrollCardMorphReveal" />
        <LazyScrollSplitTransition v-if="visibilityState.showScrollSplitTransition" />
      </div>
      <!-- 全新高级滚动控制动画组件 (2026-03) -->
      <LazyScrollParallaxDepth v-if="visibilityState.showScrollParallaxDepth" />
      <LazyScrollMagneticField v-if="visibilityState.showScrollMagneticField" />
      <LazyScrollGeometricFlow v-if="visibilityState.showScrollGeometricFlow" />
      <LazyScrollWaveReveal v-if="visibilityState.showScrollWaveReveal" />

      <!-- 全新创意滚动控制动画组件 (2026-03) -->
      <LazyScrollLiquidCards v-if="visibilityState.showScrollLiquidCards" />
      <LazyScrollNeonGlow v-if="visibilityState.showScrollNeonGlow" />
      <LazyScroll3DCube v-if="visibilityState.showScroll3DCube" />
      <LazyScrollOrbitGallery v-if="visibilityState.showScrollOrbitGallery" />

      <!-- 全新高级滚动控制动画组件 (2026-03) -->
      <LazyScrollHologramCards v-if="visibilityState.showScrollHologramCards" />
      <LazyScrollParticleExplosion v-if="visibilityState.showScrollParticleExplosion" />
      <LazyScrollMorphGallery v-if="visibilityState.showScrollMorphGallery" />
      <LazyScrollCyberGrid v-if="visibilityState.showScrollCyberGrid" />

      <!-- 全新创意滚动控制动画组件 (2026-03) -->
      <LazyScrollLiquidText v-if="visibilityState.showScrollLiquidText" />
      <LazyScrollQuantumCards v-if="visibilityState.showScrollQuantumCards" />
      <LazyScrollAuroraText v-if="visibilityState.showScrollAuroraText" />
      <LazyScrollVortexCards v-if="visibilityState.showScrollVortexCards" />

      <!-- 全新创意滚动控制动画组件 (2026-03) -->
      <LazyScrollPixelCards v-if="visibilityState.showScrollPixelCards" />
      <LazyScrollRibbonCards v-if="visibilityState.showScrollRibbonCards" />
      <LazyScrollOrigamiCards v-if="visibilityState.showScrollOrigamiCards" />
      <LazyScrollGlassMorph v-if="visibilityState.showScrollGlassMorph" />
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
const LazyScrollImageReveal = defineAsyncComponent(
  () => import('./components/ScrollImageReveal.vue')
)
const LazyScrollCard3D = defineAsyncComponent(() => import('./components/ScrollCard3D.vue'))
const LazyScrollTextBlur = defineAsyncComponent(() => import('./components/ScrollTextBlur.vue'))
const LazyScrollShapeElastic = defineAsyncComponent(
  () => import('./components/ScrollShapeElastic.vue')
)
const LazyScrollStaggerWave = defineAsyncComponent(
  () => import('./components/ScrollStaggerWave.vue')
)
const LazyScrollParallaxLayer = defineAsyncComponent(
  () => import('./components/ScrollParallaxLayer.vue')
)
const LazyQuantumWormhole = defineAsyncComponent(() => import('./components/QuantumWormhole.vue'))
const LazyMagneticOrbit = defineAsyncComponent(() => import('./components/MagneticOrbit.vue'))
const LazySpringBounce = defineAsyncComponent(() => import('./components/SpringBounce.vue'))
const LazyScrollMagneticRotate = defineAsyncComponent(
  () => import('./components/ScrollMagneticRotate.vue')
)
const LazyScrollFluidPanels = defineAsyncComponent(
  () => import('./components/ScrollFluidPanels.vue')
)
const LazyScrollGravityBounce = defineAsyncComponent(
  () => import('./components/ScrollGravityBounce.vue')
)
const LazyScrollPixelCard = defineAsyncComponent(() => import('./components/ScrollPixelCard.vue'))
const LazyScrollLaserLine = defineAsyncComponent(() => import('./components/ScrollLaserLine.vue'))
const LazyScrollHologram = defineAsyncComponent(() => import('./components/ScrollHologram.vue'))
const LazyScrollLiquidMorph = defineAsyncComponent(
  () => import('./components/ScrollLiquidMorph.vue')
)
const LazyScrollNeonPulse = defineAsyncComponent(() => import('./components/ScrollNeonPulse.vue'))
const LazyScrollTimeWarp = defineAsyncComponent(() => import('./components/ScrollTimeWarp.vue'))
const LazyScrollCrystalShatter = defineAsyncComponent(
  () => import('./components/ScrollCrystalShatter.vue')
)

// 新增懒加载组件
const LazyScrollTextSplit = defineAsyncComponent(() => import('./components/ScrollTextSplit.vue'))
const LazyScrollCardFloat = defineAsyncComponent(() => import('./components/ScrollCardFloat.vue'))
const LazyScrollMagnify = defineAsyncComponent(() => import('./components/ScrollMagnify.vue'))
const LazyScrollParallaxText = defineAsyncComponent(
  () => import('./components/ScrollParallaxText.vue')
)
const LazyScroll3DGallery = defineAsyncComponent(() => import('./components/Scroll3DGallery.vue'))

// 超级高级懒加载组件
const LazyScrollImageFlow = defineAsyncComponent(() => import('./components/ScrollImageFlow.vue'))
const LazyScrollTextCurtain = defineAsyncComponent(
  () => import('./components/ScrollTextCurtain.vue')
)
const LazyScrollCardWave = defineAsyncComponent(() => import('./components/ScrollCardWave.vue'))

// 极致高级懒加载组件
const LazyScrollImageDistort = defineAsyncComponent(
  () => import('./components/ScrollImageDistort.vue')
)
const LazyScrollText3D = defineAsyncComponent(() => import('./components/ScrollText3D.vue'))
const LazyScrollCardPolaroid = defineAsyncComponent(
  () => import('./components/ScrollCardPolaroid.vue')
)

// 全新高级滚动动画组件
const LazyScrollInkReveal = defineAsyncComponent(() => import('./components/ScrollInkReveal.vue'))
const LazyScrollParticleText = defineAsyncComponent(
  () => import('./components/ScrollParticleText.vue')
)
const LazyScrollFoldCard = defineAsyncComponent(() => import('./components/ScrollFoldCard.vue'))
const LazyScrollMagneticFluid = defineAsyncComponent(
  () => import('./components/ScrollMagneticFluid.vue')
)
const LazyScrollGlitchText = defineAsyncComponent(() => import('./components/ScrollGlitchText.vue'))

// 全新高级动画组件 (2026)
const LazyScrollImageStackReveal = defineAsyncComponent(
  () => import('./components/ScrollImageStackReveal.vue')
)
const LazyScrollTextWaveSplit = defineAsyncComponent(
  () => import('./components/ScrollTextWaveSplit.vue')
)
const LazyScrollCard3DFlip = defineAsyncComponent(() => import('./components/ScrollCard3DFlip.vue'))
const LazyScrollParallaxGallery = defineAsyncComponent(
  () => import('./components/ScrollParallaxGallery.vue')
)
const LazyScrollElasticText = defineAsyncComponent(
  () => import('./components/ScrollElasticText.vue')
)
const LazyScrollMagneticCards = defineAsyncComponent(
  () => import('./components/ScrollMagneticCards.vue')
)
const LazyScrollInfiniteScroll = defineAsyncComponent(
  () => import('./components/ScrollInfiniteScroll.vue')
)
const LazyScrollWaveCards = defineAsyncComponent(() => import('./components/ScrollWaveCards.vue'))

// 全新创意动画组件 (2026-03)
const LazyScrollLensReveal = defineAsyncComponent(() => import('./components/ScrollLensReveal.vue'))
const LazyScrollMorphPath = defineAsyncComponent(() => import('./components/ScrollMorphPath.vue'))
const LazyScrollTimeline = defineAsyncComponent(() => import('./components/ScrollTimeline.vue'))
const LazyScrollTextScatter = defineAsyncComponent(
  () => import('./components/ScrollTextScatter.vue')
)
const LazyScrollCardStack = defineAsyncComponent(() => import('./components/ScrollCardStack.vue'))
const LazyScrollGradientFlow = defineAsyncComponent(
  () => import('./components/ScrollGradientFlow.vue')
)
const LazyScrollParticleWave = defineAsyncComponent(
  () => import('./components/ScrollParticleWave.vue')
)
const LazyScrollImageMosaic = defineAsyncComponent(
  () => import('./components/ScrollImageMosaic.vue')
)

// 全新高级创意动画组件 (2026-03 扩展)
const LazyScrollFluidText = defineAsyncComponent(() => import('./components/ScrollFluidText.vue'))
const LazyScrollMorphingCards = defineAsyncComponent(
  () => import('./components/ScrollMorphingCards.vue')
)
const LazyScrollRippleCards = defineAsyncComponent(
  () => import('./components/ScrollRippleCards.vue')
)
const LazyScrollDistortGallery = defineAsyncComponent(
  () => import('./components/ScrollDistortGallery.vue')
)
const LazyScrollMagneticGrid = defineAsyncComponent(
  () => import('./components/ScrollMagneticGrid.vue')
)
const LazyScrollFoldEffect = defineAsyncComponent(() => import('./components/ScrollFoldEffect.vue'))
const LazyScroll3DTunnel = defineAsyncComponent(() => import('./components/Scroll3DTunnel.vue'))
const LazyScrollSpiralReveal = defineAsyncComponent(
  () => import('./components/ScrollSpiralReveal.vue')
)

// 全新终极创意动画组件 (2026-03 超级扩展)
const LazyScrollGlitchEffect = defineAsyncComponent(
  () => import('./components/ScrollGlitchEffect.vue')
)
const LazyScrollAuroraField = defineAsyncComponent(
  () => import('./components/ScrollAuroraField.vue')
)
const LazyScrollMagneticOrbitCards = defineAsyncComponent(
  () => import('./components/ScrollMagneticOrbitCards.vue')
)
const LazyScrollNeonTrailCards = defineAsyncComponent(
  () => import('./components/ScrollNeonTrailCards.vue')
)
const LazyScrollHologramGallery = defineAsyncComponent(
  () => import('./components/ScrollHologramGallery.vue')
)
const LazyScrollLiquidDistort = defineAsyncComponent(
  () => import('./components/ScrollLiquidDistort.vue')
)
const LazyScrollPrismCards = defineAsyncComponent(() => import('./components/ScrollPrismCards.vue'))
const LazyScrollTemporalDistortion = defineAsyncComponent(
  () => import('./components/ScrollTemporalDistortion.vue')
)

// 全新超级创意动画组件 (2026-03 终极扩展)
const LazyScrollCyberGrid = defineAsyncComponent(() => import('./components/ScrollCyberGrid.vue'))
const LazyScrollQuantumPortal = defineAsyncComponent(
  () => import('./components/ScrollQuantumPortal.vue')
)
const LazyScrollNeonMatrix = defineAsyncComponent(() => import('./components/ScrollNeonMatrix.vue'))
const LazyScrollCrystalPrism = defineAsyncComponent(
  () => import('./components/ScrollCrystalPrism.vue')
)
const LazyScrollAuroraAurora = defineAsyncComponent(
  () => import('./components/ScrollAuroraAurora.vue')
)
const LazyScrollGalaxyVortex = defineAsyncComponent(
  () => import('./components/ScrollGalaxyVortex.vue')
)
const LazyScrollInfinityMirrors = defineAsyncComponent(
  () => import('./components/ScrollInfinityMirrors.vue')
)
const LazyScrollNeonRain = defineAsyncComponent(() => import('./components/ScrollNeonRain.vue'))

// 全新创意滚动控制动画组件 (2026-03)
const LazyScrollParallaxCardsScroll = defineAsyncComponent(
  () => import('./components/ScrollParallaxCardsScroll.vue')
)
const LazyScrollTextCascadEffect = defineAsyncComponent(
  () => import('./components/ScrollTextCascadEffect.vue')
)
const LazyScrollCardMorphReveal = defineAsyncComponent(
  () => import('./components/ScrollCardMorphReveal.vue')
)
const LazyScrollSplitTransition = defineAsyncComponent(
  () => import('./components/ScrollSplitTransition.vue')
)

// 全新高级滚动控制动画组件 (2026-03)
const LazyScrollParallaxDepth = defineAsyncComponent(
  () => import('./components/ScrollParallaxDepth.vue')
)
const LazyScrollMagneticField = defineAsyncComponent(
  () => import('./components/ScrollMagneticField.vue')
)
const LazyScrollGeometricFlow = defineAsyncComponent(
  () => import('./components/ScrollGeometricFlow.vue')
)
const LazyScrollWaveReveal = defineAsyncComponent(() => import('./components/ScrollWaveReveal.vue'))

// 全新创意滚动控制动画组件 (2026-03)
const LazyScrollLiquidCards = defineAsyncComponent(
  () => import('./components/ScrollLiquidCards.vue')
)
const LazyScrollNeonGlow = defineAsyncComponent(
  () => import('./components/ScrollNeonGlow.vue')
)
const LazyScroll3DCube = defineAsyncComponent(
  () => import('./components/Scroll3DCube.vue')
)
const LazyScrollOrbitGallery = defineAsyncComponent(
  () => import('./components/ScrollOrbitGallery.vue')
)

// 全新高级滚动控制动画组件 (2026-03)
const LazyScrollHologramCards = defineAsyncComponent(
  () => import('./components/ScrollHologramCards.vue')
)
const LazyScrollParticleExplosion = defineAsyncComponent(
  () => import('./components/ScrollParticleExplosion.vue')
)
const LazyScrollMorphGallery = defineAsyncComponent(
  () => import('./components/ScrollMorphGallery.vue')
)

// 全新创意滚动控制动画组件 (2026-03)
const LazyScrollLiquidText = defineAsyncComponent(
  () => import('./components/ScrollLiquidText.vue')
)
const LazyScrollQuantumCards = defineAsyncComponent(
  () => import('./components/ScrollQuantumCards.vue')
)
const LazyScrollAuroraText = defineAsyncComponent(
  () => import('./components/ScrollAuroraText.vue')
)
const LazyScrollVortexCards = defineAsyncComponent(
  () => import('./components/ScrollVortexCards.vue')
)

// 全新创意滚动控制动画组件 (2026-03)
const LazyScrollPixelCards = defineAsyncComponent(
  () => import('./components/ScrollPixelCards.vue')
)
const LazyScrollRibbonCards = defineAsyncComponent(
  () => import('./components/ScrollRibbonCards.vue')
)
const LazyScrollOrigamiCards = defineAsyncComponent(
  () => import('./components/ScrollOrigamiCards.vue')
)
const LazyScrollGlassMorph = defineAsyncComponent(
  () => import('./components/ScrollGlassMorph.vue')
)

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
  showScrollCard3D: false,
  showScrollTextBlur: false,
  showScrollShapeElastic: false,
  showScrollStaggerWave: false,
  showScrollParallaxLayer: false,
  showScrollMagneticRotate: false,
  showScrollFluidPanels: false,
  showScrollGravityBounce: false,
  showScrollPixelCard: false,
  showScrollLaserLine: false,
  showScrollHologram: false,
  showScrollLiquidMorph: false,
  showScrollNeonPulse: false,
  showScrollTimeWarp: false,
  showScrollCrystalShatter: false,
  showQuantumWormhole: false,
  showMagneticOrbit: false,
  showSpringBounce: false,
  showScrollImageReveal: false,
  showScrollTextSplit: false,
  showScrollCardFloat: false,
  showScrollMagnify: false,
  showScrollParallaxText: false,
  showScroll3DGallery: false,
  showScrollImageFlow: false,
  showScrollTextCurtain: false,
  showScrollCardWave: false,
  showScrollImageDistort: false,
  showScrollText3D: false,
  showScrollCardPolaroid: false,
  showScrollInkReveal: false,
  showScrollParticleText: false,
  showScrollFoldCard: false,
  showScrollMagneticFluid: false,
  showScrollGlitchText: false,
  showScrollImageStackReveal: false,
  showScrollTextWaveSplit: false,
  showScrollCard3DFlip: false,
  showScrollParallaxGallery: false,
  showScrollElasticText: false,
  showScrollMagneticCards: false,
  showScrollInfiniteScroll: false,
  showScrollWaveCards: false,
  showScrollLensReveal: false,
  showScrollMorphPath: false,
  showScrollTimeline: false,
  showScrollTextScatter: false,
  showScrollCardStack: false,
  showScrollGradientFlow: false,
  showScrollParticleWave: false,
  showScrollImageMosaic: false,
  showScrollFluidText: false,
  showScrollMorphingCards: false,
  showScrollRippleCards: false,
  showScrollDistortGallery: false,
  showScrollMagneticGrid: false,
  showScrollFoldEffect: false,
  showScroll3DTunnel: false,
  showScrollSpiralReveal: false,
  showScrollGlitchEffect: false,
  showScrollAuroraField: false,
  showScrollMagneticOrbitCards: false,
  showScrollNeonTrailCards: false,
  showScrollHologramGallery: false,
  showScrollLiquidDistort: false,
  showScrollPrismCards: false,
  showScrollTemporalDistortion: false,
  showScrollCyberGrid: false,
  showScrollQuantumPortal: false,
  showScrollNeonMatrix: false,
  showScrollCrystalPrism: false,
  showScrollAuroraAurora: false,
  showScrollGalaxyVortex: false,
  showScrollInfinityMirrors: false,
  showScrollNeonRain: false,
  showScrollParallaxCardsScroll: false,
  showScrollTextCascadEffect: false,
  showScrollCardMorphReveal: false,
  showScrollSplitTransition: false,
  showScrollParallaxDepth: false,
  showScrollMagneticField: false,
  showScrollGeometricFlow: false,
  showScrollWaveReveal: false,
  showScrollLiquidCards: false,
  showScrollNeonGlow: false,
  showScroll3DCube: false,
  showScrollOrbitGallery: false,
  showScrollHologramCards: false,
  showScrollParticleExplosion: false,
  showScrollMorphGallery: false,
  showScrollCyberGrid: false,
  showScrollLiquidText: false,
  showScrollQuantumCards: false,
  showScrollAuroraText: false,
  showScrollVortexCards: false,
  showScrollPixelCards: false,
  showScrollRibbonCards: false,
  showScrollOrigamiCards: false,
  showScrollGlassMorph: false
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
  ['showMagneticOrbit', 'showSpringBounce'],
  [
    'showScrollCard3D',
    'showScrollTextBlur',
    'showScrollShapeElastic',
    'showScrollStaggerWave',
    'showScrollParallaxLayer'
  ],
  [
    'showScrollMagneticRotate',
    'showScrollFluidPanels',
    'showScrollGravityBounce',
    'showScrollPixelCard'
  ],
  ['showScrollLaserLine', 'showScrollHologram', 'showScrollLiquidMorph', 'showScrollNeonPulse'],
  ['showScrollTimeWarp', 'showScrollCrystalShatter'],
  ['showScrollImageReveal', 'showScrollTextSplit', 'showScrollCardFloat'],
  ['showScrollMagnify', 'showScrollParallaxText', 'showScroll3DGallery'],
  ['showScrollImageFlow', 'showScrollTextCurtain', 'showScrollCardWave'],
  ['showScrollImageDistort', 'showScrollText3D', 'showScrollCardPolaroid'],
  ['showScrollInkReveal', 'showScrollParticleText', 'showScrollFoldCard'],
  ['showScrollMagneticFluid', 'showScrollGlitchText'],
  ['showScrollImageStackReveal', 'showScrollTextWaveSplit', 'showScrollCard3DFlip'],
  ['showScrollParallaxGallery', 'showScrollElasticText', 'showScrollMagneticCards'],
  ['showScrollInfiniteScroll', 'showScrollWaveCards'],
  ['showScrollLensReveal', 'showScrollMorphPath', 'showScrollTimeline'],
  ['showScrollTextScatter', 'showScrollCardStack', 'showScrollGradientFlow'],
  ['showScrollParticleWave', 'showScrollImageMosaic'],
  ['showScrollFluidText', 'showScrollMorphingCards', 'showScrollRippleCards'],
  ['showScrollDistortGallery', 'showScrollMagneticGrid', 'showScrollFoldEffect'],
  ['showScroll3DTunnel', 'showScrollSpiralReveal'],
  ['showScrollGlitchEffect', 'showScrollAuroraField', 'showScrollMagneticOrbitCards'],
  ['showScrollNeonTrailCards', 'showScrollHologramGallery'],
  ['showScrollLiquidDistort', 'showScrollPrismCards'],
  ['showScrollTemporalDistortion'],
  [
    'showScrollCyberGrid',
    'showScrollQuantumPortal',
    'showScrollNeonMatrix',
    'showScrollCrystalPrism'
  ],
  ['showScrollAuroraAurora', 'showScrollGalaxyVortex', 'showScrollInfinityMirrors'],
  ['showScrollNeonRain'],
  ['showScrollParallaxCardsScroll', 'showScrollTextCascadEffect'],
  ['showScrollCardMorphReveal', 'showScrollSplitTransition'],
  ['showScrollParallaxDepth', 'showScrollMagneticField'],
  ['showScrollGeometricFlow', 'showScrollWaveReveal'],
  ['showScrollLiquidCards', 'showScrollNeonGlow'],
  ['showScroll3DCube', 'showScrollOrbitGallery'],
  ['showScrollHologramCards', 'showScrollParticleExplosion'],
  ['showScrollMorphGallery', 'showScrollCyberGrid'],
  ['showScrollLiquidText', 'showScrollQuantumCards'],
  ['showScrollAuroraText', 'showScrollVortexCards'],
  ['showScrollPixelCards', 'showScrollRibbonCards'],
  ['showScrollOrigamiCards', 'showScrollGlassMorph']
]

// 交叉观察器用于懒加载
let observer: IntersectionObserver | null = null
let loadInterval: number | null = null

const loadComponentsInBatch = (batchIndex: number) => {
  if (batchIndex >= componentBatches.length) {
    isLoading.value = false
    // 最后一批加载完成后，刷新所有ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)
    return
  }

  const batch = componentBatches[batchIndex]
  batch.forEach(keyName => {
    visibilityState.value[keyName] = true
  })

  // 每批加载后刷新ScrollTrigger，确保触发点正确
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)
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

  // 立即显示滚动动画组件，方便查看效果
  visibilityState.value.showScrollImageReveal = true
  visibilityState.value.showScrollTextSplit = true
  visibilityState.value.showScrollCardFloat = true
  visibilityState.value.showScrollMagnify = true
  visibilityState.value.showScrollParallaxText = true
  visibilityState.value.showScroll3DGallery = true

  // 立即显示超级高级滚动动画组件
  visibilityState.value.showScrollImageFlow = true
  visibilityState.value.showScrollTextCurtain = true
  visibilityState.value.showScrollCardWave = true

  // 立即显示极致高级滚动动画组件
  visibilityState.value.showScrollImageDistort = true
  visibilityState.value.showScrollText3D = true
  visibilityState.value.showScrollCardPolaroid = true

  // 立即显示全新高级滚动动画组件
  visibilityState.value.showScrollInkReveal = true
  visibilityState.value.showScrollParticleText = true
  visibilityState.value.showScrollFoldCard = true
  visibilityState.value.showScrollMagneticFluid = true
  visibilityState.value.showScrollGlitchText = true

  // 立即显示全新高级动画组件 (2026)
  visibilityState.value.showScrollImageStackReveal = true
  visibilityState.value.showScrollTextWaveSplit = true
  visibilityState.value.showScrollCard3DFlip = true
  visibilityState.value.showScrollParallaxGallery = true
  visibilityState.value.showScrollElasticText = true
  visibilityState.value.showScrollMagneticCards = true
  visibilityState.value.showScrollInfiniteScroll = true
  visibilityState.value.showScrollWaveCards = true

  // 立即显示全新创意动画组件 (2026-03)
  visibilityState.value.showScrollLensReveal = true
  visibilityState.value.showScrollMorphPath = true
  visibilityState.value.showScrollTimeline = true
  visibilityState.value.showScrollTextScatter = true
  visibilityState.value.showScrollCardStack = true
  visibilityState.value.showScrollGradientFlow = true
  visibilityState.value.showScrollParticleWave = true
  visibilityState.value.showScrollImageMosaic = true

  // 立即显示全新高级创意动画组件 (2026-03 扩展)
  visibilityState.value.showScrollFluidText = true
  visibilityState.value.showScrollMorphingCards = true
  visibilityState.value.showScrollRippleCards = true
  visibilityState.value.showScrollDistortGallery = true
  visibilityState.value.showScrollMagneticGrid = true
  visibilityState.value.showScrollFoldEffect = true
  visibilityState.value.showScroll3DTunnel = true
  visibilityState.value.showScrollSpiralReveal = true

  // 立即显示全新终极创意动画组件 (2026-03 超级扩展)
  visibilityState.value.showScrollGlitchEffect = true
  visibilityState.value.showScrollAuroraField = true
  visibilityState.value.showScrollMagneticOrbitCards = true
  visibilityState.value.showScrollNeonTrailCards = true
  visibilityState.value.showScrollHologramGallery = true
  visibilityState.value.showScrollLiquidDistort = true
  visibilityState.value.showScrollPrismCards = true
  visibilityState.value.showScrollTemporalDistortion = true

  // 立即显示全新超级创意动画组件 (2026-03 终极扩展)
  visibilityState.value.showScrollCyberGrid = true
  visibilityState.value.showScrollQuantumPortal = true
  visibilityState.value.showScrollNeonMatrix = true
  visibilityState.value.showScrollCrystalPrism = true
  visibilityState.value.showScrollAuroraAurora = true
  visibilityState.value.showScrollGalaxyVortex = true
  visibilityState.value.showScrollInfinityMirrors = true
  visibilityState.value.showScrollNeonRain = true

  // 立即显示全新创意滚动控制动画组件 (2026-03)
  visibilityState.value.showScrollParallaxCardsScroll = true
  visibilityState.value.showScrollTextCascadEffect = true
  visibilityState.value.showScrollCardMorphReveal = true
  visibilityState.value.showScrollSplitTransition = true

  // 立即显示全新高级滚动控制动画组件 (2026-03)
  visibilityState.value.showScrollParallaxDepth = true
  visibilityState.value.showScrollMagneticField = true
  visibilityState.value.showScrollGeometricFlow = true
  visibilityState.value.showScrollWaveReveal = true

  // 立即显示全新创意滚动控制动画组件 (2026-03)
  visibilityState.value.showScrollLiquidCards = true
  visibilityState.value.showScrollNeonGlow = true
  visibilityState.value.showScroll3DCube = true
  visibilityState.value.showScrollOrbitGallery = true

  // 立即显示全新高级滚动控制动画组件 (2026-03)
  visibilityState.value.showScrollHologramCards = true
  visibilityState.value.showScrollParticleExplosion = true
  visibilityState.value.showScrollMorphGallery = true
  visibilityState.value.showScrollCyberGrid = true

  // 立即显示全新创意滚动控制动画组件 (2026-03)
  visibilityState.value.showScrollLiquidText = true
  visibilityState.value.showScrollQuantumCards = true
  visibilityState.value.showScrollAuroraText = true
  visibilityState.value.showScrollVortexCards = true

  // 立即显示全新创意滚动控制动画组件 (2026-03)
  visibilityState.value.showScrollPixelCards = true
  visibilityState.value.showScrollRibbonCards = true
  visibilityState.value.showScrollOrigamiCards = true
  visibilityState.value.showScrollGlassMorph = true

  // 初始加载后刷新ScrollTrigger
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1000)
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
