# 模板动画使用指南

## 概述

本项目实现了44个GSAP滚动动画模板,分为5个等级:
- **V0-V3**: 基础模板 (4个)
- **V4-V11**: 新模板 (8个)
- **V12-V19**: 专业级模板 (8个)
- **V20-V27**: 精英级模板 (8个)
- **V28-V35**: 传奇级模板 (8个)
- **V36-V43**: 精华级模板 (8个)

## 模板列表

### 基础模板 (V0-V3)
1. `customizeAnimation` - 横向模版
2. `initHorizontalAnimation` - 横竖模版
3. `infinitePanelScrollAnimation` - 无限模版
4. `scalePanelScrollAnimation` - 缩放模版

### 新模板 (V4-V11)
5. `threeDCardFlipAnimation` - 3D卡片翻转
6. `particleWaveAnimation` - 粒子波浪
7. `wormholeAnimation` - 虫洞穿梭
8. `glassShatterAnimation` - 玻璃破碎
9. `liquidFlowAnimation` - 液体流动
10. `fractalGrowAnimation` - 分形生长
11. `quantumEntanglementAnimation` - 量子纠缠
12. `magneticDistortionAnimation` - 磁场扭曲

### 专业级模板 (V12-V19)
13. `origamiFoldAnimation` - 纸张折叠
14. `moebiusTransformAnimation` - 莫比乌斯环
15. `auroraFlowAnimation` - 极光流淌
16. `particleConvergeAnimation` - 粒子汇聚
17. `dnaHelixAnimation` - DNA双螺旋
18. `honeycombUnfoldAnimation` - 蜂巢展开
19. `hologramScanAnimation` - 全息扫描
20. `kaleidoscopeMirrorAnimation` - 万花筒镜像

### 精英级模板 (V20-V27)
21. `liquidSurfaceTensionAnimation` - 液体张力
22. `electromagneticWaveAnimation` - 电磁波动
23. `fragmentReassembleAnimation` - 碎片重组
24. `parallaxDepthAnimation` - 多层视差
25. `matrixRainAnimation` - 矩阵代码雨
26. `galaxyRotationAnimation` - 星系旋转
27. `fluidVortexAnimation` - 流体涡旋
28. `panoramaUnfoldAnimation` - 全景展开

### 传奇级模板 (V28-V35)
29. `interstellarPortalAnimation` - 星际传送门
30. `quantumTunnelAnimation` - 量子时空穿越
31. `cyberspaceAnimation` - 赛博空间
32. `liquidMetalAnimation` - 液态金属
33. `timeFoldAnimation` - 时间折叠
34. `nebulaBirthAnimation` - 星云诞生
35. `neonCityAnimation` - 霓虹城市
36. `ultimateParallaxAnimation` - 极限视差

### 精华级模板 (V36-V43)
37. `smoothHorizontalAnimation` - 平滑横向
38. `elasticScaleAnimation` - 弹性缩放
39. `infiniteSmoothAnimation` - 无限循环优化
40. `fadeUpAnimation` - 淡入上移
41. `staggeredHorizontalAnimation` - 交错横向
42. `scaleFadeAnimation` - 缩放淡入
43. `infiniteRotateAnimation` - 无限旋转
44. `smoothComboAnimation` - 平滑组合

## 使用方法

### 1. 在列表页面 (index.vue)

列表页面已经配置好,所有模板都会显示:

```vue
<template>
  <div class="list-main">
    <el-row :gutter="30">
      <el-col :span="8" v-for="(item,index) in list" :key="index">
        <div class="list-item" :style="{'background': item.background}">
          <div class="list-item_title">{{item.title}}</div>
          <div class="but">
            <el-button @click="edit(item)">编辑模版</el-button>
            <el-button @click="preview(item)">查看模版</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
```

### 2. 在编辑页面使用

```vue
<script setup>
import { ref } from 'vue'
import { templateFunctions } from './index'

const currentTemplate = ref(null)
const cleanup = ref(null)

// 路由参数获取模板名称
const route = useRoute()
const templateName = route.query.templateView

onMounted(() => {
  // 根据模板名称获取对应的动画函数
  const templateFunc = templateFunctions[templateName]
  
  if (templateFunc) {
    // 执行动画函数
    currentTemplate.value = templateFunc
    cleanup.value = templateFunc()
  }
})

onUnmounted(() => {
  // 清理动画
  if (cleanup.value) {
    cleanup.value()
    cleanup.value = null
  }
})
</script>
```

### 3. 在预览页面使用

```vue
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { templateFunctions } from './index'

const route = useRoute()
const templateView = route.query.templateView
let cleanupFunc = null

onMounted(() => {
  // 获取模板函数
  const templateFunc = templateFunctions[templateView]
  
  if (templateFunc && typeof templateFunc === 'function') {
    // 执行动画函数
    cleanupFunc = templateFunc()
  } else {
    console.error(`模板 ${templateView} 不存在`)
  }
})

onUnmounted(() => {
  // 清理动画,防止内存泄漏
  if (cleanupFunc && typeof cleanupFunc === 'function') {
    cleanupFunc()
    cleanupFunc = null
  }
  
  // 清理所有GSAP动画
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>
```

## 模板函数结构

每个模板函数都遵循相同的模式:

```javascript
export const exampleAnimation = () => {
  // 1. 注册GSAP插件
  registerPlugins()
  
  // 2. 刷新ScrollTrigger
  ScrollTrigger.refresh()
  
  // 3. 创建清理函数数组
  let cleanupFunctions = []
  
  // 4. 等待DOM准备就绪
  waitForDOM(() => {
    // 5. 创建动画
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.panel',
        start: 'top bottom',
        end: 'top top',
        scrub: 1
      }
    })
    
    // 6. 添加清理函数
    cleanupFunctions.push(() => tl.kill())
  })
  
  // 7. 返回清理函数
  return () => {
    cleanupFunctions.forEach(fn => fn())
    cleanupFunctions = []
  }
}
```

## 注意事项

### 1. 清理动画
每个模板函数都返回一个清理函数,必须在组件卸载时调用:

```javascript
onUnmounted(() => {
  if (cleanupFunc) {
    cleanupFunc()
  }
})
```

### 2. DOM结构
模板假设存在以下DOM结构:
- `.panel` - 面板元素
- `.animation-layer` - 动画层容器

### 3. ScrollTrigger配置
所有模板都使用ScrollTrigger实现滚动动画,确保:
- 元素有固定高度
- 页面可滚动
- 正确的trigger选择器

### 4. 性能优化
- 使用`scrub: 1`实现平滑滚动
- 使用`anticipatePin: 1`提前预判
- 使用`force3D: true`启用GPU加速

## 常见问题

### Q: 如何在现有项目中使用这些模板?

A: 复制以下文件到你的项目:
1. `src/views/template/源码/pages/edit/hooks.js`
2. `src/views/template/源码/pages/edit/newTemplates.js`
3. `src/views/template/源码/pages/edit/proTemplates.js`
4. `src/views/template/源码/pages/edit/eliteTemplates.js`
5. `src/views/template/源码/pages/edit/legendTemplates.js`
6. `src/views/template/源码/pages/edit/elitePlusTemplates.js`

然后在你的组件中导入:

```javascript
import { exampleAnimation } from './path/to/templates'

onMounted(() => {
  const cleanup = exampleAnimation()
  onUnmounted(() => cleanup())
})
```

### Q: 如何自定义模板?

A: 复制现有模板,修改参数:
- 修改`scrollTrigger`配置
- 调整动画时长和缓动函数
- 更改视觉效果(颜色、大小、位置等)

### Q: 模板冲突怎么办?

A: 确保每个页面只使用一个模板,并在卸载时正确清理:

```javascript
onUnmounted(() => {
  // 清理当前模板
  if (cleanup) cleanup()
  
  // 清理所有ScrollTrigger
  ScrollTrigger.getAll().forEach(st => st.kill())
  
  // 清理所有GSAP动画
  gsap.killAll()
})
```

## 技术栈

- **GSAP**: 动画引擎
- **ScrollTrigger**: 滚动触发
- **Vue 3**: 框架
- **TypeScript**: 类型支持

## 许可证

MIT
