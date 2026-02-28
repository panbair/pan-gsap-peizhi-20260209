# 重复触发动画测试指南

## 测试目标

验证每张卡片每次出现在屏幕时都会触发动画。

---

## 快速测试

### 启动项目
```bash
cd d:/work20240226/rcs-20250311/gsap-20260209
npm run dev
```

访问：`http://localhost:5173/preview`

---

## 测试场景

### 场景 1：首次加载（向下滚动）
```
步骤：
1. 打开页面
2. 缓慢向下滚动
3. 观察卡片动画

预期结果：
✅ 卡片进入视窗时播放动画
✅ 控制台输出："播放动画: xxx"
```

### 场景 2：向下滚动离开
```
步骤：
1. 继续向下滚动
2. 让卡片完全离开视窗
3. 观察卡片状态

预期结果：
✅ 卡片离开视窗时动画停止
✅ 卡片被隐藏（opacity: 0, y: 30）
```

### 场景 3：向上滚动返回（关键测试）
```
步骤：
1. 向上滚动
2. 让之前离开的卡片重新进入视窗
3. 观察动画

预期结果：
✅ 卡片重新进入视窗时再次播放动画 ✅
✅ 控制台再次输出："播放动画: xxx"
✅ 每张卡片都使用自己配置的动画
```

### 场景 4：向上滚动离开
```
步骤：
1. 继续向上滚动
2. 让卡片离开视窗
3. 观察卡片状态

预期结果：
✅ 卡片停止动画
✅ 卡片被隐藏
```

### 场景 5：再次向下滚动进入（关键测试）
```
步骤：
1. 再次向下滚动
2. 让之前离开的卡片重新进入视窗
3. 观察动画

预期结果：
✅ 卡片再次进入视窗时播放动画 ✅
✅ 控制台再次输出："播放动画: xxx"
✅ 这是第三次触发动画！
```

---

## 控制台日志验证

打开控制台（F12），观察日志输出：

### 正常日志示例
```
// 第一次向下滚动
播放动画: fadeIn { type: 'to', animations: [...] }
播放动画: scaleIn { type: 'fromTo', animations: [...] }
播放动画: rotateIn { type: 'fromTo', animations: [...] }
播放动画: bounceIn { type: 'fromTo', animations: [...] }

// 向上滚动返回
播放动画: fadeIn { type: 'to', animations: [...] }
播放动画: scaleIn { type: 'fromTo', animations: [...] }
播放动画: rotateIn { type: 'fromTo', animations: [...] }
播放动画: bounceIn { type: 'fromTo', animations: [...] }

// 再次向下滚动
播放动画: fadeIn { type: 'to', animations: [...] }
播放动画: scaleIn { type: 'fromTo', animations: [...] }
播放动画: rotateIn { type: 'fromTo', animations: [...] }
播放动画: bounceIn { type: 'fromTo', animations: [...] }
```

**关键点**：每次进入视窗都应该有日志输出！

---

## 视觉验证

### 动画效果观察
```
每次进入视窗时：
1. 卡片从隐藏状态（opacity: 0, y: 30）开始
2. 执行对应的动画效果
3. 最终显示在正确位置

例如：
- fadeIn: 从透明变为不透明
- scaleIn: 从缩小变为正常大小
- rotateIn: 从旋转变为正常角度
- bounceIn: 弹跳进入
```

### 动画类型指示器
```
观察卡片右上角的彩色小圆点：
🟢 绿色：Timeline（多阶段动画）
🟠 橙色：FromTo（从到动画）
🔵 蓝色：To（到动画）

每次动画播放时，指示器应该保持不变
```

---

## 性能测试

### 快速滚动测试
```
步骤：
1. 快速向下滚动
2. 快速向上滚动
3. 重复 5-10 次

预期结果：
✅ 动画正常触发
✅ 无卡顿或延迟
✅ 帧率保持在 60fps 左右
```

### 多次重复测试
```
步骤：
1. 选择一组卡片（4个）
2. 上下滚动 10 次
3. 观察这 4 张卡片的动画

预期结果：
✅ 每次滚动都触发动画
✅ 总共触发 40 次动画（4张 × 10次）
✅ 每张卡片每次都使用相同的动画
✅ 无动画残留或状态异常
```

---

## 故障排查

### 问题 1：卡片只触发一次

**可能原因**：
- 代码未正确更新
- 浏览器缓存

**解决方法**：
```bash
# 清除缓存并刷新
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)

# 或重启开发服务器
npm run dev
```

**验证代码**：
```javascript
// 检查 once 参数
once: false,  // 应该是 false
```

---

### 问题 2：动画不播放

**检查清单**：
```javascript
// 1. 检查控制台是否有警告
console.warn('卡片缺少 data-anim 属性')
console.warn('动画配置不存在: xxx')

// 2. 检查动画配置
console.log(animConfig['fadeIn'])

// 3. 检查 ScrollTrigger
console.log(ScrollTrigger.getById(triggerId))
```

---

### 问题 3：动画播放异常

**可能原因**：
- 动画配置错误
- 状态未正确重置

**解决方法**：
```javascript
// 检查动画配置
console.log('动画配置:', cfg)

// 检查当前状态
console.log('当前元素:', el)
console.log('当前样式:', getComputedStyle(el))
```

---

### 问题 4：性能问题

**可能原因**：
- 同时播放的动画太多
- 动画配置过于复杂

**优化方法**：
```javascript
// 1. 增加触发距离
start: 'top 90%',

// 2. 增加交错延迟
const delay = (i % 4) * 0.12,

// 3. 减少同时显示的卡片
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))
```

---

## 成功标准

所有测试通过的标准：

### 功能测试
- ✅ 首次向下滚动触发动画
- ✅ 向上滚动返回触发动画
- ✅ 再次向下滚动触发动画
- ✅ 每次都使用自己配置的动画
- ✅ 控制台有正确的日志输出

### 性能测试
- ✅ 快速滚动无卡顿
- ✅ 多次重复无异常
- ✅ 帧率保持在 60fps+
- ✅ CPU 使用率合理

### 视觉测试
- ✅ 动画效果正确
- ✅ 状态正确重置
- ✅ 无动画残留
- ✅ 动画类型指示器正确

---

## 测试报告模板

```markdown
## 重复触发动画测试报告

**测试日期**: 2025-02-26
**测试人员**: xxx
**测试环境**: Chrome 120 / Windows 11

### 功能测试
- [x] 首次向下滚动触发动画
- [x] 向上滚动返回触发动画
- [x] 再次向下滚动触发动画
- [x] 每张卡片使用自己的动画
- [x] 控制台日志正确

### 性能测试
- 快速滚动: ✅ 无卡顿
- 多次重复: ✅ 无异常
- 帧率: 60fps
- CPU 使用: 正常

### 视觉测试
- 动画效果: ✅ 正确
- 状态重置: ✅ 完整
- 动画残留: ✅ 无
- 类型指示器: ✅ 正确

### 问题记录
无

### 结论
所有测试通过，功能正常，性能良好。
可以确认：每张卡片每次出现在屏幕时都会触发动画！✅
```

---

## 快速验证命令

在控制台执行以下命令快速验证：

```javascript
// 检查所有卡片的 ScrollTrigger
document.querySelectorAll('.anim-card').forEach((el, i) => {
  const triggerId = el.dataset.triggerId
  if (triggerId) {
    const trigger = ScrollTrigger.getById(triggerId)
    console.log(`卡片 ${i + 1}:`, {
      triggerId,
      once: trigger?.vars.once,  // 应该是 false
      animName: el.dataset.anim
    })
  }
})
```

预期输出：
```
卡片 1: { triggerId: "xxx", once: false, animName: "fadeIn" }
卡片 2: { triggerId: "xxx", once: false, animName: "scaleIn" }
...
```

---

**测试指南版本**: v1.0
**最后更新**: 2025-02-26
**状态**: ✅ 可以开始测试
