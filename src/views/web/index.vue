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
    <div class="components-container">
      <!-- 核心组件 - 立即加载 -->
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

        <!-- 滚动交互组件 -->
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

        <!-- 全新创意滚动控制动画组件 (2026-03 超级扩展) -->
        <LazyScrollEmberCards v-if="visibilityState.showScrollEmberCards" />
        <LazyScrollPlasmaWaves v-if="visibilityState.showScrollPlasmaWaves" />
        <LazyScrollHoloCards v-if="visibilityState.showScrollHoloCards" />
        <LazyScrollLiquidMetal v-if="visibilityState.showScrollLiquidMetal" />
        <LazyScrollVortexRing v-if="visibilityState.showScrollVortexRing" />
        <LazyScrollPrismGlow v-if="visibilityState.showScrollPrismGlow" />
        <LazyScrollElectricArc v-if="visibilityState.showScrollElectricArc" />
        <LazyScrollNeonGrid v-if="visibilityState.showScrollNeonGrid" />
        <LazyScrollIceCrystal v-if="visibilityState.showScrollIceCrystal" />
        <LazyScrollSolarFlare v-if="visibilityState.showScrollSolarFlare" />
        <LazyScrollAuroraNight v-if="visibilityState.showScrollAuroraNight" />
        <LazyScrollCosmicDust v-if="visibilityState.showScrollCosmicDust" />
        <LazyScrollFrostBreath v-if="visibilityState.showScrollFrostBreath" />
        <LazyScrollLavaFlow v-if="visibilityState.showScrollLavaFlow" />

        <!-- 全新超级创意动画组件 (2026-03 终极扩展第二批次) -->
        <LazyScrollEnergyOrb v-if="visibilityState.showScrollEnergyOrb" />
        <LazyScrollMorphingText v-if="visibilityState.showScrollMorphingText" />
        <LazyScrollQuantumLeap v-if="visibilityState.showScrollQuantumLeap" />
        <LazyScrollCyberPulse v-if="visibilityState.showScrollCyberPulse" />
        <LazyScrollStardustReveal v-if="visibilityState.showScrollStardustReveal" />
        <LazyScrollTemporalFlux v-if="visibilityState.showScrollTemporalFlux" />
        <LazyScrollQuantumTextEntangle v-if="visibilityState.showScrollQuantumTextEntangle" />
        <LazyScrollShadowText v-if="visibilityState.showScrollShadowText" />
        <LazyScrollLiquidTextMorph v-if="visibilityState.showScrollLiquidTextMorph" />
        <LazyScrollPixelTextReveal v-if="visibilityState.showScrollPixelTextReveal" />
        <LazyScrollHolographicText v-if="visibilityState.showScrollHolographicText" />
        <LazyScrollPortalText v-if="visibilityState.showScrollPortalText" />
        <LazyScrollPrismText v-if="visibilityState.showScrollPrismText" />
        <LazyScrollElasticText v-if="visibilityState.showScrollElasticText" />
        <LazyScrollNeonText v-if="visibilityState.showScrollNeonText" />
        <LazyScrollCyberText v-if="visibilityState.showScrollCyberText" />
        <LazyScrollMatrixText v-if="visibilityState.showScrollMatrixText" />
        <LazyScrollHoloText v-if="visibilityState.showScrollHoloText" />
        <LazyScrollFireText v-if="visibilityState.showScrollFireText" />
        <LazyScrollIceText v-if="visibilityState.showScrollIceText" />

        <LazyScrollThunderText v-if="visibilityState.showScrollThunderText" />
        <LazyScrollStarText v-if="visibilityState.showScrollStarText" />
        <LazyScrollRainText v-if="visibilityState.showScrollRainText" />
        <LazyScrollCursorFollower v-if="visibilityState.showScrollCursorFollower" />
        <LazyScrollMagnetic v-if="visibilityState.showScrollMagnetic" />
        <LazyScrollStickyReveal v-if="visibilityState.showScrollStickyReveal" />
        <LazyScrollParallaxCursor v-if="visibilityState.showScrollParallaxCursor" />
        <LazyScrollScaleOnScroll v-if="visibilityState.showScrollScaleOnScroll" />
        <LazyScrollGlitch v-if="visibilityState.showScrollGlitch" />
        <LazyScrollInvert v-if="visibilityState.showScrollInvert" />
        <LazyScrollContrast v-if="visibilityState.showScrollContrast" />
      <LazyScrollHoverReveal v-if="visibilityState.showScrollHoverReveal" />
      <LazyScrollDragReveal v-if="visibilityState.showScrollDragReveal" />
      <LazyScrollPinchZoom v-if="visibilityState.showScrollPinchZoom" />
      <LazyScrollSwipeUp v-if="visibilityState.showScrollSwipeUp" />
      <LazyScrollThemeSwitch v-if="visibilityState.showScrollThemeSwitch" />
      <LazyScrollAccentColor v-if="visibilityState.showScrollAccentColor" />
      <LazyScrollElasticMorph v-if="visibilityState.showScrollElasticMorph" />
      <LazyScrollInkDiffusion v-if="visibilityState.showScrollInkDiffusion" />
      <LazyScrollLiquidButtons v-if="visibilityState.showScrollLiquidButtons" />
      <LazyScrollPaperFold v-if="visibilityState.showScrollPaperFold" />
      <LazyScrollDynamicShadow v-if="visibilityState.showScrollDynamicShadow" />
      <LazyScrollTextWaveMorph v-if="visibilityState.showScrollTextWaveMorph" />
      <LazyScrollSvgPathDraw v-if="visibilityState.showScrollSvgPathDraw" />
      <LazyScrollBlendModeMix v-if="visibilityState.showScrollBlendModeMix" />
      <LazyScrollGridMorph v-if="visibilityState.showScrollGridMorph" />
      <LazyScrollPhysicsBounce v-if="visibilityState.showScrollPhysicsBounce" />
      <LazyScrollBackgroundPattern v-if="visibilityState.showScrollBackgroundPattern" />
      <LazyScrollStorytelling v-if="visibilityState.showScrollStorytelling" />
      <LazyScrollLoadingArt v-if="visibilityState.showScrollLoadingArt" />
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

let isShow = ref(true)

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
const LazyScrollWaveReveal = defineAsyncComponent(() => import('./components/ScrollWaveReveal.vue'))

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
const LazyScrollTemporalDistortion = defineAsyncComponent(
  () => import('./components/ScrollTemporalDistortion.vue')
)

// 全新高级创意动画组件 (2026-03 扩展)
const LazyScrollHologramText = defineAsyncComponent(
  () => import('./components/ScrollHologramText.vue')
)
const LazyScrollSplitReveal = defineAsyncComponent(
  () => import('./components/ScrollSplitReveal.vue')
)
const LazyScrollTextScramble = defineAsyncComponent(
  () => import('./components/ScrollTextScramble.vue')
)
const LazyScrollWavyText = defineAsyncComponent(() => import('./components/ScrollWavyText.vue'))
const LazyScrollTextShadow = defineAsyncComponent(() => import('./components/ScrollTextShadow.vue'))
const LazyScrollGradientText = defineAsyncComponent(
  () => import('./components/ScrollGradientText.vue')
)
const LazyScrollOutlineText = defineAsyncComponent(
  () => import('./components/ScrollOutlineText.vue')
)
const LazyScrollTextMask = defineAsyncComponent(() => import('./components/ScrollTextMask.vue'))
const LazyScrollTextGlow = defineAsyncComponent(() => import('./components/ScrollTextGlow.vue'))
const LazyScrollCardZoom = defineAsyncComponent(() => import('./components/ScrollCardZoom.vue'))
const LazyScrollCardRotate3D = defineAsyncComponent(
  () => import('./components/ScrollCardRotate3D.vue')
)
const LazyScrollCardBorder = defineAsyncComponent(() => import('./components/ScrollCardBorder.vue'))
const LazyScrollCardMorph = defineAsyncComponent(() => import('./components/ScrollCardMorph.vue'))
const LazyScrollCardGlass = defineAsyncComponent(() => import('./components/ScrollCardGlass.vue'))
const LazyScrollCardRipple = defineAsyncComponent(() => import('./components/ScrollCardRipple.vue'))
const LazyScrollShapeShift = defineAsyncComponent(() => import('./components/ScrollShapeShift.vue'))
const LazyScrollElasticScale = defineAsyncComponent(
  () => import('./components/ScrollElasticScale.vue')
)
const LazyScrollPerspective = defineAsyncComponent(
  () => import('./components/ScrollPerspective.vue')
)
const LazyScrollParallaxLayers = defineAsyncComponent(
  () => import('./components/ScrollParallaxLayers.vue')
)
const LazyScrollImageClip = defineAsyncComponent(() => import('./components/ScrollImageClip.vue'))
const LazyScrollImageBlur = defineAsyncComponent(() => import('./components/ScrollImageBlur.vue'))
const LazyScrollImageSepia = defineAsyncComponent(() => import('./components/ScrollImageSepia.vue'))
const LazyScrollImageTilt = defineAsyncComponent(() => import('./components/ScrollImageTilt.vue'))
const LazyScrollTextFlow = defineAsyncComponent(() => import('./components/ScrollTextFlow.vue'))
const LazyScrollTextColumns = defineAsyncComponent(
  () => import('./components/ScrollTextColumns.vue')
)
const LazyScrollTextJustify = defineAsyncComponent(
  () => import('./components/ScrollTextJustify.vue')
)
const LazyScrollNavMorph = defineAsyncComponent(() => import('./components/ScrollNavMorph.vue'))
const LazyScrollBreadcrumb = defineAsyncComponent(() => import('./components/ScrollBreadcrumb.vue'))
const LazyScrollTabSwitch = defineAsyncComponent(() => import('./components/ScrollTabSwitch.vue'))
const LazyScrollFloatingNav = defineAsyncComponent(
  () => import('./components/ScrollFloatingNav.vue')
)
const LazyScrollEnergyOrb = defineAsyncComponent(() => import('./components/ScrollEnergyOrb.vue'))
const LazyScrollMorphingText = defineAsyncComponent(
  () => import('./components/ScrollMorphingText.vue')
)
const LazyScrollQuantumLeap = defineAsyncComponent(
  () => import('./components/ScrollQuantumLeap.vue')
)
const LazyScrollCyberPulse = defineAsyncComponent(() => import('./components/ScrollCyberPulse.vue'))
const LazyScrollStardustReveal = defineAsyncComponent(
  () => import('./components/ScrollStardustReveal.vue')
)
const LazyScrollTemporalFlux = defineAsyncComponent(
  () => import('./components/ScrollTemporalFlux.vue')
)
const LazyScrollQuantumTextEntangle = defineAsyncComponent(
  () => import('./components/ScrollQuantumTextEntangle.vue')
)
const LazyScrollShadowText = defineAsyncComponent(() => import('./components/ScrollShadowText.vue'))
const LazyScrollLiquidTextMorph = defineAsyncComponent(
  () => import('./components/ScrollLiquidTextMorph.vue')
)
const LazyScrollPixelTextReveal = defineAsyncComponent(
  () => import('./components/ScrollPixelTextReveal.vue')
)
const LazyScrollHolographicText = defineAsyncComponent(
  () => import('./components/ScrollHolographicText.vue')
)
const LazyScrollPortalText = defineAsyncComponent(() => import('./components/ScrollPortalText.vue'))
const LazyScrollPrismText = defineAsyncComponent(() => import('./components/ScrollPrismText.vue'))
const LazyScrollNeonText = defineAsyncComponent(() => import('./components/ScrollNeonText.vue'))
const LazyScrollCyberText = defineAsyncComponent(() => import('./components/ScrollCyberText.vue'))
const LazyScrollMatrixText = defineAsyncComponent(() => import('./components/ScrollMatrixText.vue'))
const LazyScrollHoloText = defineAsyncComponent(() => import('./components/ScrollHoloText.vue'))
const LazyScrollFireText = defineAsyncComponent(() => import('./components/ScrollFireText.vue'))
const LazyScrollIceText = defineAsyncComponent(() => import('./components/ScrollIceText.vue'))
const LazyScrollThunderText = defineAsyncComponent(
  () => import('./components/ScrollThunderText.vue')
)
const LazyScrollStarText = defineAsyncComponent(() => import('./components/ScrollStarText.vue'))
const LazyScrollRainText = defineAsyncComponent(() => import('./components/ScrollRainText.vue'))
const LazyScrollCursorFollower = defineAsyncComponent(
  () => import('./components/ScrollCursorFollower.vue')
)
const LazyScrollMagnetic = defineAsyncComponent(() => import('./components/ScrollMagnetic.vue'))
const LazyScrollStickyReveal = defineAsyncComponent(
  () => import('./components/ScrollStickyReveal.vue')
)
const LazyScrollParallaxCursor = defineAsyncComponent(
  () => import('./components/ScrollParallaxCursor.vue')
)
const LazyScrollScaleOnScroll = defineAsyncComponent(
  () => import('./components/ScrollScaleOnScroll.vue')
)
const LazyScrollGlitch = defineAsyncComponent(() => import('./components/ScrollGlitch.vue'))
const LazyScrollInvert = defineAsyncComponent(() => import('./components/ScrollInvert.vue'))
const LazyScrollHueRotate = defineAsyncComponent(() => import('./components/ScrollHueRotate.vue'))
const LazyScrollContrast = defineAsyncComponent(() => import('./components/ScrollContrast.vue'))
const LazyScrollHoverReveal = defineAsyncComponent(
  () => import('./components/ScrollHoverReveal.vue')
)
const LazyScrollDragReveal = defineAsyncComponent(() => import('./components/ScrollDragReveal.vue'))
const LazyScrollPinchZoom = defineAsyncComponent(() => import('./components/ScrollPinchZoom.vue'))
const LazyScrollSwipeUp = defineAsyncComponent(() => import('./components/ScrollSwipeUp.vue'))
const LazyScrollThemeSwitch = defineAsyncComponent(
  () => import('./components/ScrollThemeSwitch.vue')
)
const LazyScrollAccentColor = defineAsyncComponent(
  () => import('./components/ScrollAccentColor.vue')
)
const LazyScrollElasticMorph = defineAsyncComponent(
  () => import('./components/ScrollElasticMorph.vue')
)
const LazyScrollInkDiffusion = defineAsyncComponent(
  () => import('./components/ScrollInkDiffusion.vue')
)
const LazyScrollLiquidButtons = defineAsyncComponent(
  () => import('./components/ScrollLiquidButtons.vue')
)
const LazyScrollOrigamiCards = defineAsyncComponent(
  () => import('./components/ScrollOrigamiCards.vue')
)
const LazyScrollGlassMorph = defineAsyncComponent(() => import('./components/ScrollGlassMorph.vue'))
const LazyScrollEmberCards = defineAsyncComponent(() => import('./components/ScrollEmberCards.vue'))
const LazyScrollPlasmaWaves = defineAsyncComponent(
  () => import('./components/ScrollPlasmaWaves.vue')
)
const LazyScrollQuantumCards = defineAsyncComponent(
  () => import('./components/ScrollQuantumCards.vue')
)
const LazyScrollHoloCards = defineAsyncComponent(() => import('./components/ScrollHoloCards.vue'))
const LazyScrollLiquidMetal = defineAsyncComponent(
  () => import('./components/ScrollLiquidMetal.vue')
)
const LazyScrollVortexRing = defineAsyncComponent(() => import('./components/ScrollVortexRing.vue'))
const LazyScrollPrismGlow = defineAsyncComponent(() => import('./components/ScrollPrismGlow.vue'))
const LazyScrollElectricArc = defineAsyncComponent(
  () => import('./components/ScrollElectricArc.vue')
)
const LazyScrollNeonGrid = defineAsyncComponent(() => import('./components/ScrollNeonGrid.vue'))
const LazyScrollIceCrystal = defineAsyncComponent(() => import('./components/ScrollIceCrystal.vue'))
const LazyScrollSolarFlare = defineAsyncComponent(() => import('./components/ScrollSolarFlare.vue'))
const LazyScrollAuroraNight = defineAsyncComponent(
  () => import('./components/ScrollAuroraNight.vue')
)
const LazyScrollCosmicDust = defineAsyncComponent(() => import('./components/ScrollCosmicDust.vue'))
const LazyScrollFrostBreath = defineAsyncComponent(
  () => import('./components/ScrollFrostBreath.vue')
)
const LazyScrollLavaFlow = defineAsyncComponent(() => import('./components/ScrollLavaFlow.vue'))
const LazyScrollPaperFold = defineAsyncComponent(() => import('./components/ScrollPaperFold.vue'))
const LazyScrollDynamicShadow = defineAsyncComponent(
  () => import('./components/ScrollDynamicShadow.vue')
)
const LazyScrollTextWaveMorph = defineAsyncComponent(
  () => import('./components/ScrollTextWaveMorph.vue')
)
const LazyScrollSvgPathDraw = defineAsyncComponent(
  () => import('./components/ScrollSvgPathDraw.vue')
)
const LazyScrollBlendModeMix = defineAsyncComponent(
  () => import('./components/ScrollBlendModeMix.vue')
)
const LazyScrollGridMorph = defineAsyncComponent(() => import('./components/ScrollGridMorph.vue'))
const LazyScrollPhysicsBounce = defineAsyncComponent(
  () => import('./components/ScrollPhysicsBounce.vue')
)
const LazyScrollBackgroundPattern = defineAsyncComponent(
  () => import('./components/ScrollBackgroundPattern.vue')
)
const LazyScrollStorytelling = defineAsyncComponent(
  () => import('./components/ScrollStorytelling.vue')
)
const LazyScrollLoadingArt = defineAsyncComponent(
  () => import('./components/ScrollLoadingArt.vue')
)
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
const LazyScrollParallaxDepth = defineAsyncComponent(
  () => import('./components/ScrollParallaxDepth.vue')
)
const LazyScrollMagneticField = defineAsyncComponent(
  () => import('./components/ScrollMagneticField.vue')
)
const LazyScrollGeometricFlow = defineAsyncComponent(
  () => import('./components/ScrollGeometricFlow.vue')
)
const LazyScrollLiquidCards = defineAsyncComponent(
  () => import('./components/ScrollLiquidCards.vue')
)
const LazyScrollNeonGlow = defineAsyncComponent(() => import('./components/ScrollNeonGlow.vue'))
const LazyScroll3DCube = defineAsyncComponent(() => import('./components/Scroll3DCube.vue'))
const LazyScrollOrbitGallery = defineAsyncComponent(
  () => import('./components/ScrollOrbitGallery.vue')
)
const LazyScrollHologramCards = defineAsyncComponent(
  () => import('./components/ScrollHologramCards.vue')
)
const LazyScrollMorphGallery = defineAsyncComponent(
  () => import('./components/ScrollMorphGallery.vue')
)
const LazyScrollAuroraText = defineAsyncComponent(() => import('./components/ScrollAuroraText.vue'))
const LazyScrollVortexCards = defineAsyncComponent(
  () => import('./components/ScrollVortexCards.vue')
)
const LazyScrollPixelCards = defineAsyncComponent(() => import('./components/ScrollPixelCards.vue'))
const LazyScrollRibbonCards = defineAsyncComponent(
  () => import('./components/ScrollRibbonCards.vue')
)

// 组件显示状态
const isLoading = ref(true)

// 性能优化：使用防抖控制ScrollTrigger刷新
let refreshTimeout: ReturnType<typeof setTimeout> | null = null

const debounceRefresh = () => {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
  }
  refreshTimeout = window.setTimeout(() => {
    ScrollTrigger.refresh()
    refreshTimeout = null
  }, 500) // 500ms防抖延迟
}

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
  showScrollLiquidText: false,
  showScrollQuantumCards: false,
  showScrollAuroraText: false,
  showScrollVortexCards: false,
  showScrollPixelCards: false,
  showScrollRibbonCards: false,
  showScrollOrigamiCards: false,
  showScrollGlassMorph: false,
  showScrollEmberCards: false,
  showScrollPlasmaWaves: false,
  showScrollHoloCards: false,
  showScrollLiquidMetal: false,
  showScrollVortexRing: false,
  showScrollPrismGlow: false,
  showScrollElectricArc: false,
  showScrollNeonGrid: false,
  showScrollIceCrystal: false,
  showScrollSolarFlare: false,
  showScrollAuroraNight: false,
  showScrollCosmicDust: false,
  showScrollFrostBreath: false,
  showScrollLavaFlow: false,
  showScrollCursorFollower: false,
  showScrollMagnetic: false,
  showScrollStickyReveal: false,
  showScrollParallaxCursor: false,
  showScrollScaleOnScroll: false,
  showScrollGlitch: false,
  showScrollInvert: false,
  showScrollHueRotate: false,
  showScrollContrast: false,
  showScrollHoverReveal: false,
  showScrollDragReveal: false,
  showScrollPinchZoom: false,
  showScrollSwipeUp: false,
  showScrollThemeSwitch: false,
  showScrollAccentColor: false,
  showScrollElasticMorph: false,
  showScrollInkDiffusion: false,
  showScrollLiquidButtons: false,
  showScrollPaperFold: false,
  showScrollDynamicShadow: false,
  showScrollParallaxLayers: false,
  showScrollImageClip: false,
  showScrollImageBlur: false,
  showScrollImageSepia: false,
  showScrollImageTilt: false,
  showScrollTextFlow: false,
  showScrollTextColumns: false,
  showScrollTextJustify: false,
  showScrollNavMorph: false,
  showScrollBreadcrumb: false,
  showScrollTabSwitch: false,
  showScrollFloatingNav: false,
  showScrollEnergyOrb: false,
  showScrollMorphingText: false,
  showScrollQuantumLeap: false,
  showScrollCyberPulse: false,
  showScrollStardustReveal: false,
  showScrollTemporalFlux: false,
  showScrollQuantumTextEntangle: false,
  showScrollShadowText: false,
  showScrollLiquidTextMorph: false,
  showScrollPixelTextReveal: false,
  showScrollHolographicText: false,
  showScrollPortalText: false,
  showScrollPrismText: false,
  showScrollNeonText: false,
  showScrollCyberText: false,
  showScrollMatrixText: false,
  showScrollHoloText: false,
  showScrollFireText: false,
  showScrollIceText: false,
  showScrollThunderText: false,
  showScrollStarText: false,
  showScrollRainText: false,
  showScrollSplitReveal: false,
  showScrollTextScramble: false,
  showScrollWavyText: false,
  showScrollTextShadow: false,
  showScrollGradientText: false,
  showScrollOutlineText: false,
  showScrollTextMask: false,
  showScrollTextGlow: false,
  showScrollCardZoom: false,
  showScrollCardRotate3D: false,
  showScrollCardBorder: false,
  showScrollCardMorph: false,
  showScrollCardGlass: false,
  showScrollCardRipple: false,
  showScrollShapeShift: false,
  showScrollElasticScale: false,
  showScrollPerspective: false,
  showScrollPaperFold: false,
  showScrollDynamicShadow: false,
  showScrollTextWaveMorph: false,
  showScrollSvgPathDraw: false,
  showScrollBlendModeMix: false,
  showScrollGridMorph: false,
  showScrollPhysicsBounce: false,
  showScrollBackgroundPattern: false,
  showScrollStorytelling: false,
  showScrollLoadingArt: false
})

// 类型定义
type VisibilityStateKey = keyof typeof visibilityState.value
type ComponentBatchItem = {
  keys: VisibilityStateKey[]
  delay: number
}

// 组件可见性配置 - 使用统一配置管理
const componentVisibilityConfig: {
  immediate: VisibilityStateKey[]
  delayed: ComponentBatchItem[]
} = {
  // 立即显示的组件（高性能、优先级高）
  immediate: [
    // 基础组件
    'showLiquidWave',
    'showParticleExplosion',
    'showNumberCounter',
    'showBouncingBall',
    'showCircularProgress',
    'showTextReveal',
    'showMagneticButton',
    'showParallaxCards',
    'showRotatingRings',
    'showTextDistortion',
    'showGlassmorphismGallery',
    'showInfiniteScrollText',
    'showHolographic3D',
    'showNeonGlowText',
    'showMorphingShapes',
    'showScrollCursorFollower',
    'showScrollMagnetic',
    'showScrollStickyReveal',
    'showScrollParallaxCursor',
    'showScrollScaleOnScroll',
    'showScrollGlitch',
    'showScrollInvert',
    'showScrollHueRotate',
    'showScrollContrast',
    'showScrollHoverReveal',
    'showScrollDragReveal',
    'showScrollPinchZoom',
    'showScrollSwipeUp',
    'showScrollThemeSwitch',
    'showScrollAccentColor',
    'showScrollElasticMorph',
    'showScrollInkDiffusion',
    'showScrollLiquidButtons',
    // 创意特效组件
    'showCyberpunkCity',
    'showDNAHelix',
    'showAuroraBorealis',
    'showGalaxySpiral',
    'showOceanWaves',
    'showQuantumField',
    'showVolcanicEruption',
    'showSolarSystem',
    'showTornado',
    // 滚动交互组件
    'showParallaxZoomGallery',
    'showRotationCarousel',
    'showFadeInStack',
    'showScaleWave',
    'showHorizontalScroll',
    'showDiagonalParallax',
    'showRotationGallery',
    'showTextScroll',
    'showScaleShapes',
    'showGradientFlow',
    'showCascadeParallax',
    'showFloatingImages',
    'showStaggerGrid',
    'showStaggerTimeline',
    'showStaggerCards',
    'showCircleGallery',
    'showFoldEffect',
    'showMorphGrid',
    'showWaveReveal',
    'showZoomPan',
    'showRotateScale',
    'showParallaxScroll',
    'showFixedParallax',
    'showTimelineSequence',
    'showOverlappingTimeline',
    'showNestedTimeline',
    'showFlipCards',
    'showSlidingPanels',
    'showMotionPathCards',
    'showCircleMotion',
    'showInfinityMotion',
    'showNebulaVortex',
    'showAccordionCards',
    'showImageComparison',
    'showHorizontalScrollCards',
    'showQuantumWormhole',
    'showMagneticOrbit',
    'showSpringBounce',
    // Scroll系列组件
    'showScrollReveal',
    'showScrollCard3D',
    'showScrollTextBlur',
    'showScrollShapeElastic',
    'showScrollStaggerWave',
    'showScrollParallaxLayer',
    'showScrollMagneticRotate',
    'showScrollFluidPanels',
    'showScrollGravityBounce',
    'showScrollPixelCard',
    'showScrollLaserLine',
    'showScrollHologram',
    'showScrollLiquidMorph',
    'showScrollNeonPulse',
    'showScrollTimeWarp',
    'showScrollCrystalShatter',
    'showScrollImageReveal',
    'showScrollTextSplit',
    'showScrollCardFloat',
    'showScrollMagnify',
    'showScrollParallaxText',
    'showScroll3DGallery',
    'showScrollImageFlow',
    'showScrollTextCurtain',
    'showScrollCardWave',
    'showScrollImageDistort',
    'showScrollText3D',
    'showScrollCardPolaroid',
    'showScrollInkReveal',
    'showScrollParticleText',
    'showScrollFoldCard',
    'showScrollMagneticFluid',
    'showScrollGlitchText',
    'showScrollImageStackReveal',
    'showScrollTextWaveSplit',
    'showScrollCard3DFlip',
    'showScrollParallaxGallery',
    'showScrollElasticText',
    'showScrollMagneticCards',
    'showScrollInfiniteScroll',
    'showScrollWaveCards',
    'showScrollLensReveal',
    'showScrollMorphPath',
    'showScrollTimeline',
    'showScrollTextScatter',
    'showScrollCardStack',
    'showScrollGradientFlow',
    'showScrollParticleWave',
    'showScrollImageMosaic',
    'showScrollFluidText',
    'showScrollMorphingCards',
    'showScrollRippleCards',
    'showScrollDistortGallery',
    'showScrollMagneticGrid',
    'showScrollFoldEffect',
    'showScroll3DTunnel',
    'showScrollSpiralReveal',
    'showScrollGlitchEffect',
    'showScrollAuroraField',
    'showScrollMagneticOrbitCards',
    'showScrollNeonTrailCards',
    'showScrollHologramGallery',
    'showScrollLiquidDistort',
    'showScrollPrismCards',
    'showScrollTemporalDistortion',
    'showScrollCyberGrid',
    'showScrollQuantumPortal',
    'showScrollNeonMatrix',
    'showScrollCrystalPrism',
    'showScrollAuroraAurora',
    'showScrollGalaxyVortex',
    'showScrollInfinityMirrors',
    'showScrollNeonRain',
    'showScrollParallaxCardsScroll',
    'showScrollTextCascadEffect',
    'showScrollCardMorphReveal',
    'showScrollSplitTransition',
    'showScrollParallaxDepth',
    'showScrollMagneticField',
    'showScrollGeometricFlow',
    'showScrollWaveReveal',
    'showScrollLiquidCards',
    'showScrollNeonGlow',
    'showScroll3DCube',
    'showScrollOrbitGallery',
    'showScrollHologramCards',
    'showScrollParticleExplosion',
    'showScrollMorphGallery',
    'showScrollLiquidText',
    'showScrollQuantumCards',
    'showScrollAuroraText',
    'showScrollVortexCards',
    'showScrollPixelCards',
    'showScrollRibbonCards',
    'showScrollOrigamiCards',
    'showScrollGlassMorph',
    'showScrollEmberCards',
    'showScrollPlasmaWaves',
    'showScrollHoloCards',
    'showScrollLiquidMetal',
    'showScrollVortexRing',
    'showScrollPrismGlow',
    'showScrollElectricArc',
    'showScrollNeonGrid',
    'showScrollIceCrystal',
    'showScrollSolarFlare',
    'showScrollAuroraNight',
    'showScrollCosmicDust',
    'showScrollFrostBreath',
    'showScrollLavaFlow',
    'showScrollPaperFold',
    'showScrollDynamicShadow',
    'showScrollTextWaveMorph',
    'showScrollSvgPathDraw',
    'showScrollBlendModeMix',
    'showScrollGridMorph',
    'showScrollPhysicsBounce',
    'showScrollBackgroundPattern',
    'showScrollStorytelling',
    'showScrollLoadingArt',
    'showScrollParallaxLayers',
    'showScrollImageClip',
    'showScrollImageBlur',
    'showScrollImageSepia',
    'showScrollImageTilt',
    'showScrollTextFlow',
    'showScrollTextColumns',
    'showScrollTextJustify',
    'showScrollNavMorph',
    'showScrollBreadcrumb',
    'showScrollTabSwitch',
    'showScrollFloatingNav'
  ],
  // 延迟加载的组件（性能较重的Canvas动画）
  delayed: [
    { keys: ['showScrollMorphingText'], delay: 1500 },
    { keys: ['showScrollEnergyOrb'], delay: 2000 },
    { keys: ['showScrollQuantumLeap'], delay: 3000 },
    { keys: ['showScrollCyberPulse', 'showScrollTemporalFlux'], delay: 4000 },
    { keys: ['showScrollStardustReveal'], delay: 5000 },
    { keys: ['showScrollQuantumTextEntangle'], delay: 6000 },
    { keys: ['showScrollShadowText'], delay: 7000 },
    { keys: ['showScrollLiquidTextMorph'], delay: 8000 },
    { keys: ['showScrollPixelTextReveal'], delay: 9000 },
    { keys: ['showScrollHolographicText'], delay: 10000 },
    { keys: ['showScrollPortalText'], delay: 11000 },
    { keys: ['showScrollPrismText'], delay: 12000 },
    { keys: ['showScrollNeonText'], delay: 14000 },
    { keys: ['showScrollCyberText'], delay: 15000 },
    { keys: ['showScrollMatrixText'], delay: 16000 },
    { keys: ['showScrollHoloText'], delay: 17000 },
    { keys: ['showScrollFireText'], delay: 18000 },
    { keys: ['showScrollIceText'], delay: 19000 },
    { keys: ['showScrollThunderText'], delay: 20000 },
    { keys: ['showScrollStarText'], delay: 21000 },
    { keys: ['showScrollRainText'], delay: 23000 },
    { keys: ['showScrollSplitReveal'], delay: 25000 },
    { keys: ['showScrollTextScramble'], delay: 26000 },
    { keys: ['showScrollWavyText'], delay: 27000 },
    { keys: ['showScrollTextShadow'], delay: 28000 },
    { keys: ['showScrollGradientText'], delay: 29000 },
    { keys: ['showScrollOutlineText'], delay: 29500 },
    { keys: ['showScrollTextMask'], delay: 30000 },
    { keys: ['showScrollTextGlow'], delay: 30500 },
    { keys: ['showScrollCardZoom'], delay: 31500 },
    { keys: ['showScrollCardRotate3D'], delay: 32500 },
    { keys: ['showScrollCardBorder'], delay: 33500 },
    { keys: ['showScrollCardMorph'], delay: 34500 },
    { keys: ['showScrollCardGlass'], delay: 35500 },
    { keys: ['showScrollCardRipple'], delay: 36500 },
    { keys: ['showScrollShapeShift'], delay: 37500 },
    { keys: ['showScrollElasticScale'], delay: 38500 },
    { keys: ['showScrollPerspective'], delay: 39500 },
    { keys: ['showScrollPaperFold'], delay: 40500 },
    { keys: ['showScrollDynamicShadow'], delay: 41500 },
    { keys: ['showScrollTextWaveMorph'], delay: 42500 },
    { keys: ['showScrollSvgPathDraw'], delay: 43500 },
    { keys: ['showScrollBlendModeMix'], delay: 44500 },
    { keys: ['showScrollGridMorph'], delay: 45500 },
    { keys: ['showScrollPhysicsBounce'], delay: 46500 },
    { keys: ['showScrollBackgroundPattern'], delay: 47500 },
    { keys: ['showScrollStorytelling'], delay: 48500 }
  ]
}

onMounted(() => {
  // 页面标题入场动画 - 增强版
  const pageTitle = document.querySelector('.page-title')
  if (pageTitle) {
    gsap.from(pageTitle, {
      y: 150,
      opacity: 0,
      scale: 0.8,
      rotationX: -45,
      duration: 1.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.page-header',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  }

  // 页面副标题入场动画 - 增强版
  const pageSubtitle = document.querySelector('.page-subtitle')
  if (pageSubtitle) {
    gsap.from(pageSubtitle, {
      y: 100,
      opacity: 0,
      scale: 0.7,
      rotationY: 30,
      duration: 1.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.page-header',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      delay: 0.2
    })
  }

  // 核心组件入场动画 - 增强版（带stagger）
  const coreComponents = gsap.utils.toArray('.components-container > div > *:not([v-if])')
  if (coreComponents.length > 0) {
    gsap.from(coreComponents, {
      y: 200,
      opacity: 0,
      scale: 0.6,
      rotation: -15,
      duration: 1.5,
      ease: 'back.out(1.7)',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.components-container',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  }

  // 延迟一段时间后开始加载，确保页面布局稳定
  setTimeout(() => {
    isLoading.value = false
  }, 1000)

  // 立即显示高性能组件
  componentVisibilityConfig.immediate.forEach(key => {
    visibilityState.value[key] = true
  })

  // 刷新ScrollTrigger以显示立即加载的组件
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1500)

  // 延迟加载性能较重的组件 - 增强版入场动画
  componentVisibilityConfig.delayed.forEach(({ keys, delay }) => {
    setTimeout(() => {
      keys.forEach(key => {
        visibilityState.value[key] = true
      })
      // 每批加载后刷新ScrollTrigger
      debounceRefresh()

      // 为新加载的组件添加入场动画
      setTimeout(() => {
        const newComponents = document.querySelectorAll('.components-container > div > div[v-if]')
        if (newComponents.length > 0) {
          gsap.from(newComponents, {
            y: 250,
            opacity: 0,
            scale: 0.5,
            rotationX: 45,
            rotationY: -20,
            duration: 1.8,
            ease: 'back.out(1.7)',
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.components-container',
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          })
        }
      }, 100)
    }, delay)
  })

  // 所有组件加载完成后刷新ScrollTrigger
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 40000)
})

onUnmounted(() => {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout)
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill()) // 清理所有ScrollTrigger
  gsap.killTweensOf(['.page-title', '.page-subtitle', '.components-container > div > *']) // 清理所有动画
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
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  animation: subtitleFadeIn 1s ease-out 0.3s both;
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

.components-container {
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
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
