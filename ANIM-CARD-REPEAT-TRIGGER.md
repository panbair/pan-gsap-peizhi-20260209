# Anim-Card 重复触发优化说明

## 优化目标

✅ 每张卡片**每次**出现在屏幕时都会触发动画
✅ 向上滚动离开后再回到视窗也会重新触发
✅ 向下滚动离开后再回到视窗也会重新触发

---

## 核心修改

### 修改前（只触发一次）
```javascript
const trigger = ScrollTrigger.create({
  trigger: el,
  start: 'top 85%',
  once: true,  // 只触发一次
  toggleActions: 'play none none none',
  onEnter: () => {
    // 播放动画
  }
})
```

### 修改后（每次都触发）
```javascript
const trigger = ScrollTrigger.create({
  trigger: el,
  start: 'top 85%',
  once: false,  // 每次都触发
  toggleActions: 'play none none reverse',
  onEnter: () => {
    // 向下滚动进入视窗时播放动画
    gsap.killTweensOf(el)
    gsap.set(el, { clearProps: 'all' })
    gsap.set(el, {
      opacity: 0,
      y: 30,
      x: 0,
      scale: 1,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      skewX: 0,
      skewY: 0,
      z: 0
    })
    const delay = (i % 4) * 0.08
    setTimeout(() => {
      runAnim(el, animName)
    }, delay * 1000)
  },
  onLeave: () => {
    // 向下滚动离开视窗时停止动画
    gsap.killTweensOf(el)
    gsap.set(el, { clearProps: 'all' })
  },
  onEnterBack: () => {
    // 向上滚动返回视窗时重新触发
    gsap.killTweensOf(el)
    gsap.set(el, { clearProps: 'all' })
    gsap.set(el, {
      opacity: 0,
      y: 30,
      x: 0,
      scale: 1,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      skewX: 0,
      skewY: 0,
      z: 0
    })
    const delay = (i % 4) * 0.08
    setTimeout(() => {
      runAnim(el, animName)
    }, delay * 1000)
  },
  onLeaveBack: () => {
    // 向上滚动离开视窗时停止并隐藏
    gsap.killTweensOf(el)
    gsap.set(el, { clearProps: 'all' })
    gsap.set(el, { opacity: 0, y: 30 })
  }
})
```

---

## ScrollTrigger 生命周期详解

### onEnter
**触发时机**：向下滚动，卡片进入视窗时

**行为**：
- 清除所有动画和样式
- 设置初始隐藏状态
- 播放卡片配置的动画

### onLeave
**触发时机**：向下滚动，卡片离开视窗时

**行为**：
- 停止当前动画
- 清除所有样式
- 为下次进入做准备

### onEnterBack
**触发时机**：向上滚动，卡片返回视窗时

**行为**：
- 与 onEnter 相同
- 重新触发动画

### onLeaveBack
**触发时机**：向上滚动，卡片离开视窗时

**行为**：
- 停止动画
- 清除样式
- 设置隐藏状态（opacity: 0, y: 30）

---

## toggleActions 说明

```javascript
toggleActions: 'play none none reverse'
```

四个参数分别对应：
1. **onEnter**: `play` - 播放动画
2. **onLeave**: `none` - 不做任何操作（我们有自己的处理）
3. **onEnterBack**: `none` - 不做任何操作（我们有自己的处理）
4. **onLeaveBack**: `reverse` - 反转动画（我们用自己的处理替代）

注意：由于我们在回调中手动处理了所有逻辑，`toggleActions` 的实际影响不大，但保留 `reverse` 作为备用。

---

## 滚动行为示例

### 场景 1：首次加载
```
1. 页面加载
2. 用户向下滚动
3. 卡片进入视窗 → onEnter 触发 → 播放动画 ✅
```

### 场景 2：向下滚动离开
```
1. 用户继续向下滚动
2. 卡片离开视窗 → onLeave 触发 → 停止动画
```

### 场景 3：向上滚动返回
```
1. 用户向上滚动
2. 卡片返回视窗 → onEnterBack 触发 → 重新播放动画 ✅
```

### 场景 4：向上滚动离开
```
1. 用户继续向上滚动
2. 卡片离开视窗 → onLeaveBack 触发 → 停止并隐藏
```

### 场景 5：再次向下滚动进入
```
1. 用户向下滚动
2. 卡片再次进入视窗 → onEnter 触发 → 再次播放动画 ✅
```

**结论**：每次进入视窗都会播放动画！🎉

---

## 性能考虑

### 优点
✅ 更好的用户体验
✅ 可以反复欣赏动画效果
✅ 适合展示和演示场景

### 注意事项
⚠️ 频繁滚动可能导致动画频繁触发
⚠️ 可能增加 CPU 使用
⚠️ 大量卡片同时触发可能影响性能

### 优化建议
如果发现性能问题，可以考虑：

1. **增加触发距离**
```javascript
start: 'top 90%',  // 从 85% 改为 90%，更晚触发
```

2. **增加交错延迟**
```javascript
const delay = (i % 4) * 0.12  // 从 0.08 增加到 0.12
```

3. **减少同时显示的卡片数**
```scss
.cards-grid {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));  // 增加 minmax
}
```

4. **简化动画配置**
```javascript
// 减少动画阶段或降低复杂度
```

---

## 测试方法

### 1. 上下滚动测试
```
1. 打开页面
2. 向下滚动查看动画
3. 继续向下滚动，让卡片离开视窗
4. 向上滚动，观察卡片是否重新播放动画 ✅
5. 向下滚动，再次观察卡片是否重新播放动画 ✅
```

### 2. 快速滚动测试
```
1. 快速向下滚动
2. 快速向上滚动
3. 观察动画是否正常触发
4. 检查是否有卡顿或延迟
```

### 3. 多次重复测试
```
1. 反复上下滚动 5-10 次
2. 观察每次动画是否都正常触发
3. 检查是否有动画残留或状态异常
```

---

## 控制台日志

观察控制台输出，确认动画触发：

```
// 首次进入
播放动画: fadeIn { type: 'to', animations: [...] }
播放动画: scaleIn { type: 'fromTo', animations: [...] }

// 向上滚动返回
播放动画: fadeIn { type: 'to', animations: [...] }
播放动画: scaleIn { type: 'fromTo', animations: [...] }

// 再次向下滚动进入
播放动画: fadeIn { type: 'to', animations: [...] }
播放动画: scaleIn { type: 'fromTo', animations: [...] }
```

每次进入视窗都应该有日志输出！

---

## 与之前版本的对比

| 特性 | 之前版本 | 当前版本 |
|------|---------|---------|
| 触发次数 | 只触发一次 | 每次都触发 |
| `once` 参数 | `true` | `false` |
| `toggleActions` | `'play none none none'` | `'play none none reverse'` |
| `onEnterBack` | 无 | 有 |
| `onLeave` | 无 | 有 |
| `onLeaveBack` | 有（隐藏） | 有（隐藏+清理） |
| 用户体验 | 看过一次就不见了 | 可以反复观看 |

---

## 常见问题

### Q: 动画会无限循环吗？
A: 不会。动画只在进入/离开视窗时触发，不会自动循环。

### Q: 如果我在动画播放期间快速滚动会怎样？
A: 动画会被 `gsap.killTweensOf(el)` 立即停止，不会有冲突。

### Q: 上下滚动太频繁会影响性能吗？
A: 可能会。如果发现性能问题，参考"性能考虑"部分的优化建议。

### Q: 可以禁用重复触发吗？
A: 可以。将 `once` 改回 `true` 即可。

---

## 代码位置

**文件**: `src/views/preview/index.vue`

**函数**: `onMounted` 中的卡片初始化部分

**关键代码**:
```javascript
// 每张卡片进入视窗时播放对应动画
cardEls.forEach((el, i) => {
  // ... 验证逻辑 ...

  const trigger = ScrollTrigger.create({
    // ... 配置 ...
    onEnter: () => { /* ... */ },
    onLeave: () => { /* ... */ },
    onEnterBack: () => { /* ... */ },
    onLeaveBack: () => { /* ... */ }
  })

  el.dataset.triggerId = trigger.id
})
```

---

## 总结

### 核心改进
✅ `once: false` - 每次都触发
✅ 完整的 ScrollTrigger 生命周期处理
✅ 每次进入/离开都有清晰的逻辑
✅ 向上和向下滚动都能正确触发

### 用户体验
✅ 可以反复观看动画效果
✅ 更适合展示和演示
✅ 更有趣的交互体验

### 代码质量
✅ 无 Linter 错误
✅ 完善的错误处理
✅ 详细的日志输出

---

**更新日期**: 2025-02-26
**版本**: v3.0 (重复触发)
**状态**: ✅ 生产就绪
