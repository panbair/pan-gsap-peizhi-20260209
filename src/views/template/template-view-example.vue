<template>
  <div class="template-view">
    <div class="animation-layer">
      <div v-for="n in 5" :key="n" class="panel" :style="{ background: panels[n - 1] }">
        <div class="panel-content">
          <h2>面板 {{ n }}</h2>
          <p>{{ templateView }}</p>
        </div>
      </div>
    </div>

    <div class="back-button">
      <el-button @click="goBack">返回列表</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { templateFunctions } from './index'

const route = useRoute()
const router = useRouter()

// 获取路由参数
const templateView = ref((route.query.templateView as string) || 'customizeAnimation')

// 面板颜色
const panels = ref(['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'])

// 清理函数
let cleanupFunc: (() => void) | null = null

onMounted(() => {
  console.log('当前模板:', templateView.value)

  // 获取模板函数
  const templateFunc = templateFunctions[templateView.value] as (() => () => void) | undefined

  if (templateFunc && typeof templateFunc === 'function') {
    try {
      // 执行动画函数
      cleanupFunc = templateFunc()
      console.log('模板加载成功')
    } catch (error) {
      console.error('模板执行失败:', error)
    }
  } else {
    console.error(`模板 ${templateView.value} 不存在`)
  }
})

onUnmounted(() => {
  // 清理动画
  if (cleanupFunc && typeof cleanupFunc === 'function') {
    try {
      cleanupFunc()
      cleanupFunc = null
      console.log('模板动画已清理')
    } catch (error) {
      console.error('清理动画失败:', error)
    }
  }

  // 额外清理:确保所有ScrollTrigger都被清理
  if (typeof window !== 'undefined' && window.gsap) {
    try {
      const triggers = window.gsap.ScrollTrigger?.getAll()
      if (triggers && triggers.length) {
        triggers.forEach(trigger => trigger.kill())
      }
    } catch (error) {
      console.warn('清理ScrollTrigger时出错:', error)
    }
  }
})

const goBack = () => {
  router.push('/template')
}
</script>

<style scoped lang="scss">
.template-view {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  .animation-layer {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .panel {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .panel-content {
      text-align: center;
      color: #fff;
      z-index: 10;

      h2 {
        font-size: 48px;
        margin-bottom: 20px;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      }

      p {
        font-size: 24px;
        opacity: 0.9;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .back-button {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
  }
}
</style>
