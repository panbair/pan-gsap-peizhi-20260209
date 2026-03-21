# 模板查看页面调试指南

## 问题描述
点击"查看模版"后，滚动页面没有看到对应的动画效果。

## 可能的原因

### 1. 面板布局问题
**问题**: 面板使用 `position: absolute` 定位，可能导致所有面板堆叠在一起。

**解决方案**:
```vue
<style scoped lang="scss">
.panel {
  // 改为相对定位，让面板依次排列
  position: relative;
  min-height: 100vh;
}
</style>
```

### 2. DOM元素选择器不匹配
**问题**: 模板函数使用的选择器（如 `.panel`、`.vertical`）与页面实际类名不一致。

**当前状态**:
- 面板类名: `panel vertical` ✅
- 面板uuid属性: `uuid="panel-n"` ✅

### 3. GSAP ScrollTrigger 未正确注册
**问题**: ScrollTrigger 插件未注册或未正确初始化。

**解决方案**:
```javascript
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
```

### 4. 页面高度不够
**问题**: 如果所有面板都是绝对定位，页面高度可能只有一个视口高度。

**解决方案**:
```vue
<style scoped lang="scss">
.animation-layer {
  // 确保有足够的高度
  min-height: 500vh;
}
</style>
```

## 调试步骤

### 1. 打开浏览器控制台
按 F12 打开开发者工具，查看 Console 标签页。

### 2. 查看日志输出
应该看到以下日志：
```
当前模板: xxx
找到的面板数量: 5
执行函数（xxx）: xxx
模板加载成功
```

### 3. 检查DOM元素
在 Elements 标签页中检查：
- 面板是否存在（5个 `.panel` 元素）
- 面板是否有 `uuid` 属性
- 面板的定位方式（absolute 还是 relative）

### 4. 检查GSAP动画
- 在 Console 中输入 `gsap.ScrollTrigger.getAll()` 查看已注册的触发器
- 应该看到有 ScrollTrigger 对象被创建

### 5. 手动触发动画
在 Console 中输入：
```javascript
gsap.to('.panel', {
  scrollTrigger: {
    trigger: '.panel',
    start: 'top bottom',
    end: 'top top',
    scrub: true
  },
  y: -100
})
```

## 修改建议

### 方案1: 改为相对定位（推荐）
将面板从 `position: absolute` 改为 `position: relative`，让面板自然堆叠。

### 方案2: 动态计算高度
使用 JavaScript 动态计算所有面板的总高度，设置给容器。

### 方案3: 使用虚拟滚动
对于大量面板，使用虚拟滚动技术，只渲染可见区域的元素。

## 常见错误

### Error: "Template xxx not found"
- 检查模板名称是否正确
- 检查 `templateIndex.ts` 中是否导出该函数

### Error: "Cannot read property 'xxx' of null"
- DOM元素未找到
- 延迟时间不够
- 选择器错误

### Error: "ScrollTrigger is not registered"
- 检查 GSAP 导入是否正确
- 检查插件是否已注册

## 测试清单

- [ ] 页面能正常加载
- [ ] 控制台无错误
- [ ] 能看到5个面板
- [ ] 页面可以滚动
- [ ] 滚动时能看到动画效果
- [ ] 点击返回按钮可以返回列表
