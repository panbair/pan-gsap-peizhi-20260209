/**
 * 优化后的动画选项配置
 * 从原始205个动画精简到65个核心动画
 *
 * 与 config-optimized.js 完全一一对应
 */

export const animationOptions = [
  {
    label: 'V1 基础动画',
    options: [
      { value: 'fadeIn', label: '🌫 淡入' },
      { value: 'fadeOut', label: '🌫 淡出' },
      { value: 'fadeInDown', label: '⬇️ 从上淡入' },
      { value: 'fadeOutDown', label: '⬇️ 从下淡出' },
      { value: 'fadeInUp', label: '⬆️ 从下淡入' },
      { value: 'fadeOutUp', label: '⬆️ 从上淡出' },
      { value: 'fadeInLeft', label: '⬅️ 从左淡入' },
      { value: 'fadeOutLeft', label: '⬅️ 向左淡出' },
      { value: 'fadeInRight', label: '➡️ 从右淡入' },
      { value: 'fadeOutRight', label: '➡️ 向右淡出' },
      { value: 'scaleIn', label: '🔍 缩放淡入' },
      { value: 'scaleOut', label: '🔍 缩放淡出' },
      { value: 'rotateIn', label: '🔄 旋转进入' },
      { value: 'rotateOut', label: '🔄 旋转退出' },
      { value: 'bounceIn', label: '🏀 弹性进入' },
      { value: 'bounceOut', label: '🏀 弹性退出' },
      { value: 'flash', label: '⚡ 闪烁' },
      { value: 'shake', label: '📳 震动' },
      { value: 'pulse', label: '💓 脉冲' }
    ]
  },
  {
    label: 'V2 高级特效',
    options: [
      { value: 'hologram', label: '🔮 全息投影' },
      { value: 'vortexIn', label: '🌀 涡流吸入' },
      { value: 'sineWave', label: '🌊 正弦波浪' },
      { value: 'aurora', label: '🌈 极光效果' },
      { value: 'crystalRefraction', label: '💎 水晶折射' },
      { value: 'timeWarp', label: '⏰ 时间扭曲' }
    ]
  },
  {
    label: 'V3 前沿特效',
    options: [
      { value: 'wormhole', label: '🌌 虫洞穿越' },
      { value: 'warpDrive', label: '🚀 星际跃迁' },
      { value: 'quantumEntanglement', label: '⚛️ 量子纠缠' },
      { value: 'metaverse', label: '🌐 元宇宙传送' }
    ]
  },
  {
    label: 'V4 炫酷特效',
    options: [
      { value: 'neonGlitch', label: '📺 霓虹故障' },
      { value: 'particleBurst', label: '✨ 粒子爆发' },
      { value: 'liquidMorph', label: '💧 液体变形' },
      { value: 'cyberpunkRise', label: '🌆 赛博朋克崛起' },
      { value: 'voidCollapse', label: '🕳️ 虚空坍塌' }
    ]
  },
  {
    label: 'V5 极限冲击特效',
    options: [
      { value: 'hyperspaceJump', label: '🚀 超空间跳跃' },
      { value: 'dimensionCascade', label: '📉 维度级联' },
      { value: 'supernovaCore', label: '💥 超新星核心' },
      { value: 'plasmaStorm', label: '⚡ 等离子风暴' },
      { value: 'hyperDimensional', label: '🌀 超维度穿越' }
    ]
  },
  {
    label: 'V6 光影特效',
    options: [
      { value: 'neonPulsar', label: '💫 荧光脉冲' },
      { value: 'laserSweep', label: '🔦 激光扫射' },
      { value: 'haloGlow', label: '✨ 光晕辉光' },
      { value: 'glassRefraction', label: '💎 玻璃折射' },
      { value: 'stardustTwinkle', label: '⭐ 星尘闪烁' },
      { value: 'magicAura', label: '🔮 魔法光辉' }
    ]
  },
  {
    label: 'V7 超越极限',
    options: [
      { value: 'springEntrance', label: '🎯 弹簧进场' },
      { value: 'staggerWave', label: '🌊 交错波浪' },
      { value: 'elastic3DFold', label: '📦 3D弹性折叠' },
      { value: 'elasticMorph', label: '🔷 弹性变形' },
      { value: 'elasticSlide', label: '➡️ 弹性滑入' }
    ]
  },
  {
    label: 'V8 量子维度',
    options: [
      { value: 'quantumMaterialize', label: '⚛️ 量子实体化' },
      { value: 'dimensionalPhase', label: '🌀 维度相位' },
      { value: 'neuroPulse', label: '🧠 神经脉冲' },
      { value: 'resonanceField', label: '🌊 共振场域' },
      { value: 'crystalMatrix', label: '💎 晶体矩阵' }
    ]
  },
  {
    label: 'V9 时空幻境',
    options: [
      { value: 'timeDilation', label: '⏳ 时间膨胀' },
      { value: 'spatialFold', label: '🌀 空间折叠' },
      { value: 'voidConstruct', label: '🕳️ 虚空构建' },
      { value: 'chaosTheory', label: '🎲 混沌理论' },
      { value: 'multiverse', label: '🌐 多元宇宙' }
    ]
  },
  {
    label: 'V10 超视觉系列',
    options: [
      { value: 'pixelGlitch', label: '📺 像素故障' },
      { value: 'scanlineDistort', label: '📺 扫描线扭曲' },
      { value: 'waveDistortion', label: '🌊 波形失真' }
    ]
  },
  {
    label: 'V11 爆炸破坏特效',
    options: [
      { value: 'nuclearExplosion', label: '💥 核爆震撼' },
      { value: 'glassShatter', label: '🔮 玻璃碎裂' },
      { value: 'crystalExplosion', label: '💎 晶体爆炸' }
    ]
  },
  {
    label: 'V12 创新动画',
    options: [
      { value: 'rippleExpand', label: '🌊 水波纹扩散' },
      { value: 'auroraDance', label: '🌈 极光飘舞' },
      { value: 'magneticPull', label: '🧲 磁场吸引' },
      { value: 'starTwinkle', label: '⭐ 星光闪烁' },
      { value: 'meteorFall', label: '☄️ 流星划过' },
      { value: 'dnaRise', label: '🧬 DNA螺旋' },
      { value: 'flameIgnite', label: '🔥 火焰燃烧' },
      { value: 'frostForm', label: '❄️ 冰霜凝结' },
      { value: 'carouselSpin', label: '🎠 旋转木马' },
      { value: 'springJump', label: '🦘 弹簧跳入' },
      { value: 'energyCharge', label: '⚡ 能量充能' },
      { value: 'dreamFloat', label: '💭 梦境漂浮' },
      { value: 'lightningStrike', label: '⚡ 闪电闪现' },
      { value: 'prismRefract', label: '🔮 棱镜折射' },
      { value: 'balloonRise', label: '🎈 气球升空' },
      { value: 'paperFold', label: '📄 纸张折叠' },
      { value: 'bubbleFloat', label: '🫧 泡泡升起' },
      { value: 'kaleidoscopeSpin', label: '🔮 万花筒旋转' },
      { value: 'cardFlip', label: '🃏 3D翻转卡片' },
      { value: 'vortexSuck', label: '🌀 旋涡吸入' },
      { value: 'rainbowFade', label: '🌈 彩虹渐变' },
      { value: 'candyBounce', label: '🍬 糖果弹跳' },
      { value: 'dropletFall', label: '💧 水滴落下' },
      { value: 'diskSpin', label: '💿 磁盘加载' },
      { value: 'shutterFlash', label: '📸 相机快门' }
    ]
  }
]

// 总计：65个核心动画选项（与config-optimized.js完全对应）
