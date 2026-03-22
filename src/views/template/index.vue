<template>
  <div class="list-main">
    <!-- 动态背景 -->
    <div class="animated-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <el-container style="width: 100%; height: 100%">
      <el-header class="fixed-header">
        <div class="header-content">
          <h1 class="title">
            <span class="title-icon">✨</span>
            <span>AI智能建设网站</span>
          </h1>
          <div class="category-tabs">
            <button
              v-for="category in categories"
              :key="category.value"
              :class="['tab-item', { active: activeCategory === category.value }]"
              @click="() => { activeCategory = category.value; watchCategoryChange(); }"
            >
              <span class="tab-icon">{{ category.icon }}</span>
              <span>{{ category.label }}</span>
              <span class="tab-count">{{ category.count }}</span>
            </button>
          </div>
        </div>
      </el-header>

      <el-main class="main-content">
        <div class="list-container">
          <el-row :gutter="30" class="list-grid">
            <el-col
              v-for="item in filteredList"
              :key="`${activeCategory}-${item.id}`"
              :span="8"
              class="template-col"
            >
              <div
                class="list-item"
                :style="{ background: item.background }"
                :class="item.ease"
                @mouseenter="onCardHover"
              >
                <div class="card-badge">{{ getLevelBadge(item.id) }}</div>
                <div class="card-icon">{{ getTemplateIcon(item.id) }}</div>
                <div class="list-item_title">{{ item.title }}</div>
                <div class="card-description">{{ item.description }}</div>
                <div class="card-tags">
                  <span class="tag">{{ categories.find(c => c.value === item.category)?.label }}</span>
                </div>
                <div class="but">
                  <el-button type="primary" size="large" class="preview-btn" @click="preview(item)">
                    <span class="btn-icon">👁️</span>
                    <span>创建模版</span>
                  </el-button>
                </div>
                <div class="card-overlay"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { colors } from './config'
import { hoverList } from './config-hover'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger)

let router = useRouter()

let gsapAnimations: gsap.core.Tween[] = []

let getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)] || colors[0]
}

let getHover = () => {
  let ease = hoverList[Math.floor(Math.random() * hoverList.length)] || hoverList[0]
  return ease.value
}

// 模板配置数据
let templateConfig = [
  { id: 0, title: '横向模版', templateView: 'customizeAnimation', category: 'basic', description: '流畅的横向滚动效果' },
  { id: 1, title: '横竖模版', templateView: 'initHorizontalAnimation', category: 'basic', description: '横向与竖向结合的动态效果' },
  { id: 2, title: '无限模版', templateView: 'infinitePanelScrollAnimation', category: 'basic', description: '无限循环的面板滚动' },
  { id: 3, title: '缩放模版', templateView: 'scalePanelScrollAnimation', category: 'basic', description: '动态缩放的视觉冲击' },
  { id: 4, title: '3D卡片翻转', templateView: 'threeDCardFlipAnimation', category: 'pro', description: '3D空间卡片翻转效果' },
  { id: 5, title: '粒子波浪', templateView: 'particleWaveAnimation', category: 'pro', description: '粒子组成的动态波浪' },
  { id: 6, title: '虫洞穿梭', templateView: 'wormholeAnimation', category: 'pro', description: '穿越时空的虫洞效果' },
  { id: 7, title: '玻璃破碎', templateView: 'glassShatterAnimation', category: 'pro', description: '震撼的玻璃破碎动画' },
  { id: 8, title: '液体流动', templateView: 'liquidFlowAnimation', category: 'pro', description: '流动的液体视觉效果' },
  { id: 9, title: '分形生长', templateView: 'fractalGrowAnimation', category: 'elite', description: '分形图案的生长动画' },
  { id: 10, title: '量子纠缠', templateView: 'quantumEntanglementAnimation', category: 'elite', description: '量子物理的纠缠现象' },
  { id: 11, title: '磁场扭曲', templateView: 'magneticDistortionAnimation', category: 'elite', description: '磁场导致的视觉扭曲' },
  { id: 12, title: '纸张折叠', templateView: 'origamiFoldAnimation', category: 'elite', description: '优雅的纸张折叠效果' },
  { id: 13, title: '莫比乌斯环', templateView: 'moebiusTransformAnimation', category: 'elite', description: '神奇的莫比乌斯环变换' },
  { id: 14, title: '极光流淌', templateView: 'auroraFlowAnimation', category: 'elite', description: '绚丽的极光流动效果' },
  { id: 15, title: '粒子汇聚', templateView: 'particleConvergeAnimation', category: 'legend', description: '粒子从四面八方汇聚' },
  { id: 16, title: 'DNA双螺旋', templateView: 'dnaHelixAnimation', category: 'legend', description: 'DNA双螺旋结构动画' },
  { id: 17, title: '蜂巢展开', templateView: 'honeycombUnfoldAnimation', category: 'legend', description: '蜂巢结构展开效果' },
  { id: 18, title: '全息扫描', templateView: 'hologramScanAnimation', category: 'legend', description: '科技感全息扫描效果' },
  { id: 19, title: '万花筒镜像', templateView: 'kaleidoscopeMirrorAnimation', category: 'legend', description: '对称的万花筒效果' },
  { id: 20, title: '液体张力', templateView: 'liquidSurfaceTensionAnimation', category: 'premium', description: '液体表面张力模拟' },
  { id: 21, title: '电磁波动', templateView: 'electromagneticWaveAnimation', category: 'premium', description: '电磁波传播可视化' },
  { id: 22, title: '碎片重组', templateView: 'fragmentReassembleAnimation', category: 'premium', description: '碎片自动重组效果' },
  { id: 23, title: '多层视差', templateView: 'parallaxDepthAnimation', category: 'premium', description: '深度多层视差效果' },
  { id: 24, title: '矩阵代码雨', templateView: 'matrixRainAnimation', category: 'premium', description: '黑客帝国代码雨效果' },
  { id: 25, title: '星系旋转', templateView: 'galaxyRotationAnimation', category: 'premium', description: '星系旋转动画效果' },
  { id: 26, title: '流体涡旋', templateView: 'fluidVortexAnimation', category: 'premium', description: '流体涡旋动力学' },
  { id: 27, title: '全景展开', templateView: 'panoramaUnfoldAnimation', category: 'premium', description: '360度全景展开效果' },
  { id: 28, title: '星际传送门', templateView: 'interstellarPortalAnimation', category: 'premium', description: '星际穿越传送门' },
  { id: 29, title: '量子时空穿越', templateView: 'quantumTunnelAnimation', category: 'premium', description: '量子隧道穿越效果' },
  { id: 30, title: '赛博空间', templateView: 'cyberspaceAnimation', category: 'premium', description: '未来赛博空间效果' },
  { id: 31, title: '液态金属', templateView: 'liquidMetalAnimation', category: 'premium', description: '液态金属变形效果' },
  { id: 32, title: '时间折叠', templateView: 'timeFoldAnimation', category: 'premium', description: '时间维度折叠效果' },
  { id: 33, title: '星云诞生', templateView: 'nebulaBirthAnimation', category: 'premium', description: '星云形成过程动画' },
  { id: 34, title: '霓虹城市', templateView: 'neonCityAnimation', category: 'premium', description: '霓虹灯城市夜景' },
  { id: 35, title: '极限视差', templateView: 'ultimateParallaxAnimation', category: 'premium', description: '极致视差滚动效果' },
  { id: 36, title: '平滑横向', templateView: 'smoothHorizontalAnimation', category: 'basic', description: '优化的平滑横向滚动' },
  { id: 37, title: '弹性缩放', templateView: 'elasticScaleAnimation', category: 'basic', description: '弹性缩放动画效果' },
  { id: 38, title: '无限循环优化', templateView: 'infiniteSmoothAnimation', category: 'basic', description: '流畅的无限循环' },
  { id: 39, title: '淡入上移', templateView: 'fadeUpAnimation', category: 'basic', description: '经典淡入上移效果' },
  { id: 40, title: '交错横向', templateView: 'staggeredHorizontalAnimation', category: 'basic', description: '交错式横向滚动' },
  { id: 41, title: '缩放淡入', templateView: 'scaleFadeAnimation', category: 'basic', description: '缩放配合淡入动画' },
  { id: 42, title: '无限旋转', templateView: 'infiniteRotateAnimation', category: 'basic', description: '持续旋转动画效果' },
  { id: 43, title: '平滑组合', templateView: 'smoothComboAnimation', category: 'basic', description: '多种效果组合' }
]

// 分类数据
let categories = [
  { label: '全部', value: 'all', icon: '🌟', count: templateConfig.length },
  { label: '基础', value: 'basic', icon: '🎯', count: templateConfig.filter(t => t.category === 'basic').length },
  { label: '专业', value: 'pro', icon: '💎', count: templateConfig.filter(t => t.category === 'pro').length },
  { label: '精英', value: 'elite', icon: '🚀', count: templateConfig.filter(t => t.category === 'elite').length },
  { label: '传奇', value: 'legend', icon: '👑', count: templateConfig.filter(t => t.category === 'legend').length },
  { label: '精华', value: 'premium', icon: '✨', count: templateConfig.filter(t => t.category === 'premium').length }
]

let activeCategory = ref('all')

// 过滤后的列表
let filteredList = computed(() => {
  let result = templateConfig.map(item => ({
    ...item,
    background: getColor(),
    ease: getHover()
  }))

  if (activeCategory.value === 'all') {
    return result
  }
  return result.filter(item => item.category === activeCategory.value)
})

// 获取等级徽章
let getLevelBadge = (id: number) => {
  if (id <= 3) return '基础'
  if (id <= 11) return '专业'
  if (id <= 19) return '精英'
  if (id <= 27) return '传奇'
  if (id <= 35) return '精华'
  return '精华'
}

// 获取模板图标
let getTemplateIcon = (id: number) => {
  const icons = ['🎬', '🔄', '🌊', '📐', '🃏', '✨', '🌀', '💥', '💧', '🌸', '⚛️', '🧲', '📄', '♾️', '🌌', '🔬', '🐝', '📡', '🔮', '💎', '💧', '⚡', '🧩', '🎭', '🔢', '🌌', '🌀', '🌍', '🕳️', '🚀', '🦾', '⏰', '☁️', '🌃', '🎢', '➡️', '🎯', '♾️', '⬆️', '↔️', '🎭', '🔄', '🎨']
  return icons[id] || '🎨'
}

// 卡片悬停效果
let onCardHover = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement
  card.style.transform = 'translateY(-5px)'
}

// 初始化 GSAP 滚动动画
let initScrollAnimation = () => {
  nextTick(() => {
    // 等待 DOM 完全渲染
    setTimeout(() => {
      // 清除之前的动画
      gsapAnimations.forEach(animation => animation.kill())
      gsapAnimations = []

      // 清除所有 ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())

      // 获取所有 el-col
      const cols = document.querySelectorAll('.list-grid .template-col')

      // 使用 GSAP 创建滚动动画
      cols.forEach((col, index) => {
        const element = col as HTMLElement

        // 初始状态
        gsap.set(element, {
          opacity: 0,
          y: 50
        })

        // 创建滚动触发动画
        const animation = gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%', // 当元素顶部到达视口 85% 处时触发
            end: 'top 70%',
            toggleActions: 'play none none reverse',
            once: true // 只触发一次
          },
          delay: (index % 3) * 0.1 // 每行之间的延迟
        })

        gsapAnimations.push(animation)
      })

      // 刷新 ScrollTrigger
      ScrollTrigger.refresh()
    }, 100)
  })
}

// 监听分类切换，重新初始化动画
let watchCategoryChange = () => {
  nextTick(() => {
    // 滚动回到顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // 清除所有动画
    gsapAnimations.forEach(animation => animation.kill())
    gsapAnimations = []

    // 清除所有 ScrollTrigger
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    // 重新初始化动画
    setTimeout(() => {
      initScrollAnimation()
    }, 200)
  })
}

// 组件挂载后初始化滚动动画
onMounted(() => {
  initScrollAnimation()
})

// 组件卸载时清理动画
onUnmounted(() => {
  // 清除所有 GSAP 动画
  gsapAnimations.forEach(animation => animation.kill())
  gsapAnimations = []

  // 清除所有 ScrollTrigger
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

let preview = item => {
  router.push({
    path: '/template-view',
    query: {
      state: 'add',
      templateView: item.templateView
    }
  })
}
</script>

<style scoped lang="scss">
.list-main {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  // 动态背景
  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    overflow: hidden;

    .gradient-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 20s ease-in-out infinite;

      &.orb-1 {
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(255, 154, 139, 0.8) 0%, rgba(255, 106, 136, 0.4) 100%);
        top: -200px;
        left: -200px;
        animation-delay: 0s;
      }

      &.orb-2 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(116, 235, 213, 0.8) 0%, rgba(159, 172, 230, 0.4) 100%);
        top: 50%;
        right: -150px;
        animation-delay: -7s;
      }

      &.orb-3 {
        width: 700px;
        height: 700px;
        background: radial-gradient(circle, rgba(254, 225, 64, 0.8) 0%, rgba(250, 112, 154, 0.4) 100%);
        bottom: -300px;
        left: 50%;
        animation-delay: -14s;
      }
    }
  }

  // 固定头部
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px !important;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideDown 0.8s ease-out;
    padding: 0 40px;

    .header-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 36px;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;

        .title-icon {
          font-size: 40px;
          animation: pulse 2s ease-in-out infinite;
        }
      }

      .category-tabs {
        display: flex;
        justify-content: center;
        gap: 10px;

        .tab-item {
          position: relative;
          padding: 8px 20px;
          border: none;
          background: transparent;
          border-radius: 25px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #666;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          overflow: hidden;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }

          &:hover {
            transform: translateY(-2px);
            color: #fff;

            &::before {
              opacity: 0.8;
            }
          }

          &.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

            &::before {
              opacity: 0;
            }
          }

          .tab-icon {
            font-size: 16px;
          }

          .tab-count {
            background: rgba(255, 255, 255, 0.3);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
    }
  }

  // 主内容区
  .main-content {
    padding-top: 140px;
    position: relative;
    z-index: 1;

    .list-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;

      .list-grid {
        .template-col {
          margin-bottom: 30px;

          .list-item {
            position: relative;
            width: 100%;
            height: 380px;
            border-radius: 20px;
            padding: 30px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
              transition: opacity 0.3s ease;
              z-index: 1;
            }

            &:hover {
              transform: translateY(-10px) scale(1.02);
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

              &::before {
                opacity: 0.8;
              }

              .card-badge {
                transform: scale(1.1);
              }

              .card-icon {
                transform: scale(1.2) rotate(5deg);
              }

              .preview-btn {
                transform: scale(1.05);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
              }

              .card-overlay {
                opacity: 1;
              }
            }

            .card-badge {
              position: absolute;
              top: 20px;
              right: 20px;
              background: rgba(255, 255, 255, 0.3);
              backdrop-filter: blur(10px);
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
              z-index: 2;
              transition: transform 0.3s ease;
            }

            .card-icon {
              font-size: 60px;
              margin-bottom: 15px;
              transition: transform 0.4s ease;
              z-index: 2;
              text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            }

            .list-item_title {
              font-size: 22px;
              font-weight: 700;
              margin-bottom: 10px;
              text-align: center;
              z-index: 2;
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }

            .card-description {
              font-size: 14px;
              font-weight: 400;
              opacity: 0.9;
              margin-bottom: 20px;
              text-align: center;
              z-index: 2;
              line-height: 1.5;
            }

            .card-tags {
              display: flex;
              gap: 8px;
              margin-bottom: 20px;
              z-index: 2;

              .tag {
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(10px);
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 500;
              }
            }

            .but {
              width: 100%;
              z-index: 2;

              .preview-btn {
                width: 100%;
                padding: 12px 30px;
                border: none;
                border-radius: 25px;
                background: rgba(255, 255, 255, 0.95);
                color: #333;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

                &:hover {
                  background: #fff;
                  transform: scale(1.05);
                }

                .btn-icon {
                  font-size: 18px;
                }
              }
            }

            .card-overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
              opacity: 0;
              transition: opacity 0.3s ease;
              pointer-events: none;
              z-index: 1;
            }
          }
        }
      }
    }
  }
}

// 动画关键帧
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(50px, 50px) rotate(90deg);
  }
  50% {
    transform: translate(0, 100px) rotate(180deg);
  }
  75% {
    transform: translate(-50px, 50px) rotate(270deg);
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .list-main {
    .fixed-header {
      height: 150px !important;
      padding: 0 20px;

      .header-content {
        gap: 10px;

        .title {
          font-size: 24px;
        }

        .category-tabs {
          flex-wrap: wrap;
          gap: 6px;

          .tab-item {
            padding: 6px 12px;
            font-size: 12px;
          }
        }
      }
    }

    .main-content {
      padding-top: 170px;

      .list-container {
        padding: 10px;

        .list-grid {
          .template-col {
            width: 100%;
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 20px;

            .list-item {
              height: 320px;
              padding: 20px;

              .card-icon {
                font-size: 48px;
              }

              .list-item_title {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}

// 悬停效果
.ph-shrink:hover {
  transform: scale(0.95);
}

.ph-pulse:hover {
  animation: pulse 0.5s ease-in-out;
}

.ph-pulse-grow:hover {
  animation: pulseGrow 0.5s ease-in-out;
}

.ph-pulse-shrink:hover {
  animation: pulseShrink 0.5s ease-in-out;
}

.ph-push:hover {
  animation: push 0.5s ease-in-out;
}

.ph-pop:hover {
  animation: pop 0.5s ease-in-out;
}

.ph-bounce-in:hover {
  animation: bounceIn 0.6s ease-in-out;
}

.ph-grow:hover {
  transform: scale(1.05);
}

.ph-bounce-out:hover {
  animation: bounceOut 0.5s ease-in-out;
}

.ph-rotate:hover {
  animation: rotate 0.5s ease-in-out;
}

.ph-grow-rotate:hover {
  animation: growRotate 0.5s ease-in-out;
}

.ph-float:hover {
  animation: float 2s ease-in-out infinite;
}

.ph-sink:hover {
  animation: sink 2s ease-in-out infinite;
}

.ph-bob:hover {
  animation: bob 2s ease-in-out infinite;
}

.ph-hang:hover {
  animation: hang 2s ease-in-out infinite;
}

.ph-skew:hover {
  animation: skew 0.5s ease-in-out;
}

.ph-skew-forward:hover {
  animation: skewForward 0.5s ease-in-out;
}

.ph-skew-backward:hover {
  animation: skewBackward 0.5s ease-in-out;
}

.ph-wobble-horizontal:hover {
  animation: wobbleHorizontal 0.5s ease-in-out;
}

.ph-wobble-vertical:hover {
  animation: wobbleVertical 0.5s ease-in-out;
}

.ph-wobble-to-bottom-right:hover {
  animation: wobbleToBottomRight 0.5s ease-in-out;
}

.ph-wobble-to-top-right:hover {
  animation: wobbleToTopRight 0.5s ease-in-out;
}

.ph-wobble-top:hover {
  animation: wobbleTop 0.5s ease-in-out;
}

.ph-wobble-bottom:hover {
  animation: wobbleBottom 0.5s ease-in-out;
}

.ph-wobble-skew:hover {
  animation: wobbleSkew 0.5s ease-in-out;
}

.ph-buzz:hover {
  animation: buzz 0.5s ease-in-out;
}

.ph-buzz-out:hover {
  animation: buzzOut 0.5s ease-in-out;
}

.ph-forward:hover {
  animation: forward 0.5s ease-in-out;
}

.ph-backward:hover {
  animation: backward 0.5s ease-in-out;
}

.ph-grow-shadow:hover {
  animation: growShadow 0.5s ease-in-out;
}

// 悬停动画关键帧
@keyframes pulseGrow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes pulseShrink {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}

@keyframes push {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

@keyframes pop {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounceOut {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes growRotate {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

@keyframes sink {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

@keyframes bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes hang {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

@keyframes skew {
  0%, 100% {
    transform: skewX(0deg);
  }
  25% {
    transform: skewX(10deg);
  }
  75% {
    transform: skewX(-10deg);
  }
}

@keyframes skewForward {
  0%, 100% {
    transform: skewX(0deg) translateX(0);
  }
  50% {
    transform: skewX(10deg) translateX(10px);
  }
}

@keyframes skewBackward {
  0%, 100% {
    transform: skewX(0deg) translateX(0);
  }
  50% {
    transform: skewX(-10deg) translateX(-10px);
  }
}

@keyframes wobbleHorizontal {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}

@keyframes wobbleVertical {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(10px);
  }
}

@keyframes wobbleToBottomRight {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(-10px, -10px);
  }
}

@keyframes wobbleToTopRight {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -10px);
  }
  75% {
    transform: translate(-10px, 10px);
  }
}

@keyframes wobbleTop {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  75% {
    transform: translateY(10px) rotate(-5deg);
  }
}

@keyframes wobbleBottom {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(10px) rotate(5deg);
  }
  75% {
    transform: translateY(-10px) rotate(-5deg);
  }
}

@keyframes wobbleSkew {
  0%, 100% {
    transform: skewX(0deg);
  }
  25% {
    transform: skewX(10deg) translateY(5px);
  }
  75% {
    transform: skewX(-10deg) translateY(-5px);
  }
}

@keyframes buzz {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

@keyframes buzzOut {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes forward {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

@keyframes backward {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20px);
  }
}

@keyframes growShadow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
