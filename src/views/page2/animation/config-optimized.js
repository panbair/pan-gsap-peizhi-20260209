/**
 * 优化后的动画配置
 * 删除了重复和高度相似的动画，保留最具代表性的特效
 *
 * 从原始205个动画精简到65个核心动画
 * 保留原则：
 * 1. V1基础动画全部保留（标准CSS动画）
 * 2. 其他版本只保留最具代表性的特色动画
 * 3. 避免重复效果（如多个glitch/quantum/neon等系列）
 */

// ==================== V1 基础动画 (19个) - 全部保留 ====================
export const v1 = {
  // Fade 淡入淡出系列
  fadeIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInDown: {
    type: 'fromTo',
    animations: [
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutDown: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, y: 100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInUp: {
    type: 'fromTo',
    animations: [
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutUp: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, y: -100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInLeft: {
    type: 'fromTo',
    animations: [
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutLeft: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, x: -100, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeInRight: {
    type: 'fromTo',
    animations: [
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    ]
  },
  fadeOutRight: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, x: 100, duration: 0.8, ease: 'power2.out' }
    ]
  },

  // Scale 缩放系列
  scaleIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    ]
  },
  scaleOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.3, duration: 0.8, ease: 'power2.in' }
    ]
  },

  // Rotate 旋转系列
  rotateIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0, rotation: -180, scale: 0 },
      { opacity: 1, rotation: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
    ]
  },
  rotateOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1, rotation: 0, scale: 1 },
      { opacity: 0, rotation: 180, scale: 0, duration: 0.8, ease: 'power2.in' }
    ]
  },

  // Bounce 弹跳系列
  bounceIn: {
    type: 'fromTo',
    animations: [
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1.05, duration: 0.5, ease: 'elastic.out(1, 0.5)' },
      { scale: 1, duration: 0.2, ease: 'power2.out' }
    ]
  },
  bounceOut: {
    type: 'fromTo',
    animations: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.3, duration: 0.5, ease: 'back.in(1.7)' }
    ]
  },

  // Attention 注意力动画
  flash: {
    type: 'fromTo',
    animations: [
      { opacity: 1 },
      { opacity: 0, duration: 0.15, ease: 'none' },
      { opacity: 1, duration: 0.15, ease: 'none' },
      { opacity: 0, duration: 0.15, ease: 'none' },
      { opacity: 1, duration: 0.15, ease: 'none' }
    ]
  },
  shake: {
    type: 'fromTo',
    animations: [
      { x: 0 },
      { x: -10, duration: 0.1, ease: 'none' },
      { x: 10, duration: 0.1, ease: 'none' },
      { x: -10, duration: 0.1, ease: 'none' },
      { x: 10, duration: 0.1, ease: 'none' },
      { x: -10, duration: 0.1, ease: 'none' },
      { x: 10, duration: 0.1, ease: 'none' },
      { x: 0, duration: 0.1, ease: 'none' }
    ]
  },
  pulse: {
    type: 'fromTo',
    animations: [
      { scale: 1 },
      { scale: 1.05, duration: 0.4, ease: 'power2.out' },
      { scale: 1, duration: 0.4, ease: 'power2.in' }
    ]
  }
}

// ==================== V2 高级特效精选 (6个) ====================
export const v2 = {
  // 全息效果 - 保留最早实现
  hologram: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, filter: 'blur(10px) hue-rotate(90deg)', duration: 0 },
      { opacity: 0.8, scale: 1.1, filter: 'blur(2px) hue-rotate(180deg)', duration: 0.3, ease: 'power2.out' },
      { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.2, ease: 'power2.in' }
    ]
  },
  // 漩涡进场 - 独特的旋转缩放组合
  vortexIn: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0, rotation: -720, duration: 0 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  // 正弦波浪 - 流畅的S型运动
  sineWave: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 50, x: -30, duration: 0 },
      { opacity: 0.5, y: -50, x: 30, duration: 0.3, ease: 'power1.inOut' },
      { opacity: 1, y: 0, x: 0, duration: 0.3, ease: 'power1.inOut' }
    ]
  },
  // 极光 - 唯一保留的极光类动画
  aurora: {
    type: 'timeline',
    animations: [
      { opacity: 0, filter: 'blur(20px) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.7, filter: 'blur(15px) hue-rotate(60deg)', duration: 0.4, ease: 'power2.out' },
      { opacity: 1, filter: 'blur(10px) hue-rotate(120deg)', duration: 0.3, ease: 'power2.in' },
      { opacity: 1, filter: 'blur(5px) hue-rotate(0deg)', duration: 0.3, ease: 'power2.out' }
    ]
  },
  // 晶体折射 - 唯一保留的晶体类动画
  crystalRefraction: {
    type: 'timeline',
    animations: [
      { opacity: 0, rotation: 0, filter: 'blur(10px)', duration: 0 },
      { opacity: 0.8, rotation: 45, filter: 'blur(5px)', duration: 0.3, ease: 'power2.out' },
      { opacity: 0.5, rotation: -45, filter: 'blur(8px)', duration: 0.2, ease: 'power2.in' },
      { opacity: 1, rotation: 0, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 超空间跳跃 - 唯一保留的空间跳跃动画
  timeWarp: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotation: 0, filter: 'blur(50px)', duration: 0 },
      { opacity: 0.5, scale: 2, rotation: 180, filter: 'blur(30px)', duration: 0.3, ease: 'power2.out' },
      { opacity: 0.8, scale: 3, rotation: 360, filter: 'blur(15px)', duration: 0.2, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.25, ease: 'elastic.out(1, 0.4)' }
    ]
  }
}

// ==================== V3 前沿特效精选 (4个) ====================
export const v3 = {
  // 虫洞穿越 - 独特的3D效果
  wormhole: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotationZ: 0, rotationX: 0, filter: 'blur(100px)', duration: 0 },
      { opacity: 0.6, scale: 3, rotationZ: 180, rotationX: 90, filter: 'blur(50px)', duration: 0.25, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.5, rotationZ: -180, rotationX: -90, filter: 'blur(75px)', duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationZ: 0, rotationX: 0, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  // 超空间驱动 - 最震撼的空间动画
  warpDrive: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, perspective: 1000, rotationX: 0, z: -1000, duration: 0 },
      { opacity: 0.7, scale: 0.5, rotationX: 45, z: -500, duration: 0.3, ease: 'power2.out' },
      { opacity: 0.3, scale: 2, rotationX: -45, z: 0, duration: 0.2, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationX: 0, z: 0, duration: 0.25, ease: 'elastic.out(1, 0.6)' }
    ]
  },
  // 量子纠缠 - 唯一保留的量子类动画
  quantumEntanglement: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0, rotation: 0, filter: 'blur(20px)', duration: 0 },
      { opacity: 0.5, scale: 0.8, rotation: 180, filter: 'blur(10px)', duration: 0.2, ease: 'power2.out' },
      { opacity: 0.3, scale: 1.2, rotation: -180, filter: 'blur(15px)', duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 元宇宙进场 - 独特的沉浸式效果
  metaverse: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotationY: 0, filter: 'blur(30px)', duration: 0 },
      { opacity: 0.6, scale: 1.5, rotationY: 90, filter: 'blur(15px)', duration: 0.3, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.8, rotationY: -90, filter: 'blur(20px)', duration: 0.2, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationY: 0, filter: 'blur(0px)', duration: 0.25, ease: 'elastic.out(1, 0.5)' }
    ]
  }
}

// ==================== V4 炫酷特效精选 (5个) ====================
export const v4 = {
  // 霓虹故障 - 经典的故障效果
  neonGlitch: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: -30, filter: 'blur(5px) hue-rotate(0deg)', duration: 0 },
      { opacity: 1, x: 30, filter: 'blur(3px) hue-rotate(120deg)', duration: 0.05, ease: 'none' },
      { opacity: 0.8, x: -20, filter: 'blur(8px) hue-rotate(240deg)', duration: 0.05, ease: 'none' },
      { opacity: 1, x: 20, filter: 'blur(2px) hue-rotate(360deg)', duration: 0.05, ease: 'none' },
      { opacity: 1, x: 0, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.1, ease: 'power2.out' }
    ]
  },
  // 粒子爆发 - 最简洁的爆炸效果
  particleBurst: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0, rotation: 0, duration: 0 },
      { opacity: 1, scale: 1.8, rotation: 180, duration: 0.2, ease: 'back.out(2)' },
      { scale: 0.9, rotation: 360, duration: 0.15, ease: 'power2.in' },
      { scale: 1, rotation: 0, duration: 0.15, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  // 液体变形 - 最自然的变形效果
  liquidMorph: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.3, borderRadius: '50%', rotation: 0, duration: 0 },
      { opacity: 0.5, scale: 1.2, borderRadius: '30%', rotation: 90, duration: 0.3, ease: 'power1.inOut' },
      { opacity: 1, scale: 0.8, borderRadius: '10%', rotation: 180, duration: 0.25, ease: 'power1.inOut' },
      { opacity: 1, scale: 1, borderRadius: '20px', rotation: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  // 赛博朋克升起 - 独特的skew组合效果
  cyberpunkRise: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, skewX: -30, skewY: -20, filter: 'blur(30px) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.4, scale: 0.6, skewX: 20, skewY: 15, filter: 'blur(20px) hue-rotate(45deg)', duration: 0.15, ease: 'power2.out' },
      { opacity: 0.7, scale: 1.4, skewX: -15, skewY: -10, filter: 'blur(10px) hue-rotate(90deg)', duration: 0.12, ease: 'power2.in' },
      { opacity: 0.5, scale: 0.9, skewX: 10, skewY: 8, filter: 'blur(15px) hue-rotate(135deg)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.9, scale: 1.1, skewX: -5, skewY: -4, filter: 'blur(8px) hue-rotate(180deg)', duration: 0.08, ease: 'power2.in' },
      { opacity: 1, scale: 1, skewX: 0, skewY: 0, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 虚空崩溃 - 独特的逆向动画
  voidCollapse: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 3, filter: 'blur(50px) invert(1)', duration: 0 },
      { opacity: 0.6, scale: 2, filter: 'blur(30px) invert(0.5)', duration: 0.2, ease: 'power2.in' },
      { opacity: 0.3, scale: 1.5, filter: 'blur(15px) invert(0.2)', duration: 0.15, ease: 'power2.out' },
      { opacity: 1, scale: 1, filter: 'blur(0px) invert(0)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  }
}

// ==================== V5 极限冲击特效精选 (5个) ====================
export const v5 = {
  // 超空间跳跃 - 最震撼的维度变换
  hyperspaceJump: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, rotationX: 0, rotationY: 0, z: -2000, duration: 0 },
      { opacity: 0.5, scale: 0.5, rotationX: 45, rotationY: 45, z: -1000, duration: 0.2, ease: 'power2.out' },
      { opacity: 0.8, scale: 1.5, rotationX: -45, rotationY: -45, z: -500, duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, z: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
    ]
  },
  // 维度级联 - 复杂的多维变换
  dimensionCascade: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0 },
      { opacity: 0.3, scale: 0.5, rotationX: 90, rotationY: 0, rotationZ: 0, duration: 0.12, ease: 'power2.out' },
      { opacity: 0.6, scale: 1.2, rotationX: 90, rotationY: 90, rotationZ: 0, duration: 0.12, ease: 'power2.in' },
      { opacity: 0.4, scale: 0.8, rotationX: 90, rotationY: 90, rotationZ: 90, duration: 0.1, ease: 'power2.out' },
      { opacity: 0.8, scale: 1.1, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 超新星核心 - 最强的爆炸效果
  supernovaCore: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, filter: 'blur(50px) brightness(3)', duration: 0 },
      { opacity: 1, scale: 2.5, filter: 'blur(30px) brightness(2.5)', duration: 0.18, ease: 'power2.out' },
      { opacity: 0.7, scale: 4, filter: 'blur(40px) brightness(2)', duration: 0.12, ease: 'power2.in' },
      { opacity: 1, scale: 1.8, filter: 'blur(20px) brightness(1.5)', duration: 0.15, ease: 'power2.out' },
      { opacity: 0.8, scale: 2.5, filter: 'blur(25px) brightness(1.3)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 等离子风暴 - 最完整的等离子效果
  plasmaStorm: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, filter: 'blur(60px) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.5, scale: 1.5, filter: 'blur(40px) hue-rotate(60deg)', duration: 0.15, ease: 'power2.out' },
      { opacity: 0.8, scale: 2.2, filter: 'blur(25px) hue-rotate(120deg)', duration: 0.12, ease: 'power2.in' },
      { opacity: 0.6, scale: 1.8, filter: 'blur(35px) hue-rotate(180deg)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.9, scale: 1.3, filter: 'blur(15px) hue-rotate(240deg)', duration: 0.08, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 超高维度 - 最复杂的维度效果
  hyperDimensional: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.01, perspective: 1000, rotationX: 0, rotationY: 0, rotationZ: 0, z: -2000, duration: 0 },
      { opacity: 0.4, scale: 0.5, rotationX: 45, rotationY: 45, rotationZ: 45, z: -1000, duration: 0.15, ease: 'power2.out' },
      { opacity: 0.7, scale: 1.5, rotationX: -45, rotationY: -45, rotationZ: -45, z: -500, duration: 0.12, ease: 'power2.in' },
      { opacity: 0.5, scale: 0.8, rotationX: 22.5, rotationY: 22.5, rotationZ: 22.5, z: -250, duration: 0.1, ease: 'power2.out' },
      { opacity: 0.9, scale: 1.2, rotationX: -22.5, rotationY: -22.5, rotationZ: -22.5, z: -100, duration: 0.08, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, z: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
    ]
  }
}

// ==================== V6 光影特效精选 (6个) ====================
export const v6 = {
  // 霓虹脉冲 - 唯一保留的霓虹动画
  neonPulsar: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, filter: 'blur(10px) drop-shadow(0 0 0 rgba(0, 255, 255, 0))', duration: 0 },
      { opacity: 1, scale: 1.2, filter: 'blur(5px) drop-shadow(0 0 20px rgba(0, 255, 255, 0.8))', duration: 0.3, ease: 'power2.out' },
      { opacity: 0.8, scale: 0.9, filter: 'blur(8px) drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))', duration: 0.2, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px) drop-shadow(0 0 10px rgba(0, 255, 255, 0.4))', duration: 0.25, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 激光扫描 - 独特的扫描效果
  laserSweep: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: -200, skewX: -20, filter: 'blur(2px)', duration: 0 },
      { opacity: 1, x: 200, skewX: 20, filter: 'blur(5px)', duration: 0.4, ease: 'power1.inOut' },
      { opacity: 0.7, x: -100, skewX: -10, filter: 'blur(3px)', duration: 0.2, ease: 'power1.inOut' },
      { opacity: 1, x: 0, skewX: 0, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 光环光晕 - 柔和的光晕效果
  haloGlow: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.8, filter: 'blur(30px) brightness(2)', duration: 0 },
      { opacity: 0.6, scale: 1.3, filter: 'blur(20px) brightness(1.8)', duration: 0.3, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.9, filter: 'blur(25px) brightness(1.5)', duration: 0.2, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.1, filter: 'blur(15px) brightness(1.3)', duration: 0.15, ease: 'power2.out' },
      { opacity: 1, scale: 1, filter: 'blur(10px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 玻璃折射 - 唯一的折射效果
  glassRefraction: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.9, rotation: 0, filter: 'blur(15px) brightness(1.5)', duration: 0 },
      { opacity: 0.7, scale: 1.1, rotation: 15, filter: 'blur(8px) brightness(1.3)', duration: 0.25, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.95, rotation: -10, filter: 'blur(12px) brightness(1.2)', duration: 0.15, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.05, rotation: 5, filter: 'blur(5px) brightness(1.1)', duration: 0.12, ease: 'power2.out' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px) brightness(1)', duration: 0.18, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 星尘闪烁 - 柔和的粒子效果
  stardustTwinkle: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, filter: 'blur(20px)', duration: 0 },
      { opacity: 0.6, scale: 1.3, filter: 'blur(12px)', duration: 0.25, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.8, filter: 'blur(18px)', duration: 0.18, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.1, filter: 'blur(8px)', duration: 0.14, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.9, filter: 'blur(10px)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 魔法光环 - 独特的魔法效果
  magicAura: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.6, filter: 'blur(25px) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.7, scale: 1.4, filter: 'blur(15px) hue-rotate(45deg)', duration: 0.28, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.85, filter: 'blur(20px) hue-rotate(90deg)', duration: 0.2, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.15, filter: 'blur(10px) hue-rotate(135deg)', duration: 0.16, ease: 'power2.out' },
      { opacity: 1, scale: 1, filter: 'blur(5px) hue-rotate(180deg)', duration: 0.22, ease: 'elastic.out(1, 0.35)' }
    ]
  }
}

// ==================== V7 超越极限精选 (5个) ====================
export const v7 = {
  // 弹簧进场 - 最基础的弹性效果
  springEntrance: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.3, rotation: 0, duration: 0 },
      { opacity: 0.7, scale: 1.3, rotation: 5, duration: 0.4, ease: 'elastic.out(1, 0.5)' },
      { scale: 0.95, rotation: -2, duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 交错波浪 - 独特的波浪效果
  staggerWave: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 100, scale: 0.5, duration: 0 },
      { opacity: 0.8, y: -50, scale: 1.1, duration: 0.35, ease: 'power2.out' },
      { y: 25, scale: 0.95, duration: 0.2, ease: 'power2.in' },
      { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 3D弹性折叠 - 唯一的3D折叠效果
  elastic3DFold: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.4, rotationX: 90, rotationY: 0, duration: 0 },
      { opacity: 0.7, scale: 1.2, rotationX: 45, rotationY: 45, duration: 0.3, ease: 'elastic.out(1, 0.6)' },
      { scale: 0.9, rotationX: 22.5, rotationY: -22.5, duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationX: 0, rotationY: 0, duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 弹性变形 - 唯一的弹性变形效果
  elasticMorph: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, borderRadius: '50%', rotation: 0, duration: 0 },
      { opacity: 0.7, scale: 1.3, borderRadius: '20%', rotation: 180, duration: 0.35, ease: 'elastic.out(1, 0.5)' },
      { scale: 0.9, borderRadius: '15%', rotation: -90, duration: 0.18, ease: 'power2.in' },
      { opacity: 1, scale: 1, borderRadius: '10px', rotation: 0, duration: 0.22, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 弹性滑动 - 唯一的弹性滑动效果
  elasticSlide: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: -150, scale: 0.8, duration: 0 },
      { opacity: 0.8, x: 30, scale: 1.1, duration: 0.4, ease: 'elastic.out(1, 0.5)' },
      { x: -15, scale: 0.95, duration: 0.16, ease: 'power2.in' },
      { opacity: 1, x: 0, scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  }
}

// ==================== V8 量子维度精选 (5个) ====================
export const v8 = {
  // 量子具象化 - 最完整的量子效果
  quantumMaterialize: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, filter: 'blur(30px) hue-rotate(180deg)', duration: 0 },
      { opacity: 0.5, scale: 1.5, filter: 'blur(20px) hue-rotate(120deg)', duration: 0.2, ease: 'power2.out' },
      { opacity: 0.3, scale: 0.8, filter: 'blur(25px) hue-rotate(60deg)', duration: 0.12, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.2, filter: 'blur(15px) hue-rotate(0deg)', duration: 0.15, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.95, filter: 'blur(10px) hue-rotate(-60deg)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.18, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 维度相位 - 独特的相位变换
  dimensionalPhase: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, perspective: 1000, rotationX: 0, z: -1000, duration: 0 },
      { opacity: 0.6, scale: 1.2, rotationX: 45, z: -500, duration: 0.22, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.85, rotationX: -30, z: -250, duration: 0.14, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.1, rotationX: 15, z: -100, duration: 0.18, ease: 'power2.out' },
      { opacity: 1, scale: 1, rotationX: 0, z: 0, duration: 0.2, ease: 'elastic.out(1, 0.35)' }
    ]
  },
  // 神经脉冲 - 独特的脉冲传播效果
  neuroPulse: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.3, filter: 'blur(15px)', duration: 0 },
      { opacity: 1, scale: 1.4, filter: 'blur(8px)', duration: 0.25, ease: 'back.out(1.5)' },
      { scale: 0.85, filter: 'blur(12px)', duration: 0.12, ease: 'power2.in' },
      { scale: 1.15, filter: 'blur(5px)', duration: 0.1, ease: 'power2.out' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 共振场 - 唯一的共振效果
  resonanceField: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.4, filter: 'blur(25px)', duration: 0 },
      { opacity: 0.7, scale: 1.6, filter: 'blur(12px)', duration: 0.3, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.7, filter: 'blur(20px)', duration: 0.18, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.3, filter: 'blur(6px)', duration: 0.15, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.9, filter: 'blur(10px)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 晶体矩阵 - 独特的矩阵效果
  crystalMatrix: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotation: 0, filter: 'blur(30px)', duration: 0 },
      { opacity: 0.6, scale: 1.3, rotation: 45, filter: 'blur(18px)', duration: 0.22, ease: 'power2.out' },
      { opacity: 0.3, scale: 0.8, rotation: -30, filter: 'blur(24px)', duration: 0.14, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.15, rotation: 15, filter: 'blur(10px)', duration: 0.16, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.95, rotation: -5, filter: 'blur(5px)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.18, ease: 'elastic.out(1, 0.35)' }
    ]
  }
}

// ==================== V9 时空幻境精选 (5个) ====================
export const v9 = {
  // 时间膨胀 - 独特的时间效果
  timeDilation: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, timeScale: 0.1, filter: 'blur(20px)', duration: 0 },
      { opacity: 0.7, scale: 1.5, timeScale: 2, filter: 'blur(10px)', duration: 0.35, ease: 'power2.out' },
      { opacity: 0.4, scale: 0.8, timeScale: 0.5, filter: 'blur(15px)', duration: 0.2, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.2, timeScale: 1.5, filter: 'blur(5px)', duration: 0.25, ease: 'power2.out' },
      { opacity: 1, scale: 1, timeScale: 1, filter: 'blur(0px)', duration: 0.3, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 空间折叠 - 唯一的空间折叠效果
  spatialFold: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, perspective: 1000, rotationX: 0, z: -2000, duration: 0 },
      { opacity: 0.5, scale: 0.6, rotationX: 60, z: -1000, duration: 0.2, ease: 'power2.out' },
      { opacity: 0.3, scale: 0.4, rotationX: -30, z: -500, duration: 0.12, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.3, rotationX: 15, z: -250, duration: 0.18, ease: 'power2.out' },
      { opacity: 0.6, scale: 0.85, rotationX: -7, z: -100, duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotationX: 0, z: 0, duration: 0.22, ease: 'elastic.out(1, 0.35)' }
    ]
  },
  // 虚空构建 - 独特的虚空效果
  voidConstruct: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0, filter: 'blur(50px) invert(1)', duration: 0 },
      { opacity: 0.6, scale: 2, filter: 'blur(30px) invert(0.5)', duration: 0.22, ease: 'power2.out' },
      { opacity: 0.3, scale: 0.5, filter: 'blur(40px) invert(0.75)', duration: 0.14, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.5, filter: 'blur(15px) invert(0.25)', duration: 0.18, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.8, filter: 'blur(20px) invert(0.5)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px) invert(0)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },
  // 混沌理论 - 独特的混沌效果
  chaosTheory: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotation: 0, x: 0, y: 0, filter: 'blur(25px)', duration: 0 },
      { opacity: 0.6, scale: 1.4, rotation: 90, x: 30, y: -30, filter: 'blur(12px)', duration: 0.25, ease: 'power2.out' },
      { opacity: 0.3, scale: 0.7, rotation: -45, x: -15, y: 15, filter: 'blur(20px)', duration: 0.15, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.2, rotation: 22.5, x: 7, y: -7, filter: 'blur(8px)', duration: 0.18, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.9, rotation: -11, x: -3, y: 3, filter: 'blur(5px)', duration: 0.1, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 0, x: 0, y: 0, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 多元宇宙 - 唯一的多维宇宙效果
  multiverse: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, perspective: 1000, rotationX: 0, rotationY: 0, rotationZ: 0, z: -3000, duration: 0 },
      { opacity: 0.4, scale: 0.5, rotationX: 45, rotationY: 0, rotationZ: 0, z: -1500, duration: 0.15, ease: 'power2.out' },
      { opacity: 0.7, scale: 1.3, rotationX: 45, rotationY: 45, rotationZ: 0, z: -750, duration: 0.12, ease: 'power2.in' },
      { opacity: 0.5, scale: 0.75, rotationX: 45, rotationY: 45, rotationZ: 45, z: -375, duration: 0.1, ease: 'power2.out' },
      { opacity: 0.9, scale: 1.15, rotationX: 0, rotationY: 0, rotationZ: 0, z: -187, duration: 0.15, ease: 'power2.in' },
      { opacity: 1, scale: 1, z: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
    ]
  }
}

// ==================== V10 超视觉系列精选 (3个) ====================
export const v10 = {
  // 像素故障 - 唯一保留的像素故障效果
  pixelGlitch: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: 0, y: 0, filter: 'blur(0px) contrast(1)', duration: 0 },
      { opacity: 1, x: -5, y: 2, filter: 'blur(1px) contrast(1.5)', duration: 0.05, ease: 'none' },
      { opacity: 0.8, x: 5, y: -2, filter: 'blur(2px) contrast(0.5)', duration: 0.05, ease: 'none' },
      { opacity: 1, x: -3, y: 1, filter: 'blur(1.5px) contrast(2)', duration: 0.05, ease: 'none' },
      { opacity: 0.9, x: 3, y: -1, filter: 'blur(0.5px) contrast(0.8)', duration: 0.05, ease: 'none' },
      { opacity: 1, x: 0, y: 0, filter: 'blur(0px) contrast(1)', duration: 0.1, ease: 'power2.out' }
    ]
  },
  // 扫描线扭曲 - 唯一的扫描线效果
  scanlineDistort: {
    type: 'timeline',
    animations: [
      { opacity: 0, scaleY: 0.1, filter: 'blur(3px) saturate(0)', duration: 0 },
      { opacity: 0.7, scaleY: 1.5, filter: 'blur(1px) saturate(2)', duration: 0.2, ease: 'power2.out' },
      { opacity: 0.4, scaleY: 0.8, filter: 'blur(2px) saturate(0.5)', duration: 0.1, ease: 'power2.in' },
      { opacity: 0.9, scaleY: 1.2, filter: 'blur(0.5px) saturate(1.5)', duration: 0.12, ease: 'power2.out' },
      { opacity: 0.6, scaleY: 0.9, filter: 'blur(1px) saturate(0.8)', duration: 0.08, ease: 'power2.in' },
      { opacity: 1, scaleY: 1, filter: 'blur(0px) saturate(1)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 波形失真 - 唯一的波形效果
  waveDistortion: {
    type: 'timeline',
    animations: [
      { opacity: 0, skewX: 0, skewY: 0, filter: 'blur(0px)', duration: 0 },
      { opacity: 0.8, skewX: -15, skewY: 10, filter: 'blur(2px)', duration: 0.18, ease: 'power1.out' },
      { opacity: 0.5, skewX: 12, skewY: -8, filter: 'blur(4px)', duration: 0.12, ease: 'power1.in' },
      { opacity: 0.9, skewX: -6, skewY: 4, filter: 'blur(1px)', duration: 0.1, ease: 'power1.out' },
      { opacity: 0.7, skewX: 3, skewY: -2, filter: 'blur(2px)', duration: 0.08, ease: 'power1.in' },
      { opacity: 1, skewX: 0, skewY: 0, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  }
}

// ==================== V11 爆炸破坏特效精选 (3个) ====================
export const v11 = {
  // 核爆炸 - 最震撼的爆炸效果
  nuclearExplosion: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, filter: 'blur(80px) brightness(10)', duration: 0 },
      { opacity: 1, scale: 3, filter: 'blur(40px) brightness(8) hue-rotate(20deg)', duration: 0.15, ease: 'power2.out' },
      { opacity: 0.6, scale: 4.5, filter: 'blur(60px) brightness(6) hue-rotate(40deg)', duration: 0.1, ease: 'power2.in' },
      { opacity: 0.9, scale: 2.5, filter: 'blur(20px) brightness(9) hue-rotate(10deg)', duration: 0.12, ease: 'power2.out' },
      { opacity: 0.5, scale: 5, filter: 'blur(50px) brightness(5) hue-rotate(60deg)', duration: 0.08, ease: 'power2.in' },
      { opacity: 1, scale: 1.8, filter: 'blur(10px) brightness(7) hue-rotate(5deg)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.7, scale: 3.5, filter: 'blur(30px) brightness(4) hue-rotate(80deg)', duration: 0.07, ease: 'power2.in' },
      { opacity: 1, scale: 1.2, filter: 'blur(5px) brightness(6) hue-rotate(0deg)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.9, scale: 2, filter: 'blur(8px) brightness(3) hue-rotate(15deg)', duration: 0.06, ease: 'power2.in' },
      { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.14, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 玻璃破碎 - 独特的破碎效果
  glassShatter: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 1, rotate: 0, filter: 'blur(0px)', duration: 0 },
      { opacity: 1, scale: 1.1, rotate: 5, filter: 'blur(2px)', duration: 0.08, ease: 'power1.out' },
      { opacity: 0.9, scale: 1.3, rotate: -8, filter: 'blur(5px)', duration: 0.06, ease: 'power1.in' },
      { opacity: 1, scale: 1.15, rotate: 12, filter: 'blur(3px)', duration: 0.07, ease: 'power1.out' },
      { opacity: 0.8, scale: 1.6, rotate: -15, filter: 'blur(8px)', duration: 0.05, ease: 'power1.in' },
      { opacity: 1, scale: 1.2, rotate: 8, filter: 'blur(4px)', duration: 0.06, ease: 'power1.out' },
      { opacity: 0.85, scale: 1.4, rotate: -10, filter: 'blur(6px)', duration: 0.05, ease: 'power1.in' },
      { opacity: 1, scale: 1.1, rotate: 6, filter: 'blur(2px)', duration: 0.06, ease: 'power1.out' },
      { opacity: 0.9, scale: 1.05, rotate: -3, filter: 'blur(1px)', duration: 0.04, ease: 'power1.in' },
      { opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)', duration: 0.08, ease: 'elastic.out(1, 0.3)' }
    ]
  },
  // 晶体爆炸 - 独特的晶体爆炸效果
  crystalExplosion: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.3, rotation: 0, filter: 'blur(20px)', duration: 0 },
      { opacity: 1, scale: 2, rotation: 45, filter: 'blur(10px)', duration: 0.12, ease: 'back.out(2)' },
      { opacity: 0.7, scale: 3.5, rotation: 90, filter: 'blur(15px)', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.9, scale: 1.8, rotation: -45, filter: 'blur(8px)', duration: 0.1, ease: 'power2.out' },
      { opacity: 0.6, scale: 4, rotation: 135, filter: 'blur(12px)', duration: 0.06, ease: 'power2.in' },
      { opacity: 0.95, scale: 1.3, rotation: -22, filter: 'blur(5px)', duration: 0.08, ease: 'power2.out' },
      { opacity: 0.8, scale: 3, rotation: 67, filter: 'blur(7px)', duration: 0.05, ease: 'power2.in' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
    ]
  }
}

// ==================== V12 创新动画系列 (22个) - 全新创作 ====================
export const v12 = {
  // 水波纹扩散 - 像水滴落在水面的效果
  rippleExpand: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.3, borderRadius: '50%', filter: 'blur(0px)', duration: 0 },
      { opacity: 0.8, scale: 0.6, filter: 'blur(2px)', duration: 0.15, ease: 'power1.out' },
      { opacity: 0.4, scale: 1.5, filter: 'blur(4px)', duration: 0.12, ease: 'power1.in' },
      { opacity: 0.9, scale: 1.1, filter: 'blur(2px)', duration: 0.1, ease: 'power1.out' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 极光飘舞 - 流动的北极光效果
  auroraDance: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 50, x: 0, filter: 'blur(20px) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.7, y: -30, x: 20, filter: 'blur(15px) hue-rotate(45deg)', duration: 0.25, ease: 'sine.inOut' },
      { opacity: 0.5, y: 20, x: -15, filter: 'blur(18px) hue-rotate(90deg)', duration: 0.18, ease: 'sine.inOut' },
      { opacity: 0.9, y: -10, x: 8, filter: 'blur(10px) hue-rotate(135deg)', duration: 0.15, ease: 'sine.inOut' },
      { opacity: 1, y: 0, x: 0, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.25, ease: 'elastic.out(1, 0.4)' }
    ]
  },

  // 磁场吸引 - 被磁场吸入的效果
  magneticPull: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: 200, y: 0, scale: 0.5, rotation: 180, duration: 0 },
      { opacity: 0.6, x: 100, y: -20, scale: 0.7, rotation: 90, duration: 0.2, ease: 'power3.in' },
      { opacity: 0.8, x: 50, y: 10, scale: 0.85, rotation: 45, duration: 0.12, ease: 'power2.in' },
      { opacity: 0.9, x: 20, y: -5, scale: 0.95, rotation: 22, duration: 0.08, ease: 'power1.in' },
      { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 0.15, ease: 'elastic.out(1, 0.5)' }
    ]
  },

  // 星光闪烁 - 星星闪烁出现的效果
  starTwinkle: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotation: 0, filter: 'blur(5px)', duration: 0 },
      { opacity: 0.5, scale: 0.5, rotation: 45, filter: 'blur(3px)', duration: 0.1, ease: 'power1.out' },
      { opacity: 0.8, scale: 1.3, rotation: -30, filter: 'blur(1px)', duration: 0.08, ease: 'power1.in' },
      { opacity: 0.6, scale: 0.9, rotation: 15, filter: 'blur(2px)', duration: 0.06, ease: 'power1.out' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.12, ease: 'elastic.out(1, 0.4)' }
    ]
  },

  // 流星划过 - 流星坠落的效果
  meteorFall: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: -300, y: -200, scale: 0.3, rotation: -45, filter: 'blur(10px)', duration: 0 },
      { opacity: 1, x: -100, y: -60, scale: 0.8, rotation: -45, filter: 'blur(5px)', duration: 0.25, ease: 'power2.out' },
      { x: 0, y: 0, scale: 1.1, duration: 0.15, ease: 'power2.in' },
      { scale: 1, duration: 0.12, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // DNA螺旋 - DNA双螺旋上升的效果
  dnaRise: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 150, scale: 0.4, rotationY: 0, filter: 'blur(15px)', duration: 0 },
      { opacity: 0.5, y: 80, scale: 0.7, rotationY: 90, filter: 'blur(10px)', duration: 0.2, ease: 'power2.out' },
      { opacity: 0.8, y: 30, scale: 0.9, rotationY: -90, filter: 'blur(5px)', duration: 0.12, ease: 'power2.in' },
      { opacity: 0.6, y: 10, scale: 0.95, rotationY: 45, filter: 'blur(3px)', duration: 0.08, ease: 'power1.out' },
      { opacity: 1, y: 0, scale: 1, rotationY: 0, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.4)' }
    ]
  },

  // 火焰燃烧 - 火焰从底部升起
  flameIgnite: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 100, scale: 0.6, filter: 'blur(20px) brightness(1.5)', duration: 0 },
      { opacity: 0.7, y: 50, scale: 0.8, filter: 'blur(15px) brightness(2) hue-rotate(10deg)', duration: 0.15, ease: 'power1.out' },
      { opacity: 1, y: 20, scale: 1.1, filter: 'blur(10px) brightness(2.5) hue-rotate(20deg)', duration: 0.1, ease: 'power1.in' },
      { opacity: 0.9, y: 5, scale: 1.05, filter: 'blur(5px) brightness(2) hue-rotate(10deg)', duration: 0.08, ease: 'power1.out' },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px) brightness(1) hue-rotate(0deg)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 冰霜凝结 - 从底部向上结冰
  frostForm: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 150, scale: 0.7, filter: 'blur(15px) brightness(0.8)', duration: 0 },
      { opacity: 0.6, y: 100, scale: 0.85, filter: 'blur(12px) brightness(0.9)', duration: 0.18, ease: 'power2.out' },
      { opacity: 0.8, y: 50, scale: 0.95, filter: 'blur(8px) brightness(1)', duration: 0.12, ease: 'power2.in' },
      { opacity: 0.9, y: 15, scale: 1.02, filter: 'blur(4px) brightness(1.1)', duration: 0.08, ease: 'power1.out' },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 旋转木马 - 温柔的3D旋转效果
  carouselSpin: {
    type: 'timeline',
    animations: [
      { opacity: 0, perspective: 1000, rotationY: -180, scale: 0.6, duration: 0 },
      { opacity: 0.7, rotationY: -90, scale: 0.8, duration: 0.25, ease: 'power1.inOut' },
      { opacity: 0.9, rotationY: 0, scale: 1.1, duration: 0.2, ease: 'power1.inOut' },
      { opacity: 0.8, rotationY: 45, scale: 0.95, duration: 0.1, ease: 'power1.inOut' },
      { opacity: 1, rotationY: 0, scale: 1, duration: 0.15, ease: 'elastic.out(1, 0.35)' }
    ]
  },

  // 弹簧跳入 - 像弹簧一样跳出来
  springJump: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: -200, scaleY: 0.3, duration: 0 },
      { opacity: 1, y: 30, scaleY: 1.5, duration: 0.4, ease: 'elastic.out(1, 0.8)' },
      { y: -15, scaleY: 0.85, duration: 0.12, ease: 'power2.in' },
      { y: 5, scaleY: 1.05, duration: 0.08, ease: 'power1.out' },
      { y: 0, scaleY: 1, duration: 0.1, ease: 'elastic.out(1, 0.25)' }
    ]
  },

  // 能量充能 - 像电池充电一样的效果
  energyCharge: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.5, filter: 'blur(10px) brightness(0.5)', duration: 0 },
      { opacity: 0.6, scale: 0.7, filter: 'blur(8px) brightness(1.2)', duration: 0.15, ease: 'power1.out' },
      { opacity: 0.4, scale: 0.6, filter: 'blur(12px) brightness(0.8)', duration: 0.08, ease: 'power1.in' },
      { opacity: 0.8, scale: 0.9, filter: 'blur(5px) brightness(1.5)', duration: 0.1, ease: 'power1.out' },
      { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },

  // 梦境漂浮 - 轻柔的漂浮效果
  dreamFloat: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: -80, scale: 0.9, filter: 'blur(10px)', duration: 0 },
      { opacity: 0.7, y: 40, scale: 1.05, filter: 'blur(5px)', duration: 0.3, ease: 'sine.inOut' },
      { opacity: 0.9, y: -20, scale: 0.98, filter: 'blur(3px)', duration: 0.18, ease: 'sine.inOut' },
      { opacity: 1, y: 10, scale: 1.02, filter: 'blur(1px)', duration: 0.12, ease: 'sine.inOut' },
      { y: 0, scale: 1, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.25)' }
    ]
  },

  // 闪电闪现 - 快速闪电效果
  lightningStrike: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.8, filter: 'blur(5px)', duration: 0 },
      { opacity: 1, scale: 1.2, filter: 'blur(2px)', duration: 0.05, ease: 'power1.out' },
      { opacity: 0.3, scale: 0.95, filter: 'blur(8px)', duration: 0.03, ease: 'none' },
      { opacity: 1, scale: 1.1, filter: 'blur(1px)', duration: 0.04, ease: 'power1.out' },
      { opacity: 0.5, scale: 1.02, filter: 'blur(3px)', duration: 0.03, ease: 'none' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 棱镜折射 - 光线通过棱镜的彩色效果
  prismRefract: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: -50, scale: 0.6, filter: 'blur(10px) hue-rotate(0deg)', duration: 0 },
      { opacity: 0.7, x: 30, scale: 1.2, filter: 'blur(5px) hue-rotate(60deg)', duration: 0.18, ease: 'power1.out' },
      { opacity: 0.5, x: -20, scale: 0.9, filter: 'blur(8px) hue-rotate(120deg)', duration: 0.1, ease: 'power1.in' },
      { opacity: 0.9, x: 15, scale: 1.08, filter: 'blur(3px) hue-rotate(180deg)', duration: 0.08, ease: 'power1.out' },
      { opacity: 1, x: 0, scale: 1, filter: 'blur(0px) hue-rotate(0deg)', duration: 0.2, ease: 'elastic.out(1, 0.35)' }
    ]
  },

  // 气球升空 - 气球慢慢升起的效果
  balloonRise: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 200, scale: 0.8, rotation: -10, duration: 0 },
      { opacity: 0.8, y: 100, scale: 0.95, rotation: 5, duration: 0.3, ease: 'power1.out' },
      { opacity: 1, y: 30, scale: 1.05, rotation: -3, duration: 0.18, ease: 'power1.in' },
      { y: 10, scale: 1.02, rotation: 2, duration: 0.08, ease: 'power1.out' },
      { y: 0, scale: 1, rotation: 0, duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 纸张折叠 - 像纸一样折叠的效果
  paperFold: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.3, rotationX: 90, filter: 'blur(5px)', duration: 0 },
      { opacity: 0.7, scale: 0.8, rotationX: 45, filter: 'blur(3px)', duration: 0.2, ease: 'power2.out' },
      { opacity: 0.5, scale: 0.95, rotationX: 20, filter: 'blur(4px)', duration: 0.1, ease: 'power1.in' },
      { opacity: 1, scale: 1.05, rotationX: 5, filter: 'blur(1px)', duration: 0.08, ease: 'power1.out' },
      { scale: 1, rotationX: 0, filter: 'blur(0px)', duration: 0.15, ease: 'elastic.out(1, 0.25)' }
    ]
  },

  // 泡泡升起 - 泡泡慢慢上升并破裂
  bubbleFloat: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: 150, scale: 0.2, filter: 'blur(2px) brightness(1.3)', duration: 0 },
      { opacity: 0.6, y: 80, scale: 0.6, filter: 'blur(3px) brightness(1.4)', duration: 0.25, ease: 'power1.out' },
      { opacity: 0.8, y: 30, scale: 1.2, filter: 'blur(2px) brightness(1.5)', duration: 0.15, ease: 'power1.in' },
      { opacity: 0.9, y: 10, scale: 1.05, filter: 'blur(1px) brightness(1.3)', duration: 0.08, ease: 'power1.out' },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px) brightness(1)', duration: 0.18, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 万花筒旋转 - 快速旋转的万花筒效果
  kaleidoscopeSpin: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.1, rotation: 0, filter: 'blur(10px)', duration: 0 },
      { opacity: 0.5, scale: 0.8, rotation: 120, filter: 'blur(6px)', duration: 0.12, ease: 'power2.out' },
      { opacity: 0.3, scale: 1.3, rotation: 240, filter: 'blur(4px)', duration: 0.08, ease: 'power2.in' },
      { opacity: 0.8, scale: 1.1, rotation: 300, filter: 'blur(2px)', duration: 0.06, ease: 'power1.out' },
      { opacity: 1, scale: 1, rotation: 0, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.4)' }
    ]
  },

  // 3D翻转卡片 - 像卡片翻转的效果
  cardFlip: {
    type: 'timeline',
    animations: [
      { opacity: 0, perspective: 1000, rotationY: -90, scale: 0.8, duration: 0 },
      { opacity: 0.7, rotationY: -45, scale: 0.95, duration: 0.2, ease: 'power1.inOut' },
      { opacity: 1, rotationY: 0, scale: 1.05, duration: 0.15, ease: 'power1.inOut' },
      { rotationY: 15, scale: 0.98, duration: 0.08, ease: 'power1.inOut' },
      { rotationY: 0, scale: 1, duration: 0.12, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 旋涡吸入 - 被旋涡吸入中心的效果
  vortexSuck: {
    type: 'timeline',
    animations: [
      { opacity: 0, x: 150, y: 150, scale: 0.5, rotation: 0, duration: 0 },
      { opacity: 0.6, x: 80, y: 80, scale: 0.7, rotation: 90, duration: 0.15, ease: 'power2.in' },
      { opacity: 0.8, x: 30, y: 30, scale: 0.85, rotation: 180, duration: 0.1, ease: 'power2.in' },
      { opacity: 0.9, x: 10, y: 10, scale: 0.95, rotation: 270, duration: 0.06, ease: 'power1.in' },
      { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 0.15, ease: 'elastic.out(1, 0.4)' }
    ]
  },

  // 彩虹渐变 - 彩虹色彩渐变效果
  rainbowFade: {
    type: 'timeline',
    animations: [
      { opacity: 0, filter: 'blur(15px) hue-rotate(0deg) brightness(0.8)', duration: 0 },
      { opacity: 0.7, filter: 'blur(10px) hue-rotate(60deg) brightness(1.2)', duration: 0.2, ease: 'power1.out' },
      { opacity: 0.9, filter: 'blur(6px) hue-rotate(120deg) brightness(1.4)', duration: 0.12, ease: 'power1.in' },
      { opacity: 1, filter: 'blur(3px) hue-rotate(180deg) brightness(1.3)', duration: 0.08, ease: 'power1.out' },
      { filter: 'blur(0px) hue-rotate(0deg) brightness(1)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 糖果弹跳 - 可爱的弹跳效果
  candyBounce: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: -120, scaleY: 0.4, duration: 0 },
      { opacity: 1, y: 40, scaleY: 1.6, duration: 0.35, ease: 'bounce.out' },
      { y: -20, scaleY: 0.8, duration: 0.15, ease: 'power2.in' },
      { y: 10, scaleY: 1.1, duration: 0.1, ease: 'bounce.out' },
      { y: 0, scaleY: 1, duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 水滴落下 - 水滴落下的效果
  dropletFall: {
    type: 'timeline',
    animations: [
      { opacity: 0, y: -150, scaleY: 0.2, filter: 'blur(2px)', duration: 0 },
      { opacity: 1, y: 50, scaleY: 0.8, filter: 'blur(3px)', duration: 0.3, ease: 'power2.out' },
      { y: 20, scaleY: 1.3, filter: 'blur(1px)', duration: 0.1, ease: 'power2.in' },
      { y: 5, scaleY: 0.95, filter: 'blur(0px)', duration: 0.06, ease: 'power1.out' },
      { y: 0, scaleY: 1, duration: 0.15, ease: 'elastic.out(1, 0.25)' }
    ]
  },

  // 磁盘加载 - 像磁盘旋转加载的效果
  diskSpin: {
    type: 'timeline',
    animations: [
      { opacity: 0, scale: 0.2, rotation: 0, filter: 'blur(8px)', duration: 0 },
      { opacity: 0.5, scale: 0.6, rotation: 180, filter: 'blur(5px)', duration: 0.15, ease: 'power1.out' },
      { opacity: 0.8, scale: 0.9, rotation: 360, filter: 'blur(3px)', duration: 0.12, ease: 'power1.in' },
      { opacity: 0.9, scale: 1.05, rotation: 540, filter: 'blur(1px)', duration: 0.08, ease: 'power1.out' },
      { opacity: 1, scale: 1, rotation: 720, filter: 'blur(0px)', duration: 0.2, ease: 'elastic.out(1, 0.3)' }
    ]
  },

  // 相机快门 - 像相机快门闪烁的效果
  shutterFlash: {
    type: 'timeline',
    animations: [
      { opacity: 0, scaleY: 0.01, duration: 0 },
      { opacity: 1, scaleY: 1.2, duration: 0.03, ease: 'none' },
      { opacity: 0.1, scaleY: 0.95, duration: 0.02, ease: 'none' },
      { opacity: 0.9, scaleY: 1.08, duration: 0.02, ease: 'none' },
      { opacity: 1, scaleY: 1, duration: 0.15, ease: 'elastic.out(1, 0.3)' }
    ]
  }
}

// ==================== 合并所有动画配置 ====================
export const config = {
  ...v1,  // 19个基础动画
  ...v2,  // 6个高级特效
  ...v3,  // 4个前沿特效
  ...v4,  // 5个炫酷特效
  ...v5,  // 5个极限冲击
  ...v6,  // 6个光影特效
  ...v7,  // 5个超越极限
  ...v8,  // 5个量子维度
  ...v9,  // 5个时空幻境
  ...v10, // 3个超视觉
  ...v11, // 3个爆炸破坏
  ...v12  // 22个创新动画
}

// 总计：87个核心动画（从原始205个精简，新增22个创新动画）
