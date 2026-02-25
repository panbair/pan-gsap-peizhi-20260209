<template>
  <div class="home-container">
    <!-- Tab 切换栏 -->
    <div class="tab-bar">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </div>

    <!-- Tab 内容区 -->
    <div class="tab-content">
      <CssAnimation v-if="activeTab === 'css'" />
      <GsapAnimation v-if="activeTab === 'gsap'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CssAnimation from '@/views/animation/index.vue'
import GsapAnimation from '@/views/page2/index.vue'

const tabs = [
  { key: 'css', icon: '🎨', label: 'CSS 动画 (184+ 特效)' },
  { key: 'gsap', icon: '⚡', label: 'GSAP 动画 (168+ 特效)' }
]

const activeTab = ref<'css' | 'gsap'>('css')
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0f0f1a;
  overflow: hidden;
}

.tab-bar {
  display: flex;
  gap: 4px;
  padding: 10px 20px 0;
  background: #0f0f1a;
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: none;
  border-radius: 8px 8px 0 0;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  bottom: -2px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
  }

  &.active {
    background: #1a1a2e;
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.08);
    border-bottom-color: #1a1a2e;

    .tab-icon {
      filter: none;
    }
  }
}

.tab-icon {
  font-size: 16px;
}

.tab-label {
  white-space: nowrap;
}

.tab-content {
  flex: 1;
  overflow: hidden;
  background: #1a1a2e;

  // 让子组件撑满
  :deep(.home-container) {
    width: 100%;
    height: 100%;
  }
}
</style>
