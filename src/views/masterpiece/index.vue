<template>
  <div ref="wrapperRef" class="masterpiece-wrapper">
    <div style="width: 100%; height: 100vh"></div>

    <!-- 动态星空背景 -->
    <Starfield :star-count="200" />

    <!-- 主英雄区域 -->
    <ThreeDCube
      :size="300"
      :icons="['❄', '⚡', '🔥', '💧', '🌟', '🌙']"
      :rotate-speed="20"
      :hover-speed-multiplier="3"
    />

    <!-- 时间轴区域 -->
    <section class="timeline-section">
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <TimelineEvent
          v-for="(event, index) in timelineEvents"
          :key="index"
          :year="event.year"
          :title="event.title"
          :desc="event.desc"
          :index="index"
        />
      </div>
    </section>

    <!-- 返回顶部 -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { animationCards, timelineEvents } from './data'
import Starfield from './components/Starfield.vue'
import ThreeDCube from './components/ThreeDCube.vue'
import HeroSection from './components/HeroSection.vue'
import MagicCard from './components/MagicCard.vue'
import TimelineEvent from './components/TimelineEvent.vue'
import ParticleField from './components/ParticleField.vue'
import BackToTop from './components/BackToTop.vue'
import SectionHeader from './components/SectionHeader.vue'

const wrapperRef = ref<HTMLElement>()
</script>

<style scoped lang="scss">
.masterpiece-wrapper {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a2a 100%);
  color: #e2e8f0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  overflow-x: hidden;
  position: relative;
}

.experiment-section {
  padding: 120px 10%;
  position: relative;
  z-index: 1;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}

.timeline-section {
  padding: 120px 10%;
  position: relative;
  z-index: 1;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, rgba(167, 139, 250, 0.5), transparent);
  transform: translateX(-50%);
}

.footer {
  padding: 60px 10%;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
}

.footer-text {
  color: #64748b;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
